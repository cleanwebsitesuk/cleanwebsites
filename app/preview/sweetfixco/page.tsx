'use client';

import React from 'react';

// --- Soft, Minimalist SVG Icons ---
const Sparkles = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
  </svg>
);

const MapPin = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const Truck = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect width="15" height="10" x="3" y="8" rx="2"/><path d="M18 10h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M7 21v-3"/><path d="M15 21v-3"/>
  </svg>
);

const Mail = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const ArrowRight = ({ size = 24, className = "", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
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
    <div className="min-h-screen bg-[#FDF8F5] text-[#5C3D2E] font-sans selection:bg-[#F5E6E1] selection:text-[#5C3D2E]">
      
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
        .delay-300 { animation-delay: 450ms; }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#FDF8F5]/80 backdrop-blur-xl border-b border-[#F0E4DE] transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#F5E6E1] flex items-center justify-center text-[#B99384] group-hover:scale-110 transition-transform duration-300">
              <Sparkles size={14} />
            </div>
            <span className="font-serif text-lg tracking-tight text-[#5C3D2E] font-medium">Sweet Fix Co.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8B6B5D]">
            <a href="#" className="hover:text-[#D4A373] transition-colors">Home</a>
            <a href="#" className="hover:text-[#D4A373] transition-colors">Menu</a>
            <a href="#" className="hover:text-[#D4A373] transition-colors">Gallery</a>
          </div>

          <button className="bg-[#5C3D2E] text-[#FDF8F5] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#4A2E20] active:scale-95 transition-all duration-300 hidden md:flex items-center gap-2 shadow-sm shadow-[#5C3D2E]/10">
            DM to Order
          </button>
          
          <button className="md:hidden p-2 text-[#5C3D2E] active:scale-95 transition-all">
            <MenuIcon size={24} />
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 md:pt-40 pb-24 space-y-24 md:space-y-32 overflow-hidden">
        
        {/* 1. Profile-Driven Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left opacity-0 animate-fade-up z-10">
            
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[#B99384]">
              @sweetfixco._10
            </div>
            
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-[#5C3D2E]">
              Desserts made<br />
              fresh to order <Sparkles className="inline-block text-[#D4A373] w-10 h-10 md:w-14 md:h-14 -mt-4" />
            </h1>
            
            {/* Direct Bio Implementation */}
            <div className="flex flex-col gap-3 text-[#8B6B5D] text-base md:text-lg">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <MapPin size={18} className="text-[#D4A373]" />
                <span>Based in Midlands</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Truck size={18} className="text-[#D4A373]" />
                <span>Delivery & Collection available</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Mail size={18} className="text-[#D4A373]" />
                <span>DM to order | 24hr notice required</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#5C3D2E] text-[#FDF8F5] px-8 py-4 rounded-full text-sm font-medium hover:bg-[#4A2E20] hover:shadow-lg hover:shadow-[#5C3D2E]/10 active:scale-95 transition-all duration-300">
                DM @sweetfixco._10
              </button>
              <button className="w-full sm:w-auto bg-transparent px-8 py-4 rounded-full text-sm font-medium border border-[#E8D9D1] text-[#5C3D2E] hover:border-[#D4A373] hover:text-[#D4A373] active:scale-95 transition-all duration-300">
                View Menu
              </button>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-center lg:justify-end opacity-0 animate-fade-up delay-200">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-[#5C3D2E]/10 border-[6px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1000" 
                alt="Signature Tiramisu Cake" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              {/* Changed from black to warm brown gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A2E20]/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="text-white drop-shadow-md">
                  <div className="text-xs font-semibold uppercase tracking-wider mb-1 opacity-90">Signature</div>
                  <div className="font-serif text-2xl">Tiramisu</div>
                </div>
                <div className="bg-white/95 backdrop-blur-sm text-[#5C3D2E] px-4 py-2 rounded-full text-xs font-bold shadow-sm">
                  Fresh to order
                </div>
              </div>
            </div>
            
            {/* Soft decorative background shape */}
            <div className="absolute top-1/2 -right-12 w-64 h-64 bg-[#F5E6E1] rounded-full blur-3xl opacity-60 -z-10"></div>
          </div>
        </section>

        {/* 2. Menu Preview Grid */}
        <section className="space-y-12 opacity-0 animate-fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <h2 className="font-serif text-4xl text-[#5C3D2E]">The Collection</h2>
              <p className="text-[#8B6B5D] leading-relaxed">Everything is prepared fresh for your date. Have a browse and drop us a DM to secure your slot.</p>
            </div>
            <button className="text-sm font-semibold text-[#B99384] hover:text-[#5C3D2E] transition-colors flex items-center gap-2 border-b border-[#E8D9D1] hover:border-[#5C3D2E] pb-1 w-fit">
              View Full Menu <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Signature Tiramisu", tag: "Popular", img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800", delay: "" },
              { title: "Dessert Cups", tag: "Layered", img: "https://images.unsplash.com/photo-1551024506-0cb4a1cb1cdd?auto=format&fit=crop&q=80&w=800", delay: "delay-100" },
              { title: "Cupcake Boxes", tag: "Gifting", img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800", delay: "delay-200" },
              { title: "Custom Orders", tag: "Bespoke", img: "https://images.unsplash.com/photo-1481391319762-47dff7295406?auto=format&fit=crop&q=80&w=800", delay: "delay-300" }
            ].map((item, i) => (
              <div key={i} className={`group cursor-pointer bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl hover:shadow-[#5C3D2E]/5 border border-[#F0E4DE] transition-all duration-300 opacity-0 animate-fade-up ${item.delay}`}>
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden mb-4 bg-[#F5E6E1]">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-[#5C3D2E]">
                    {item.tag}
                  </div>
                  {/* Soft brown overlay on hover instead of black */}
                  <div className="absolute inset-0 bg-[#5C3D2E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="px-2 pb-2">
                  <h3 className="font-serif text-lg text-[#5C3D2E] group-hover:text-[#D4A373] transition-colors">{item.title}</h3>
                  <div className="text-[#8B6B5D] text-xs font-medium mt-1">DM for pricing</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Steps to Order */}
        <section className="bg-white rounded-[2.5rem] p-10 md:p-16 border border-[#F0E4DE] shadow-sm opacity-0 animate-fade-up">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-[#5C3D2E]">How to get your Sweet Fix</h2>
            <p className="text-[#8B6B5D] max-w-xl mx-auto">Ordering is simple. We just need a little notice to ensure everything is made fresh for you.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Subtle connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#E8D9D1] to-transparent"></div>
            
            {[
              { step: "1", title: "Pick your treats", desc: "Check out the menu above or scroll through our TikTok/Insta for inspiration." },
              { step: "2", title: "Send us a DM", desc: "Message @sweetfixco._10 with what you'd like, plus your date and collection/delivery preference." },
              { step: "3", title: "We prep it fresh", desc: "Give us 24 hours notice. We'll handcraft your desserts ready for your special day." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FDF8F5] border-4 border-white shadow-sm flex items-center justify-center font-serif text-2xl text-[#D4A373]">
                  {item.step}
                </div>
                <h4 className="text-xl font-serif text-[#5C3D2E]">{item.title}</h4>
                <p className="text-[#8B6B5D] text-sm leading-relaxed max-w-[16rem]">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Soft CTA Card */}
        <section className="bg-[#F5E6E1] rounded-[2.5rem] p-10 md:p-16 flex flex-col items-center text-center space-y-8 opacity-0 animate-fade-up relative overflow-hidden border border-[#F0E4DE]">
          {/* Decorative background sparkles */}
          <Sparkles size={120} className="absolute -top-10 -right-10 text-white/40 rotate-12" />
          <Sparkles size={80} className="absolute -bottom-10 -left-4 text-white/40 -rotate-12" />
          
          <div className="z-10 space-y-4 max-w-xl relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm text-xs font-bold text-[#B99384] uppercase tracking-wider mb-2">
              <Mail size={14} /> Send a Message
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#5C3D2E] tracking-tight">
              Ready to order?
            </h2>
            <p className="text-[#8B6B5D] md:text-lg pb-4">
              Drop a DM to <span className="font-semibold text-[#5C3D2E]">@sweetfixco._10</span> to secure your slot. Remember, 24hr notice is needed!
            </p>
          </div>
          
          <button className="z-10 bg-[#5C3D2E] text-[#FDF8F5] px-10 py-4 rounded-full text-sm font-medium hover:bg-[#4A2E20] active:scale-95 transition-all duration-300 shadow-xl shadow-[#5C3D2E]/15 flex items-center gap-2">
            Message on TikTok <ArrowRight size={16} />
          </button>
        </section>

        {/* Footer */}
        <footer className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#B99384] pt-8">
          <p>© {new Date().getFullYear()} Sweet Fix Co.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#5C3D2E] transition-colors">@sweetfixco._10</a>
            <a href="#" className="hover:text-[#5C3D2E] transition-colors">Midlands, UK</a>
          </div>
        </footer>

      </main>
    </div>
  );
}
