import user from "../images/user.jpg";
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
import { createChatAgent } from "../modules/chatAgent";

function homeSection() {
  const hero = createHtmlElement("section", {
    class: "hero home__section",
    id: "home",
  });

  const heroContents = createHeroContent();

  //Right side content
  const heroImage = createHeroImage();

  // Attach chat agent below right side
  const chat = createChatAgent();
  heroImage.appendChild(chat);

  hero.append(...[heroContents, heroImage]);

  return hero;
}

//home sections functions
function createHeroImage() {
  const heroImage = createHtmlElement("div", {
    class: "hero__img hero__container",
  });

  // Create outer decorative ring
  const outerRing = createHtmlElement("div", {
    class: "hero__outer-ring",
  });

  // Create middle ring
  const middleRing = createHtmlElement("div", {
    class: "hero__middle-ring",
  });

  // Create main background shape
  const bgShape = createHtmlElement("div", {
    class: "hero__background-shape",
  });

  // Create image container with enhanced styling
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

  // Create floating particles
  const particles = createFloatingParticles();

  // Assemble the structure
  imgWrapper.appendChild(imgElement);
  imageContainer.appendChild(imgWrapper);
  imageContainer.appendChild(overlay);

  // Add all elements to hero image in proper order
  heroImage.appendChild(particles);
  heroImage.appendChild(outerRing);
  heroImage.appendChild(middleRing);
  heroImage.appendChild(bgShape);
  heroImage.appendChild(imageContainer);

  return heroImage;
}

function createImageElement(src, alt) {
  const img = new Image();
  img.src = src;
  img.alt = alt;
  img.loading = "lazy";

  // Add accessibility attributes
  img.setAttribute("role", "img");
  img.setAttribute(
    "aria-label",
    "Johnson - Front End Developer Profile Picture"
  );

  return img;
}

// Add floating particles effect
function createFloatingParticles() {
  const particlesContainer = createHtmlElement("div", {
    class: "floating-particles",
  });

  // Create multiple particles
  for (let i = 0; i < 6; i++) {
    const particle = createHtmlElement("div", {
      class: `particle particle-${i + 1}`,
    });
    particlesContainer.appendChild(particle);
  }

  return particlesContainer;
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
    { class: "btn btn--hero", href: "/contact" },
    "Let's Chat"
  );
  heroButton.addEventListener("click", handleHeroButtonClick);
  return heroButton;
}
