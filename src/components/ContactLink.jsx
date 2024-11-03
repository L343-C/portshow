import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactLink = ({link, icon}) => {
    return (
        <div>
            <div className="flex mx-2 gap-2 text-xl">
                <a href={link} target="_blank">
                    <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={icon} />
                </a>
        </div>
        </div>
    )
}

export default ContactLink;