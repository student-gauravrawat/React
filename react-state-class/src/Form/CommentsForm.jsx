import { useState } from "react"
import {useFormik}  from 'formik'

export default function CommentForm({addNewComment}){
    let[formData, setFormData]= useState({ username:'', remarks:'', rating:5})

    // let[isValid, setIsValid] = useState(true)

    let handleInputChange=(event)=>{
        setFormData((curdata)=>{
            return{...curdata, [event.target.name]:event.target.value}
        })
    }
    let handleSubmit=(event)=>{
        /*if(!formData.username){
            console.log('null')
            setIsValid(false)
            event.preventDefault()
            return;
        }*///(scratch method)
        console.log(formData)
        addNewComment(formData)
        event.preventDefault()
        setFormData({
            username:"",
            remarks:'',
            rating:5
        })
    }
    return(
        <div>
        <h4>Give a comment!</h4>
        <form onSubmit={handleSubmit}>

        <label htmlFor="username">User Name</label>&nbsp;&nbsp;
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/><br /><br />
            {/* {!isValid && <p style={{color:'red'}}>Username can not be empty</p>} */}

            <label htmlFor="remarks">Remarks</label> &nbsp;&nbsp;  
            <textarea   value={formData.remarks} placeholder="add few remarks" onChange={handleInputChange}  id="remarks" name="remarks"></textarea> <br/><br />

            <label htmlFor="rating">Rating</label>  &nbsp;&nbsp;
            <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/><br /><br />
            
            <button>Submit</button>   
        </form>
        </div>
    )
}  