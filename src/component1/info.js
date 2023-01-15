import React from 'react'
import {WiSunset} from "react-icons/wi"

const Info = ({info}) => {
  return (
    <div className='info'>
        <p id='sehir'></p>
        <div className='genelDeger'>
            <p id='sicaklik'>---- </p>< WiSunset className="fa-c"/>

        </div>
        <p id='havaDurumu'>Hava Durumu </p>
        <div className='his'>
            <p id='hissedilen'>Hissedilen</p>< WiSunset className="fa-c"/>

        </div>

    </div>
  )
}

export default Info