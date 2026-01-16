import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.css";

import AppProviders from "./app/AppProviders.jsx";
import AppRoutes from "./app/AppRoutes.jsx";
import ErrorBoundary from "./components/error/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary name="App Root Page" location="./main.jsx">
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </ErrorBoundary>
  </StrictMode>
);
