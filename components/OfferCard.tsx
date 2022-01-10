import { FunctionComponent } from "react"
import { IOffer } from "../type"

const OfferCard:FunctionComponent<{ service: IOffer }> = ({service:{title, about, Icon}}) => {
    return (
        <div>
            <Icon />
            <div>
                <h4>{title}</h4>
                <p>{about}</p>
            </div>
        </div>
    )
}

export default OfferCard
