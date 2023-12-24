import { createBrowserRouter } from "react-router-dom";

// Components
import PublicLayout from "./components/PublicLayout";
import PrivateLayout from "./components/PrivateLayout"; 

// Views
import Login from "./views/authentication/Login";
import Home from "./views/authenticated/Home";

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
        path: "/login",
        element: <Login />,
      }
    ],
  }
])

export default router;