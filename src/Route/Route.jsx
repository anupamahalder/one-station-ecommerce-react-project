import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Product from "../Pages/Product/Product";

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
          element: <div>What do ypu want to know about me?</div>
        },
        {
            // We want to create children under dashboard for that we can create dashboard layout 
          path: '/dashboard',
          element: <div>This is your dashboard</div>
        }
      ]
    }
  ])

// Exporting myCreatedRoute 

export default myCreatedRoute;