import React from 'react'
import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
const[todos ,setTodos] = useState ([])

const addTodo=(todo)=>{
const newTodos=[todo,...todos]
setTodos(newTodos)
}
const updateTodo=(todoId,newValue)=>{
  setTodos((prev)=>prev.map((item)=>(item.id===todoId?newValue:item)))
}
const removeTodo=(id)=>{
  const removeArr=[...todos].filter((todo)=>todo.id !==id)
  setTodos(removeArr);
}

const completeTodo =(id)=>{
  let updateTodos=todos.map((todo)=>{
    if (todo===id){
      todo.isCompleted=!todo.isCompleted;
    }
    return todo;
  })
  setTodos(updateTodos)
}
 //1- basligi koyarak basla 
 //Sonra todoform olustur diger sayfa  
 // 3 todo formu divin altina import et ve todo forma tekrar gec
 //4- todo listi import et ve const usestate todosu olustur 
 // 5- todod forma onsubmit ozelligi vver ve const addTodoya at ve orayi yaz sonra todo liste don
 // 6 todo listi ekle ve icine todosu obje olarak yerlestir  artik add butonu calisir 
 // 7 scss kismina gec app js de clas olustur ve orayi hallet scss git

  return (
    <div className='bs'>Todo   
    <TodoForm onSubmit={addTodo}/>
    <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo} completeTodo={completeTodo}/>
    </div>
  )
}

export default Todo