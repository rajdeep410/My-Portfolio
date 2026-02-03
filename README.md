# 🚀 PAPPU (RAJDEEP) - Portfolio Website

A modern, premium-quality personal portfolio website showcasing my skills, projects, and experience as a Full Stack MERN Developer.

![Portfolio Preview](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Modern Design**: Dark theme with glassmorphism effects and vibrant gradients
- 🌊 **Smooth Animations**: Powered by Framer Motion for professional page transitions
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🎯 **SEO Optimized**: Complete meta tags and Open Graph support
- ⚡ **Fast Performance**: Built with Vite for lightning-fast load times
- 🎭 **Interactive UI**: Hover effects, micro-interactions, and scroll animations

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Smooth Scrolling**: React Scroll

## 📂 Project Structure

```
portfolio-m/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with smooth scroll
│   │   ├── Hero.jsx             # Hero section with animated intro
│   │   ├── About.jsx            # About me section
│   │   ├── Skills.jsx           # Skills showcase
│   │   ├── Experience.jsx       # Work experience timeline
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Education.jsx        # Educational background
│   │   ├── Achievements.jsx     # Achievements & interests
│   │   ├── Contact.jsx          # Contact form & info
│   │   └── Footer.jsx           # Footer with social links
│   ├── data/
│   │   ├── portfolioData.js     # Portfolio content data
│   │   └── animationVariants.js # Framer Motion variants
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & utilities
├── index.html                   # HTML template with SEO
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or navigate to the project directory)
   ```bash
   cd "d:\Ducat Mern Full Stack\react\newp\rajdeep\portfolio-m"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization Guide

### Update Personal Information

Edit `src/data/portfolioData.js` to update:
- Personal details (name, email, phone, location)
- About section content
- Skills and tech stack
- Work experience
- Projects
- Education
- Achievements and interests

### Modify Colors

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  accent: {
    purple: '#a855f7',  // Change these values
    blue: '#3b82f6',
    cyan: '#06b6d4',
  }
}
```

### Adjust Animations

Modify animation variants in `src/data/animationVariants.js` to customize:
- Animation duration
- Easing functions
- Stagger delays
- Transition effects

## 📱 Sections Overview

1. **Navbar** - Fixed navigation with smooth scroll and mobile menu
2. **Hero** - Eye-catching introduction with animated text and CTAs
3. **About** - Professional summary with glassmorphism card
4. **Skills** - Categorized tech stack with icons
5. **Experience** - Timeline-style work experience
6. **Projects** - Featured projects with tech stack tags
7. **Education** - Academic background
8. **Achievements** - Notable achievements and interests
9. **Contact** - Contact form and information cards
10. **Footer** - Social links and copyright

## 🎯 Key Features Explained

### Glassmorphism Effects
Glass-like cards with backdrop blur and transparency for a modern, premium look.

### Gradient Backgrounds
Vibrant purple, blue, and cyan gradients create visual interest and depth.

### Smooth Scroll
Click navigation links to smoothly scroll to sections with active highlighting.

### Responsive Design
Mobile-first approach ensures perfect display on all screen sizes.

### Micro-interactions
Subtle hover effects and animations enhance user engagement.

## 📄 License

This project is open source and available for personal use.

## 👨‍💻 Author

**PAPPU (RAJDEEP)**
- Email: pappukumar931585@gmail.com
- Phone: +91 93158 57791
- Location: Haryana, India

---

Made with ❤️ using React & Tailwind CSS
