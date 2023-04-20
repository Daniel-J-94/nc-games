import { useParams } from "react-router-dom";
import { PostCommentOnReview } from "../api";
import { useState } from "react";
import { toast } from "react-toastify" 


function PostComment({user, setClickCount}) {
    const { review_id } = useParams()
   const [newCommentData, setNewCommentData] = useState("")
   const [posting, setPosting] = useState(false)
    
    function handleSubmit(event) {

        
        event.preventDefault();
        if (newCommentData.length > 0){
            setPosting(true)
        PostCommentOnReview(review_id, user, newCommentData).then(() => {
            setPosting(false)
            toast.success(`Comment added!`,  { position: toast.POSITION.TOP_RIGHT })
        }).catch(() => {
            setClickCount(0);
            setPosting(false)
            toast.error(`Cannot comment offline!`,  { position: toast.POSITION.TOP_RIGHT });
            });
            
        } else {
                toast.error(`Cannot post empty comment!`,  { position: toast.POSITION.TOP_RIGHT });
            }
        setNewCommentData("")
        }
    return(       
        <div>
            <div>
                <h3>Add a comment:</h3>
            </div>
            <br></br>
            <form className="postcommentform" onSubmit={handleSubmit}>
    <textarea value={newCommentData} id="commentData" onChange={(event) => {setNewCommentData(event.target.value)}} ></textarea>
    <br></br>
    <button disabled={posting} type="submit">submit comment!</button>
    </form>
    </div>
    )}
export default PostComment;