import React from 'react';
import { Clock, Mail, MessageSquare, Linkedin, Calendar, FileText } from 'lucide-react';
import { MOCK_TIMELINE } from '../constants';

const TimelineView: React.FC = () => {
  return (
    <div className="flex-1 h-full bg-white flex flex-col p-8 animate-in fade-in duration-300 overflow-y-auto">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Timeline</h1>
        <p className="text-gray-500">A history of your interactions.</p>
      </div>

      <div className="max-w-3xl relative pl-4">
        {/* Vertical Line */}
        <div className="absolute left-8 top-2 bottom-0 w-px bg-gray-200"></div>

        <div className="space-y-8">
          {MOCK_TIMELINE.map((item, index) => (
            <div key={item.id} className="relative flex items-start gap-6 group">
              
              {/* Icon Bubble */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:border-blue-400 group-hover:text-blue-600 transition-colors">
                 {item.icon === 'mail' && <Mail size={14} />}
                 {item.icon === 'users' && <Calendar size={14} />}
                 {item.icon === 'file-text' && <FileText size={14} />}
                 {item.icon === 'linkedin' && <Linkedin size={14} />}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{item.type}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                 </div>
                 <h3 className="text-base font-semibold text-gray-900">{item.contact}</h3>
                 <p className="text-gray-600 text-sm mt-1">{item.title}</p>
                 
                 {/* Decorative avatars for 'meeting' type */}
                 {item.type === 'meeting' && (
                   <div className="flex -space-x-2 mt-3">
                     <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs border border-white">BM</div>
                     <div className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs border border-white">You</div>
                   </div>
                 )}
              </div>
            </div>
          ))}

          {/* End of list marker */}
          <div className="relative flex items-start gap-6">
             <div className="relative z-10 w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                 <div className="w-2 h-2 rounded-full bg-gray-300"></div>
             </div>
             <div className="pt-1">
               <span className="text-sm text-gray-400">Start of history</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineView;