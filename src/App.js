import Main from "./Main/main";
import "./App.css";
import { useEffect, useState } from "react";
import { actions } from "./store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  //   let [min,setMin] = useState("")
  //   console.log(min);
  //   const data = [
  //     { name: "astik", id: 1 },
  //     { name: "singh", id: 2 },
  //     { name: "rohan", id: 3 },
  //     { name: "mohan", id: 4 },
  //     { name: "taxido", id: 5 },
  //     { name: "paksh", id: 6 },
  //   ];
  // function passed(value){
  //   setMin(value)
  // }
  // useEffect(()=>{
  //   console.log("value changed...");
  // },[min])
  const increment = () => {
    debugger;
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  const addby = () => {
    dispatch(actions.addby());
  };
  return (
    <div className="App">
      <h1 className="test-center text-success">
        Basic Increment Decrement Buttons
      </h1>
      <div className="main d-flex align-items-center justify-content-center">
        <h1>{counter}</h1>
        <button className="subtract" onClick={decrement}>
          <span>-</span>
        </button>
        {/* <input type="text" className="input" value={counter} /> */}
        <button className="add" onClick={increment}>
          <span>+</span>
        </button>
      </div>
      {/* {data.map((i) => {
        return <Main key={i.id} props={i} passed={passed}/>;
      })} */}
    </div>
  );
}

export default App;
