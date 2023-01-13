import React from 'react'
import "./btn.css"
const Btn = ({onClick}) => {
  return (
    <div>
        <button className='btn' onClick={onClick} >Giris yap </button>
    </div>
  )
}

export default Btn