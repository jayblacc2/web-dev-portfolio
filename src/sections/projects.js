import { createElement, createHtmlElement } from "../utils/utils";
import { projectsData as datas } from "../utils/variable";

export default function projectSection() {
  const hero = createHtmlElement("section", {
    class: "hero project__section",
    id: "projects",
    style: "display:none",
    role: "region",
    "aria-label": "Projects Portfolio",
  });

  // Create main content wrapper with two-column layout
  const mainContent = createElement("div", {
    class: "projects-main-content",
  });

  // Left side - Title and subtitle section
  const headerSection = createElement("div", {
    class: "projects-header",
    role: "banner",
    "aria-label": "Projects section introduction",
  });

  const title = createElement("h1", {
    class: "projects-title",
  });
  title.innerHTML = "My <span>Projects</span>";

  const subtitle = createElement("p", {
    class: "projects-subtitle",
  });
  subtitle.textContent =
    "Explore a collection of innovative web applications, interactive experiences, and creative solutions that showcase modern development practices and cutting-edge technologies.";

  const stats = createElement("div", {
    class: "projects-stats",
    "aria-label": "Project statistics",
  });

  const statsData = [
    { number: `${datas.length}`, label: "Projects" },
    { number: "8", label: "Technologies" },
    { number: "100%", label: "Responsive" },
  ];

  statsData.forEach((stat, index) => {
    const statItem = createElement("div", {
      class: "stat-item",
      style: `animation-delay: ${index * 0.1 + 0.3}s`,
    });

    const statNumber = createElement("span", {
      class: "stat-number",
    });
    statNumber.textContent = stat.number;

    const statLabel = createElement("span", {
      class: "stat-label",
    });
    statLabel.textContent = stat.label;

    statItem.appendChild(statNumber);
    statItem.appendChild(statLabel);
    stats.appendChild(statItem);
  });

  headerSection.appendChild(title);
  headerSection.appendChild(subtitle);
  headerSection.appendChild(stats);

  // Right side - Projects grid with pagination
  const projectsWrapper = createElement("div", {
    class: "projects-wrapper",
  });

  const projectsContainer = createElement("div", {
    class: "projects-container",
    role: "list",
    "aria-label": "List of Projects",
  });

  // Pagination setup
  const itemsPerPage = 4;
  let currentPage = 1;
  const totalPages = Math.ceil(datas.length / itemsPerPage);

  // Function to render projects for current page
  function renderProjects(page) {
    projectsContainer.innerHTML = "";

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProjects = datas.slice(startIndex, endIndex);

    currentProjects.forEach((item, index) => {
      const globalIndex = startIndex + index;
      const projectCard = createElement("div", {
        class: `project-card ${item.type || "bg1"}`,
        role: "listitem",
        style: `animation-delay: ${index * 0.15 + 0.2}s`,
        tabindex: "0",
        "aria-label": `${item.label} project`,
      });

      if (item.image) {
        projectCard.style.backgroundImage = `url(${item.image})`;
      }

      const contentWrapper = createElement("div", { class: "content-wrapper" });

      const h2 = createElement("h2", {
        class: "project-title",
        id: `project-title-${globalIndex}`,
      });
      h2.innerHTML = item.value;

      const p = createElement(
        "p",
        {
          class: "project-label",
          id: `project-desc-${globalIndex}`,
        },
        item.label
      );

      const overlay = createElement("div", {
        class: "overlay",
      });
      contentWrapper.append(h2, p);
      projectCard.append(contentWrapper, overlay);

      projectCard.addEventListener("click", () => {
        const modal = new ProjectModal(item);
        modal.open();
      });

      projectCard.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const modal = new ProjectModal(item);
          modal.open();
        }
      });

      projectsContainer.appendChild(projectCard);
    });

    // Update pagination buttons state
    updatePaginationButtons();
  }

  // Create pagination controls
  const paginationContainer = createElement("div", {
    class: "pagination-container",
    role: "navigation",
    "aria-label": "Projects pagination",
  });

  // Create wrapper for the three pagination elements
  const paginationWrapper = createElement("div", {
    class: "pagination-wrapper",
  });

  const prevButton = createElement("button", {
    class: "pagination-btn pagination-prev",
    "aria-label": "Previous page",
    type: "button",
  });
  prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';

  const pageInfo = createElement("span", {
    class: "pagination-info",
    "aria-live": "polite",
  });

  const nextButton = createElement("button", {
    class: "pagination-btn pagination-next",
    "aria-label": "Next page",
    type: "button",
  });
  nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';

  // Create buttons wrapper for mobile layout
  const buttonsWrapper = createElement("div", {
    class: "pagination-buttons",
  });
  buttonsWrapper.append(prevButton, nextButton);

  // Function to update pagination buttons
  function updatePaginationButtons() {
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    prevButton.classList.toggle("disabled", currentPage === 1);
    nextButton.classList.toggle("disabled", currentPage === totalPages);
  }

  // Event listeners for pagination
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderProjects(currentPage);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderProjects(currentPage);
    }
  });

  // Add keyboard navigation for pagination
  [prevButton, nextButton].forEach((button) => {
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });
  });

  // Assemble pagination elements
  paginationWrapper.append(prevButton, pageInfo, nextButton);
  paginationContainer.appendChild(paginationWrapper);
  projectsWrapper.append(projectsContainer, paginationContainer);

  // Initial render
  renderProjects(currentPage);

  // Assemble the main content
  mainContent.appendChild(headerSection);
  mainContent.appendChild(projectsWrapper);
  hero.appendChild(mainContent);

  return hero;
}

