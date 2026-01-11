"use strict";

import { useNavigate } from "react-router-dom";
import QRScanner from "../components/QRScanner";
import { scanEntry } from "../api";

export default function ScanEntry() {
  const navigate = useNavigate();

  const handleScan = async ({ qrToken }) => {
    const res = await scanEntry({ qrToken });
    alert(res.allowed ? "✅ Entry Allowed" : "❌ Entry Denied");
  };

  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>

      <h2>Entry Scan</h2>
      <QRScanner onScan={handleScan} />
    </div>
  );
}
