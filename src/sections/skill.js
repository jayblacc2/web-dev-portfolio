import {
  createHtmlElement,
  renderTitle,
  renderSubTitle,
  alertBadge,
  cookieConsent, // Add this import
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

  // Add skill stats
  const skillStats = createSkillStats();
  heroContents.append(mainHeader, subTitle, skillStats);

  //right side elements
  const heroImage = createHtmlElement("div", { class: "hero__img hero-flex" });
  hero.appendChild(heroImage);

  const parentContainer = createHtmlElement("div", {
    class: "parent__container enhanced-skills-container",
  });

  // Initialize the animation when section becomes visible
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "style"
      ) {
        const target = mutation.target;
        if (target.id === "skills" && target.style.display !== "none") {
          setTimeout(() => {
            animatedSkill(items, parentContainer);
          }, 100);
          observer.disconnect();
        }
      }
    });
  });

  observer.observe(hero, { attributes: true });

  // Fallback for immediate loading if section is already visible
  setTimeout(() => {
    if (hero.style.display !== "none") {
      animatedSkill(items, parentContainer);
    }
  }, 100);

  heroImage.appendChild(parentContainer);
  cookieConsent(); // Replace alertBadge("Show", "blue");
  return hero;
}

function createSkillStats() {
  const statsContainer = createHtmlElement("div", {
    class: "skill-stats-container",
  });

  const stats = [
    { label: "Technologies", value: items.length, icon: "⚡" },
    { label: "Years Experience", value: "3+", icon: "🚀" },
    { label: "Projects Built", value: "25+", icon: "💼" },
  ];

  stats.forEach((stat) => {
    const statCard = createHtmlElement("div", {
      class: "skill-stat-card",
    });

    statCard.innerHTML = `
      <div class="stat-icon">${stat.icon}</div>
      <div class="stat-value">${stat.value}</div>
      <div class="stat-label">${stat.label}</div>
    `;

    statsContainer.appendChild(statCard);
  });

  return statsContainer;
}

//
function initiateSkills() {
  return `
      <div class="skills-header">
        <h3 class="skills-title">Interactive Skills Showcase</h3>
        <p class="skills-subtitle">Hover over skills to explore • Click for details</p>
      </div>
      <canvas class="skillsCanvas" id="skillsCanvas" width="650" height="650"></canvas>
      <div class="tooltip enhanced-tooltip" id="tooltip"></div>
      <div class="details enhanced-details" id="details"></div>
      <div class="theme-selector enhanced-theme-selector">
        <span class="theme-label">Themes:</span>
      </div>
      <div class="controls-panel">
        <button class="control-btn" id="playPauseBtn">⏸️</button>
        
        <div class="speed-control">
          <label>Speed:</label>
          <input type="range" id="speedSlider" min="0.1" max="2" step="0.1" value="1">
        </div>
      </div>
      <div class="skill-counter">
        <span id="skillCount">${items.length}</span> Technologies
      </div>
  `;
}

