//File contains data used to display in about me section 1:07:00 for reference

import { BsAward, BsChatRightText, BsStack } from 'react-icons/Bs'
import { GoGraph } from 'react-icons/go'
import { MdLightbulbOutline, MdOutlineManageSearch } from 'react-icons/md'
import { RiTeamLine } from 'react-icons/ri'
import { IOffer } from './type'

export const services:IOffer[] = [
    {
        title:'Application Creation and Debugging',
        about: 'details about application creation',
        Icon: BsStack,
    },
    {
        title:'Project Management',
        about: 'details about project management',
        Icon: GoGraph,
    },
    {
        title:'Creativity',
        about: 'details about creative tools',
        Icon: MdLightbulbOutline,
    },
    {
        title:'Professionalism',
        about: 'details about workplace professionalism',
        Icon: BsAward,
    },
    {
        title:'Collaborative Mindset',
        about: 'details about teamwork',
        Icon: RiTeamLine,
    },
    {
        title:'Communication',
        about: 'details about strong communication',
        Icon: BsChatRightText,
    }
]