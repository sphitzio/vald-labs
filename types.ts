import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  tag: string;
  description: string;
  price: string;
  icon: LucideIcon;
  isFlagship?: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}