import {useState} from 'react';
var UseState =() =>{
    var [num,setNum] = useState(0)
    return (
        <div>
            <h1>This is useState Example</h1>
            <button onMouseEnter={() => setNum(num - 1)}>-</button>
            <h4>The number is {num}</h4>
            <buttton>+</buttton>
            <button onDoubleClick={() => setNum(0)}>Reset</button>
        </div>
    )
}
export default UseState;