// src/data/skillsData.js

export const DATA = {
  Frontend: [
    {
      id: "react",
      title: "React.js (JavaScript, ES6+)",
      pct: 90,
      desc: "Component-driven UI, hooks, state management and SPA patterns.",
      chips: ["React", "JSX", "Hooks"],
      emoji: "react",
    },
    {
      id: "uiux",
      title: "UI/UX & Responsive",
      pct: 88,
      desc: "Pixel-perfect responsive layouts and accessible UI patterns.",
      chips: ["Tailwind CSS", "Responsive", "A11y"],
      emoji: "uiux",
    },
    {
      id: "tailwind",
      title: "TailwindCSS, CSS3, HTML5",
      pct: 92,
      desc: "Utility-first styling, component theming and responsive utilities.",
      chips: ["Tailwind", "CSS Grid", "Flexbox"],
      emoji: "tailwindcss",
    },
    {
      id: "xml",
      title: "XML (Android UI Design)",
      pct: 85,
      desc: "Android layouts, ConstraintLayout and adaptive UI patterns.",
      chips: ["ConstraintLayout", "Styles", "Themes"],
      emoji: "xml",
    },
  ],

  Backend: [
    {
      id: "node",
      title: "Node.js (APIs & Server)",
      pct: 84,
      desc: "RESTful APIs, middleware, authentication and server-side design.",
      chips: ["Express", "JWT", "Middleware"],
      emoji: "nextjs",
    },
    {
      id: "auth",
      title: "Authentication & Security",
      pct: 78,
      desc: "Token-based auth, sessions and secure patterns.",
      chips: ["OAuth2", "JWT", "CORS"],
      emoji: "authentication",
    },
  ],

  Database: [
    {
      id: "mongo",
      title: "MongoDB / NoSQL",
      pct: 80,
      desc: "Schema design, indexing and aggregation pipelines.",
      chips: ["Mongoose", "Indexes", "Aggregation"],
      emoji: "mongo",
    },
    {
      id: "firebase",
      title: "Firebase Realtime / Firestore",
      pct: 82,
      desc: "Realtime DB usage, rules & FCM token handling.",
      chips: ["Realtime DB", "Firestore", "Cloud Functions"],
      emoji: "firebase",
    },
  ],

  Tools: [
    {
      id: "git",
      title: "Git & Version Control",
      pct: 90,
      desc: "Branches, PRs, rebases and collaborative workflows.",
      chips: ["Git", "GitHub", "CI/CD"],
      emoji: "github",
    },
    {
      id: "figma",
      title: "Figma & Prototyping",
      pct: 80,
      desc: "Design-to-dev handoff, prototypes and component libraries.",
      chips: ["Figma", "Prototypes", "Design System"],
      emoji: "figma",
    },
  ],
};

export const categories = Object.keys(DATA);
