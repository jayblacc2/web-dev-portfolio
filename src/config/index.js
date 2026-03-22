// src/config/index.js

/**
 * Navigation items configuration
 * Centralized navigation structure for header and mobile menu
 */
export const NAVIGATION_ITEMS = [
  { text: "Home", path: "/", sectionId: "home", isDefault: true },
  { text: "About", path: "/about", sectionId: "about" },
  { text: "Skills", path: "/skills", sectionId: "skills" },
  { text: "Projects", path: "/projects", sectionId: "projects" },
  { text: "Contact", path: "/contact", sectionId: "contact" },
];

/**
 * UI Configuration - Centralized UI constants
 * Contains timing, text, and other UI-related values
 */
export const UI_CONFIG = {
  // Animation & Timing (in milliseconds)
  timing: {
    formResetDelay: 1000,
    buttonResetDelay: 4000,
    errorResetDelay: 3000,
    shakeAnimationDuration: 600,
    menuFocusDelay: 100,
    themeTransitionDuration: 200,
  },

  // Form Configuration
  form: {
    maxMessageLength: 500,
    minMessageLength: 10,
    requestTimeout: 30000,
  },

  // Button Text States
  buttonText: {
    default: "Send Message",
    loading: "Sending...",
    success: "Message Sent!",
    error: "Try Again",
  },

  // Button Icons
  buttonIcons: {
    default: "🚀",
    success: "✅",
    error: "❌",
    loading: "⏳",
  },

  // Alert Messages
  messages: {
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Something went wrong. Please try again.",
    networkError: "Network connection error. Please check your internet.",
    timeout: "Request timed out. Please try again.",
    validationError: "Please fix the form errors.",
  },

  // Canvas Animation Settings
  canvas: {
    targetFps: 30,
    defaultAnimationSpeed: 1,
    scaleTransitionSpeed: 0.15,
    opacityTransitionSpeed: 0.15,
    focusedScale: 1.2,
    unfocusedOpacity: 0.6,
  },

  // Accessibility
  aria: {
    skipLinkText: "Skip to main content",
    mainNavLabel: "Main navigation",
    mobileMenuLabel: "Toggle mobile menu",
    footerLabel: "Site footer",
  },
};

/**
 * Brand Configuration
 */
export const BRAND_CONFIG = {
  name: "<Johnson />",
  author: "Jayblacc",
  copyright: {
    text: "All rights reserved",
    madeWith: "love",
  },
};

/**
 * Main application configuration
 * Environment-based settings
 */
const config = {
  name: process.env.PORTFOLIO_NAME || "Portfolio",
  ogImage: process.env.OG_IMAGE_URL || "/images/og-preview.jpg",
  formspree: process.env.FORMSPREE_ENDPOINT,

  url:
    process.env.PORTFOLIO_URL || "https://web-dev-portfolio-brown.vercel.app/",

  social: {
    linkedin: process.env.LINKEDIN_URL,
    github: process.env.GITHUB_URL,
  },
  contact: {
    email: process.env.EMAIL,
  },
  analytics: {
    googleId: process.env.ANALYTICS_ID,
  },
  api: {
    baseUrl: process.env.API_BASE_URL,
  },
  errorTracking: {
    sentryDsn: process.env.SENTRY_DSN,
    enabled: process.env.ERROR_TRACKING_ENABLED === "true",
  },
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
};

export default config;
