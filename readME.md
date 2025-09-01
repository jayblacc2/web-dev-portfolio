# Personal Portfolio Website

A modern, modular portfolio website built with HTML, CSS, JavaScript, and Webpack to showcase my projects and skills. Features a responsive design with modular architecture for maintainability.

## Features

- **Responsive Design**: Mobile-first layout that adapts seamlessly across devices
- **Dark/Light Theme**: Toggle between dark and light modes with theme persistence
- **Smooth Scrolling**: Clean section transitions with scroll behavior
- **Project Gallery**: Interactive grid layout showcasing key projects
- **Contact Section**: Simple contact form with basic validation
- **Modular Architecture**: Organized codebase with separate modules for each section

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack (Module bundler)
- npm (Package manager)
- Babel (JavaScript compiler)
- Font Awesome Icons
- AOS (Animate On Scroll library)
- Particles.js (Background particle effects)

## Sections

1. **Home**: Welcome section with brief introduction
2. **About**: Background information and skills overview
3. **Projects**: Portfolio of development work
4. **Skills**: Technical skills and proficiency display
5. **Contact**: Contact form and social media links

## Project Structure

Portfolio/
│
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   ├── site.webmanifest
│   └── image/
│
├── src/
│   ├── index.html
│   ├── index.js
│   ├── assets/
│   │   ├── docs/
│   │   │   └── resume.pdf
│   │   ├── images/
│   │   │   ├── adv-todo.webp
│   │   │   ├── book-library.webp
│   │   │   ├── portfolio.webp
│   │   │   ├── recipe.webp
│   │   │   ├── skill-portfolio.webp
│   │   │   └── timer-app.webp
│   │   └── images/
│   ├── images/
│   │   ├── favicon.png
│   │   ├── hero-bg.jpg
│   │   ├── logo-1.png
│   │   ├── portfolio.webp
│   │   ├── user.jpg
│   │   ├── icons/
│   │   │   ├── bootstrap.svg
│   │   │   ├── css.svg
│   │   │   ├── favicon.ico
│   │   │   ├── git.svg
│   │   │   ├── html.svg
│   │   │   ├── js.svg
│   │   │   ├── nextjs.svg
│   │   │   ├── react.svg
│   │   │   ├── sass.svg
│   │   │   └── vuejs.svg
│   │   └── svgIcons/
│   │       └── icons.js
│   ├── modules/
│   │   ├── loadFooter.js
│   │   ├── loadHeader.js
│   │   └── loadSection.js
│   ├── sections/
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── home.js
│   │   ├── projects.js
│   │   └── skill.js
│   ├── style/
│   │   ├── about.css
│   │   ├── animate.css
│   │   ├── contact.css
│   │   ├── home.css
│   │   ├── project.css
│   │   ├── responsive.css
│   │   ├── skills.css
│   │   └── style.css
│   └── utils/
│       ├── animateSkills.js
│       ├── constant.js
│       ├── utils.js
│       └── variable.js
│
├── webpack.config.js
├── package.json
├── package-lock.json
└── .gitignore

## Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes

## Key Features Implementation

- **Webpack Bundling**: Modular JavaScript compiled and bundled for production
- **Theme Toggle**: Dark/light mode switch using CSS variables and localStorage
- **Mobile Menu**: Responsive hamburger menu for mobile navigation
- **Form Validation**: Basic client-side validation for contact form
- **Responsive Images**: Optimized images with appropriate sizing for different viewports
- **Modular JavaScript**: Separate files for header, footer, sections, and utilities
- **Animations**: AOS library for scroll-based animations
- **Particle Effects**: Particles.js for interactive background effects

## Browser Support

The website is compatible with modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available under the ISC License.

## Credits

- Developed by Jayblacc
- Icons from Font Awesome
- Animations by AOS (Animate On Scroll)
- Particle effects by Particles.js

For questions or suggestions, feel free to reach out via the contact form or open an issue on GitHub.
