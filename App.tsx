import React, { useState } from 'react';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import WhatsAppButton from './components/WhatsAppButton';
import { PRODUCTS } from './constants';
import { ProductCategory } from './types';
import { Instagram, MapPin, Truck, Gift, Star } from 'lucide-react';
import Logo from './components/Logo';
import { LavenderStalk, LavenderCurve } from './components/LavenderDecor';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'Todos'>('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const categories = ['Todos', ...Object.values(ProductCategory)];

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans selection:bg-brand-gold selection:text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 p-6 transition-all duration-300 bg-gradient-to-b from-brand-dark/90 to-transparent backdrop-blur-[2px]">
        <div className="container mx-auto flex justify-between items-center">
          {/* Branding */}
          <div className="text-brand-gold font-display text-lg md:text-xl tracking-[0.15em] font-bold drop-shadow-md border-b border-transparent hover:border-brand-gold/50 transition-all cursor-pointer">
            KMAIA'S CRAFT
          </div>
          
          <div className="hidden md:flex gap-8 font-serif text-sm tracking-widest text-gray-200">
             <a href="#produtos" className="hover:text-brand-gold transition-colors">PRODUTOS</a>
             <a href="#sobre" className="hover:text-brand-gold transition-colors">ATELIÊ</a>
             <a href="#contato" className="hover:text-brand-gold transition-colors">CONTATO</a>
          </div>
        </div>
      </nav>

      <Hero />

      {/* Features Bar */}
      <div className="bg-[#2F5C64] border-y border-brand-gold/20 py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-wrap justify-around gap-8 text-center relative z-10">
           <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full bg-brand-dark/30 text-brand-gold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Truck size={24} />
              </div>
              <span className="font-serif italic text-brand-goldLight text-lg">Entrega Nacional</span>
           </div>
           <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full bg-brand-dark/30 text-brand-gold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Gift size={24} />
              </div>
              <span className="font-serif italic text-brand-goldLight text-lg">Kits & Presentes</span>
           </div>
           <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full bg-brand-dark/30 text-brand-gold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Star size={24} />
              </div>
              <span className="font-serif italic text-brand-goldLight text-lg">Feito à Mão</span>
           </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="produtos" className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Decorative Lavender Curve Top Right */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none transform rotate-90">
           <LavenderCurve className="w-full h-full" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 relative">
             {/* Small lavender detail next to title */}
             <div className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-50">
               <svg width="20" height="40" viewBox="0 0 20 40"><path d="M10,40 Q10,20 10,0" stroke="#5F8952" strokeWidth="1"/><circle cx="10" cy="0" r="2" fill="#967BB6"/></svg>
             </div>

            <span className="text-brand-lavender font-display text-sm tracking-[0.3em] uppercase block mb-3">Coleção Exclusiva</span>
            <h2 className="font-display text-4xl md:text-5xl text-brand-gold mb-6">Nossas Criações</h2>
            <p className="text-gray-400 font-serif max-w-2xl mx-auto text-lg leading-relaxed">
              Explore nossa variedade de itens personalizados. Cada peça é uma pequena obra de arte feita especialmente para você.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 font-serif text-sm tracking-wide ${
                  activeCategory === cat
                    ? 'bg-brand-gold text-brand-dark border-brand-gold font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] transform scale-105'
                    : 'bg-transparent text-gray-400 border-gray-700 hover:border-brand-lavender hover:text-brand-lavender'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
             <div className="text-center py-20 text-gray-500 font-serif italic">
               Nenhum produto encontrado nesta categoria no momento.
             </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-[#1e4249] relative overflow-hidden">
        {/* Background decorations - Lavender rising from bottom left */}
        <div className="absolute -left-10 bottom-0 opacity-10 pointer-events-none">
           <LavenderStalk className="w-80 h-80 transform -rotate-12" />
        </div>
        
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16 relative z-10">
           
           {/* Creative Visual Area - Simplified & Larger Logo */}
           <div className="flex-1 w-full max-w-md md:max-w-none flex justify-center relative">
              {/* Very subtle glow to lift the logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              {/* Logo standing free and large */}
              <div className="relative z-10 p-8 transform hover:scale-105 transition-transform duration-700">
                 <Logo size={400} />
              </div>

              {/* Decorative lavender sprig floating nearby naturally */}
              <div className="absolute -bottom-10 -right-10 opacity-40 transform -rotate-12 pointer-events-none filter blur-[0.5px]">
                 <LavenderCurve className="w-56 h-56" />
              </div>
           </div>

           {/* Text Area */}
           <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-4xl text-brand-gold mb-8">Nosso Ateliê</h2>
              <div className="space-y-6 text-gray-200 font-sans leading-relaxed text-lg font-light">
                <p>
                  Bem-vindo à <strong className="text-brand-goldLight font-semibold">KMaia's Craft</strong>. Aqui, transformamos ideias em realidade. 
                  Nosso processo criativo une a precisão do design digital com o calor do acabamento manual.
                </p>
                <p>
                  Especializados em artesanato personalizado, colocamos dedicação em cada detalhe. Do corte do MDF à montagem dos bottons, tudo passa por nossas mãos com o cuidado que você merece.
                </p>
                <div className="py-4 relative">
                   <p className="italic text-brand-lavender text-xl font-serif">
                    "Um toque de lavanda e muito carinho em cada pacote."
                   </p>
                   {/* Decorative line */}
                   <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-gold/30 hidden md:block"></div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                 <div className="px-5 py-2 bg-brand-dark/40 backdrop-blur-sm rounded-full border border-brand-gold/30 text-sm text-brand-goldLight shadow-sm hover:bg-brand-gold/10 transition-colors cursor-default">
                   ✨ Produção Artesanal
                 </div>
                 <div className="px-5 py-2 bg-brand-dark/40 backdrop-blur-sm rounded-full border border-brand-gold/30 text-sm text-brand-goldLight shadow-sm hover:bg-brand-gold/10 transition-colors cursor-default">
                   🎨 Designs Exclusivos
                 </div>
                 <div className="px-5 py-2 bg-brand-dark/40 backdrop-blur-sm rounded-full border border-brand-gold/30 text-sm text-brand-goldLight shadow-sm hover:bg-brand-gold/10 transition-colors cursor-default">
                   💜 Feito com Amor
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-[#152e33] pt-20 pb-10 border-t border-brand-gold/10 relative overflow-hidden">
        {/* Footer decorations */}
        <div className="absolute bottom-0 right-0 opacity-5 transform rotate-12 translate-y-10">
           <LavenderStalk className="w-64 h-64" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-10">
            <Logo size={90} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16">
            <div className="flex flex-col items-center p-8 bg-brand-teal/10 border border-brand-teal/20 rounded-xl hover:bg-brand-teal/20 transition-all hover:-translate-y-1 duration-300">
              <div className="p-4 bg-brand-teal/20 rounded-full text-brand-gold mb-4">
                 <MapPin size={28} />
              </div>
              <h3 className="font-display text-brand-gold mb-2 text-xl">Localização</h3>
              <p className="font-serif text-gray-400">Entrega Online para todo Brasil</p>
            </div>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center p-8 bg-brand-teal/10 border border-brand-teal/20 rounded-xl hover:bg-brand-teal/20 transition-all hover:-translate-y-1 duration-300 group"
            >
              <div className="p-4 bg-brand-teal/20 rounded-full text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                 <Instagram size={28} />
              </div>
              <h3 className="font-display text-brand-gold mb-2 text-xl">Instagram</h3>
              <p className="font-serif text-gray-400 group-hover:text-brand-lavender transition-colors">@kmaiascraft</p>
            </a>
          </div>

          <div className="border-t border-brand-gold/10 pt-8 flex flex-col items-center gap-4">
            <p className="text-brand-lavender text-sm font-sans opacity-60">
              &copy; {new Date().getFullYear()} KMaia's Craft. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
};

export default App;