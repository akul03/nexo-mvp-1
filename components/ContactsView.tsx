import React, { useState } from 'react';
import { 
  Settings2, 
  ArrowUpDown, 
  Search, 
  MoreHorizontal, 
  Plus, 
  Briefcase, 
  ChevronLeft,
  Filter,
  Linkedin,
  Facebook,
  MessageCircle,
  Instagram,
  Users
} from 'lucide-react';
import { MOCK_CONTACTS } from '../constants';

interface ContactsViewProps {
  title?: string;
  isLinkedIn?: boolean;
}

const ContactsView: React.FC<ContactsViewProps> = ({ title = "All Contacts", isLinkedIn = false }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Filter contacts if generic view
  const displayContacts = isLinkedIn 
    ? MOCK_CONTACTS.filter(c => c.group === 'LinkedIn Connections')
    : MOCK_CONTACTS;
    
  // Fallback for demo purposes if filter returns nothing
  const contactsToRender = displayContacts.length > 0 ? displayContacts : MOCK_CONTACTS;

  const toggleSelect = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const toggleSelectAll = () => {
    if (selectedIds.size === contactsToRender.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(contactsToRender.map(c => c.id)));
    }
  };

  return (
    <div className="flex-1 h-full bg-white flex flex-col overflow-hidden animate-in fade-in duration-300 font-sans">
      
      {/* Top Breadcrumb & Header Area */}
      <div className="px-8 pt-6 pb-2 flex-shrink-0">
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-6 cursor-pointer hover:text-gray-700 w-fit">
            <ChevronLeft size={16} />
            <span>All Groups</span>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm mt-1 ${isLinkedIn ? 'bg-[#8c7a6b]' : 'bg-gray-700'}`}>
                 {isLinkedIn ? <Briefcase size={24} fill="currentColor" className="text-white/90" /> : <Users size={24} />}
            </div>
            <div>
                 <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h1>
                 <p className="text-gray-500 mt-1">{contactsToRender.length} contacts</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-2">
               <button className="flex items-center gap-2 px-4 py-2 bg-[#4f6bff] hover:bg-[#435be0] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors">
                  <Plus size={18} strokeWidth={2.5} />
                  Add Contact
               </button>
               <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50 bg-white">
                   <MoreHorizontal size={20} />
               </button>
          </div>
        </div>
      </div>

      {/* Toolbar / Filter Row */}
      <div className="px-8 py-3 mt-4 flex items-center justify-between gap-4 flex-shrink-0 bg-white z-10">
        <div className="flex items-center gap-2">
           <input 
              type="checkbox" 
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
              checked={selectedIds.size === contactsToRender.length && contactsToRender.length > 0}
              onChange={toggleSelectAll}
           />
           <span className="text-sm font-medium text-gray-700 ml-2">Select all</span>
        </div>

        <div className="flex items-center gap-2">
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium bg-white">
                <Settings2 size={16} />
                Properties
             </button>
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium bg-white">
                <ArrowUpDown size={16} />
                Sort
             </button>
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 font-medium bg-white">
                <Filter size={16} />
                Filter
             </button>
             
             <div className="relative ml-2">
                 <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                 <input 
                    type="text" 
                    placeholder="Search by name..." 
                    className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 w-64 bg-white"
                 />
             </div>
        </div>
      </div>

      {/* List Content */}
      <div className="flex-1 overflow-y-auto px-8">
        <div className="w-full flex flex-col pb-20">
            {contactsToRender.map((contact) => (
                <div 
                    key={contact.id} 
                    className="flex items-center py-2.5 border-b border-gray-50 hover:bg-gray-50/50 transition-colors group -mx-4 px-4 rounded-lg"
                >
                    {/* Checkbox */}
                    <div className="flex-shrink-0 w-8 flex items-center justify-center">
                        <input 
                            type="checkbox" 
                            className={`w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-opacity duration-200 cursor-pointer ${selectedIds.has(contact.id) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                            checked={selectedIds.has(contact.id)}
                            onChange={() => toggleSelect(contact.id)}
                        />
                    </div>

                    {/* Avatar */}
                    <div className="flex-shrink-0 mr-3">
                         {contact.id === '5' || contact.id === '9' || contact.id === '16' || contact.id === '10' ? (
                            // Using text avatar for some variety like in screenshot
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-semibold border border-blue-200">
                                {contact.name.charAt(0)}
                            </div>
                         ) : (
                            <img src={contact.avatarUrl} alt="" className="w-8 h-8 rounded-full object-cover border border-gray-200" />
                         )}
                    </div>

                    {/* Name & Role */}
                    <div className="flex-1 min-w-0 flex items-center gap-2 pr-4">
                        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{contact.name}</span>
                        <span className="text-sm text-gray-500 truncate">{contact.role}</span>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-3 px-4 flex-shrink-0">
                         {contact.type !== 'email' && <Linkedin size={14} className="text-[#0a66c2] cursor-pointer hover:opacity-80" />}
                         {contact.type === 'both' && <Facebook size={14} className="text-[#1877f2] opacity-50 cursor-pointer hover:opacity-80" />}
                         <MessageCircle size={14} className="text-[#0084ff] opacity-50 cursor-pointer hover:opacity-80" />
                         <Instagram size={14} className="text-[#e4405f] opacity-50 cursor-pointer hover:opacity-80" />
                    </div>

                    {/* Last Interaction */}
                    <div className="w-24 text-right flex-shrink-0">
                         <span className="text-xs text-gray-500 font-medium">{contact.lastInteracted}</span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsView;