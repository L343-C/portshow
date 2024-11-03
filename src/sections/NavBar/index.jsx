import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const navs = [
  {title: "About", sectionId: "About-section"},
  {title:"Experience", sectionId: "Experience-section"},
  {title: "Project", sectionId: "Project-section"},
  {title: "Article", sectionId: "Article-section"}
]

const NavBar = ({navBarItems, currentSection}) => {
  const handleClick = (sectionId) => {
    console.log(sectionId);
    document.getElementById(sectionId).scrollIntoView({behavior: "smooth"})
  }

  const [isMouseEnter, setIsMouseEnter] = useState({});

    return (
        <div className='hidden lg:flex flex-col font-semibold'>
          {
            navBarItems.map((e, i) => (
              <div 
               key={`nav-${e}-${i}`}
               onClick={() => handleClick(e.sectionId)} 
               className="cursor-pointer py-2 flex" 
               onMouseEnter={() => setIsMouseEnter({[e.title]: true})} 
               onMouseLeave={() => setIsMouseEnter({[e.title]: false})}
               >
              <div>
              <FontAwesomeIcon className={`new-arrow ${currentSection === e.sectionId ? "text-primaryTitle" : isMouseEnter[e.title] ? "" : "hidden"}`} icon={faArrowRight}/>
              </div>
              <div className={`duration-700 ease-out ${currentSection === e.sectionId || isMouseEnter[e.title] ? "translate-x-3" : ""}`}>{e.title}</div>
              </div>
            ))
          }
          </div>
    )
}

export default NavBar;