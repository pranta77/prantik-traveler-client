import React from "react";
import useAuth from "../../Hooks/useAuth";

const SignIn = () => {
  const { signInGoogle } = useAuth();

  return (
    <div>
      <div className="relative">
        <img src="https://i.ibb.co/CvjSYk3/login.webp" alt="" />
      </div>
      <div className="absolute  text-slate-100 top-40 mx-80 font-bold">
        <h2 className="text-5xl">Hlw User Plz SignIn </h2>
        <button
          onClick={signInGoogle}
          className="bg-yellow-600 p-3 rounded-xl mt-10 mx-60"
        >
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
