DESIGN SPECIFICATION – SOFTWARE ENGINEER PROFILE (REACT EDITION)
📌 1. Overview
🎯 Objective
Build a personal profile website for a software engineer using React. The site must showcase:

Skills

Projects

Experience

The design must reflect:

Minimalist elegance

Modern aesthetics

Premium, high-end UI

A subtle touch of fashion-forward styling

A black & green color identity

✨ Core Design Principles
User Experience First: Intuitive navigation, clear hierarchy.

Generous Whitespace: Let content breathe.

Clean Typography: Readable and refined.

Subtle Animations: Micro-interactions that enhance, not distract.

Content-Focused: Ornaments serve the message.

🎨 2. Color System
🌿 Primary Palette
Role	Light Mode	Dark Mode
Primary (Green)	#0E7B4E (Forest)	#10B981 (Emerald)
Primary Light	#D1FAE5	#064E3B
Secondary (Black)	#1A1A1A	#F9FAFB (inverse)
Background	#FFFFFF	#0A0C0F
Surface	#F9FAFB	#13171A
Text Primary	#111827	#F3F4F6
Text Secondary	#6B7280	#9CA3AF
Border	#E5E7EB	#1F2937
Accent (Optional)	#D4AF37 (Gold)	#FBBF24
🖤 Accent Gradient (Green-Black)
css
linear-gradient(135deg, #0E7B4E 0%, #1A1A1A 100%);
Use sparingly for buttons, section titles, or decorative elements.

🌙 Dark Mode Implementation (React Specific)
Theme Provider: Use React Context or Zustand to manage theme state.

Persistence: localStorage key "theme".

Initialization: Check system preference with prefers-color-scheme media query.

Class Strategy: Apply .dark class to <html> or use CSS-in-JS variables (recommend CSS custom properties).

Transition: Smooth color transition 200ms ease.

🔤 3. Typography
Primary Font: Inter
Fallback: system-ui, -apple-system, sans-serif

Clean, modern, excellent readability.

Type Scale
Usage	Desktop Size / Weight / Line	Mobile Size
Hero Title	64px / 700 / 1.1	40px
Section Title	36px / 600 / 1.2	28px
Subtitle	20px / 500 / 1.4	18px
Body	16px / 400 / 1.6	15px
Small / Meta	14px / 400 / 1.5	13px
Button / Nav	16px / 500 / 1.2	15px
Typography Rules
Line-height: Body text ≥ 1.6.

Letter-spacing: -0.01em for headings, 0 for body.

Color Contrast: Maintain WCAG AA minimum (4.5:1 for normal text).

📐 4. Layout & Grid
Container Component (<Container>)
Max Width: 1200px

Horizontal Padding: 24px (mobile: 16px)

Centered: margin: 0 auto

Grid System (CSS Grid based)
Use a reusable <Grid> component or direct CSS Grid classes.

css
.grid-12 {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(12, 1fr);
}
Tablet (640px - 1024px): 8 columns

Mobile (< 640px): 1 column (stack)

Spacing Scale (rem / px)
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128
Use for margin, padding, gaps.

Section Wrapper Component (<Section>)
css
.section {
  padding-top: 96px;
  padding-bottom: 96px;
}
@media (max-width: 640px) {
  .section { padding-top: 64px; padding-bottom: 64px; }
}
🧩 5. Component Library (React Components)
All components must be modular and reusable. Use functional components with hooks.

🔘 Button Component (<Button>)
Props:

variant: "primary" | "secondary" | "ghost"

size: "md" | "lg" (optional)

children: React node

onClick, disabled, className

Variant	Background	Text / Border	Hover
Primary	Gradient (green → black) or solid green	White	Scale 1.02, shadow-lg, brighten
Secondary	Transparent	Green border / green text	Background: green (10% opacity)
Ghost	Transparent	Text secondary	Background: surface
Shape: border-radius: 12px
Padding: 12px 24px
Transition: all 200ms ease-in-out
Focus: outline: 2px solid #0E7B4E; outline-offset: 2px

📦 Card Component (<Card>)
Props:

hoverable?: boolean

padding?: string (default 24px)

className, children

css
background: var(--surface);
border-radius: 20px;
padding: 24px;
box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);
border: 1px solid var(--border);
transition: transform 200ms ease, box-shadow 200ms ease;
Hover: transform: translateY(-4px), box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1)

🧭 Navbar Component (<Navbar>)
Position: Sticky top, z-index: 50

Backdrop: backdrop-filter: blur(12px) with semi-transparent surface.

Height: 72px

Content:

Logo (link to top)

Desktop Menu: array of nav items

Mobile Menu: hamburger button → dropdown or slide menu

Theme toggle button

Active Link Detection: Use useActiveSection hook (Intersection Observer) to highlight current section.

🧱 Section Header Component (<SectionTitle>)
Props:

title: string

subtitle?: string

align?: "left" | "center"

Renders a title with an accent bar (green gradient, width 48px, height 4px) above or left.

