import homeSection from "../sections/home";
import aboutSection from "../sections/about";
import contactSection from "../sections/contact";
import skillSection from "../sections/skill";
import projectSection from "../sections/projects";
import { createElement } from "../utils/utils";

function loadSection() {
  const content = createElement("main", { id: "content", class: "content" });
  const sections = [
    homeSection,
    aboutSection,
    skillSection,
    projectSection,
    contactSection,
  ];
  sections.forEach((section) => content.append(section()));

  return content;
}

export default loadSection;
