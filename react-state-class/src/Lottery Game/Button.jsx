import React from 'react'
// action prop is a function...
function Button({action}) {
  return (
    <div>
      <button onClick={action} style={{background:'purple',color:'yellow'}}>Buy New Ticket</button>
    </div>
  )
}

export default Button
