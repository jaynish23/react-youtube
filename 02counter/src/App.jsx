import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  // let counter=15;

  const addValue = () => {
    // if (counter < 20) {
      setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);
      // setCounter(prevCounter => prevCounter + 1);

      // console.log("clicked",counter+1);
    // }
  };
  const removeValue = () => {
    // if(counter>0){
    setCounter(counter - 1);
    // setCounter(prevCounter => prevCounter - 1);
    //   setCounter(prevCounter => prevCounter - 1);
    //   setCounter(prevCounter => prevCounter - 1);
    //   setCounter(prevCounter => prevCounter + 1);
    // console.log("clicked",counter);
    // }
  };

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>decrese value {counter}</button>
      <p> footer: {counter}</p>
    </>
  );
}

export default App;
