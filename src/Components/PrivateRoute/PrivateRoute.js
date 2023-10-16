import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { users } = useAuth();

  if (!users.email) {
    const currentLocation = window.location.pathname + window.location.search;

    return <Navigate to="/signin" replace state={{ from: currentLocation }} />;
  }

  return children;
};

export default PrivateRoute;
