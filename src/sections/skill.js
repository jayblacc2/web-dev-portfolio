import {
  createHtmlElement,
  renderTitle,
  renderSubTitle,
  cookieConsent,
} from "../utils/utils";
import { skillText, items, PROJECT_STATS as stats } from "../utils/variable";
import { ANIMATION_THEMES, SKILL_BUBBLE_BASE_RADIUS } from "../utils/constant";

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

  // Function to initialize canvas when section becomes visible
  const initializeSectionCanvas = () => {
    if (!isCanvasInitialized) {
      setTimeout(() => {
        animatedSkill(items, parentContainer);
        isCanvasInitialized = true;
      }, 50);
    }
  };

  // Function to cleanup canvas and remove event listeners
  const cleanupCanvas = () => {
    if (parentContainer.animationFrameId) {
      cancelAnimationFrame(parentContainer.animationFrameId);
      parentContainer.animationFrameId = null;
    }

    if (parentContainer.resizeObserver) {
      parentContainer.resizeObserver.disconnect();
      parentContainer.resizeObserver = null;
    }

    // Remove window resize listener to prevent memory leak
    if (parentContainer.resizeHandler) {
      window.removeEventListener("resize", parentContainer.resizeHandler);
      parentContainer.resizeHandler = null;
    }

    isCanvasInitialized = false;
  };
  // Set up callback for section initialization
  hero.sectionInitCallback = () => {
    initializeSectionCanvas();
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
    setTimeout(() => initializeSectionCanvas(), 100);
  }

  heroImage.appendChild(parentContainer);
  cookieConsent(); // Replace alertBadge("Show", "blue");
  return hero;
}

function createSkillStats() {
  const statsContainer = createHtmlElement("div", {
    class: "skill-stats-container",
  });

  stats.forEach((stat, index) => {
    const statCard = createHtmlElement("div", {
      class: "skill-stat-card",
    });

    statCard.innerHTML = `
      <div class="stat-icon">${stat.iconSvg}</div>
      <div class="stat-content">
        <div class="stat-value">${stat.value}</div>
        <div class="stat-label">${stat.label}</div>
      </div>
    `;

    statsContainer.appendChild(statCard);

    // Add divider between cards (not after last one)
    if (index < stats.length - 1) {
      const divider = createHtmlElement("div", { class: "stat-divider" });
      statsContainer.appendChild(divider);
    }
  });

  return statsContainer;
}

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

