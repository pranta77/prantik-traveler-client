import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div>
      <Link className="text-2xl text-red-500" to={"/home"}>
        ClICK HERE
      </Link>

      <img
        className="max-h-screen w-full"
        src="https://i.ibb.co/VLrtqxb/404.jpg"
        alt=""
      />
    </div>
  );
};

export default Notfound;
