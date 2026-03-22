// Home section loaded eagerly (above the fold)
import homeSection from "../sections/home";
import { createElement } from "../utils/utils";

// Lazy load non-critical sections for better initial load performance
const lazySections = {
  about: () => import(/* webpackChunkName: "about" */ "../sections/about"),
  skill: () => import(/* webpackChunkName: "skill" */ "../sections/skill"),
  project: () =>
    import(/* webpackChunkName: "projects" */ "../sections/projects"),
  contact: () =>
    import(/* webpackChunkName: "contact" */ "../sections/contact"),
};

// Cache for loaded sections
const loadedSections = new Map();

/**
 * Dynamically loads a section module
 * @param {string} name - Section name
 * @returns {Promise<HTMLElement>} - The section element
 */
async function loadLazySection(name) {
  if (loadedSections.has(name)) {
    return loadedSections.get(name);
  }

  try {
    const module = await lazySections[name]();
    const sectionFn = module.default;
    const section = sectionFn();
    loadedSections.set(name, section);
    return section;
  } catch (error) {
    console.error(`Failed to lazy load ${name} section:`, error);
    return createFallbackSection(name);
  }
}

/**
 * Creates a placeholder for lazy-loaded sections
 */
function createSectionPlaceholder(name) {
  const placeholder = createElement("section", {
    class: "hero section-placeholder",
    id: name === "skill" ? "skills" : name === "project" ? "projects" : name,
    style: "display:none",
    "data-lazy": name,
  });

  placeholder.innerHTML = `
    <div class="hero__content">
      <div class="section-loading" role="status" aria-label="Loading ${name} section">
        <div class="loading-spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  `;

  return placeholder;
}

/**
 * Replaces placeholder with actual section content
 */
async function hydratePlaceholder(placeholder) {
  const name = placeholder.dataset.lazy;
  if (!name || !lazySections[name]) return;

  try {
    const section = await loadLazySection(name);

    // Copy display state from placeholder
    const wasVisible = placeholder.style.display !== "none";

    // Replace placeholder with actual section
    placeholder.replaceWith(section);

    // Restore visibility state
    if (wasVisible) {
      section.style.display = "flex";
      section.classList.add("active-section");
      // Trigger section init callback if exists
      if (section.sectionInitCallback) {
        section.sectionInitCallback();
      }
    }
  } catch (error) {
    console.error(`Failed to hydrate ${name} section:`, error);
  }
}

/**
 * Preloads a section in the background
 */
export function preloadSection(name) {
  if (lazySections[name] && !loadedSections.has(name)) {
    loadLazySection(name);
  }
}

function loadSection() {
  const content = createElement("main", {
    id: "content",
    class: "content",
    role: "main",
  });

  // Load home section eagerly (critical above-the-fold content)
  try {
    const home = homeSection();
    content.append(home);
  } catch (error) {
    console.error("Failed to load home section:", error);
    content.append(createFallbackSection("home"));
  }

  // Create placeholders for lazy sections
  const lazyOrder = ["about", "skill", "project", "contact"];
  lazyOrder.forEach((name) => {
    const placeholder = createSectionPlaceholder(name);
    content.append(placeholder);
  });

  // Hydrate placeholders after initial render (idle callback or timeout)
  if ("requestIdleCallback" in window) {
    requestIdleCallback(() => hydrateAllPlaceholders(content), {
      timeout: 2000,
    });
  } else {
    setTimeout(() => hydrateAllPlaceholders(content), 100);
  }

  return content;
}

/**
 * Hydrates all section placeholders
 */
async function hydrateAllPlaceholders(content) {
  const placeholders = content.querySelectorAll("[data-lazy]");

  // Hydrate sections sequentially to avoid overwhelming the browser
  for (const placeholder of placeholders) {
    await hydratePlaceholder(placeholder);
  }
}

// Create a fallback section when loading fails
function createFallbackSection(sectionName) {
  const section = createElement("section", {
    class: "hero fallback-section",
    id: sectionName,
    style: "display: none",
  });

  section.innerHTML = `
    <div class="hero__content">
      <h1 class="main__title">
        <span class="main__title-text">${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} Section</span>
      </h1>
      <p class="sub__title">
        This section is currently unavailable. Please try refreshing the page or contact me directly.
      </p>
      <div class="fallback-actions">
        <button onclick="location.reload()" class="btn">Reload Page</button>
        <a href="#contact" class="btn">Contact Me</a>
      </div>
    </div>
  `;

  return section;
}

export default loadSection;
