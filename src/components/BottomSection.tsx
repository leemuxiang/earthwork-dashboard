import React, { useState } from 'react';
import { BottomFooterConfig, GeologicalLayer } from '../types';
import { 
  ArrowRight, MapPin, Map, LineChart, Shield, CloudDownload, 
  Link, Search, Bell, ShieldCheck, ChevronLeft, Wifi, Battery, Signal, Info, CheckCircle,
  Truck, Navigation, Smartphone, Activity
} from 'lucide-react';

interface BottomSectionProps {
  data: BottomFooterConfig;
}

export const BottomSection: React.FC<BottomSectionProps> = ({ data }) => {
  const { bottom_left_flow, bottom_right_app } = data;
  const [selectedLayer, setSelectedLayer] = useState<GeologicalLayer | null>(null);
  const [hoveredStepIndex, setHoveredStepIndex] = useState<number | null>(null);
  const [phoneViewMode, setPhoneViewMode] = useState<'image' | 'interactive'>('image');

  const phoneChart = bottom_right_app.right_content.device_mockup.screen_content.sections[0]?.chart;

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
      
      {/* LEFT COLUMN: 每一方土生命周期追溯 (7 Cols / ~60%) */}
      <div className="lg:col-span-7 glass-card p-4 sm:p-5 rounded-2xl flex flex-col justify-between border border-white/80 shadow-sm relative overflow-hidden">
        
        {/* Header Title */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-blue-100/60">
          <h2 className="text-base sm:text-lg font-extrabold text-[#1F2329] tracking-tight flex items-center gap-2">
            <span className="w-2.5 h-6 bg-blue-600 rounded-full inline-block" />
            {bottom_left_flow.title}
          </h2>
          <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60">
            全过程数据链条
          </span>
        </div>

        {/* 5 Sequential Stage Cards with Arrows */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 my-2 relative">
          {bottom_left_flow.steps.map((step, idx) => (
            <div 
              key={idx} 
              onMouseEnter={() => setHoveredStepIndex(idx)}
              onMouseLeave={() => setHoveredStepIndex(null)}
              className={`relative flex flex-col items-center justify-between p-2.5 rounded-xl border transition-all cursor-pointer group ${
                hoveredStepIndex === idx 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 transform -translate-y-1' 
                  : 'bg-white/80 hover:bg-white text-slate-800 border-blue-100 shadow-2xs'
              }`}
            >
              {/* Stage Badge */}
              <div className="flex items-center gap-1 mb-1.5">
                <span className={`w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center ${
                  hoveredStepIndex === idx ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'
                }`}>
                  {step.num || `0${idx + 1}`}
                </span>
                <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded ${
                  hoveredStepIndex === idx ? 'bg-blue-500 text-white' : 'bg-blue-50 text-blue-600'
                }`}>
                  {step.sub_tag}
                </span>
              </div>

              {/* Title */}
              <span className="text-xs font-bold mb-2 text-center whitespace-nowrap">
                {step.stage}
              </span>

              {/* Visual Icon Illustration */}
              <div className={`w-full h-16 rounded-lg flex items-center justify-center overflow-hidden border relative ${
                hoveredStepIndex === idx ? 'border-blue-500 shadow-md scale-102' : 'border-blue-100/80 shadow-2xs'
              }`}>
                {/* Image Asset for Each Stage */}
                {idx === 0 && (
                  <img src="/images/flow_excavation.png" alt="山体开挖" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {idx === 1 && (
                  <img src="/images/flow_muck_transport.png" alt="渣土运输" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {idx === 2 && (
                  <img src="/images/card_e_dispatch.png" alt="智能卡车" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {idx === 3 && (
                  <img src="/images/flow_gps_route.png" alt="GPS导航轨迹" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                {idx === 4 && (
                  <img src="/images/flow_terminal.png" alt="终端监控" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent flex items-end justify-center pb-0.5">
                  <span className="text-[9px] font-bold text-white text-shadow-sm">
                    {idx === 0 && '山体开挖'}
                    {idx === 1 && '渣土运输'}
                    {idx === 2 && '智能卡车'}
                    {idx === 3 && 'GPS导航'}
                    {idx === 4 && '终端监控'}
                  </span>
                </div>
              </div>

              {/* Arrow Connector on Right (for non-last items) */}
              {idx < bottom_left_flow.steps.length - 1 && (
                <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 border border-white flex items-center justify-center shadow-2xs">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 5 Bottom Features Pill Bar */}
        <div className="mt-4 pt-3 border-t border-blue-100/60 grid grid-cols-2 sm:grid-cols-5 gap-2">
          {bottom_left_flow.bottom_features.map((feat, idx) => (
            <div key={idx} className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-gradient-to-r from-blue-50/80 to-white border border-blue-100/80 shadow-2xs text-xs font-bold text-slate-700 hover:border-blue-300 transition-colors">
              {idx === 0 && <CloudDownload className="w-4 h-4 text-blue-600" />}
              {idx === 1 && <Link className="w-4 h-4 text-blue-600" />}
              {idx === 2 && <Search className="w-4 h-4 text-blue-600" />}
              {idx === 3 && <Bell className="w-4 h-4 text-amber-500 animate-bounce" />}
              {idx === 4 && <ShieldCheck className="w-4 h-4 text-emerald-600" />}
              <span className="whitespace-nowrap">{feat.text}</span>
            </div>
          ))}
        </div>

      </div>

      {/* RIGHT COLUMN: 土方透视APP & Smartphone Mockup (5 Cols / ~40%) */}
      <div className="lg:col-span-5 glass-card p-4 sm:p-5 rounded-2xl border border-white/80 shadow-sm relative overflow-hidden bg-gradient-to-br from-white/90 via-blue-50/30 to-white/90">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* App Left Text & Intro (5 Cols) */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-3">
            <div>
              {/* Parallelogram Tag & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="transform -skew-x-12 bg-blue-600 text-white text-xs font-black px-2.5 py-0.5 rounded-sm shadow-sm inline-block">
                  <span className="transform skew-x-12 inline-block">现场应用</span>
                </span>
                <h3 className="text-lg font-black text-[#1F2329] tracking-tight">
                  {bottom_right_app.left_content.app_name}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-normal bg-white/70 p-2.5 rounded-xl border border-blue-100/70 shadow-2xs">
                {bottom_right_app.left_content.description}
              </p>
            </div>

            {/* 4 Feature Buttons Grid */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              {bottom_right_app.left_content.feature_icons.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-2 rounded-xl bg-blue-50/70 hover:bg-blue-100/70 border border-blue-200/50 transition-all group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-blue-600 mb-1 group-hover:scale-110 transition-transform shadow-2xs">
                    {idx === 0 && <MapPin className="w-4 h-4 text-blue-600" />}
                    {idx === 1 && <Map className="w-4 h-4 text-blue-600" />}
                    {idx === 2 && <LineChart className="w-4 h-4 text-blue-600" />}
                    {idx === 3 && <Shield className="w-4 h-4 text-red-500" />}
                  </div>
                  <span className="text-[11px] font-bold text-slate-800">{item.name}</span>
                </div>
              ))}
            </div>

            <div className="text-[11px] text-blue-700 font-semibold bg-blue-100/50 px-2 py-1 rounded-lg text-center border border-blue-200/50">
              📱 移动终端 · 毫米级红线复核
            </div>
          </div>

          {/* Smartphone Device Mockup (7 Cols) */}
          <div className="md:col-span-7 flex justify-center py-1">
            <div className="relative w-full max-w-[280px] bg-slate-900 rounded-[38px] p-2.5 shadow-2xl shadow-slate-900/40 border-[3px] border-slate-700/80">
              
              {/* Smartphone Notch / Camera */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-blue-500/80" />
                </div>
              </div>

              {/* Screen Shell */}
              <div className="w-full bg-slate-950 rounded-[30px] overflow-hidden text-slate-100 border border-slate-800 text-[11px] flex flex-col h-[420px] relative">
                
                {/* Status Bar */}
                <div className="flex justify-between items-center px-4 pt-2.5 pb-1 text-[10px] text-slate-400 font-sans z-20">
                  <span className="font-bold text-white">09:41</span>
                  <div className="flex items-center gap-1.5">
                    <Signal className="w-3 h-3 text-slate-300" />
                    <Wifi className="w-3 h-3 text-slate-300" />
                    <Battery className="w-3.5 h-3.5 text-slate-300" />
                  </div>
                </div>

                {/* App Title Header Bar */}
                <div className="px-3 py-1.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs font-bold text-white z-20">
                  <ChevronLeft className="w-4 h-4 text-blue-400" />
                  <span className="truncate max-w-[170px]">埃塞绍夫图国际机场场坪工程</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                </div>

                {/* Notice Alert Banner & Mode Switcher */}
                <div className="bg-amber-950/60 border-b border-amber-800/50 px-2 py-1 text-[9px] text-amber-200/90 flex items-center justify-between gap-1">
                  <div className="flex items-center gap-1 truncate">
                    <Info className="w-3 h-3 text-amber-400 shrink-0" />
                    <span className="truncate">理论模型计算，现场实测复核</span>
                  </div>
                  <button 
                    onClick={() => setPhoneViewMode(phoneViewMode === 'image' ? 'interactive' : 'image')}
                    className="text-[8px] bg-blue-600 hover:bg-blue-500 text-white font-bold px-1.5 py-0.5 rounded shadow-2xs shrink-0 transition-colors"
                  >
                    {phoneViewMode === 'image' ? '切换交互剖面' : '切换渲染大图'}
                  </button>
                </div>

                {/* Content Shell: Image View OR Interactive View */}
                {phoneViewMode === 'image' ? (
                  <div className="flex-1 relative overflow-hidden bg-slate-900 group">
                    <img 
                      src="/images/phone_app_screen.png" 
                      alt="APP 渲染示意图" 
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-[10px]">
                      <div className="flex justify-between items-center text-white font-bold">
                        <span>埃塞绍夫图机场土方APP</span>
                        <span className="text-cyan-400 text-[9px] bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">渲染图还原</span>
                      </div>
                      <p className="text-[8px] text-slate-300 mt-0.5">三维地质剖面与精细交工面扫描</p>
                    </div>
                  </div>
                ) : (
                  /* Scrollable Geological Section Content */
                  <div className="p-2.5 overflow-y-auto custom-scrollbar flex-1 space-y-2">
                    
                    {/* Section Title */}
                    <div className="flex justify-between items-end pb-1 border-b border-slate-800">
                      <div>
                        <h4 className="font-bold text-xs text-white flex items-center gap-1">
                          <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                          定位扫描地质
                        </h4>
                        <p className="text-[9px] text-slate-400">当前位置附近地质柱状与交工面</p>
                      </div>
                      <span className="text-[9px] font-bold text-cyan-400 bg-cyan-950 px-1.5 py-0.5 rounded border border-cyan-800">
                        GPS: 1890-1915m
                      </span>
                    </div>

                    {/* Geological Column Graph */}
                    {phoneChart && (
                      <div className="relative pt-2 pb-1">
                        
                        {/* Elevation Badges Left/Right */}
                        <div className="flex justify-between items-center mb-1 text-[9px]">
                          <span className="px-1.5 py-0.5 bg-rose-950 text-rose-300 font-bold rounded border border-rose-800">
                            挖方 +17.88m
                          </span>
                          <span className="px-1.5 py-0.5 bg-rose-950 text-rose-300 font-bold rounded border border-rose-800">
                            航测面差 +17.95m
                          </span>
                        </div>

                        {/* Geological Layers Container with Elevation Scales */}
                        <div className="flex gap-2 items-stretch min-h-[210px] my-1">
                          
                          {/* Elevation Tick Scale (Y-Axis) */}
                          <div className="flex flex-col justify-between text-[8px] text-slate-400 font-mono py-0.5 text-right w-8 select-none">
                            <span>1915m</span>
                            <span className="text-emerald-400 font-bold">1912.94m</span>
                            <span>1910m</span>
                            <span>1905m</span>
                            <span>1900m</span>
                            <span className="text-purple-400 font-bold">1894.98m</span>
                            <span>1890m</span>
                            <span>1885m</span>
                          </div>

                          {/* Layer Color Blocks Column */}
                          <div className="flex-1 relative rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex flex-col justify-between">
                            
                            {/* Green Dashed Line: 航测面 1912.94m */}
                            <div className="absolute top-[8%] inset-x-0 border-t-2 border-dashed border-emerald-400 z-20 flex justify-end pr-1">
                              <span className="bg-emerald-950 text-emerald-300 text-[8px] px-1 font-bold rounded -mt-2">
                                航测面 1912.94m
                              </span>
                            </div>

                            {/* Purple Dashed Line: 设计交工面 1894.98m */}
                            <div className="absolute bottom-[24%] inset-x-0 border-t-2 border-dashed border-purple-400 z-20 flex justify-end pr-1">
                              <span className="bg-purple-950 text-purple-300 text-[8px] px-1 font-bold rounded -mt-2">
                                设计交工面 1894.98m
                              </span>
                            </div>

                            {/* Geological Layer Blocks */}
                            {phoneChart.geological_layers.map((layer, idx) => (
                              <div 
                                key={idx}
                                onClick={() => setSelectedLayer(layer)}
                                style={{ backgroundColor: layer.color }}
                                className="relative flex items-center justify-between px-2 py-1 text-white font-mono text-[9px] hover:brightness-125 transition-all cursor-pointer border-b border-slate-900/40 group"
                              >
                                <div className="flex items-center gap-1 font-bold text-shadow">
                                  <span>{layer.layer_code}</span>
                                </div>

                                <div className="flex items-center gap-2 text-[8px] opacity-90 font-sans">
                                  <span>厚: {layer.thickness}</span>
                                  <span>高: {layer.elevation}</span>
                                </div>
                              </div>
                            ))}

                          </div>

                        </div>

                        {/* Selected Layer Info Detail Modal inside Phone */}
                        {selectedLayer && (
                          <div className="mt-2 p-2 bg-slate-900 rounded-lg border border-blue-500/50 text-[10px] text-slate-200 animate-fadeIn">
                            <div className="flex justify-between items-center mb-0.5">
                              <span className="font-bold text-cyan-300">地质层 [{selectedLayer.layer_code}] 详情</span>
                              <button onClick={() => setSelectedLayer(null)} className="text-slate-400 hover:text-white text-xs">✕</button>
                            </div>
                            <p className="text-[9px] text-slate-300">{selectedLayer.description}</p>
                            <div className="flex justify-between text-[9px] text-slate-400 mt-1">
                              <span>层厚: {selectedLayer.thickness}</span>
                              <span>高程: {selectedLayer.elevation}</span>
                            </div>
                          </div>
                        )}

                      </div>
                    )}

                  </div>
                )}

                {/* Bottom Home Indicator */}
                <div className="py-1 flex justify-center bg-slate-950">
                  <div className="w-24 h-1 bg-slate-600 rounded-full" />
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
