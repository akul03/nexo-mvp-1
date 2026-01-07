import React from 'react';

const HomeView: React.FC = () => {
  return (
    <div className="flex-1 h-full flex flex-col items-center justify-center bg-white p-8 animate-in fade-in duration-500">
      
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Waving Hand Icon or Illustration */}
        <div className="text-6xl mb-4 animate-bounce duration-[2000ms]">
          👋
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-semibold text-gray-900">
            Good afternoon, Pratham
          </h1>
          <p className="text-gray-500 text-sm">
            Keep your relationships warm and meaningful. <br/> Get the most out of your network with the next actions.
          </p>
        </div>

        <div className="space-y-3 pt-4">
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md group">
             <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 opacity-70 group-hover:opacity-100" />
             Connect your Google account
          </button>
          
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 font-medium py-3 px-4 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md group">
             <svg className="w-5 h-5 text-[#0077b5] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
             Connect your LinkedIn account
          </button>

          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-600 text-sm py-3 px-4 rounded-xl transition-all duration-200 border-dashed">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
             Import your contacts
          </button>
        </div>

        <div className="pt-4">
             <button className="text-gray-400 text-xs hover:text-gray-600 flex items-center justify-center gap-1 mx-auto">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                 Complete the check list
             </button>
        </div>
      </div>
    </div>
  );
};

export default HomeView;