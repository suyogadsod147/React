import { createContext , useContext } from "react";

export const TodoContext = createContext({
 todos:[
    {
        id:1 ,
        todo: "my work",
        completed : false ,
    }
 ],

 addTodo: (todo) =>{},
 updateTodo : (id , todo) =>{},
 deleteTodo : (id) =>{},
 toggleCoplete : (id) =>{},

});

export const useTodoContext = ()=>{
    return useContext(TodoContext)
}


export const TodoProvoider = TodoContext.Provider