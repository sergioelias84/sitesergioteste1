import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, User, ArrowRight, PhoneCall, RefreshCw } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from '../utils/whatsapp';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  time: string;
  actions?: {
    label: string;
    actionKey: string;
  }[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    sender: 'bot',
    text: 'Olá! Sou o assistente virtual da **Sergio SiteTech**. Estou aqui para tirar suas dúvidas e te orientar sobre **Lead Pages de Alta Conversão** e **Sites Institucionais Modernos**.',
    time: 'Agora',
    actions: [
      { label: '🚀 O que é uma Lead Page?', actionKey: 'explain_leadpage' },
      { label: '🏢 Como funciona o Site Institucional?', actionKey: 'explain_institucional' },
      { label: '⏱️ Qual o prazo de entrega?', actionKey: 'deadlines' },
      { label: '💳 Preços e formas de pagamento', actionKey: 'pricing' },
      { label: '📲 Falar com o Sérgio no WhatsApp', actionKey: 'whatsapp' },
    ]
  }
];

export const SupportBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const botResponses: Record<string, { text: string; actions?: { label: string; actionKey: string }[] }> = {
    explain_leadpage: {
      text: 'Uma **Lead Page (Landing Page)** é uma página de página única 100% projetada para uma única ação: **converter visitantes em clientes**!\n\nIdeais para campanhas de anúncios (Google Ads, Meta Ads e TikTok), possuem carregamento ultrarrápido (< 0.8s), gatilhos mentais, copy persuasiva e botão direto para o seu WhatsApp ou formulário de captura.\n\nTaxa de conversão média: **3 a 5 vezes maior** que um site tradicional!',
      actions: [
        { label: '💰 Ver valores de Lead Page', actionKey: 'pricing' },
        { label: '⏱️ Prazo para Lead Page', actionKey: 'deadlines' },
        { label: '📲 Falar com Sérgio no WhatsApp', actionKey: 'whatsapp' },
      ]
    },
    explain_institucional: {
      text: 'O **Site Institucional** é a sede digital oficial da sua empresa! Ele é composto por múltiplas páginas (Início, Quem Somos, Catálogo de Serviços/Produtos, Diferenciais, Blog e Contato).\n\nEle gera autoridade máxima, passa confiança para grandes clientes e parceiros, e vem com **SEO técnico otimizado** para o Google indexar e posicionar sua marca nas buscas orgânicas.',
      actions: [
        { label: '🔍 O que está incluso no Institucional?', actionKey: 'institucional_features' },
        { label: '💰 Ver pacotes e orçamento', actionKey: 'pricing' },
        { label: '📲 Solicitar Site Institucional', actionKey: 'whatsapp' },
      ]
    },
    institucional_features: {
      text: 'No **Site Institucional Sergio SiteTech**, você recebe:\n• Design 100% exclusivo e responsivo (Desktop, Tablet e Mobile)\n• Certificado de Segurança SSL Grátis\n• E-mails corporativos (ex: contato@suaempresa.com.br)\n• Integração com WhatsApp e Google Maps\n• Painel amigável para você atualizar fotos e textos\n• Código ultrarrápido com pontuação 95+ no Google PageSpeed!',
      actions: [
        { label: '⏱️ Qual o prazo de entrega?', actionKey: 'deadlines' },
        { label: '📲 Pedir proposta no WhatsApp', actionKey: 'whatsapp' },
      ]
    },
    deadlines: {
      text: 'Aqui na **Sergio SiteTech**, trabalhamos com metodologia ágil de entrega rápida:\n\n⚡ **Lead Pages**: De 3 a 5 dias úteis.\n⚡ **Sites Institucionais**: De 7 a 15 dias úteis.\n\nVocê acompanha cada etapa do layout antes da publicação final!',
      actions: [
        { label: '💳 Como funciona o pagamento?', actionKey: 'pricing' },
        { label: '📲 Iniciar projeto com Sérgio', actionKey: 'whatsapp' },
      ]
    },
    pricing: {
      text: 'Nossos projetos contam com excelente custo-benefício e alto retorno sobre investimento:\n\n• **Lead Pages**: a partir de R$ 497,00 (ou em até 12x no cartão)\n• **Sites Institucionais**: a partir de R$ 997,00\n\nCondições: 50% de entrada + 50% após entrega e aprovação, ou parcelamento em até 12x no cartão. Desconto especial no Pix à vista!',
      actions: [
        { label: '📲 Pedir orçamento detalhado no WhatsApp', actionKey: 'whatsapp' },
        { label: '❓ O que preciso para começar?', actionKey: 'how_to_start' }
      ]
    },
    how_to_start: {
      text: 'Para começar é muito simples! Basta nos enviar:\n1. O nicho do seu negócio e objetivo principal;\n2. Suas cores/logo (se já tiver, se não, criamos para você);\n3. O número do WhatsApp que receberá os contatos dos clientes.\n\nO Sérgio cuida de todo o código, design, hospedagem e publicação!',
      actions: [
        { label: '📲 Enviar meus dados no WhatsApp', actionKey: 'whatsapp' }
      ]
    },
    whatsapp: {
      text: `Excelente! O Sérgio está disponível agora no WhatsApp no número **${WHATSAPP_DISPLAY_NUMBER}** para tirar qualquer dúvida e formalizar seu projeto com condição especial de lançamento!`,
      actions: [
        { label: `👉 Abrir WhatsApp (${WHATSAPP_DISPLAY_NUMBER})`, actionKey: 'open_wa_direct' }
      ]
    }
  };

  const handleActionClick = (actionKey: string) => {
    if (actionKey === 'open_wa_direct') {
      window.open(buildWhatsAppUrl('Olá Sérgio! Estava conversando com o Bot no site da Sergio SiteTech e gostaria de dar início ao meu projeto.'), '_blank', 'noopener,noreferrer');
      return;
    }

    const response = botResponses[actionKey];
    if (response) {
      // Add user message
      const userText = getActionLabel(actionKey);
      const userMsg: Message = {
        id: String(Date.now()),
        sender: 'user',
        text: userText,
        time: 'Agora'
      };

      setMessages(prev => [...prev, userMsg]);
      setIsTyping(true);

      setTimeout(() => {
        setIsTyping(false);
        const botMsg: Message = {
          id: String(Date.now() + 1),
          sender: 'bot',
          text: response.text,
          time: 'Agora',
          actions: response.actions
        };
        setMessages(prev => [...prev, botMsg]);
      }, 450);
    }
  };

  const getActionLabel = (key: string): string => {
    switch (key) {
      case 'explain_leadpage': return 'Quero entender sobre Lead Page';
      case 'explain_institucional': return 'Quero entender sobre Site Institucional';
      case 'deadlines': return 'Qual o prazo de entrega?';
      case 'pricing': return 'Quais os valores e formas de pagamento?';
      case 'whatsapp': return 'Quero falar com o Sérgio no WhatsApp';
      case 'institucional_features': return 'O que está incluso no Site Institucional?';
      case 'how_to_start': return 'O que preciso para começar?';
      default: return 'Mais informações';
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const query = inputMessage.trim();
    const userMsg: Message = {
      id: String(Date.now()),
      sender: 'user',
      text: query,
      time: 'Agora'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const lower = query.toLowerCase();

      let replyText = '';
      let nextActions: { label: string; actionKey: string }[] | undefined = undefined;

      if (lower.includes('lead') || lower.includes('landing') || lower.includes('captura')) {
        replyText = 'As nossas **Lead Pages** são focadas 100% em conversão e vendas diretas, perfeitas para anúncios de tráfego pago no Meta e Google. Carregam em menos de 1 segundo!';
        nextActions = [
          { label: '💰 Ver valores', actionKey: 'pricing' },
          { label: '📲 Falar no WhatsApp', actionKey: 'whatsapp' }
        ];
      } else if (lower.includes('institucional') || lower.includes('empresa') || lower.includes('corporativo')) {
        replyText = 'Nossos **Sites Institucionais** transmitem autoridade imediata, com várias seções, integração com Google Maps, WhatsApp, e-mail corporativo e SEO de ponta.';
        nextActions = [
          { label: '🔍 O que está incluso?', actionKey: 'institucional_features' },
          { label: '📲 Falar no WhatsApp', actionKey: 'whatsapp' }
        ];
      } else if (lower.includes('preco') || lower.includes('preço') || lower.includes('valor') || lower.includes('quanto') || lower.includes('pagar') || lower.includes('cust')) {
        replyText = 'Lead Pages a partir de R$ 497 e Sites Institucionais a partir de R$ 997. Aceitamos Pix à vista com desconto e parcelamos em até 12x no cartão!';
        nextActions = [
          { label: '📲 Pedir proposta exata', actionKey: 'whatsapp' }
        ];
      } else if (lower.includes('prazo') || lower.includes('tempo') || lower.includes('demora') || lower.includes('dias')) {
        replyText = 'Entregamos Lead Pages em 3 a 5 dias úteis e Sites Institucionais em 7 a 15 dias úteis.';
        nextActions = [
          { label: '📲 Solicitar agora', actionKey: 'whatsapp' }
        ];
      } else if (lower.includes('whatsapp') || lower.includes('contato') || lower.includes('numero') || lower.includes('telefone') || lower.includes('sergio')) {
        replyText = `Você pode falar diretamente com o Sérgio pelo WhatsApp **${WHATSAPP_DISPLAY_NUMBER}**! Ele atende pessoalmente cada cliente.`;
        nextActions = [
          { label: '👉 Abrir WhatsApp agora', actionKey: 'open_wa_direct' }
        ];
      } else {
        replyText = `Obrigado pela sua pergunta! Para analisarmos com detalhes seu projeto, o Sérgio está à disposição no WhatsApp **${WHATSAPP_DISPLAY_NUMBER}**. Posso te encaminhar direto para ele?`;
        nextActions = [
          { label: '📲 Falar no WhatsApp com o Sérgio', actionKey: 'open_wa_direct' },
          { label: '🚀 Ver sobre Lead Pages', actionKey: 'explain_leadpage' },
          { label: '🏢 Ver sobre Sites Institucionais', actionKey: 'explain_institucional' }
        ];
      }

      const botMsg: Message = {
        id: String(Date.now() + 1),
        sender: 'bot',
        text: replyText,
        time: 'Agora',
        actions: nextActions
      };
      setMessages(prev => [...prev, botMsg]);
    }, 500);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Bot Chat Window */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-96 h-[500px] flex flex-col rounded-2xl bg-[#0b1120] border border-cyan-500/30 shadow-2xl shadow-cyan-950/80 overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900/90 via-[#0e1d3a] to-blue-900/80 p-3.5 border-b border-cyan-500/20 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-[#0b1120]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm font-display text-white">SiteTech Bot</h4>
                  <span className="text-[9px] bg-cyan-500/20 text-cyan-300 font-mono px-1 rounded">IA</span>
                </div>
                <p className="text-[11px] text-cyan-200/80">Atendimento Sérgio SiteTech</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                title="Reiniciar conversa"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Fechar chat"
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 text-xs">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-start gap-2 max-w-[90%]">
                  {msg.sender === 'bot' && (
                    <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                    </div>
                  )}

                  <div 
                    className={`rounded-2xl p-3 leading-relaxed whitespace-pre-line ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-sm shadow-md'
                        : 'bg-[#131d33] text-slate-200 border border-slate-800 rounded-tl-sm shadow'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Quick Action Pills if provided */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="mt-2.5 ml-8 flex flex-col gap-1.5 w-[85%]">
                    {msg.actions.map((act, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleActionClick(act.actionKey)}
                        className="text-left text-[11px] px-2.5 py-1.5 rounded-lg bg-[#18233d] hover:bg-cyan-950/80 text-cyan-300 hover:text-cyan-200 border border-cyan-800/40 hover:border-cyan-500/50 transition-all flex items-center justify-between group"
                      >
                        <span>{act.label}</span>
                        <ArrowRight className="w-3 h-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-slate-400 text-xs pl-8">
                <div className="flex items-center gap-1 bg-[#131d33] px-3 py-1.5 rounded-full border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick WA Bar */}
          <div className="px-3 py-1.5 bg-[#080d19] border-t border-slate-800/60 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-emerald-400" />
              WhatsApp Direto:
            </span>
            <a
              href={buildWhatsAppUrl('Olá Sérgio! Gostaria de conversar com você.')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-mono font-medium"
            >
              {WHATSAPP_DISPLAY_NUMBER}
            </a>
          </div>

          {/* Input Form */}
          <form 
            onSubmit={handleSendMessage} 
            className="p-2.5 bg-[#0b1120] border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua dúvida aqui..."
              className="flex-1 bg-[#131d33] border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 bg-cyan-500 hover:bg-cyan-600 disabled:opacity-40 disabled:hover:bg-cyan-500 text-white rounded-xl transition-colors flex items-center justify-center shrink-0"
              aria-label="Enviar mensagem"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Bot Launcher Button */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir assistente virtual de atendimento"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-600/30 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/30"
        >
          {/* Animated glow */}
          <span className="absolute inset-0 rounded-full bg-cyan-400/30 animate-pulse" />

          {isOpen ? (
            <X className="w-6 h-6 relative z-10" />
          ) : (
            <Bot className="w-7 h-7 relative z-10" />
          )}

          {/* Indicator pill */}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-cyan-400 text-slate-950 font-bold text-[9px] shadow">
              BOT
            </span>
          )}
        </button>

        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-[#0c1322]/95 backdrop-blur-md text-slate-200 text-xs px-3.5 py-2 rounded-xl border border-cyan-500/30 shadow-lg cursor-pointer hover:border-cyan-400 transition-all group"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>Tire dúvidas com o <strong>Bot SiteTech</strong></span>
          </div>
        )}
      </div>
    </div>
  );
};
