import React, { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner, useDisclosure, useStatStyles } from "@chakra-ui/react";
import { useSnackbar } from "notistack";
import SingleCardView from "../home/SingleCardView";
import Modalx from "../home/Modalx";
import axios from "axios";

function Show({userData, setUserData}) {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3345/books/${id}`)
      .then((response) => {
        setLoading(false);
        setUserData(response.data);
        onOpen()
        console.log(response.data);
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar(error.response.data.message, { variant: "error" });
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : <>
      <div className="flex justify-center items-center h-screen"> 
      <BackButton />
      </div>
      <Modalx data={userData} isOpen={isOpen} onClose={onClose} />
      </>}
    </div>
  );
}

export default Show;
