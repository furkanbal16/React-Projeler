import QRCode from "qrcode";
import { useState } from "react";
export const QrExample = () => {
  const [url, setUrl] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 100,
        margin: 2,
        color: {
          dark: "#335383FF",
          light: "#EEEEEEFF",
        },
      },
      (err, url) => {
        if (err) return console.error(err);

        console.log(url);
        setQr(url);
      }
    );
  };

  return (
    <div className="app">
      <h1>QR Oluşturucu</h1>
      <input
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={GenerateQRCode}>Generate</button>
      <>
        <img src={qr} />
        <a href={qr} download="qrcode.png">
          Download
        </a>
      </>
    </div>
  );
};
