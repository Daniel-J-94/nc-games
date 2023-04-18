import "../ReviewContent.css";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
const { expand, ...other } = props;
return <IconButton {...other} />;
})(({ theme, expand }) => ({
transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
marginLeft: "auto",
transition: theme.transitions.create("transform", {
duration: theme.transitions.duration.shortest
})
}));
function ReviewContent({
  title,
  review_img_url,
  review_body,
  category,
  created_at,
  votes,
  designer,
  owner
}) {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

const getOwnerInitials = owner[0]
console.log(getOwnerInitials)


  return (
    <div className="singlecard" xs={3}>
    {/* <> */}
    <Card style={{backgroundColor: "#CEA16F"}} sx={{ maxWidth: 345 }} key={title}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#FAF8FA", color: "#24222C" }} aria-label="review">
            {getOwnerInitials}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={review_img_url}
        alt="revimg"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Reviewed: {created_at}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            click here to read this review!
          </Typography>
          <Typography paragraph>
            Game Designer: {designer}
          </Typography>
          <Typography>
            Game Category: {category}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    {/* </> */}
    </div>
  );

    // <div>
    //   <ul>
    //     <li key="1">
    //       <h3 className="reviewtitle">{title}</h3>
    //     </li>
    //     <li key="2">
    //       <img src={review_img_url} alt="review-image"></img>
    //     </li>
    //   </ul>
    //   <ul className="revdate">
    //     <li key="5">{created_at}</li>
    //   </ul>
    // </div>
//   );
}
export default ReviewContent;
