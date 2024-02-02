import React from "react";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  console.log(service);
  const { _id, name, prcie, img, description } = service;

  return (
    <div>
      <div className="bg-red-200 rounded-lg px-10 py-10">
        <img className="rounded" width={"100%"} src={img} alt="" />
        <h2 className="text-3xl font-medium">{name}</h2>
        <p className="text-justify">{description}</p>
        <h2 className="text-4xl">{prcie}</h2>
        <Link to={`/booking/${_id}`}>
          <button className="bg-orange-500 p-2 rounded-lg"> Book {name}</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
