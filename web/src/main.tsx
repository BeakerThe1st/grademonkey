import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {App} from "./components";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Assessments, Configuration, Dashboard, Error, Subjects, WhatIf} from "./routes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/subjects",
                element: <Subjects />
            },
            {
                path: "/assessments",
                element: <Assessments />
            },
            {
                path: "/what-if",
                element: <WhatIf />
            },
            {
                path: "/configuration",
                element: <Configuration />
            }
        ]
    },

])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
