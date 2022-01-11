//File contains data used to display in about me section 1:07:00 for reference

import { BsAward, BsChatRightText, BsStack } from 'react-icons/Bs'
import { GoGraph } from 'react-icons/go'
import { MdLightbulbOutline } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'
import { IOffer } from './type'

export const services:IOffer[] = [
    {
        title:'Fullstack Developmet',
        about: 'Build scalable applications using <b>React.js</b> and various <b>CSS</b> frameworks for frontend development, and <b>Express</b> and other popular frameworks for handling databases and servers.',
        Icon: BsStack,
    },
    {
        title:'Project Management',
        about: 'Identify needs and allocate resources to effectively meet goals. Authenticity with a <b>"people"</b> approach which inspires my team and instills confidence.',
        Icon: GoGraph,
    },
    {
        title:'Creativity and Adaptabliity',
        about: 'Unafraid learn more about what is needed to complete a task or solve a problem from a new or different way. <b>"Whatever the Stack, I will adapt"</b>.',
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
        Icon: BsChatRightText,
    },
    {
        title:'Professionalism',
        about: '10+ years of professional experience in more than two unique fields.',
        Icon: BsAward,
    }
]