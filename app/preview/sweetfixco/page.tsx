'use client';

import React from 'react';

// --- Minimalist SVG Icons ---
const Sparkles = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);

const Heart = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

const Clock = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const MenuIcon = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);

const ArrowRight = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
// -----------------------------------------------------------------

export default function SweetFixCoLanding() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2A2421] font-sans selection:bg-[#2A2421] selection:text-[#FAF8F5]">
      
      {/* Refined Smooth Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 300ms; }
        .delay-300 { animation-delay: 450ms; }
        .delay-400 { animation-delay: 600ms; }
      `}} />

      {/* Minimalist Glass Header */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAF8F5]/70 backdrop-blur-xl border-b border-[#EAE4DD]/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Sparkles size={18} className="text-[#A68F85] group-hover:rotate-12 transition-transform duration-500" />
            <span className="font-serif text-xl tracking-tight text-[#2A2421]">Sweet Fix Co.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm tracking-wide text-[#73655D]">
            <a href="#" className="hover:text-[#2A2421] transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-[#2A2421] transition-colors duration-300">Menu</a>
            <a href="#" className="hover:text-[#2A2421] transition-colors duration-300">Gallery</a>
          </div>

          <button className="bg-[#2A2421] text-[#FAF8F5] px-6 py-2.5 rounded-full text-sm hover:bg-[#433B36] active:scale-95 transition-all duration-300 hidden md:flex items-center gap-2">
            Order via DM <ArrowRight size={14} />
          </button>
          
          <button className="md:hidden p-2 text-[#2A2421] active:scale-95 transition-all">
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-6 pt-40 md:pt-48 pb-32 space-y-32 md:space-y-48 overflow-hidden">
        
        {/* 1. Editorial Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 space-y-10 flex flex-col items-center text-center lg:items-start lg:text-left opacity-0 animate-fade-up z-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#EAE4DD] bg-white/50 text-xs tracking-[0.2em] text-[#8C7A70] uppercase">
              <Sparkles size={12} /> Midlands Based
            </div>
            
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.9] tracking-[-0.03em] text-[#1A1614]">
              Artisanal<br />
              <span className="italic text-[#A68F85] font-light">Desserts,</span><br />
              Made Fresh.
            </h1>
            
            <p className="text-[#73655D] md:text-lg max-w-md leading-relaxed font-light">
              Elevating your celebrations and quiet moments with handmade, boutique desserts. Crafted to order, styled with elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#2A2421] text-[#FAF8F5] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#433B36] hover:shadow-xl hover:shadow-[#2A2421]/10 active:scale-95 transition-all duration-300">
                DM to Order
              </button>
              <button className="w-full sm:w-auto bg-transparent px-8 py-4 rounded-full text-sm tracking-wide border border-[#D5CCC4] text-[#2A2421] hover:border-[#2A2421] active:scale-95 transition-all duration-300">
                Explore Menu
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center lg:justify-end opacity-0 animate-fade-up delay-200">
            {/* Architectural Arch Image */}
            <div className="relative w-full max-w-[28rem] aspect-[3/4] rounded-t-[14rem] rounded-b-2xl overflow-hidden shadow-2xl shadow-[#2A2421]/5">
              <img 
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1000" 
                alt="Signature Tiramisu Cake" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent mix-blend-multiply"></div>
              
              <div className="absolute bottom-8 left-0 w-full flex justify-center">
                <div className="bg-[#FAF8F5]/95 backdrop-blur-md text-[#2A2421] px-6 py-3 rounded-full text-xs tracking-widest uppercase font-medium shadow-lg">
                  24hr Notice Required
                </div>
              </div>
            </div>
            
            {/* Floating Decorative Element */}
            <div className="absolute top-20 -left-12 w-32 h-32 bg-[#EBE5DE] rounded-full mix-blend-multiply blur-2xl opacity-70 -z-10 animate-pulse"></div>
          </div>
        </section>

        {/* 2. Core Pillars (Borderless, clean layout) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 opacity-0 animate-fade-up">
          {[
            { icon: Heart, title: "Handcrafted", desc: "Every layer, swirl, and finish is done by hand with meticulous attention to detail." },
            { icon: Clock, title: "Fresh to Order", desc: "We never pre-make. Your desserts are crafted specifically for your event date." },
            { icon: Sparkles, title: "Boutique Style", desc: "Finished with our signature soft, elegant aesthetic perfect for gifting." },
          ].map((feature, i) => (
            <div key={i} className="flex flex-col items-center text-center space-y-5 group">
              <div className="w-16 h-16 rounded-full bg-white border border-[#EAE4DD] flex items-center justify-center text-[#A68F85] group-hover:scale-110 group-hover:bg-[#2A2421] group-hover:text-white transition-all duration-500 ease-out">
                <feature.icon size={24} />
              </div>
              <h3 className="font-serif text-2xl text-[#1A1614]">{feature.title}</h3>
              <p className="text-[#73655D] text-sm leading-relaxed max-w-[16rem] font-light">{feature.desc}</p>
            </div>
          ))}
        </section>

        {/* 3. The Collection (Menu) */}
        <section className="space-y-16 opacity-0 animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4 max-w-xl">
              <h2 className="font-serif text-5xl tracking-tight text-[#1A1614]">The Collection</h2>
              <p className="text-[#73655D] font-light leading-relaxed">A curated selection of our most loved desserts. Contact us via Instagram or TikTok to place a bespoke order.</p>
            </div>
            <button className="text-sm tracking-widest uppercase text-[#8C7A70] hover:text-[#2A2421] transition-colors flex items-center gap-2 border-b border-[#8C7A70] hover:border-[#2A2421] pb-1 w-fit">
              View Full Menu <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { title: "Tiramisu Cake", tag: "Signature", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800", delay: "" },
              { title: "Dessert Cups", tag: "Layered", img: "https://images.unsplash.com/photo-1551024506-0cb4a1cb1cdd?auto=format&fit=crop&q=80&w=800", delay: "delay-100" },
              { title: "Bespoke Cupcakes", tag: "Gifting", img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800", delay: "delay-200" },
              { title: "Sweet Boxes", tag: "Curated", img: "https://images.unsplash.com/photo-1481391319762-47dff7295406?auto=format&fit=crop&q=80&w=800", delay: "delay-300" }
            ].map((item, i) => (
              <div key={i} className={`group cursor-pointer opacity-0 animate-fade-up ${item.delay}`}>
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 bg-[#EBE5DE]">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-1000 ease-out" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] tracking-widest uppercase text-[#2A2421]">
                    {item.tag}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <h3 className="font-serif text-xl text-[#1A1614] group-hover:text-[#A68F85] transition-colors">{item.title}</h3>
                  <div className="w-8 h-8 rounded-full border border-[#D5CCC4] flex items-center justify-center text-[#8C7A70] group-hover:bg-[#2A2421] group-hover:border-[#2A2421] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Asymmetrical Gallery & How it Works */}
        <section className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center opacity-0 animate-fade-up">
          {/* Masonry-esque Image Block */}
          <div className="relative h-[600px] w-full hidden md:block">
            <img src="https://images.unsplash.com/photo-1551024506-0cb4a1cb1cdd?auto=format&fit=crop&q=80&w=800" className="absolute top-0 left-0 w-2/3 h-[70%] object-cover rounded-2xl z-10 shadow-xl" alt="Dessert detail" />
            <img src="https://images.unsplash.com/photo-1481391319762-47dff7295406?auto=format&fit=crop&q=80&w=800" className="absolute bottom-0 right-0 w-[55%] h-[60%] object-cover rounded-2xl z-20 shadow-2xl" alt="Box detail" />
            
            {/* Brand Badge */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-[#2A2421] text-[#FAF8F5] p-6 rounded-full aspect-square flex flex-col items-center justify-center text-center w-32 shadow-2xl">
              <Sparkles size={16} className="mb-1" />
              <span className="text-[10px] tracking-widest uppercase">Midlands</span>
            </div>
          </div>

          {/* Ordering Steps */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-[#1A1614]">Effortless Ordering</h2>
              <p className="text-[#73655D] font-light">We keep things personal. Browse, message, and enjoy.</p>
            </div>
            
            <div className="space-y-8">
              {[
                { step: "01", title: "Select Your Treat", desc: "Choose from our curated menu or request a bespoke box." },
                { step: "02", title: "Message Us", desc: "Send a DM to @sweetfixco._ with your date and choice." },
                { step: "03", title: "Fresh Preparation", desc: "We require 24 hours to handcraft your order to perfection." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="text-sm font-serif italic text-[#A68F85] pt-1">{item.step}</div>
                  <div className="space-y-1">
                    <h4 className="text-lg text-[#1A1614] font-medium">{item.title}</h4>
                    <p className="text-[#73655D] text-sm font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-transparent border border-[#2A2421] text-[#2A2421] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[#2A2421] hover:text-[#FAF8F5] active:scale-95 transition-all duration-300">
              Message on TikTok
            </button>
          </div>
        </section>

        {/* 5. Dark Contrast CTA Section */}
        <section className="bg-[#211D1A] rounded-[2rem] p-10 md:p-16 lg:p-24 flex flex-col items-center text-center space-y-10 shadow-2xl relative overflow-hidden opacity-0 animate-fade-up">
          {/* Subtle noise/texture effect simulation */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
          
          <div className="z-10 space-y-6 max-w-2xl">
            <Sparkles size={32} className="text-[#A68F85] mx-auto" />
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F5] tracking-tight leading-[1.1]">
              Ready to fix your cravings?
            </h2>
            <p className="text-[#A1958F] font-light md:text-lg">
              Based in the Midlands. Delivery and collection available.<br />
              Everything is made fresh to order.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-[#FAF8F5] text-[#211D1A] px-10 py-4 rounded-full text-sm font-medium tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-white/5">
               DM @sweetfixco._
             </button>
          </div>
        </section>

        {/* Minimal Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase text-[#8C7A70] pt-8">
          <p>© {new Date().getFullYear()} Sweet Fix Co.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#2A2421] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[#2A2421] transition-colors">Instagram</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
