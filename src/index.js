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
import ErrorBoundary from "./components/ErrorBoundary";
import "./index.css";

const AppLayout = () => (
  <>
    <Outlet />
  </>
);

// Détermine le basename selon l'environnement
const basename = '/cocktailparty';  // Utilisé pour les deux environnements

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <App />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/materiel",
        element: <Materiel />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/conseils", 
        element: <Conseils />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/verre",
        element: <Verre />,
        errorElement: <ErrorBoundary />,
      },
      {
        path: "/barman",
        element: <Barman />,
        errorElement: <ErrorBoundary />,
      },
      // Route catch-all pour les 404
      {
        path: "*",
        element: <ErrorBoundary />,
      },
    ],
  },
], { basename });

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
