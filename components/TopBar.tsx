import React from 'react';
import { Search, Bell, User, Plus } from 'lucide-react';

const TopBar: React.FC = () => {
  return (
    <div className="h-16 border-b border-gray-200 bg-white flex items-center justify-between px-6 flex-shrink-0 z-10">
      
      {/* Left side spacer to align search */}
      <div className="w-10"></div>

      {/* Search Bar - Center */}
      <div className="flex-1 max-w-2xl px-4">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-2.5 bg-gray-50 border-transparent text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-gray-200 focus:shadow-sm rounded-xl text-sm transition-all duration-200"
            placeholder="Search your network..."
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
             <span className="text-gray-400 text-xs border border-gray-200 rounded px-1.5 py-0.5">/</span>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-2">
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <Plus size={20} />
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="h-6 w-px bg-gray-200 mx-1"></div>
        <button className="flex items-center gap-2 pl-1 pr-2 py-1 hover:bg-gray-50 rounded-full transition-colors">
           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-sm">
             P
           </div>
        </button>
      </div>
    </div>
  );
};

export default TopBar;