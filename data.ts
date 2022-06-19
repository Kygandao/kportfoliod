
import { SiTailwindcss, SiSpring, SiPostman, SiNetlify } from 'react-icons/si'
import { FaReact, FaJava, FaAward, FaMicrosoft } from 'react-icons/fa'
import { GrMysql, GrHeroku } from 'react-icons/gr'
import { HiChatAlt, HiLightBulb } from 'react-icons/hi'
import { RiTeamLine, RiStackFill, RiBugFill } from 'react-icons/ri'
import { IOffer, IProjects, ISkills } from './type'

export const services:IOffer[] = [
    {
        title:'Fullstack Developmet',
        about: 'Build scalable applications using <b>Java</b> and <b>Spring Boot</b> for back-end development, <b>JavaScript</b>, <b>React</b>, and various <b>CSS</b> frameworks for frontend development. Use <b>MySQL</b>, <b>GraphQL</b>, <b>Express</b> for databases and servers.',
        Icon: RiStackFill,
    },
    {
        title:'Debugging & Troubleshooting',
        about: 'Exersize extreme patience to use <b>critical thinking</b> and analytical and research skills to detect, remove, and correct errors from existing code and avoid errors in new code.',
        Icon: RiBugFill,
    },
    {
        title:'Creativity and Adaptabliity',
        about: 'Unafraid to learn more about what is needed to complete a task or solve a problem in a new or different way. Resilience and resourcefulness to implement what is learned.',
        Icon: HiLightBulb,
    },
    {
        title:'Collaborative Mindset',
        about: 'Willingness to try mulitple strategies at the same time, work through conflicts, and a focus on <b>"We"</b> rather than <b>"Me"</b>.',
        Icon: RiTeamLine,
    },
    {
        title:'Clear Communication',
        about: 'Exceptional verbal and written communication delivered in a clear and concise manner.',
        Icon: HiChatAlt,
    },
    {
        title:'Professionalism',
        about: '10+ years of professional experience with a talent for fostering positive relationships with colleagues and clients',
        Icon: FaAward,
    }
]

export const languages:ISkills[] = [
    {
        name: 'Java',
        level: '75%',
        Icon: FaJava,
    },
    {
        name: 'Spring',
        level: '70%',
        Icon: SiSpring,
    },
    {
        name: 'C#',
        level: '40%',
        Icon: FaMicrosoft,
    },
    {
        name: '.NET',
        level: '40%',
        Icon: FaMicrosoft,
    },
    {
        name: 'React',
        level: '60%',
        Icon: FaReact,
    },


]

export const tools:ISkills[] = [
    {
        name: 'Tailwind CSS',
        level: '80%',
        Icon: SiTailwindcss,
    },
    {
        name: 'Heroku',
        level: '70%',
        Icon: GrHeroku,
    },
    {
        name: 'Netlify',
        level: '90%',
        Icon: SiNetlify,
    },
    {
        name: 'MySQL',
        level: '40%',
        Icon: GrMysql,
    },
    {
        name: 'Microsoft Azure',
        level: '40%',
        Icon: FaMicrosoft,
    },
    
]

export const projects:IProjects[] = [
    
    {
        id: 1,
        name: 'The Wild Post',
        description: 'The Wild blog for all things outdoors! This blog site was developed using NextJS, React, and GraphQL to serve currated outdoor content to its readers. Content is handled using GraphCMS to allow people of all skill levels to manage content.',
        image_path: '/images/WildPostss.png',
        deployed_url: 'https://the-wild-post.netlify.app/',
        github_url: 'https://github.com/Kygandao/the-wild-post',
        // category: [],
        tech_tags: ['JavaScript', 'React', 'NextJS', 'GraphQL', 'GraphCMS', 'Tailwind CSS']
    },
    {
        id: 2,
        name: 'Whiteboard',
        description: 'This Whiteboard/Drawing application was developed over the course of only a few days for the November 2021 MintBean.io JR Web Developer Hackathon. As a purely Front End application, the user should expect to be able to use this digital whiteboard like they would use a real one.',
        image_path: '/images/WhiteboardGreeting.png',
        deployed_url: 'https://whiteboard2kd.netlify.app/',
        github_url: 'https://github.com/Kygandao/whiteboard',
        // category: [],
        tech_tags: ['JavaScript', 'React', 'HTML Canvas', 'Tailwind CSS', 'Netlify']
    },
    // {
    //     id: 4,
    //     name: 'Lunar New Year Poster',
    //     description: 'Tasked to create a unique Small Print poster to inform viewers of the day of the event for a Lunar New Year celebration at a French Immersion school. Full print can be found by clicking Site.',
    //     image_path: '/images/LunarNewYearPoster.png',
    //     deployed_url: 'https://drive.google.com/file/d/1rmAM0CsvwVGo_oNuUvukeeRVr5BplGoU/view?usp=sharing',
    //     github_url: '',
    //     // category: [],
    //     tech_tags: ['Adobe Illustrator']
    // },
    
]