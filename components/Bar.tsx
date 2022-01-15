import { FunctionComponent } from "react"
import { ISkills } from "../type"

const Bar:FunctionComponent<{
    data:ISkills
}> = ({data:{name, level, Icon}}) => {
    return (
        <div className='my-1 text-white bg-gray-300 rounded-full'>
            <div id='level' className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-gray-800 to-green-900'
            style={{width: level}}>
                <Icon className='mr-2 space-x-3' />
                {name}
            </div>
        </div>
    )
}

export default Bar
