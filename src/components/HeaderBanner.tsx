import React from 'react';
import { HeaderBannerConfig } from '../types';
import { Sparkles, TrendingUp, Truck, CheckCircle2 } from 'lucide-react';

interface HeaderBannerProps {
  data: HeaderBannerConfig;
}

export const HeaderBanner: React.FC<HeaderBannerProps> = ({ data }) => {
  const { top_left_decoration, top_center_main, top_right_dashboard } = data;

  return (
    <div className="w-full glass-card rounded-2xl overflow-hidden border border-white/90 shadow-lg shadow-blue-900/5 transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[200px]">
        
        {/* TOP LEFT: Digital Network World Map (3 Cols / 25%) */}
        <div className="lg:col-span-3 relative flex items-center justify-center p-4 overflow-hidden bg-gradient-to-r from-blue-50/80 via-white/40 to-transparent border-b lg:border-b-0 lg:border-r border-blue-100/50 min-h-[180px]">
          {/* Global Network Image background */}
          <div className="absolute inset-0 pointer-events-none opacity-85">
            <img 
              src="/images/header_global_map.png" 
              alt="Global Digital Network Map" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-blue-900/20 to-blue-50/90 mix-blend-multiply" />
          </div>

          <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-1 py-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-blue-800 border border-blue-200 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
              全球数字化网络
            </span>
            <p className="text-xs text-blue-950 font-bold drop-shadow-sm bg-white/70 px-2 py-0.5 rounded-md mt-1">Global Digital Construction Network</p>
          </div>
        </div>

        {/* TOP CENTER: Main Title & Summary (6 Cols / 50%) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center p-5 md:p-6 space-y-3 bg-white/40">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1F2329] tracking-tight glow-blue-text font-sans">
              {top_center_main.title}
            </h1>
            <p className="text-sm md:text-base font-semibold text-[#1677FF] mt-1 tracking-wide">
              {top_center_main.subtitle}
            </p>
          </div>

          <div className="glass-card bg-gradient-to-r from-blue-50/90 via-white/80 to-blue-50/90 p-3 sm:p-3.5 rounded-xl border border-blue-200/60 shadow-sm text-xs sm:text-sm text-[#1F2329] leading-relaxed max-w-3xl mx-auto">
            <span className="font-bold text-blue-700 mr-1.5">【核心要义】</span>
            {top_center_main.summary_text}
          </div>
        </div>

        {/* TOP RIGHT: Construction Background & Glowing Metrics Dashboard (3 Cols / 25%) */}
        <div className="lg:col-span-3 relative flex flex-col justify-between p-3 overflow-hidden rounded-r-2xl bg-slate-900 text-white min-h-[190px] group">
          {/* Construction Site Background Image & Clear Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <img 
              src="/images/header_construction_site.png" 
              alt="Construction Excavator Site" 
              className="w-full h-full object-cover object-center opacity-85 scale-105 group-hover:scale-100 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient to ensure text readability without obscuring the excavator */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-900/40" />
          </div>

          {/* Top Status Tag */}
          <div className="relative z-10 flex justify-between items-center text-[10px]">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-slate-900/80 border border-blue-400/40 text-blue-200 font-bold backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              智慧工地施工现场
            </span>
            <span className="text-[9px] text-slate-300 font-mono bg-black/40 px-1.5 py-0.5 rounded backdrop-blur-sm">
              LIVE 4K
            </span>
          </div>

          {/* Glowing Metrics Container (Compact half-height at bottom) */}
          <div className="relative z-10 grid grid-cols-3 gap-1.5 text-center mt-auto pt-2">
            
            {/* Metric 1: 土方总量 */}
            <div className="bg-slate-900/80 backdrop-blur-md p-1.5 rounded-lg flex flex-col justify-between items-center border border-white/15 hover:border-blue-400/60 transition-all group/item">
              <span className="text-[10px] text-blue-200 font-medium whitespace-nowrap">
                {top_right_dashboard.metrics.items[0]?.label}
              </span>
              <span className="text-xs sm:text-sm font-black text-white tracking-tight text-shadow-sm group-hover/item:text-blue-300 transition-colors">
                {top_right_dashboard.metrics.items[0]?.value}
              </span>
              
              {/* Glowing Line Trend Chart */}
              <div className="w-full h-4 mt-0.5">
                <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="lineGlow" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#1677FF" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#1677FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 20 Q 20 14, 40 12 T 80 6 L 100 2 L 100 25 L 0 25 Z" fill="url(#lineGlow)" />
                  <path d="M 0 20 Q 20 14, 40 12 T 80 6 L 100 2" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="100" cy="2" r="2.5" fill="#60A5FA" className="animate-ping" />
                  <circle cx="100" cy="2" r="2" fill="#FFFFFF" />
                </svg>
              </div>
            </div>

            {/* Metric 2: 今日运输 */}
            <div className="bg-slate-900/80 backdrop-blur-md p-1.5 rounded-lg flex flex-col justify-between items-center border border-white/15 hover:border-blue-400/60 transition-all group/item">
              <span className="text-[10px] text-blue-200 font-medium whitespace-nowrap">
                {top_right_dashboard.metrics.items[1]?.label}
              </span>
              <span className="text-xs sm:text-sm font-black text-white tracking-tight text-shadow-sm group-hover/item:text-blue-300 transition-colors">
                {top_right_dashboard.metrics.items[1]?.value}
              </span>

              {/* Glowing Bar Chart Sparkline */}
              <div className="w-full h-4 mt-0.5 flex items-end justify-between px-0.5 gap-0.5">
                {[35, 55, 45, 75, 60, 90, 100].map((h, i) => (
                  <div 
                    key={i} 
                    style={{ height: `${h}%` }} 
                    className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xs shadow-[0_0_4px_rgba(34,211,238,0.5)]" 
                  />
                ))}
              </div>
            </div>

            {/* Metric 3: 合规率 (Ring Gauge) */}
            <div className="bg-slate-900/80 backdrop-blur-md p-1.5 rounded-lg flex flex-col justify-between items-center border border-white/15 hover:border-blue-400/60 transition-all group/item">
              <span className="text-[10px] text-blue-200 font-medium whitespace-nowrap">
                {top_right_dashboard.metrics.items[2]?.label}
              </span>
              
              {/* Circular Gauge */}
              <div className="relative w-8 h-8 my-0.5 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-700"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.8)]"
                    strokeDasharray="98.7, 100"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute text-[9px] font-extrabold text-white">
                  98.7%
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
