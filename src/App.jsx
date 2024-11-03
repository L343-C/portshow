import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import LeftSection from './sections/LeftSection'
import RightSection from './sections/RightSection'

function App() {


  const [sectionIds, setSectionIds] = useState([]);
  const [navBarItems, setNavBarItems] = useState([]);
  const [currentSection, setCurrentSection] = useState("");

  const addSectionId = (sectionId) => {
    console.log(sectionId);
    const elementId = document.getElementById(sectionId).id;
    setSectionIds((prev) => [...new Set([...prev, elementId])]);

    const elementTitle = document.getElementById(sectionId).childNodes[0].textContent
    const obj = { title: elementTitle, sectionId: elementId};

    setNavBarItems((prev) => {
      if(prev.findIndex(e => e.title === obj.title) < 0) {
        return [...prev, obj];
      }
      return prev;
    });
  }

  useEffect(() => {
    if(sectionIds.length > 0) {
      setCurrentSection(sectionIds[0])
     }
   }, [sectionIds])

   const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const el = sectionIds[index];
      const eloffset = document.getElementById(el).getClientRects()[0].y
      const height = document.getElementById(el).getClientRects()[0].height
      const viewHeight = window.innerHeight * 0.3;

      if(eloffset <= 0) {
        if(eloffset + height > viewHeight) {
          setCurrentSection(el)
        }
        setCurrentSection(el)
      }
      else if (eloffset > 0 && eloffset < viewHeight) {
        setCurrentSection(el)
      }
      
    }
   } 

   useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
   }, [])


  return (

    <div className="mt-10 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection navBarItems={navBarItems} currentSection={currentSection}/> 
      <RightSection onInitial = {addSectionId}/>
    </div>
    
  ) 
}
export default App
