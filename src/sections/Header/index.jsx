import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../../Content/header";

const Header = () => {
    return (
        <div className='flex flex-col gap-2'>
        <div className='text-2xl text-primaryTitle font-bold'>{data.name}</div>
        <div className='text-primarySubContent font-medium'>{data.title}</div>
        <div className='text-sm w-5/6'>{data.caption}</div>
        <div className='mt-4'>
          <span className='rounded-md bg-primaryTitle font-medium text-white py-2 px-4'>
              <a href="https://github.com/L343-C" target='_blank'>
            View Resume
              </a>
            <span className='rotate-90 inline-block ml-1.5 text-sm'>
            <FontAwesomeIcon className='animate-bounce' icon={faArrowDown}/>
            </span>
            </span>
          </div>
     </div>
    )
}

export default Header;