const SKILL_DESCRIPTIONS = {
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

/**
 * Creates the initial animation state object
 */
function createAnimationState(items, parentContainer) {
  return {
    items,
    parentContainer,
    canvas: null,
    ctx: null,
    details: null,
    currentTheme: ANIMATION_THEMES[0],
    isPlaying: false,
    animationSpeed: 1,
    containerRadius: Math.min(window.innerWidth, window.innerHeight) / 6,
    centerX: 0,
    centerY: 0,
    angleOffset: 0,
    focusedSkill: null,
    skillScales: items.map(() => 1),
    skillOpacities: items.map(() => 1),
    resizeObserver: null,
  };
}

/**
 * Initializes the canvas element and sets up resize handling
 */
function initializeCanvas(state) {
  const { parentContainer } = state;

  state.canvas = parentContainer.querySelector("#skillsCanvas");
  state.details = parentContainer.querySelector("#details");
  state.ctx = state.canvas.getContext("2d");

  const resizeCanvas = () => {
    const rect = state.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    state.canvas.width = rect.width * dpr;
    state.canvas.height = rect.height * dpr;
    state.ctx.scale(dpr, dpr);

    state.canvas.style.width = rect.width + "px";
    state.canvas.style.height = rect.height + "px";

    state.centerX = rect.width / 2;
    state.centerY = rect.height / 2;
    state.containerRadius = Math.min(rect.width, rect.height) / 4;

    drawCanvas(state);
  };

  // Store handler reference for cleanup
  parentContainer.resizeHandler = resizeCanvas;

  // Set up resize handling
  window.addEventListener("resize", resizeCanvas);

  if (window.ResizeObserver) {
    state.resizeObserver = new ResizeObserver(resizeCanvas);
    state.resizeObserver.observe(parentContainer);
    parentContainer.resizeObserver = state.resizeObserver;
  }

  resizeCanvas();
  setTimeout(resizeCanvas, 100);

  return resizeCanvas;
}

/**
 * Creates the theme selector UI and handles theme switching
 */
function createThemeSelector(state) {
  const { parentContainer, canvas } = state;
  const themeSelector = parentContainer.querySelector(".theme-selector");

  themeSelector.innerHTML = '<span class="theme-label">Themes:</span>';

  const setTheme = (index) => {
    state.currentTheme = ANIMATION_THEMES[index];
    canvas.style.filter = "brightness(0.8)";
    setTimeout(() => {
      canvas.style.filter = "brightness(1)";
    }, 200);
    drawCanvas(state);
  };

  ANIMATION_THEMES.forEach((theme, index) => {
    const button = document.createElement("div");
    button.className = "theme-button";
    button.style.background = theme.background;
    button.title = theme.name;
    button.addEventListener("click", () => setTheme(index));
    themeSelector.appendChild(button);
  });
}

/**
 * Sets up animation play/pause and speed controls
 */
function setupAnimationControls(state) {
  const { parentContainer } = state;
  const playPauseBtn = parentContainer.querySelector("#playPauseBtn");
  const speedSlider = parentContainer.querySelector("#speedSlider");

  const updateButtonState = () => {
    playPauseBtn.textContent = state.isPlaying ? "⏸️" : "▶️";
    playPauseBtn.title = state.isPlaying ? "Pause Animation" : "Play Animation";
  };

  const togglePlayPause = () => {
    state.isPlaying = !state.isPlaying;
    updateButtonState();
    if (state.isPlaying) {
      startAnimation(state);
    }
  };

  const updateSpeed = (speed) => {
    state.animationSpeed = parseFloat(speed);
  };

  playPauseBtn.addEventListener("click", togglePlayPause);
  speedSlider.addEventListener("input", (e) => updateSpeed(e.target.value));

  updateButtonState();
}

/**
 * Sets up all mouse and touch event listeners for the canvas
 */
function setupEventListeners(state) {
  const { canvas, parentContainer, items } = state;

  const getSkillAtPosition = (x, y) => {
    for (let index = 0; index < items.length; index++) {
      const angle = (index / items.length) * (2 * Math.PI) + state.angleOffset;
      const skillX = state.centerX + state.containerRadius * Math.cos(angle);
      const skillY = state.centerY + state.containerRadius * Math.sin(angle);
      const radius = SKILL_BUBBLE_BASE_RADIUS * state.skillScales[index];
      const distance = Math.sqrt((x - skillX) ** 2 + (y - skillY) ** 2);

      if (distance < radius) {
        return { index, item: items[index] };
      }
    }
    return null;
  };

  const handleSkillHover = (x, y) => {
    const skill = getSkillAtPosition(x, y);

    if (skill) {
      if (state.focusedSkill !== skill.index) {
        state.focusedSkill = skill.index;
        canvas.style.cursor = "pointer";
        startAnimation(state);
      }
      return;
    }

    if (state.focusedSkill !== null) {
      state.focusedSkill = null;
      canvas.style.cursor = "default";
    }
  };

  const handleSkillClick = (x, y) => {
    const skill = getSkillAtPosition(x, y);

    if (skill) {
      showDetails(state, skill.item);
      state.skillScales[skill.index] = 0.8;
      startAnimation(state);
      setTimeout(() => {
        state.skillScales[skill.index] = 1.2;
      }, 100);
    }
  };

  // Mouse events
  parentContainer.addEventListener("mouseleave", () => {
    state.focusedSkill = null;
    hideDetails(state);
  });

  canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    handleSkillHover(event.clientX - rect.left, event.clientY - rect.top);
  });

  canvas.addEventListener("mouseleave", () => {
    state.focusedSkill = null;
    canvas.style.cursor = "default";
  });

  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    handleSkillClick(event.clientX - rect.left, event.clientY - rect.top);
  });

  // Touch events
  canvas.addEventListener("touchstart", (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const skill = getSkillAtPosition(x, y);

    if (skill) {
      state.focusedSkill = skill.index;
      startAnimation(state);
      showDetails(state, skill.item);
      state.skillScales[skill.index] = 0.9;
      setTimeout(() => {
        state.skillScales[skill.index] = 1.1;
      }, 150);
    }
  });

  canvas.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const touch = event.touches[0];
    const rect = canvas.getBoundingClientRect();
    handleSkillHover(touch.clientX - rect.left, touch.clientY - rect.top);
  });
}

