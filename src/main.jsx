import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/home'
import "./global.scss";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

// @ts-ignore
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
