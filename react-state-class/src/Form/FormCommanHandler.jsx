import { useState } from "react"

export default function FormCommanHandler(){
   let[formData, setFormData] = useState({fullName:'',userName:'',password:''})

   let handleInputChange = (event)=>{
      let fieldName =event.target.name;
      let newValue =event.target.value;
      
      setFormData((currData)=>{
        // 1st Format
        currData[fieldName]=newValue
        return {...currData}

        // 2nd Format
        // return{...currData,[fieldName]:newValue}
      })
   }

   let handleSubmit = (event)=>{
         event.preventDefault()
         console.log(formData)
         setFormData({
            fullName:'',
            userName:'',
            password:'',
         })
   }

    return(
        <form onSubmit={handleSubmit}>
          
    <label htmlFor='fullname'>Full Name</label>&nbsp;&nbsp;&nbsp;
    <input type="text" placeholder="enter your full name" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/> &nbsp;&nbsp;
            <br /><br />
    <label htmlFor='username'>User Name</label>  &nbsp;&nbsp;&nbsp; 
        <input type="text" placeholder="enter user name" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>&nbsp;&nbsp;&nbsp;

        <label htmlFor='password'> Password </label>  &nbsp;&nbsp;&nbsp; 
            <input type="password" placeholder="enter your passord" value={formData.password} onChange={handleInputChange} id="password" name="password"/>&nbsp;&nbsp;&nbsp;
        <button>Submit</button>  

        </form>
    )
}