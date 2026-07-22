/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import EarthworkDashboard from './components/EarthworkDashboard';
import { initialDashboardData } from './data/mockData';
import { DashboardData } from './types';
import { Code, RefreshCw, Maximize2, Minimize2, Check, Copy, Eye, Sliders } from 'lucide-react';

export default function App() {
  const [dashboardData, setDashboardData] = useState<DashboardData>(initialDashboardData);
  const [showJsonModal, setShowJsonModal] = useState(false);
  const [showEmbedModal, setShowEmbedModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLiveUpdating, setIsLiveUpdating] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Live simulation effect for real-time truck count and earthwork metrics
  useEffect(() => {
    if (!isLiveUpdating) return;

    const interval = setInterval(() => {
      setDashboardData(prev => {
        const currentTrucks = parseInt(prev.top_header_banner.top_right_dashboard.metrics.items[1].value) || 328;
        const newTrucks = currentTrucks + Math.floor(Math.random() * 2);
        
        const updatedItems = [...prev.top_header_banner.top_right_dashboard.metrics.items];
        updatedItems[1] = {
          ...updatedItems[1],
          value: newTrucks.toString()
        };

        return {
          ...prev,
          top_header_banner: {
            ...prev.top_header_banner,
            top_right_dashboard: {
              ...prev.top_header_banner.top_right_dashboard,
              metrics: {
                ...prev.top_header_banner.top_right_dashboard.metrics,
                items: updatedItems
              }
            }
          }
        };
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isLiveUpdating]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const sampleEmbedCode = `import React from 'react';
import EarthworkDashboard from './components/EarthworkDashboard';

export function MyProjectView() {
  return (
    <div className="w-full min-h-screen">
      <EarthworkDashboard />
    </div>
  );
}`;

  const copyEmbedCode = () => {
    navigator.clipboard.writeText(sampleEmbedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] flex flex-col font-sans text-slate-800">
      
      {/* Top Embedded App Control Toolbar */}
      <header className="bg-white/90 backdrop-blur-md text-slate-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/80 shadow-2xs z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white shadow-2xs">
            土
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-slate-900 flex items-center gap-2">
              土方数智化管控平台
              <span className="text-[10px] bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-200">
                Light Theme · React 组件
              </span>
            </h1>
            <p className="text-[11px] text-slate-500">浅色大屏数智化展板</p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 text-xs">
          {/* Live Data Simulation Toggle */}
          <button
            onClick={() => setIsLiveUpdating(!isLiveUpdating)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all font-semibold ${
              isLiveUpdating 
                ? 'bg-blue-50 border-blue-200 text-blue-700' 
                : 'bg-slate-50 border-slate-200 text-slate-500'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLiveUpdating ? 'animate-spin text-blue-600' : ''}`} />
            {isLiveUpdating ? '实时数据联动中' : '模拟实时已暂停'}
          </button>

          {/* Embed Code Modal Toggle */}
          <button
            onClick={() => setShowEmbedModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold transition-colors shadow-2xs"
          >
            <Code className="w-3.5 h-3.5 text-blue-600" />
            组件嵌入代码
          </button>

          {/* View Raw JSON Spec Toggle */}
          <button
            onClick={() => setShowJsonModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold transition-colors shadow-2xs"
          >
            <Sliders className="w-3.5 h-3.5 text-amber-600" />
            查看 JSON 配置
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-2xs"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            {isFullscreen ? '退出全屏' : '全屏大屏'}
          </button>
        </div>
      </header>

      {/* Main React Earthwork Dashboard Component */}
      <main className="flex-1 w-full">
        <EarthworkDashboard data={dashboardData} />
      </main>

      {/* JSON Spec View Modal */}
      {showJsonModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 text-slate-100 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col border border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-amber-400" />
                界面数据与结构配置 JSON
              </h3>
              <button 
                onClick={() => setShowJsonModal(false)}
                className="text-slate-400 hover:text-white text-sm bg-slate-800 px-2 py-1 rounded"
              >
                ✕ 关闭
              </button>
            </div>
            <div className="p-4 overflow-y-auto custom-scrollbar flex-1 bg-slate-950/50">
              <pre className="text-xs font-mono text-cyan-300 leading-relaxed whitespace-pre-wrap">
                {JSON.stringify(dashboardData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Embed Code Modal */}
      {showEmbedModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 text-slate-100 rounded-2xl max-w-2xl w-full border border-slate-800 shadow-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-950">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Code className="w-4 h-4 text-cyan-400" />
                如何嵌入到您的 React 组件中
              </h3>
              <button 
                onClick={() => setShowEmbedModal(false)}
                className="text-slate-400 hover:text-white text-sm bg-slate-800 px-2 py-1 rounded"
              >
                ✕ 关闭
              </button>
            </div>
            <div className="p-5 space-y-4 bg-slate-950/50">
              <p className="text-xs text-slate-300 leading-relaxed">
                本界面已被封装为纯粹的 React 组件 <code className="text-cyan-300 bg-slate-800 px-1 py-0.5 rounded">&lt;EarthworkDashboard /&gt;</code>，您可以轻松将其导入并嵌入到项目的任意 UI 位置或弹窗中：
              </p>
              
              <div className="relative bg-slate-900 rounded-xl p-3 border border-slate-800">
                <button
                  onClick={copyEmbedCode}
                  className="absolute top-3 right-3 flex items-center gap-1 text-[11px] bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-1 rounded transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? '已复制' : '复制代码'}
                </button>
                <pre className="text-xs font-mono text-blue-300 overflow-x-auto p-1 leading-relaxed">
                  {sampleEmbedCode}
                </pre>
              </div>

              <div className="text-[11px] text-slate-400 bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1">
                <p className="font-bold text-slate-200">支持的 Props 参数：</p>
                <p>• <code className="text-cyan-300">data?: DashboardData</code> - 可选，自定义顶层与中底层卡片 JSON 数据</p>
                <p>• <code className="text-cyan-300">className?: string</code> - 可选，自定义外层 CSS 容器样式类</p>
                <p>• <code className="text-cyan-300">onAppAction?: (action) =&gt; void</code> - 可选，手机 Mockup 与应用按钮的点击事件回调</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
