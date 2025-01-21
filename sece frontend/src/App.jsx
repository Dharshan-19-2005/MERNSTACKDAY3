import ClassCompEG from "./components/classComponents/ClassCompEG"
import About from "./components/FunctionalComponents/About"
import Contact from "./components/FunctionalComponents/Contact"
import Gallery from "./components/FunctionalComponents/Gallery"
import Home from "./components/FunctionalComponents/Home"
import Navbar from "./components/FunctionalComponents/Navbar"
import {BrowserRouter ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/ClassCompEG" element={<ClassCompEG/>}></Route>
      <Route path="/Gallery" element={<Gallery/>}></Route>
    </Routes>
    </BrowserRouter>
    <section>
    <Home/>
    <About/>
    <ClassCompEG/>
    <Gallery img="SECE LOGO" page="Gallery"/>
    <Contact/> 
    </section>
    </>
)
}
export default App