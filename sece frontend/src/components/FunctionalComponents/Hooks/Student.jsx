import Invigilator from "../ContextComponents/Invigilator";
import { createContext } from "react";

export const ThemeProvider = createContext();
const Student = () =>{
    return(
        <div>
            <ThemeProvider.Provider value={{sgpa:9.5 , cgpa:6.5}}>
            <h2>This is a example of Student Hooks which is the alternative for props Drilling</h2>
            <h4>Student are writing their exams</h4>
            <Invigilator/>
            </ThemeProvider.Provider>
        </div>
    )
}
export default Student;