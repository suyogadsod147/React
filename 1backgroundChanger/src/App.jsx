import { useState } from "react"


function App() {
  const [color , setColor] = useState("olive")

  return (
    
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() =>setColor("Red")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"red"} } >red</button>
         <button onClick={() =>setColor("Blue")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"Blue"} } >Blue</button>
         <button onClick={() =>setColor("Green")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"Green"} } >Green</button>
         <button onClick={() =>setColor("Brown")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"Brown"} } >Brown</button>
         <button onClick={() =>setColor("Pink")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"Pink"} } >Pink</button>
         <button onClick={() =>setColor("Orange")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"Orange"} } >Orange</button>
         <button onClick={() =>setColor("gray")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"gray"} } >gray</button>
         <button onClick={() =>setColor("white")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"white"} } >white</button>
         <button onClick={() =>setColor("yellow")}
        className="outline-none px-4 py-1 rounded-full text-black shadow-xl" style={{backgroundColor :"yellow"} } >yellow</button>
      </div>
    </div>
 </div>
    
    
  )
}

export default App
