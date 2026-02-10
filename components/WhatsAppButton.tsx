import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Vim pelo site da KMaia's Craft e gostaria de fazer um pedido.`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-xl hover:bg-[#128C7E] transition-all duration-300 hover:scale-105 group border-2 border-white/20"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="font-bold hidden group-hover:inline-block transition-all">Fale Conosco</span>
    </button>
  );
};

export default WhatsAppButton;