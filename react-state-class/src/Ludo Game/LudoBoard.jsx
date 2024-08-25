import React, { useState } from 'react'

function LudoBoard() { 
    let[moves, setMoves] = useState({blue:0, green:0, red:0, yellow:0})
    let[arr, setArr]=useState(["no moves"])
      
    let updateBlue = ()=>{
      //  console.log(`moves blue =${moves.blue}`)
        // setMoves((preMoves)=>{
        //    return{...preMoves, blue:preMoves.blue+1}
        // })
        
        setArr((preArr)=>{
          return [...preArr,"blue moves"]})
        console.log(arr)
    }
    
    let updateYellow = ()=>{
       console.log(`moves yellow =${moves.yellow}`)
        setMoves((preMoves)=>{
           return{...preMoves, yellow:preMoves.yellow+1}
        })
    }
  return (
    <div>
        <p>Game Begins</p>
        <p>{arr}</p>
      <p> Blue mover : {moves.blue}</p>
      <button style={{background:'blue'}} onClick={updateBlue}>+1</button>
      
      <p>Yellow moves : {moves.yellow}</p>
      <button style={{background:'yellow' ,color:'black'}} onClick={updateYellow}>+1</button>

      <p>Green moves : {moves.green}</p>
      <button style={{background:'green'}}>+1</button>

      <p>Red moves : {moves.red}</p>
      <button style={{background:'red'}}>+1</button>

    </div>
  )
}

export default LudoBoard
