import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-3xl'>
            <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faInstagram}/>
            <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faGithub}/>
            <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faFacebook}/>
           </div>
    )
}

export default Contact;