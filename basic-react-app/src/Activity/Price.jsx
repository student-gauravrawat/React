import React from 'react'

export default function Price({oldPrice, newPrice}) {
    let oldStyle = {
        textDecoration : "Line-through",
    }
    let newStyle={
        fontWeight :"bold"
    }

    let style={
        backgroundColor : "#e0c367",
        height : "30px",
        with:"200px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"
    }
  return (
    <div style={style}>
      <span style={oldStyle}>{oldPrice}</span>
      &nbsp; &nbsp; &nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  )
}
