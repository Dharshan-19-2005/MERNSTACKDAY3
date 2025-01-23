import {useState} from 'react';
const Constact = () => {
    var [num,setNum] = useState(0)
    function handleAdd(){
        return setNum(num + 1)
    }
    return(
        <div>
            <h2>This is about Contact</h2>
            <h3>This is a state Example</h3>
            <h4>Number is {num}</h4>
            <button onClick = {()=>setNum(num + 1)}>+</button>
        </div>
    )
}
export default Constact;