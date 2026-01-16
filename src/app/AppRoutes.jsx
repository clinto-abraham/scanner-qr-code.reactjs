import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ErrorBoundary from "../components/error/ErrorBoundary";

import Home from "../pages/Home";
import EventDashboard from "../pages/EventDashboard";

export default function AppRoutes() {
  return (
    <ErrorBoundary name="Browser Router" location="./src/app/AppRoutes.jsx">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary name="Home Page" location="pages/Home.jsx">
                <Layout>
                  <Home />
                </Layout>
              </ErrorBoundary>
            }
          />

          <Route
            path="/event/:eventId"
            element={
              <ErrorBoundary
                name="EventDashboard"
                location="pages/EventDashboard.jsx"
              >
                <Layout>
                  <EventDashboard />
                </Layout>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
