import ClassCompEG from "./components/classComponents/ClassCompEG"
import About from "./components/FunctionalComponents/About"
import Contact from "./components/FunctionalComponents/Contact"
import Gallery from "./components/FunctionalComponents/Gallery"
import Home from "./components/FunctionalComponents/Home"
import Navbar from "./components/FunctionalComponents/Navbar"
import Signup from "./components/FunctionalComponents/Signup"

import {BrowserRouter ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Constact />}></Route>
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/use-state" element={<Contact />}></Route>
        <Route path='/useEffect' element={<UseEffect />}></Route>
        <Route path="/UseState" element={<UserState/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        
        
      </Routes>
      </BrowserRouter>

    </>
)
}

export default App;