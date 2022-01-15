import { FunctionComponent } from "react"
import { ISkills } from "../type"

const Bar:FunctionComponent<{
    data:ISkills
}> = ({data:{name, level, Icon}}) => {
    return (
        <div>
            {name}
        </div>
    )
}

export default Bar