/**
 * Resets canvas shadow properties
 */
function resetShadow(ctx) {
  ctx.shadowColor = "transparent";
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
}

/**
 * Draws a single skill bubble on the canvas
 */
function drawSkillBubble(state, item, index) {
  const {
    ctx,
    items,
    centerX,
    centerY,
    containerRadius,
    angleOffset,
    currentTheme,
    focusedSkill,
    skillScales,
    skillOpacities,
  } = state;

  const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
  const x = centerX + containerRadius * Math.cos(angle);
  const y = centerY + containerRadius * Math.sin(angle);

  const scale = skillScales[index];
  const opacity = skillOpacities[index];
  const radius = SKILL_BUBBLE_BASE_RADIUS * scale;
  const isFocused = focusedSkill === index;

  // Draw outer glow effect for focused skill
  if (isFocused) {
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

  // Draw main gradient circle
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
  ctx.strokeStyle = isFocused
    ? currentTheme.accent
    : "rgba(255, 255, 255, 0.3)";
  ctx.lineWidth = isFocused ? 3 : 2;
  ctx.stroke();
  resetShadow(ctx);

  // Draw text
  const fontSize = Math.max(12, Math.min(16, radius / 3));
  ctx.font = `bold ${fontSize}px 'Segoe UI', Arial, sans-serif`;
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = "rgba(0, 0, 0, 0.7)";
  ctx.shadowBlur = 4;
  ctx.fillText(item, x, y);

  // Reset
  resetShadow(ctx);
  ctx.globalAlpha = 1;
}

/**
 * Draws connection lines from focused skill to others
 */
function drawConnectionLines(state) {
  const {
    ctx,
    items,
    centerX,
    centerY,
    containerRadius,
    angleOffset,
    focusedSkill,
    currentTheme,
  } = state;

  const focusedAngle =
    (focusedSkill / items.length) * (2 * Math.PI) + angleOffset;
  const focusedX = centerX + containerRadius * Math.cos(focusedAngle);
  const focusedY = centerY + containerRadius * Math.sin(focusedAngle);

  ctx.strokeStyle = currentTheme.accent + "30";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);

  items.forEach((_, index) => {
    if (index !== focusedSkill) {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = centerX + containerRadius * Math.cos(angle);
      const y = centerY + containerRadius * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(focusedX, focusedY);
      ctx.lineTo(x, y);
      ctx.stroke();
    }
  });

  ctx.setLineDash([]);
}

/**
 * Main draw function that renders all canvas elements
 */
function drawCanvas(state) {
  const {
    ctx,
    canvas,
    items,
    centerX,
    centerY,
    containerRadius,
    focusedSkill,
  } = state;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background gradient
  const bgGradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    containerRadius * 1.5
  );
  bgGradient.addColorStop(0, "rgba(255, 255, 255, 0.02)");
  bgGradient.addColorStop(1, "rgba(0, 0, 0, 0.05)");
  ctx.fillStyle = bgGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw all skill bubbles
  items.forEach((item, index) => drawSkillBubble(state, item, index));

  // Draw connection lines if a skill is focused
  if (focusedSkill !== null) {
    drawConnectionLines(state);
  }
}

/**
 * Animation loop with optimized frame rendering
 */
