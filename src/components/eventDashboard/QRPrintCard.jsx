import { useState } from "react";
import ParticipantQR from "../participant/ParticipantQR";

export default function QRPrintCard() {
  const [showQr, setShowQr] = useState(false);
  const handleGenerateAllQrCode = () => {
    setShowQr(!showQr);
  };
  return (
    <div className="wide-card">
      <h3>QR Code Management</h3>

      <button onClick={handleGenerateAllQrCode}>
        {" "}
        {!showQr ? "Generate All QR Codes" : "Clear QR Codes"}
      </button>

      {showQr && (
        <>
          <ParticipantQR />
          <button onClick={() => window.print()}>Print All QR Codes</button>
        </>
      )}
    </div>
  );
}
