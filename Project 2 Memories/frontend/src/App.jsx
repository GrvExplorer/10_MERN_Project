import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPosts } from "./action";
import Posts from "./components/Posts/Posts";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <div>
    <Posts/>
  </div>;
}

export default App;
