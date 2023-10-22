import React from "react";
import tigergif from "../assets/tigerbg.gif";

function Spinner() {
  return (
      <div className="flex justify-center items-center relative h-[100%] w-full pb-[56%]">
        <img
          src={tigergif}
          alt=""
          className="absolute bottom-[50%] "
        />
      </div>
  );
}

export default Spinner;
