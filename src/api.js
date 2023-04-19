import axios from "axios";

export const fetchAllReviews = () => {
  return axios
    .get("https://back-end-portfolio-project-dj.onrender.com/api/reviews")
    .then((response) => {
      return response.data.reviews;
    });
};

export const fetchReviewById = (review_id) => {
  return axios
    .get(
      `https://back-end-portfolio-project-dj.onrender.com/api/reviews/${review_id}`
    )
    .then((response) => {
      return response.data;
    });
};

export const fetchCommentsByReviewId = (review_id) => {
  return axios
    .get(
      `https://back-end-portfolio-project-dj.onrender.com/api/reviews/${review_id}/comments`
    )
    .then((response) => {
      return response.data;
    });
};
