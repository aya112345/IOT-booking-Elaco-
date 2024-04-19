import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ reservationId }) => {
  const [text, setText] = useState(reservationId || '');

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleDownloadQRCode = () => {
    const canvas = document.querySelector('.qr-code canvas');
    const qrCodeURL = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeURL;
    downloadLink.download = 'qrcode.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="qr-code-generator">
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text for QR code"
      />
      {text && (
        <div className="qr-code">
          <QRCode value={text} />
        </div>
      )}
      {text && (
        <div className="download-message">
          <p>Don't forget to download the QR code!</p>
          <button onClick={handleDownloadQRCode}>Download QR Code</button>
        </div>
      )}
    </div>
  );
};

export default QRCodeGenerator;
