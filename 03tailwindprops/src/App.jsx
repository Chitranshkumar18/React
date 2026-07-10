import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myobj ={
    username: "lakshay",
    age: 20
  }
  let myarr = [1,2,3,4,5]

  return (
    <>
    <h1 className= 'bg-green-400 text-black p-4 rounded-xl'>Tailwind</h1>
     <Card username= "ChaiorChai" btnText="visit me" />
     <Card username="hello" btnText="aajao"/>
  
     </>
  )
}

export default App
