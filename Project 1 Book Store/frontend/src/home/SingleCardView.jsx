import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import bgcard from "../assets/bgcard.png";
import Spinner from "../components/Spinner";

function SingleCardView() {
  const [book, setBook] = useState({
    title: "",
    author: "",
    publishYear: "",
    description: "",
  });

  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3345/books/${id}`)
      .then((res) => {
        setLoading(false);
        setBook(res.data);
        console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading ? (
            <div className=" mt-[20%] xl:mt-[0%]">
            <Spinner />
        </div>
      ) : (
        <>
          <BackButton />
          <div className="fixed flex h-full w-full items-center justify-center bg-yellow-50 bg-opacity-90">
            <div className="relative max-w-md rounded-lg bg-gray-300 bg-opacity-90 p-4 shadow-lg">
              <div className="z-20 flex justify-between">
                <h3 className="book-title text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                  {book.title}
                </h3>
                <p className="book-year sm:text-md mr-2 flex items-center rounded border border-gray-700 bg-black px-4 py-1 text-center text-sm text-white md:text-lg lg:text-xl xl:text-2xl">
                  {book.publishYear}
                </p>
              </div>
              <p className="mb-4 text-lg text-gray-700">{book.author}</p>
              <p className="text-lg text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                soluta quisquam? Velit consequuntur, omnis architecto,
                asperiores consequatur nesciunt accusantium harum, sed aliquam
                repudiandae atque repellendus. Expedita ab animi amet eligendi!
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SingleCardView;
