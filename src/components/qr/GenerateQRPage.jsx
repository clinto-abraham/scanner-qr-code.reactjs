"use strict";

import { useLocation, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import Layout from "../layout/Layout";
import "../styles/event-scan-list.css";

export default function ScanList() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const eventId = state?.eventId;

  if (!eventId) {
    return (
      <Layout>
        <p>No event selected</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </Layout>
    );
  }

  const participantId = "PRT123";

  const qrPayload = {
    participantId,
    eventId,
    qrId: uuidv4(),
  };

  const qrValue = JSON.stringify(qrPayload);

  const downloadQR = () => {
    const svg = document.getElementById("qr-svg");
    const blob = new Blob([svg.outerHTML], {
      type: "image/svg+xml;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `participant-${participantId}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printQR = () => {
    const printWindow = window.open("", "_blank");
    printWindow.document.write(`
      <html>
        <body style="display:flex;justify-content:center;align-items:center;height:100vh;">
          ${document.getElementById("qr-svg").outerHTML}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="page">
      <h2>Generate QR Codes</h2>
      <p>Event ID: {eventId}</p>
      {/* QR generation UI goes here */}

      <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
        <QRCodeSVG
          id="qr-svg"
          value={qrValue}
          size={240}
          level="H"
          includeMargin
        />
      </div>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button onClick={downloadQR}>⬇️ Download QR</button>
        <button onClick={printQR}>🖨️ Print QR</button>
      </div>
    </div>
  );
}