class ProjectModal {
  constructor(project) {
    this.project = project;
    this.modalBackground = null;
    this.focusedElementBeforeModal = null;
    this.imageLoaded = false;
    this.focusableElements = [];
  }

  createElement(type, attributes = {}, content = null) {
    const element = document.createElement(type);
    Object.entries(attributes).forEach(([key, value]) =>
      element.setAttribute(key, value)
    );
    if (content) element.textContent = content;
    return element;
  }

  createModal() {
    this.focusedElementBeforeModal = document.activeElement;

    this.modalBackground = this.createElement("div", {
      class: "modal-background",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "modal-title",
      "aria-describedby": "modal-description",
    });

    const modalContent = this.createElement("div", {
      class: "modal-content",
      role: "document",
    });

    const closeButton = this.createCloseButton();
    const imageContainer = this.createImageContainer();
    const modalInfo = this.createModalInfo();

    modalContent.append(closeButton, imageContainer, modalInfo);
    this.modalBackground.appendChild(modalContent);
    document.body.appendChild(this.modalBackground);

    this.setupFocusTrap();
    this.addEventListeners();

    requestAnimationFrame(() => {
      closeButton.focus();
      this.modalBackground.classList.add("open");
    });
  }

  createCloseButton() {
    const closeButton = this.createElement(
      "button",
      {
        class: "modal-close",
        "aria-label": "Close project details",
        type: "button",
      },
      "×"
    );
    closeButton.addEventListener("click", () => this.close());
    return closeButton;
  }

  createImageContainer() {
    const imageContainer = this.createElement("figure", {
      class: "modal__image-container zoomable",
      role: "img",
      "aria-label": `Screenshot of ${this.project.label} project`,
    });

    const loadingSpinner = this.createElement("div", {
      class: "loading-spinner",
      "aria-label": "Loading project image...",
    });
    imageContainer.appendChild(loadingSpinner);

    const modalImage = this.createResponsiveImage(loadingSpinner);
    imageContainer.appendChild(modalImage);

    // Add zoom functionality
    imageContainer.addEventListener("click", () => {
      if (this.imageLoaded) {
        imageContainer.classList.toggle("zoomed");
      }
    });

    return imageContainer;
  }

  createResponsiveImage(loadingSpinner) {
    const modalImage = this.createElement("img", {
      class: "modal__image",
      src: this.project.image || "",
      alt: `Screenshot of ${this.project.label} project`,
    });

    modalImage.onload = () => {
      loadingSpinner.remove();
      this.imageLoaded = true;
    };

    modalImage.onerror = () => {
      loadingSpinner.remove();
      const errorMessage = this.createElement(
        "div",
        { class: "image-error", role: "alert" },
        "Image could not be loaded"
      );
      if (modalImage.parentElement) {
        modalImage.parentElement.appendChild(errorMessage);
        modalImage.remove();
      }
    };

    return modalImage;
  }

