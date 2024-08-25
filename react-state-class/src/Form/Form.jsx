import { useState } from "react"

export default function Form(){
    let[fullName, setFullName] = useState('')
    let[userName, setUserName] = useState('')

     let handleNameChange = (event)=>{
        // console.log(event)
          setFullName(event.target.value)
        
     }
     let handleUserChange = (event)=>{
          setUserName(event.target.value)
     }
     

    return(
        <form>

        <label htmlFor='fullname'>Full Name</label>&nbsp;&nbsp;&nbsp;
            <input type="text" placeholder="enter your full name" value={fullName} onChange={handleNameChange} id="fullName"/>&nbsp;&nbsp;&nbsp;
<br /><br />
        <label htmlFor='username'>User Name</label>  &nbsp;&nbsp;&nbsp; 
            <input type="text" placeholder="enter user name" value={userName} onChange={handleUserChange} id="username"/>&nbsp;&nbsp;&nbsp;
        <button>Submit</button>  

        </form>
    )
}