import "../AllReviews.css"
import { useEffect, useState } from "react";
import { fetchAllReviews } from "../api";
import ReviewContent from "./ReviewContent";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import CategorySelector from "./CategorySelector";
import { fetchAllCategories } from "../api";




function AllReviews({user, isLightTheme}) {
  const [newReviews, setNewReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams()
  const [newCatArray, setNewCatArray] = useState([])

  function filterReviewsByCategory(reviewsToFilter) {
    if (category && category !== null && category.length > 0) {
      return reviewsToFilter.filter(it => it.category === category)
    } else {
      return reviewsToFilter
    }
  }

    useEffect(() => {
      setLoading(true)
      fetchAllReviews().then((reviews) => {
        const filteredReviews = filterReviewsByCategory(reviews)
        setNewReviews(filteredReviews);
        setLoading(false)
      });
      
    }, []);

  

    function themeoptions(lightoption, darkoption) {
      console.log("theme", isLightTheme)
      if (isLightTheme) {
        return lightoption
      } else {return darkoption} 
    }
useEffect(() => {
  fetchAllCategories().then((catArray) => {
    setNewCatArray(catArray)
  })
}, [])

    return (
      <div className="Backs">
      <div className={themeoptions("categorySelector", "categorySelectordark")}>
        {newCatArray.length > 0 && 
        <CategorySelector newCatArray={newCatArray}/>}
      </div>
      
      <div className={themeoptions("cards", "cardsDark")}>
      {loading && 
      <Stack spacing={1}>    
      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={300} height={300} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>}
            {!loading && newReviews.map((review) => {
              return <ReviewContent key={review.item_id} isLightTheme={isLightTheme} review={review} />;
            })}
      </div>
      </div>
      
    );
  }
  export default AllReviews;