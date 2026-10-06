import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY_NUMBER, buildWhatsAppUrl } from '../../utils/whatsapp';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqTab: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Preciso pagar mensalidade após a entrega do site?',
      answer: 'Não! Aqui na Sergio SiteTech você paga o valor único de criação e o site se torna 100% seu. Os únicos custos normais de qualquer site na internet são o registro do seu domínio anual (cerca de R$ 40/ano no Registro.br) e o plano de hospedagem. Se desejar que cuidemos da manutenção e hospedagem contínua, temos planos opcionais, mas nunca obrigatórios.'
    },
    {
      question: 'Eu ainda não tenho textos nem fotos profissionais. Posso fazer o site?',
      answer: 'Com certeza! Nós ajudamos você em todo o processo de copywriting (redação persuasiva focada em vendas) e selecionamos imagens de altíssima definição em bancos profissionais licenciados para deixar seu site com visual moderno e futurista.'
    },
    {
      question: 'Qual a principal diferença prática entre Lead Page e Site Institucional?',
      answer: 'A Lead Page possui apenas 1 página e tem 1 único objetivo: converter o visitante em lead ou venda (ótima para quem roda anúncios no Google ou Facebook/Instagram). Já o Site Institucional é multipáginas e serve como a sede completa da sua empresa (Home, Serviços, Sobre Nós, Contato), ideal para transmitir máxima autoridade e ranquear organicamente no Google.'
    },
    {
      question: 'Como funciona a integração com o meu WhatsApp?',
      answer: 'Configuramos botões inteligentes e flutuantes que, ao serem clicados pelo cliente no computador ou celular, já abrem a conversa direto no seu WhatsApp comercial com uma mensagem de saudação personalizada, informando de qual produto ou serviço o cliente está vindo.'
    },
    {
      question: 'Quais são as formas de pagamento disponíveis?',
      answer: 'Facilitamos o pagamento para caber no seu fluxo de caixa: oferecemos desconto especial para pagamento à vista via Pix (50% de entrada para início e 50% após o site pronto e aprovado) ou parcelamento em até 12x no cartão de crédito.'
    },
    {
      question: 'Qual é o prazo médio de entrega do projeto?',
      answer: 'Nossa esteira ágil permite entregar Lead Pages prontas entre 3 e 5 dias úteis, e Sites Institucionais completos entre 7 e 15 dias úteis. Caso precise de urgência extrema, oferecemos a modalidade Turbo Expresso.'
    },
    {
      question: 'Vocês me ajudam a comprar o domínio (www.minhaempresa.com.br)?',
      answer: 'Sim! Se você ainda não possui um domínio registrado, nós orientamos todo o processo de compra no Registro.br ou provedor de sua preferência e realizamos todas as configurações de DNS, e-mails corporativos e certificado de segurança SSL com cadeado verde.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 py-8">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Perguntas Frequentes & Transparência Total</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white font-display">
          Tire Todas as Suas Dúvidas
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Veja as respostas para as perguntas mais comuns de nossos clientes sobre prazos, tecnologias, hospedagem e contratação.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen 
                  ? 'bg-[#0f172a] border-cyan-500/50 shadow-lg shadow-cyan-950/40' 
                  : 'bg-[#0b101d] border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-semibold text-white text-sm sm:text-base font-display">
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-lg bg-slate-800/80 text-cyan-400 shrink-0 transition-transform ${
                  isOpen ? 'rotate-180 bg-cyan-950' : ''
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still has doubts banner */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0d1629] to-[#0a1222] border border-cyan-500/30 text-center space-y-4">
          <MessageCircle className="w-8 h-8 text-emerald-400 mx-auto" />
          <h3 className="text-xl font-bold text-white font-display">
            Ainda tem alguma dúvida específica?
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Fale diretamente com o Sérgio no WhatsApp e receba atendimento personalizado para o seu modelo de negócio.
          </p>
          <div className="pt-2">
            <a
              href={buildWhatsAppUrl('Olá Sérgio! Gostaria de tirar uma dúvida sobre o desenvolvimento do meu site.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all"
            >
              <span>Conversar com Sérgio ({WHATSAPP_DISPLAY_NUMBER})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
