import React, { useState } from 'react';
import { Logo } from './Logo';
import { TabType } from '../types';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquareCode, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Início' },
    { id: 'leadpages', label: 'Lead Pages' },
    { id: 'institucional', label: 'Sites Institucionais' },
    { id: 'portfolio', label: 'Portfólio' },
    { id: 'calculator', label: 'Simulador de Orçamento' },
    { id: 'faq', label: 'Dúvidas' },
  ];

  const handleTabSelect = (tab: TabType) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Brand Zone */}
          <div onClick={() => handleTabSelect('overview')}>
            <Logo size="md" />
          </div>

          {/* Zone 2: 4-6 clean text navigation links / dynamic tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#0f172a]/60 p-1.5 rounded-full border border-slate-800">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabSelect(item.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildWhatsAppUrl('Olá Sérgio! Gostaria de solicitar um orçamento para o meu site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold tracking-wide shadow-md shadow-emerald-500/20 hover:from-emerald-400 hover:to-teal-400 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              <span>WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={() => handleTabSelect('calculator')}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-cyan-300 text-xs font-bold transition-all whitespace-nowrap"
            >
              Simular Valor
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg border border-slate-800 bg-[#0f172a]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0c1222] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2 mb-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabSelect(item.id)}
                  className={`p-2.5 text-xs font-medium rounded-lg text-left transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={buildWhatsAppUrl('Olá Sérgio! Gostaria de um orçamento para meu site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Falar no WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
