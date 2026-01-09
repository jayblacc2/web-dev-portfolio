import { createHtmlElement, selectAll, createElement } from "../utils/utils";
import { ICONS } from "../utils/constant";

// SVG icons as constants (reusable)

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
    "<Jayblaq />"
  );

  const nav = createHtmlElement("nav", {
    class: "nav__menu",
    "aria-label": "Main navigation",
  });

  const navItems = [
    { text: "Home", path: "/", isActive: true },
    { text: "About", path: "/about" },
    { text: "Skills", path: "/skills" },
    { text: "Projects", path: "/projects" },
    { text: "Contact", path: "/contact" },
  ];

  const navButtons = navItems.map(({ text, path, isActive }) =>
    createButton(text, path, isActive)
  );

  const hireMeLink = createButton(
    "Contact Me",
    "/contact",
    false,
    "nav__link hire-me-btn"
  );

  nav.append(...navButtons);
  const mobileNav = mobileMenu(navItems);

  const burgerMenu = createHtmlElement("button", {
    class: "burger-menu",
    id: "burger-menu",
    "aria-label": "Toggle mobile menu",
    "aria-expanded": "false",
  });

  burgerMenu.innerHTML = ICONS.hamburger;

  // Cache mobile menu reference for better performance
  let cachedMobileMenu = null;

  const getMobileMenu = () => {
    if (!cachedMobileMenu) {
      cachedMobileMenu = document.querySelector(".mobile__menu");
    }
    return cachedMobileMenu;
  };

  const updateBurgerMenuState = (isExpanded) => {
    burgerMenu.setAttribute("aria-expanded", isExpanded.toString());
    burgerMenu.innerHTML = isExpanded ? ICONS.close : ICONS.hamburger;

    const mobileMenu = getMobileMenu();
    if (mobileMenu) {
      mobileMenu.classList.toggle("open", isExpanded);
    }
    document.body.classList.toggle("menu-open", isExpanded);

    if (isExpanded) {
      setTimeout(
        () => document.addEventListener("click", handleOutsideClick),
        0
      );
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  // Click outside handler
  const handleOutsideClick = (e) => {
    const mobileMenu = getMobileMenu();
    if (!mobileMenu || !e.target) return;

    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedBurgerButton = burgerMenu.contains(e.target);

    if (!clickedInsideMenu && !clickedBurgerButton) {
      updateBurgerMenuState(false);
      burgerMenu.focus();
    }
  };

  burgerMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    const mobileMenu = getMobileMenu();
    if (!mobileMenu) return;

    const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
    updateBurgerMenuState(!isExpanded);

    // Focus first menu item when opening
    if (!isExpanded) {
      const firstLink = mobileMenu.querySelector("a");
      if (firstLink) setTimeout(() => firstLink.focus(), 100);
    }
  });

  // Escape key to close menu (Enter/Space handled natively by button)
  burgerMenu.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        updateBurgerMenuState(false);
        burgerMenu.focus();
      }
    }
  });

  header.append(mobileNav);
  header.append(brand, nav, hireMeLink, burgerMenu);

  return {
    element: header,
    cleanup: () => document.removeEventListener("click", handleOutsideClick),
  };
}

function mobileMenu(navItems) {
  const nav = createHtmlElement("nav", { class: "mobile__menu nav__menu" });

  const navButtons = navItems.map(({ text, path, isActive }) =>
    createButton(text, path, isActive)
  );

  nav.append(...navButtons);
  return nav;
}

// Create navigation link with clean URLs
function createButton(
  text,
  path,
  isActive = false,
  className = "btn nav__btn"
) {
  const link = createHtmlElement("a", {
    class: className,
    href: path,
    role: "menuitem",
    "aria-current": isActive ? "page" : "false",
  });

  link.textContent = text;
  if (isActive) link.classList.add("active");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionName = path === "/" ? "home" : path.substring(1);

    history.pushState({ section: sectionName }, "", path);
    showSection(sectionName);
    setActiveLink(path);
  });

  return link;
}

// Show/hide sections based on navigation
export function showSection(sectionName) {
  const sections = selectAll(".hero");

  sections.forEach((section) => {
    const shouldShow = section.id === sectionName.toLowerCase();
    section.classList.toggle("active-section", shouldShow);
    section.style.display = shouldShow ? "flex" : "none";

    // Trigger section lifecycle callbacks
    if (shouldShow && section.sectionInitCallback) {
      section.sectionInitCallback();
    } else if (!shouldShow && section.sectionCleanupCallback) {
      section.sectionCleanupCallback();
    }
  });

  // Close mobile menu on navigation
  closeMobileMenu();
}

// Helper to close mobile menu
function closeMobileMenu() {
  const mobileMenu = document.querySelector(".mobile__menu");
  const burgerMenuBtn = document.getElementById("burger-menu");

  if (mobileMenu?.classList.contains("open") && burgerMenuBtn) {
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    burgerMenuBtn.setAttribute("aria-expanded", "false");
    burgerMenuBtn.innerHTML = ICONS.hamburger;
  }
}

// Update active state for all navigation links
export function setActiveLink(path) {
  document.querySelectorAll(".nav__btn, .nav__link").forEach((link) => {
    const isActive = link.getAttribute("href") === path;
    link.classList.toggle("active", isActive);
    link.setAttribute("aria-current", isActive ? "page" : "false");
  });
}

// Get section name from URL path
const getSectionFromPath = () => {
  const path = window.location.pathname;
  return path === "/" || path === "" ? "home" : path.substring(1);
};

// Get URL path from section name
const getPathFromSection = (section) =>
  section === "home" ? "/" : `/${section}`;

// Handle route changes (initial load and browser back/forward)
const handleRouteChange = () => {
  const section = getSectionFromPath();
  showSection(section);
  setActiveLink(getPathFromSection(section));
};

window.addEventListener("DOMContentLoaded", handleRouteChange);
window.addEventListener("popstate", handleRouteChange);

export default header;
