import "../CommentsByReviewId.css"
import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';



function CommentsByReviewId({isLightTheme, user, id}) {
  const [newCommentsById, setNewCommentsById] = useState(null);
  const [loading, setLoading] = useState(false);
  const { review_id } = useParams();
  
  function themeoptions(lightoption, darkoption) {
    
    if (isLightTheme) {
      return lightoption
    } else {return darkoption} 
  }

  
  useEffect(() => {
    setLoading(true)
    fetchCommentsByReviewId(review_id).then((  comments  ) => {
      setNewCommentsById(comments);
      setLoading(false)
    });
    }, []); 

    
    const darkthumbs = "#CEA16F"
    const lightthumbs = "#24222C"      
    function displayNoComments() {if (newCommentsById.comments.length === 0){
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
                        {!loading && newCommentsById !== null && newCommentsById.comments.map((comment) => {
return (
              <div className="Comments" >  
              
              <p className={themeoptions("headings", "headingsdark")}><h4>Comment by {comment.author}</h4></p>
             
                <p className={themeoptions("reviewdisplaycomment", "reviewdisplaycommentdark")} >"{comment.body}"</p>
                <p className={themeoptions("reviewdisplaycomment", "reviewdisplaycommentdark")} >"here is the coment id for dev purposes only:{comment.comment_id}"</p>
                
              
                <p className={themeoptions("headings", "headingsdark")}>Votes</p>
                
           
                <p className={themeoptions("reviewdisplay", "reviewdisplaydark")} >{comment.votes}</p>
                
              <br></br>
              <Button
              onClick={() => console.log("you deleted your comment!")}
              sx={{color: themeoptions(lightthumbs, darkthumbs)}}
              type="submit"
              varient="contained"
              endIcon={<DeleteOutlineIcon />}
              >
                Delete
              </Button>
                <br></br>
                <br></br>
                
                  
                  </div>) })}
                

                </div> ) }
  export default CommentsByReviewId;