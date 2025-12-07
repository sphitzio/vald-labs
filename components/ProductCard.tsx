import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const Icon = product.icon;

  return (
    <div className="group relative bg-zinc-950 border border-white/5 rounded-xl overflow-hidden hover:border-[#ffff00]/30 transition-colors duration-300 flex flex-col h-full">
      <div className="aspect-square bg-zinc-900/50 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Icon className={`w-16 h-16 text-zinc-700 transition-colors duration-300 stroke-[1.5] ${product.isFlagship ? 'group-hover:text-[#ffff00]' : 'group-hover:text-zinc-200'}`} />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-medium text-white tracking-tight font-space-mono">{product.name}</h3>
          <span className={`font-mono text-xs px-2 py-0.5 rounded font-space-mono border ${product.isFlagship ? 'text-[#ffff00] border-[#ffff00]/20' : 'text-zinc-500 border-zinc-800'}`}>
            {product.tag}
          </span>
        </div>
        
        <p className="text-base text-zinc-500 mb-6 flex-grow font-space-mono">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg text-white font-medium font-space-mono">{product.price}</span>
          <button className="text-sm text-white hover:text-[#ffff00] transition-colors font-space-mono">Details →</button>
        </div>
      </div>
    </div>
  );
};