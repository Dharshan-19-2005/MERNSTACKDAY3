import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "reset":
      return initialState;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};
const UseReducer = () => {
  const [num, setNum] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>UseReducer Example</h1>
      <h4>The number is {num}</h4>
      <button onMouseEnter={() => setNum({ type: "increment" })}>+</button>
      <button onDoubleClick={() => setNum({ type: "reset" })}>Reset</button>
      <button onMouseEnter={() => setNum({ type: "decrement" })}>-</button>
    </div>
  );
};
export default UseReducer;