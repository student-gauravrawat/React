import { useState } from "react"


function init(){
    return Math.random()
}
export default function Counter(){
   
    // let [state, setStateVariable] = useState(0)
    let [count, setCount] = useState(init) // initialization line (In re-render time ignores this line )
    // console.log("component is rendered")
    // console.log(`count=${count}`)
     
    // callBack 
    let inCount = ()=>{
        setCount((currCount)=>{
                return currCount + 1;
        })
        // // setCount((currCount)=>{
        // //         return currCount + 1;
        // // })
        // // setCount((currCount)=>{
        // //         return currCount + 1;
        // // })
        // // // console.log(count)
        // // console.log(`inside incount=${count} `)
    }
    

    return (
        <>
            <h3>count={count}</h3>  
            <button onClick={inCount}>Increase Count</button>
        </>
    )
}