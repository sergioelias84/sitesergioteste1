import React from 'react';
import { ArrowRight, CheckCircle2, Zap, Target, ShieldCheck, Flame, Users, Clock, Award, Sparkles } from 'lucide-react';
import { TabType } from '../../types';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl, buildLeadPageQuoteUrl, buildInstitutionalQuoteUrl } from '../../utils/whatsapp';

// Local generated assets
import heroAgencyImg from '../../assets/images/hero_tech_agency_1791329621772.jpg';
import leadpageImg from '../../assets/images/leadpage_modern_ui_1791329631634.jpg';
import institucionalImg from '../../assets/images/institucional_corporate_ui_1791329641957.jpg';

interface OverviewTabProps {
  setActiveTab: (tab: TabType) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-24 py-6">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean Tagline kicker (no pills) */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-cyan-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>Sergio SiteTech · Soluções Web de Alta Performance</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-display text-balance">
                Páginas que Convertem. <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                  Sites que Vendem 24/7.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Crie presença digital de alto impacto. Desenvolvemos <strong className="text-white">Lead Pages cirúrgicas</strong> para tráfego pago e <strong className="text-white">Sites Institucionais modernos</strong> que posicionam sua marca como líder do seu segmento.
              </p>

              {/* Quick Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Carregamento ultrarrápido em &lt; 0.8s</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Integração direta com WhatsApp & Pixel</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Copy persuasiva focada em conversão</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% otimizado para celulares e Google SEO</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={buildWhatsAppUrl('Olá Sérgio! Quero tirar meu projeto do papel e criar uma Lead Page / Site Institucional.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Falar no WhatsApp ({WHATSAPP_DISPLAY_NUMBER})</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  onClick={() => setActiveTab('calculator')}
                  className="px-6 py-3.5 rounded-xl bg-[#131d33] hover:bg-[#1a2745] border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
                >
                  <span>Simular Orçamento Online</span>
                  <Zap className="w-4 h-4 text-cyan-400" />
                </button>
              </div>

              {/* Quantified claim adjacency */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span>Atendimento direto com o desenvolvedor</span>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-semibold">Entrega garantida a partir de 3 dias</span>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0d1424] shadow-2xl shadow-cyan-950/80 group">
                <img
                  src={heroAgencyImg}
                  alt="Sergio SiteTech - Estúdio de desenvolvimento moderno e futurista"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-cyan-400 font-mono">ESTRUTURA HIGH-TECH</p>
                    <p className="text-sm font-bold text-white font-display">Tecnologia, Design & Conversão</p>
                  </div>
                  <div className="text-right">
                    <span className="text-emerald-400 font-bold text-sm font-mono tabular-nums">+340%</span>
                    <p className="text-[10px] text-slate-400">Leads gerados</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Quantitative Proof Section */}
      <section className="border-y border-slate-800 bg-[#0c1220]/60 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-display tabular-nums">&lt; 0.8s</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tempo de Carregamento</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display tabular-nums">+340%</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Média de Aumento em Leads</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-display tabular-nums">100%</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Responsivo em Smartphones</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl sm:text-4xl font-extrabold text-teal-300 font-display tabular-nums">3 a 5 Dias</p>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Prazo Médio de Entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Lead Page vs Site Institucional */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Qual a melhor solução para sua empresa?
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Lead Pages vs. Sites Institucionais
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ambas são ferramentas poderosas. Entenda o objetivo de cada uma e escolha a que melhor atende o momento do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Lead Pages */}
          <div className="rounded-2xl bg-[#0e1628] border border-cyan-500/30 p-8 flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300 shadow-xl shadow-cyan-950/20 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-inner">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Lead Page (Landing Page)</h3>
                    <p className="text-xs text-cyan-400 font-mono">FOCO: CONVERSÃO IMEDIATA & TRÁFEGO PAGO</p>
                  </div>
                </div>
              </div>

              {/* Showcase preview image */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#080d19]">
                <img 
                  src={leadpageImg} 
                  alt="Mockup de Lead Page moderna de alta conversão"
                  className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Página única estruturada psicologicamente para direcionar o visitante a tomar uma única decisão: <strong className="text-cyan-300">chamar no WhatsApp ou preencher seus dados</strong>. Sem distrações ou links externos que fazem o cliente ir embora.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Projetada para anúncios no Google Ads, Meta Ads e TikTok</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Carregamento instantâneo em menos de 1 segundo</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Botão flutuante de WhatsApp com mensagem configurada</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Instalação do Pixel para rastrear cada centavo investido</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Investimento a partir de</span>
                <span className="text-xl font-bold text-cyan-400 font-mono">R$ 497,00</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('leadpages')}
                  className="px-4 py-2.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-colors"
                >
                  Conhecer Detalhes
                </button>
                <a
                  href={buildLeadPageQuoteUrl('Alta Conversão')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-cyan-500/20"
                >
                  Contratar via WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Sites Institucionais */}
          <div className="rounded-2xl bg-[#0e1628] border border-emerald-500/30 p-8 flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300 shadow-xl shadow-emerald-950/20 group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-inner">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Site Institucional Completo</h3>
                    <p className="text-xs text-emerald-400 font-mono">FOCO: AUTORIDADE, BRANDING & POSICIONAMENTO GOOGLE</p>
                  </div>
                </div>
              </div>

              {/* Showcase preview image */}
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#080d19]">
                <img 
                  src={institucionalImg} 
                  alt="Mockup de Site Institucional moderno e corporativo"
                  className="w-full h-48 object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                A sede virtual completa da sua empresa. Estruturado com múltiplas páginas, catálogo completo de serviços, página Quem Somos, integração com Google Maps e <strong className="text-emerald-300">SEO avançado para buscas orgânicas no Google</strong>.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Estrutura multipáginas (Home, Serviços, Sobre, Contato)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Otimização SEO para ser encontrado no Google</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>E-mails profissionais personalizados (@suaempresa.com.br)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Certificado SSL com cadeado de segurança verde incluso</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-800 mt-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-400 block">Investimento a partir de</span>
                <span className="text-xl font-bold text-emerald-400 font-mono">R$ 997,00</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('institucional')}
                  className="px-4 py-2.5 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-colors"
                >
                  Conhecer Detalhes
                </button>
                <a
                  href={buildInstitutionalQuoteUrl('Start')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
                >
                  Contratar via WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Process: 4 Steps of Development */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <p className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Processo Transparente e Sem Burocracia
          </p>
          <h2 className="text-3xl font-bold text-white font-display">
            Como Tiramos Seu Site do Papel em 4 Passos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-3 relative">
            <span className="text-3xl font-mono font-extrabold text-cyan-500/30">01</span>
            <h4 className="text-base font-bold text-white font-display">Briefing & Estratégia</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Alinhamos seus objetivos, público-alvo, serviços chave e montamos o roteiro persuasivo do site.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-3 relative">
            <span className="text-3xl font-mono font-extrabold text-cyan-500/30">02</span>
            <h4 className="text-base font-bold text-white font-display">Design Futurista & UI</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Construímos um layout moderno, de alto impacto visual e totalmente adaptado para telas de celular.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-3 relative">
            <span className="text-3xl font-mono font-extrabold text-emerald-500/30">03</span>
            <h4 className="text-base font-bold text-white font-display">Código & Integrações</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Desenvolvimento ágil com código limpo, configuração do WhatsApp direto, Pixel de rastreio e SEO.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0d1424] border border-slate-800 space-y-3 relative">
            <span className="text-3xl font-mono font-extrabold text-emerald-500/30">04</span>
            <h4 className="text-base font-bold text-white font-display">Publicação & Suporte</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Colocamos seu site no ar em seu domínio próprio, testamos a velocidade e entregamos tudo pronto para você vender.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Proof Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1628] to-[#0a101d] border border-slate-800 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <p className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
              Resultados Reais dos Nossos Clientes
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Quem Fez, Aprovou e Está Vendendo Todos os Dias
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#070b14] border border-slate-800/80 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                ★★★★★
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Contratei a Lead Page com o Sérgio e no mesmo dia que ativei meus anúncios no Meta comecei a receber mensagens qualificadas no WhatsApp. O site abre instantaneamente no celular!"
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs">
                <p className="font-bold text-white">Rodrigo Mendes</p>
                <p className="text-slate-400">Clínica Odontológica · Florianópolis</p>
                <p className="text-emerald-400 font-mono text-[11px] mt-1">+180% de novos agendamentos</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#070b14] border border-slate-800/80 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                ★★★★★
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Nosso escritório precisava de um site institucional de alto nível para fechar contratos com grandes empresas. O resultado superou muito o que esperávamos. Visual futurista e muito sério."
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs">
                <p className="font-bold text-white">Camila Vasconcelos</p>
                <p className="text-slate-400">Consultoria Tributária & B2B</p>
                <p className="text-cyan-400 font-mono text-[11px] mt-1">Autoridade e fechamento de 4 contratos</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#070b14] border border-slate-800/80 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                ★★★★★
              </div>
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Entrega em menos de 5 dias úteis sem enrolação. O Sérgio é extremamente técnico e solícito, configurou até a integração com o WhatsApp comercial e o Pixel de conversão."
              </p>
              <div className="pt-2 border-t border-slate-800 text-xs">
                <p className="font-bold text-white">Marcelo Silveira</p>
                <p className="text-slate-400">Engenharia Solar & Energia</p>
                <p className="text-emerald-400 font-mono text-[11px] mt-1">ROI atingido na 1ª semana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Action Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950 via-[#0d1d3a] to-blue-950 border border-cyan-500/30 p-8 sm:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Pronto para transformar visitantes em clientes compradores?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Não perca mais vendas por ter um site lento ou antigo. Fale agora mesmo com o Sérgio e tenha uma proposta personalizada em menos de 10 minutos.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildWhatsAppUrl('Olá Sérgio! Quero conversar com você sobre um novo site para o meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-xl shadow-emerald-500/30 flex items-center gap-2"
              >
                <span>Chamar Sérgio no WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
