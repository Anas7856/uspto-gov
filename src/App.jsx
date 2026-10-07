import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import PaymentPage from "./Components/PaymentPage/PaymentPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/:slug" element={<PaymentPage />} />

      {/* ===== Baaki saare navbar pages (ZIP se) ===== */}
    </Routes>
  );
};

export default App;
