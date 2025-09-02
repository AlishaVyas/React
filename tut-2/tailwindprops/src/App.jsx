import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card3 from './components/Card3'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    multiple_props1 : "confident",
    multiple_props2 : "Bold"
  }

  // you can pass only object

  let myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-700 text-black p-10 rounded-4xl'>
        Tailwind Test
      </h1>

      <Card3 props1 = "good" props2 = "loyal" props3 = {myObj} props4={myArr} />
      <Card3 props1 = "bad" />

      
    </>
  )
}

export default App
