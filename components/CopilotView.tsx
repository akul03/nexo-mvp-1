import React from 'react';
import { Sparkles, Send, Bot, User } from 'lucide-react';

const CopilotView: React.FC = () => {
  return (
    <div className="flex-1 h-full bg-white flex flex-col animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
         <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
           <Sparkles size={16} />
         </div>
         <h1 className="text-lg font-semibold text-gray-900">Nexo Copilot</h1>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
         
         {/* Welcome Message */}
         <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
               <Bot size={16} />
            </div>
            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 max-w-lg text-sm text-gray-700 leading-relaxed shadow-sm">
               <p>Hello Pratham! I'm your personal relationship assistant. I can help you:</p>
               <ul className="list-disc list-inside mt-2 space-y-1 text-gray-600">
                  <li>Draft reconnection emails</li>
                  <li>Prepare for upcoming meetings</li>
                  <li>Identify contacts you haven't spoken to in a while</li>
               </ul>
               <p className="mt-3">How can I help you today?</p>
            </div>
         </div>

         {/* User Message */}
         <div className="flex gap-4 flex-row-reverse">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-1">
               <User size={16} />
            </div>
            <div className="bg-blue-600 rounded-2xl rounded-tr-none p-4 max-w-lg text-sm text-white leading-relaxed shadow-sm">
               <p>Who should I reach out to today?</p>
            </div>
         </div>

         {/* AI Response */}
         <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mt-1">
               <Bot size={16} />
            </div>
            <div className="bg-gray-50 rounded-2xl rounded-tl-none p-4 max-w-lg text-sm text-gray-700 leading-relaxed shadow-sm">
               <p>Based on your timeline, you haven't spoken to <strong>Vipin</strong> in a few days. You also have a task to follow up with <strong>Shridhar Bhat</strong> regarding the product roadmap.</p>
               <div className="mt-3 flex gap-2">
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors">Draft email to Vipin</button>
                  <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-colors">View Shridhar's profile</button>
               </div>
            </div>
         </div>

      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100">
         <div className="relative max-w-4xl mx-auto">
            <input 
              type="text" 
              placeholder="Ask Copilot..." 
              className="w-full pl-4 pr-12 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-400 shadow-sm transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
               <Send size={18} />
            </button>
         </div>
         <p className="text-center text-xs text-gray-400 mt-2">AI can make mistakes. Please double check important info.</p>
      </div>

    </div>
  );
};

export default CopilotView;