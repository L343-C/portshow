import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
    return (
        <div className="space-y-4">
        <div className="text-primaryTitle font-medium">Experience</div>
        <div className="grid grid-cols-[25%_75%]">
            <div>
                <div>Year</div>
                <div>Image</div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-primarySubContent">Title</div>
                <div className="flex mx-2 gap-2 text-xl">
                    <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faGithub} />
                    <FontAwesomeIcon className='hover:scale-125 transition-all hover:text-primaryTitle' icon={faYoutube} />
                </div>
                <div className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div className="flex gap-4 text-sm">
                    <div className="text-primaryBg bg-primaryContent px-3 py-1 rounded-md hover:text-primaryTitle">React</div>
                    <div className="text-primaryBg bg-primaryContent px-3 py-1 rounded-md hover:text-primaryTitle">TailwindCSS</div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Experience;