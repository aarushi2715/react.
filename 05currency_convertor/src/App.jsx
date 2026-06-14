import React, { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/UseApiData'



function App() {
  
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to , setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  
  

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])

  }
  

  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center  ">
      <div className="  h-screen flex-1 bg-cover bg-no-repeat"
           style={{backgroundImage:`url('https://images.pexels.com/photos/3222685/pexels-photo-3222685.jpeg')`}}>
      </div>
        <div
            className=" flex justify-center items-center flex-1 h-screen  bg-cover bg-no-repeat "
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/27636865/pexels-photo-27636865.jpeg')`,
            }}
        >
            <div className="">
                <div className="   max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                          //we want the method to fire not the form to go somewhere when it submits
                            e.preventDefault();
                           convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"

                                amount = {convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={to}
                                readOnly
                                
                                
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default App
