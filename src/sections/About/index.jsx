import { useEffect } from "react";
import { data } from "../../Content/aboutme";

const About = ({onInitial, title = ""}) => {

    const SECTION_ID = `${title}-section`;

    useEffect(() => {
        onInitial(SECTION_ID);
    }, [])

    return (
        <div className="space-y-3 scroll-m-12" id={SECTION_ID}>
            <div className="text-primarySubContent font-medium">{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About;