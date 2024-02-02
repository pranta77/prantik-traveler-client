import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useAuth();

  if (loading) {
    return (
      <button type="button" className="bg-indigo-500 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing...
      </button>
    );
  }
  if (!users.email) {
    return <Navigate to="/signin"></Navigate>;
  }

  return children;
};

export default PrivateRoute;
