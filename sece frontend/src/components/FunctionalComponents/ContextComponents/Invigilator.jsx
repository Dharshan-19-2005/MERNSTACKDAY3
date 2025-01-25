import Faculty from "./Faculty";

const Invigilator = (res) =>{
    return(
        <div>
            <h3>Invigilator is Done</h3>
            <Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Invigilator;