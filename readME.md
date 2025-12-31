# Personal Portfolio Website

A modern, production-ready portfolio website built with vanilla JavaScript and Webpack. Features SPA-style navigation, comprehensive SEO optimization, and a fully modular architecture.

## Features

### Core Features

- **SPA Navigation**: Clean URL routing with History API (no hash URLs)
- **Responsive Design**: Mobile-first layout with hamburger menu
- **Interactive Skills Display**: Animated progress bars with hover effects
- **Project Showcase**: Filterable grid with project cards and live/GitHub links
- **Contact Form**: Formspree integration with validation and error handling
- **Cookie Consent**: GDPR-compliant cookie consent banner

### Production Features

- **SEO Optimized**: Open Graph, Twitter Cards, Schema.org structured data
- **Performance**: Code splitting, image optimization, vendor chunking
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Error Handling**: Global error handlers with graceful fallbacks
- **PWA Ready**: Web manifest with app icons

## Tech Stack

| Category         | Technologies                                |
| ---------------- | ------------------------------------------- |
| **Core**         | HTML5, CSS3, JavaScript (ES6+)              |
| **Build**        | Webpack 5, Babel                            |
| **Libraries**    | AOS, Particles.js, Font Awesome 6           |
| **Optimization** | Sharp (images), Terser (JS), MiniCssExtract |
| **Deployment**   | Netlify, Vercel (configured)                |

## Sections

| Section      | Description                                      |
| ------------ | ------------------------------------------------ |
| **Home**     | Hero with particle background and animated title |
| **About**    | Bio, profile image, and downloadable resume      |
| **Skills**   | Interactive skill cards with progress indicators |
| **Projects** | Filterable project gallery with category tags    |
| **Contact**  | Contact form with Formspree backend              |

## Project Structure

```text
Portfolio/
├── public/                    # Static assets (copied to dist)
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── android-chrome-*.png
│   ├── resume.pdf
│   └── _redirects             # Netlify SPA redirects
│
├── src/
│   ├── index.html             # HTML template with SEO meta tags
│   ├── index.js               # App entry point
│   ├── site.webmanifest       # PWA manifest template
│   │
│   ├── config/
│   │   └── index.js           # Environment configuration
│   │
│   ├── modules/
│   │   ├── loadHeader.js      # Header with SPA navigation
│   │   ├── loadSection.js     # Section loader with fallbacks
│   │   └── loadFooter.js      # Footer component
│   │
│   ├── sections/
│   │   ├── home.js            # Home section with particles
│   │   ├── about.js           # About section
│   │   ├── skill.js           # Skills with progress bars
│   │   ├── projects.js        # Project gallery
│   │   └── contact.js         # Contact form
│   │
│   ├── style/
│   │   ├── style.css          # Main styles
│   │   ├── responsive.css     # Media queries
│   │   └── [section].css      # Section-specific styles
│   │
│   ├── utils/
│   │   ├── utils.js           # DOM utilities
│   │   ├── constant.js        # Class names and text constants
│   │   └── animateSkills.js   # Skill animation logic
│   │
│   └── images/
│       └── icons/             # Skill icons (SVG)
│
├── webpack.config.js          # Webpack configuration
├── netlify.toml               # Netlify deployment config
├── vercel.json                # Vercel deployment config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server (http://localhost:3000)
npm run dev
```

### Production Build

```bash
# Create optimized production build
npm run build
```

### Available Scripts

| Script          | Description                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Start dev server with hot reload on port 3000 |
| `npm run build` | Production build with optimizations           |
| `npm run watch` | Build and watch for changes                   |

## Environment Variables

Create a `.env` file in the project root:

```env
# Required
FORMSPREE_ENDPOINT=your_formspree_endpoint

# Optional - SEO & Branding
PORTFOLIO_NAME=Your Name
PORTFOLIO_URL=https://yoursite.com
OG_IMAGE_URL=/images/og-preview.jpg

# Optional - Social Links
LINKEDIN_URL=https://linkedin.com/in/yourprofile
GITHUB_URL=https://github.com/yourusername
EMAIL=your@email.com

# Optional - Analytics & Error Tracking
ANALYTICS_ID=G-XXXXXXXXXX
SENTRY_DSN=your_sentry_dsn
ERROR_TRACKING_ENABLED=true
```

## Deployment

### Netlify

The project includes `netlify.toml` with SPA redirect configuration. Simply connect your repository to Netlify.

### Vercel

The project includes `vercel.json` with rewrite rules. Deploy directly from the Vercel dashboard.

### Manual Deployment

Run `npm run build` and deploy the `dist/` folder to any static hosting service.

## Build Optimizations

- **Code Splitting**: Vendor libraries bundled separately
- **Tree Shaking**: Unused code eliminated
- **Image Optimization**: Sharp-based compression (85% quality)
- **CSS Extraction**: Separate CSS files in production
- **JS Minification**: Terser with console.log removal
- **Content Hashing**: Cache-busting file names

## Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | 80+     |
| Firefox | 75+     |
| Safari  | 13+     |
| Edge    | 80+     |

## License

This project is open source and available under the [ISC License](LICENSE).

## Author

**Jayblacc** - Front-End Developer

- Portfolio: [web-dev-portfolio-brown.vercel.app](https://web-dev-portfolio-brown.vercel.app/)
- GitHub: [@jayblacc](https://github.com/jayblacc)

---

For questions or suggestions, feel free to reach out via the contact form or open an issue on GitHub.
