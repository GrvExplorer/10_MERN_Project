import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import "../css/Card.css";
import Modalx from "./Modalx";

const SingleCardView = ({ book }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isOverlay, setOverlay] = useState(false);

  return (
    <div>
      <div className="book-card">
        <div className="book-details w-full">
          <div className="flex justify-between  ">
            <h3 className="book-title text-2xl ">{book.title}</h3>
            <p className="book-year sm:text-md mr-2 flex items-center rounded border border-gray-700 bg-black px-4 py-1 text-center text-sm text-white md:text-lg  xl:text-xl">
              {book.publishYear}
            </p>
          </div>
          <p className="book-author">{book.author}</p>
          <p className="book-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur obcaecati ea sunt officiis quia, iste, ut, autem odio
            minus officia nobis reiciendis. Nobis deleniti ducimus eligendi
            accusamus, velit pariatur doloremque?
          </p>
          <div className="flex gap-x-4 pt-4">
            <div
              className="cursor-pointer pl-2 text-center"
              onClick={() => {
                setOverlay(true);
                onOpen();
              }}
            >
              {isOverlay ? (
                <Modalx
                  data={{
                    title: book.title,
                    author: book.author,
                    publishYear: book.publishYear,
                    description: "",
                  }}
                  isOpen={isOpen}
                  onClose={onClose}
                />
              ) : (
                ""
              )}
              <IoEyeSharp className="text-2xl text-purple-600" />
            </div>
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
  );
};

export default SingleCardView;
