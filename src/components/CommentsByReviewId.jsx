import "../CommentsByReviewId.css"
import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";




function CommentsByReviewId({isLightTheme, user, id}) {
  const [newCommentsById, setNewCommentsById] = useState(null);
  const [loading, setLoading] = useState(false);
  const { review_id } = useParams();
  
  function themeoptions(lightoption, darkoption) {
    console.log("themehere", isLightTheme)
    if (isLightTheme) {
      return lightoption
    } else {return darkoption} 
  }
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
              <div className={themeoptions("reviewdisplay", "reviewdisplaydark")}>
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
              <div className="Comments" >  
              <br></br>
              <p className={themeoptions("headings", "headingsdark")}>Author:</p>
             
                <p className={themeoptions("reviewdisplay", "reviewdisplaydark")} >{comment.author}</p>               
                <br></br>
               
                <p className={themeoptions("headings", "headingsdark")}>Comment:</p>
             
                <p className={themeoptions("reviewdisplay", "reviewdisplaydark")} >{comment.body}</p>
                <br></br>
              
                <p className={themeoptions("headings", "headingsdark")}>Votes</p>
           
                <p className={themeoptions("reviewdisplay", "reviewdisplaydark")} >{comment.votes}</p>
                
                  
                  </div>) })}
                </div> ) }
  export default CommentsByReviewId;