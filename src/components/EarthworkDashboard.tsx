import React from 'react';
import { DashboardData } from '../types';
import { initialDashboardData } from '../data/mockData';
import { GlobalTechBackground } from './GlobalTechBackground';
import { HeaderBanner } from './HeaderBanner';
import { MiddleCards } from './MiddleCards';
import { BottomSection } from './BottomSection';

export interface EarthworkDashboardProps {
  data?: DashboardData;
  className?: string;
  onAppAction?: (actionName: string) => void;
}

export const EarthworkDashboard: React.FC<EarthworkDashboardProps> = ({ 
  data = initialDashboardData,
  className = "" 
}) => {
  return (
    <div className={`earthwork-dashboard-container ${className}`}>
      <GlobalTechBackground>
        {/* Top Header Banner Section */}
        <HeaderBanner data={data.top_header_banner} />

        {/* Middle Five Cards Row (一套数据、两个系统、三人协同、四个阶段、五大应用) */}
        <MiddleCards cards={data.middle_cards} />

        {/* Bottom Section (生命周期追溯流程 + 土方透视APP & 手机Mockup) */}
        <BottomSection data={data.bottom_footer} />
      </GlobalTechBackground>
    </div>
  );
};

export default EarthworkDashboard;
