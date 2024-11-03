import Contact from "../Contact";
import Header from "../Header";
import NavBar from "../NavBar";

const LeftSection = ({navBarItems, currentSection}) => {
    return (
    <div className="px-4">
        <div className='sticky top-10 grid gap-y-5 lg:grid-rows-[1fr_2fr_20%] lg:h-[87vh]'>
        <Header />
        <NavBar navBarItems={navBarItems} currentSection={currentSection}/>
        <Contact />
        </div>
    </div>
    )
}

export default LeftSection;