function animate(state) {
  const {
    parentContainer,
    skillScales,
    skillOpacities,
    focusedSkill,
    isPlaying,
    animationSpeed,
  } = state;

  // Skip animation when tab is not visible (saves CPU/battery)
  if (document.visibilityState !== "visible") {
    // Schedule check when tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange
        );
        if (isPlaying || state.focusedSkill !== null) {
          animate(state);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    parentContainer.animationFrameId = null;
    return;
  }

  let needsNextFrame = false;

  if (isPlaying) {
    state.angleOffset = Date.now() * 0.001 * animationSpeed;
    needsNextFrame = true;
  }

  // Smooth scale transitions
  let hasActiveTransitions = false;
  skillScales.forEach((scale, index) => {
    const targetScale = focusedSkill === index ? 1.2 : 1;
    const diff = targetScale - scale;
    if (Math.abs(diff) > 0.001) {
      state.skillScales[index] += diff * 0.1;
      hasActiveTransitions = true;
    } else {
      state.skillScales[index] = targetScale;
    }
  });

  // Smooth opacity transitions
  skillOpacities.forEach((opacity, index) => {
    const targetOpacity =
      focusedSkill === null || focusedSkill === index ? 1 : 0.6;
    const diff = targetOpacity - opacity;
    if (Math.abs(diff) > 0.001) {
      state.skillOpacities[index] += diff * 0.1;
      hasActiveTransitions = true;
    } else {
      state.skillOpacities[index] = targetOpacity;
    }
  });

  if (hasActiveTransitions || isPlaying) {
    drawCanvas(state);
    needsNextFrame = true;
  }

  if (needsNextFrame) {
    parentContainer.animationFrameId = requestAnimationFrame(() =>
      animate(state)
    );
  } else {
    parentContainer.animationFrameId = null;
  }
}

/**
 * Starts the animation loop if not already running
 */
function startAnimation(state) {
  if (!state.parentContainer.animationFrameId) {
    animate(state);
  }
}

/**
 * Shows skill details panel
 */
function showDetails(state, item) {
  const { details } = state;
  const description =
    SKILL_DESCRIPTIONS[item] || `Professional experience with ${item}`;

  details.innerHTML = "";

  const detailsHeader = document.createElement("div");
  detailsHeader.className = "details-header";

  const h4 = document.createElement("h4");
  h4.textContent = item;
  detailsHeader.appendChild(h4);

  const closeButton = document.createElement("button");
  closeButton.className = "details-close";
  closeButton.textContent = "×";
  closeButton.addEventListener("click", () => hideDetails(state));
  detailsHeader.appendChild(closeButton);

  const p = document.createElement("p");
  p.textContent = description;

  const detailsActions = document.createElement("div");
  detailsActions.className = "details-actions";

  ["View Projects", "Learn More"].forEach((text) => {
    const btn = document.createElement("button");
    btn.className = "details-btn";
    btn.textContent = text;
    detailsActions.appendChild(btn);
  });

  details.append(detailsHeader, p, detailsActions);
  details.style.opacity = 1;
  details.style.transform = "translateX(-50%) scale(1)";
}

/**
 * Hides skill details panel
 */
function hideDetails(state) {
  state.details.style.opacity = 0;
  state.details.style.transform = "translateX(-50%) scale(0.9)";
}

/**
 * Main entry point - orchestrates all skill animation components
 */
export function animatedSkill(items, parentContainer) {
  // Clean up existing animation
  if (parentContainer.animationFrameId) {
    cancelAnimationFrame(parentContainer.animationFrameId);
    parentContainer.animationFrameId = null;
  }

  if (parentContainer.resizeObserver) {
    parentContainer.resizeObserver.disconnect();
    parentContainer.resizeObserver = null;
  }

  // Initialize DOM
  parentContainer.innerHTML = initiateSkills();

  // Create state object
  const state = createAnimationState(items, parentContainer);

  // Set up components
  initializeCanvas(state);
  createThemeSelector(state);
  setupAnimationControls(state);
  setupEventListeners(state);

  // Initial draw
  drawCanvas(state);

  return state.canvas;
}

export default skillSection;
