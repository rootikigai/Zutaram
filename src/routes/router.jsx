import { createBrowserRouter } from "react-router";
import Register from "../auth/register/register.jsx";
import Login from "../auth/login/login.jsx";
import AllProducts from "../components/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  }
]);

export default router;