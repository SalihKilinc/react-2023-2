import React, { useState } from 'react'
import { ImQuill } from "react-icons/im"
import { RiDeleteBin3Fill } from "react-icons/ri"
import TodoForm from './TodoForm'

const TodoList = ({ todos, updateTodo, removeTodo }) => {
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
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }

    return (
        <div>
            {todos.map((todo, index) =>
                <>

                    <div key={index}>
                        <div key={todo.id}> {todo.text} </div>
                        <div>
<RiDeleteBin3Fill/>

                            <ImQuill onClick={() => setEedit({ id: todo.id, value: todo.text })}
                            />
                        </div>

                    </div>
                </>
            )}

        </div>
    )
}

export default TodoList