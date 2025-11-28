import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface PainPoint {
  id: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
