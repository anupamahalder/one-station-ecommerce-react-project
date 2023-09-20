import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

// const myCreatedRoute = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>You are now in home route</div>
//   },
//   {
//     path: '/products',
//     element: <div>You want to see products</div>
//   },
//   {
//     path: '/about',
//     element: <div>What do ypu want to know about me?</div>
//   },
//   {
//     path: '/dashboard',
//     element: <div>This is your dashboard</div>
//   }
// ])

// Creating nested router by adding another property named children
const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <section>
      <div>This is a fixed item</div>
      <Outlet></Outlet>
    </section>,
    //children will also have array of objects like createBrowserRouter does
    //children is known as outlet
    children: [
      {
        path: "/",
        element: <div>This is home route</div>
      },
      {
        path: '/products',
        element: <div>You want to see products</div>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
