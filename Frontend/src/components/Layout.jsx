import React, { useState, useEffect, useCallback } from 'react';
import { Outlet, useMatch, useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import Sidebar from '@/components/Sidebar';

export default function Layout() {
  const [conversations, setConversations] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [language, setLanguage] = useState('en');
  const [collapsed, setCollapsed] = useState(false);
  const match = useMatch('/chat/:id');
  const id = match?.params?.id;
  const navigate = useNavigate();

  const refreshConversations = useCallback(async () => {
    const list = await base44.entities.Conversation.list('-updated_date', 50);
    setConversations(list || []);
  }, []);

  useEffect(() => {
    refreshConversations();
  }, [refreshConversations]);

  // Sync activeId from URL param
  useEffect(() => {
    if (id) {
      setActiveId(id);
    } else {
      setActiveId(null);
    }
  }, [id]);

  const handleSetActiveId = (newId) => {
    setActiveId(newId);
    if (newId) {
      navigate(`/chat/${newId}`);
    } else {
      navigate('/');
    }
  };

  const sidebarProps = {
    conversations,
    activeId,
    setActiveId: handleSetActiveId,
    language,
    setLanguage,
    refreshConversations,
    collapsed,
    setCollapsed,
  };

  // These go to Home via Outlet context
  const outletContext = {
    conversations,
    activeId,
    setActiveId: handleSetActiveId,
    language,
    setLanguage,
    refreshConversations,
  };

  return (
    <div className="h-screen flex bg-background">
      <Sidebar {...sidebarProps} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Outlet context={outletContext} />
      </div>
    </div>
  );
} 