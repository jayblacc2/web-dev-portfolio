 import user from "../images/user.png";
import {
  handleButtonClick,
  setActiveLink,
  showSection,
} from "../modules/loadHeader";
import {
  createHtmlElement,
  renderTitle,
  renderSubTitle,
  createElement,
} from "../utils/utils";

function homeSection() {
  const hero = createHtmlElement("section", {
    class: "hero home__section",
    id: "home",
  });

  const heroContents = createHeroContent();

  //Right side content
  const heroImage = createHeroImage();
  hero.append(...[heroContents, heroImage]);

  return hero;
}

//home sections functions
function createHeroImage() {
  const heroImage = createHtmlElement("div", {
    class: "hero__img hero__container",
  });

  // Create background shape
  const bgShape = createHtmlElement("div", {
    class: "hero__background-shape",
  });

  const imageContainer = createHtmlElement("div", {
    class: "image__container animate-profile",
  });

  const imgWrapper = createHtmlElement("div", {
    class: "image__wrapper",
  });

  const imgElement = createImageElement(user, "hero-image");

  // Create overlay for hover effect
  const overlay = createHtmlElement("div", {
    class: "image__overlay",
  });

  imgWrapper.appendChild(imgElement);
  imageContainer.appendChild(imgWrapper);
  imageContainer.appendChild(overlay);
  heroImage.appendChild(bgShape);
  heroImage.appendChild(imageContainer);
  return heroImage;
}

/**
 * Creates an image element with lazy loading
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @returns {HTMLElement} Image element
 */
function createImageElement(src, alt) {
  return createHtmlElement("img", {
    src,
    alt,
    loading: "lazy",
    class: "hero__profile-image"
  });
}

export default homeSection;

//hero content
const HERO_TITLES = ["Hello", "I'm Johnson,", "web developer."];
const HERO_SUBTITLE =
  "Front End Developer / JavaScript Expert / Freelancer / Teacher";
function createHeroContent() {
  const heroContents = createHtmlElement("div", { class: "hero__content" });
  const mainHeader = createHtmlElement("h1", { class: "main__title" });

  renderTitle(HERO_TITLES, mainHeader);
  const paragraph = renderSubTitle(HERO_SUBTITLE, "sub__title");
  const heroButton = createHeroButton();

  heroContents.append(mainHeader, paragraph, heroButton);
  return heroContents;
}

function handleHeroButtonClick() {
  showSection("contact");
}

function createHeroButton() {
  const heroButton = createElement(
    "a",
    { class: "btn btn--hero", href: "#contact" },
    "Let's Chat"

  );
  heroButton.addEventListener("click", handleHeroButtonClick);
  return heroButton;
}



