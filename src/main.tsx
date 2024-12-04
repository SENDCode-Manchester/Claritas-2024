import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import "./index.css";
import {Home} from "./pages/Home.tsx";
import {About} from "./pages/About.tsx";
import {Blog} from "./pages/Blog.tsx";
import {BlogPost} from "./pages/BlogPost.tsx";
import {Contact} from "./pages/Contact.tsx";
import {ErrorPage} from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "about",
        element: <About />,
        loader: async function() {
          return await (await fetch("/data/team.json")).json();
        }
      },
      {
        path: "blog",
        element: <Blog />,
        loader: async function() {
          return await (await fetch("/data/blog.json")).json();
        }
      },
      {
        path: "blogs",
        loader: function() {
          return redirect("/blog")
        }
      },
      {
        path: "blogs/:id",
        element: <BlogPost />,
        loader: async function() {
          return await (await fetch("/data/blog.json")).json();
        }
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
