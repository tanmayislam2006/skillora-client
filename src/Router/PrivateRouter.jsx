import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import SkilloraContext from "../Context/SkilloraContext";

const PrivateRouter = ({ children }) => {
  const { firebaseUser, loading } = use(SkilloraContext);
  const location = useLocation();
  if (loading) {
    return <h1 className="text-center">Data is Loading</h1>;
  }
  if (!firebaseUser) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRouter;
