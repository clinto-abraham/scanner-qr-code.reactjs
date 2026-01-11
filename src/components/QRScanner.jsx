"use strict";

import { Html5Qrcode } from "html5-qrcode";
import { useRef, useState } from "react";

export default function QRScanner({ onScan }) {
  const containerId = useRef(`qr-${Math.random().toString(36).slice(2)}`);
  const scannerRef = useRef(null);
  const scanLockedRef = useRef(false);

  const [status, setStatus] = useState("Scanner idle");
  const [isRunning, setIsRunning] = useState(false);

  // ---------- START SCANNER ----------
  const startScanner = async () => {
    if (scannerRef.current) return; // already running

    try {
      const scanner = new Html5Qrcode(containerId.current);
      scannerRef.current = scanner;

      await scanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        decodedText => {
          if (scanLockedRef.current) return;
          scanLockedRef.current = true;

          let payload;
          try {
            payload = JSON.parse(decodedText);
          } catch {
            setStatus("❌ Invalid QR code");
            scanLockedRef.current = false;
            return;
          }

          setStatus("QR detected ✅");
          stopScanner(); // auto-stop on valid QR
          onScan(payload);
        }
      );

      setIsRunning(true);
      setStatus("Scanning… align QR in frame");
    } catch (err) {
      console.error("Camera start failed:", err);
      setStatus("❌ Camera permission denied");
      scannerRef.current = null;
    }
  };

  // ---------- STOP SCANNER ----------
  const stopScanner = async () => {
    const scanner = scannerRef.current;
    if (!scanner) return;

    try {
      await scanner.stop();
      await scanner.clear();
    } catch {
      // ignore (already stopped)
    } finally {
      scannerRef.current = null;
      scanLockedRef.current = false;
      setIsRunning(false);
      setStatus("Scanner stopped");
    }
  };

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      {/* Camera container */}
      <div id={containerId.current} />

      {/* Status */}
      <p style={{ marginTop: 12 }}>{status}</p>

      {/* Controls */}
      {!isRunning && (
        <button
          onClick={startScanner}
          style={{
            marginTop: 10,
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: "#16a34a",
            color: "#fff",
            fontSize: 16
          }}
        >
          ▶️ Start Scanning
        </button>
      )}

      {isRunning && (
        <button
          onClick={stopScanner}
          style={{
            marginTop: 10,
            padding: "10px 16px",
            borderRadius: 8,
            border: "none",
            background: "#dc2626",
            color: "#fff",
            fontSize: 16
          }}
        >
          ⏹ Stop Scanning
        </button>
      )}
    </div>
  );
}






// "use strict";

// import { Html5QrcodeScanner } from "html5-qrcode";
// import { useEffect } from "react";

// export default function QRScanner({ onScan }) {
//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "qr-reader",
//       { fps: 10, qrbox: 250 },
//       false
//     );

//     scanner.render(
//       decodedText => {
//         try {
//           const data = JSON.parse(decodedText);
//           console.log(data, 111)
//           onScan(data);
//         } catch {
//           alert("Invalid QR format");
//         }
//       },
//       error => console.warn(error)
//     );

//     return () => scanner.clear();
//   }, []);

//   return <div id="qr-reader" />;
// }
