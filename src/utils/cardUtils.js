import { createHtmlElement } from "./utils";
import { CLASSES } from "./constants";

// Create Stack Card
export function createStackCard(icon, text, width) {
  const cardContainer = createHtmlElement("div", {
    class: CLASSES.CARD_CONTAINER,
  });

  const iconContainer = createHtmlElement("figure", {
    class: CLASSES.ICON_CONTAINER,
  });
  const cardIcon = createHtmlElement("img", {
    class: CLASSES.CARD_ICON,
    src: icon,
    alt: text,
  });
  const cardTitle = createHtmlElement(
    "figcaption",
    { class: CLASSES.CARD_TITLE },
    text
  );

  const cardProgressContainer = createHtmlElement("div", {
    class: CLASSES.PROGRESS_CONTAINER,
    "data-initial-width": width,
    role: "progressbar",
    "aria-valuemax": "100",
    "aria-valuemin": "0",
    "aria-valuenow": width,
  });

  const cardProgressbar = createHtmlElement(
    "div",
    { class: CLASSES.PROGRESSBAR },
    `${width}%`
  );
  cardProgressContainer.appendChild(cardProgressbar);

  iconContainer.append(cardIcon, cardTitle);
  cardContainer.append(iconContainer, cardProgressContainer);

  return cardContainer;
}

class ProgressBar {
  constructor(container) {
    this.container = container;
    this.progressBar = container.querySelector(".card__progressbar");
    this.initialWidth = parseFloat(container.dataset.initialWidth);
    this.progressBar.style.width = "0%";
  }
  initializeProgressBars(width) {
    this.progressBar.style.width = `${width}%`;
  }
}

//This function animate the progress bar on mouse enter and leave
function initializeProgressBars() {
  const progressContainer = document.querySelectorAll(
    ".card__progress-container"
  );
  progressContainer.forEach((container) => {
    const progressBar = new ProgressBar(container);
    const parent = container.parentNode;

    parent.addEventListener("mouseenter", () => {
      progressBar.initializeProgressBars(progressBar.initialWidth);
    });

    parent.addEventListener("mouseleave", () => {
      progressBar.initializeProgressBars(0);
    });
  });
  return progressContainer;
}

export { initializeProgressBars };
