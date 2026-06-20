import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import logoIcon from "../assets/logo-icon.png";
import { Message } from "./Message";
import { Loader2, Send } from "lucide-react";

export const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const { selectedChat } = useAppContext();
  const [prompt, setPrompt] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (selectedChat) {
      setMessage(selectedChat.messages || []);
    }
  }, [selectedChat]);

  return (
    <div className="flex flex-col h-screen w-full bg-white overflow-hidden">

      {/* Header */}
      <header className="flex-shrink-0 px-4 py-3 bg-[#F5F3EE]">
        <p className="text-sm font-medium text-gray-600">
          Crop Advisory Chatbot
        </p>
      </header>

      {/* Chat Body */}
      <div className="flex-1 flex flex-col justify-between px-3 sm:px-6 lg:px-10 xl:px-20 py-3 overflow-hidden">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 pb-3">
          {message.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center gap-2 text-center">
              <img src={logoIcon} alt="" className="w-16 sm:w-20" />

              <h3 className="font-bold text-lg text-gray-800">
                Namaste 🙏🏻
              </h3>

              <p className="text-sm sm:text-base text-gray-400 max-w-md">
                I'm your crop advisor. Ask me about diseases, pests,
                post-harvest handling, or planting for your farms.
              </p>
            </div>
          )}

          {message.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}

          {loading && (
            <div className="flex items-center gap-1.5 py-2">
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" />
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-75" />
              <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce delay-150" />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="w-full pt-2 pb-2">
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 p-2 rounded-2xl border border-gray-200 bg-white shadow-md focus-within:border-green-500 transition"
          >
            <input
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              type="text"
              placeholder="Enter your question..."
              className="flex-1 bg-transparent px-3 py-2 text-sm outline-none min-w-0"
            />

            <button
              disabled={loading}
              className="w-10 h-10 rounded-xl bg-green-700 hover:bg-green-800 text-white flex items-center justify-center disabled:opacity-40"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>

          <p className="text-[10px] text-gray-500 text-center mt-1">
            AI-generated advice — always verify with a licensed extension officer
          </p>
        </div>
      </div>
    </div>
  );
};