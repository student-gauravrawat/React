import { useState, useEffect } from "react"

 export default function Counter(){
    let[countx, setCountx] = useState(0)
    let[county, setCounty] = useState(0)

    let inCountx = ()=>{
        setCountx((num)=>{
           return num+1
        })
    }  
     
    let inCounty = ()=>{
        setCounty((num)=>{
           return num+1
        })
    }  

    useEffect(function printSomething(){
        console.log('this is a side-effect')
    },[countx, county])

    return(
        <div>
            <h3>count = {countx} </h3>
            <button onClick={inCountx}>+1</button>

            <h3>count = {county} </h3>
            <button onClick={inCounty}>+1</button>
        </div>
    )
 }