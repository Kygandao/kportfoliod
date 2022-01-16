import { FunctionComponent } from "react"
import { IOffer } from "../type"

const OfferCard:FunctionComponent<{ service: IOffer }> = ({service:{title, about, Icon}}) => {

    const createMarkup = () => {
        return {
            __html:about
        }
    }
    return (
        <div className='flex items-center p-2 space-x-5 dark:bg-gray-900'>
            <Icon className='w-12 h-12 text-green-900 dark:text-white'/>
            <div>
                <h4 className='font-semibold'>{title}</h4>
                <p dangerouslySetInnerHTML={createMarkup()} className='text-sm'/>
            </div>
        </div>
    )
}

export default OfferCard
