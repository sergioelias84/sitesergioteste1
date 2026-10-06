import React from 'react';
import { Logo } from './Logo';
import { TabType } from '../types';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from '../utils/whatsapp';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const handleNav = (tab: TabType) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060a12] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div onClick={() => handleNav('overview')}>
              <Logo size="md" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Especialistas no desenvolvimento de Lead Pages de alta conversão para tráfego pago e Sites Institucionais modernos com design futurista, código ultrarrápido e foco total em gerar vendas.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de Entrega Ágil & Suporte Dedicado</span>
            </div>
          </div>

          {/* Soluções Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-display text-sm tracking-wide">
              Nossas Soluções
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNav('leadpages')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Lead Pages de Alta Conversão
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('institucional')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Sites Institucionais Completos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('portfolio')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Portfólio & Demonstrações
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('calculator')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Simulador de Orçamento
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('faq')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Dúvidas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Serviços Técnicos */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-display text-sm tracking-wide">
              Especialidades
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>• Otimização para Anúncios (Meta / Google)</li>
              <li>• Integração Avançada de WhatsApp</li>
              <li>• Carregamento Ultra-Rápido &lt; 0.8s</li>
              <li>• SEO Técnico para Buscas Orgânicas</li>
              <li>• Certificados de Segurança SSL</li>
              <li>• E-mails Corporativos (@suaempresa)</li>
            </ul>
          </div>

          {/* Contato Direto */}
          <div className="space-y-3">
            <h4 className="text-white font-bold font-display text-sm tracking-wide">
              Fale com o Sérgio
            </h4>
            <div className="space-y-2.5">
              <a
                href={buildWhatsAppUrl('Olá Sérgio! Gostaria de conversar com você.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-mono font-medium transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{WHATSAPP_DISPLAY_NUMBER}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href="mailto:sergioelias84@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span className="truncate">sergioelias84@gmail.com</span>
              </a>

              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Florianópolis · SC (Atendimento para todo o Brasil)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px]">
          <p>© {new Date().getFullYear()} Sergio SiteTech. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com tecnologia de alta performance para conversão de vendas.
          </p>
        </div>
      </div>
    </footer>
  );
};
