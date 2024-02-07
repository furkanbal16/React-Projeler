import logo from "./assets/logo.svg";
import { QrExample } from "./components/QrExample";


export const App = () => {

  return (
    <div className="">
      <img className="logo" src={logo} alt="" />
      <h1>F. QR Kode Oluşturucu</h1>
      <p>Başlayın.</p>
      <QrExample />

    </div>
  );
};
