"use strict";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>QR Scanner</h1>

      <button onClick={() => navigate("/scan/entry")}>
        🚪 Entry Scan
      </button>

      <button onClick={() => navigate("/scan/food")}>
        🍽️ Food Scan
      </button>

      <button onClick={() => navigate("/scan/stay")}>
        🛏️ Stay Scan
      </button>
    </div>
  );
}