🏷️ Tag/Pill Component (<Tag>)
css
background: var(--primary-light);
color: var(--primary);
border-radius: 9999px;
padding: 4px 12px;
font-size: 14px;
font-weight: 500;
display: inline-block;
🌗 Theme Toggle Component (<ThemeToggle>)
Displays sun/moon icon based on current theme.

On click, toggles theme and updates localStorage.

📱 6. Responsive Behavior
Breakpoints (as CSS custom properties or JS constants)
js
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
};
Use window.matchMedia or CSS media queries.

React Implementation Tips
Use useMediaQuery custom hook for conditional rendering.

Alternatively, rely on CSS for layout changes; use React only for structural changes (e.g., mobile menu open/close).

Mobile-First Approach
Write base styles for mobile, then override with min-width media queries.

Font sizes scale down slightly.

Navbar collapses to hamburger menu.

🧩 7. Page Structure (Sections as React Components)
🚀 7.1 Hero Section (<Hero>)
Goal: Immediate identity and call-to-action.

Content (fetched from siteConfig.js):

Greeting: "Hi, I'm [Name]"

Role: "Software Engineer" (optional typing effect using react-typed or custom hook)

Short Bio: 1–2 sentences.

CTA Buttons: [View Projects] (Primary) + [Contact] (Secondary)

Layout:

Desktop: 2 columns (text left, illustration/photo right)

Mobile: Stack, text first.

Visual: Subtle green glow or dot pattern in background.

👨‍💻 7.2 About (<About>)
Content: 2–3 paragraphs from siteConfig.js.

Layout: Centered text with max-width 720px, or left-aligned with a decorative quote.

🧠 7.3 Skills (<Skills>)
Data Source: import { skills } from "../data/skills"

Display:

Group by category (Frontend, Backend, Tools, etc.) using reduce.

Render as a grid of <Tag> components or custom skill cards.

Implementation:

jsx
const grouped = skills.reduce((acc, skill) => {
  (acc[skill.category] = acc[skill.category] || []).push(skill);
  return acc;
}, {});
📂 7.4 Projects (<Projects>)
Data Source: import { projects } from "../data/projects"

Layout: Grid of <ProjectCard> components.

Desktop: 2 or 3 columns.

Tablet: 2 columns.

Mobile: 1 column.

ProjectCard Content:

Title

Short description

Tech stack (array → <Tag>)

Links: Live Demo (placeholder #) & GitHub (placeholder #)

🕒 7.5 Experience (<Experience>)
Data Source: import { experiences } from "../data/experience"

Display: Vertical timeline using <TimelineItem> component.

Each item: Role, Company, Period, Description.

Use a left border (green) for timeline indicator.

Mobile: Stacked cards.

📞 7.6 Contact (<Contact>)
Content from siteConfig.js:

Email (with copy-to-clipboard functionality)

Social links (GitHub, LinkedIn, X, etc.) – use SVG icons from react-icons or custom.

Optional: Contact form UI (static, no functionality).

Layout: Centered, minimal.

🦶 Footer (<Footer>)
Copyright year (dynamic with new Date().getFullYear())

Subtle "Built with React" note.

🎬 8. Animation & Interaction (React)
Scroll Reveal
Use Intersection Observer via custom hook useIntersectionObserver to add classes like fade-in when elements enter viewport.

Implementation:

js
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
return <div ref={ref} className={`fade-up ${isVisible ? 'visible' : ''}`}>...</div>
CSS:

css
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-up.visible {
  opacity: 1;
  transform: translateY(0);
}
Stagger Animation
For grids (projects, skills), apply a transition delay based on index:

jsx
style={{ transitionDelay: `${index * 100}ms` }}
Page Smooth Scroll
Add scroll-behavior: smooth to global CSS, or use a custom scroll-to function for programmatic scrolling.

Navbar Highlight
Use useActiveSection hook that observes sections and updates active state.

Duration & Easing
Fast: 150ms (micro-interactions)

Normal: 250ms (hover, fade)

Easing: cubic-bezier(0.4, 0, 0.2, 1) (standard)

💾 9. Data Management (React)
Folder Structure
text
src/
├── components/
│   ├── ui/           (Button, Card, Tag, Container, Section, etc.)
│   ├── layout/       (Navbar, Footer)
│   └── sections/     (Hero, About, Skills, Projects, Experience, Contact)
├── hooks/            (useTheme, useMediaQuery, useIntersectionObserver, useActiveSection)
├── context/          (ThemeContext)
├── data/             (skills.js, projects.js, experience.js, siteConfig.js)
├── styles/           (global.css, variables.css)
├── assets/           (images, icons)
├── App.jsx
└── main.jsx
Data Files Format (ES Modules)
siteConfig.js

js
export const siteConfig = {
  name: "Your Name",
  role: "Software Engineer",
  bio: "Short bio...",
  about: "Longer description...",
  email: "hello@example.com",
  social: {
    github: "https://github.com/...",
    linkedin: "https://linkedin.com/in/...",
    twitter: "https://twitter.com/..."
  }
};
skills.js

js
export const skills = [
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  // ...
];
projects.js

js
export const projects = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A modern web application...",
    tech: ["React", "Tailwind", "Node"],
    image: "/assets/project1.png",
    demo: "#",
    github: "#"
  },
  // ...
];
experience.js

