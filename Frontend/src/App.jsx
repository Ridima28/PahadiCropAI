import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/login";
import MainChat from "./pages/MainChat";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

      <Route
        path="/chat"
        element={isLoggedIn ? <MainChat /> : <Navigate to="/login" />}
      />

      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/chat" : "/login"} />}
      />
    </Routes>
  );
}