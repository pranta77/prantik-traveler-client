import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Booking() {
  const { bookId } = useParams();

  const [book, setBook] = useState({});
  // console.log(book);
  useEffect(() => {
    fetch(`http://localhost:5000/users/${bookId}`)
      .then((res) => res.json())
      .then((data) => setBook(data));
  }, []);
  return (
    <div className="bg-red-200 rounded-lg px-10 py-10">
      <h1 className="text-3xl font-medium">Country Details {book.name}</h1>
      <img className="rounded-xl" width={"100%"} src={book.img} alt="" />

      <h3 className="text-justify">{book.description}</h3>
      <h2 className="text-4xl">{book.prcie}</h2>

      <h2>This is An Booking: {bookId}</h2>
    </div>
  );
}
