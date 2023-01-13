import React from 'react'
import "./inpt.css"

const Inpt = ({type , onChange}) => {
  return (
    <div>
      
<input className='inpt' type={type} onChange={onChange} />
    </div>
  )
}

export default Inpt