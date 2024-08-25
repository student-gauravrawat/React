import { useState } from "react"
import "./Comment.css"
import CommentForm from "./CommentsForm";

export default function Comment(){
    let[comment, setComments] = useState([{username:'@gr',remarks:'great job!',rating:4}]);

    let addNewComment = (comment)=>{
        setComments((currComments)=>[...currComments, comment])
        // console.log('add new comment')
    }

    return(
        <>

        <div>
            <h4>All Comments</h4>
            {comment.map((comment,idx)=>(

            <div className="comment" key={idx}>
                <span>{comment.remarks}</span>&nbsp;
                <span>(rating = {comment.rating})</span>
                <p>- {comment.username}</p>
            </div>
            ))}

        </div>
        <hr />
        <CommentForm addNewComment={addNewComment}/>
        </>
    )
}