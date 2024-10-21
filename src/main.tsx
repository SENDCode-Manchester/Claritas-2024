import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* https://reactrouter.com/en/main/routers/create-browser-router */}
    <RouterProvider router={router} />
  </StrictMode>,
);
