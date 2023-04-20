import "../CommentsByReviewId.css"
import { useEffect, useState } from "react";
import { fetchCommentsByReviewId } from "../api";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';



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
      setNewCommentsById(comments);
      setLoading(false)
    });
    }, []); 
    const darkthumbs = "#CEA16F"
    const lightthumbs = "#24222C"      
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
              
              <p className={themeoptions("headings", "headingsdark")}><h4>Comment by {comment.author}</h4></p>
             
                <p className={themeoptions("reviewdisplaycomment", "reviewdisplaycommentdark")} >"{comment.body}"</p>
                
              
                <p className={themeoptions("headings", "headingsdark")}>Votes</p>
                
           
                <p className={themeoptions("reviewdisplay", "reviewdisplaydark")} >{comment.votes}</p>
                <Button
              varient="outlined"
              onClick={() => console.log("you voted!")}
              sx={{color: themeoptions(lightthumbs, darkthumbs)}}
              type="submit"
              endIcon={<ThumbUpOffAltIcon />}
              >
                Vote
              </Button>
              <br></br>
              <Button
              onClick={() => console.log("you retracted your vote!")}
              sx={{color: themeoptions(lightthumbs, darkthumbs)}}
              type="submit"
              varient="contained"
              endIcon={<ThumbDownOffAltIcon />}
              >
                Un-Vote
              </Button>
                <br></br>
                <br></br>
                
                  
                  </div>) })}
                </div> ) }
  export default CommentsByReviewId;