import { createBrowserRouter } from "react-router";
import Rootlayout from "../rootlayout/Rootlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Maindashboard from "../Pages/Dashboard/Maindashboard";
import AddProduct from "../Pages/Dashboard/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Rootlayout></Rootlayout>,
    children: [
      {
        path:'/',
        Component: Home
      },
      {
        path:'/login',
        Component: Login
      },
      {
        path:'/register',
        Component:Register
      }
    ]
  },
  {
    path:'/dashboard',
   element:<DashboardLayout></DashboardLayout>,
   children:[
    {
      path:'maindashboard',
      element:<Maindashboard></Maindashboard>
    },
    {
      path:'add-product',
      element:<AddProduct></AddProduct>
    }
   ]
  }
]);

export default router;