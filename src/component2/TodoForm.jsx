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
            id:Math.floor(Math.random()*1000), // random input olusturduk 1000 tane
            text:input
        })

    }

    // 1- form tagi ac icine bos <> yerlestir ve input ac bunlarin arasina yerlestir inputu ve butonu </> 
    //2- Todo formu Todo jsx gonder
    //3- const input use statei (bos olacak ilk etapta) olustur ve altina tekrar const inpuetRefi yaz 
    //4- asgi gel ve inputa value degeri ata daha sonra handle cahnge olustur 
    // 5-  ve inputun value ele gecir asagidaki inputu oldugu gibi doldur ref degeri vererek
    //6 - buttona onclick ozelligi ver  handle submit ile ele gecir yukarda  ve en yukari propsu koy ve todolisti oustur oraya gec
    // 7 props editi yerlestir turnery ile dikkat et suslu sonda olacak iki inputuda simdi yap asagidaki sekilde
    return (
        <form className='t_form'>
{props.edit?(

            <>
                <input placeholder='Please enter your note'
                 value={input} onChange={handleChange}
                 name="text"
                 ref={inputRef}
                 className="inpt1"
                 
                 />

                <button onClick={handleSubmit} className="update">update</button>
            </>): (
               <>
               <input placeholder='Please enter your note'
                value={input} onChange={handleChange}
                name="text"
                ref={inputRef}
                className="inpt"
                
                />

               <button onClick={handleSubmit}className="add" >Add</button>
           </>  
            )}
        </form>
    )
}

export default TodoForm