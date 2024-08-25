import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function  TodoList(){
 let[todos, setTodos] = useState([{task:"sample-task",id:uuidv4(),isDone:false}])
 let[newTodo, setNewTodo] = useState('')
       
  // This function will run after updateTodoValue function ...
   let addNewTask = ()=>{
     setTodos((prevTodo)=>{
      return [...prevTodo,{task:newTodo,id:uuidv4(), isDone:false}]
    })
     setNewTodo("")
   }
   
   // This will run first....
   let updateTodoValue = (event)=>{
    // console.log(event.target.value)
    setNewTodo(event.target.value)
   }

   // Deleting from Array...
   let deleteTodo = (id)=>{
  setTodos((prevTodos)=> todos.filter((prevTodos)=> prevTodos.id != id))
    
   }

   //Update All in Array....
   let upperCaseAll = ()=>{
  setTodos((prevTodo)=> (
    prevTodo.map((todo)=>{
        return{
            ...todo, task:todo.task.toUpperCase()
        }
     })
  ))
   }

   let uppercaseOne = (id)=>{

    setTodos((prevTodo)=> (
        prevTodo.map((todo)=>{
            if(todo.id == id){
              return{
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            }
            else{
                return todo;
            }
         })
      ))
   }

   let doneTask = (id)=>{
    setTodos((prevTodo)=> (
        prevTodo.map((todo)=>{
            if(todo.id == id){
              return{
                    ...todo,isDone:true,
                }
            }
            else{
                return todo;
            }
         })
      ))
   }
    return(
        <>

        <input type="text" placeholder="add a task"  value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add Task</button>
             <br/><br/><br/>

             <hr />
 
            <h5>Task Todo</h5>
            <ul>
             {todos.map((todos)=>(
                   <li key={todos.id}>
                   
                       <span style={todos.isDone?{textDecorationLine:'line-through'}:{}}>{todos.task}</span> 
                       &nbsp;&nbsp;&nbsp;
                       <button onClick={()=>{deleteTodo(todos.id)}}>Delete</button>
                       &nbsp;&nbsp;&nbsp;
                       <button onClick={()=>{uppercaseOne(todos.id)}}>uppercase</button>
                       &nbsp;&nbsp;&nbsp;
                       <button onClick={()=>{doneTask(todos.id)}}>Mark as Done</button>
                     
                   </li> 
            )  )}
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            
        </>
    )
}