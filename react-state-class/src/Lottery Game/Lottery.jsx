import { useState } from "react"
import { getTicket,sum } from "./helper"
import Ticket from "./Ticket"
import Button from "./Button"


export default function Lottery({n, winCondition}){
  let[ticket, setTicket]=useState(getTicket(n))
  // let isWinning = sum(ticket)=== winningSum
  let isWinning = winCondition(ticket)

  let buyTicket=()=>{
     setTicket(getTicket(n))
  }
  return(
    <div>
        <h1 style={{color:'purple' , textDecorationLine:'underline'}}>Lottery Game!</h1>
        <Ticket ticket={ticket}/>
        <Button action={buyTicket}/>
        <h3 style={{color:'black',background:'yellow',borderRadius:'15px'}}>{isWinning&&"congratulation you won😀😀😀"}</h3>
    </div>
  )
}