import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Delete from "./pages/Delete";
import Show from "./pages/Show";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<Create />} />
        <Route path="/books/edit/:id" element={<Edit />} />
        <Route path="/books/show/:id" element={<Show />} />
        <Route path="/books/delete/:id" element={<Delete />} />
      </Routes>
    </>
  );
}

export default App;
