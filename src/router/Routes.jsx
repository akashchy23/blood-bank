import { createBrowserRouter } from "react-router";
import Rootlayout from "../rootlayout/Rootlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import Maindashboard from "../Pages/Dashboard/Maindashboard";
import AddRequest from "../Pages/Dashboard/AddRequest";
import Allusers from "../Pages/Dashboard/Allusers";
import PrivateRoutes from "./PrivateRoutes";
import MyRequest from "../Pages/Dashboard/MyRequest";

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
   element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
   children:[
    {
      path:'maindashboard',
      element:<Maindashboard></Maindashboard>
    },
    {
      path:'add-request',
      element:<AddRequest></AddRequest>
    },
    {
      path:'all-users',
      element: <Allusers></Allusers>
    },
     {
      path:'my-request',
      element:<MyRequest></MyRequest>
    }
   ]
  }
]);

export default router;