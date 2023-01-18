import React, { useState } from 'react'
import { ImQuill } from "react-icons/im"
import { RiDeleteBin3Fill } from "react-icons/ri"
import TodoForm from './TodoForm'

const TodoList = ({ todos, updateTodo, removeTodo ,completeTodo }) => {
    const [edit, setEedit] = useState({
        id: null,
        value: "",
    })
    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEedit({
            id: null,
            value: "",
        });
    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} /> // todo formu icindekileri update eettik
    }
//1 todolisti olusturunca todo jsx e tekrar git ve const usestate olustur orda
//2- todosu todolistte ele gecir  susslu parantez ile daha sonra div icinde map dongusu kur
//3- ilk etapta sadece div lerin key kisimlarini olustur  <> </> burasi sonradan eklencek  artik buttondan eklemeyi aldik
//6- simdi koyma todo jsx e gec ve oraya eklen
//7 yukardaki usestate olustur sonra iconu koy div class acarak  icon importu unutma
//8 <> </> simdi bu simgeyi koy map icine ve IMquille iconunu yaz onclick vererek setEdit ile
// 9 submit update i olustur ve if dongusu ile cevir burdan todoforma git ve turnery ile inputlari cevir
//10
    return (
        <div>
            {todos.map((todo, index) =>
                <>

                    <div 
                    className={todo.isComplete ? "todo-complete" : "todo-container"}
                    key={index}>
                        <div key={todo.id} onClick={()=> completeTodo(todo.id)}> {todo.text} </div>
                        <div className='icons'>
                            <RiDeleteBin3Fill onClick={() => removeTodo(todo.id)} className="delete" />

                            <ImQuill onClick={() => setEedit({ id: todo.id, value: todo.text })} className="up"
                            />
                        </div>

                    </div>
                </>
            )}

        </div>
    )
}

export default TodoList