import { faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-3xl'>
            <a href="https://www.instagram.com/champi20baht/" target="_blank">
               <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faInstagram}/>
            </a>
            <a href="https://github.com/L343-C" target="_blank">
               <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faGithub}/>
            </a>
            <a href="https://www.facebook.com/Phopthanapat/" target="_blank">
               <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faFacebook}/>
            </a>
           </div>
    )
}

export default Contact;