import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";
import EditProfile from "../Pages/EditProfile/EditProfile";
import Contact from "../Pages/Contact/Contact";

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: '/products',
          element: <Products></Products>,
        //   loader will have a function and we can get data from Products.jsx
          loader: () => fetch(`https://dummyjson.com/products`)
        },
        {
            // Declare a product route 
            path: '/products/:id',
            element: <Product></Product>,
            // Loading a particular product by its id dynamically
            loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
            // We want to create children under dashboard for that we can create dashboard layout 
          path: '/dashboard',
        //   We want whatever we do in dashboard will be fixed for that we have to use children
          element: <DashboardLayout></DashboardLayout>,
        //   children is outlet 
          children: [
            {
                // first path will be itself dashboard 
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/profile',
                element: <Profile></Profile>
            },
            {
                path: '/dashboard/editprofile',
                element: <EditProfile></EditProfile>
            }
          ]
        }
      ]
    }
  ])

// Exporting myCreatedRoute 

export default myCreatedRoute;