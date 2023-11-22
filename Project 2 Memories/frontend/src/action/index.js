import axios from "axios";
import * as api from "../api/Posts_api";

export const getPosts =  () => (dispatch) => {
  api.fetch_posts
    .then((res) => {
      dispatch({ type: "Fetch_Posts", payload: res.data });
      console.log('getPosts '+ res.data);
    })
    .catch((err) => console.log(err));
};

export const createPost = (formData) => {
  axios
    .post("http://localhost:8880/memories", formData)
    .then((res) => {
      console.log('createPost '+ res.data);
    })
    .catch((err) => console.log(err));
};
