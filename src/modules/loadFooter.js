import { createElement } from "../utils/utils";
function footer() {
  const footer = createElement("footer", { class: "footer" });
  const paragraph = createElement("p", { class: "paragraph" });

  paragraph.textContent = `Copyright ©️ All rights reserved, made with 🖤 by Jayblacc😊 ${new Date().getFullYear()}`;

  const container = createElement("div", { class: "center" });

  container.appendChild(paragraph);
  footer.appendChild(container);
  return footer;
}

export default footer;
