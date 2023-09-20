import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myCreatedRoute = createBrowserRouter([
  {
    path: '/',
    element: <div>You are now in home route</div>
  },
  {
    path: '/products',
    element: <div>You want to see products</div>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
