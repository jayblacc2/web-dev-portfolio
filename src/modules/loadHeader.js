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

  //nav buttons - Remove # from href
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

  // const burgerMenu = createElement("button", {
  //   class: "burger-menu",
  //   id: "burger-menu",
  //   "aria-label": "Toggle mobile menu",
  //   "aria-expanded": "false",
  // });

  // SVG icons for hamburger and close
  const hamburgerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>`;

  const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>`;

  const burgerMenu = createHtmlElement("button", {
    class: "burger-menu",
    id: "burger-menu",
    "aria-label": "Toggle mobile menu",
    "aria-expanded": "false",
    role: "button",
  });

  /**
   * Creates an enhanced burger menu button with improved error handling,
   * performance optimization, and better accessibility
   * @returns {HTMLButtonElement} The configured burger menu button
   */
  const createBurgerMenu = () => {
    // Create button with comprehensive accessibility attributes
    const menuButton = createHtmlElement("button", {
      class: "burger-menu",
      id: "burger-menu",
      type: "button",
      role: "button",
      "aria-label": "Toggle mobile menu",
      "aria-expanded": "false",
      "aria-controls": "mobile-menu",
      "aria-haspopup": "true",
    });

    // Set initial state with hamburger icon
    // menuButton.innerHTML = hamburgerIcon;

    // Cache DOM elements for better performance
    let mobileMenu = null;
    let isInitialized = false;

    /**
     * Initialize cached DOM references
     * @returns {boolean} Success status of initialization
     */
    const initializeDOMReferences = () => {
      if (isInitialized) return true;

      mobileMenu = document.querySelector(".mobile__menu");

      if (!mobileMenu) {
        console.warn(
          "Mobile menu element not found. Burger menu functionality may be limited."
        );
        return false;
      }

      // Add id to mobile menu for better accessibility
      if (!mobileMenu.id) {
        mobileMenu.id = "mobile-menu";
      }

      isInitialized = true;
      return true;
    };

    /**
     * Updates the visual state of the burger menu
     * @param {boolean} isExpanded - Whether the menu is expanded
     */
    const updateMenuState = (isExpanded) => {
      // Update ARIA attributes
      menuButton.setAttribute("aria-expanded", isExpanded.toString());

      // Update icon with smooth transition
      menuButton.innerHTML = isExpanded ? closeIcon : hamburgerIcon;

      // Update menu and body classes
      if (mobileMenu) {
        mobileMenu.classList.toggle("open", isExpanded);
      }
      document.body.classList.toggle("menu-open", isExpanded);

      // Announce state change to screen readers
      const announcement = isExpanded ? "Menu opened" : "Menu closed";
      announceToScreenReader(announcement);
    };

    /**
     * Handles the burger menu click event
     * @param {Event} event - The click event
     */
    const handleMenuToggle = (event) => {
      event.preventDefault();
      event.stopPropagation();

      // Initialize DOM references if not already done
      if (!initializeDOMReferences()) {
        console.error(
          "Failed to initialize burger menu. DOM elements not found."
        );
        return;
      }

      try {
        const currentState =
          menuButton.getAttribute("aria-expanded") === "true";
        const newState = !currentState;

        updateMenuState(newState);

        // Focus management for accessibility
        if (newState && mobileMenu) {
          // Focus first focusable element in mobile menu
          const firstFocusable = mobileMenu.querySelector(
            'a, button, [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusable) {
            setTimeout(() => firstFocusable.focus(), 100);
          }
        }
      } catch (error) {
        console.error("Error toggling mobile menu:", error);
      }
    };

    /**
     * Handles keyboard navigation for the burger menu
     * @param {KeyboardEvent} event - The keyboard event
     */
    const handleKeyDown = (event) => {
      if (event.key === "Enter" || event.key === " ") {
        handleMenuToggle(event);
      } else if (event.key === "Escape") {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        if (isExpanded) {
          updateMenuState(false);
          menuButton.focus();
        }
      }
    };

    // Add event listeners with proper error handling
    menuButton.addEventListener("click", handleMenuToggle);
    menuButton.addEventListener("keydown", handleKeyDown);

    // Initialize DOM references when button is created
    // Use setTimeout to ensure DOM is ready
    setTimeout(initializeDOMReferences, 0);

    return menuButton;
  };

  /**
   * Announces messages to screen readers
   * @param {string} message - Message to announce
   */
  const announceToScreenReader = (message) => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `;

    document.body.appendChild(announcement);
    announcement.textContent = message;

    // Remove after announcement
    setTimeout(() => {
      if (announcement.parentNode) {
        announcement.parentNode.removeChild(announcement);
      }
    }, 1000);
  };

  // Remove the old burger function call since we're using the existing burgerMenu implementation
  // console.log(createBurgerMenu());

  // Enhanced burger menu implementation
  burgerMenu.innerHTML = hamburgerIcon;

  // Cache mobile menu reference for better performance
  let cachedMobileMenu = null;

  const getMobileMenu = () => {
    if (!cachedMobileMenu) {
      cachedMobileMenu = document.querySelector(".mobile__menu");
      if (cachedMobileMenu && !cachedMobileMenu.id) {
        cachedMobileMenu.id = "mobile-menu";
      }
    }
    return cachedMobileMenu;
  };

  const updateBurgerMenuState = (isExpanded) => {
    burgerMenu.setAttribute("aria-expanded", isExpanded.toString());
    burgerMenu.innerHTML = isExpanded ? closeIcon : hamburgerIcon;

    const mobileMenu = getMobileMenu();
    if (mobileMenu) {
      mobileMenu.classList.toggle("open", isExpanded);
    }
    document.body.classList.toggle("menu-open", isExpanded);
  };

  burgerMenu.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      const mobileMenu = getMobileMenu();
      if (!mobileMenu) {
        console.warn("Mobile menu not found");
        return;
      }

      const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
      updateBurgerMenuState(!isExpanded);

      // Focus management for accessibility
      if (!isExpanded) {
        const firstFocusable = mobileMenu.querySelector(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) {
          setTimeout(() => firstFocusable.focus(), 100);
        }
      }
    } catch (error) {
      console.error("Error toggling mobile menu:", error);
    }
  });

  // Add keyboard support
  burgerMenu.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      burgerMenu.click();
    } else if (event.key === "Escape") {
      const isExpanded = burgerMenu.getAttribute("aria-expanded") === "true";
      if (isExpanded) {
        updateBurgerMenuState(false);
        burgerMenu.focus();
      }
    }
  });

  header.append(mobileNav);
  header.append(brand, nav, hireMeLink, burgerMenu);

  // Enhanced click outside handler with error handling
  document.addEventListener("click", (e) => {
    try {
      const mobileMenu = getMobileMenu();
      const burgerMenuBtn = document.getElementById("burger-menu");

      if (!mobileMenu || !burgerMenuBtn || !e.target) {
        return;
      }

      const isMenuOpen = mobileMenu.classList.contains("open");
      const clickedInsideMenu = mobileMenu.contains(e.target);
      const clickedBurgerButton = burgerMenuBtn.contains(e.target);

      if (isMenuOpen && !clickedInsideMenu && !clickedBurgerButton) {
        updateBurgerMenuState(false);
        // Return focus to burger button for accessibility
        burgerMenuBtn.focus();
      }
    } catch (error) {
      console.error("Error handling outside click:", error);
    }
  });

  // Setup observers and keyboard navigation after header is created
  setupKeyboardNavigation();

  return header;
}

function mobileMenu() {
  const nav = createHtmlElement("nav", { class: "mobile__menu nav__menu" });

  //nav buttons - Remove # from href
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

//function to show sections
export function showSection(sectionName) {
  const sections = selectAll(".hero");
  sections.forEach((section) => {
    const shouldShow = section.id === sectionName.toLowerCase();
    section.classList.toggle("active-section", shouldShow);
    section.style.display = shouldShow ? "flex" : "none";

    // Close mobile menu when section changes with enhanced error handling
    try {
      const mobileMenu = document.querySelector(".mobile__menu");
      const burgerMenuBtn = document.getElementById("burger-menu");

      if (
        mobileMenu &&
        burgerMenuBtn &&
        mobileMenu.classList.contains("open")
      ) {
        mobileMenu.classList.remove("open");
        document.body.classList.remove("menu-open");
        burgerMenuBtn.setAttribute("aria-expanded", "false");
        // Reset burger icon to hamburger when menu closes
        burgerMenuBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>`;
      }
    } catch (error) {
      console.error("Error closing mobile menu on section change:", error);
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
  event.preventDefault();
  const currentSection = getSectionFromPath();
  const currentPath = getPathFromSection(currentSection);

  showSection(currentSection);
  setActiveLink(currentPath);
});

export default header;
