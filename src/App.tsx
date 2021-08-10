import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import './App.css';
import {decrement,increaseAmount, increment} from './Redux/slices/slicesCounter'


function App() {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state?.value )
  return (
    <div className="App">
  <h1>Redux App Counter</h1>
  <h2>Counter: {counter?.value}</h2>
  <button onClick={()=>dispatch(increment())}>+</button>
  <button onClick={()=>dispatch(decrement())}> -</button>
  <button onClick={()=>dispatch(increaseAmount(10))}>Increase</button>
    </div>
  );
}

export default App;
