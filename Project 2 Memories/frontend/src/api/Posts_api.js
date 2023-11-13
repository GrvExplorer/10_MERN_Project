import axios from "axios";

export const url = "http://localhost:8880/memories";

export const fetch_posts = axios.get(url)

// export const create_post = axios.post(url, ) 