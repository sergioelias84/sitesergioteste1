import React from 'react';
import { ShieldCheck, CheckCircle2, Globe, Search, Mail, Lock, Layers, ArrowRight, Building2, MonitorSmartphone } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, buildInstitutionalQuoteUrl, buildWhatsAppUrl } from '../../utils/whatsapp';

// Local generated asset
import institucionalImg from '../../assets/images/institucional_corporate_ui_1791329641957.jpg';

export const InstitutionalTab: React.FC = () => {
  const packages = [
    {
      title: 'Institucional Start',
      badge: 'Empresas em Crescimento',
      price: '997',
      period: 'pagamento único',
      description: 'Estrutura sólida para prestadores de serviço e pequenas empresas que precisam de presença profissional no Google.',
      features: [
        'Até 4 páginas (Home, Sobre, Serviços, Contato)',
        'Design moderno 100% responsivo',
        'Integração com WhatsApp e formulário de contato',
        'Configuração de 2 e-mails corporativos',
        'Certificado de Segurança SSL incluso',
        'Otimização básica de SEO para o Google',
        'Entrega em até 8 dias úteis'
      ],
      ctaText: 'Contratar Institucional Start',
      highlighted: false,
    },
    {
      title: 'Institucional Pro Corporativo',
      badge: 'Recomendado ⭐',
      price: '1.697',
      period: 'pagamento único',
      description: 'O site corporativo completo para empresas que querem passar autoridade inquestionável e atrair clientes pelo Google.',
      features: [
        'Até 7 páginas completas personalizadas',
        'Estrutura com Catálogo de Serviços/Produtos detalhado',
        'Área de Cases de Sucesso e Depoimentos de Clientes',
        'Blog / Notícias integrado para geração de conteúdo',
        'Configuração de até 5 e-mails corporativos profissionais',
        'SEO Técnico Avançado (palavras-chave da sua cidade)',
        'Integração Google Maps, WhatsApp Flutuante e Redes',
        'Painel facilitado para edição de textos e imagens',
        'Entrega em até 12 dias úteis'
      ],
      ctaText: 'Garantir Institucional Pro',
      highlighted: true,
    },
    {
      title: 'Institucional Enterprise',
      badge: 'Escala & Grandes Empresas',
      price: '2.497',
      period: 'pagamento único',
      description: 'Para indústrias, franquias, construtoras e médias/grandes empresas que precisam de arquitetura de software sob medida.',
      features: [
        'Páginas ilimitadas e arquitetura sob medida',
        'Área de múltiplos departamentos e unidades/filiais',
        'Módulo dinâmico de projetos com filtros avançados',
        'Painel administrativo completo sob medida',
        'E-mails corporativos ilimitados configurados',
        'Auditoria completa de segurança e performance 100%',
        'Treinamento em vídeo para sua equipe gerenciar o site',
        'Suporte técnico e manutenção prioritária por 3 meses'
      ],
      ctaText: 'Solicitar Projeto Enterprise',
      highlighted: false,
    }
  ];

  return (
    <div className="space-y-24 py-8">
      
      {/* Hero Sub-section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
              <span>Sede Digital Definitiva</span>
              <span aria-hidden="true">·</span>
              <span>Posicionamento & Autoridade</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Sites Institucionais que Consolidam a <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Autoridade da Sua Marca.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Quando um cliente em potencial ouve falar da sua empresa, a primeira coisa que ele faz é pesquisar no Google. Um site institucional profissional, elegante e rápido é o diferencial entre ele fechar com você ou com seu concorrente.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildInstitutionalQuoteUrl('Pro Corporativo')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 transition-all flex items-center gap-2"
              >
                <span>Solicitar Site Institucional</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={buildWhatsAppUrl('Olá Sérgio! Gostaria de conversar sobre o desenvolvimento de um Site Institucional para a minha empresa.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-300 font-bold text-sm transition-all flex items-center gap-2"
              >
                <span>Falar no WhatsApp ({WHATSAPP_DISPLAY_NUMBER})</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/30 bg-[#0d1424] shadow-2xl shadow-emerald-950/70">
              <img
                src={institucionalImg}
                alt="Mockup de Site Institucional Corporativo Sergio SiteTech"
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0d1527]/90 backdrop-blur-md p-3.5 rounded-xl border border-emerald-500/30 flex items-center justify-between text-xs">
                <span className="text-emerald-300 font-mono">AUTORIDADE GOOGLE</span>
                <span className="text-cyan-300 font-bold font-mono">SEO OTIMIZADO 100%</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Features Bento Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
            Infraestrutura Completa
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Tudo o Que Sua Empresa Precisa no Mundo Digital
          </h2>
          <p className="text-slate-400 text-sm">
            Entregamos seu projeto pronto para usar, sem você precisar esquentar a cabeça com termos técnicos complicados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">SEO Google Otimizado</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Estruturação técnica de títulos, metatags, sitemap e schema markup para o Google indexar seu site e ranquear nas buscas da sua região.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">E-mails Corporativos</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Passe o dobro de credibilidade aos seus parceiros utilizando e-mails oficiais (ex: contato@suaempresa.com.br, financeiro@suaempresa.com.br).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-950 border border-blue-500/40 flex items-center justify-center text-blue-400">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Segurança & SSL Grátis</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Cadeado verde de segurança ativado para que os visitantes e navegadores identifiquem seu site como seguro e confiável.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-950 border border-teal-500/40 flex items-center justify-center text-teal-400">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Estrutura Multipáginas</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Home envolvente, página Sobre Nós com história e valores, catálogo detalhado de serviços e página de contato interativa.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
              <MonitorSmartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">100% Responsivo & Leve</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Funciona perfeitamente em telas gigantes de computadores, notebooks, tablets e em qualquer modelo de smartphone.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0e1628] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-950 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-display">Sem Códigos Pesados</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Construído com tecnologia moderna e rápida. Nada de templates pesados que travam ou quebram após atualizações.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <p className="text-xs font-mono uppercase text-emerald-400 font-semibold tracking-wider">
            Planos Institucionais
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Escolha o Pacote Ideal para Sua Empresa
          </h2>
          <p className="text-slate-400 text-sm">
            Condição facilitada em até 12x no cartão ou desconto especial à vista via Pix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-[#102422] to-[#0a181e] border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20 scale-105 z-10'
                  : 'bg-[#0d1424] border border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white font-display">{pkg.title}</h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                    pkg.highlighted ? 'bg-emerald-400 text-slate-950' : 'bg-slate-800 text-slate-300'
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
                    <span className="text-xs text-emerald-400 font-bold">R$</span>
                    <span className="text-4xl font-extrabold text-white font-display tabular-nums">{pkg.price}</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-0.5 block">{pkg.period} · em até 12x no cartão</span>
                </div>

                <div className="space-y-2.5">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">O que está incluso:</p>
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                        pkg.highlighted ? 'text-emerald-400' : 'text-cyan-400'
                      }`} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={buildInstitutionalQuoteUrl(pkg.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 ${
                    pkg.highlighted
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-400/25'
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
