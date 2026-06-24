import React, { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/login";
import MainChat from "./pages/MainChat";
import './assets/prism.css'
import Loading  from "./pages/loading";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const{pathname} = useLocation()


  return (
    <Routes>
      {/* <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

      <Route
        path="/chat"
        element={isLoggedIn ? <MainChat /> : <Navigate to="/login" />}
      />

      <Route
        path="/"
        element={<Navigate to={isLoggedIn ? "/chat" : "/login"} />}
      /> */}
<Route path="/" element={<MainChat />} />
<Route path="/loading" element={<Loading />} />
  {/* remove this when login is done */}
    </Routes>
  );
}