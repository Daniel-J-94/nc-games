import axios from "axios";

export const fetchAllReviews = () => {
  return axios
    .get("https://back-end-portfolio-project-dj.onrender.com/api/reviews")
    .then((response) => {
      console.log(response);
      return response.data.reviews;
    });
};

export const fetchReviewById = (review_id) => {
  return axios
    .get(
      `https://back-end-portfolio-project-dj.onrender.com/api/reviews/${review_id}`
    )
    .then((response) => {
      console.log("inapi", response);
      return response.data;
    });
};
