import {useState} from "react"; // useState is a hook that allows us to add state to our functional components. It returns an array with two elements: the current state value and a function to update it. We can use array destructuring to assign these values to variables.
//useState is a special way to change the state in react.

import "./App.css";
export default function App() {
  const [count , setCount] = useState(0);// we can name the state variable and the function to update it whatever we want. The first element of the array is the current state value, and the second element is the function to update it. In this case, we are naming the state variable "count" and the function to update it "setCount". We are also initializing the state with a value of 0.
  const [countToSet,setCountToSet ] = useState(0); // we can also ignore the state variable if we don't need it, and just use the function to update the state. In this case, we are ignoring the state variable and just using the function to update it. This is useful when we only need to update the state and don't need to access its current value.
  //const increamentHandler = (numValue) => {
    /// setCount(count + numValue); // we can use the setCount function to update the state. We pass the new value of the state as an argument to the function. In this case, we are incrementing the count by numValue
    //setCount((prevCount) => prevCount + numValue +1); 
    //setCount((prevCount) =>  prevCount +1);
    //setCount((prevCount) => prevCount +1);
         // we can also use a callback function to update the state. The callback function receives the previous state value as an argument, and we can return the new state value based on it. This is useful when the new state value depends on the previous state value, as it ensures that we are working with the most up-to-date state.
  //};
  return (
      <>
      <h1>Counter  is {count}</h1>
      <div className = "card">Count is 37 </div>
      <div>
        
        <button 
        onClick = {()=>setCount(count+1)} style ={{margin :"0 10px  "}}>INCREASE</button>
        <button 
        onClick ={() => setCount(prevCount => Math.max(0, prevCount - 1))} style ={{margin :"0 10px  "}}>DECREASE</button>
        <button 
        onClick ={() => setCount((count )=>0 )} style ={{margin :"0 10px  "}}>RESET</button>
      </div>
      <div style ={{marginTop : "20px"}}>
         <input style = {{width:"200px",
                          border:"1px solid black" , 
                          margin : "0 5px",
                          padding: "0.6em 1.2em"}} 
      value = {countToSet}
      onChange = {(e) => setCountToSet(Number(e.target.value))}
      type = "text" />
      <button style = {{margin : "0 5px"}}
      onClick ={() => {setCount(Number(countToSet))
        setCountToSet(0);
      }}>set to {countToSet}</button></div>
    </>
      
  );
}