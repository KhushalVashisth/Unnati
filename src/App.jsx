import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrollToTop"
import { useState,useEffect } from "react"
import { Routes ,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Services from "./pages/Services"
import Footer from "./Components/Footer"
import Ot from "./Services/Ot"
import Aba from "./Services/Aba"
import ParentC from "./Services/ParentC"
import SensoryI from "./Services/SensoryI"
import SpecialEd from "./Services/SpecialEd"
import Speech from "./Services/Speech"
import WhatsappButton from "./whatsapp/WhatsappButton"
import Loader from "./Components/Loader"
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 2 sec (ya jab tak assets load ho rahe ho)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
       <Navbar/>
       <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/services/ot' element={<Ot/>}/>
        <Route path='/services/aba' element={<Aba/>}/>
        <Route path='/services/parentcounseling' element={<ParentC/>}/>
        <Route path='/services/specialeducation' element={<SpecialEd/>}/>
        <Route path='/services/speech&language' element={<Speech/>}/>
        <Route path='/services/sensoryintegration' element={<SensoryI/>}/>
        
      </Routes>
      <WhatsappButton/>
      <Footer/>
    
          </div>
  )
}

export default App
