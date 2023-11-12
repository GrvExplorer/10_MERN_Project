import axios from "axios";

const url = "http://localhost:8880/memories";

export const fetch_posts = axios.get(url)