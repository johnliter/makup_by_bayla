# Makeup by Bayla - Portfolio Website

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [File Structure](#file-structure)
- [Customization](#customization)
- [License](#license)

## Overview

Makeup by Bayla is a portfolio website designed to showcase the makeup artistry of Bayla. The site features a responsive design, a lightbox gallery for viewing images, and a "Back to Top" button for easy navigation. This documentation provides an overview of the project, instructions for setting up the site locally, and details on customization options.

## Features

- Responsive design for all devices
- Lightbox gallery for viewing photos
- "Back to Top" button for easy navigation
- Gothic-inspired aesthetic
- Lazy loading for images
- Semantic HTML structure for accessibility and SEO

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS
- JavaScript
- SimpleLightbox.js
- Google Fonts

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Safari)
- A code editor (e.g., VS Code, Sublime Text)
- Node.js and npm (for package management, optional if customization involves new packages)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/makeup-by-bayla.git
    cd makeup-by-bayla
    ```

2. Open the `index.html` file in your web browser to view the website.

3. If you plan to customize or extend the site using additional npm packages:
    ```bash
    npm install
    ```

## File Structure

The project directory structure is as follows:

makeup-by-bayla/
├── photos/
│ ├── image1.jpg
│ ├── image2.jpg
│ └── ... (add all your images here)
├── styles.css
├── script.js
└── index.html


## Customization

### Changing Images

- Replace the images in the `photos` directory with your own images.
- Ensure the image file names match those referenced in the `index.html`.

### Modifying Text Content

- Open `index.html` in your code editor.
- Update the text within the `<h1>`, `<h2>`, `<p>`, and other relevant tags to customize the content.

### Adjusting Styles

- Open `styles.css` in your code editor.
- Modify the CSS classes to change the styles of various elements. Tailwind CSS classes are used extensively for layout and styling.

### JavaScript Functionality

- Open `script.js` to modify or extend the JavaScript functionality, such as the lightbox behavior or "Back to Top" button functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
