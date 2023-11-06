import { useEffect, useState } from 'react'
import { TodoProvoider } from "./contexts"
import {TodoForm ,TodoItem} from "./components/index"

function App() {
  const [todos, setTodos] = useState([])

  const addTodo =(todo)=>{
      setTodos(
        (prevTodo)=>[{id: Date.now(), ...todo}, ...prevTodo]
        )
  }

  const updateTodo = ( id , todo)=>{
    setTodos(
      (prevTodo)=> prevTodo.map((currentTodo)=>(currentTodo.id === id ? todo:currentTodo))
    )
  }

  const deleteTodo = (id)=>{
    setTodos(
      (prevTodo)=>prevTodo.filter((todo)=>todo.id !== id)
    )
  }

  const toggleCoplete = (id)=>{
    setTodos(
      (prevTodo) => prevTodo.map((currentTodo) => currentTodo.id === id ?
       {...currentTodo , completed: !currentTodo.completed } : currentTodo )
    )
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length >0 ){
      setTodos(todos)
    }
  }, []);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <TodoProvoider value={{ todos , addTodo, updateTodo , deleteTodo ,toggleCoplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full' 
                          >
                            <TodoItem/>
                          </div>
                        ))}

                    </div>
                </div>
       </div>
   
    </TodoProvoider>
  )
}

export default App
