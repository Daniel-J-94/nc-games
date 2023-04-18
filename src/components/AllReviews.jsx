import "../AllReviews.css"
import { useEffect, useState } from "react";
import { fetchAllReviews } from "../api";
import ReviewContent from "./ReviewContent";
import { Grid } from '@mui/material';


function AllReviews() {
    const [newReviews, setNewReviews] = useState([]);
  
    useEffect(() => {
      fetchAllReviews().then((reviews) => {
        setNewReviews(reviews);
      });
    
    }, []);
    return (
      <div className="cards">
        {/* <ul>
          <li> */}
            {newReviews.map((review) => {
              return <ReviewContent key={review.item_id} {...review} />;
            })}
          {/* </li>
        </ul> */}
      </div>
    );
  }
  export default AllReviews;