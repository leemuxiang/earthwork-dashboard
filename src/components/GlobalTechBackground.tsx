import React from 'react';

export const GlobalTechBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-[#F6F8FC] via-[#EEF3FA] to-[#E5EDF7] text-[#1F2329] antialiased overflow-x-hidden selection:bg-blue-500 selection:text-white">
      {/* Background SVG Grid & Network Ambient Glows */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 tech-grid-pattern opacity-60" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] left-[30%] w-[700px] h-[700px] bg-indigo-400/10 rounded-full blur-[160px]" />

        {/* Ambient SVG Tech Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1677FF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#85B5FF" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#003AA8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M 0 100 Q 400 200 800 100 T 1600 100" fill="none" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M 0 350 Q 600 250 1200 350 T 2000 350" fill="none" stroke="url(#gridGrad)" strokeWidth="1" />
          <path d="M 0 700 Q 500 800 1000 700 T 2000 700" fill="none" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto p-3 sm:p-4 md:p-6 space-y-4 md:space-y-6">
        {children}
      </div>
    </div>
  );
};
