import { useState, useEffect } from "react";

const ListItems = ({ func }) => {
    var [numbers, setNumbers] = useState([])
    useEffect(() => { setNumbers(func()); }, [func])
    return (
        <div>
            <h3>This number list is as follow according to the number present in input box</h3>
            {numbers.map((number, index) => {
                return <h4 key={index}>{number}</h4>
            })}
        </div>
    )
}
export default ListItems;