import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import About from "./Components/About/About";
import Home from "./Components/Screen/Landing Screen/Home";
import Contact from "./Components/Contact";
import Work from "./Components/Work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Error from "./Components/Others/Error";
import ScrollToTop from "./Components/Others/ScrollToTop";
import { Main } from "./Components/Screen/OA_Practice/Main";


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
