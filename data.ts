import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import { SiTailwindcss, SiSpring } from 'react-icons/si'
import { FaReact, FaJava, FaNodeJs, FaFigma, FaAward } from 'react-icons/fa'
import { IoLogoJavascript} from 'react-icons/io'
import { HiChatAlt } from 'react-icons/hi'
import { GoGraph } from 'react-icons/go'
import { MdLightbulbOutline } from 'react-icons/md'
import { RiTeamLine, RiStackFill } from 'react-icons/ri'
import { IOffer, IProjects, ISkills } from './type'

export const services:IOffer[] = [
    {
        title:'Fullstack Developmet',
        about: 'Build scalable applications using <b>React.js</b> and various <b>CSS</b> frameworks for frontend development, and <b>Express</b> and other popular frameworks for handling databases and servers.',
        Icon: RiStackFill,
    },
    {
        title:'Project Management',
        about: 'Identify needs and allocate resources to effectively meet goals. Authenticity with a <b>"people"</b> approach which inspires my team and instills confidence.',
        Icon: GoGraph,
    },
    {
        title:'Creativity and Adaptabliity',
        about: 'Unafraid to learn more about what is needed to complete a task or solve a problem in a new or different way. <b>"Whatever the Stack, I will adapt"</b>.',
        Icon: MdLightbulbOutline,
    },
    {
        title:'Collaborative Mindset',
        about: 'Willingness to try mulitple strategies at the same time, work through conflicts, and a focus on <b>"We"</b> rather than <b>"Me"</b>.',
        Icon: RiTeamLine,
    },
    {
        title:'Communication',
        about: 'Exceptional verbal and written communication, delivered in a clear and concise manner.',
        Icon: HiChatAlt,
    },
    {
        title:'Professionalism',
        about: '10+ years of professional experience in more than two unique fields.',
        Icon: FaAward,
    }
]

export const languages:ISkills[] = [
    {
        name: 'JavaScript',
        level: '65%',
        Icon: IoLogoJavascript,
    },
    {
        name: 'Node',
        level: '50%',
        Icon: FaNodeJs,
    },
    {
        name: 'React',
        level: '60%',
        Icon: FaReact,
    },
    {
        name: 'Tailwind',
        level: '85%',
        Icon: SiTailwindcss,
    },
    {
        name: 'Java',
        level: '25%',
        Icon: FaJava,
    },
    {
        name: 'Spring',
        level: '25%',
        Icon: SiSpring,
    },
]

export const tools:ISkills[] = [
    {
        name: 'Illustrator',
        level: '80%',
        Icon: DiIllustrator,
    },
    {
        name: 'Photoshop',
        level: '75%',
        Icon: DiPhotoshop,
    },
    {
        name: 'Figma',
        level: '50%',
        Icon: FaFigma,
    },
]

export const projects:IProjects[] = [
    {
        id: 1,
        name: 'Whiteboard',
        description: 'This Whiteboard/Drawing application was developed over the course of only a few days for the November 2021 MintBean.io JR Web Developer Hackathon. As a purely Front End application, the user should expect to be able to use this digital whiteboard like they would use a real one.',
        image_path: '/images/WhiteboardGreeting.png',
        deployed_url: 'https://whiteboard2kd.netlify.app/',
        github_url: 'https://github.com/Kygandao/whiteboard',
        category: ['React'],
        tech_tags: ['React']
    },
    {
        id: 2,
        name: 'Coming Soon!',
        description: 'This project is currently in development. Please check back later for more details!',
        image_path: '/images/construction.jpg',
        deployed_url: '',
        github_url: '',
        category: [],
        tech_tags: []
    },
]