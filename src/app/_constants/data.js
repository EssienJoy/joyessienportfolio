import { FaSquareXTwitter } from "react-icons/fa6";
import { FaReact, FaGitAlt, FaGithub, FaSass, FaCss3Alt, FaHtml5, FaLinkedin } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
    SiThreeDotJs, SiTailwindcss, SiSupabase, SiJavascript, SiMongodb,
    SiMongoose, SiExpress
} from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandThreejs } from "react-icons/tb";

export const devTools = [
    {
        skill: "Git",
        icon: FaGitAlt,
        color: "#F05032",
    },
    {
        skill: "GitHub",
        icon: FaGithub,
    },
    {
        skill: "Postman",
        // icon: FaGithub,
    },
    {
        skill: "Figma",
        // icon: FaGithub,
    },
    {
        skill: "Vercel",
        // icon: FaGithub,
    },
    {
        skill: "Netlify",
        // icon: FaGithub,
    },

];

export const backend = [
    {
        skill: 'Node.js',
        icon: DiNodejs,
        color: '#33993'
    },
    {
        skill: 'Express.js',
        icon: SiExpress,
        // color: "#000000",
    },
    {
        skill: 'MongoDB',
        icon: SiMongodb,
        color: '#47A248'
    },
    {
        skill: 'Mongoose',
        icon: SiMongoose,
        color: '#880000'
    },
    {
        skill: "Supabase",
        icon: SiSupabase,
        color: "#3ECF8E",
    },
];

export const frontend = [

    {
        skill: "Next.js",
        icon: RiNextjsFill,
    },
    {
        skill: "React",
        icon: FaReact,
        color: "#61DAFB",
    },
    // {
    //     skill: "Three.js",
    //     icon: TbBrandThreejs,
    // },

    {
        skill: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
    },

    {
        skill: "Sass",
        icon: FaSass,
        color: "#CC6699",
    },
    {
        skill: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
    },
    {
        skill: "CSS3",
        icon: FaCss3Alt,
        color: "#1572B6",
    },
    {
        skill: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
    },
];



export const aboutMeFaq = [
    {
        id: 1,
        question: "Who am I ?",
        answer:
            "Hi, I’m Essien Joy, a self-taught frontend web developer.",
    },
    {
        id: 2,
        question: "How long have I been in tech?",
        answer:
            "I’ve been on my tech journey for a little over a year, while actively documenting my progress online.",
    },
    {
        id: 3,
        question: "What do I do ?",
        answer:
            "I create interactive, responsive user interfaces that turn clean designs into functional, user-friendly products.",
    },
    {
        id: 4,
        question: "What inspires me ?",
        answer:
            "I’m inspired by solving problems with code and creating sleek, interactive experiences people enjoy using.",
    },
    {
        id: 5,
        question: "What am I learning ?",
        answer:
            "I’m currently diving deeper into Node.js and MongoDB as I work toward becoming a full-stack developer.",
    },
    {
        id: 6,
        question: "What’s my goal ?",
        answer:
            "My goal is to grow into a well-rounded frontend engineer and contribute to impactful projects that make a real difference.",
    },
    {
        id: 7,
        question: "What’s my personality outside tech ?",
        answer:
            "Outside of tech, I enjoy creating content, which inspired me to share my journey online. I also have a strong interest in fashion and makeup.",
    },
];



export const quickLinks = [
    {
        text: "Home",
        url: "/",
    },
    {
        text: "Projects",
        url: "/projects",
    },
    {
        text: "Contact ",
        url: "/contact",
    },
    {
        text: "Download Cv",
        url: "/essien-joy-cv.pdf",
    },
];




export const socials = [
    {
        href: 'https://www.linkedin.com/in/essien-joy-838b3b23a/',
        icon: FaLinkedin,
        text: 'Linkedin',
    },
    {
        href: 'https://github.com/EssienJoy',
        icon: FaGithub,
        text: 'Github',
    },
    {
        href: 'https://x.com/essienjoyidara',
        icon: FaSquareXTwitter,
        text: 'Twitter'
    },
];

export const navLink = [
    // {
    //     text: "Home",
    //     href: "/",
    // },
    {
        text: "	Projects",
        href: "/projects",
    },
    {
        text: "Contact",
        href: "/contact",
    },
    {
        text: "Cv",
        href: "/essien-joy-cv.pdf",
    },
];

export const heroUrl = [
    {
        text: "Projects",
        url: "/projects",
    },
    {
        text: "Contact me",
        url: "/contact",
    },
    {
        text: "Download Cv",
        url: "/essien-joy-cv.pdf",
    },
];
