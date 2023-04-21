import "../CommentsByReviewId.css"
import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import DeleteComment from "./DeleteComment";
import { toast } from "react-toastify"
import { DeleteCommentOnReview } from '../api';

function CommentsByReviewId({isLightTheme, user, id}) {
  console.log("userincommentsbyrevid", user)
  const [newCommentsById, setNewCommentsById] = useState(null);
  const [loading, setLoading] = useState(false);
  const { review_id } = useParams();
  const [deletedComment, setDeletedComment] = useState(false)
  function themeoptions(lightoption, darkoption) {
    
    if (isLightTheme) {
      return lightoption
    } else {return darkoption} 
  }

  function handleDelete(comment_id) {
   
    DeleteCommentOnReview(comment_id).then(() => {
      setDeletedComment(true)
        toast.success(`Comment removed!`,  { position: toast.POSITION.TOP_RIGHT })
    }).catch(() => {
        toast.error(`Cannot remove comment`,  { position: toast.POSITION.TOP_RIGHT });
    })
    }
  
  useEffect(() => {
    setLoading(true)
    fetchCommentsByReviewId(review_id).then((  comments  ) => {
      
      const sortedComments = comments.comments.sort((a,b)=>b.comment_id>a.comment_id ? 1 : -1) 
     
      setNewCommentsById(sortedComments);
      setLoading(false)
    });
    }, []); 

    function displayNoComments() {if (newCommentsById.length === 0){
      return (<div>
        <h4>No Comments for this Review!</h4>
             
      </div>) 
    } else {return <div>
    </div>}}
          return (
              <div className={themeoptions("reviewdisplay", "reviewdisplaydark")}>
      {loading && 
      <Stack spacing={1}>    
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
    </Stack>}
{!loading && newCommentsById !== null && displayNoComments()}
                        {!loading && newCommentsById !== null && newCommentsById.map((comment) => {
return (<div>
  <br></br>
              <div className="Comments" >  
              
              <p className={themeoptions("headings", "headingsdark")}><h4>Comment by {comment.author}</h4></p>
             
                <p className={themeoptions("reviewdisplaycomment", "reviewdisplaycommentdark")} >"{comment.body}"</p>
                    <br></br>
                <p className={themeoptions("headings", "headingsdark")}>Votes</p>

                <p className={themeoptions("reviewdisplay", "reviewdisplaydark")} >{comment.votes}</p>
                
              
              <DeleteComment author={comment.author} user={user} isLightTheme={isLightTheme} comment_id={comment.comment_id} handleDelete={handleDelete}/>
                <br></br>
                  </div>
                  </div>) })}
                </div> ) }
  export default CommentsByReviewId;