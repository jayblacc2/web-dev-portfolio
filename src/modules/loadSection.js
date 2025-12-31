import homeSection from "../sections/home";
import aboutSection from "../sections/about";
import contactSection from "../sections/contact";
import skillSection from "../sections/skill";
import projectSection from "../sections/projects";
import { createElement } from "../utils/utils";
import config from "../config";

function loadSection() {
  const content = createElement("main", { id: "content", class: "content" });
  const sections = [
    { name: 'home', loader: homeSection },
    { name: 'about', loader: aboutSection },
    { name: 'skill', loader: skillSection },
    { name: 'project', loader: projectSection },
    { name: 'contact', loader: contactSection },
  ];

  sections.forEach(({ name, loader }) => {
    try {
      const section = loader();
      content.append(section);
    } catch (error) {
      console.error(`Failed to load ${name} section:`, error);
      if (config.isProduction) {
        // In production, create a fallback section
        const fallbackSection = createFallbackSection(name);
        content.append(fallbackSection);
      } else {
        // In development, re-throw to see the error
        throw error;
      }
    }
  });

  return content;
}

// Create a fallback section when loading fails
function createFallbackSection(sectionName) {
  const section = createElement("section", {
    class: "hero fallback-section",
    id: sectionName,
    style: "display: none"
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
