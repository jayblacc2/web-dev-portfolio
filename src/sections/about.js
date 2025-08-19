import {
  createHtmlElement,
  renderSubTitle,
  renderTitle,
  createElement,
  createStackCard,
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
      rel: "noopener noreferrer",
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

export default aboutSection;
