import Contact from "../Contact";
import Header from "../Header";
import NavBar from "../NavBar";

const LeftSection = () => {
    return (
    <div className="px-4">
        <div className='sticky top-10 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[87vh]'>
        <Header />
        <NavBar />
        <Contact />
        </div>
    </div>
    )
}

export default LeftSection;