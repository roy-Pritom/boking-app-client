import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Hotels from "../pages/Hotels/Hotels";
import HotelPage from "../pages/HotelPage/HotelPage";
import BookPage from "../pages/HotelPage/BookPage";
import Payment from "../pages/Payment/Payment";
import DashboardLayout from "../layout/DashboardLayout";
import AllUser from "../Dashboard/AllUser/AllUser";
import AddHotel from "../Dashboard/AddHotel/AddHotel";
import BookItem from "../Dashboard/BookItem/BookItem";
import PaymentHistory from "../Dashboard/PaymentHistory/PaymentHistory";
import PropertyDetails from "../Dashboard/BookItem/PropertyDetails";
import AllProperty from "../pages/AllProperty/AllProperty";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/hotels',
            element:<Hotels></Hotels>
        },
        {
            path:'/hotel/:id',
            element:<HotelPage></HotelPage>
        },
        {
            path:'/book/:id/:price',
            element:<PrivateRoute><BookPage></BookPage></PrivateRoute>
        },
        {
            path:'/payment/:id/:price',
            element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
        {
            path:'/details/:id',
            element:<PropertyDetails></PropertyDetails>
        },
        {
            path:'/apartments/:type',
            element:<AllProperty></AllProperty>
        }

  
      ]
    },
    {
      path:'dashboard',
      element:<DashboardLayout></DashboardLayout>,
      children:[
        {
          path:'allUser',
          element:<AllUser></AllUser>
        },
        {
          path:'addHotel',
          element:<AddHotel></AddHotel>
        },
        // users panel
        {
          path:'bookedItem',
          element:<BookItem></BookItem>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },

      ]
    }
  ]);

  export default router;