import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import ReactDOM from "react-dom/client"
import "./App.css";

function App() {
  // let [color, setColor] = useState("Red");

  // const red = () =>{ setColor("Red")}
  // const blue = () =>{ setColor("Blue")}

  let [counter,setCounter] =useState(15);
  // let addValue = () => {
  //   setCounter(counter+2)
  // }

  return (
    <>
      {/* <h1>Hello world Color is : {color}!!</h1>
      <button onClick={red}> Red </button>
      <button onClick={blue}> Blue </button>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Yellow")}> Yellow</button>
      <button onClick={() => setColor("Pink")}> Pink</button> */}

     
      <button onClick = { () => setCounter(counter+4) }>counter is increase{counter} </button>
      <h1>Counter is: {counter}</h1>
    </>
  );
}

export default App;
