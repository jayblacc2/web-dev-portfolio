
// src/config/index.js
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
  isProduction: process.env.NODE_ENV === "production",
  isDevelopment: process.env.NODE_ENV === "development",
};

export default config;
