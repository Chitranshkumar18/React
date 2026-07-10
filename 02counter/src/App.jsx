import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    if (count < 200) {

      //++++++ ye ek batch ban kr execute hota kuki ye similar work kr raha hai or hr bar only +1 hoga. =====>>>>> (imp for interview)
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);
      setCount(count + 1);

      ///++++++++++ yha call back ko concept hai isliye yha pr batch bn kr execute nhi hoga   (0 ====>>>> 5 hoga )
      setCount(count => count +1);
      setCount(count => count +1);
      setCount(count => count +1);
      setCount(count => count +1);
      setCount(count => count +1);
    }
  };

  const removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>Hello React!</h1>

      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>
        Add Value {count}
      </button>

      <br />
      <br />

      <button onClick={removeValue}>
        Remove Value {count}
      </button>

      <p>Footer: {count}</p>
    </>
  );
}

export default App



