import React from 'react';

export default function QuickPrompts({ prompts, onSelect }) {
  if (!prompts || prompts.length === 0) return null;

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <p className="text-sm text-muted-foreground">Try asking:</p>
      <div className="flex flex-wrap justify-center gap-2 max-w-md">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => onSelect(prompt)}
            className="text-xs bg-card border border-border rounded-full px-3.5 py-2 text-foreground/80 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}