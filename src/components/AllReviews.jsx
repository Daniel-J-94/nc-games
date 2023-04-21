import "../AllReviews.css"
import { useEffect, useState } from "react";
import { fetchAllReviews } from "../api";
import ReviewContent from "./ReviewContent";
import { Skeleton, Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import CategorySelector from "./CategorySelector";
import { fetchAllCategories } from "../api";
import SortSelector from "./SortSelector";




function AllReviews({user, isLightTheme}) {
  const [newReviews, setNewReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams()
  const [newCatArray, setNewCatArray] = useState([])
  const [newSortOrder, setNewSortOrder] = useState(null)
  const [isASC, setIsASC] = useState(false)

  function filterReviewsByCategory(reviewsToFilter) {
    if (category && category !== null && category.length > 0) {
      return reviewsToFilter.filter(it => it.category === category)
    } else {
      return reviewsToFilter
    }
  }

function handleSortChange(event) {
setNewSortOrder(event.target.value)
}

function handleAcsChange(event) {
  setIsASC(event.target.value)
  }

function sortReviews(filteredReviews, isSortBy, isSortByOrderASC) {
  if (isSortBy === "isSortByDate") {
    if(isSortByOrderASC){
    return filteredReviews.sort((a,b)=>b.created_at<a.created_at ? 1 : -1) }
    else {
      return filteredReviews.sort((a,b)=>b.created_at>a.created_at ? 1 : -1)
    }
  } 
  if (isSortBy === "isSortByCommentCount") {
    if(isSortByOrderASC){
      return filteredReviews.sort((a,b)=>b.comment_count<a.comment_count ? 1 : -1) }
      else {
        return filteredReviews.sort((a,b)=>b.comment_count>a.comment_count ? 1 : -1)
      }
  } 
  if (isSortBy === "isSortByVotes") {
    if(isSortByOrderASC){
      return filteredReviews.sort((a,b)=>b.votes<a.votes ? 1 : -1) }
      else {
        return filteredReviews.sort((a,b)=>b.votes>a.votes ? 1 : -1)
      } 
  } 
  
  return filteredReviews
}



    useEffect(() => {
      setLoading(true)
      fetchAllReviews().then((reviews) => {
        const filteredReviews = filterReviewsByCategory(reviews)
        
        const sortedReviews = sortReviews(filteredReviews, newSortOrder, isASC)
        setNewReviews(sortedReviews);
        setLoading(false)
      });
      
    }, [newSortOrder, isASC]);

  

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
        <div className={themeoptions("categorySelector", "categorySelectordark")}>
          <SortSelector handleSortChange={handleSortChange} handleAcsChange={handleAcsChange} />
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