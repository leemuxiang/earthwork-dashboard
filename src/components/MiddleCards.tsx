import React, { useState } from 'react';
import { MiddleCardConfig } from '../types';
import { 
  Database, ShieldCheck, Cpu, HardHat, Bot, UserCheck, 
  Box, Monitor, RotateCw, BarChart2, Truck, Wrench, Fuel, TrendingUp, CheckCircle,
  Layers, ChevronRight
} from 'lucide-react';

interface MiddleCardsProps {
  cards: MiddleCardConfig[];
}

export const MiddleCards: React.FC<MiddleCardsProps> = ({ cards }) => {
  const [activeCardCode, setActiveCardCode] = useState<string | null>(null);

  // Extract individual card configs safely
  const cardA = cards.find(c => c.code === 'A') || cards[0];
  const cardB = cards.find(c => c.code === 'B') || cards[1];
  const cardC = cards.find(c => c.code === 'C') || cards[2];
  const cardD = cards.find(c => c.code === 'D') || cards[3];
  const cardE = cards.find(c => c.code === 'E') || cards[4];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3 md:gap-4 items-stretch">
      
      {/* CARD A: 一套数据 (3 Cols / lg:col-span-3) */}
      <div className="lg:col-span-3 glass-card glass-card-hover p-4 rounded-2xl flex flex-col justify-between border border-white/80 shadow-sm relative overflow-hidden group">
        {/* Title Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-extrabold italic flex items-center justify-center text-sm shadow-sm">
            A
          </span>
          <div>
            <h2 className="text-base font-bold text-[#1677FF] tracking-wide flex items-center gap-1.5">
              一套数据
            </h2>
            <p className="text-[11px] text-slate-500 font-medium">所有系统实现一组数据全贯通</p>
          </div>
        </div>

        {/* 3D Database Cylinder & Feature Rings */}
        <div className="relative my-2 py-3 flex items-center justify-between px-1">
          
          {/* Left Features */}
          <div className="flex flex-col space-y-2 z-10 text-left">
            {cardA.data_center_feature?.left_features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/90 px-2 py-1 rounded-full border border-blue-100 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Center 3D Database Cylinder Visual */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Outer Rotating Glowing Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-blue-400/60 animate-spin-slow pointer-events-none" />
            <div className="absolute inset-2 rounded-full border border-blue-200 animate-spin-reverse pointer-events-none" />
            
            {/* Database Stack Illustration */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center relative transform hover:scale-105 transition-transform overflow-hidden border border-blue-200">
                <img 
                  src="/images/card_a_database.png" 
                  alt="3D Database" 
                  className="w-full h-full object-cover rounded-[14px]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Features */}
          <div className="flex flex-col space-y-2 z-10 text-right">
            {cardA.data_center_feature?.right_features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white/90 px-2 py-1 rounded-full border border-blue-100 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>

        </div>

        <div className="text-[11px] text-center text-blue-800 bg-blue-50/80 rounded-lg py-1 px-2 border border-blue-100 font-medium">
          三维图数协同 · 一库到底
        </div>
      </div>

      {/* CARD B: 两个系统 (2.5 Cols / lg:col-span-2) */}
      <div className="lg:col-span-2 glass-card glass-card-hover p-4 rounded-2xl flex flex-col justify-between border border-white/80 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-extrabold italic flex items-center justify-center text-sm shadow-sm">
            B
          </span>
          <h2 className="text-base font-bold text-[#1677FF] tracking-wide">
            两个系统
          </h2>
        </div>

        {/* 2 Systems Grid */}
        <div className="grid grid-cols-2 gap-2 my-auto">
          {/* System 1: BIM土方调配系统 */}
          <div className="flex flex-col items-center text-center p-2 rounded-xl bg-blue-50/60 border border-blue-100/80 hover:bg-blue-50 transition-all shadow-2xs group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-blue-200 mb-1.5 group-hover:scale-105 transition-transform shadow-2xs">
              <img 
                src="/images/card_b_bim.png" 
                alt="BIM System" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              BIM土方<br />调配系统
            </span>
          </div>

          {/* System 2: 智慧工地系统 */}
          <div className="flex flex-col items-center text-center p-2 rounded-xl bg-indigo-50/60 border border-indigo-100/80 hover:bg-indigo-50 transition-all shadow-2xs group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-indigo-200 mb-1.5 group-hover:scale-105 transition-transform shadow-2xs">
              <img 
                src="/images/card_b_site.png" 
                alt="Smart Site" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-xs font-bold text-slate-800 leading-tight">
              智慧工地<br />系统
            </span>
          </div>
        </div>

        <div className="text-[11px] text-center text-slate-500 mt-2">
          BIM规划算量 + 工地全景巡检
        </div>
      </div>

      {/* CARD C: 三人协同 (2.5 Cols / lg:col-span-2) */}
      <div className="lg:col-span-2 glass-card glass-card-hover p-4 rounded-2xl flex flex-col justify-between border border-white/80 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-extrabold italic flex items-center justify-center text-sm shadow-sm">
            C
          </span>
          <h2 className="text-base font-bold text-[#1677FF] tracking-wide">
            三人协同
          </h2>
        </div>

        {/* 3 Roles Avatar Row */}
        <div className="grid grid-cols-3 gap-1.5 my-auto text-center">
          
          {/* Role 1: 自然人 */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-all shadow-2xs group">
            <div className="relative w-11 h-11 rounded-full border-2 border-amber-400 mb-1 group-hover:scale-110 transition-transform overflow-hidden shadow-2xs">
              <img 
                src="/images/card_c_human.png" 
                alt="Human Engineer" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-[11px] font-bold text-slate-800">自然人</span>
          </div>

          {/* Role 2: 数字人 */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-all shadow-2xs group">
            <div className="relative w-11 h-11 rounded-full border-2 border-blue-500 mb-1 group-hover:scale-110 transition-transform overflow-hidden shadow-2xs">
              <img 
                src="/images/card_c_digital_human.png" 
                alt="Digital Human" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-[11px] font-bold text-slate-800">数字人</span>
          </div>

          {/* Role 3: 机器人 */}
          <div className="flex flex-col items-center p-1.5 rounded-xl bg-blue-50/50 border border-blue-100 hover:bg-blue-50 transition-all shadow-2xs group">
            <div className="relative w-11 h-11 rounded-full border-2 border-indigo-500 mb-1 group-hover:scale-110 transition-transform overflow-hidden shadow-2xs">
              <img 
                src="/images/card_c_robot.png" 
                alt="Robot" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
            </div>
            <span className="text-[11px] font-bold text-slate-800">机器人</span>
          </div>

        </div>

        <div className="text-[11px] text-center text-slate-500 mt-2">
          人机智合 · 全天候精细运作
        </div>
      </div>

      {/* CARD D: 四个阶段 PDCA (2.5 Cols / lg:col-span-2) */}
      <div className="lg:col-span-2 glass-card glass-card-hover p-4 rounded-2xl flex flex-col justify-between border border-white/80 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-extrabold italic flex items-center justify-center text-sm shadow-sm">
            D
          </span>
          <h2 className="text-xs font-bold text-[#1677FF] tracking-tight">
            四个阶段 (PDCA循环)
          </h2>
        </div>

        {/* PDCA Circular Glowing Diagram */}
        <div className="relative w-full h-32 my-auto flex items-center justify-center">
          {/* Outer Orbit */}
          <div className="absolute w-28 h-28 rounded-full border-2 border-dashed border-blue-300/80 animate-spin-slow" />
          
          {/* Center Hub */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-0.5 shadow-md shadow-blue-500/20 flex items-center justify-center z-10 text-center">
            <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center p-1 text-blue-700">
              <span className="text-[9px] font-extrabold text-blue-800 leading-none">PDCA</span>
              <span className="text-[7px] text-slate-600 mt-0.5 leading-none scale-90">循环改进</span>
              <span className="text-[7px] text-blue-600 leading-none scale-75">持续提升</span>
            </div>
          </div>

          {/* 4 Phase Nodes */}
          {/* Node 1: Top - Plan */}
          <div className="absolute -top-1 px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold shadow-2xs flex items-center gap-0.5 z-20">
            计划 Plan
          </div>
          {/* Node 2: Right - Do */}
          <div className="absolute right-0 px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold shadow-2xs flex items-center gap-0.5 z-20">
            执行 Do
          </div>
          {/* Node 3: Bottom - Check */}
          <div className="absolute -bottom-1 px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold shadow-2xs flex items-center gap-0.5 z-20">
            检查 Check
          </div>
          {/* Node 4: Left - Action */}
          <div className="absolute left-0 px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold shadow-2xs flex items-center gap-0.5 z-20">
            处理 Action
          </div>
        </div>

        <div className="text-[11px] text-center text-slate-500">
          闭环复盘 · 质量与进度管控
        </div>
      </div>

      {/* CARD E: 五大应用 (3 Cols / lg:col-span-3) */}
      <div className="lg:col-span-3 glass-card glass-card-hover p-4 rounded-2xl flex flex-col justify-between border border-white/80 shadow-sm relative overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-extrabold italic flex items-center justify-center text-sm shadow-sm">
            E
          </span>
          <h2 className="text-base font-bold text-[#1677FF] tracking-wide">
            五大应用
          </h2>
        </div>

        {/* 5 Applications Grid (Top 3, Bottom 2) */}
        <div className="space-y-1.5 my-auto">
          {/* Top Row: 3 Applications */}
          <div className="grid grid-cols-3 gap-1.5">
            {/* 1: 精准算量 */}
            <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-blue-50/60 border border-blue-100 hover:bg-blue-50 transition-all text-center group shadow-2xs">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[11px] font-bold text-slate-800">精准算量</span>
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white text-[8px] font-extrabold flex items-center justify-center">量</span>
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-blue-200 group-hover:scale-105 transition-transform shadow-2xs">
                <img src="/images/card_e_quantity.png" alt="精准算量" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* 2: 智慧调运 */}
            <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-blue-50/60 border border-blue-100 hover:bg-blue-50 transition-all text-center group shadow-2xs">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[11px] font-bold text-slate-800">智慧调运</span>
                <span className="w-3.5 h-3.5 rounded-full bg-blue-600 text-white text-[8px] font-extrabold flex items-center justify-center">调</span>
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-blue-200 group-hover:scale-105 transition-transform shadow-2xs">
                <img src="/images/card_e_dispatch.png" alt="智慧调运" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* 3: 挖卡协同 */}
            <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-emerald-50/60 border border-emerald-100 hover:bg-emerald-50 transition-all text-center group shadow-2xs">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[11px] font-bold text-slate-800">挖卡协同</span>
                <span className="w-3.5 h-3.5 rounded-full bg-emerald-600 text-white text-[8px] font-extrabold flex items-center justify-center">协</span>
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-emerald-200 group-hover:scale-105 transition-transform shadow-2xs">
                <img src="/images/card_e_synergy.png" alt="挖卡协同" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Bottom Row: 2 Applications */}
          <div className="grid grid-cols-2 gap-1.5">
            {/* 4: 油耗费控 */}
            <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-amber-50/60 border border-amber-100 hover:bg-amber-50 transition-all text-center group shadow-2xs">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[11px] font-bold text-slate-800">油耗费控</span>
                <span className="w-3.5 h-3.5 rounded-full bg-amber-600 text-white text-[8px] font-extrabold flex items-center justify-center">油</span>
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-amber-200 group-hover:scale-105 transition-transform shadow-2xs">
                <img src="/images/card_e_fuel.png" alt="油耗费控" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>

            {/* 5: 进度纠偏 */}
            <div className="flex flex-col items-center justify-between p-1.5 rounded-xl bg-indigo-50/60 border border-indigo-100 hover:bg-indigo-50 transition-all text-center group shadow-2xs">
              <div className="flex items-center gap-1 mb-1">
                <span className="text-[11px] font-bold text-slate-800">进度纠偏</span>
                <span className="w-3.5 h-3.5 rounded-full bg-indigo-600 text-white text-[8px] font-extrabold flex items-center justify-center">偏</span>
              </div>
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-indigo-200 group-hover:scale-105 transition-transform shadow-2xs">
                <img src="/images/card_e_progress.png" alt="进度纠偏" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] text-center text-slate-500 mt-1">
          五维智控 · 精准提升施工效益
        </div>
      </div>

    </div>
  );
};
