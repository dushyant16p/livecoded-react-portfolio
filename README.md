# Alex.dev — Developer Portfolio (React)

A clean, modern, fully responsive personal developer portfolio built with **React + Vite**.

This is the **final project for Livecoded's free 2-day live React beginner workshop**. It is designed so a college student or beginner developer can genuinely use it as their own portfolio — while the code stays simple enough to read, understand, and rebuild from scratch with only basic HTML, CSS, and JavaScript knowledge.

> **Tagline:** Learn by Building — Livecoded

## Features

- Sticky responsive Navbar with mobile hamburger menu
- Hero section with availability badge and CSS initials avatar
- About section with introduction + 3 info cards
- Skills section grouped into categories, rendered as chips
- Projects section with 3 sample projects and a working category filter (All / React / JavaScript)
- Contact section with controlled form, validation, inline errors, and success message
- Footer with dynamic year and back-to-top link
- Dark charcoal theme, one accent color (electric green `#4ade80`), mobile-first responsive layout
- All personal content in one data file — easy to personalize
- No backend, no extra libraries except `lucide-react` icons

## Tech Stack

- React 18 (functional components + `useState` only)
- Vite 5
- JavaScript (not TypeScript)
- Plain CSS (single `src/index.css`)
- lucide-react (icons only)

No Redux, no Context API, no `useEffect`, no custom hooks, no UI libraries, no animation libraries.

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Install and Run

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

### Build for Production

```bash
npm run build
```

The production files are created in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  components/
    Navbar.jsx         - Top navigation + mobile menu
    Hero.jsx           - First-screen introduction
    SectionHeading.jsx - Reusable heading (props demo)
    About.jsx          - About text + info cards
    Skills.jsx         - Skill categories and chips
    Projects.jsx       - Project filter + grid
    ProjectCard.jsx    - Single project card (props demo)
    Contact.jsx        - Controlled contact form
    Footer.jsx         - Footer + dynamic year
  data/
    portfolioData.js   - ALL personal content lives here
  App.jsx              - Composes all sections together
  main.jsx             - App entry point
  index.css            - All styles (plain CSS)
index.html
vite.config.js
package.json
```

## React Concepts Used — Per Component

| Component | Concepts Demonstrated |
|---|---|
| `App.jsx` | Component composition, importing components |
| `main.jsx` | Rendering the root component with `ReactDOM.createRoot` |
| `Navbar.jsx` | `useState`, event handling (`onClick`), conditional rendering (`&&`), `.map()` for links, `aria-expanded` |
| `Hero.jsx` | JSX, embedding expressions with `{}`, reading data from a data file |
| `SectionHeading.jsx` | **Props** — reusable component receiving `title` and `subtitle` |
| `About.jsx` | `.map()` + stable `key`, rendering data from an array |
| `Skills.jsx` | Nested `.map()` — categories, then skills inside each category |
| `Projects.jsx` | `useState` for filter, `.filter()` for filtering, `.map()` for rendering, conditional rendering |
| `ProjectCard.jsx` | **Props** — receives one `project` object and displays it |
| `Contact.jsx` | Controlled inputs, `useState` with an object, single `onChange` handler, `onSubmit` + `preventDefault()`, validation, inline errors, success state |
| `Footer.jsx` | Embedding JS in JSX — `new Date().getFullYear()` for dynamic year, `.map()` for links |

Core concepts covered overall: JSX, components, props, `.map()` + keys, events (`onClick` / `onChange`), `useState`, controlled forms, conditional rendering, `.filter()`, separating data from UI.

## How to Personalize

Edit **only one file** to make this portfolio yours:

**`src/data/portfolioData.js`**

In that file you can change:

1. `personalInfo` — your name, brand (e.g. `YourName.dev`), hero heading, intro, email
2. `personalInfo.githubUrl` and `personalInfo.linkedinUrl` — replace `"#"` with your real profile URLs
3. `aboutInfo` and `aboutCards` — your story, focus, mindset, and goal
4. `skillCategories` — your own skills (keep the same structure)
5. `projects` — your project titles, descriptions, tech tags, and links

For each project, replace the placeholder links:

```js
demoUrl: "#", // REPLACE with your live demo URL
codeUrl: "#", // REPLACE with your GitHub repo URL
```

To change colors or spacing, edit `src/index.css`. The accent color `#4ade80` and background `#101216` are used throughout that file.

## Limitations

- **Contact form is demo-only.** It validates input and shows a success message in the browser, but it does **not** send a real email. For real delivery you need a backend or a form service (for example Formspree, Netlify Forms, or your own API).
- **Placeholder links:** Live Demo, View Code, GitHub, and LinkedIn links are `"#"` placeholders until you replace them in `portfolioData.js`.
- **Sample content:** The name "Alex", projects, and text are samples — replace them with your real information.
- **No backend / database / authentication** — this is a frontend-only project by design, for the workshop.

## Feature Checklist

### Works

- [x] Vite app runs with `npm run dev` and builds with `npm run build`
- [x] All sections render: Home, About, Skills, Projects, Contact, Footer
- [x] Navbar links smooth-scroll to the correct section
- [x] Mobile menu opens, closes, and closes on link click
- [x] Projects render from data with `.map()` and stable keys
- [x] Project filter (All / React / JavaScript) works with `useState` + `.filter()`
- [x] Contact form: controlled inputs update correctly
- [x] Invalid submissions show inline validation errors
- [x] Valid submissions show a success message and reset the form
- [x] Footer year is generated dynamically
- [x] Responsive layout — mobile, tablet, desktop, no horizontal overflow
- [x] Accessible basics — labels on inputs, `aria-label` / `aria-expanded` on menu button, focus states

### Placeholders (replace with your own)

- [ ] Live Demo links (`"#"` in `portfolioData.js`)
- [ ] View Code / GitHub repo links (`"#"` in `portfolioData.js`)
- [ ] GitHub and LinkedIn profile URLs
- [ ] Email address (`hello@example.com`)
- [ ] Name, about text, skills, and project descriptions
- [ ] Real email delivery for the contact form (needs backend / form service)

## Workshop Notes

This project is intentionally kept beginner-friendly:

- No advanced React patterns — only `useState` is used for state
- Clear component and variable names, short teaching comments
- No clever one-liners or compressed code
- One CSS file with plain, readable styles

Rebuild it section by section during the workshop: Navbar → Hero → About → Skills → Projects → Contact → Footer.

---

Built for the **Livecoded 2-Day React Beginner Workshop** — Learn by Building.
