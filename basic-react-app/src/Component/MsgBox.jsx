import React from 'react'

export default function MsgBox({userName, textColor}) {
    const style = {color:textColor}
  return (
    <div className='magbox'>
        <h2 style={style}>Hello, {userName}</h2>
        
    </div>
  )
}
