import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'  

function App() {

    let [counter, setCounter] = useState(15)
    //hook takes an array with variable and the function to set or do whatever operation on that variable 
    //let counter = 5

    const addValue=()=>{
      
      //counter=counter+1
      if(counter>=20){
                setCounter('20')
      }else{
              setCounter(counter+1)
              console.log("Value added", counter)
      }
      
      //setCounter takes new values that should be updated in the ui
      
    }

    const removeValue=()=>{
      if(counter<=0){
        setCounter('0')
      }else{
        setCounter(counter-1)
        console.log("Value removed", counter)
      }
      

    }

  return (
    <>
       <h1>coffeeeeeeeeee and aarushiiiiii</h1>
       <h2>counter value: {counter} </h2>
       <button onClick={addValue}>Add Value: {counter}</button>
       <br/>
       <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
   
  )
}

export default App


