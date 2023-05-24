import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import NewReservationPage from "./pages/NewReservationPage";
import ConfirmReservationPage from "./pages/ConfirmReservationPage";
import FileUpload from "./components/FileUpload";
import Cropping from "./components/Cropping"
import { VisitProvider } from "./store/visit";

function App() {
  return (
    <VisitProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="/new" element={<Cropping />} />
          <Route path="/confirm" element={<ConfirmReservationPage />} />
        </Routes>
      </BrowserRouter>
    </VisitProvider>
  );
}

export default App;
