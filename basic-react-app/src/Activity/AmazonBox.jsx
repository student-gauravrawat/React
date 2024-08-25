import React from 'react'
import "./Amozon.css"
import Price from './Price'

export default function AmazonBox({title,idx}) {
  let style={
    fontWeight:"bold"
  }

  let oldPrices = ["12,495","11,900","1,599","599"]
  let newPrices = ["8,999","9,199","899","278"]
  let description = [["8,000 DPI","5 Programmable buttons"],["intutive surface","Designed for iPad Pro"],["designed for iPad Pro","intutive surface"],["wireless","Optical orientation"]]

  return (
    <div className='amazon'>
      <p style={style}>{title}</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
      

    </div>
  )
}