export function animatedSkill(items, parentContainer) {
  parentContainer.innerHTML = initiateSkills();
  // Get the elements from the parent container
  const canvas = parentContainer.querySelector("#skillsCanvas");
  const tooltip = parentContainer.querySelector("#tooltip");
  const details = parentContainer.querySelector("#details");
  const themeSelector = parentContainer.querySelector(".theme-selector");
  const playPauseBtn = parentContainer.querySelector("#playPauseBtn");
  const speedSlider = parentContainer.querySelector("#speedSlider");

  const themes = [
    {
      name: "Vibrant Pink",
      background: "#ff007b",
      gradient: ["#ff007b", "#b30056"],
      accent: "#ff6b9d",
    },
    {
      name: "Fresh Green",
      background: "#00ff7b",
      gradient: ["#00ff7b", "#00b356"],
      accent: "#51cf66",
    },
    {
      name: "Sunset Orange",
      background: "#ff6b35",
      gradient: ["#ff6b35", "#cc4125"],
      accent: "#ff8c42",
    },
    {
      name: "Purple Galaxy",
      background: "#7c3aed",
      gradient: ["#7c3aed", "#5b21b6"],
      accent: "#a855f7",
    },
  ];

  themes.forEach((theme, index) => {
    const button = document.createElement("div");
    button.className = "theme-button";
    button.style.background = theme.background;
    button.title = theme.name;
    button.addEventListener("click", () => setTheme(index));
    themeSelector.appendChild(button);
  });

  function setTheme(index) {
    currentTheme = themes[index];
    // Add theme transition effect
    canvas.style.filter = "brightness(0.8)";
    setTimeout(() => {
      canvas.style.filter = "brightness(1)";
    }, 200);
  }

  let currentTheme = themes[0];
  let isPlaying = true;
  let animationSpeed = 1;

  //animate
  const ctx = canvas.getContext("2d");
  let CONTAINER_RADIUS = Math.min(window.innerWidth, window.innerHeight) / 6;
  let CENTER_X = canvas.width / 2;
  let CENTER_Y = canvas.height / 2;
  let angleOffset = 0;
  let animationFrameId;
  let hoveredSkill = null;
  let skillScales = items.map(() => 1);
  let skillOpacities = items.map(() => 1);

  function resizeCanvas() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Set actual canvas size
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    // Scale the context to match device pixel ratio
    ctx.scale(dpr, dpr);

    // Set CSS size
    canvas.style.width = rect.width + "px";
    canvas.style.height = rect.height + "px";

    CENTER_X = rect.width / 2;
    CENTER_Y = rect.height / 2;
    CONTAINER_RADIUS = Math.min(rect.width, rect.height) / 4;

    draw();
  }

  function draw() {
    // Create subtle background gradient
    const bgGradient = ctx.createRadialGradient(
      CENTER_X,
      CENTER_Y,
      0,
      CENTER_X,
      CENTER_Y,
      CONTAINER_RADIUS * 1.5
    );
    bgGradient.addColorStop(0, "rgba(255, 255, 255, 0.02)");
    bgGradient.addColorStop(1, "rgba(0, 0, 0, 0.05)");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);

      const scale = skillScales[index];
      const opacity = skillOpacities[index];
      const radius = 50 * scale;

      // Draw outer glow effect
      if (hoveredSkill === index) {
        const glowGradient = ctx.createRadialGradient(
          x,
          y,
          radius,
          x,
          y,
          radius + 20
        );
        glowGradient.addColorStop(0, `${currentTheme.accent}40`);
        glowGradient.addColorStop(1, "transparent");
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius + 20, 0, 2 * Math.PI);
        ctx.fill();
      }

      // Draw main gradient circle with enhanced effects
      const gradient = ctx.createRadialGradient(x, y, 20, x, y, radius);
      gradient.addColorStop(0, currentTheme.gradient[0]);
      gradient.addColorStop(0.7, currentTheme.gradient[1]);
      gradient.addColorStop(1, currentTheme.gradient[1] + "CC");

      ctx.globalAlpha = opacity;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Enhanced stroke with shadow
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.strokeStyle =
        hoveredSkill === index
          ? currentTheme.accent
          : "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = hoveredSkill === index ? 3 : 2;
      ctx.stroke();

      // Reset shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Enhanced text with better typography
      const fontSize = Math.max(12, Math.min(16, radius / 3));
      ctx.font = `bold ${fontSize}px 'Segoe UI', Arial, sans-serif`;
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Add text shadow for better readability
      ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
      ctx.shadowBlur = 4;
      ctx.fillText(item, x, y);

      // Reset shadow
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    });

    // Draw connecting lines between skills (optional decorative effect)
    if (hoveredSkill !== null) {
      drawConnectionLines();
    }
  }

  function drawConnectionLines() {
    const hoveredAngle =
      (hoveredSkill / items.length) * (2 * Math.PI) + angleOffset;
    const hoveredX = CENTER_X + CONTAINER_RADIUS * Math.cos(hoveredAngle);
    const hoveredY = CENTER_Y + CONTAINER_RADIUS * Math.sin(hoveredAngle);

    ctx.strokeStyle = currentTheme.accent + "30";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    items.forEach((_, index) => {
      if (index !== hoveredSkill) {
        const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
        const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
        const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(hoveredX, hoveredY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    ctx.setLineDash([]);
  }

  draw();

  function animate() {
    if (isPlaying) {
      angleOffset = Date.now() * 0.001 * animationSpeed;

      // Smooth scale and opacity transitions
      skillScales.forEach((scale, index) => {
        const targetScale = hoveredSkill === index ? 1.2 : 1;
        skillScales[index] += (targetScale - scale) * 0.1;
      });

      skillOpacities.forEach((opacity, index) => {
        const targetOpacity =
          hoveredSkill === null || hoveredSkill === index ? 1 : 0.6;
        skillOpacities[index] += (targetOpacity - opacity) * 0.1;
      });

      draw();
    }
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

  function togglePlayPause() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
    playPauseBtn.title = isPlaying ? "Pause Animation" : "Play Animation";
  }

  function updateAnimationSpeed(speed) {
    animationSpeed = parseFloat(speed);
  }

  // Control event listeners
  playPauseBtn.addEventListener("click", togglePlayPause);
  speedSlider.addEventListener("input", (e) =>
    updateAnimationSpeed(e.target.value)
  );

  function showTooltip(event, skillIndex) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Position tooltip with better boundary detection
    const tooltipX =
      mouseX + 15 > canvas.width - 150 ? mouseX - 150 : mouseX + 15;
    const tooltipY = mouseY - 10 < 0 ? mouseY + 20 : mouseY - 10;

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.style.opacity = 1;
    tooltip.style.transform = "scale(1)";
  }

  function hideTooltip() {
    tooltip.style.opacity = 0;
    tooltip.style.transform = "scale(0.8)";
    hoveredSkill = null;
  }

  function updateTooltipContent(item, index) {
    const skillCategories = {
      JavaScript: "Programming Language",
      TypeScript: "Programming Language",
      HTML5: "Markup Language",
      CSS3: "Styling Language",
      React: "Frontend Framework",
      "Vue JS": "Frontend Framework",
      "Next JS": "React Framework",
      "Node JS": "Runtime Environment",
      Webpack: "Build Tool",
      SASS: "CSS Preprocessor",
      JQuery: "JavaScript Library",
      Git: "Version Control",
      BEM: "CSS Methodology",
    };

    const category = skillCategories[item] || "Technology";
    const proficiency = Math.floor(Math.random() * 3) + 3; // 3-5 stars

    tooltip.innerHTML = `
      <div class="tooltip-header">
        <strong>${item}</strong>
        <span class="tooltip-category">${category}</span>
      </div>
      <div class="tooltip-proficiency">
        ${"★".repeat(proficiency)}${"☆".repeat(5 - proficiency)}
      </div>
      <div class="tooltip-tip">Click for more details</div>
    `;
  }

  function showDetails(item, index) {
    const skillDetails = {
      JavaScript:
        "Dynamic programming language for web development with ES6+ features",
      TypeScript:
        "Strongly typed superset of JavaScript for large-scale applications",
      HTML5: "Modern markup language with semantic elements and APIs",
      CSS3: "Advanced styling with animations, flexbox, and grid layouts",
      React: "Component-based library for building interactive user interfaces",
      "Vue JS": "Progressive framework for building modern web applications",
      "Next JS": "Full-stack React framework with SSR and static generation",
      "Node JS": "Server-side JavaScript runtime for backend development",
      Webpack: "Module bundler for optimizing and building web applications",
      SASS: "CSS preprocessor with variables, mixins, and nesting",
      JQuery: "JavaScript library for DOM manipulation and AJAX",
      Git: "Distributed version control system for code management",
      BEM: "CSS methodology for maintainable and scalable stylesheets",
    };

    const detail = skillDetails[item] || `Professional experience with ${item}`;

    details.innerHTML = `
      <div class="details-header">
        <h4>${item}</h4>
        <button class="details-close" onclick="this.parentElement.parentElement.style.opacity='0'">×</button>
      </div>
      <p>${detail}</p>
      <div class="details-actions">
        <button class="details-btn">View Projects</button>
        <button class="details-btn">Learn More</button>
      </div>
    `;
    details.style.opacity = 1;
    details.style.transform = "translateX(-50%) scale(1)";
  }

  function hideDetails() {
    details.style.opacity = 0;
    details.style.transform = "translateX(-50%) scale(0.9)";
  }

  parentContainer.addEventListener("mouseenter", () => {
    if (!animationFrameId) {
      startAnimation();
    }
  });
  parentContainer.addEventListener("mouseleave", () => {
    hideTooltip();
    hideDetails();
  });

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    let foundSkill = false;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

      if (distance < radius) {
        if (hoveredSkill !== index) {
          hoveredSkill = index;
          updateTooltipContent(item, index);
          showTooltip(event, index);
          canvas.style.cursor = "pointer";
        }
        foundSkill = true;
      }
    });

    if (!foundSkill && hoveredSkill !== null) {
      hideTooltip();
      canvas.style.cursor = "default";
    }
  });

  canvas.addEventListener("mouseleave", () => {
    hideTooltip();
    canvas.style.cursor = "default";
  });

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

      if (distance < radius) {
        showDetails(item, index);
        // Add click animation effect
        skillScales[index] = 0.8;
        setTimeout(() => {
          skillScales[index] = 1.2;
        }, 100);
      }
    });
  });

  // Enhanced touch events for mobile devices
  canvas.addEventListener("touchstart", (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);

      if (distance < radius) {
        hoveredSkill = index;
        updateTooltipContent(item, index);
        showTooltip({ clientX: touch.clientX, clientY: touch.clientY }, index);
        showDetails(item, index);

        // Touch feedback
        skillScales[index] = 0.9;
        setTimeout(() => {
          skillScales[index] = 1.1;
        }, 150);
      }
    });
  });

  canvas.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    let foundSkill = false;

    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const radius = 50 * skillScales[index];
      const distance = Math.sqrt((touchX - x) ** 2 + (touchY - y) ** 2);

      if (distance < radius) {
        if (hoveredSkill !== index) {
          hoveredSkill = index;
          updateTooltipContent(item, index);
          showTooltip(
            { clientX: touch.clientX, clientY: touch.clientY },
            index
          );
        }
        foundSkill = true;
      }
    });

    if (!foundSkill) {
      hideTooltip();
    }
  });

  canvas.addEventListener("touchend", (event) => {
    event.preventDefault();
    setTimeout(() => {
      hideTooltip();
    }, 2000); // Keep tooltip visible longer on touch
  });

  // Initialize canvas and start animation immediately
  window.addEventListener("resize", resizeCanvas);

  // Use ResizeObserver for better responsiveness
  if (window.ResizeObserver) {
    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(parentContainer);
  }

  resizeCanvas();

  // Ensure proper initialization on tablets
  setTimeout(() => {
    resizeCanvas();
  }, 100);

  return canvas;
}

export default skillSection;
