import { faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Title = ({isHighlight, title, link}) => {
    if(!link) {
        return (
            <div className={`text-primarySubContent transition-all ${isHighlight ? "text-primaryTitle" : "" }`}>{title}</div>
        )
    }

    return (
        <div>
            <div className={`text-primarySubContent transition-all ${isHighlight ? "text-primaryTitle" : "" }`}>
                <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`pl-1 duration-700 ${isHighlight ? "translate-x-1 -translate-y-1" : "" }`} icon={faArrowTrendUp}/>
                </a>
            </div>
        </div>
    )
}

export default Title;