import { data as experienceData } from "../../Content/experience";
import { data as projectData} from "../../Content/Project";
import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import Footer from "../Footer";

const RightSection = ({ onInitial }) => {
    return (
        <div className="px-4 grid gap-y-40">
           <About 
               onInitial={onInitial}
               title = "About"
            />
           <ContentContainer 
               onInitial={onInitial}
               title="Experience"
               data={experienceData}
           />

           <ContentContainer 
               onInitial={onInitial}
               title="Project"
               data={projectData}
           />

           <ContentContainer 
               onInitial={onInitial}
               title="Article"
               data={projectData}
           />

           <Footer />
      </div>
    )
}

export default RightSection;