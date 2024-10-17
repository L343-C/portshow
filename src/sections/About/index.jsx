import { data } from "../../Content/aboutme";

const About = () => {
    return (
        <div className="space-y-3">
            <div className="text-primaryTitle font-medium">{data.title}</div>
            <div>{data.description}</div>
        </div>
    )
}

export default About;