import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { users, logOut } = useAuth();
  return (
    <div className="p-5 bg-cyan-900 text-yellow-50 grid grid-flow-col">
      <div className="w-16 ml-20">
        <img src="https://i.ibb.co/RDsXRXJ/travel-logo.png" alt="" />
      </div>

      <div className=" grid grid-flow-col justify-end gap-10 text-xl font-bold pr-20 ">
        <NavLink
          className="hover:bg-amber-900 p-2 rounded-xl"
          as={Link}
          to="/home"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          className="hover:bg-amber-900 p-2 rounded-xl"
          as={Link}
          to="/service"
        >
          Our Service
        </NavLink>

        {users.email ? (
          <>
            <button
              className="hover:bg-orange-500 p-2 rounded-xl"
              onClick={logOut}
            >
              Logout
            </button>
            <h2 className="bg-pink-600 p-1 rounded-xl">{users.displayName}</h2>
            <NavLink
              as={Link}
              to="/bookservice"
              className="hover:bg-amber-900 p-2 rounded-xl"
            >
              Book Service
            </NavLink>
            <NavLink
              as={Link}
              to="/delete"
              className="hover:bg-amber-900 p-2 rounded-xl"
            >
              Delete Book
            </NavLink>
            <NavLink className="hover:bg-amber-900 p-2 rounded-xl">
              full
            </NavLink>
          </>
        ) : (
          <NavLink
            className="hover:bg-amber-900 p-2 rounded-xl"
            as={Link}
            to="/signin"
          >
            Sign In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
