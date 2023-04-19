import "../CommentsByReviewId.css"
import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";





function CommentsByReviewId({user, id}) {
    const [newCommentsById, setNewCommentsById] = useState(null);
    const [loading, setLoading] = useState(false);
    const { review_id } = useParams();
  
    useEffect(() => {
      setLoading(true)
      fetchCommentsByReviewId(review_id).then((  comments  ) => {
        console.log("comments in useeffect", comments)
        setNewCommentsById(comments);
        console.log("commm", newCommentsById)
        setLoading(false)
      });
    }, []);      
          return (
              <div className="reviewdisplay">
      {loading && 
      <Stack spacing={1}>    
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
      <Skeleton variant="rectangular" width={300} height={50} />
    </Stack>}
            {!loading && newCommentsById !== null && 
              newCommentsById.comments.map((comment) => {
return (
              <div className="Comments">  
                <p className="headings" >Author:</p>
                {comment.author}
                <br></br>
                <br></br>
                <p className="headings" >Comment:</p>
                {comment.body}
                <br></br>
                <br></br>
                <p className="headings" >Votes:</p>
                {comment.votes}
                  
                  </div>) })}
                </div> ) }
  export default CommentsByReviewId;