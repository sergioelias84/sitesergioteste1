import React, { useState } from 'react';
import { MessageCircle, Phone, X, CheckCheck, Sparkles, Send } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, WHATSAPP_OWNER_NAME, buildWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleQuickSend = (text: string) => {
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMsg.trim()) {
      window.open(buildWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    } else {
      window.open(buildWhatsAppUrl(customMsg), '_blank', 'noopener,noreferrer');
    }
    setCustomMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Contact Drawer Popup */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0c1222] border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 overflow-hidden backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-4 text-white relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white/80 hover:text-white p-1 rounded-full hover:bg-black/20 transition-colors"
              aria-label="Fechar popover do WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-emerald-300 flex items-center justify-center font-bold text-lg shadow-inner">
                  SE
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#0c1222] animate-pulse" />
              </div>
              <div>
                <h4 className="font-semibold text-base leading-tight flex items-center gap-1.5">
                  {WHATSAPP_OWNER_NAME}
                  <span className="text-[10px] bg-emerald-400/20 text-emerald-200 px-1.5 py-0.5 rounded font-mono">DEV</span>
                </h4>
                <p className="text-xs text-emerald-100 flex items-center gap-1 mt-0.5">
                  <CheckCheck className="w-3.5 h-3.5 text-emerald-200" />
                  Online agora · Resposta rápida
                </p>
                <p className="text-[11px] font-mono text-emerald-200 font-medium">
                  {WHATSAPP_DISPLAY_NUMBER}
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#0c1222]">
            <div className="bg-[#131d35] p-3 rounded-xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
              👋 Olá! Sou o Sérgio. Quer acelerar suas vendas com uma <strong className="text-cyan-400">Lead Page</strong> ou criar um <strong className="text-emerald-400">Site Institucional</strong> de respeito? Clique abaixo ou digite sua mensagem:
            </div>

            {/* Quick action buttons */}
            <div className="space-y-1.5">
              <button
                type="button"
                onClick={() => handleQuickSend('Olá Sérgio! Gostaria de um orçamento para uma Lead Page de alta conversão.')}
                className="w-full text-left text-xs px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-cyan-950/60 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 transition-all flex items-center justify-between group"
              >
                <span>🚀 Orçamento para Lead Page</span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickSend('Olá Sérgio! Quero criar um Site Institucional profissional para minha empresa.')}
                className="w-full text-left text-xs px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 transition-all flex items-center justify-between group"
              >
                <span>🏢 Orçamento para Site Institucional</span>
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>

              <button
                type="button"
                onClick={() => handleQuickSend('Olá Sérgio! Gostaria de tirar algumas dúvidas técnicas sobre prazos e hospedagem.')}
                className="w-full text-left text-xs px-3 py-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 transition-all flex items-center justify-between group"
              >
                <span>💬 Dúvidas sobre Prazos & Tecnologias</span>
                <span className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </button>
            </div>

            {/* Custom message input form */}
            <form onSubmit={handleSubmit} className="pt-2 border-t border-slate-800/80 flex items-center gap-2">
              <input
                type="text"
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="flex-1 bg-slate-900/90 border border-slate-700 text-xs text-white rounded-lg px-3 py-2 focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg transition-colors flex items-center justify-center shrink-0"
                title="Enviar para o WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Main Button */}
      <div className="relative group flex items-center gap-3">
        {/* Tooltip on desktop */}
        <div className="hidden md:flex items-center gap-2 bg-[#0d1424] text-slate-200 text-xs px-3 py-1.5 rounded-full border border-emerald-500/40 shadow-lg pointer-events-none group-hover:scale-105 transition-transform">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Falar no WhatsApp: <strong>{WHATSAPP_DISPLAY_NUMBER}</strong></span>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir conversa no WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/30"
        >
          {/* Animated pulsing outer halo */}
          <span className="absolute inset-0 rounded-full bg-emerald-400/40 animate-ping opacity-75" />
          
          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <MessageCircle className="w-7 h-7 relative z-10 fill-white/20" />
          )}

          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 text-[9px] font-bold text-black items-center justify-center">
              1
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};
