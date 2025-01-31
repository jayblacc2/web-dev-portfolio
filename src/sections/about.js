import {
  createHtmlElement,
  renderSubTitle,
  renderTitle,
  createElement,
} from "../utils/utils";
import { CLASSES, TEXTS, STACK_DATA } from "../utils/constant";

// Constants

//About section button function
function createResumeButton() {
  const resumePath = "/assets/resume.pdf";
  const btn = createElement(
    "a",
    {
      class: CLASSES.BTN_HERO,
      href: resumePath,
      download: "MyResume.pdf",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    TEXTS.BUTTON_TEXT
  );
  return btn;
}
//function to create hero content
function createHeroContent() {
  //left side
  const heroContents = createHtmlElement("div", {
    class: CLASSES.HERO_CONTENT,
  });

  const heroContentsContainer = createHtmlElement("div", {
    class: "hero__content-container",
  });

  const mainHeader = createHtmlElement("h1", { class: CLASSES.MAIN_TITLE });
  renderTitle(TEXTS.TITLES, mainHeader);

  const paragraph = renderSubTitle(TEXTS.ABOUT_TEXT, CLASSES.SUB_TITLE);

  const btn = createResumeButton();

  //appending all left side contents
  heroContentsContainer.append(mainHeader, paragraph, btn);
  heroContents.append(heroContentsContainer);

  

  return heroContents;
}

function createStackCards() {
  const cards = createHtmlElement("div", { class: CLASSES.STACK_CARD });
  STACK_DATA.forEach(({ icon, text, width }) => {
    const card = createStackCard(icon, text, width);
    cards.append(card);
  });

  const heroImage = createHtmlElement("div", {
    class: CLASSES.HERO_IMAGE,
  });

  return { cards, heroImage };
}

function aboutSection() {
  const hero = createHtmlElement("section", {
    class: CLASSES.HERO,
    id: "about",
    style: "display:none",
  });

  const heroContents = createHeroContent();

  //right side
  const { cards, heroImage } = createStackCards();

  heroImage.append(cards);

  hero.append(heroContents, heroImage);

  return hero;
}

//helper function below
function createStackCard(icon, text, width) {
  const cardContainer = createHtmlElement("div", {
    class: CLASSES.CARD_CONTAINER,
  });
  const iconContainer = createHtmlElement("figure", {
    class: CLASSES.ICON_CONTAINER,
  });
  const cardIcon = createHtmlElement("img", {
    class: CLASSES.CARD_ICON,
    src: icon || "",
    alt: text,
  });

  // Create the title element
  const cardTitle = document.createElement("figcaption", {
    class: CLASSES.CARD_TITLE,
  });
  cardTitle.innerText = text || "";

  const cardProgressContainer = createHtmlElement("div", {
    class: CLASSES.PROGRESS_CONTAINER,
    ["data-initial-width"]: width,
    role: "progressbar",
    ["aria-valuemax"]: "100",
    ["aria-valuemin"]: "0",
    ["aria-valuenow"]: width,
  });

  const cardProgressbar = createHtmlElement("div", {
    class: CLASSES.PROGRESSBAR,
    role: "presentation",
  });
  cardProgressbar.innerText = `${width}%`;

  cardProgressContainer.appendChild(cardProgressbar);

  iconContainer.append(cardIcon, cardTitle);
  // Append elements to the card
  cardContainer.append(iconContainer, cardProgressContainer);

  

  const element = cardContainer.querySelector(".card__progressbar");
  
  
  
  return cardContainer;
}

//The class represent a progress bar
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

export default aboutSection;
export { initializeProgressBars };
