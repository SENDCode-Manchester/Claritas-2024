import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import {Home} from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*
      https://reactrouter.com/en/main/routers/create-browser-router
      todo: error boundary for 404 pages
      */}
    <RouterProvider router={router} />
  </StrictMode>,
);
