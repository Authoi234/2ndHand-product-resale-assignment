import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../Pages/Home/Home";
import CategoryItems from './../Shared/Category/CategoryItems';
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import MyOrders from "../Pages/Buyer/MyOrders/MyOrders";
import DashboardLayout from './../layout/DashboardLayout/DashboardLayout';
import BuyerRoute from "./BuyerRoute";
import AddProduct from "../Pages/Seller/AddProduct/AddProduct";
import SellerRoute from './SellerRoute';
import MyProducts from "../Pages/Seller/MyProducts/MyProducts";
import { useEffect } from "react";
import MyBuyers from "../Pages/Seller/MyBuyers/MyBuyers";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><CategoryItems></CategoryItems></PrivateRoute>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/category/${params.id}`);
                }
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/myorders',
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/myBuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
            }
        ]
    }
]);

export default routes;