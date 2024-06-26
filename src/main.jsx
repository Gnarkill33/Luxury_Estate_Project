import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from'react-router-dom'
import App from './App.jsx'
import Villas from './pages/Villas/Villas.jsx'
import './index.css'
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App /> ,
    // errorElement: <NotFoundPage />,
  },
  { 
    path: '/villas', 
    element: <Villas />, 
    // errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
