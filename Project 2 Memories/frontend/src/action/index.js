import * as api from "../api/Posts_api";


export const getPosts = () => (dispatch) => {
  api.fetch_posts
    .then((res) => {
      dispatch({ type: "Fetch_Posts", payload: res.data });
    })
    .catch((err) => console.log(err));
};