js
export const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Corp",
    period: "2022 – Present",
    description: "Led frontend architecture..."
  }
];
Data Fetching / Import
Simply import and use directly—no API calls needed.

🌗 10. Dark Mode Implementation (React Context)
ThemeContext Structure
jsx
// context/ThemeContext.jsx
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
CSS Variables
Define variables in :root and override in .dark class.

css
:root {
  --primary: #0E7B4E;
  --background: #FFFFFF;
  --surface: #F9FAFB;
  --text-primary: #111827;
  /* ... */
}
.dark {
  --primary: #10B981;
  --background: #0A0C0F;
  --surface: #13171A;
  --text-primary: #F3F4F6;
  /* ... */
}
⚡ 11. Performance & Optimization (React)
Code Splitting
Lazy load sections using React.lazy() and <Suspense>.

Example:

jsx
const Projects = React.lazy(() => import('./sections/Projects'));
Memoization
Use React.memo for pure presentational components (Button, Card, Tag).

Use useMemo for expensive computations (grouping skills).

Use useCallback for event handlers passed to children.

Image Optimization
Use loading="lazy" attribute.

Consider using a lightweight image component that supports WebP with fallback.

Bundle Size
Avoid large libraries: Do not import all of react-icons; use individual icons.

Use vite or next.js? Recommended: Vite for fast development and optimized build.

CSS
Use CSS modules or standard CSS files (no CSS-in-JS bloat unless necessary).

Purge unused CSS if using Tailwind (though we recommend plain CSS with variables).

🧾 12. SEO & Accessibility (React)
SEO with React (SPA)
Use React Helmet or similar to manage <head> content.

Set meaningful titles and meta descriptions per route (if using React Router). Since this is a single-page profile, a single static <Helmet> in App is sufficient.

jsx
<Helmet>
  <title>{siteConfig.name} – Software Engineer</title>
  <meta name="description" content={siteConfig.bio} />
</Helmet>
Semantic HTML
Use <header>, <nav>, <main>, <section>, <article>, <footer>.

Accessibility (a11y)
Color contrast meets WCAG AA.

Focus indicators visible (use :focus-visible).

ARIA labels for icon buttons (e.g., <button aria-label="Toggle dark mode">).

Keyboard navigation fully functional.

Reduced motion support: wrap animations in a hook that checks prefers-reduced-motion.

Focus Management
Ensure modal/mobile menu traps focus appropriately.

🧪 13. Testing Considerations (for AI-generated output)
Ensure layout does not break at any viewport width.

Verify dark mode toggle works without flicker.

Check that all data-driven sections render correctly even if data array is empty (fallback UI).

Validate HTML with W3C validator (browser extension or online).

📁 14. Project Structure (Detailed)
text
my-profile/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile.jpg
│   │   └── icons/ (optional)
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── Section.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── Tag.jsx
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── ProjectCard.jsx
│   │       ├── Experience.jsx
│   │       ├── TimelineItem.jsx
│   │       ├── Contact.jsx
│   │       └── index.js
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── siteConfig.js
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── experience.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useMediaQuery.js
│   │   ├── useIntersectionObserver.js
│   │   └── useActiveSection.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
💎 15. Tone & Polish
Visual Mood
Clean & Airy: Ample padding and margins.

Sleek Black Accents: Use black for text or borders in light mode; in dark mode, black is the canvas.

Green Highlights: Strategic use of green draws attention to CTAs and interactive elements.

Subtle Gradient: Use sparingly to convey premium quality.

Micro-Interactions
Hover on social icons: slight color pop.

Navbar background becomes more opaque on scroll (use a scroll event listener with useEffect).

🚀 16. Optional Enhancements (If Time Permits)
Custom Cursor: A small circle that follows cursor (green tint) – only on desktop.

Animated Gradient Background: Slow-moving gradient behind hero (CSS keyframes).

Typed.js Effect: Use react-typed for role in hero.

Particle Background: Use react-tsparticles (lightweight).

⚠️ 17. Constraints Summary
❌ No external APIs.

❌ No backend / database.

❌ No heavy UI libraries (e.g., Material-UI, Ant Design).
✅ Tailwind CSS is acceptable if you prefer utility-first, but plain CSS with variables is recommended for clarity.

✅ Must be a single-page React application (no router needed).

✅ Use Vite as build tool for speed.

🤖 18. How AI Should Generate Code from This Document
Set up React project (Vite) with basic structure.

Create CSS variables file based on color system.

Implement ThemeContext and theme toggle.

Build reusable UI components (Button, Card, Container, etc.).

Create data files with placeholder content.

Assemble sections in App.jsx, importing data and rendering components.

Add scroll reveal using custom hook.

Ensure responsive behavior with media queries.

Add meta tags using React Helmet.

Test in multiple viewports and theme modes.