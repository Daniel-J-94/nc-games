import "../SingleReviewById.css"
import { useEffect, useState } from "react";
import { fetchReviewById } from "../api";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentsByReviewId from "./CommentsByReviewId";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
    })
    }));


function SingleReviewById({user, owner}) {
    const [newReviewById, setNewReviewById] = useState(null);
    const [loading, setLoading] = useState(false);
    const { review_id } = useParams();
    useEffect(() => {
      setLoading(true)
      fetchReviewById(review_id).then((review) => {
        setNewReviewById(review);
        setLoading(false)
      });},[]);{
        const [expanded, setExpanded] = React.useState(false);
        const handleExpandClick = () => {
            setExpanded(!expanded);
          };        
          return (             
              <div className="reviewdisplay">
      {loading && 
      <Stack spacing={1}>    
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={300} height={300} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>}
            {!loading && newReviewById !== null &&
            <div> <>
            <Card className="RevCard" style={{backgroundColor: "#CEA16F"}} sx={{ maxWidth: 345 }} key={newReviewById.title}>
            <CardHeader
              title={newReviewById.title}
            />
            <CardMedia
              component="img"
              height="194"
              image={newReviewById.review_img_url}
              alt="revimg"
            />
            <CardContent>
                <Typography paragraph>
                <Link to={`/`}>Back to all reviews</Link>
                </Typography>
              <Typography variant="body2">
               {newReviewById.review_body}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                 <Typography variant="body2">
               comments:
              </Typography>
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>              
                <CommentsByReviewId />     
              </CardContent>
            </Collapse>
          </Card></>
            </div>
 } </div>
    );
  }}
  export default SingleReviewById;