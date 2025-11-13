// src/data/skillsData.js

export const DATA = {
  Frontend: [
    {
      id: "xml",
      title: "XML (Android UI Design)",
      pct: 95,
      desc: "Android layouts, ConstraintLayout and adaptive UI patterns.",
      chips: ["ConstraintLayout", "Styles", "Themes","Layouts","Views","Widgets"],
      emoji: "xml",
    },
    {
      id: "react",
      title: "React.js (JavaScript, ES6+)",
      pct: 90,
      desc: "Component-driven UI, hooks and state management.",
      chips: ["React", "JSX", "Hooks","Layouts","Components","App Router"],
      emoji: "react",
    },
    {
      id: "uiux",
      title: "UI/UX & Responsive",
      pct: 90,
      desc: "Pixel-perfect responsive layouts and accessible UI patterns.",
      chips: ["Tailwind CSS", "Responsive", "XML"],
      emoji: "uiux",
    },
    {
      id: "tailwind",
      title: "TailwindCSS, CSS3, HTML5",
      pct: 95,
      desc: "Utility-first styling, component theming and responsive utilities.",
      chips: ["Tailwind", "CSS Grid", "Flexbox","Animations","Custom Themes"],
      emoji: "tailwindcss",
    },
  ],

  Backend: [
    {
      id: "node",
      title: "Node.js (APIs & Server)",
      pct: 90,
      desc: "RESTful APIs, middleware, authentication and server-side design.",
      chips: ["Express", "Middleware","NPM","Packages","Routing"],
      emoji: "nextjs",
    },
    {
      id: "auth",
      title: "Authentication & Security",
      pct: 78,
      desc: "Token-based auth, sessions and secure patterns.",
      chips: ["Firebase Authentication"],
      emoji: "authentication",
    },
  ],

  Database: [
    {
      id: "mongo",
      title: "MongoDB / NoSQL",
      pct: 85,
      desc: "Schema design, indexing and aggregation pipelines.",
      chips: ["Mongoose", "Indexes", "Aggregation","Query Optimization"],
      emoji: "mongo",
    },
    {
      id: "firebase",
      title: "Firebase Realtime / Firestore",
      pct: 90,
      desc: "Realtime DB usage, rules & FCM token handling.",
      chips: ["RTDB", "Firestore", "Cloud Functions","Authentication"],
      emoji: "firebase",
    },
    {
      id: "mysql",
      title: "MySQL / SQL Databases",
      pct: 80,
      desc: "Relational schema design, joins, queries and stored procedures.",
      chips: ["SQL", "Joins", "Stored Procedures","Functions","ER Modeling","Query Optimization"],
      emoji: "mysql",
    },
  ],


  Tools: [
    {
      id: "git",
      title: "Git & Version Control",
      pct: 90,
      desc: "Branches, PRs, rebases and collaborative workflows.",
      chips: ["Git Actions", "GitHub", "CI/CD","Branching", "Rebasing", "Pull Requests","Versioning"],
      emoji: "github",
    },
    {
      id: "figma",
      title: "Figma & Prototyping",
      pct: 75,
      desc: "Design-to-dev handoff, prototypes and component libraries.",
      chips: ["Prototypes", "Design System","Auto Layout", "Components", "Handoff","Responsive Design"],
      emoji: "figma",
    },
    {
      id: "postman",
      title: "Postman API Testing",
      pct: 82,
      desc: "API debugging, automated tests and request workflow collections.",
      chips: ["API Testing", "Collections", "Environment Vars","Test Scripts", "Mock Servers", "Auth"],
      emoji: "postman",
    },
    {
      id: "androidstudio",
      title: "Android Studio & IDE Tools",
      pct: 95,
      desc: "Layout design, Gradle build tools, device emulation and project management.",
      chips: ["Gradle", "Emulator", "Logcat","Layouts","Views","Widgets"],
      emoji: "androidstudio",
    },
  ],

};

export const categories = Object.keys(DATA);
