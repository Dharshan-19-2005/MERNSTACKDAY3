import CoE from "./CoE";

const Faculty = (res) =>{
    return(
        <div>
            <h3>Paper correction is process</h3>
            <CoE sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Faculty;