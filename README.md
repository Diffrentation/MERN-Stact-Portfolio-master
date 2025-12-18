# MERN Stack Portfolio

A modern, responsive portfolio website built with React and the MERN stack, showcasing projects, skills, and professional information. This portfolio features an interactive UI with animations, particle effects, and smooth scrolling navigation.

## 🚀 Features

- **Interactive Header** - Animated typewriter effect with particle background
- **About Section** - Professional introduction and background
- **Skills Showcase** - Display of technical skills and technologies
- **Projects Portfolio** - Showcase of completed projects with detailed cards
- **Contact Form** - Integrated contact form with EmailJS
- **Responsive Design** - Fully responsive layout for all devices
- **Smooth Animations** - AOS (Animate On Scroll) animations throughout
- **Particle Effects** - Interactive particle background using tsparticles
- **Social Links** - Direct links to LinkedIn and GitHub profiles
- **Resume Download** - Downloadable resume/CV

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **AOS** - Animate On Scroll library
- **React Icons** - Icon library
- **React Simple Typewriter** - Typewriter effect
- **React Scroll** - Smooth scrolling
- **React Toastify** - Toast notifications
- **Swiper** - Touch slider component
- **TSParticles** - Particle animation library

### Services & Tools

- **EmailJS** - Email service integration
- **Firebase** - Backend services (if used)
- **React Helmet** - Document head management

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/MERN-Stact-Portfolio-master.git
   cd MERN-Stact-Portfolio-master
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables** (if needed)

   - Set up EmailJS credentials for contact form
   - Configure Firebase if using Firebase services

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
MERN-Stact-Portfolio-master/
├── public/
│   ├── assets/
│   │   └── images/          # Project images and assets
│   └── particles.json       # Particle configuration
├── src/
│   ├── components/
│   │   ├── About/           # About section component
│   │   ├── Cards/           # Project card components
│   │   ├── Contact/         # Contact form component
│   │   ├── Footer/          # Footer component
│   │   ├── Header/          # Header/Hero section
│   │   ├── Nav/             # Navigation component
│   │   ├── Projects/        # Projects showcase
│   │   ├── Skills/          # Skills section
│   │   └── ParticlesBg/     # Particle background
│   ├── pages/
│   │   └── Homepage.jsx     # Main page component
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML template
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies and scripts
```

## 🎨 Key Components

### Header

- Animated typewriter introduction
- Interactive particle background
- Social media links
- Resume download button
- Smooth scroll navigation

### Projects

- Project cards with images
- Project descriptions and links
- Technology tags
- Responsive grid layout

### Contact

- Contact form with validation
- EmailJS integration
- Toast notifications for feedback

### Skills

- Technology icons and logos
- Skill categories
- Animated display

## 🔧 Configuration

### EmailJS Setup

To enable the contact form, configure EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Add your service ID and template ID to the ContactForm component

### Particle Configuration

Customize particles in `src/components/Header/Header.jsx` or use the configuration in `public/particles.json`.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Deploy to Netlify/Vercel

1. Push your code to GitHub
2. Connect your repository to Netlify or Vercel
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Deploy to GitHub Pages

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Customization

### Update Personal Information

- Edit `src/components/Header/Header.jsx` for name and bio
- Update `src/components/About/About.jsx` for about section
- Modify `src/components/Projects/Projects.jsx` for projects
- Change social links in Header component

### Styling

- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles in respective component files

### Images

- Replace images in `public/assets/images/`
- Update image paths in components

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Bhupendra Singh**

- LinkedIn: [Bhupender Singh](https://www.linkedin.com/in/bhupender-singh-899704276/)
- GitHub: [Diffrentation](https://github.com/Diffrentation)
- Location: Vijay Nagar, Ghaziabad, Uttar Pradesh

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [TSParticles](https://particles.js.org/)
- All the amazing open-source libraries used in this project

---

⭐ If you like this project, give it a star on GitHub!
