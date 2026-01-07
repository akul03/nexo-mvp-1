import React, { useState } from 'react';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import TopBar from './components/TopBar';
import HomeView from './components/HomeView';
import ContactsView from './components/ContactsView';
import RemindersView from './components/RemindersView';
import TimelineView from './components/TimelineView';
import MapView from './components/MapView';
import CopilotView from './components/CopilotView';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  return (
    <div className="flex h-screen w-full bg-white text-gray-900 font-sans overflow-hidden">
      
      {/* Left Sidebar */}
      <SidebarLeft 
        currentView={currentView}
        onChangeView={setCurrentView}
      />

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 bg-white">
        
        {/* Top Navigation Bar */}
        <TopBar />

        {/* Dynamic Main View */}
        <main className="flex-1 relative overflow-hidden flex">
          
          {/* Central Content */}
          <div className="flex-1 flex flex-col h-full overflow-hidden relative border-r border-gray-100">
             {currentView === ViewState.HOME && <HomeView />}
             {currentView === ViewState.CONTACTS_LINKEDIN && <ContactsView title="LinkedIn Connections" isLinkedIn={true} />}
             {currentView === ViewState.CONTACTS && <ContactsView title="All Contacts" isLinkedIn={false} />}
             {currentView === ViewState.REMINDERS && <RemindersView />}
             {currentView === ViewState.TIMELINE && <TimelineView />}
             {currentView === ViewState.MAP && <MapView />}
             {currentView === ViewState.COPILOT && <CopilotView />}
          </div>

          {/* Right Sidebar - Sticky/Fixed within the flex container */}
          <SidebarRight />

        </main>
      </div>

    </div>
  );
};

export default App;