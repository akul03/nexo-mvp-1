import React, { useState } from 'react';
import { Bell, Plus, Calendar, CheckCircle2, Circle } from 'lucide-react';
import { MOCK_REMINDERS } from '../constants';

const RemindersView: React.FC = () => {
  const [reminders, setReminders] = useState(MOCK_REMINDERS);

  const toggleReminder = (id: number) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, done: !r.done } : r));
  };

  return (
    <div className="flex-1 h-full bg-white flex flex-col p-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Reminders</h1>
          <p className="text-gray-500">Stay on top of your relationships.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
          <Plus size={18} />
          Add Reminder
        </button>
      </div>

      {/* Content */}
      <div className="max-w-3xl">
        <div className="space-y-6">
          
          {/* Today Group */}
          <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Today</h2>
            <div className="space-y-2">
               {reminders.filter(r => r.due === 'Today').map(reminder => (
                 <div key={reminder.id} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors group cursor-pointer" onClick={() => toggleReminder(reminder.id)}>
                    <div className={`mt-0.5 ${reminder.done ? 'text-green-500' : 'text-gray-400 group-hover:text-blue-500'}`}>
                      {reminder.done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-gray-900 font-medium ${reminder.done ? 'line-through text-gray-400' : ''}`}>{reminder.text}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs text-gray-500 font-medium">Work</span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                           <Calendar size={12} /> Today
                        </span>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

           {/* Tomorrow & Beyond */}
           <div>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-6">Upcoming</h2>
            <div className="space-y-2">
               {reminders.filter(r => r.due !== 'Today').map(reminder => (
                 <div key={reminder.id} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-colors group cursor-pointer" onClick={() => toggleReminder(reminder.id)}>
                    <div className={`mt-0.5 ${reminder.done ? 'text-green-500' : 'text-gray-400 group-hover:text-blue-500'}`}>
                      {reminder.done ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                    </div>
                    <div className="flex-1">
                       <p className={`text-gray-900 font-medium ${reminder.done ? 'line-through text-gray-400' : ''}`}>{reminder.text}</p>
                       <div className="flex items-center gap-2 mt-2">
                         <span className={`text-xs flex items-center gap-1 ${reminder.due === 'Tomorrow' ? 'text-orange-500 font-medium' : 'text-gray-400'}`}>
                           <Calendar size={12} /> {reminder.due}
                        </span>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RemindersView;