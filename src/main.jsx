import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Components/About";
import Home from "./Components/Screen/Landing Screen/Home";
import Contact from "./Components/Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Components/Error";
import ScrollToTop from "./Components/ScrollToTop";
import { BiCustomize } from "react-icons/bi";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Layout />
        <ScrollToTop />
      </>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "oa",
        element: <BiCustomize/>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
