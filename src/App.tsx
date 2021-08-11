import "./App.css";
import {
  decrement,
  increaseAmount,
  increment,
} from "./Redux/slices/slicesCounter";
import { useAppDispatch, useAppSelector } from "./Redux/store/store";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <div className="App">
      <h1>Redux App Counter</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}> -</button>
      <button onClick={() => dispatch(increaseAmount(20))}>Increase</button>
    </div>
  );
}

export default App;
