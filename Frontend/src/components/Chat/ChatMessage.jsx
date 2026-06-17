import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Sprout, User } from 'lucide-react';

export default function ChatMessage({ message, language = 'en' }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${
        isUser
          ? 'bg-secondary text-secondary-foreground'
          : 'bg-primary text-primary-foreground'
      }`}>
        {isUser ? <User className="w-4 h-4" /> : <Sprout className="w-4 h-4" />}
      </div>

      <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
        isUser
          ? 'bg-secondary text-secondary-foreground rounded-tr-sm'
          : 'bg-card text-card-foreground border border-border rounded-tl-sm'
      }`}>
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.content}</p>
        ) : (
          <div className="text-sm leading-relaxed prose prose-sm prose-green max-w-none">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}