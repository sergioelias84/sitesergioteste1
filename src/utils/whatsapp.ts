export const WHATSAPP_RAW_NUMBER = '5548984685643';
export const WHATSAPP_DISPLAY_NUMBER = '(48) 98468-5643';
export const WHATSAPP_OWNER_NAME = 'Sérgio Elias';

export const buildWhatsAppUrl = (customMessage?: string): string => {
  const defaultText = 'Olá Sérgio! Conheci o site da Sergio SiteTech e gostaria de solicitar um orçamento para o meu projeto.';
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${message}`;
};

export const buildLeadPageQuoteUrl = (planTitle: string): string => {
  const text = `Olá Sérgio! Gostaria de um orçamento para a *Lead Page (${planTitle})*. Quero aumentar as conversões do meu negócio!`;
  return buildWhatsAppUrl(text);
};

export const buildInstitutionalQuoteUrl = (planTitle: string): string => {
  const text = `Olá Sérgio! Gostaria de um orçamento para o *Site Institucional (${planTitle})*. Quero passar autoridade e posicionar minha empresa no Google.`;
  return buildWhatsAppUrl(text);
};
