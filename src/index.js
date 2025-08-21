import header from "./modules/loadHeader";
import footer from "./modules/loadFooter";
import loadSection from "./modules/loadSection";
import "./style/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { initializeProgressBars } from "./utils/utils";

function app() {
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
  let pageHeader = header(),
    pageSection = loadSection(),
    pageFooter = footer();

  app.append(pageHeader, pageSection, pageFooter);
  initializeProgressBars();

  return app;
}

app();
