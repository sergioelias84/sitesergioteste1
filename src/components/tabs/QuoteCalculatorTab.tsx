import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from '../../utils/whatsapp';

interface AddonOption {
  id: string;
  label: string;
  price: number;
  description: string;
}

export const QuoteCalculatorTab: React.FC = () => {
  const [projectType, setProjectType] = useState<'leadpage-start' | 'leadpage-pro' | 'institucional-start' | 'institucional-pro'>('leadpage-pro');
  const [deliverySpeed, setDeliverySpeed] = useState<'normal' | 'turbo'>('normal');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'pixel', 'whatsapp-pro'
  ]);

  const projectTypes = [
    {
      id: 'leadpage-start' as const,
      name: 'Lead Page Start',
      basePrice: 497,
      baseDays: 5,
      category: 'Lead Page',
      desc: 'Página única para validação rápida de produtos e serviços locais.'
    },
    {
      id: 'leadpage-pro' as const,
      name: 'Lead Page Pro (Alta Conversão)',
      basePrice: 797,
      baseDays: 4,
      category: 'Lead Page',
      desc: 'Focada em tráfego pago (Google/Meta Ads) com copy persuasiva e carregamento <0.8s.'
    },
    {
      id: 'institucional-start' as const,
      name: 'Site Institucional Start',
      basePrice: 997,
      baseDays: 8,
      category: 'Site Institucional',
      desc: 'Até 4 páginas completas para empresas que precisam de presença no Google.'
    },
    {
      id: 'institucional-pro' as const,
      name: 'Site Institucional Pro Corporativo',
      basePrice: 1697,
      baseDays: 12,
      category: 'Site Institucional',
      desc: 'Até 7 páginas com catálogo de serviços, SEO local avançado e múltiplos e-mails.'
    }
  ];

  const availableAddons: AddonOption[] = [
    {
      id: 'copywriting',
      label: 'Copywriting Persuasivo Especializado',
      price: 150,
      description: 'Textos escritos por especialista com gatilhos mentais para dobrar suas conversões.'
    },
    {
      id: 'pixel',
      label: 'Instalação de Pixels (Meta Ads + Google Ads)',
      price: 120,
      description: 'Configuração do rastreamento de cliques e eventos de compra/lead.'
    },
    {
      id: 'whatsapp-pro',
      label: 'Integração WhatsApp Pro com Mensagens Dinâmicas',
      price: 80,
      description: 'Botão flutuante inteligente que identifica de qual anúncio ou produto o lead veio.'
    },
    {
      id: 'seo-advanced',
      label: 'Otimização SEO Google para sua Cidade',
      price: 190,
      description: 'Indexação no Google para palavras-chave da sua região e nicho de atuação.'
    },
    {
      id: 'domain-config',
      label: 'Configuração de Domínio Próprio & Hospedagem',
      price: 90,
      description: 'Apontamentos DNS, SSL com cadeado verde e testes de propagação.'
    },
    {
      id: 'logo-brand',
      label: 'Design de Logotipo Moderno & Futurista',
      price: 180,
      description: 'Criação de logotipo vetorial profissional em alta definição para sua marca.'
    }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const selectedBase = projectTypes.find(p => p.id === projectType)!;
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const addon = availableAddons.find(a => a.id === id);
    return sum + (addon ? addon.price : 0);
  }, 0);

  const speedFee = deliverySpeed === 'turbo' ? 200 : 0;
  const finalPrice = selectedBase.basePrice + addonsTotal + speedFee;
  const finalDays = deliverySpeed === 'turbo' 
    ? Math.max(2, Math.floor(selectedBase.baseDays * 0.6))
    : selectedBase.baseDays;

  // Generate WhatsApp pre-formatted order message
  const handleGenerateQuoteWhatsApp = () => {
    const addonsList = selectedAddons
      .map(id => availableAddons.find(a => a.id === id)?.label)
      .filter(Boolean)
      .join('\n• ');

    const message = `Olá Sérgio! Fiz uma simulação de orçamento no site da *Sergio SiteTech*:
    
📌 *Projeto:* ${selectedBase.name} (R$ ${selectedBase.basePrice})
⏱️ *Prazo Escolhido:* ${deliverySpeed === 'turbo' ? 'Turbo Expresso' : 'Normal'} (aprox. ${finalDays} dias úteis)
✨ *Adicionais Selecionados:*
• ${addonsList || 'Nenhum adicional'}

💰 *Investimento Estimado:* R$ ${finalPrice.toFixed(2)}

Gostaria de validar essa proposta e tirar meu projeto do papel!`;

    window.open(buildWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
          <Calculator className="w-4 h-4" />
          <span>Simulador de Orçamento Interativo</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
          Calcule Seu Investimento em Tempo Real
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Personalize as funcionalidades do seu site, veja os prazos estimados e envie a cotação pronta diretamente para o WhatsApp do Sérgio.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Configuration Steps (8 cols) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Step 1: Base Project Type */}
            <div className="bg-[#0c1222] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-lg font-bold text-white font-display">
                  Selecione o Modelo de Site
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {projectTypes.map((type) => {
                  const isSelected = projectType === type.id;
                  return (
                    <div
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`cursor-pointer rounded-xl p-5 border transition-all ${
                        isSelected
                          ? 'bg-[#121f3a] border-cyan-400 shadow-lg shadow-cyan-500/20'
                          : 'bg-[#080d19] border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">{type.category}</span>
                        <span className="text-sm font-bold text-white font-mono">R$ {type.basePrice}</span>
                      </div>
                      <h4 className="font-bold text-white text-sm mt-1">{type.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{type.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Delivery Speed */}
            <div className="bg-[#0c1222] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="text-lg font-bold text-white font-display">
                  Velocidade de Entrega
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div
                  onClick={() => setDeliverySpeed('normal')}
                  className={`cursor-pointer rounded-xl p-5 border transition-all ${
                    deliverySpeed === 'normal'
                      ? 'bg-[#121f3a] border-emerald-400 shadow-md shadow-emerald-500/10'
                      : 'bg-[#080d19] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">Prazo Padrão</span>
                    <span className="text-xs text-emerald-400 font-mono">Sem custo adicional</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Entrega em aproximadamente {selectedBase.baseDays} dias úteis com revisão cuidadosa.
                  </p>
                </div>

                <div
                  onClick={() => setDeliverySpeed('turbo')}
                  className={`cursor-pointer rounded-xl p-5 border transition-all ${
                    deliverySpeed === 'turbo'
                      ? 'bg-[#121f3a] border-cyan-400 shadow-md shadow-cyan-500/20'
                      : 'bg-[#080d19] border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> Entrega Turbo Expresso
                    </span>
                    <span className="text-xs text-cyan-400 font-mono font-bold">+ R$ 200</span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Prioridade máxima na esteira. Entrega reduzida para cerca de {Math.max(2, Math.floor(selectedBase.baseDays * 0.6))} dias úteis!
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: Add-ons & Extra Capabilities */}
            <div className="bg-[#0c1222] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-lg font-bold text-white font-display">
                  Recursos Opcionais & Otimizações
                </h3>
              </div>

              <div className="space-y-3 pt-2">
                {availableAddons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer rounded-xl p-4 border transition-all flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'bg-[#101b34] border-cyan-500/50'
                          : 'bg-[#080d19] border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded mt-0.5 flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-cyan-500 text-slate-950 font-bold' : 'border border-slate-700 bg-slate-900'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">{addon.label}</p>
                          <p className="text-[11px] text-slate-400 leading-relaxed mt-0.5">{addon.description}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-cyan-400 shrink-0">
                        + R$ {addon.price}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Summary Card (Sticky 4 cols) */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="rounded-2xl bg-gradient-to-b from-[#0e172c] to-[#0a1120] border-2 border-cyan-500/40 p-6 sm:p-8 shadow-2xl shadow-cyan-950/70 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <h4 className="font-bold text-white font-display">Resumo da Estimativa</h4>
                <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">
                  TRANSPARENTE
                </span>
              </div>

              {/* Items List */}
              <div className="space-y-3 text-xs">
                <div className="flex justify-between items-center text-slate-300">
                  <span>{selectedBase.name}</span>
                  <span className="font-mono text-white font-semibold">R$ {selectedBase.basePrice}</span>
                </div>

                {deliverySpeed === 'turbo' && (
                  <div className="flex justify-between items-center text-cyan-300">
                    <span>Taxa Entrega Turbo</span>
                    <span className="font-mono font-semibold">+ R$ 200</span>
                  </div>
                )}

                {selectedAddons.map(id => {
                  const addon = availableAddons.find(a => a.id === id);
                  if (!addon) return null;
                  return (
                    <div key={id} className="flex justify-between items-center text-slate-400">
                      <span className="truncate max-w-[200px]">{addon.label}</span>
                      <span className="font-mono text-slate-200">+ R$ {addon.price}</span>
                    </div>
                  );
                })}
              </div>

              {/* Deadline & Security indicators */}
              <div className="py-3 px-4 rounded-xl bg-[#070b14] border border-slate-800 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    Prazo Estimado:
                  </span>
                  <span className="font-bold text-emerald-400 font-mono">
                    ~ {finalDays} dias úteis
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    Condição:
                  </span>
                  <span className="text-[11px] text-slate-200">
                    50% sinal + 50% na entrega
                  </span>
                </div>
              </div>

              {/* Total Price */}
              <div className="pt-2 border-t border-slate-800 space-y-1">
                <span className="text-xs text-slate-400">Investimento Total Estimado:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-cyan-400">R$</span>
                  <span className="text-4xl font-extrabold text-white font-display tabular-nums">
                    {finalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <span className="text-[11px] text-emerald-400 block font-medium">
                  Ou parcelado em até 12x no cartão de crédito
                </span>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGenerateQuoteWhatsApp}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-xs transition-all shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Enviar Orçamento no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                Atendimento direto: <strong>{WHATSAPP_DISPLAY_NUMBER}</strong>
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
