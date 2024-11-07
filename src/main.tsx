import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
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
