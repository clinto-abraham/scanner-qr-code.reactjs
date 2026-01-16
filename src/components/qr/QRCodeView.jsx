"use strict";

import { QRCodeCanvas } from "qrcode.react";

const QRCodeView = ({ value, size = 200 }) => {
  if (!value) return null;

  return (
    <div style={{ textAlign: "center" }}>
      <QRCodeCanvas
        value={value}
        size={size}
        level="H"
        includeMargin={true}
      />
      <p style={{ marginTop: "10px", wordBreak: "break-all" }}>
        {value}
      </p>
    </div>
  );
};

export default QRCodeView;
