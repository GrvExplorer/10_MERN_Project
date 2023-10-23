import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SingleCardView from "./home/SingleCardView";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Show from "./pages/Show";

function App() {
  const [userData, setUserData] = useState({
    title: "",
    author: "",
    publishYear: "",
    description: "", 
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
        <Route path="/books/show/:id" element={<Show userData={userData} setUserData={setUserData} />} />
        <Route path="/books/delete/:id/:title" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
