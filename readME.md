# Modern Portfolio Website

A dynamic and responsive portfolio website built with JavaScript, featuring smooth animations, interactive sections, and modern design principles.

## Features

- **Animated Sections**: Smooth transitions and animations using AOS (Animate On Scroll) library
- **Interactive Skills Display**: Dynamic visualization of technical skills with animated progress bars
- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean and professional interface with glassmorphism effects
- **Contact Form**: Functional contact section with form validation
- **Dark Theme**: Elegant dark theme with accent colors

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- Webpack
- AOS Library
- BEM Methodology

## Sections

1. **Home**: Personal introduction with animated hero section
2. **About**: Professional summary and tech stack display
3. **Skills**: Interactive visualization of technical competencies
4. **Projects**: Showcase of development projects
5. **Contact**: Contact form and social media links

## Getting Started

1. Clone the repository:

git clone [repository-url]

2. Navigate to the project directory:

cd modern-portfolio-website

3. Install dependencies:

npm install

4. Start the development server:

npm run dev

5. Open your browser and visit `http://localhost:3000`

## Building for Production

To create a production build, run:

npm run build

The optimized files will be generated in the `dist` folder.

## Project Structure

modern-portfolio-website/
│
├── src/
│ ├── js/
│ │ ├── animations.js
│ │ ├── darkMode.js
│ │ ├── formValidation.js
│ │ ├── skillsDisplay.js
│ │ └── main.js
│ │
│ ├── scss/
│ │ ├── components/
│ │ ├── layout/
│ │ ├── utils/
│ │ └── main.scss
│ │
│ └── index.html
│
├── webpack.config.js
├── package.json
└── README.md

## Key Features Implementation

- **Animations**: Implemented using the AOS library. Configuration can be found in `src/js/animations.js`.
- **Dark Mode**: Toggle functionality in `src/js/darkMode.js`. Uses localStorage for persistence.
- **Skills Display**: Interactive skill bars with animation in `src/js/skillsDisplay.js`.
- **Form Validation**: Client-side validation logic in `src/js/formValidation.js`.
- **Responsive Design**: Utilizes CSS Grid and Flexbox for layout. Media queries in respective SCSS files.

## Browser Support

The website is compatible with the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Developed by Jayblacc
- AOS Library by Michał Sajnóg

For any additional information or queries, please open an issue in the GitHub repository.

Happy coding!
