import { useEffect, useState } from "react";
import FormatDate from "../components/Date";
import Picture from "../components/Picture";
import Title from "../components/Title";
import ContactLink from "../components/ContactLink";
import Description from "../components/Description";
import Tech from "../components/Tech";
import Image from "../assets/Image.png";

const ContentContainer = ({
    onInitial,
    title: sectiontitle = "",
    data = [],
}) => {
    const [isMouseEnter, setIsMouseEnter] = useState({});

    const SECTION_ID = `${sectiontitle}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div id={SECTION_ID} className="scroll-m-5">
        <div className="text-primarySubContent font-medium py-6">{sectiontitle}</div>
        {
            data.map(({date,
                 title , 
                 link, 
                 contact, 
                 description, 
                 skills, 
                 picture
                }, index) => (
        <div
             key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
         className={`grid grid-cols-[25%_75%] rounded-xl px-2 py-6 transition-all ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryHover" : ""}`}
         onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true} )}
         onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false} )}
        >
            <div>
                <FormatDate isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]}>{date}</FormatDate>
                <Picture picture={picture} title={title} />
            </div>
            <div className="flex flex-col gap-4">
                <Title isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link}/>
            {
                contact.length > 0 ?
                <div className="flex text-xl">
                {
                    contact.map((e, i) => (
                        <ContactLink key={`${e}-Contact-${i}`} icon={e.type} link={e.link}/>
                    ))
                    
                }
                </div>
                : null
            }

                {
                    description.map((e, i) => (
                        <Description key={`${e}-description-${i}`} description={e}/>
                    ))
                }

                {
                    skills.map((e, i) => (
                        <Tech key={`${e}-skills-${i}`} isHighlight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e}/>
                    ))
                }
            </div>
          </div>
        ))          
    }
          </div>       
    )
}

export default ContentContainer;