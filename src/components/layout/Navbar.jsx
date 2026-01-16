import { useEffect, useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import CrossOfChrist from "../yeshua/CrossOfChrist";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        padding: "1rem 2rem",
        transition: "all 0.3s ease",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        background: scrolled ? "var(--nav-bg)" : "transparent",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/" className="navbar-logo">
          Event QR
        </Link>
        <Link to="/" className="navbar-logo">
          <CrossOfChrist size={72} />
        </Link>

        <ThemeToggle />
      </div>
    </nav>
  );
}
