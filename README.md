# Saurav Raj - Personal Portfolio Website

A modern, responsive, and professional personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Fully Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Meta tags, Open Graph, and Twitter cards included
- **Smooth Scrolling**: Seamless navigation between sections
- **Animated Components**: Framer Motion powered animations
- **Accessible**: Semantic HTML and ARIA labels

## 📋 Sections

- **Hero**: Animated introduction with CTA buttons
- **About Me**: Personal introduction and highlights
- **Skills**: Technical skills with progress bars and tags
- **Projects**: Featured projects with tech stack badges
- **Experience**: Professional experience timeline
- **Education**: Academic qualifications
- **Achievements**: Key accomplishments
- **Contact**: Contact form and social links

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite with Rolldown

## 📁 Project Structure

```
portfolio-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SectionTitle.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Achievements.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   ├── skills.json
│   │   ├── projects.json
│   │   ├── education.json
│   │   └── experience.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saurav1603/portfolio-site.git
   cd portfolio-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure the build
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## 📝 Customization

### Update Personal Information

1. Edit content in each section component in `src/sections/`
2. Update data files in `src/data/`:
   - `skills.json` - Your technical skills
   - `projects.json` - Your projects
   - `education.json` - Your education history
   - `experience.json` - Your work experience

### Add Your Resume

1. Add your resume PDF to the `public` folder as `resume.pdf`
2. The download button in the navbar will automatically link to it

### Update SEO

Edit the meta tags in `index.html`:
- Update the `og:url` to your actual domain
- Add your own Open Graph image as `public/og-image.png`

### Change Colors

Modify the color scheme in `src/index.css`:
```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Saurav Raj**
- GitHub: [@Saurav1603](https://github.com/Saurav1603)
- Email: rajsaurav1603@gmail.com
- Location: Muzaffarpur, Bihar, India

---

Made with ❤️ by Saurav Raj
