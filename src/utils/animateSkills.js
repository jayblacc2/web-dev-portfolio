import {createHtmlElement} from './utils';

export function animatedSkill(items, parentContainer) {
  // Variables
  const canvas = createHtmlElement('canvas', {
    class: 'skillsCanvas',
    id: 'skillsCanvas',
  });
  parentContainer.appendChild(canvas);

  // Set initial canvas dimensions
  canvas.width = parentContainer.clientWidth;
  canvas.height = parentContainer.clientHeight;

  const tooltip = createHtmlElement('div', {
    class: 'tooltip',
    id: 'tooltip',
  });
  parentContainer.appendChild(tooltip);

  const details = createHtmlElement('div', {
    class: 'details',
    id: 'details',
  });
  parentContainer.appendChild(details);

  const themeSelector = createHtmlElement('div', {
    class: 'theme-selector',
  });
  parentContainer.appendChild(themeSelector);

  const themes = [
    {
      background: '#007bff',
      gradient: ['#007bff', '#0056b3'],
    },
    {
      background: '#ff007b',
      gradient: ['#ff007b', '#b30056'],
    },
    {
      background: '#00ff7b',
      gradient: ['#00ff7b', '#00b356'],
    },
  ];

  // Add sound effects
  const hoverSound = new Audio('path/to/hover-sound.mp3');
  const clickSound = new Audio('path/to/click-sound.mp3');

  function playHoverSound() {
    hoverSound.currentTime = 0;
    hoverSound.play();
  }

  function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
  }

  // Event listeners for sound effects
  canvas.addEventListener('mousemove', playHoverSound);
  canvas.addEventListener('click', playClickSound);

  themes.forEach((theme, index) => {
    const button = document.createElement('div');
    button.className = 'theme-button';
    button.style.background = theme.background;
    button.addEventListener('click', () => setTheme(index));
    themeSelector.appendChild(button);
  });

  function setTheme(index) {
    currentTheme = themes[index];
    draw();
  }

  let currentTheme = themes[0];

  // Animate
  const ctx = canvas.getContext('2d');
  let CONTAINER_RADIUS = Math.min(window.innerWidth, window.innerHeight) / 4;
  let CENTER_X = canvas.width / 2;
  let CENTER_Y = canvas.height / 2;
  let angleOffset = 0;
  let animationFrameId;

  function resizeCanvas() {
    canvas.width = parentContainer.clientWidth;
    canvas.height = parentContainer.clientHeight;
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
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.lineWidth = 5;
      ctx.stroke();

      // Draw text
      ctx.font = '16px Arial';
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
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

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  parentContainer.addEventListener('mouseenter', startAnimation);
  parentContainer.addEventListener('mouseleave', stopAnimation);

  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    let foundItem = false;
    items.forEach((item, index) => {
      const angle = (index / items.length) * (2 * Math.PI) + angleOffset;
      const x = CENTER_X + CONTAINER_RADIUS * Math.cos(angle);
      const y = CENTER_Y + CONTAINER_RADIUS * Math.sin(angle);
      const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
      if (distance < 50) {
        updateTooltipContent(item);
        showTooltip(event);
        foundItem = true;
      }
    });
    if (!foundItem) {
      hideTooltip();
    }
  });

  canvas.addEventListener('mouseleave', hideTooltip);

  canvas.addEventListener('click', (event) => {
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

  canvas.addEventListener('mouseleave', hideDetails);

  window.addEventListener('DOMContentLoaded', () => {
    resizeCanvas();
    startAnimation(); // Start animation immediately
  });

  return canvas;
}
