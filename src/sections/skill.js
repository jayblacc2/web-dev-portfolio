import {
  createHtmlElement,
  renderTitle,
  renderSubTitle,
  alertBadge,
} from "../utils/utils";
import { skillText, items } from "../utils/variable";

function skillSection() {
  const hero = createHtmlElement("section", {
    class: "hero",
    id: "skills",
    style: "display:none",
  });

  const heroContents = createHtmlElement("div", {
    class: "hero__content hero-flex",
  });
  hero.appendChild(heroContents);

  const mainHeader = createHtmlElement("h1", { class: "main__title" });
  const titles = ["My Skills &", "Experience"];
  renderTitle(titles, mainHeader);

  const subTitle = renderSubTitle(skillText, "sub__title");
  heroContents.append(mainHeader, subTitle);

  //right side elements
  const heroImage = createHtmlElement("div", { class: "hero__img hero-flex" });
  hero.appendChild(heroImage);

  const parentContainer = createHtmlElement("div", {
    class: "parent__container",
  });

  setTimeout(() => {
    animatedSkill(items, parentContainer);
  }, 0);

  heroImage.appendChild(parentContainer);
  alertBadge("Show", "blue");
  return hero;
}

//
function initiateSkills() {
  return `
      <canvas class="skillsCanvas" id="skillsCanvas" width="600" height="600"></canvas>
      <div class="tooltip" id="tooltip"></div>
      <div class="details" id="details"></div>
      <div class="theme-selector"></div>
    
  `;
}

export function animatedSkill(items, parentContainer) {
  parentContainer.innerHTML = initiateSkills();
  // Get the elements from the parent container
  const canvas = parentContainer.querySelector("#skillsCanvas");
  const tooltip = parentContainer.querySelector("#tooltip");
  const details = parentContainer.querySelector("#details");
  const themeSelector = parentContainer.querySelector(".theme-selector");

  const themes = [
    { background: "#007bff", gradient: ["#007bff", "#0056b3"] },
    { background: "#ff007b", gradient: ["#ff007b", "#b30056"] },
    { background: "#00ff7b", gradient: ["#00ff7b", "#00b356"] },
  ];

  themes.forEach((theme, index) => {
    const button = document.createElement("div");
    button.className = "theme-button";
    button.style.background = theme.background;
    button.addEventListener("click", () => setTheme(index));
    themeSelector.appendChild(button);
  });

  function setTheme(index) {
    currentTheme = themes[index];
  }

  let currentTheme = themes[0];

  //animate
  const ctx = canvas.getContext("2d");
  let CONTAINER_RADIUS = Math.min(window.innerWidth, window.innerHeight) / 6;
  let CENTER_X = canvas.width / 2;
  let CENTER_Y = canvas.height / 2;
  let angleOffset = 0;
  let animationFrameId;

  function resizeCanvas() {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    CENTER_X = canvas.width / 2;
    CENTER_Y = canvas.height / 2;
    CONTAINER_RADIUS = Math.min(canvas.width, canvas.height) / 4;
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);

      // Draw gradient circle
      const gradient = ctx.createRadialGradient(x, y, 30, x, y, 50);
      gradient.addColorStop(0, currentTheme.gradient[0]);
      gradient.addColorStop(1, currentTheme.gradient[1]);
      ctx.beginPath();
      ctx.arc(x, y, 50, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
      ctx.lineWidth = 5;
      ctx.stroke();

      // text
      ctx.font = "16px Arial";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(item, x, y);
    });
  }

  draw();

  function animate() {
    angleOffset = Date.now() * 0.001;
    draw();
    animationFrameId = requestAnimationFrame(animate);
  }

  function startAnimation() {
    if (!animationFrameId) {
      animate();
    }
  }

  function stopAnimation() {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  }

  function showTooltip(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    tooltip.style.left = `${mouseX + 10}px`;
    tooltip.style.top = `${mouseY + 10}px`;
    tooltip.style.opacity = 1;
  }

  function hideTooltip() {
    tooltip.style.opacity = 0;
  }

  function updateTooltipContent(item) {
    tooltip.textContent = item;
  }

  function showDetails(content) {
    details.textContent = content;
    details.style.opacity = 1;
  }

  function hideDetails() {
    details.style.opacity = 0;
  }

  parentContainer.addEventListener("mouseenter", startAnimation);
  parentContainer.addEventListener("mouseleave", stopAnimation);

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (distance < 50) {
        updateTooltipContent(item);
        showTooltip(event);
      }
    });
  });

  canvas.addEventListener("mouseleave", hideTooltip);

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (distance < 50) {
        showDetails(`Details about ${item}`);
      }
    });
  });

  canvas.addEventListener("mouseleave", hideDetails);

  // Handle touch events for mobile devices
  canvas.addEventListener("touchstart", (event) => {
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const distance = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);
      if (distance < 50) {
        showDetails(`Details about ${item}`);
      }
    });
  });

  canvas.addEventListener("touchmove", (event) => {
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const distance = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);
      if (distance < 50) {
        updateTooltipContent(item);
        showTooltip({ clientX: touch.clientX, clientY: touch.clientY });
      }
    });
  });

  canvas.addEventListener("touchend", hideTooltip);

  window.addEventListener("DOMContentLoaded", () => {
    resizeCanvas();
    startAnimation(); // Start animation immediately
  });
  return canvas;
}

export default skillSection;
