import Navbar from "./Navbar";
import Footer from "./Footer";

import ErrorBoundary from "../error/ErrorBoundary";

export default function Layout({ children }) {
  return (
    <ErrorBoundary name="Layout" location="./src/components/layout/Layout.jsx">
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "var(--bg)",
          color: "var(--text)",
        }}
      >
        <Navbar />
        <main style={{ paddingTop: "80px", flex: 1 }}>{children}</main>

        <p className="read-the-docs">
          This is development mode scanner app. Kindly forgo any short comings.
        </p>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}
