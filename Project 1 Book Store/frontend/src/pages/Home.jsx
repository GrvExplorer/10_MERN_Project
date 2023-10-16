import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

function Home() {
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

  console.log(books);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <h1 className="my-8 text-3xl">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-4xl text-sky-800" />
        </Link>
      </div>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr className="">
                <th className="rounded-md border border-slate-600">S.No</th>
                <th className="rounded-md border border-slate-600">Title</th>
                <th className="rounded-md border border-slate-600 max-md:hidden">
                  Author
                </th>
                <th className="rounded-md border border-slate-600 max-md:hidden">
                  Publish Year
                </th>
                <th className="rounded-md border border-slate-600">
                  Operations
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, i) => (
                <tr key={book._id} className="h-8">
                  <td className="rounded-md border border-slate-700 text-center">
                    {i + 1}
                  </td>
                  <td className="rounded-md border border-slate-700 text-center">
                    {book.title}
                  </td>
                  <td className="rounded-md border border-slate-700 text-center max-md:hidden">
                    {book.author}
                  </td>
                  <td className="rounded-md border border-slate-700 text-center max-md:hidden">
                    {book.publishYear}
                  </td>
                  <td className="rounded-md border border-slate-700 text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Home;