import axios from "axios";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import "../css/Delete.css"; 

function Delete() {
  const { id, title } = useParams();
  const [loading, setLoading] = useState(false);

  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3345/books/${id}`)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar(res.data.message, { variant: "success" });
        navigate("/");
        console.log(res.data.message);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar(err.data.message, { variant: "error" });
        console.log(err);
      });
  };

  const onCancel = () => {
    enqueueSnackbar("Delete Canceled", { variant: "error" });
    navigate("/");
  };

  return (
    <>
      <BackButton />
      <div className={`fixed flex h-screen w-full items-center justify-center`}>
        {loading ? (
          <Spinner />
        ) : (
          <div className="delete-container rounded bg-white p-4 shadow-lg">
            <p className="mb-4 text-center">{`Are you sure you want to delete "${title}"?`}</p>
            <div className="text-center">
              <button
                onClick={handleDelete}
                className="delete-button mr-2 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Confirm
              </button>
              <button
                onClick={onCancel}
                className="cancel-button delete-button rounded bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Delete;
