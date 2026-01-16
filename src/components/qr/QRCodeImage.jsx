const QRCodeImage = ({ qrImage }) => {
  if (!qrImage) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={qrImage}
        alt="Participant QR Code"
        style={{
          width: "220px",
          height: "220px",
          border: "1px solid #e5e7eb",
          padding: "10px",
          background: "#fff"
        }}
      />
    </div>
  );
};

export default QRCodeImage;
