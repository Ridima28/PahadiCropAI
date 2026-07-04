import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import MainChat from "./pages/MainChat";
import Loading from "./pages/loading";

import "./assets/prism.css";

import { useAppContext } from "./context/AppContext";

// Import these if you are using them
// import Sidebar from "./components/Sidebar";
// import ChatBox from "./components/ChatBox";
// import { assets } from "./assets/assets";

export default function App() {
  const { user, loadingUSer } = useAppContext();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Show loading while checking authentication
  if (loadingUSer) {
    return <Loading />;
  }

  return (
    <>
      <Toaster />

      <Routes>
        {/* Loading Route */}
        <Route
          path="/loading"
          element={
            loadingUSer ? (
              <Loading />
            ) : user ? (
              <Navigate to="/" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Login */}
        <Route
          path="/login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Protected Home */}
        <Route
          path="/"
          element={
            user ? (
              <MainChat
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        {/* Redirect unknown routes */}
        <Route
          path="*"
          element={<Navigate to={user ? "/" : "/login"} replace />}
        />
      </Routes>
    </>
  );
}