import { Routes, Route } from "react-router-dom";

import "./App.css";
import HelpPage from "./pages/HelpPage";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;
