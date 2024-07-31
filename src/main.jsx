import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Components/About";
import Home from "./Components/Screen/Landing Screen/Home";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import { Main } from "./Components/Screen/OA_Practice/Main";
import Error from "./Components/Error";
import ScrollToTop from "./Components/ScrollToTop";
import Prompt from "./Components/Prompt"
import Home from "./Components/Landing/Home";
import OA from "./Components/Practice/customize";


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
        path: "/",
        element: <Prompt />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
        path: "",
        element: <Home/>,
      },
      {
        path: "oa",
        element: <OA/>,
      },
      {
        path: "OA_Practice",
        element: <Main/>,
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
