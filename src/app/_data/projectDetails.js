
const info = 'This project is currently linked externally or is undergoing a work in-progress, but will soon be available here on the website.';

export const projects = [
    {
        id: 1,
        image: "/images/audophile.png",
        title: "Audophile",
        info: "Online Gadget Store",
        description:
            "Audophile is a high-end e-commerce web app built to showcase and sell premium audio products. It features a clean, modern interface inspired by the official Audiophile design challenge on Frontend Mentor, focusing on responsive layouts and smooth shopping interactions.",
        details:
            "This project demonstrates a strong grasp of component-based architecture, global state management, and data-driven UI updates. The site includes product filtering, category pages, dynamic product details, and a fully functional cart and checkout flow. Built using Next.js, Tailwind CSS, and React, it ensures optimized performance and accessibility across devices.",
        implimentations: [
            "Built with Next.js 14 App Router for improved routing and server-side rendering",
            "Used Tailwind CSS for styling and responsive design consistency",
            "Implemented Context API for global cart and product state management",
            "Added dynamic routing for product detail pages",
            "Integrated localStorage to persist cart data between sessions",
            "Used Next Image optimization for performance and fast image loading",
            "Deployed on Vercel for fast and reliable hosting"
        ],

        problem: "Users need a seamless shopping experience for audio gadgets",
        solution:
            "Built an intuitive product browsing and checkout experience with cart persistence and responsive layouts",

        stack: ["Next.js", "Tailwind CSS", "Convex"],
        github: "https://github.com/EssienJoy/audiophile",
        live: "https://audiophile-vxux.vercel.app/",
    },

    {
        id: 2,
        image: "/images/planner-backend.png",
        title: "Planner Api",
        info: "Backend Api for planner app",
        description:
            "Planner API is a backend service that powers a task and goal planning application. It provides secure endpoints for user authentication and task management, allowing users to create, update, complete, and delete planner tasks.",

        details:
            "The API is designed with a RESTful architecture and focuses on clean data modeling, authentication, and predictable error handling. It supports user-based task ownership, protected routes, and scalable backend structure suitable for frontend or mobile clients.",

        implimentations: [
            "Implemented RESTful API endpoints for planner tasks (CRUD operations)",
            "Added JWT-based authentication and protected routes",
            "Designed MongoDB schemas for users and tasks",
            "Implemented middleware for authorization and request validation",
            "Structured backend using MVC architecture for scalability",
            "Documented all endpoints using Postman for easy testing and consumption"
        ],

        problem:
            "Users need a secure and reliable backend to manage personal tasks and planner data",

        solution:
            "Built a structured backend API with authentication and protected task management endpoints",

        stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
        github: "https://github.com/EssienJoy/planner-backend",
        live: "https://documenter.getpostman.com/view/48023599/2sBXVhEX36",
    },

    {
        note: info,
        id: 3,
        image: '/images/calendarproject.png',
        title: "Planner",
        info: "Plan goals, Track Goals, Tick Completed goals",
        description:
            "Planner is a React web app with a neumorphic UI that helps users track events and set actionable goals leading up to them.",
        details:
            "After completing the React section of Jonas Schmedtmann’s course, I designed and developed Planner from scratch using Styled Components and React. The app features a modern neumorphic interface, intuitive state management, and modular component architecture. Users can create events, set goals toward each event, and visually track their progress in an organized and engaging way.",
        implimentations: [
            "Implemented TanStack Query (React Query) for efficient API data management",
            "Built custom hooks for reusability across the app",
            "Used a neumorphic UI library for visual elements such as the dashboard clock",
            "Integrated date-fns for date and calendar handling",
            "Added React Hot Toast for real-time notifications",
            "Simulated authentication with JSON Server (fake auth for demonstration purposes)",
        ],

        problem: "Users struggling to complete a task",
        solution: "Create Plans,Track goals,Countdown and reminders",

        stack: ["Styled Components", "React"],
        github: "https://github.com/EssienJoy/planner",
        live: "https://planner-six-chi.vercel.app/",
    },

    {
        note: info,
        id: 4,
        image: '/images/eazymart.png',
        title: "Eazy Mart",
        info: "Window Shopping From Home",
        description:
            "Eazy Mart is a modern e-commerce web app that brings the window-shopping experience online, allowing users to explore products from the comfort of their home.",
        details:
            "I built Eazy Mart using Tailwind CSS and vanilla JavaScript to simulate a clean, fast, and responsive shopping interface. The project focuses on replicating the browsing and discovery aspect of window shopping, giving users a seamless way to scroll through product cards with an engaging UI.",
        implimentations: [
            "Developed a responsive UI using Tailwind CSS",
            "Created reusable product card components for scalability",
            "Implemented cart preview interactions for better shopping flow",
            "Designed with user-friendly navigation to simulate a real store experience",
        ],

        problem: "Users want the joy of window shopping without leaving home",
        solution: "Interactive product browsing and clean UI design",

        stack: ["Tailwind Css", "JavaScript", "Html"],
        github: "https://github.com/EssienJoy/eazymart",
        live: "/wip",
    },
    {
        id: 5,
        image: '/images/myazaclone.png',
        title: "My Aza",
        info: "Quick Transactions, Clean UI",
        description:
            "My Aza is a static website designed to showcase a modern banking experience with a clean, aesthetic, and responsive UI.",
        details:
            "I built My Aza as a static site using HTML and CSS, focusing on responsive layouts and a visually appealing design. The project was aimed at practicing UI/UX design principles and building a professional-looking financial services landing page.",
        implimentations: [
            "Crafted a responsive layout with semantic HTML and CSS",
            "Applied clean typography and consistent spacing for better readability",
            "Focused on aesthetic design with smooth color transitions",
            "Ensured cross-device responsiveness and accessibility",
        ],

        problem: "Banking apps often feel clunky and outdated",
        solution: "A modern, responsive static site with clean UI and clear structure",

        stack: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/EssienJoy/myazaClone",
        live: "https://myaza-clone.vercel.app/",
    },
];

export const otherProjects = [
    {
        image: '/images/personalportfolio.png',
        title: "Personal Portfolio",
        link: "https://github.com/EssienJoy/joyessienportfolio",
        stack: ['Next js', 'Tailwind ']
    },
    {
        image: '/images/wildoasis.png',
        title: "Wild Oasis",
        link: "https://github.com/EssienJoy/the-wild-oasis-website",
        stack: ['React', 'Tailwind ', 'Supabase']
    },
    {
        image: '/images/cartolink.png',
        title: "cartolink",
        link: "https://github.com/EssienJoy/cartolink",
        stack: ['Next js', 'Tailwind ']
    },
    {
        image: '/images/bankist.png',
        title: "Bankist",
        link: "https://github.com/EssienJoy/bankistMinFinanceWebApp",
        stack: ['JavaScript', 'Css ']
    },
];;
