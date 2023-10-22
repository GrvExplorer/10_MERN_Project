import axios from "axios";
import UserInput from "../components/UserInput";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function Edit({ userData, setUserData }) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3345/books/${id}`)
      .then((response) => {
        setLoading(false);
        setUserData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error.response.data.message, { variant: "error" });
        console.log(error.response.data.message);
      });
  }, []);

  const handlePut = (setUpUserData) => {
    if (!userData) {
      return;
    }
    setLoading(true);
    axios
      .put(`http://localhost:3345/books/${id}`, setUpUserData)
      .then((response) => {
        setLoading(false);
        enqueueSnackbar(response.data.message, { variant: "success" });
        console.log(response.data.message);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error.response.data.message, { variant: "error" });
        console.log(error.response.data.message);
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <BackButton />

      {loading ? (
        <div className="flex-1 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex-1 flex justify-center items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handlePut({
                title: e.target.title.value,
                author: e.target.author.value,
                publishYear: e.target.publishYear.value,
              });
            }}
            action="/"
            className=" w-full max-w-md p-4 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Edit Book</h2>
            <UserInput userData={userData} setUserData={setUserData} />
          
            <div className="mt-4 flex justify-end">
              
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default Edit;
