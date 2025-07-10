import { createHtmlElement, selectAll, createElement } from "../utils/utils";

//header creation
function header() {
  const header = createHtmlElement("header", {
    class: "header",
    ["data-aos"]: "fade-down",
    role: "banner",
  });

  const brand = createElement(
    "div",
    {
      class: "brand",
      role: "heading",
      "aria-level": "1",
    },
    "<Jayblacc />"
  );

  const nav = createHtmlElement("nav", {
    class: "nav__menu",
    role: "navigation",
    "aria-label": "Main navigation",
  });

  //nav buttons - Remove # from hrefs
  const homeButton = createButton("Home", "/", true);
  const aboutButton = createButton("About", "/about");
  const contactButton = createButton("Contact", "/contact");
  const skillButton = createButton("Skills", "/skills");
  const projectButton = createButton("Projects", "/projects");

  const hireMeLink = createButton(
    "Hire Me",
    "/contact",
    false,
    "nav__link",
    "nav__link"
  );

  nav.append(
    ...[homeButton, aboutButton, skillButton, projectButton, contactButton]
  );
  const mobileNav = mobileMenu();
  const burgerMenu = createElement("button", {
    class: "burger-menu",
    id: "burger-menu",
    "aria-label": "Toggle mobile menu",
    "aria-expanded": "false",
  });
  burgerMenu.innerHTML = "☰";

  burgerMenu.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile__menu");
    const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
    burgerMenu.setAttribute("aria-expanded", !isExpanded);
    mobileMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  });

  header.append(mobileNav);
  header.append(brand, nav, hireMeLink, burgerMenu);

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    const mobileMenu = document.querySelector(".mobile__menu");
    const burgerMenuBtn = document.getElementById("burger-menu");
    if (
      mobileMenu.classList.contains("open") &&
      !mobileMenu.contains(e.target) &&
      !burgerMenuBtn.contains(e.target)
    ) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      burgerMenuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Setup observers and keyboard navigation after header is created
  setupKeyboardNavigation();

  return header;
}

function mobileMenu() {
  const nav = createHtmlElement("nav", { class: "mobile__menu nav__menu" });

  //nav buttons - Remove # from hrefs
  const homeButton = createButton("Home", "/", true);
  const aboutButton = createButton("About", "/about");
  const contactButton = createButton("Contact", "/contact");
  const skillButton = createButton("Skills", "/skills");
  const projectButton = createButton("Projects", "/projects");

  nav.append(
    ...[homeButton, aboutButton, skillButton, projectButton, contactButton]
  );
  return nav;
}

// Modified createButton function to use clean URLs without hash
function createButton(
  text,
  path,
  isActive = false,
  className = "btn nav__btn",
  id = ""
) {
  const link = createHtmlElement("a", {
    class: className,
    href: path,
    id: id || null,
    role: "menuitem",
    tabindex: "0",
    "aria-current": isActive ? "page" : "false",
  });
  link.textContent = text;
  if (isActive) {
    link.classList.add("active");
  }

  link.addEventListener("click", (e) => {
    e.preventDefault();
    
    // Convert path to section name
    const sectionName = path === "/" ? "home" : path.substring(1);
    
    // Use pushState to update URL without hash
    history.pushState({ section: sectionName }, "", path);
    
    showSection(sectionName);
    setActiveLink(path);

    // Update mobile menu links
    const allLinks = document.querySelectorAll(".nav__btn, .nav__link");
    allLinks.forEach((link) => {
      if (link.getAttribute("href") === path) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      } else {
        link.classList.remove("active");
        link.setAttribute("aria-current", "false");
      }
    });
  });

  return link;
}

// Add keyboard navigation
function setupKeyboardNavigation() {
  const links = document.querySelectorAll(".nav__btn, .nav__link");
  links.forEach((link) => {
    link.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        link.click();
      }
    });
  });
}

// Loading indicator
function showLoadingIndicator(sectionName) {
  const section = document.getElementById(sectionName);
  if (section) {
    section.classList.add("loading");
    setTimeout(() => section.classList.remove("loading"), 300);
  }
}

//function to show sections
export function showSection(sectionName) {
  const sections = selectAll(".hero");
  sections.forEach((section) => {
    const shouldShow = section.id === sectionName.toLowerCase();
    section.classList.toggle("active-section", shouldShow);
    section.style.display = shouldShow ? "flex" : "none";

    // Close mobile menu when section changes
    const mobileMenu = document.querySelector(".mobile__menu");
    const burgerMenu = document.getElementById("burger-menu");
    if (mobileMenu && mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      document.body.classList.remove("menu-open");
      burgerMenu.setAttribute("aria-expanded", "false");
    }
  });
}

// Function to set active link based on path
export function setActiveLink(path) {
  const allLinks = document.querySelectorAll(".nav__btn, .nav__link");
  allLinks.forEach((link) => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.setAttribute("aria-current", "false");
    }
  });
}

// Helper function to get section from current path
function getSectionFromPath() {
  const path = window.location.pathname;
  if (path === "/" || path === "") {
    return "home";
  }
  return path.substring(1); // Remove leading slash
}

// Helper function to get path from section
function getPathFromSection(section) {
  return section === "home" ? "/" : `/${section}`;
}

// Initial setup and popstate event handling
window.addEventListener("DOMContentLoaded", () => {
  const currentSection = getSectionFromPath();
  const currentPath = getPathFromSection(currentSection);
  
  showSection(currentSection);
  setActiveLink(currentPath);
});

window.addEventListener("popstate", (event) => {
  const currentSection = getSectionFromPath();
  const currentPath = getPathFromSection(currentSection);
  
  showSection(currentSection);
  setActiveLink(currentPath);
});

export default header;
