export default function BulkUploadCard() {
  return (
    <div className="wide-card">
      <h3>Bulk Participants Upload</h3>

      <input type="file" accept=".xlsx,.xls" />
      <button>Upload & Process</button>

      <p className="hint">
        Supported: Name, Phone, Email, Stay, Food
      </p>
    </div>
  );
}
