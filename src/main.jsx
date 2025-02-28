import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import NotFound from './components/NotFound.jsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  // { path: "/about", element: <About /> },
  { path: "*", element: <NotFound /> }, // 404 page
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
