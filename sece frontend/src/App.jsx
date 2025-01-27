import ClassCompEG from "./components/classComponents/ClassCompEG"
import About from "./components/FunctionalComponents/About"
import Contact from "./components/FunctionalComponents/Contact"
import Gallery from "./components/FunctionalComponents/Gallery"
import Home from "./components/FunctionalComponents/Home"
import Navbar from "./components/FunctionalComponents/Navbar"
import Signup from "./components/FunctionalComponents/Signup"
import UseEffectAPIimage from './components/FunctionalComponents/Hooks/UseEffectAPIimage'
import UseMemo from "./components/FunctionalComponents/Hooks/UseMemo"  
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import UseCallback from "./components/FunctionalComponents/Hooks/UseCallback"
import UseEffect from "./components/FunctionalComponents/Hooks/UseEffect"
import UseState from "./components/FunctionalComponents/Hooks/UseState"
import UseEffectAPI from "./components/FunctionalComponents/Hooks/UseEffectAPI"
import UseRef from "./components/FunctionalComponents/Hooks/UseRef"
import ReactLifecycleMethods from "./components/classComponents/ReactLifecycleMethods"
import Student from "./components/FunctionalComponents/Hooks/Student"
import Memo from "./components/FunctionalComponents/Memoization/Memo"
import LazyLoadingWithSuspense from "./components/FunctionalComponents/Memoization/LazyLoadingWithSuspense"
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/ClassCompEG" element={<ClassCompEG />}></Route>
        <Route path="/Gallery" element={<Gallery/>}></Route>
        <Route path="/ReactLifecycleMethods" element={<ReactLifecycleMethods/>}></Route>
        <Route path="/UseState" element={<UseState/>}></Route>
        <Route path="/UseEffect" element={<UseEffect/>}></Route>
        <Route path="/UseEffectAPI" element={<UseEffectAPI/>}></Route>
        <Route path="/UseRef" element={<UseRef/>}></Route>
        <Route path="/UseEffectAPIimage" element={<UseEffectAPIimage/>}></Route>
        <Route path="/UseMemo" element={<UseMemo/>}></Route>
        <Route path="/UseCallback" element={<UseCallback/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Student" elements={<Student/>}></Route>
        <Route path="/Memo" elements={<Memo/>}></Route>
        <Route path="/lazy" element={<LazyLoadingWithSuspense/>}></Route>
        <Route path="/use-custom" element={<useLocalStorage/>}></Route>
  

        
      </Routes>
      </BrowserRouter>

    </>
)
}

export default App;