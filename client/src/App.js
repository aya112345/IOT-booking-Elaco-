import { BrowserRouter, Routes, Route} from "react-router-dom";

//importation des pages
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Table from "./pages/table/Table";
import Login from "./pages/login/Login";
import QRCodeGenerator from "./pages/qrCode/QRCodeGenerator";

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Spaces" element={<List/>}/>
      <Route path="/Spaces/:id" element={<Table/>}/>
      <Route path="/Spaces/:id/QRCodeGenerator" element={<QRCodeGenerator/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/QRCodeGenerator" element={<QRCodeGenerator/>}/>

     </Routes>
  </BrowserRouter>
  );
}

export default App;
