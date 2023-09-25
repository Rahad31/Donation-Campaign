import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/root/root";
import Carddetails from "./component/Card_Details/Carddetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Homecard/:Donation_id",
        loader: () => fetch("../donation.json"),
        element: <Carddetails></Carddetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
