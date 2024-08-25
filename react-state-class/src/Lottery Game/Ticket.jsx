import TicketNum from './TicketNum'
import './Ticket.css'

export default function Ticket({ticket}){
 return (
 <div className="ticket">
  <p style={{color:'black', fontWeight:'bold', background:'yellow'}}>Ticket</p>
   {ticket.map((num,idx)=>(
    <TicketNum num={num} key={idx}/>
   ))} 
 </div>
 )
}