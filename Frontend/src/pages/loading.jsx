import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="bg-gradient-to-b from-[#6b9e2d] to-[#2f4b18] backdrop-opacity-60 flex items-center justify-center h-screen w-screen text-white text-2xl">
      <div className="w-10 h-10 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
    </div>
  );
}