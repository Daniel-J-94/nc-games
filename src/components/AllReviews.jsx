import "../AllReviews.css"
import { useEffect, useState } from "react";
import { fetchAllReviews } from "../api";
import ReviewContent from "./ReviewContent";
import { Skeleton, Stack } from "@mui/material";


function AllReviews({user}) {
    const [newReviews, setNewReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    console.log("user:", user)
  
    useEffect(() => {
      setLoading(true)
      fetchAllReviews().then((reviews) => {
        setNewReviews(reviews);
        setLoading(false)
      });
      
    }, []);
    return (
      
      <div className="cards">
      {loading && 
      <Stack spacing={1}>    
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={300} height={300} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>}
            {!loading && newReviews.map((review) => {
              return <ReviewContent key={review.item_id} {...review} />;
            })}
      </div>
      
    );
  }
  export default AllReviews;