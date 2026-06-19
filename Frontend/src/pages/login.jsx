import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { base44 } from "@/api/base44Client";
import { Mail, Lock, Loader2 } from "lucide-react";
// import GoogleIcon from "@/components/GoogleIcon";
import AgriAuthLayout from "../components/AgriAuthLayout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   setLoading(true);
  //   try {
  //     await base44.auth.loginViaEmailPassword(email, password);
  //     window.location.href = "/";
  //   } catch (err) {
  //     setError(err.message || "Invalid email or password");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleGoogle = () => {
  //   base44.auth.loginWithProvider("google", "/");
  // };

  return (
    <AgriAuthLayout
      title="Welcome Back"
      subtitle="Log in to access your intelligent farming assistant."
      footer={
        <>
          Don't have an account?{" "}
          <Link to="/register" className="text-[#2D6A4F] font-semibold hover:underline underline-offset-4 decoration-[#52B788]/50 transition-colors">
            Create one
          </Link>
        </>
      }
    >
      {/* Google Button */}
      {/* <button
        type="button"
        onClick={handleGoogle}
        className="w-full h-12 rounded-xl border border-[#E5E7EB] bg-white hover:bg-[#F8FAF9] transition-colors flex items-center justify-center gap-3 text-sm font-medium text-[#374151] mb-6"
      >
        <GoogleIcon className="w-5 h-5" />
        Continue with Google
      </button> */}

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#E5E7EB]" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-xs uppercase tracking-wider text-[#9CA3AF] font-medium">
            or
          </span>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      {/* Form */}
      <form  className="space-y-5">
        {/* Email */}
        <div className="relative">
          <label
            htmlFor="email"
            className={`absolute left-0 transition-all duration-200 pointer-events-none text-sm ${
              focused === "email" || email
                ? "-top-6 text-xs text-[#2D6A4F] font-medium"
                : "top-3.5 text-[#9CA3AF]"
            }`}
          >
            Email Address
          </label>
          <div className="relative">
            <Mail
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                focused === "email" ? "text-[#2D6A4F]" : "text-[#D1D5DB]"
              }`}
              aria-hidden="true"
            />
            <input
              id="email"
              type="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              className={`w-full h-[52px] pl-10 pr-4 rounded-xl border transition-all duration-200 text-[15px] text-[#1B4332] placeholder-transparent bg-[#F9FAFB] outline-none ${
                focused === "email"
                  ? "border-[#52B788] bg-[#D8F3DC]/30 ring-2 ring-[#52B788]/15"
                  : "border-[#E5E7EB] hover:border-[#D1D5DB]"
              }`}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="relative">
          <label
            htmlFor="password"
            className={`absolute left-0 transition-all duration-200 pointer-events-none text-sm ${
              focused === "password" || password
                ? "-top-6 text-xs text-[#2D6A4F] font-medium"
                : "top-3.5 text-[#9CA3AF]"
            }`}
          >
            Password
          </label>
          <div className="relative">
            <Lock
              className={`absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                focused === "password" ? "text-[#2D6A4F]" : "text-[#D1D5DB]"
              }`}
              aria-hidden="true"
            />
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setFocused("password")}
              onBlur={() => setFocused(null)}
              className={`w-full h-[52px] pl-10 pr-4 rounded-xl border transition-all duration-200 text-[15px] text-[#1B4332] placeholder-transparent bg-[#F9FAFB] outline-none ${
                focused === "password"
                  ? "border-[#52B788] bg-[#D8F3DC]/30 ring-2 ring-[#52B788]/15"
                  : "border-[#E5E7EB] hover:border-[#D1D5DB]"
              }`}
              required
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-[13px] text-[#2D6A4F] font-medium hover:underline underline-offset-4 decoration-[#52B788]/50 transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-[52px] rounded-xl bg-[#2D6A4F] hover:bg-[#1B4332] text-white font-semibold text-[15px] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 animate-pulse-glow"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Logging in...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </AgriAuthLayout>
  );
}