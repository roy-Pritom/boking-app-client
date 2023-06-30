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
            element:<BookPage></BookPage>
        },
        {
            path:'/payment/:id/:price',
            element:<Payment></Payment>
        },
  
      ]
    },
  ]);

  export default router;