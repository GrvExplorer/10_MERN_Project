import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import UserInput from "../components/UserInput";

function Create({ userData, setUserData }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useReducer;


  useEffect(() => {
    setUserData({
      title: "",
      author: "",
      publishYear: "",
    });
  }, []);

  const handleCreate = (unsetUserData) => {
    axios
      .post("http://localhost:3345/books", unsetUserData)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar(`Book Added to the list "${res.data.title}"`, {
          variant: "success",
        });
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err.response.data.message, { variant: "error" });
        console.log(err.response.data.message);
      });
  };

  return (
    <>
      <div className="flex flex-col items-center bg-gray-100">
        <BackButton />
        <div className="flex h-screen  flex-col items-center justify-center  ">
          <div className="rounded-md shadow-md ">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                handleCreate({
                  title: e.target.title.value,
                  author: e.target.author.value,
                  publishYear: e.target.publishYear.value,
                });
              }}
              action="/"
              className=" w-full max-w-md rounded-lg p-4 shadow-md"
            >
              <h2 className="mb-4 text-2xl font-semibold">Create Book</h2>
              {loading ? (
                <Spinner />
              ) : (
                <UserInput userData={userData} setUserData={setUserData} />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;
