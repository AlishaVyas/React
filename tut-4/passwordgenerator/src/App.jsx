import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  // collecting all the variables needed

  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  //useRef hook
  const passwordRef =  useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed) str+= "!@#$%&*_"

    for(let i=0;i<=length; i++){
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword])

  const copytoclipbord = useCallback(()=>{
     passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(()=>{
    PasswordGenerator()
  }, [length, numberAllowed, charAllowed, PasswordGenerator])

  return (
    <>
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h2 className=" text-4xl text-center text-white">Password Generator</h2>
        <br></br>
        <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
          <input
          type='text'
          value={Password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />

          <button
          onClick={copytoclipbord}
          className='outline-none text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
          </div>  
          <div className='flex text-sm gap-x-2'>
             <div className='flex items-center gap-x-1'>
                <input type='range'
                min={5}
                max={20}
                value={length}
                className='curcor-pointer'
                onChange={(e)=>{setlength(e.target.value)}}/>
                <label>Length:{length}</label>
             </div>

             <div className='flex items-center gap-x-1'>
                <input type='checkbox'
                defaultChecked = {numberAllowed}
                id = "numberInput"
                className='curcor-pointer'
                onChange={()=>{setnumberAllowed((prev) => !prev);

                }}/>
                <label>Number</label>
             </div>
             
              <div className='flex items-center gap-x-1'>
                <input type='checkbox'
                defaultChecked = {charAllowed}
                id = "characterInput"
                className='curcor-pointer'
                onChange={()=>{setcharAllowed((prev) => !prev);

                }}/>
                <label>Characters</label>
             </div>

          </div>
          
      </div>
    </div>
    </>
  )
}

export default App
