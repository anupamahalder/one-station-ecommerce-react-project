import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
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
          element: <Products></Products>
        },
        {
          path: '/about',
          element: <div>What do ypu want to know about me?</div>
        },
        {
          path: '/dashboard',
          element: <div>This is your dashboard</div>
        }
      ]
    }
  ])

// Exporting myCreatedRoute 

export default myCreatedRoute;