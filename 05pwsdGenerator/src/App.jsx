import { useState, useCallback, useEffect, useRef } from 'react'//use ref id used when we want to take reference, useCallback is for optimization and useEffect is for re rendeing 
//usecallback memorises functions as mauch as it can it memorises the memory that's being rused or the thread ebing reused
//useEffect runs when the page is called the first time 

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")//in defaul value we will generate some password on page laoding some api will be called or any method will run 

  //useRef hook
  const passwordRef = useRef(null)


  //this same method will be called again and again at different locations on the page in different forms
  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()-+/{}[]_~`="

    for(  let i=1; i<=length; i++){
      let char=Math.floor(Math.random()*str.length);//this will generate a random index and not character
      pass+=str.charAt(char)
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    //just to show to user that they have copied the password 
    passwordRef.current?.select();
    //we use this when we want to specify the range of the charaters selceted by user
    passwordRef.current?.setSelectionRange(1, 101);
    window.navigator.clipboard.writeText(password);
  },[password])


  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


 

  return (
    <>
        <div className="w-full   max-w-md mx-auto text-center shadow-md rounded-lg px-4 my-8 text-blue-500 bg-gray-800">Password Generator
            <div className="flex items-center">
                <input
                type="text"
                value={password}
                className="outline-none w-full py-1 px-3 bg-white mx-auto my-8"
                placeholder="password"
                readOnly
                //get reference from here 
                ref={passwordRef}
                />
                <button 
                onClick={copyPasswordToClipboard}
                className="outline-none bg-blue-700 text-white px-3 py-1  shrink-0">
                  Copy
                </button>
            </div>
            <div className="flex text-sm gap-x-2">
                <div className="flex ites-center gap-x-1">
                  <input
                  type="range"
                  min={6}
                  max={100}
                  value={length}
                  className="cursor-pointer"
                  onChange={(e)=>{setLength(e.target.value)}}
                  />
                  <label>Length: {length}</label>
                </div>

                <div className="flex items-center gap-x-1">
                <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={()=>{
                  setNumberAllowed((prev) => !prev);
                }}
                />
                <label>Number</label>
                </div>

                <div className="flex items-center gap-x-1">
                <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={()=>{
                  setCharAllowed((prev) => !prev);
                }}
                />
                <label>Character</label>

                </div>
            </div>
        
        </div>
    </>
  )
}

export default App


/*Limits maximum width.
max-w-md
max-width: 28rem or 448px;
md here does NOT mean medium screen.
It means medium size width preset.

So:

element can shrink
but cannot grow beyond 28rem

Very common for cards/forms.

text-blue-500

Sets text color.

color: #3b82f6;

Tailwind color scale:

100 → very light
500 → normal
900 → very dark*/