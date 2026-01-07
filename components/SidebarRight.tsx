import React from 'react';
import { Info } from 'lucide-react';
import { RECENTLY_INTERACTED, RECENT_LINKEDIN } from '../constants';

const SidebarRight: React.FC = () => {
  return (
    <div className="w-72 h-full border-l border-gray-200 bg-white flex flex-col flex-shrink-0 overflow-y-auto">
      
      {/* Stats Section */}
      <div className="p-6 pb-2">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">412</h3>
          <p className="text-sm text-green-600 font-medium">+412 last month</p>
          <p className="text-xs text-gray-400 mt-1">Contacts</p>
        </div>
        
        <div className="mb-2">
           <h3 className="text-2xl font-semibold text-gray-900">0</h3>
           <p className="text-xs text-gray-400 mt-1">Notes</p>
        </div>
      </div>

      <div className="h-px bg-gray-100 mx-6 mb-6"></div>

      {/* Recently Interacted */}
      <div className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Recently Interacted</h4>
          <Info size={14} className="text-gray-300 cursor-pointer hover:text-gray-500" />
        </div>
        
        <ul className="space-y-4">
          {RECENTLY_INTERACTED.map(contact => (
            <li key={contact.id} className="flex items-center gap-3 group cursor-pointer">
              <img 
                src={contact.avatarUrl} 
                alt={contact.name} 
                className="w-8 h-8 rounded-full object-cover border border-gray-100"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="h-px bg-gray-100 mx-6 mb-6"></div>

       {/* Recent LinkedIn */}
       <div className="px-6 pb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Recent LinkedIn Connections</h4>
          <Info size={14} className="text-gray-300 cursor-pointer hover:text-gray-500" />
        </div>
        
        <ul className="space-y-4">
          {RECENT_LINKEDIN.map(contact => (
            <li key={`recent-${contact.id}`} className="flex items-center gap-3 group cursor-pointer">
               {/* Use initials if we wanted variety, but adhering to mockup style */}
               <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-medium border border-blue-100">
                  {contact.name.charAt(0)}
               </div>
              <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                {contact.name}
              </span>
            </li>
          ))}
          <li className="flex items-center gap-3 group cursor-pointer">
              <img 
                src="https://picsum.photos/seed/saad/200" 
                alt="Saad Khan" 
                className="w-8 h-8 rounded-full object-cover border border-gray-100"
              />
              <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                Saad Khan
              </span>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarRight;