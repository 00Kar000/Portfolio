import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
        points: [
            "As a React.js developer, I specialize in building dynamic and responsive user interfaces for web applications.",
            " My expertise lies in utilizing the React.js library to create modular and reusable components, enabling efficient development and maintenance.",
            " I am skilled in state management, handling user interactions, and integrating with backend APIs to deliver seamless and performant user experiences.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "As a React Native developer, I specialize in crafting cross-platform mobile applications with a single codebase.",
            "Leveraging the power of React Native, I create efficient and native-like experiences for both iOS and Android platforms. ",
            "My expertise extends to building responsive UI components, handling device-specific nuances, and optimizing performance for mobile devices.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2022 - Jan 2023",
        points: [
            " My skill set spans front-end and back-end technologies, allowing me to create seamless and visually appealing user interfaces while ensuring robust functionality behind the scenes. ",
            "Proficient in HTML, CSS, and JavaScript, I leverage modern frameworks and libraries, such as React.js or Vue.js, to build dynamic and responsive web applications. ",
            "Additionally, I am experienced in server-side scripting, database management, and API integration to deliver end-to-end solutions.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "As a full-stack developer, I possess a comprehensive skill set that spans both the front-end and back-end of web development. ",
            "Proficient in a variety of programming languages, such as JavaScript, Python, and php, I specialize in creating end-to-end solutions for web applications.",
            " On the front-end, I excel in crafting intuitive and responsive user interfaces using modern frameworks like React.js or Angular, combined with HTML and CSS. "
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        theme: 'btn-back-red',
        name: 'Bank',
        image: 'src/assets/projects/project3.png',
        link: 'https://github.com/00Kar000/HooBank',
        page:"https://hoo-bank-tau-ivory.vercel.app/",
    },
    {
        theme: 'btn-back-green',
        name: 'Nike',
        image: 'src/assets/projects/project4.png',
        link: 'https://github.com/00Kar000/Nike',
        page:"https://nike-six-ochre.vercel.app/",
    },
    {
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        image: 'src/assets/projects/project5.png',
        link: 'https://github.com/00Kar000/cars-page',
        page:"https://cars-page-ashy.vercel.app/",
    },
    {
        theme: 'btn-back-pink',
        name: 'Fitness Club',
        image: 'src/assets/projects/project6.png',
        link: 'https://github.com/00Kar000/Fitness-Club',
        page:"",
    },
    {
        theme: 'btn-back-black',
        name: 'GERICHT',
        image: 'src/assets/projects/project2.png',
        link: 'https://github.com/00Kar000/GERICHT',
        page:"https://gericht-zeta.vercel.app/",
    },
    {
        theme: 'btn-back-yellow',
        name: 'GPT-3',
        image: 'src/assets/projects/project1.png',
        link: 'https://github.com/00Kar000/GPT-3',
        page:"https://gpt-3-two-orcin.vercel.app/",
    }
];