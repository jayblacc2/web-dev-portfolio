import header from "./modules/loadHeader";
import footer from "./modules/loadFooter";
import loadSection from "./modules/loadSection";
import "./style/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { initializeProgressBars } from "./utils/utils";

// Global error handlers for production reliability
window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
  // Send to error tracking service if available
  if (window.Sentry) {
    window.Sentry.captureException(event.error);
  }
  // Show user-friendly fallback message
  showFallbackMessage("Something went wrong. Please refresh the page.");
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
  event.preventDefault(); // Prevent console error
  if (window.Sentry) {
    window.Sentry.captureException(event.reason);
  }
  showFallbackMessage("An unexpected error occurred. Please try again.");
});

// Fallback error message function
function showFallbackMessage(message) {
  // Create a simple error overlay
  const errorOverlay = document.createElement("div");
  errorOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  `;
  errorOverlay.innerHTML = `
    <div>
      <h2>⚠️ Oops!</h2>
      <p>${message}</p>
      <button onclick="location.reload()" style="
        padding: 10px 20px;
        background: #5462ffe4;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
      ">Refresh Page</button>
    </div>
  `;
  document.body.appendChild(errorOverlay);
}

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
      pageHeader = header();
    } catch (error) {
      console.error("Failed to load header:", error);
      pageHeader = createErrorSection("header");
    }

    try {
      pageSection = loadSection();
    } catch (error) {
      console.error("Failed to load sections:", error);
      pageSection = createErrorSection("sections");
    }

    try {
      pageFooter = footer();
    } catch (error) {
      console.error("Failed to load footer:", error);
      pageFooter = createErrorSection("footer");
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
function createErrorSection(sectionName) {
  const errorDiv = document.createElement("div");
  errorDiv.style.cssText = `
    padding: 20px;
    text-align: center;
    border-radius: 5px;
    margin: 10px;
    height: 80vh;
    display: flex;
    color: red;
    flex-direction: column;
    justify-content: center;
  `;
  errorDiv.innerHTML = `
    <h3><i class="fas fa-exclamation-triangle"></i> Something went wrong</h3>
    <p>Failed to load the section.</p>
    
  `;
  return errorDiv;
}

app();
