import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./component/Home/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/root/root";
import Carddetails from "./component/Card_Details/Carddetails";
import Donation_done from "./component/Donation_done/Donation_done";
import Piechart from "./component/piechart/Piechart";

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
      {
        path: "/Donation",
        loader: () => fetch("../donation.json"),
        element: <Donation_done></Donation_done>,
      },
      {
        path: "/statistics",

        element: <Piechart></Piechart>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
