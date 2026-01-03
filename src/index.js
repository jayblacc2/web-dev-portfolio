import header from "./modules/loadHeader";
import footer from "./modules/loadFooter";
import loadSection from "./modules/loadSection";
import "./style/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  initializeProgressBars,
  showFallbackMessage,
  createErrorFallback,
} from "./utils/utils";
import logger from "./utils/logger";

// Global error handlers for production reliability
window.addEventListener("error", (event) => {
  logger.error("Global error caught", event.error, {
    component: "window",
    tags: { type: "uncaught-error" },
  });
  showFallbackMessage("Something went wrong. Please refresh the page.");
});

window.addEventListener("unhandledrejection", (event) => {
  logger.error("Unhandled promise rejection", event.reason, {
    component: "window",
    tags: { type: "unhandled-rejection" },
  });
  event.preventDefault();
  showFallbackMessage("An unexpected error occurred. Please try again.");
});

function app() {
  try {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      delay: 0,
      // Remove the 'disable' option to enable animations on mobile devices
    });

    const app = document.getElementById("app");
    if (!app) {
      throw new Error("App container not found");
    }

    let pageHeader, pageSection, pageFooter;

    try {
      const headerInstance = header();
      pageHeader = headerInstance.element;
    } catch (error) {
      console.error("Failed to load header:", error);
      pageHeader = createErrorFallback("header");
    }

    try {
      pageSection = loadSection();
    } catch (error) {
      pageSection = createErrorFallback("sections");
    }

    try {
      pageFooter = footer();
    } catch (error) {
      console.error("Failed to load footer:", error);
      pageFooter = createErrorFallback("footer");
    }

    app.append(pageHeader, pageSection, pageFooter);

    try {
      initializeProgressBars();
    } catch (error) {
      console.error("Failed to initialize progress bars:", error);
    }

    return app;
  } catch (error) {
    console.error("Critical app initialization error:", error);
    showFallbackMessage(
      "Failed to load the application. Please refresh the page."
    );
    return null;
  }
}

// Error boundary for section loading

app();
