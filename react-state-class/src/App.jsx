
import './App.css'
// import WeatherApp from './useEffect/WeatherApp'
// import Counter from './useEffect/Counter'
// import Joker from './useEffect/Joker'   
// import Comment from './Form/Comment'
// import CommentForm from './Form/CommentsForm'

// import Ticket from './Lottery Game/Ticket'
// import Form from './Form/Form'
// import FormCommanHandler from './Form/FormCommanHandler'
// import Lottery from './Lottery Game/Lottery'
// import TodoList from './TodoList/TodoList'
// import Counter from './component/Counter'
import LudoBoard from './Ludo Game/LudoBoard'
// import LikeButton from './component/LikeButton'
// import { sum } from './Lottery Game/helper'

function App() {
 
  // let winCondition = (ticket)=>{
  // //  return sum(ticket) === 15 // All numberSum should be equale of 15.
  // //  return ticket.every((num)=> num === ticket[0]) //All num should be equale.
  //  return ticket[0] === 0; // If first num of ticket is zero so you will win.
  // }
  return (
    <>
      {/* <h1>State in React</h1> */}
      {/* <Counter/> */}
      {/* <LikeButton/> */}
      <LudoBoard/>
      {/* <TodoList/> */}
      {/* <Lottery n={3} winningSum={15}/> */}
      {/* <Lottery n={3} winCondition={winCondition}/> */}
      {/* <Form/> */}
      {/* <FormCommanHandler/> */}
      {/* <CommentForm/> */}
      {/* <Comment/> */}
      {/* <Counter/> */}
      {/* <Joker/> */}
     
      {/* <WeatherApp/> */}

      
      
      
     
    </>
  )
}

export default App
