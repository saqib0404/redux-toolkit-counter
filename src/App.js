import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increaseByAmount, increment, reset } from './features/counterSlice';

function App() {
  const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(increaseByAmount(10))}>increaseBy10</button>
    </div>
  );
}

export default App;
