import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import logo from '../assets/logo.png';
import logoIcon from '../assets/logo-icon.png'; 
import { Search, Trash2, LogOut, Plus, ChevronRight, ChevronLeft } from "lucide-react";
import moment from 'moment';

export const SideBar = () => {
  const { chats, setSelectedChat, user } = useAppContext();
  const [search, setSearch] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const query = search.toLowerCase();
  const filteredChats = chats.filter(chat => {
    const firstMsg = chat.messages?.[0]?.content?.toLowerCase() || "";
    const name = chat.name?.toLowerCase() || "";
    return firstMsg.includes(query) || name.includes(query);
  });

  return (
    <>
      {/* Backdrop — only on mobile when expanded */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/20 z-10 sm:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}

      <div
        className={`
          relative z-20 flex flex-col h-screen bg-[#F5F3EE] border-r border-gray-200
          transition-all duration-300 ease-in-out shrink-0
          ${isExpanded ? 'w-72' : 'w-14'}
          ${isExpanded ? 'fixed sm:relative' : 'relative'}
        `}
      >
        {/* ── COLLAPSED RAIL ─────────────────────────────── */}
        {!isExpanded && (
          <div className="flex flex-col items-center py-4 gap-5 h-full">
            {/* Logo icon */}

              <img src={logoIcon} className="w-10  object-contain" alt="logo" />
            

            {/* Expand arrow */}
            <button
              onClick={() => setIsExpanded(true)}
              className="text-gray-500 hover:text-gray-900 transition"
              title="Expand sidebar"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* New Chat */}
            <button
              onClick={() => setSelectedChat(null)}
              title="New Chat"
              className="text-gray-600 hover:text-black transition"
            >
              <Plus className="w-5 h-5" />
            </button>


            

            {/* User avatar at bottom */}
            <div className="mt-auto pb-2">
              <img src={assets.user_icon} className="w-7 rounded-full" alt="user" />
            </div>
          </div>
        )}

        {/* ── EXPANDED SIDEBAR ───────────────────────────── */}
        {isExpanded && (
          <div className="flex flex-col h-full p-5 overflow-hidden">
            {/* Header: logo + collapse button */}
            <div className="flex items-center justify-between shrink-0">
              <img src={logo} className="w-36" alt="logo" />
              <button
                onClick={() => setIsExpanded(false)}
                className="text-gray-500 hover:text-gray-900 transition ml-2"
                title="Collapse sidebar"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>

            {/* New Chat */}
            <button
              onClick={() => { setSelectedChat(null); }}
              className="w-full flex justify-center items-center gap-2 h-9 text-sm bg-primary text-primary-foreground shadow hover:brightness-95 rounded-xl transition-all duration-200 mt-4 shrink-0"
            >
              + New Chat
            </button>

            {/* Search */}
            <div className='flex items-center gap-2 p-3 mt-4 border border-gray-200 rounded-md shrink-0'>
              <Search className="w-4 h-4 text-gray-700 shrink-0" />
              <input
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type="text"
                placeholder='Search conversations'
                className='text-xs placeholder:text-gray-400 outline-none w-full bg-transparent'
              />
            </div>

            {/* Chat list */}
            {filteredChats.length > 0 ? (
              <>
                <p className='mt-4 text-sm shrink-0'>Recent Chats</p>
                <div className='flex-1 overflow-y-auto mt-3 text-sm space-y-3'>
                  {filteredChats.map(chat => (
                    <div
                      key={chat._id}
                      onClick={() => setSelectedChat(chat)}
                      className='p-2 px-4 border border-gray-300 rounded-md cursor-pointer flex justify-between group hover:bg-gray-50 transition'
                    >
                      <div className="w-full pr-2 min-w-0">
                        <p className="truncate w-full">
                          {chat.messages?.length > 0
                            ? chat.messages[0].content.slice(0, 32)
                            : chat.name}
                        </p>
                        <p className='text-xs text-gray-500'>
                          {moment(chat.chatUpdatedAt).fromNow()}
                        </p>
                      </div>
                      <Trash2
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("Delete chat:", chat._id);
                        }}
                        className="hidden group-hover:block w-4 shrink-0 cursor-pointer text-gray-600 mt-1"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <p className="mt-4 text-sm text-gray-500">
                {search ? "No matching chats" : "No chats yet"}
              </p>
            )}

            {/* User section */}
            <div className='mt-auto shrink-0 flex items-center justify-between p-3 border border-gray-300 rounded-md cursor-pointer group'>
              <div className="flex items-center gap-3 min-w-0">
                <img src={assets.user_icon} className="w-7 rounded-full shrink-0" alt="" />
                <p className="truncate text-sm">
                  {user ? user.name : "Login your account"}
                </p>
              </div>
              {user && (
                <LogOut
                  className="h-4 w-4 shrink-0 cursor-pointer text-gray-600 hidden group-hover:block"
                  onClick={() => console.log("Logout clicked")}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};