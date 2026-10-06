import React, { useState } from 'react';
import { Monitor, Smartphone, ExternalLink, Check, Sparkles, X, ArrowRight, TrendingUp } from 'lucide-react';
import { ProjectItem } from '../../types';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from '../../utils/whatsapp';

// Local generated assets
import heroAgencyImg from '../../assets/images/hero_tech_agency_1791329621772.jpg';
import leadpageImg from '../../assets/images/leadpage_modern_ui_1791329631634.jpg';
import institucionalImg from '../../assets/images/institucional_corporate_ui_1791329641957.jpg';
import mobilePreviewImg from '../../assets/images/mobile_lead_tech_preview_1791329650534.jpg';

export const PortfolioTab: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'leadpage' | 'institucional'>('all');
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: '1',
      title: 'Apex Soluções em Automação',
      category: 'leadpage',
      client: 'Apex Industrial',
      niche: 'B2B & Indústria 4.0',
      image: leadpageImg,
      metric: '+310% de Leads',
      metricLabel: 'Aumento em conversões no WhatsApp nos primeiros 30 dias de tráfego pago',
      description: 'Lead Page de alta conversão estruturada com headline impactante, vídeo explicativo, quebra de objeções e botão de contato com mensagem personalizada.',
      technologies: ['React 19', 'Tailwind CSS', 'Meta Pixel Pro', 'Google Tag Manager'],
      features: ['Carregamento em 0.7s', 'Botão WhatsApp Inteligente', 'Copywriting Neuro-persuasivo']
    },
    {
      id: '2',
      title: 'Nexus Engenharia & Arquitetura',
      category: 'institucional',
      client: 'Nexus Group',
      niche: 'Engenharia Civil & Construção',
      image: institucionalImg,
      metric: 'Top 3 no Google',
      metricLabel: 'Indexação orgânica para palavras-chave da Grande Florianópolis e SC',
      description: 'Site Institucional corporativo com 6 páginas, catálogo detalhado de obras entregues, página de história, e-mails corporativos e formulário avançado de cotação.',
      technologies: ['TypeScript', 'Next-Gen SEO', 'Google Maps API', 'SSL 256-bit'],
      features: ['Catálogo Dinâmico de Obras', 'Otimização SEO Local', 'Design Ultra-Elegante']
    },
    {
      id: '3',
      title: 'Flow Fast & Agência Digital',
      category: 'leadpage',
      client: 'Flow Studio',
      niche: 'Infoprodutos & Serviços',
      image: mobilePreviewImg,
      metric: '0.5s Loading',
      metricLabel: 'Pontuação 99/100 no Google PageSpeed Insights Mobile',
      description: 'Landing Page com foco 100% em visualização em smartphones, arquitetura fluida e taxa de rejeição inferior a 12% em campanhas do TikTok e Instagram.',
      technologies: ['Mobile First UI', 'WebP Ultra-Compress', 'TikTok Pixel'],
      features: ['Layout Ergonômico de Polegar', 'Zero Fricção de Leitura', 'Conversão Instantânea']
    },
    {
      id: '4',
      title: 'Vanguard Investimentos & Finanças',
      category: 'institucional',
      client: 'Vanguard Advisory',
      niche: 'Assessoria de Negócios & M&A',
      image: heroAgencyImg,
      metric: 'R$ 4.2M em Pipeline',
      metricLabel: 'Negócios prospectados através do canal institucional no primeiro trimestre',
      description: 'Portal corporativo com design futurista em dark mode, área para publicação de artigos de mercado, conformidade total com LGPD e apresentação de sócios.',
      technologies: ['React SPA', 'Framer Motion', 'Security Hardening', 'SEO Schema'],
      features: ['Área de Insights & Artigos', 'Segurança Bancária', 'Multi-idioma Preparado']
    }
  ];

  const filteredProjects = projects.filter(
    (p) => filter === 'all' || p.category === filter
  );

  return (
    <div className="space-y-16 py-8">
      
      {/* Header section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
              <span>Cases Reais & Projetos Entregues</span>
              <span aria-hidden="true">·</span>
              <span>Engenharia Web de Alto Padrão</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Portfólio de Alta Conversão
            </h1>
            <p className="text-slate-400 text-sm max-w-xl">
              Confira designs modernos e projetos desenvolvidos com foco em velocidade, estética refinada e geração contínua de negócios.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Category filter segmented controls */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Todos
              </button>
              <button
                onClick={() => setFilter('leadpage')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'leadpage'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Lead Pages
              </button>
              <button
                onClick={() => setFilter('institucional')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  filter === 'institucional'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Institucionais
              </button>
            </div>

            {/* View Mode Switcher (Desktop vs Mobile) */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-xl border border-slate-800">
              <button
                onClick={() => setViewMode('desktop')}
                title="Visualização em Desktop"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'desktop' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('mobile')}
                title="Visualização em Celular"
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'mobile' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Projects Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-[#0d1424] border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl shadow-cyan-950/20"
            >
              {/* Image Frame with Mode Simulation */}
              <div className="p-4 bg-[#080d19] border-b border-slate-800/80 flex items-center justify-center overflow-hidden">
                <div 
                  className={`transition-all duration-500 overflow-hidden rounded-xl border border-slate-700/60 shadow-lg ${
                    viewMode === 'mobile' ? 'w-56 h-80' : 'w-full h-64'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Info Body */}
              <div className="p-6 space-y-4">
                
                {/* Quiet unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                  <span className="text-cyan-400 font-mono uppercase">{project.category === 'leadpage' ? 'Lead Page' : 'Site Institucional'}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.niche}</span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-400 block tabular-nums">
                      {project.metric}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-slate-400 bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Clique para ver detalhes do projeto</span>
                  <span className="text-cyan-400 font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Explorar Case <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-[#0c1222] border border-cyan-500/40 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-cyan-950/80 p-6 sm:p-8 space-y-6 animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block">
                  {selectedProject.category === 'leadpage' ? 'Lead Page de Alta Conversão' : 'Site Institucional Corporativo'}
                </span>
                <h3 className="text-2xl font-bold text-white font-display mt-0.5">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                aria-label="Fechar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden border border-slate-800 max-h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Result callout */}
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-emerald-400 shrink-0" />
              <div>
                <p className="text-sm font-bold text-emerald-300 font-mono">
                  Resultado Atingido: {selectedProject.metric}
                </p>
                <p className="text-xs text-slate-300">
                  {selectedProject.metricLabel}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Sobre a Estrutura Desenvolvida:
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Key features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Destaques Técnicos:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal CTA */}
            <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400">
                Gostou deste estilo? Podemos criar um similar para sua empresa.
              </p>
              <a
                href={buildWhatsAppUrl(`Olá Sérgio! Vi o projeto "${selectedProject.title}" no seu portfólio da Sergio SiteTech e gostaria de criar algo semelhante para o meu negócio.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs transition-all flex items-center justify-center gap-2 whitespace-nowrap shadow-lg shadow-emerald-500/20"
              >
                <span>Quero um Site Assim ({WHATSAPP_DISPLAY_NUMBER})</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
