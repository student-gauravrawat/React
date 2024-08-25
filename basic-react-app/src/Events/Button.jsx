import React from 'react'

function handleClick(event){
    console.log("Hello!")
    console.log(event)
}

function printBye(){
    console.log("bye")
}
function handleMouseOver(){
  console.log("Mouse Over")
}
function handledblClick(){
   console.log('Double clicked')
}

function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <p onClick={printBye}>This parah is for event demo</p>
      <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequatur iusto corrupti ducimus porro. Nesciunt sequi enim praesentium unde itaque sint sit ducimus perferendis! Itaque quisquam animi eaque eveniet ullam.</p>

      <button onDoubleClick={handledblClick}>click me!</button>
    </div>
  )
}

export default Button
