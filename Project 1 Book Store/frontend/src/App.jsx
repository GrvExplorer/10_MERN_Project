import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Show from "./pages/Show";
import { useEffect, useState } from "react";
import SingleCardView from "./home/SingleCardView";

function App() {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const [isView, setView] = useState(true);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home isView={isView} setView={setView} />} />
        <Route
          path="/books/create"
          element={<Create userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="/books/edit/:id"
          element={<Edit userData={userData} setUserData={setUserData} />}
        />
        <Route path="/books/show/:id" element={<Show />} />
        <Route path="/books/delete/:id/:title" element={<Delete />} />
        <Route path="/books/singlecard/:id" element={<SingleCardView />} />
      </Routes>
    </>
  );
}

export default App;
