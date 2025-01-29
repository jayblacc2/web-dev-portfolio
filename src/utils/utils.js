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

export function createHtmlElement(element, attributes) {
  const htmlElement = document.createElement(element);

  if (attributes) {
    for (const [key, value] of Object.entries(attributes)) {
      if (value !== undefined && value !== null && value !== "") {
        htmlElement.setAttribute(key, value);
      } else {
        htmlElement.removeAttribute(key);
      }
    }
  }
  return htmlElement;
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

export function createElement(tag, attributes = {}, textContent = null) {
  // Create a new element tag name
  const element = document.createElement(tag);

  // Set any attributes
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
  // Set the inner text
  if (textContent) {
    element.textContent = textContent;
  }

  return element;
}

/*
TODO: Fixes
1. mobile overflow: padding 
2. containerize the sections  
3. Skill section skill => fix the bug of displaying on resizing the window 
4. the project section full height on mobile
clean up the css => remove the unused styles,  structure 

*/
