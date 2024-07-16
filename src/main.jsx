import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import axios from 'axios'


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Root from "./root.jsx"
import HomePage from "./homepage.jsx"

axios.defaults.baseURL = 'http://127.0.0.1:3000';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "home",
        element: <HomePage />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
