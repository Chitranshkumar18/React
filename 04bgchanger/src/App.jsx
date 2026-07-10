import { useState } from "react"


function App() {
 const [color, setcolor] = useState("olive")

  return (
   <div className = "w-full h-screen duration-200"
   style ={{backgroundColor : color}}
   >
    
     <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 

      <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <botton
        onClick={() => setcolor("red")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "red"}}
        >Red</botton>

        <botton
        onClick={() => setcolor("green")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "green"}}
        >Green</botton>

        <botton
        onClick={() => setcolor("yellow")}
        className = "outline-none px-4 py-1 rounded-full text-orange shadow=lg"
        style ={{backgroundColor : "yellow"}}
        >Yellow</botton>

        <botton
        onClick={() => setcolor("black")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "black"}}
        >Black</botton>

          <botton
        onClick={() => setcolor("pink")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "pink"}}
        >Pink</botton>

          <botton
        onClick={() => setcolor("white")}
        className = "outline-none px-4 py-1 rounded-full text-silver shadow=lg"
        style ={{backgroundColor : "white"}}
        >White</botton>

          <botton
        onClick={() => setcolor("lavender")}
        className = "outline-none px-4 py-1 rounded-full text-silver shadow=lg"
        style ={{backgroundColor : "lavender"}}
        >Lavender</botton>

          <botton
        onClick={() => setcolor("gray")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "gray"}}
        >Gray</botton>

          <botton
        onClick={() => setcolor("blue")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "blue"}}
        >Blue</botton>

          <botton
        onClick={() => setcolor("silver")}
        className = "outline-none px-4 py-1 rounded-full text-white shadow=lg"
        style ={{backgroundColor : "silver"}}
        >Silver</botton>

        </div> 
    </div>

   </div>
  )
}

export default App
