"use strict";
import { useNavigate } from "react-router-dom";
import QRScanner from "../components/QRScanner";
import { scanStay } from "../api";

export default function ScanStay() {
  const navigate = useNavigate();
  const handleScan = async ({ qrToken }) => {
    const res = await scanStay({
      qrToken,
      eventDayId: "EVENT_DAY_ID"
    });

    alert(res.allowed ? "🛏️ Stay Allowed" : `❌ ${res.reason}`);
  };

  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h2>Stay Scanner</h2>
      <QRScanner onScan={handleScan} />
    </div>
  );
}
