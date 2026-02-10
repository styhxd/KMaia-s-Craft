import React from 'react';
import { Product } from '../types';
import { ShoppingBag, ZoomIn } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleBuyClick = () => {
    const message = `Olá! Amei o produto *${product.name}* (R$ ${product.price.toFixed(2)}) e gostaria de encomendar!`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="group relative bg-brand-teal/30 backdrop-blur-sm border border-brand-gold/20 rounded-lg overflow-hidden hover:border-brand-gold/60 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-brand-gold/10">
      
      {/* New Badge */}
      {product.isNew && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            Novo
          </div>
        </div>
      )}

      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-brand-dark/50">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
           {/* Quick Action Buttons on Hover */}
           <button 
             onClick={handleBuyClick}
             className="p-3 bg-brand-gold text-brand-dark rounded-full hover:bg-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300"
             title="Encomendar no WhatsApp"
           >
             <ShoppingBag size={20} />
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs text-brand-lavender font-semibold uppercase tracking-wider border border-brand-lavender/30 px-2 py-0.5 rounded-full">
            {product.category}
          </span>
        </div>
        
        <h3 className="font-display text-xl text-brand-goldLight mb-2 group-hover:text-brand-gold transition-colors">
          {product.name}
        </h3>
        
        <p className="text-gray-300 text-sm font-sans mb-4 flex-grow leading-relaxed">
          {product.description}
        </p>
        
        <div className="pt-4 border-t border-brand-gold/20 flex items-center justify-between">
          <span className="font-serif text-2xl text-white">
            <span className="text-sm align-top text-gray-400 mr-1">R$</span>
            {product.price.toFixed(2).replace('.', ',')}
          </span>
          <button 
            onClick={handleBuyClick}
            className="text-sm font-bold text-brand-gold hover:text-white underline decoration-brand-gold underline-offset-4 decoration-1 transition-all"
          >
            Encomendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;