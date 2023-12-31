import { createBrowserRouter } from "react-router-dom";

// Components
import PublicLayout from "./components/PublicLayout";
import PrivateLayout from "./components/PrivateLayout"; 

// Views
import Home from "./views/authenticated/Home";
import Signin from "./views/authentication/signin/Signin";
import Signup from "./views/authentication/signup/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      }
    ],
  }
])

export default router;