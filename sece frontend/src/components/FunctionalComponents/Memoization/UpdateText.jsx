import { memo } from "react";
const UpdateText = ({Value}) =>{
    return(
        <div>
            <h2>Update Number 2</h2>
            <h2>Value is {Value}</h2>
        </div>
    )
}
export default memo(UpdateText);