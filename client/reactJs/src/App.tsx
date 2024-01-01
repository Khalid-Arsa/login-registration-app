import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { AuthContextProvider } from "./lib/context/AuthContext";
import { UserContextProvider } from "./lib/context/UserContext";

const App: React.FC = () => {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  );
};

export default App;
