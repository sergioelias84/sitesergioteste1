export type TabType = 'overview' | 'leadpages' | 'institucional' | 'portfolio' | 'calculator' | 'faq';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'leadpage' | 'institucional';
  client: string;
  niche: string;
  image: string;
  metric: string;
  metricLabel: string;
  description: string;
  technologies: string[];
  features: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  options?: {
    label: string;
    action: () => void;
  }[];
}

export interface QuoteSelection {
  type: 'leadpage-basic' | 'leadpage-high-conv' | 'institucional-starter' | 'institucional-enterprise';
  urgency: 'normal' | 'express';
  addons: string[];
}
