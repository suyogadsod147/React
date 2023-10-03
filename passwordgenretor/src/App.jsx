import { useState , useCallback , useEffect , useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [passWord , setPassword] = useState("")
  
  //useRef hook
  const passwordRef = useRef(null)

  const passWordGenretor = useCallback(()=>{
     let pass =""
     let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
     if(numberAllowed){
      str+="0123456789"
     }
     if(charAllowed){
      str+="!@#$%&*<>?"
     }

     for (let i = 1; i <= length; i++) {
      let charindex = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(charindex)
     }
     setPassword(pass)

  } , [length , numberAllowed , charAllowed , setPassword ])


  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , 20);
    window.navigator.clipboard.writeText(passWord)
  } ,[passWord])
 
useEffect(()=>{
  passWordGenretor()
} ,[length , numberAllowed , charAllowed , passWordGenretor])
  
  return (
   <>
    <div className='w-full max-w-md mx-auto   text-center shadow-md px-4 py-2 rounded-xl my-8
     text-orange-500 bg-gray-800' > 
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className="flex shadow- rounded-xl overflow-hidden mb-4">
        <input type="text" value={passWord} className=' w-full py-1' ref={passwordRef} />
        <button onClick={copyPasswordToClipBoard}   className=' bg-white pr-3 shrink-0'>Copy</button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" min={8} max={20} value={length} 
          className=' cursor-pointer' onChange={(e)=>{
            setlength(e.target.value)
          }}/>
          <label >length :{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked ={numberAllowed} id='numberInput' onChange={()=>{
            setNumberAllowed((prev) =>!prev)
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked ={charAllowed} id='charInput' onChange={()=>{
            setCharAllowed((prev) =>!prev)
          }} />
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    
    </div>


   </>
    
  )
}

export default App
