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

  const container = createElement("div", {
    class: "container",
    role: "list",
    "aria-label": "List of Projects",
  });

  datas.forEach((item, index) => {
    const projectCard = createElement("div", {
      class: `project-card ${item.type || 'bg1'}`,
      role: "listitem",
      style: `animation-delay: ${index * 0.15}s`,
      tabindex: "0",
      "aria-label": `${item.label} project`,
    });

    if (item.image) {
      projectCard.style.backgroundImage = `url(${item.image})`;
    }

    const contentWrapper = createElement("div", { class: "content-wrapper" });

    const h2 = createElement("h2", {
      class: "project-title",
      id: `project-title-${index}`,
    });
    h2.innerHTML = item.value;

    const p = createElement(
      "p",
      {
        class: "project-label",
        id: `project-desc-${index}`,
      },
      item.label
    );

    const overlay = createElement("div", {
      class: "overlay",
      role: "region",
      "aria-labelledby": `project-title-${index}`,
      "aria-describedby": `project-desc-${index}`,
    });

    const overlayText = createElement("p", { class: "overlay-description" });
    overlayText.innerHTML = item.details;

    const stackList = createElement("div", {
      class: "overlay-stacks",
      role: "list",
      "aria-label": "Technologies used",
    });

    item.stacks.forEach((stack, i) => {
      const stackSpan = createElement(
        "span",
        {
          class: "overlay-stack",
          role: "listitem",
          style: `--i: ${i}`,
        },
        stack
      );
      stackList.appendChild(stackSpan);
    });

    overlay.append(overlayText, stackList);
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

    container.appendChild(projectCard);
  });

  hero.appendChild(container);
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
      class: "modal__image loading",
      src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", // Tiny transparent placeholder
      "data-src": this.project.image || "",
      alt: `Screenshot of ${this.project.label} project`,
      loading: "lazy",
    });

    modalImage.addEventListener("load", () => {
      if (modalImage.src !== modalImage.dataset.src) return;

      modalImage.classList.remove("loading");
      loadingSpinner.remove();
      this.imageLoaded = true;
    });

    modalImage.addEventListener("error", () => {
      loadingSpinner.remove();
      const errorMessage = this.createElement(
        "div",
        {
          class: "image-error",
          role: "alert",
        },
        "Image could not be loaded"
      );
      modalImage.parentElement.appendChild(errorMessage);
      modalImage.remove();
    });

    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && modalImage.dataset.src) {
            modalImage.src = modalImage.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "50px",
        threshold: 0.1,
      }
    );

    imageObserver.observe(modalImage);
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
