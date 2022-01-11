//File contains data used to display in about me section 1:07:00 for reference

import { BsAward, BsChatRightText, BsStack } from 'react-icons/Bs'
import { GoGraph } from 'react-icons/go'
import { MdLightbulbOutline } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'
import { IOffer } from './type'

export const services:IOffer[] = [
    {
        title:'Resourceful and Adaptable',
        about: 'Unafraid to journey into the unknown and learn more about what is needed to complete a task or solve a problem. "Whichever the Stack, I will adapt"',
        Icon: BsStack,
    },
    {
        title:'Project Management',
        about: 'Authenticity with a "people" approach which inspires my team and instills confidence.',
        Icon: GoGraph,
    },
    {
        title:'Creativity',
        about: 'The ability to think about and solve problems in a new or different way',
        Icon: MdLightbulbOutline,
    },
    {
        title:'Professionalism',
        about: '10+ years of professional experience in more than two unique fields',
        Icon: BsAward,
    },
    {
        title:'Collaborative Mindset',
        about: 'A willingness to try mulitple strategies at the same time, work through conflicts, and a focus on "We" rather than "Me"',
        Icon: RiTeamLine,
    },
    {
        title:'Communication',
        about: 'Exceptional verbal and written communication, delivered in a clear and concise manner',
        Icon: BsChatRightText,
    }
]