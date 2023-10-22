import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";

import Table from "../home/Table";
import Card from "../home/Card";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home({isView, setView}) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3345/books")
      .then((res) => {
        setLoading(false);
        setBooks(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-3xl">Books List</h1>
        <div className="flex gap-3 ">
          <p
            onClick={() => {
              setView(true);
            }}
            className={`cursor-pointer rounded-md border px-4 py-1  ${isView ? 'bg-black text-white hover:bg-white hover:text-black' : ''}`}
          >
            Table View
          </p>
          <p
            onClick={() => {
              setView(false);
            }}
            className={`cursor-pointer rounded-md border px-4 py-1  ${!isView ? 'bg-black text-white hover:bg-white hover:text-black' : ''}`}
          >
            Card View
          </p>
        </div>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-800" />
        </Link>
      </div>
      <div>{loading ? <Spinner /> : isView ? <Table books={books} /> : <Card  books={books} />}</div>
    </div>
  );
}

export default Home;
