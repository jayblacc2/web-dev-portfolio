import { CLASSES, TEXTS, STACK_DATA } from "../utils/constant";

export function createSvgIcon(svgIcon, options = {}, icon) {
  icon.innerHTML = svgIcon;

  const { size = "24px", color = "#000" } = options;

  // Apply styles to the icon container
  Object.assign(icon.style, {
    width: size,
    height: size,
    fill: color,
  });

  // Apply attributes to the SVG element if it exists
  const svgElement = icon.firstElementChild;
  if (svgElement) {
    ["width", "height", "fill"].forEach((attr) =>
      svgElement.setAttribute(attr, options[attr] || icon.style[attr])
    );
  }

  return icon;
}

// Unified DOM element creation function
export function createElement(tag, attributes = {}, textContent = null) {
  const element = document.createElement(tag);

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (value !== undefined && value !== null && value !== "") {
        element.setAttribute(key, value);
      } else {
        element.removeAttribute(key);
      }
    }
  }

  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

// Legacy alias for backward compatibility
export function createHtmlElement(tag, attributes) {
  return createElement(tag, attributes);
}

export function sectionButton(text, type = "", classname) {
  const btn = createHtmlElement("button", {
    class: classname,
    type: type,
  });
  btn.innerText = text;
  return btn;
}

export function renderTitle(titles, container) {
  titles.forEach((title, index) => {
    const titleSpan = createHtmlElement("span", { class: "main__title-text" });
    titleSpan.innerText = title;

    const animationDuration = (index + 2) * 0.5;
    titleSpan.style.animationDuration = `${animationDuration}s`;

    container.appendChild(titleSpan);
  });

  return container;
}

export function renderSubTitle(text, classname) {
  const programmingLanguages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "SCSS",
    "Git",
    "Bootstrap",
    "Tailwind",
  ];

  let highlightedText = text
    .split(" ")
    .map((word) => {
      let cleanWord = word.replace(/[\.,:]/g, ""); // Remove punctuation for accurate matching
      if (programmingLanguages.includes(cleanWord)) {
        return `<span style="color: #5462ffe4; font-weight: bolder">${word}</span>`;
      }
      return word;
    })
    .join(" ");

  const subTitle = createHtmlElement("p", { class: classname });
  subTitle.innerHTML = highlightedText; // Use innerHTML to render the highlighted text
  return subTitle;
}

export function select(selector, context = document) {
  return context.querySelector(selector);
}

export function selectAll(selector, context) {
  if (!context) {
    context = document;
  }
  return context.querySelectorAll(selector);
}

export function alertBadge(text, color, element) {
  const textContainer = createHtmlElement("div", { class: "alert__badge" });

  const textElement = createHtmlElement("p");
  textElement.innerText = text;
  textElement.style.color = color;

  textContainer.appendChild(textElement);
  textContainer.classList.add("slide-in");

  setTimeout(() => {
    textContainer.classList.add("slide-out");
  }, 3000);

  document.body.appendChild(textContainer);
  return textContainer;
}

// New cookie consent function
export function cookieConsent() {
  // Check if user has already made a choice
  if (localStorage.getItem("cookieConsent")) {
    return;
  }

  const cookieContainer = createHtmlElement("div", {
    class: "cookie-consent",
    id: "cookie-consent-banner",
  });

  // Cookie message
  const messageElement = createHtmlElement("div", { class: "cookie-message" });
  messageElement.innerHTML = `
    <span class="cookie-icon">🍪</span>
    <p>We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept", you consent to our use of cookies.</p>
  `;

  // Button container
  const buttonContainer = createHtmlElement("div", { class: "cookie-buttons" });

  // Accept button
  const acceptBtn = createHtmlElement("button", {
    class: "cookie-btn cookie-accept",
    type: "button",
  });
  acceptBtn.innerText = "Accept";
  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    closeCookieBanner(cookieContainer);
  });

  // Decline button
  const declineBtn = createHtmlElement("button", {
    class: "cookie-btn cookie-decline",
    type: "button",
  });
  declineBtn.innerText = "Decline";
  declineBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "declined");
    closeCookieBanner(cookieContainer);
  });

  // Learn more link
  const learnMoreLink = createHtmlElement("a", {
    class: "cookie-learn-more",
    href: "#",
  });
  learnMoreLink.innerText = "Learn More";
  learnMoreLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert(
      "Cookie Policy: We use essential cookies for site functionality and analytics cookies to improve user experience."
    );
  });

  buttonContainer.append(acceptBtn, declineBtn, learnMoreLink);
  cookieContainer.append(messageElement, buttonContainer);

  // Add slide-in animation
  cookieContainer.classList.add("slide-in");

  document.body.appendChild(cookieContainer);
  return cookieContainer;
}

function closeCookieBanner(container) {
  container.classList.remove("slide-in");
  container.classList.add("slide-out");

  setTimeout(() => {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }, 800);
}

//create stack helper function
export function createStackCard(icon, text, width) {
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
export function initializeProgressBars() {
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

export function createErrorFallback(sectionName) {
  const errorFallback = createHtmlElement("div", {
    class: "fallback-section",
  });

  errorFallback.innerHTML = `
    <h3><i class="fas fa-exclamation-triangle"></i> Something went wrong</h3>
    <p>Failed to load the section ${sectionName}.</p>
    <button class="fallback-btn" onclick="location.reload()">Reload</button>
  `;
  return errorFallback;
}

// Fallback error message function
export function showFallbackMessage(message) {
  const errorOverlay = document.createHtmlElement("div", {
    class: "fallback-message",
  });

  errorOverlay.innerHTML = ` 
  <div class="fallback-message">
    <h2>⚠️ Oops!</h2>
    <p>${message}</p>
    <button class="fallback-btn" onclick="location.reload()">Refresh Page</button>
  </div>`;
  document.body.appendChild(errorOverlay);
}
