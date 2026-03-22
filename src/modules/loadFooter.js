import { BRAND_CONFIG, UI_CONFIG } from "../config";
import { createElement } from "../utils/utils";

function footer() {
  const footer = createElement("footer", {
    class: "footer",
    role: "contentinfo",
    "aria-label": UI_CONFIG.aria.footerLabel,
  });

  const paragraph = createElement("p", { class: "paragraph" });

  // Use accessible text with emoji labels for screen readers
  const currentYear = new Date().getFullYear();
  const { copyright, author } = BRAND_CONFIG;

  paragraph.innerHTML = `
    <span aria-label="Copyright">©️</span> ${copyright.text}, made with
    <span aria-label="${copyright.madeWith}">🖤</span> by ${author}
    <span aria-label="happy face">😊</span> ${currentYear}
  `;

  const container = createElement("div", { class: "center" });

  container.appendChild(paragraph);
  footer.appendChild(container);
  return footer;
}

export default footer;
