import { useState } from 'react'



function App() {
  //step1  setting the variable and the function 
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200" 
   style={{backgroundColor: color}}>
    {/*inline css  always in double brackets  */ }
      {/*step 2 create the 2 divs, their classNames for tailwaind  and the style inline attribute for the background 
      the background can also be written in the className just like all the other styling poperties */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div 
            
            className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
              {/*step 3 create the buttons in the div and its styling 
              step 4 then insert the onClick function and create a callbak and pass the setColor function to it 
              then add more buttons and functions  */}
              <button 
              onClick={()=>setColor("orange")}  // onlclick onl takes function so pass it as callbacks
              className="outline-none px-5 py-3 rounded-full text-white shadow-lg"
              style={{backgroundColor:"orange"}}>Orange</button>

              <button
              onClick={()=>setColor("cyan")} 
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"cyan"}}>Cyan</button>

              <button 
              onClick={()=>setColor("magenta")} 
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"magenta"}}>Magenta</button>

              <button 
              onClick={()=>setColor("brown")} 
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"brown"}}>Brown</button>

              <button 
              onClick={()=>setColor("violet")} 
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"violet"}}>Violet</button>

              <button 
              onClick={()=>setColor("grey")} 
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"grey"}}>Grey</button>

              <button 
              onClick={()=>setColor("blue")} 
              className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
              style={{backgroundColor:"blue"}}>Blue</button>
             
            </div>
      
      </div>
  </div>
  )
}


export default App
