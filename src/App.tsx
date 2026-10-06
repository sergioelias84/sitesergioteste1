/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { OverviewTab } from './components/tabs/OverviewTab';
import { LeadPagesTab } from './components/tabs/LeadPagesTab';
import { InstitutionalTab } from './components/tabs/InstitutionalTab';
import { PortfolioTab } from './components/tabs/PortfolioTab';
import { QuoteCalculatorTab } from './components/tabs/QuoteCalculatorTab';
import { FaqTab } from './components/tabs/FaqTab';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { SupportBot } from './components/SupportBot';
import { TabType } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col relative selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Futuristic Background Atmospheric Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Radial Gradient Blobs */}
        <div className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[130px]" />
        <div className="absolute top-[35%] -right-[15%] w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-emerald-600/10 blur-[130px]" />
        
        {/* Subtle Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Main Top Navigation */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Dynamic Content Views */}
      <main className="flex-1 relative z-10">
        {activeTab === 'overview' && <OverviewTab setActiveTab={setActiveTab} />}
        {activeTab === 'leadpages' && <LeadPagesTab />}
        {activeTab === 'institucional' && <InstitutionalTab />}
        {activeTab === 'portfolio' && <PortfolioTab />}
        {activeTab === 'calculator' && <QuoteCalculatorTab />}
        {activeTab === 'faq' && <FaqTab />}
      </main>

      {/* Floating WhatsApp Button (Bottom-Right, 48 98468-5643) */}
      <WhatsAppFloatingButton />

      {/* Customer Service Support Bot (Bottom-Left) */}
      <SupportBot />

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
}
