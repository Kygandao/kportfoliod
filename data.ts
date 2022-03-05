import { DiIllustrator } from 'react-icons/di'
import { SiTailwindcss, SiSpring, SiPostman, SiNetlify } from 'react-icons/si'
import { FaReact, FaJava, FaNodeJs, FaAward } from 'react-icons/fa'
import { GrMysql, GrHeroku } from 'react-icons/gr'
import { IoLogoJavascript} from 'react-icons/io'
import { HiChatAlt, HiLightBulb } from 'react-icons/hi'
import { RiTeamLine, RiStackFill, RiBugFill } from 'react-icons/ri'
import { IOffer, IProjects, ISkills } from './type'

export const services:IOffer[] = [
    {
        title:'Fullstack Developmet',
        about: 'Build scalable applications using <b>Java</b> and <b>Spring Boot</b> for back-end development, <b>JavaScript</b>, <b>React</b>, and various <b>CSS</b> frameworks for frontend development. <b>MySQL</b>, <b>GraphQL</b>, <b>Express</b> for handling databases and servers.',
        Icon: RiStackFill,
    },
    {
        title:'Debugging & Troubleshooting',
        about: 'Exersize extreme patience to use analytical and research skills to detect, remove, and correct errors from existing code and avoid errors in new code.',
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
        about: 'Exceptional verbal and written communication, delivered in a clear and concise manner.',
        Icon: HiChatAlt,
    },
    {
        title:'Professionalism',
        about: '10+ years of professional experience in two unique fields.',
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
        name: 'Node',
        level: '50%',
        Icon: FaNodeJs,
    },
    {
        name: 'JavaScript',
        level: '50%',
        Icon: IoLogoJavascript,
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
        name: 'Postman',
        level: '50%',
        Icon: SiPostman,
    },
    {
        name: ' Adobe Illustrator',
        level: '80%',
        Icon: DiIllustrator,
    },
    
]

export const projects:IProjects[] = [
    {
        id: 1,
        name: 'The Wild Post',
        description: 'The Wild blog for all things outdoors! This blog site was developed using NextJS, React, and GraphQL to serve currated outdoor content to its readers. Posts are handled using GraphCMS to allow people of all skill levels to manage content.',
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
    
]