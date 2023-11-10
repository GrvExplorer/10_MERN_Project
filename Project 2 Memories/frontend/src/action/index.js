import { fetch_posts } from "../api/Posts_api"

export const getPosts = () => async (dispatch) => {
  try {
    const [ data ] = await fetch_posts
    dispatch({type: 'Fetch_Posts', payload: data})
  } catch (err) {
    console.log(err);
  }
}