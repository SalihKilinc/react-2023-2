


import { useState } from "react";
import Btn from "./componenetsderss/btn/Btn";

import Form from "./componenetsderss/form/form";
import Inpt from "./componenetsderss/inpt/inpt";
import Section from "./componenetsderss/sectiontitle/section";







function App() {
  
  const [user ,setUser]=useState({name: "" , password:""})  // her input degisiminde useri degistirmem gerekli onun iciin onchange yapilir asagida
  const handleChange = (e) =>{  // ... spret operatorunu kullanarak name ve paswordu actik
   // setUser({...user,name: e.target.value});  // e nin target value sindan gelen degeri alicaz daha sonra bunun icin inputa git
    
   // console.log(user)    // value degeride user icindeki name den alcaz

    // if degeri acip target alcaz

    if(e.target.type ==="text"){
      setUser({...user,name: e.target.value}); 
      console.log(user)   
    }
    else if(e.target.type ==="password"){
      setUser({...user,password: e.target.value}); 
      console.log(user)  
    }
  }

  const handleClick=()=>{
    if(user.name===""){
      alert("Kullanici adi bos gecilemez")
    }
    else if (user.password=== ""){
      alert("Sifre girmediniz ")
    }else{
      alert("Kullanici adi :" + user.name + " " + "Parolaniz :" + user.password)
    }
  }
  return (<div>
  
 <Section/>
<Form>


<Inpt type={"text"} value={user.name}  onChange={handleChange}/>

<Inpt type={"password"}  value={user.password}  onChange={handleChange}/>
<Btn onClick ={handleClick}/>
</Form>
  </div>
  )
}

export default App;
