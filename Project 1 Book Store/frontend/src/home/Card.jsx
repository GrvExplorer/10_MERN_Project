import React, { useState } from "react";
import SingleCardView from "./SingleCardView";

function Card({ books }) {
  
  return (
    <div className="flex flex-wrap -m-2">
      {books.map((book, i) => (
        <div key={i} >
          <SingleCardView book={book} />
        </div>
      ))}
    </div>
  );
}

export default Card;
