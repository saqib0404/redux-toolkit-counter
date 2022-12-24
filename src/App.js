import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increaseByAmount, increment, reset } from './features/counterSlice';
import { fetchPosts } from './features/postSlice';

function App() {
  const count = useSelector(state => state.counter.count);
  const { isLoading, posts, error } = useSelector(state => state.posts)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Counter App</h1>
        <h3>Count: {count}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(increaseByAmount(10))}>increaseBy10</button>
      </div>

      <div>
        <h2>Posts</h2>
        {isLoading && <h4>Loading..</h4>}
        {error && <h4>{error}</h4>}
        {posts && posts?.map(post => <div key={post.title}>
          <h5>{post?.title}</h5>
        </div>)}
      </div>
    </div>
  );
}

export default App;
