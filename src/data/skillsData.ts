/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
import { 
  Database, 
  Server, 
 
  Globe, 
  
} from 'lucide-react';

// Define the skills data structure
interface Skill {
    name: string;
    icon?: string;
    alt?: string;
    LucideIcon?: any;
}

interface SkillCategory {
    title: string;
    skills: Skill[];
}

// Skills data
export const skillsData: SkillCategory[] = [
    {
        title: "Programming Languages",
        skills: [
            {
                name: "JavaScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                alt: "JavaScript"
            },
            {
                name: "TypeScript",
                icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
                alt: "TypeScript"
            },
            {
                name: "Python",
                icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
                alt: "Python"
            }
        ]
    },
    {
        title: "Frontend Development",
        skills: [
            {
                name: "React",
                icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
                alt: "React"
            },
            {
                name: "Next.js",
                icon: "/static/icon/nextjs.svg",
                alt: "Next.js"
            },
            {
                name: "Tailwind CSS",
                icon: "/static/icon/tailwind.svg",
                alt: "Tailwind CSS"
            }
        ]
    },
    {
        title: "Backend Development",
        skills: [
            {
                name: 'Express',
                alt: 'express.js icon',
                icon: '/static/icon/nodejs.png'
            },
            {
                name : 'NestJs',
                alt : 'nest.js',
                icon : '/static/icon/nestjs.png'
            }
        ]
    },
    {
        title: "Database Technologies",
        skills: [
            {
                name: "PostgreSQL",
                icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
                alt: "PostgreSQL"
            },
            {
                name: "MySQL",
                icon: "/static/icon/mysql.svg",
                alt: "MySQL"
            },
            {
                name: "MongoDB",
                icon: "https://img.icons8.com/nolan/96/mongo-db.png",
                alt: "MongoDB"
            },
            {
                name: "Redis",
                icon: "/static/icon/redis.svg",
                alt: "Redis"
            }
        ]
    },
    {
        title: "DevOps & Cloud",
        skills: [
           
           
            {
                name: "Git",
                icon: "https://img.icons8.com/?size=48&id=20906&format=png&color=000000",
                alt: "Git"
            }
        ]
    },
    {
        title: "AI & Machine Learning",
        skills: [
            {
                name: "ChatGPT",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
                alt: "ChatGPT"
            },
            {
                name: "GEMINI",
                icon :'/static/icon/gemini.png',
                alt :"Gemini Ai"
            },
            {
                name: "DEEPSEEK",
                icon: "https://img.icons8.com/?size=100&id=YWOidjGxCpFW&format=png&color=536dfe",
                alt: "DEEPSEEK"
            },
            {
                name: "Replit",
                icon: "/static/icon/replit.svg",
                alt: "Replit"
            }
        ]
    },
   
];
