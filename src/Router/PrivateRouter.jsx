import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import SkilloraContext from "../Context/SkilloraContext";
import Spiner from "../Components/Loader/Spiner";

const PrivateRouter = ({ children }) => {
  const { firebaseUser, loading } = use(SkilloraContext);
  const location = useLocation();
  if (loading) {
    return <Spiner/>;
  }
  if (!firebaseUser) {
    return <Navigate to={"/login"} state={location.pathname} />;
  }
  return children;
};

export default PrivateRouter;
