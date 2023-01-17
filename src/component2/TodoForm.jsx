import React, { useRef } from 'react'
import { useState } from 'react'
import "./form.scss"

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit?props.edit.value:"");
    const inputRef = useRef(null);
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random()*1000),
            text:input
        })

    }

    return (
        <form >
{props.edit?(

            <>
                <input placeholder='Please enter your note'
                 value={input} onChange={handleChange}
                 name="text"
                 ref={inputRef}
                 
                 
                 />

                <button onClick={handleSubmit}>update</button>
            </>): (
               <>
               <input placeholder='Please enter your note'
                value={input} onChange={handleChange}
                name="text"
                ref={inputRef}
                
                
                />

               <button onClick={handleSubmit}>Add</button>
           </>  
            )}
        </form>
    )
}

export default TodoForm