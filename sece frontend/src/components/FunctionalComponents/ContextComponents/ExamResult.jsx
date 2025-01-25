import { useContext } from "react";
import { ThemeProvider } from "../Hooks/Student";


const ExamResult = () =>{
    const res = useContext(ThemeProvider)
    return(
        <div>
            {console.log(res)}
            <h3>Result published and Your SGPA is {res.sgpa} , CGPA is {res.cgpa}</h3>
        </div>
    )
}
export default ExamResult;