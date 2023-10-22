import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "../css/Card.css";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { IoEyeSharp } from "react-icons/io5";

function Card({ books }) {
  return (
    <div className="flex flex-wrap -m-2">
      {books.map((book) => (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2" key={book._id}>
          <div className="book-card">
            <div className="book-details w-full">
              <div className="flex justify-between  ">
              <h3 className="book-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                {book.title}
              </h3>
              <p className="book-year bg-black text-white border border-gray-700 rounded mr-2 text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl px-4 py-1 text-center flex items-center">
                {book.publishYear}
              </p>
              </div>
              <p className="book-author">{book.author}</p>
              <p className="book-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur obcaecati ea sunt officiis quia, iste, ut, autem odio minus officia nobis reiciendis. Nobis deleniti ducimus eligendi accusamus, velit pariatur doloremque?</p>
              <div className="flex gap-x-4 pt-4">
                <Link to={`/books/singlecard/${book._id}`}>
                  <IoEyeSharp className="text-2xl text-purple-600" />
                </Link>
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-2xl text-green-800" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-2xl text-yellow-600" />
                </Link>
                <Link to={`/books/delete/${book._id}/${book.title}`}>
                  <MdOutlineDelete className="text-2xl text-red-600" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
