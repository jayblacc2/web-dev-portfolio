import portfolio from "../assets/images/portfolio.webp";
import recipe from "../assets/images/recipe.webp";
import todo from "../assets/images/adv-todo.webp";
import timer from "../assets/images/timer-app.webp";
import library from "../assets/images/book-library.webp";
import skill from "../assets/images/skill-portfolio.webp";

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
export const options = {
  size: "30px",
  color: "#858e99",
};

export const aboutText = `I'm a passionate Frontend with three years of experience turning ideas into reality and still counting.
The thrill of bringing a static design to life with code is what gets me going every morning. I'm a passionate front-end developer who thrives on collaboration and turning your ideas into something truly impactful.
`;

export const skillText = `Master of Modern Web Development: Crafting dynamic, visually stunning interfaces with a strong foundation in HTML, CSS, and JavaScript. Proficient in advanced technologies like React and TypeScript, with a knack for efficient styling using SCSS, Bootstrap, and Tailwind. Skilled in seamless version control with Git. Excels in communication, problem-solving, teamwork, and time management, all while infusing projects with a sense of humor.
Most important, I have got passion for learning and teaching, i believe the sky is the limit`;

export const projectsData = [
  {
    type: "bg1",
    value: '<i class="fa-solid fa-utensils"></i>',
    label: "Recipe App",
    details:
      "Vanilla JS project with a focus on creating a visually appealing and interactive user interface. Features include recipe search, ingredient filtering, and meal planning capabilities.",
    stacks: ["HTML", "SCSS", "JavaScript", "Vuejs"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://recipe-app-demo.netlify.app",
    image: recipe,
  },
  {
    type: "bg1",
    value: '<i class="fa-solid fa-briefcase"></i>',
    label: "Dev Portfolio",
    details:
      "A comprehensive web application that allows users to track their breathing patterns and monitor their respiratory health with real-time data visualization and progress tracking.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    demoLink: "https://health-tracker-demo.netlify.app",
    image: portfolio,
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
    value: '<i class="fa-solid fa-book"></i>',
    label: "Book library",
    details:
      "A fullstack web application that allows to create and vue your favorite recipes.",
    stacks: ["HTML", "CSS", "JavaScript", "Chart.js"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    image: library,
  },
  {
    type: "bg1",
    value: '<i class="fas fa-bed"></i>',
    label: "Portfolio skill",
    details:
      "Demostrate how to use the HTML and CSS to create a responsive layout.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    image: skill,
  },
  {
    type: "bg2",
    value: "<i class='fa-regular fa-square-check'></i>",
    label: "Advance Todo",
    details:
      "crafted like a js framework single page application without using any framework.",
    stacks: ["HTML", "CSS", "JavaScript", "Webpack"],
    gitLink: "https://github.com/cursorbot/cursorbot",
    image: todo,
  },
];
