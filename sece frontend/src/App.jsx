import ClassCompEG from "./components/classComponents/ClassCompEG"
import About from "./FunctionComponents/About"
import Contact from "./FunctionComponents/Contact"
import Gallery from "./FunctionComponents/Gallery"
import Home from "./FunctionComponents/Home"

function App() {
  return (
    <section>
    <Home/>
    <About/>
    <ClassCompEG/>
    <Gallery img="SECE LOGO" page="Gallery"/>
    <Contact/> 
    </section>
)
}
export default App