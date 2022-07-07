import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//redux
import { fetchUser } from "./redux/user/userSlice";
import { fetchBusiness } from "./redux/business/businessSlice";
import { useDispatch } from "react-redux";

import "./App.css";
import HelpPage from "./pages/HelpPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchBusiness());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </div>
  );
}

export default App;
