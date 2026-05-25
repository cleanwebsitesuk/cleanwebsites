'use client';

import React from 'react';

// --- Minimalist SVG Icons ---
const Sparkles = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);

const MenuIcon = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
  </svg>
);
// -----------------------------------------------------------------

export default function SweetFixCoLanding() {
  return (
    <div className="min-h-screen bg-[#FAEDEA] text-[#392419] font-sans selection:bg-[#392419] selection:text-[#FAEDEA]">
      
      {/* Soft Animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 300ms; }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FAEDEA]/80 backdrop-blur-xl border-b border-[#F2E3DE] transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* HEADER LOGO: Update the src path to point to your actual logo file in the public folder */}
          <a href="#" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Sweet Fix Co." 
              className="h-10 w-auto object-contain hidden sm:block" 
              onError={(e) => {
                // Fallback text if image isn't found yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* Fallback text while you upload the logo */}
            <span className="font-serif text-xl tracking-tight text-[#392419] font-medium hidden sm:hidden">Sweet Fix Co.</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8A6A59]">
            <a href="#" className="hover:text-[#392419] transition-colors">Home</a>
            <a href="#" className="hover:text-[#392419] transition-colors">Menu</a>
            <a href="#" className="hover:text-[#392419] transition-colors">Gallery</a>
          </div>

          <button className="bg-[#392419] text-[#FAEDEA] px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#2A1A12] active:scale-95 transition-all duration-300 hidden md:block">
            DM to Order
          </button>
          
          <button className="md:hidden p-2 text-[#392419] active:scale-95 transition-all">
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-24 space-y-24 md:space-y-32 overflow-hidden">
        
        {/* 1. Hero Section (Matched to new colors) */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left opacity-0 animate-fade-up z-10">
            <div className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#8A6A59]">
              @sweetfixco._ <Sparkles size={14} className="text-[#392419]" />
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#392419]">
              Desserts made<br />
              fresh to order.
            </h1>
            
            <div className="flex flex-col gap-3 text-[#8A6A59] text-base md:text-lg">
              <p>📍 Based in Midlands</p>
              <p>🚚 Delivery & Collection available</p>
              <p>📩 DM to order | 24hr notice required</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#392419] text-[#FAEDEA] px-8 py-4 rounded-full text-sm font-bold hover:bg-[#2A1A12] active:scale-95 transition-all duration-300">
                DM @sweetfixco._
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center lg:justify-end opacity-0 animate-fade-up delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#392419]/10">
               {/* Replace with your hero image */}
              <img 
                src="/tiramisu-hero.jpg" 
                alt="Signature Tiramisu Cake" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[1.5s] ease-out bg-[#F2E3DE]"
              />
            </div>
          </div>
        </section>

        {/* 2. Menu Preview (Styled exactly like image_433e64.jpg) */}
        <section className="opacity-0 animate-fade-up">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <span className="px-4 py-1.5 rounded-full border border-[#D9C5BD] text-[10px] font-bold text-[#8A6A59] tracking-widest uppercase bg-transparent">
              DM FOR PRICE
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-[#392419] tracking-tight">Menu Preview</h2>
            <p className="text-[#8A6A59] text-sm md:text-base">A selection of handmade desserts available to order by DM.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Signature Tiramisu Cake", 
                tag: "Popular", 
                desc: "Layered creamy dessert finished with chocolate and wrapped with ladyfingers for a celebration-ready look.",
                price: "DM for price",
                img: "/tiramisu.jpg", // Update with your real image path
                delay: "" 
              },
              { 
                title: "Dessert Cups", 
                tag: "Fresh to order", 
                desc: "Rich layered dessert pots with cream, chocolate, and a smooth homemade finish.",
                price: "Available in boxes",
                img: "/dessert-cups.jpg", // Update with your real image path
                delay: "delay-100" 
              },
              { 
                title: "Cupcake Gift Box", 
                tag: "Gift-ready", 
                desc: "Soft cupcakes topped with creamy swirls, packed beautifully and ready to gift.",
                price: "DM for options",
                img: "/cupcakes.jpg", // Update with your real image path
                delay: "delay-200" 
              }
            ].map((item, i) => (
              <div key={i} className={`bg-white rounded-[2rem] p-3 shadow-sm border border-[#F2E3DE] flex flex-col h-full opacity-0 animate-fade-up ${item.delay}`}>
                <div className="relative aspect-square md:aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-5 bg-[#F9ECE8]">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-out" />
                </div>
                <div className="px-3 pb-4 flex flex-col flex-grow">
                  <span className="w-fit px-3 py-1 bg-[#FAEDEA] text-[#8A6A59] rounded-full text-[10px] font-bold tracking-wider mb-4">
                    {item.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-[#392419] mb-3">{item.title}</h3>
                  <p className="text-[#8A6A59] text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  
                  <div className="space-y-2 mt-auto">
                    <p className="text-[#BA8E7A] font-bold text-sm">{item.price}</p>
                    <p className="text-[#392419] font-bold text-sm cursor-pointer hover:opacity-70 transition-opacity">
                      Order via DM &rarr;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Dark CTA Section (Styled exactly like image_433e26.png) */}
        <section className="bg-[#392419] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 opacity-0 animate-fade-up border-[6px] border-[#392419]">
          
          {/* Faint Background Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
             <span className="font-serif text-[15vw] leading-none text-white opacity-[0.03] whitespace-nowrap translate-y-12">
               Fix Your Cravings
             </span>
          </div>

          {/* Left Column: Circular Logo */}
          <div className="relative z-10 w-full md:w-[40%] flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#FAEDEA] flex items-center justify-center overflow-hidden border-[12px] border-[#4A3326] shadow-xl">
               {/* CIRCULAR LOGO: Update the src path to point to your actual circular logo file */}
              <img src="/logo-circle.png" alt="Sweet Fix Co." className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Column: Text & Buttons */}
          <div className="relative z-10 flex-1 text-white space-y-6 md:pl-4 w-full text-center md:text-left">
            <span className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold tracking-widest uppercase inline-block bg-transparent text-white/90">
              SWEET FIX CO.
            </span>
            
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
              Ready to fix your<br />cravings?
            </h2>
            
            <div className="space-y-4 text-white/90 text-sm md:text-base pt-2">
              <p className="font-bold text-white text-lg">Based in Midlands</p>
              <p>Delivery & collection available</p>
              <p>DM to order · 24hr notice required</p>
              <p>TikTok: <span className="font-bold text-white cursor-pointer hover:underline">@sweetfixco._</span></p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6">
              <button className="w-full sm:w-auto bg-white text-[#392419] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-gray-100 active:scale-95 transition-all">
                Message to Order
              </button>
              <button className="w-full sm:w-auto bg-transparent border border-white/30 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white/5 active:scale-95 transition-all">
                Follow on TikTok
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold tracking-wider uppercase text-[#8A6A59] pt-8">
          <p>© {new Date().getFullYear()} Sweet Fix Co.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#392419] transition-colors">TikTok</a>
            <a href="#" className="hover:text-[#392419] transition-colors">Instagram</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
