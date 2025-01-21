
import { useState} from "react";
// Event handling
const About = () => {
    var [text, setText] = useState("Vijay");
    function handleText()
    {
        setText(e.target.value) // makes the text unchanga
    }
    return(
        <div>
            <h2>This is about components</h2>
            <h2>TexttArea:</h2>
            <textarea value ={text} onChange={handleText}></textarea>
            <p> The text is {text} </p>
        </div>
    )
}
export default About;