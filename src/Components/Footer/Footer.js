import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" grid grid-cols-3  bg-cyan-900 text-white p-20 ">
      <div>
        <h1 className="text-4xl font-bold">Prantik Traveler</h1>
        <h4 className="text-xl font-semibold">
          “Jobs fill your pocket, but adventures fill your soul.”
        </h4>
      </div>
      <div className="grid grid-rows-4 font-semibold  gap-2">
        <h1 className="text-4xl font-bold ">Fast Respond</h1>
        <Link>About Us</Link>
        <Link>Contact Us</Link>
        <Link>Privacy Policy</Link>
        <Link>Our Destiny </Link>
      </div>
      <div>
        <h2 className="text-4xl font-bold ">Follow Us</h2>
        <i className="fab fa-facebook fa-2x me-2"></i>
        <i className="fab fa-instagram fa-2x me-2"></i>
        <i className="fa-brands fa-github fa-2x me-2"></i>{" "}
      </div>
    </div>
  );
};

export default Footer;
