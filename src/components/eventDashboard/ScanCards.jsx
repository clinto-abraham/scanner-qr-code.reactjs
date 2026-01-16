import { useScanEntry } from "../../hooks/mutations/useScanEntry";
import { useScanFood } from "../../hooks/mutations/useScanFood";
import { useScanStay } from "../../hooks/mutations/useScanStay";
import QRScanner from "../qr/QRScanner";

export default function ScanCards({ eventId }) {
  console.log(eventId);

  return (
    <div className="wide-card">
      <h3>QR Scanning</h3>

      <div className="grid-3">
        <ScanCard title="Scan Entry" useScanHook={useScanEntry} />
        <ScanCard title="Scan Food" useScanHook={useScanFood} />
        <ScanCard title="Scan Stay" useScanHook={useScanStay} />
      </div>
    </div>
  );
}

function ScanCard({ title, useScanHook }) {
  const { mutateAsync, isLoading } = useScanHook();

  const handleScan = async ({ qrToken }) => {
    try {
      const res = await mutateAsync({ qrToken });
      alert(res.allowed ? "✅ Entry Allowed" : "❌ Entry Denied");
    } catch (err) {
      console.error(err);
      alert("❌ Scan failed");
    }
  };
  return (
    <div className="action-card">
      <h4>{title}</h4>
      <QRScanner onScan={handleScan} disabled={isLoading} />
    </div>
  );
}
