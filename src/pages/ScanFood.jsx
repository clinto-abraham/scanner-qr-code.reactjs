"use strict";

import QRScanner from "../components/QRScanner";
import { scanFood } from "../api";
import { useNavigate } from "react-router-dom";

export default function ScanFood() {
  const navigate = useNavigate();
  const handleScan = async ({ qrToken }) => {
    const res = await scanFood({
      qrToken,
      eventDayId: "EVENT_DAY_ID",
      bodyClockType: "LUNCH"
    });

    alert(res.allowed ? "🍽️ Food Allowed" : `❌ ${res.reason}`);
  };

  return (
    <div className="page">
      <button className="back-btn" onClick={() => navigate("/")}>
        ← Back
      </button>
      <h2>Food Scan</h2>
      <QRScanner onScan={handleScan} />
    </div>
  );
}
