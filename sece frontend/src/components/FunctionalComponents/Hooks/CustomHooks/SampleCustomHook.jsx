import { useEffect, useState } from "react";
const useLocalStorage = (key, value ) => {
    var [text, setText] = useState(() => {
        const jsonValue = localStorage.getItem(key);
    if (!jsonValue) return jsonValue
});
    useEffect(() => {localStorage.setItem},[key,value])
    return [text, setText]
    return [text, setText]
}
export default useLocalStorage;