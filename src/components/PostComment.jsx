import { useParams } from "react-router-dom";
import { PostCommentOnReview } from "../api";
import { useState } from "react";
import { toast } from "react-toastify" 
import { ToastContainer } from "react-toastify";

function PostComment({user, setClickCount}) {
    const { review_id } = useParams()
    console.log("checkuserinpostcom", user)
    const [errorToast, setErrorToast] = useState(false)
   const [newCommentData, setNewCommentData] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault();
        PostCommentOnReview(review_id, user, newCommentData).catch(() => {
            setClickCount(0);
            setErrorToast(true);
            toast.error(`Cannot comment offline!`,  { position: toast.POSITION.TOP_RIGHT });
            });}
    return(       
        <div>
            <div>
                <h3>Add a comment:</h3>
            </div>
            <br></br>
            <form className="postcommentform" onSubmit={handleSubmit}>
    <input id="commentData" onChange={(event) => setNewCommentData(event.target.value)} ></input>
    <br></br>
    <button type="submit">submit comment!</button>
    </form>
    </div>
    )}
export default PostComment;