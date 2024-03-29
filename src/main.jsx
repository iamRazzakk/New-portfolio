import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Resume from './pages/Resume/Resume.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import ProjectDetails from './pages/Portfolio/ProjectDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/Projects",
        element: < Portfolio />,
      },
      {
        path: '/project-details/:id',
        element: <ProjectDetails></ProjectDetails>
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
