import React from 'react'
import AmazonBox from './AmazonBox'

export default function Amazon() {
  let style={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItems : "center"
  };
  return (
    <div style={style}>
    
       <AmazonBox title="Logitech Mx Master" idx={0}/>
       <AmazonBox title="Apple Pencil (2nd Gen)" idx={1}/>
       <AmazonBox title="Zebronic Zeb-transformer" idx={2}/>
       <AmazonBox title="Petronics Toad 23" idx={3}/>
    </div>
  )
}
