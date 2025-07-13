# AI Project Showcase

A modern, responsive website built with Astro to showcase small, AI-assisted projects developed rapidly (2–4 hours each), with approximately 90% of code generated using AI tools.

## 🚀 Features

- **Clean, Modern Design**: Professional tech-focused aesthetic with glassmorphism effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Astro for optimal speed and SEO
- **Project Showcase**: Filterable grid displaying projects with tech stacks and AI contributions
- **Contact Form**: Professional contact system with multiple communication channels
- **About Section**: Detailed explanation of AI-assisted development approach

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: Custom CSS with modern design patterns
- **Icons**: SVG icons and emojis
- **Deployment**: Static site generation for optimal performance

## 📱 Pages

### Home Page
- Hero section with animated floating icons
- Featured projects preview
- Development statistics and metrics
- Call-to-action sections

### Projects Page
- Grid layout showcasing all projects
- Technology filter functionality
- Project details with demo and GitHub links
- AI contribution indicators

### About Page
- Personal introduction and background
- AI-assisted development philosophy
- Tools and technologies used
- Development approach and metrics

### Contact Page
- Professional contact form
- Multiple contact methods (email, LinkedIn, GitHub, Twitter)
- FAQ section
- Availability and interests

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/dp-lewis/quick-ai-projects.git
   cd quick-ai-projects
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro     # Main layout component
│   ├── pages/
│   │   ├── index.astro          # Home page
│   │   ├── projects.astro       # Projects showcase
│   │   ├── about.astro          # About page
│   │   └── contact.astro        # Contact page
│   └── env.d.ts                 # TypeScript declarations
├── public/
│   ├── favicon.svg              # Site favicon
│   ├── placeholder-project.svg  # Default project image
│   └── project-thumbnails/      # Project thumbnail images
├── astro.config.mjs             # Astro configuration
├── package.json                 # Dependencies and scripts
└── tsconfig.json                # TypeScript configuration
```

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful color transitions
- **Glassmorphism Effects**: Modern translucent design elements
- **Smooth Animations**: Hover effects and transitions
- **Typography**: Clean, readable fonts with proper hierarchy
- **Color Scheme**: Professional blue/purple gradient theme
- **Responsive Grid**: Adaptive layouts for all screen sizes

## 🤖 AI-Assisted Development

This project demonstrates the power of AI-assisted development:

- **~90% AI-Generated Code**: Majority of code written with AI assistance
- **Rapid Development**: Complete website built in hours, not days
- **Modern Practices**: AI helped implement current best practices
- **Quality Output**: Human oversight ensures code quality and functionality

### AI Tools Used
- GitHub Copilot for code completion
- ChatGPT for architecture planning
- Claude for code review and optimization
- AI-powered design suggestions

## 📊 Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Static Generation**: Fast loading times with pre-built pages
- **Minimal JavaScript**: Client-side interactivity only where needed
- **Optimized Images**: Efficient asset loading and caching

## 🔧 Customization

### Adding New Projects
1. Edit the projects array in `src/pages/projects.astro`
2. Add project thumbnail to `public/project-thumbnails/`
3. Update the featured projects section in `src/pages/index.astro`

### Modifying Design
- Colors and gradients can be updated in the CSS custom properties
- Layout modifications can be made in `src/layouts/BaseLayout.astro`
- Component styles are scoped within each `.astro` file

### Contact Information
Update contact details in `src/pages/contact.astro`:
- Email addresses
- Social media links
- Contact form endpoint (implement backend as needed)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/dp-lewis/quick-ai-projects/issues).

## 📧 Contact

- **Email**: hello@example.com
- **LinkedIn**: [linkedin.com/in/example](https://linkedin.com/in/example)
- **GitHub**: [@example](https://github.com/example)
- **Twitter**: [@example](https://twitter.com/example)

---

*Built with ❤️ and 🤖 AI assistance*
