import { useState } from 'react'
import Card from '../src/components/Card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
     <h1 className="text-3xl font-bold text-blue-600">
      Tailwind is working!
    </h1>
    <Card   bname="coffeee" ptext="Helleooowww i am coffeee" />
    {/*can create many jsx elemetns and create props with same variables and different values  */}
    <Card  bname="boba tea"  ptext="Helleooowww i am boba tea"/> 
  
    </>
  )
}
       
export default App
