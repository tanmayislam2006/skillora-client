import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import router from "./Router/Router";
import SkilloraProvidor from "./Context/SkilloraProvidor";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <SkilloraProvidor>
      <RouterProvider router={router} />
    </SkilloraProvidor>
  </HelmetProvider>
);
