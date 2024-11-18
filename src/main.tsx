import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import "./index.css";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import {Blog} from "./pages/Blog.tsx";
import {BlogPost} from "./pages/BlogPost.tsx";
import {Contact} from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />,
    loader: async function() {
      return await (await fetch(`${import.meta.env.VITE_API_HOST}/team`)).json();
    }
  },
  {
    path: "/blog",
    element: <Blog />,
    loader: async function() {
      return await (await fetch(`${import.meta.env.VITE_API_HOST}/blog`)).json();
    }
  },
  {
    path: "/blogs",
    loader: function() {
      return redirect("/blog")
    }
  },
  {
    path: "/blogs/:id",
    element: <BlogPost />,
    loader: async function() {
      return await (await fetch(`${import.meta.env.VITE_API_HOST}/blog`)).json();
    }
  },
  {
    path: "/contact",
    element: <Contact />
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