  createModalInfo() {
    const modalInfo = this.createElement("div", {
      class: "modal-info",
      role: "region",
      "aria-label": "Project information",
    });

    const modalTitle = this.createElement(
      "h2",
      {
        class: "modal-title",
        id: "modal-title",
      },
      this.project.label || "Untitled Project"
    );

    const modalDescription = this.createElement(
      "p",
      {
        class: "modal__description",
        id: "modal-description",
      },
      this.project.details || "No description available"
    );

    const modalStacks = this.createStacksList();
    const modalStats = this.createProjectStats();
    const actionButtons = this.createActionButtons();

    modalInfo.append(
      modalTitle,
      modalDescription,
      modalStacks,
      modalStats,
      actionButtons
    );
    return modalInfo;
  }

  createStacksList() {
    const modalStacks = this.createElement("div", {
      class: "modal__stacks",
      role: "list",
      "aria-label": "Technologies used in this project",
    });

    (this.project.stacks || []).forEach((stack) => {
      const stackSpan = this.createElement(
        "span",
        {
          class: "stack",
          role: "listitem",
        },
        stack
      );
      modalStacks.appendChild(stackSpan);
    });

    return modalStacks;
  }

  createProjectStats() {
    const stats = this.project.stats || {
      year: new Date().getFullYear(),
      duration: "2-3 weeks",
      status: "Completed",
    };

    const statsContainer = this.createElement("div", {
      class: "modal__stats",
      role: "region",
      "aria-label": "Project statistics",
    });

    Object.entries(stats).forEach(([key, value]) => {
      const stat = this.createElement("div", { class: "modal__stat" });
      const statValue = this.createElement(
        "span",
        { class: "modal__stat-value" },
        value
      );
      const statLabel = this.createElement(
        "span",
        { class: "modal__stat-label" },
        key
      );

      stat.append(statValue, statLabel);
      statsContainer.appendChild(stat);
    });

    return statsContainer;
  }

  createActionButtons() {
    const actionsContainer = this.createElement("div", {
      class: "modal__actions",
      role: "region",
      "aria-label": "Project actions",
    });

    // GitHub Link
    if (this.project.gitLink) {
      const gitLink = this.createElement("a", {
        class: "modal__git-link",
        href: this.project.gitLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `View ${this.project.label} source code on GitHub`,
      });

      const gitIcon = this.createElement("i", {
        class: "fab fa-github",
        "aria-hidden": "true",
      });

      const gitText = this.createElement("span", {}, "View Code");
      gitLink.append(gitIcon, gitText);
      actionsContainer.appendChild(gitLink);
    }

    // Demo Link
    if (this.project.demoLink) {
      const demoLink = this.createElement("a", {
        class: "modal__demo-link",
        href: this.project.demoLink,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `View ${this.project.label} live demo`,
      });

      const demoIcon = this.createElement("i", {
        class: "fas fa-external-link-alt",
        "aria-hidden": "true",
      });

      const demoText = this.createElement("span", {}, "Live Demo");
      demoLink.append(demoIcon, demoText);
      actionsContainer.appendChild(demoLink);
    }

    return actionsContainer;
  }

  setupFocusTrap() {
    this.focusableElements = Array.from(
      this.modalBackground.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );

    if (this.focusableElements.length > 0) {
      const firstElement = this.focusableElements[0];
      const lastElement =
        this.focusableElements[this.focusableElements.length - 1];

      this.modalBackground.addEventListener("keydown", (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }
  }

  addEventListeners() {
    this.modalBackground.addEventListener("click", (e) => {
      if (e.target === this.modalBackground) {
        this.close();
      }
    });

    this.modalBackground.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.close();
      }
    });
  }

  open() {
    this.createModal();
  }

  close() {
    this.modalBackground.classList.remove("open");
    setTimeout(() => {
      this.modalBackground.remove();
      if (this.focusedElementBeforeModal) {
        this.focusedElementBeforeModal.focus();
      }
    }, 300);
  }
}
