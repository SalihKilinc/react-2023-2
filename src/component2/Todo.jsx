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
  const removeArr={...todos}.filter((todo)=>todo.id !==id)
  setTodos(removeArr)
}

  return (
    <div>Todo
    <TodoForm onSubmit={addTodo}/>
    <TodoList todos={todos} updateTodo={updateTodo} removeTodo={removeTodo}/>
    </div>
  )
}

export default Todo