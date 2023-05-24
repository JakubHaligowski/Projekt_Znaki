import { BrowserRouter, Routes, Route } from "react-router-dom";


import FileUpload from "./components/FileUpload";
import Cropping from "./components/Cropping"


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="/new" element={<Cropping />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
