import React from 'react';
import { 
  Home, 
  Users, 
  Bell, 
  Clock, 
  LayoutGrid, 
  Sparkles, 
  Briefcase, 
  Heart, 
  Smile, 
  Linkedin, 
  Network 
} from 'lucide-react';
import { ViewState } from '../types';

interface SidebarLeftProps {
  currentView: ViewState;
  onChangeView: (view: ViewState) => void;
}

const SidebarLeft: React.FC<SidebarLeftProps> = ({ currentView, onChangeView }) => {
  
  const navItemClass = (active: boolean) => `
    flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer transition-colors duration-200
    ${active ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
  `;

  const groupItemClass = (active: boolean) => `
    flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm transition-colors duration-200 cursor-pointer
    ${active ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}
  `;

  return (
    <div className="w-64 h-full border-r border-gray-200 bg-white flex flex-col flex-shrink-0">
      {/* Top Spacer / Logo Area (Minimal) */}
      <div className="h-14 flex items-center px-4 mb-2 gap-3 cursor-pointer" onClick={() => onChangeView(ViewState.HOME)}>
        <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center shadow-sm">
           <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
           </svg>
        </div>
        <span className="text-xl font-semibold text-gray-900 tracking-tight">Nexo</span>
      </div>

      <div className="flex-1 overflow-y-auto px-2 space-y-6">
        {/* Main Nav */}
        <div className="space-y-1">
          <div 
            onClick={() => onChangeView(ViewState.HOME)}
            className={navItemClass(currentView === ViewState.HOME)}
          >
            <Home size={18} />
            Home
          </div>
          <div 
            onClick={() => onChangeView(ViewState.REMINDERS)}
            className={navItemClass(currentView === ViewState.REMINDERS)}
          >
            <Bell size={18} />
            Reminders
          </div>
          <div 
            onClick={() => onChangeView(ViewState.CONTACTS)}
            className={navItemClass(currentView === ViewState.CONTACTS)}
          >
            <Users size={18} />
            Contacts
          </div>
          <div 
            onClick={() => onChangeView(ViewState.TIMELINE)}
            className={navItemClass(currentView === ViewState.TIMELINE)}
          >
            <Clock size={18} />
            Timeline
          </div>
          <div 
            onClick={() => onChangeView(ViewState.MAP)}
            className={navItemClass(currentView === ViewState.MAP)}
          >
            <LayoutGrid size={18} />
            Map
          </div>
          <div 
            onClick={() => onChangeView(ViewState.COPILOT)}
            className={navItemClass(currentView === ViewState.COPILOT)}
          >
            <Sparkles size={18} />
            Copilot
          </div>
        </div>

        {/* Groups Section */}
        <div>
          <div className="px-3 mb-2 flex items-center justify-between group cursor-pointer">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider group-hover:text-gray-600">Groups</span>
            <span className="text-gray-300 group-hover:text-gray-500 text-xs">▼</span>
          </div>
          <div className="space-y-0.5 ml-1">
            <div className={groupItemClass(false)}>
              <Briefcase size={16} className="text-gray-400" />
              Coworkers
              <span className="ml-auto text-xs text-gray-300">0</span>
            </div>
            <div className={groupItemClass(false)}>
              <Heart size={16} className="text-gray-400" />
              Family
              <span className="ml-auto text-xs text-gray-300">0</span>
            </div>
            <div className={groupItemClass(false)}>
              <Smile size={16} className="text-gray-400" />
              Friends
              <span className="ml-auto text-xs text-gray-300">0</span>
            </div>
            <div 
              onClick={() => onChangeView(ViewState.CONTACTS_LINKEDIN)}
              className={groupItemClass(currentView === ViewState.CONTACTS_LINKEDIN)}
            >
              <Linkedin size={16} className={currentView === ViewState.CONTACTS_LINKEDIN ? 'text-blue-500' : 'text-gray-400'} />
              Connections
              <span className="ml-auto text-xs text-gray-400 font-medium">412</span>
            </div>
             <div className={groupItemClass(false)}>
              <Network size={16} className="text-gray-400" />
              Networking
              <span className="ml-auto text-xs text-gray-300">0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 w-full px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          Import data
        </button>
        <button className="flex items-center gap-3 text-sm text-gray-500 hover:text-gray-900 w-full px-2 py-2 rounded-lg hover:bg-gray-50 transition-colors mt-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Help & support
        </button>
      </div>
    </div>
  );
};

export default SidebarLeft;