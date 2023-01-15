import React, { useEffect, useState } from 'react'
import axios from 'axios';


const Form = () => {
    const [city , setCity]= useState("");
   // useEffect(( ) => console.log(city) , [city])  // city dizi arasina alarak sonsu donguye bagladik yasam alanini belirledik
 const handleChange =()=>{  // e.preventDefault ile ekranin default yonlenmesini englledik submitten dolayi
const api ="e986d0bb542ff0d95aa38eb4582ad882";

const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=tr&appid=${api}&units=metric`

    axios(baseUrl).then(res => (res.data));  // axios fetch gorevi yapar bize json olarak cevirir dosyalari
console.log(baseUrl)

 }
 
    return (
    <div>
        <h1>Hava Durumu</h1>
<form onSubmit={(e)=> {e.preventDefault();  handleChange()}}> 
<div className='form'>
<input onChange={(e) => setCity(e.target.value)} className='inputText' type="text" placeholder="Sehri Giriniz" />
</div>

<div className='btnDiv'>
    <button type='submit' className='btn'> Verileri Getir </button>

</div>


</form>

    </div>
  )
}
//axios yuklemeyi unutma

export default Form