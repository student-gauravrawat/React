import { useState } from "react"

export default function LikeButton(){

    let [isLike, setIsLike]= useState(false)
    let [click, setClicks] = useState(0)

     let toggleLike = ()=>{
        setIsLike(!isLike)
        setClicks(click+1)
     }



     let like ={
        color:'red'
     } 
    return(
        <>
           <h3 onClick={toggleLike}>{isLike.toString()}</h3>
           <h5>click={click}</h5>
           <p onClick={toggleLike}>
           {isLike?(<i className="fa-solid fa-heart" style={like}></i>):(<i className="fa-regular fa-heart" ></i>)}
           </p>
        </>
    )
}