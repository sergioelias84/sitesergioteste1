import React, { useState } from 'react';
import { Target, CheckCircle2, Zap, ArrowRight, Smartphone, Sparkles, TrendingUp, BarChart3, HelpCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, buildLeadPageQuoteUrl, buildWhatsAppUrl } from '../../utils/whatsapp';

// Local generated assets
import leadpageImg from '../../assets/images/leadpage_modern_ui_1791329631634.jpg';
import mobilePreviewImg from '../../assets/images/mobile_lead_tech_preview_1791329650534.jpg';

export const LeadPagesTab: React.FC = () => {
  // Interactive Conversion Calculator State
  const [dailyClicks, setDailyClicks] = useState<number>(100);
  const [avgTicket, setAvgTicket] = useState<number>(150);

  // Math for comparison: Old Page (1.5% conversion) vs Lead Page SiteTech (6.0% conversion)
  const oldLeads = Math.round(dailyClicks * 0.015 * 30);
  const newLeads = Math.round(dailyClicks * 0.06 * 30);
  const additionalLeads = newLeads - oldLeads;
  const potentialAdditionalRevenue = additionalLeads * avgTicket * 0.2; // 20% close rate on leads

  const packages = [
    {
      title: 'Lead Page Start',
      badge: 'Essencial',
      price: '497',
      period: 'pagamento único',
      description: 'Ideal para validar produtos, serviços locais e campanhas pontuais no Google e Instagram.',
      features: [
        'Página de alta conversão (One-Page)',
        'Carregamento ultra veloz (< 1s)',
        'Design 100% responsivo para celulares',
        'Botão direto para o seu WhatsApp',
        'Formulário simples de captura de leads',
        'Certificado de Segurança SSL incluso',
        'Entrega rápida em até 5 dias úteis'
      ],
      ctaText: 'Contratar Lead Page Start',
      highlighted: false,
    },
    {
      title: 'Lead Page Pro Alta Conversão',
      badge: 'Mais Vendido ⭐',
      price: '797',
      period: 'pagamento único',
      description: 'O pacote definitivo para quem investe em tráfego pago e precisa maximizar o ROI de cada clique.',
      features: [
        'Tudo do plano Start incluso',
        'Copywriting persuasivo profissional escrito sob medida',
        'Instalação de Pixel (Meta Ads, Google Ads e TikTok)',
        'Rastreamento avançado de cliques no WhatsApp',
        'Gatilhos de urgência e prova social destacados',
        'Otimização Core Web Vitals (nota 90+ no Google)',
        'Testes A/B e suporte prioritário',
        'Entrega rápida em até 4 dias úteis'
      ],
      ctaText: 'Garantir Lead Page Pro',
      highlighted: true,
    },
    {
      title: 'Lead Page Funil & Vendas',
      badge: 'Completo',
      price: '1.297',
      period: 'pagamento único',
      description: 'Para infoprodutos, cursos, lançamentos e esteiras com página de vendas e página de agradecimento.',
      features: [
        'Página de Vendas de Alta Conversão',
        'Página de Obrigado com Pixel de Conversão de Compra',
        'Integração com Hotmart, Kiwify, Eduzz ou CRM',
        'Player de Vídeo de Vendas (VSL) otimizado',
        'Seção interativa de dúvidas e garantia',
        'Copywriting completo com storytelling persuasivo',
        'Configuração de Domínio e DNS guiada',
        'Entrega expressa'
      ],
      ctaText: 'Contratar Funil Completo',
      highlighted: false,
    }
  ];

  return (
    <div className="space-y-24 py-8">
      
      {/* Hero Sub-section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
              <span>Solução Cirúrgica para Anúncios</span>
              <span aria-hidden="true">·</span>
              <span>Tráfego Pago que Dá Retorno</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Lead Pages Projetadas para <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
                Explodir Suas Conversões.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Você está investindo dinheiro em tráfego pago no Meta Ads ou Google Ads? Se mandar os cliques para um site comum e lento, <strong>está rasgando dinheiro</strong>. Nossas Lead Pages capturam o visitante no segundo em que ele clica e guiam direto para a compra ou contato no seu WhatsApp.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildLeadPageQuoteUrl('Alta Conversão')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 transition-all flex items-center gap-2"
              >
                <span>Solicitar Minha Lead Page</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={buildWhatsAppUrl('Olá Sérgio! Gostaria de tirar dúvidas sobre o funcionamento das Lead Pages.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-slate-200 hover:text-emerald-300 font-bold text-sm transition-all flex items-center gap-2"
              >
                <span>Tirar Dúvida no WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#0d1424] shadow-2xl shadow-cyan-950/70">
              <img
                src={leadpageImg}
                alt="Interface de Lead Page de Alta Conversão Sergio SiteTech"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0d1527]/90 backdrop-blur-md p-3.5 rounded-xl border border-cyan-500/30 flex items-center justify-between text-xs">
                <span className="text-cyan-300 font-mono">CONVERSÃO COMPROVADA</span>
                <span className="text-emerald-400 font-bold font-mono">+400% ROI médio</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Anatomy of high-converting page */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Arquitetura de Alta Performance
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            A Anatomia de uma Lead Page Vendedora
          </h2>
          <p className="text-slate-400 text-sm">
            Cada elemento gráfico e textual é posicionado com precisão neuro-comportamental para reduzir atrito e maximizar o clique no seu WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Velocidade Extrema (&lt; 0.8s)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Mais de 53% dos usuários abandonam páginas que demoram mais de 3 segundos para carregar no 4G/5G. Nossas Lead Pages abrem quase que instantaneamente.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Mobile-First Total</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              92% das pessoas navegam por smartphones. Nossas páginas contam com botões ergonômicos no alcance do polegar e leitura sem esforço.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-950 border border-sky-500/40 flex items-center justify-center text-sky-400">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Rastreamento de Leads & Pixel</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Instalamos os pixels do Meta, Google Ads e TikTok configurando o evento de conversão sempre que um cliente clicar para conversar no WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive ROI Calculator for Paid Traffic */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0c1322] via-[#0f1b34] to-[#0a1120] border border-cyan-500/40 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-semibold">
                <TrendingUp className="w-4 h-4" />
                <span>Simulador de Retorno sobre Investimento (ROI)</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Veja o impacto de uma Lead Page no seu faturamento mensal
              </h3>
              
              <p className="text-xs text-slate-300 leading-relaxed">
                Ajuste os controles abaixo com a sua média de cliques recebidos e ticket médio para ver a diferença entre um site comum e uma Lead Page de Alta Conversão Sergio SiteTech:
              </p>

              {/* Slider 1: Cliques por dia */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Cliques no seu anúncio por dia:</span>
                  <span className="text-cyan-400 font-bold font-mono">{dailyClicks} cliques/dia</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={dailyClicks}
                  onChange={(e) => setDailyClicks(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>

              {/* Slider 2: Ticket Médio */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300">Valor médio do seu produto ou serviço:</span>
                  <span className="text-emerald-400 font-bold font-mono">R$ {avgTicket.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={avgTicket}
                  onChange={(e) => setAvgTicket(Number(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
              </div>
            </div>

            {/* Result box */}
            <div className="lg:col-span-6 bg-[#070b14] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-800">
                <div>
                  <p className="text-[11px] text-slate-400">Site comum (1.5% conv.)</p>
                  <p className="text-xl font-bold text-slate-300 font-mono tabular-nums">{oldLeads} leads/mês</p>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <p className="text-[11px] text-cyan-400 font-semibold">Lead Page SiteTech (6.0%)</p>
                  <p className="text-xl font-bold text-emerald-400 font-mono tabular-nums">{newLeads} leads/mês</p>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs text-slate-400">Leads extras estimados por mês:</span>
                <p className="text-3xl font-extrabold text-cyan-400 font-display tabular-nums">
                  +{additionalLeads} novos contatos no WhatsApp
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1">
                <span className="text-xs text-emerald-300 font-semibold">Potencial de Faturamento Extra Estimado:</span>
                <p className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
                  + R$ {potentialAdditionalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} /mês
                </p>
                <p className="text-[10px] text-emerald-200/70">
                  *Considerando uma taxa conservadora de fechamento de 20% sobre os leads extras gerados.
                </p>
              </div>

              <a
                href={buildLeadPageQuoteUrl(`Estimativa ${dailyClicks} cliques/dia`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                <span>Garantir essa performance no meu negócio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
            Investimento Transparente
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Planos de Lead Pages Sob Medida
          </h2>
          <p className="text-slate-400 text-sm">
            Sem mensalidades surpresa ou taxas escondidas. O site é seu para sempre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-[#101b33] to-[#0a1224] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 scale-105 z-10'
                  : 'bg-[#0d1424] border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-display">{pkg.title}</h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    pkg.highlighted ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-slate-300'
                  }`}>
                    {pkg.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                  {pkg.description}
                </p>

                <div className="pb-4 border-b border-slate-800">
                  <span className="text-xs text-slate-400 block">A partir de</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-xs text-cyan-400 font-bold">R$</span>
                    <span className="text-4xl font-extrabold text-white font-display tabular-nums">{pkg.price}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{pkg.period} · em até 12x no cartão</span>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">O que está incluso:</p>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pkg.highlighted ? 'text-cyan-400' : 'text-emerald-400'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={buildLeadPageQuoteUrl(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-400/25'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  <span>{pkg.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
