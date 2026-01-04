import recipe from "../assets/images/recipe.webp";
import todo from "../assets/images/adv-todo.webp";
import timer from "../assets/images/timer-app.webp";
import glacy from "../assets/images/glacy-store.webp";
import skill from "../assets/images/skill-portfolio.webp";

import react from "../assets/icons/react.svg";
import vuejs from "../assets/icons/vuejs.svg";
import git from "../assets/icons/git.svg";
import html from "../assets/icons/html.svg";
import css from "../assets/icons/css.svg";
import js from "../assets/icons/js.svg";

export const items = [
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "React",
  "Webpack",
  "JQuery",
  "Git",
  "BEM",
  "SASS",
  "Next JS",
  "Node JS",
  "Vue JS",
];

export const CLASSES = {
  HERO: "hero",
  HERO_CONTENT: "hero__content hero-flex",
  HERO_CONTENT_CONTAINER: "hero__content-container",
  MAIN_TITLE: "main__title",
  SUB_TITLE: "sub__title",
  BTN_HERO: "btn btn--hero",
  HERO_IMAGE: "hero__img about__hero-content",
  STACK_CARD: "stack__card",
  CARD_CONTAINER: "card__container",
  ICON_CONTAINER: "icon__container",
  CARD_ICON: "card__icon",
  CARD_TITLE: "card__title",
  PROGRESS_CONTAINER: "card__progress-container",
  PROGRESSBAR: "card__progressbar",
};

export const options = {
  size: "30px",
  color: "#858e99",
};

export const TEXTS = {
  BUTTON_TEXT: "Get Resume",
  TITLES: ["Turning Designs", "into Reality"],
  ABOUT_TEXT: `Frontend Developer focused on building modern, user-friendly web applications with clean, scalable UI. Strong foundation in HTML, CSS, and JavaScript, Experienced in modern frontend tools and workflows, Passionate about clean code, performance, and UX, Enjoy collaborating with designers and cross-functional teams. Let’s bring your ideas to life..`,
};

export const skillText = `Frontend Developer specializing in modern web technologies with a strong foundation in HTML, CSS, and JavaScript. Experienced in Vue.js, React, and TypeScript, with a focus on clean architecture, scalable UI, and performance-driven design. `;

export const projectSubTitle = `A selection of frontend projects showcasing modern UI design, clean architecture, and real-world problem solving using contemporary web technologies.
`;

export const projectsData = [
  {
    type: "bg2",
    value: "<i class='fa-regular fa-square-check'></i>",
    label: "Advance Todo",
    details:
      "crafted like a js framework single page application without using any framework.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack", "localStorage"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://health-tracker-demo.netlify.app",
    image: todo,
  },
  {
    type: "bg1",
    value: '<i class="fa-solid fa-book"></i>',
    label: "Glacy Store",
    details:
      "A fullstack web application that allows to create and vue your favorite recipes.",
    stacks: ["HTML", "CSS", "JavaScript", "Express", "MongoDB"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://health-tracker-demo.netlify.app",
    image: glacy,
  },
  {
    type: "bg1",
    value: '<i class="fa-solid fa-utensils"></i>',
    label: "Recipe App",
    details:
      "Vanilla JS project with a focus on creating a visually appealing and interactive user interface. Features include recipe search, ingredient filtering, and meal planning capabilities.",
    stacks: ["HTML", "SCSS", "JavaScript", "Vuejs", "Firebase"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://recipe-app-demo.netlify.app",
    image: recipe,
  },
  {
    type: "bg2",
    value: '<i class="fas fa-running"></i>',
    label: "Timer App",
    details:
      "A modern React application built with hooks and context API, featuring responsive design and optimized performance for seamless user experience.",
    stacks: ["React", "CSS", "Webpack", "Context API"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://react-app-demo.netlify.app",
    image: timer,
  },
  {
    type: "bg1",
    value: '<i class="fas fa-bed"></i>',
    label: "Portfolio skill",
    details:
      "Single page application with a responsive layout. demosstrates the power of Vanilla JS to create a modern web application.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://health-tracker-demo.netlify.app",
    image: skill,
  },
];

export const STACK_DATA = [
  { icon: vuejs, text: "Vuejs", width: 60 },
  { icon: git, text: "Git", width: 60 },
  { icon: html, text: "HTML", width: 80 },
  { icon: css, text: "CSS", width: 80 },
  { icon: js, text: "JavaScript", width: 70 },
  { icon: react, text: "React", width: 70 },
];
