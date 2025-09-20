import calendarProject from "../../../public/images/calendarproject.png";
import eazymart from "../../../public/images/eazymart.png";
import myaza from "../../../public/images/myazaclone.png";
import personalPortfoloio from "../../../public/images/personalportfolio.png";
import wildoasis from "../../../public/images/wildoasis.png";
import cartolink from "../../../public/images/cartolink.png";
import bankist from "../../../public/images/bankist.png";

const info = 'This project is currently linked externally or is undergoing a work in-progress, but will soon be available here on the website.';

export const projects = [
    {
        note: info,
        id: 1,
        image: calendarProject,
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
        features: [
            {
                problem: "Users struggling to complete a task",
                solution: "Create Plans,Track goals,Countdown and reminders",
                video: process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_PLANNER_FEAT
            },
        ],
        stack: ["Styled Components", "React"],
        github: "https://github.com/EssienJoy/planner",
        live: "https://planner-six-chi.vercel.app/",
    },
    {
        note: info,
        id: 2,
        image: eazymart,
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
        features: [
            {
                problem: "Users want the joy of window shopping without leaving home",
                solution: "Interactive product browsing and clean UI design",
            },
        ],
        stack: ["Tailwind CSS", "JavaScript"],
        github: "https://github.com/EssienJoy/eazymart",
        live: "/wip",
    },
    {
        id: 3,
        image: myaza,
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
        features: [
            {
                problem: "Banking apps often feel clunky and outdated",
                solution: "A modern, responsive static site with clean UI and clear structure",
                video: process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID_MYAZA_FEAT
            },
        ],
        stack: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/EssienJoy/myazaClone",
        live: "https://myaza-clone.vercel.app/",
    },
];

export const otherProjects = [
    {
        image: personalPortfoloio,
        title: "Personal Portfolio",
        link: "https://github.com/EssienJoy/joyessienportfolio",
        stack: ['Next js', 'Tailwind ']
    },
    {
        image: wildoasis,
        title: "Wild Oasis",
        link: "https://github.com/EssienJoy/the-wild-oasis-website",
        stack: ['React', 'Tailwind ', 'Supabase']
    },
    {
        image: cartolink,
        title: "cartolink",
        link: "https://github.com/EssienJoy/cartolink",
        stack: ['Next js', 'Tailwind ']
    },
    {
        image: bankist,
        title: "Bankist",
        link: "https://github.com/EssienJoy/bankistMinFinanceWebApp",
        stack: ['JavaScript', 'Css ']
    },
];;
