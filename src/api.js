import axios from "axios";

export const fetchAllReviews = () => {
  return axios
    .get("https://back-end-portfolio-project-dj.onrender.com/api/reviews")
    .then((response) => {
      return response.data.reviews;
    });
};
export const fetchAllCategories = () => {
  return axios
    .get("https://back-end-portfolio-project-dj.onrender.com/api/categories")
    .then((response) => {
      console.log("apicatres", response.data);
      return response.data;
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

export const VoteReviewById = (id, voteInc) => {
  const patchBody = { inc_votes: voteInc };
  return axios
    .patch(
      `https://back-end-portfolio-project-dj.onrender.com/api/reviews/${id}`,
      patchBody
    )
    .then((response) => {
      return response.data;
    });
};
export const PostCommentOnReview = (id, username, newCommentData) => {
  const postBody = { username: username, body: newCommentData };
  return axios
    .post(
      `https://back-end-portfolio-project-dj.onrender.com/api/reviews/${id}/comments`,
      postBody
    )
    .then((response) => {
      return response.data;
    });
};

export const DeleteCommentOnReview = (comment_id) => {
  return axios
    .delete(
      `https://back-end-portfolio-project-dj.onrender.com/api/comments/${comment_id}`
    )
    .then((response) => {});
};
