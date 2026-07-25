//  hook--->>>  A Hook is a special React function that lets functional components use React features such as state, lifecycle behaviour, context, refs, and other capabilities without writing class components.

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 // useState --->>> Ye state (yaani data jo change ho sakta hai, aur change hone pe screen update ho) yaad rakhne ke liye hai
 // useEffect --->>> Ye tab use hota hai jab aapko component ke render hone ke baad kuch karna ho -- jaise:
 //            API se data mangwana
 //            Timer set karna
//             Kisi cheez ko document title mein set karna

  const addValue = () => {
    if (count < 200) {

      //++++++ ye ek batch ban kr execute hota kuki ye similar work kr raha hai or hr bar only +1 hoga. =====>>>>> (imp for interview)
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);
      // setCount(count + 1);

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

/*Ek deep analogy samjho

Socho function component ek khaali kamra hai jo har render pe fir se banta hai (function dobara chalta hai). Normal variable is kamre ke andar hi khatam ho jata — agla render aane pe wo bhool jayega.

Hook ek jaadu hai jo bahar ek "diary" mein cheez likh deta hai (React ke internal memory mein) — taaki agli baar kamra banne pe bhi wo purani value yaad rahe.

useState = "ye value yaad rakho, kamra dobara bane to bhi"
useEffect = "kamra ban jaane ke baad, ye kaam bhi kar dena"
*/



