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

  let isCanvasInitialized = false;

  // Function to initialize canvas
  const initializeCanvas = () => {
    if (!isCanvasInitialized) {
      setTimeout(() => {
        animatedSkill(items, parentContainer);
        isCanvasInitialized = true;
      }, 50);
    }
  };

  // Function to cleanup canvas
  // Function to cleanup canvas
  const cleanupCanvas = () => {
    if (parentContainer.animationFrameId) {
      cancelAnimationFrame(parentContainer.animationFrameId);
      parentContainer.animationFrameId = null;
    }

    if (parentContainer.resizeObserver) {
      parentContainer.resizeObserver.disconnect();
    }
    isCanvasInitialized = false;
  };
  // Set up callback for section initialization
  hero.sectionInitCallback = () => {
    initializeCanvas();
  };

  // Set up callback for section cleanup
  hero.sectionCleanupCallback = () => {
    cleanupCanvas();
  };

  // Initialize immediately if section is already visible (for initial page load)
  if (
    hero.style.display !== "none" ||
    hero.classList.contains("active-section")
  ) {
    setTimeout(() => initializeCanvas(), 100);
  }

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
    { label: "Projects Built", value: "7+", icon: "💼" },
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
        <p class="skills-subtitle">Click skills for details</p>
      </div>
      <canvas class="skillsCanvas" id="skillsCanvas" width="650" height="650"></canvas>
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
  // Clean up any existing animation before reinitializing
  if (parentContainer.animationFrameId) {
    cancelAnimationFrame(parentContainer.animationFrameId);
    parentContainer.animationFrameId = null;
  }

  parentContainer.innerHTML = initiateSkills();
  // Get the elements from the parent container
  const canvas = parentContainer.querySelector("#skillsCanvas");
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

  // Clear existing theme buttons to prevent duplicate event listeners
  themeSelector.innerHTML = '<span class="theme-label">Themes:</span>';

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
    // Force immediate redraw to show theme change
    draw();
  }

  let currentTheme = themes[0];
  let isPlaying = false;
  let animationSpeed = 1;

  //animate
  const ctx = canvas.getContext("2d");
  let CONTAINER_RADIUS = Math.min(window.innerWidth, window.innerHeight) / 6;
  let CENTER_X = canvas.width / 2;
  let CENTER_Y = canvas.height / 2;
  let angleOffset = 0;
  let focusedSkill = null;
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
    // Clear the canvas first
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
      if (focusedSkill === index) {
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
        focusedSkill === index
          ? currentTheme.accent
          : "rgba(255, 255, 255, 0.3)";
      ctx.lineWidth = focusedSkill === index ? 3 : 2;
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
    if (focusedSkill !== null) {
      drawConnectionLines();
    }
  }

  function drawConnectionLines() {
    const focusedAngle =
      (focusedSkill / items.length) * (2 * Math.PI) + angleOffset;
    const focusedX = CENTER_X + CONTAINER_RADIUS * Math.cos(focusedAngle);
    const focusedY = CENTER_Y + CONTAINER_RADIUS * Math.sin(focusedAngle);

    ctx.strokeStyle = currentTheme.accent + "30";
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);

    items.forEach((_, index) => {
      if (index !== focusedSkill) {
        const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
        const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
        const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(focusedX, focusedY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }
    });

    ctx.setLineDash([]);
  }

  draw();

  function animate() {
    let needsNextFrame = false;

    if (isPlaying) {
      angleOffset = Date.now() * 0.001 * animationSpeed;
      needsNextFrame = true;
    }

    // Smooth scale and opacity transitions with optimization
    let hasActiveTransitions = false;
    skillScales.forEach((scale, index) => {
      const targetScale = focusedSkill === index ? 1.2 : 1;
      const diff = targetScale - scale;
      if (Math.abs(diff) > 0.001) {
        skillScales[index] += diff * 0.1;
        hasActiveTransitions = true;
      } else {
        skillScales[index] = targetScale;
      }
    });

    skillOpacities.forEach((opacity, index) => {
      const targetOpacity =
        focusedSkill === null || focusedSkill === index ? 1 : 0.6;
      const diff = targetOpacity - opacity;
      if (Math.abs(diff) > 0.001) {
        skillOpacities[index] += diff * 0.1;
        hasActiveTransitions = true;
      } else {
        skillOpacities[index] = targetOpacity;
      }
    });

    if (hasActiveTransitions || isPlaying) {
      draw();
      needsNextFrame = true;
    }

    if (needsNextFrame) {
      parentContainer.animationFrameId = requestAnimationFrame(animate);
    } else {
      parentContainer.animationFrameId = null;
    }
  }

  function startAnimation() {
    if (!parentContainer.animationFrameId) {
      animate(); // Start the animation loop on demand
    }
  }

  function stopAnimation() {
    if (parentContainer.animationFrameId) {
      cancelAnimationFrame(parentContainer.animationFrameId);
      parentContainer.animationFrameId = null;
    }
  }

  function togglePlayPause() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
    playPauseBtn.title = isPlaying ? "Pause Animation" : "Play Animation";
    if (isPlaying) {
      startAnimation(); // Start animation when playing
    }
  }

  function updateAnimationSpeed(speed) {
    animationSpeed = parseFloat(speed);
  }

  // Control event listeners
  playPauseBtn.addEventListener("click", togglePlayPause);
  speedSlider.addEventListener("input", (e) =>
    updateAnimationSpeed(e.target.value)
  );

  // Set initial button state
  playPauseBtn.textContent = isPlaying ? "⏸️" : "▶️";
  playPauseBtn.title = isPlaying ? "Pause Animation" : "Play Animation";

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
    // Animation should already be running, no need to restart
    // This event can be used for other hover effects if needed
  });
  parentContainer.addEventListener("mouseleave", () => {
    focusedSkill = null;
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
        if (focusedSkill !== index) {
          focusedSkill = index;
          canvas.style.cursor = "pointer";
          startAnimation(); // Start animation for smooth transitions
        }
        foundSkill = true;
      }
    });

    if (!foundSkill && focusedSkill !== null) {
      focusedSkill = null;
      canvas.style.cursor = "default";
    }
  });

  canvas.addEventListener("mouseleave", () => {
    focusedSkill = null;
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
        startAnimation(); // Start animation for click effect
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
        focusedSkill = index;
        startAnimation(); // Start animation for touch feedback
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
        if (focusedSkill !== index) {
          focusedSkill = index;
          startAnimation(); // Start animation for smooth transitions
        }
        foundSkill = true;
      }
    });

    if (!foundSkill && focusedSkill !== null) {
      focusedSkill = null;
    }
  });

  canvas.addEventListener("touchend", (event) => {
    event.preventDefault();
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
