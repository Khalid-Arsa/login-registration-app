import { createBrowserRouter } from "react-router-dom";

// Components
import PublicLayout from "./components/PublicLayout";
import PrivateLayout from "./components/PrivateLayout"; 

// Views
import Home from "./views/authenticated/Home";
import Signin from "./views/authentication/signin/Signin";

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
      }
    ],
  }
])

export default router;