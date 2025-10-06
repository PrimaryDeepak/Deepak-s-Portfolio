# 🚀 Deepak Kumar - Full Stack Developer Portfolio

A modern, responsive portfolio website showcasing my web development skills, projects, and professional experience. Built with React.js and featuring a clean, interactive design with dark/light theme support.

## 🌟 Live Demo

[View Portfolio](https://primarydeepak.github.io/Deepak-s-Portfolio)

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contact](#contact)

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive UI**: Smooth animations and hover effects
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **PWA Ready**: Progressive Web App capabilities
- **Modern Stack**: Built with latest React.js and modern web technologies
- **Performance Optimized**: Fast loading and smooth user experience

## 🛠️ Technologies Used

- **Frontend**: React.js 19.2.0
- **Styling**: CSS3 with modern features
- **State Management**: React Context API
- **Testing**: Jest, React Testing Library
- **Build Tool**: Create React App
- **Analytics**: Vercel Analytics
- **Deployment**: GitHub Pages / Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/PrimaryDeepak/Deepak-s-Portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Deepak-s-Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. Optimizes the build for best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 📁 Project Structure

```
my-portfolio-app/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Site icon
├── src/
│   ├── components/         # React components
│   │   ├── About.js        # About section
│   │   ├── Contact.js      # Contact form
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── Projects.js     # Projects showcase
│   │   ├── Skills.js       # Skills section
│   │   └── ThemeToggle.js  # Theme switcher
│   ├── contexts/           # React contexts
│   │   └── ThemeContext.js # Theme management
│   ├── images/             # Static images
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🎨 Customization

### Personalizing Content

1. **Update Personal Information**: Edit the component files in `src/components/` to update your personal details, skills, and projects.

2. **Add Your Projects**: Modify `src/components/Projects.js` to showcase your own projects with descriptions, technologies used, and links.

3. **Update Images**: Replace images in `src/images/` with your own photos and project screenshots.

4. **Modify Styling**: Customize the CSS files in `src/components/` to match your preferred color scheme and design.

### Theme Customization

The portfolio supports both dark and light themes. You can customize the color schemes by editing the CSS custom properties in the respective component CSS files.

## 🚀 Deployment

### Vercel (Recommended)

#### Method 1: Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

#### Method 2: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure project settings:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`
5. Click "Deploy"

**Live URL**: https://deepak-kumar-portfolio.vercel.app

### GitHub Pages (Alternative)

1. Install the GitHub Pages package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Deepak Kumar**
- GitHub: [@PrimaryDeepak](https://github.com/PrimaryDeepak)
- Email: deepak@example.com
- Portfolio: [Live Demo](https://primarydeepak.github.io/Deepak-s-Portfolio)

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
