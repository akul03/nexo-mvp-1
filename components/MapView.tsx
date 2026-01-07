import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const MapView: React.FC = () => {
  return (
    <div className="flex-1 h-full bg-gray-50 flex flex-col relative animate-in fade-in duration-300 overflow-hidden">
      
      {/* Floating Overlay Card */}
      <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-gray-100 w-80">
         <h2 className="text-lg font-bold text-gray-900 mb-2">Network Map</h2>
         <div className="space-y-3">
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                     <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Bengaluru</p>
                    <p className="text-xs text-gray-500">124 Contacts</p>
                  </div>
               </div>
               <span className="text-xs font-semibold text-gray-400">30%</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                     <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">San Francisco</p>
                    <p className="text-xs text-gray-500">45 Contacts</p>
                  </div>
               </div>
               <span className="text-xs font-semibold text-gray-400">11%</span>
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                     <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New York</p>
                    <p className="text-xs text-gray-500">12 Contacts</p>
                  </div>
               </div>
               <span className="text-xs font-semibold text-gray-400">3%</span>
            </div>
         </div>
      </div>

      {/* Map Placeholder Visualization */}
      <div className="flex-1 w-full h-full bg-[#eef2f6] relative flex items-center justify-center overflow-hidden">
         {/* Abstract Map Dots */}
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
         
         {/* Simulated Continent Shapes (CSS Art for simplicity) */}
         <div className="w-[800px] h-[400px] relative opacity-20">
             {/* Simple shapes representing landmasses */}
             <div className="absolute top-10 left-10 w-40 h-32 bg-gray-400 rounded-full blur-3xl"></div>
             <div className="absolute top-20 right-40 w-60 h-40 bg-gray-400 rounded-full blur-3xl"></div>
             <div className="absolute bottom-10 left-60 w-32 h-32 bg-gray-400 rounded-full blur-3xl"></div>
         </div>

         {/* Pins */}
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="relative">
                 <div className="absolute -top-20 -left-40 group cursor-pointer">
                     <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg border-2 border-white animate-pulse"></div>
                     <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Bengaluru</div>
                 </div>
                 <div className="absolute -top-40 -left-80 group cursor-pointer">
                     <div className="w-4 h-4 bg-orange-500 rounded-full shadow-lg border-2 border-white"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">San Francisco</div>
                 </div>
                 <div className="absolute -top-30 -left-60 group cursor-pointer">
                     <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg border-2 border-white"></div>
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">New York</div>
                 </div>
             </div>
         </div>

         <div className="absolute bottom-8 right-8 flex gap-2">
             <button className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 text-gray-600"><Navigation size={20} /></button>
         </div>
      </div>
    </div>
  );
};

export default MapView;