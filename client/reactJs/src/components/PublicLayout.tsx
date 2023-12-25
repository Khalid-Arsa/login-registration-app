import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
  const token = false;

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <React.Fragment>
      <Outlet />
    </React.Fragment>
  );
};

export default PublicLayout;
