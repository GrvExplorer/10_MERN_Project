export default (posts = [], action) => {
  switch (action.type) {
    case 'Fetch_Posts':
      return action.payload;  
    default:
      return posts
  }
}

