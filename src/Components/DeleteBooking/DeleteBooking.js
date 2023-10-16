import React, { useEffect, useState } from "react";

export default function () {
  const [deleted, setDeleted] = useState([]);
  console.log(deleted);
  useEffect(() => {
    fetch("https://prantik-traveller-server.vercel.app/users")
      .then((res) => res.json())
      .then((data) => setDeleted(data));
  }, []);
  const handleDelete = (id) => {
    const url = `https://prantik-traveller-server.vercel.app/users/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("Deleted Your Booking");
          const remaining = deleted.filter((delet) => delet._id !== id);
          setDeleted(remaining);
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl font-extrabold m-4">Delete Your Booking</h2>
      {deleted.map((deleting) => (
        <div
          className="bg-red-200 rounded-lg px-10 py-10 grid grid-cols-2"
          key={deleting._id}
        >
          <h1 className="text-3xl font-medium">
            Country Details {deleting.name}
          </h1>
          <img
            className="rounded-xl"
            width={"100%"}
            src={deleting.img}
            alt=""
          />
          <h3 className="text-justify">{deleting.description}</h3>
          <h2 className="text-4xl">{deleting.prcie}</h2>
          <button
            onClick={() => handleDelete(deleting._id)}
            className="bg-red-700 p-4"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
