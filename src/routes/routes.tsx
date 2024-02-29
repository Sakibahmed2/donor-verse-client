import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateSupply from "../pages/dashboard/CreateSupply";
import Supplies from "../pages/dashboard/Supplies";
import Register from "../pages/register/Register";
import AllSupplies from "../pages/Home/AllSupplies";
import Dashboard from "../pages/dashboard/Dashboard";
import CreateTestimonial from "../pages/dashboard/CreateTestimonial";
import VolunteerForm from "../pages/volunteer/VolunteerForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/supplies",
        element: <AllSupplies />,
      },
      {
        path: "/volunteer",
        element: <VolunteerForm />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
