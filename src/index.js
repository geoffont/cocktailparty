import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import App from "./App";
import Barman from "./routes/Barman";
import Conseils from "./routes/Conseils";
import Materiel from "./routes/Materiel";
import Verre from "./routes/Verre";
import "./components/header/navbar.css";

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "Materiel",
        element: <Materiel />,
      },
      {
        path: "Conseils",
        element: <Conseils />,
      },
      {
        path: "Verre",
        element: <Verre />,
      },
      {
        path: "Barman",
        element: <Barman />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
