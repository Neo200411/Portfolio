# Neo Mishra — Portfolio

A modern, animated developer portfolio built with **React + Vite**, featuring a dark/light theme toggle, interactive particle backgrounds, and smooth scroll animations powered by **Framer Motion**.

🔗 **Live:** [neo-mishra.dev](https://neo200411.github.io/Portfolio/) *(update with your deployed URL)*

---

## ✨ Features

| Feature | Description |
|---|---|
| 🌙 **Dark / Light Mode** | Toggle with localStorage persistence. Warm beige light theme with deep forest green accents. |
| 🎆 **Particle Network** | 80 animated particles with constellation lines and cursor interaction. Theme-aware colors. |
| 🎞️ **Framer Motion Animations** | Smooth `whileInView` scroll animations across all sections with staggered entrances. |
| 🔢 **Animated Counters** | Stats (CGPA, Projects) count up from 0 with easeOutCubic easing on scroll. |
| 🖱️ **Custom Cursor** | Magnetic dot + ring cursor with `useRef` for zero-lag performance. |
| 🏷️ **Skill Logos** | Inline SVG icons for 15+ technologies (React, Python, Node.js, Git, etc.). |
| 📱 **Responsive** | Mobile-friendly layout with collapsing nav and adaptive grids. |
| ✏️ **Text Scramble** | Hover over the hero tag for a Matrix-style letter scramble effect. |

---

## 🛠️ Tech Stack

- **Framework:** React 19 + Vite
- **Animations:** Framer Motion
- **Styling:** Vanilla CSS with CSS Custom Properties (dark/light theming)
- **Canvas:** HTML5 Canvas API (particle background)
- **Version Control:** Git + GitHub

---

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component, theme state
├── main.jsx                 # Entry point
├── assets/
│   └── style.css            # Global styles + light mode overrides
└── components/
    ├── AnimatedCounter.jsx   # Count-up on scroll
    ├── Cursor.jsx            # Custom magnetic cursor
    ├── ParticleBackground.jsx # Canvas particle network
    ├── Navbar.jsx            # Navigation + theme toggle
    ├── Hero.jsx              # Landing section + text scramble
    ├── Marquee.jsx           # Scrolling ticker
    ├── About.jsx             # Bio + details sidebar
    ├── Skills.jsx            # Tech stack grid with SVG logos
    ├── Projects.jsx          # Project showcase
    ├── Contact.jsx           # Contact links
    └── Footer.jsx            # Footer
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Neo200411/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Theming

The site uses CSS custom properties for theming. Edit the variables in `src/assets/style.css`:

```css
:root {
  /* Dark Theme (default) */
  --bg: #070709;
  --accent: #c8ff00;
  ...
}

[data-theme="light"] {
  /* Light Theme */
  --bg: #eae8e0;
  --accent: #2d6a4f;
  ...
}
```

Light mode includes 90+ lines of section-specific overrides for shadows, hover states, and contrast adjustments.

---

## 📄 License

MIT © Neo Mishra
