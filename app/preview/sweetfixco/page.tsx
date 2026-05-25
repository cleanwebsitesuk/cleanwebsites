'use client';

import React from 'react';
import { Heart, Sparkles, Clock, Menu as MenuIcon, Instagram, ChevronRight } from 'lucide-react';

export default function SweetFixCoLanding() {
  return (
    <div className="min-h-screen bg-[#FFFBF9] text-[#3A241A] font-sans selection:bg-[#E8D9D1]">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl bg-white/70 backdrop-blur-md rounded-full border border-white/40 shadow-[0_4px_24px_rgba(0,0,0,0.02)] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3 pl-2">
          <div className="w-8 h-8 rounded-full bg-[#FCECE6] flex items-center justify-center text-[#997364]">
            <Sparkles size={14} />
          </div>
          <span className="font-serif text-lg font-medium tracking-tight">Sweet Fix Co.</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#7A5B4D]">
          <a href="#" className="hover:text-[#3A241A] transition-colors">Home</a>
          <a href="#" className="hover:text-[#3A241A] transition-colors">Menu</a>
          <a href="#" className="hover:text-[#3A241A] transition-colors">Gallery</a>
          <a href="#" className="hover:text-[#3A241A] transition-colors">Order</a>
        </div>

        <button className="bg-[#3A241A] text-[#FFFBF9] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#2A1911] transition-colors hidden md:block">
          DM to Order
        </button>
        <button className="md:hidden p-2 text-[#3A241A]">
          <MenuIcon size={24} />
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-40 pb-24 space-y-40 overflow-hidden">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#C2A396] uppercase">
              Fix your cravings <Sparkles size={12} />
            </div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight">
              Desserts<br />
              Made Fresh<br />
              to Order
            </h1>
            <p className="text-[#7A5B4D] md:text-lg max-w-md leading-relaxed">
              Handmade sweet treats from Sweet Fix Co. — crafted with care in the Midlands, available for delivery or collection.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <button className="bg-[#3A241A] text-[#FFFBF9] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#2A1911] transition-colors">
                DM to Order
              </button>
              <button className="bg-white px-6 py-3 rounded-full text-sm font-medium border border-[#E8D9D1] hover:bg-gray-50 transition-colors">
                View Menu
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-6">
              <span className="px-4 py-1.5 bg-white border border-[#E8D9D1] rounded-full text-xs font-medium text-[#7A5B4D]">Fresh to order</span>
              <span className="px-4 py-1.5 bg-white border border-[#E8D9D1] rounded-full text-xs font-medium text-[#7A5B4D]">Midlands based</span>
              <span className="px-4 py-1.5 bg-white border border-[#E8D9D1] rounded-full text-xs font-medium text-[#7A5B4D]">24hr notice</span>
            </div>
          </div>

          <div className="flex-1 relative w-full flex justify-end">
            <div className="absolute top-12 -left-8 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm z-10 hidden md:flex">
              <Sparkles className="text-[#D8A790]" size={24} />
            </div>
            <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800" 
                alt="Signature Tiramisu Cake" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 right-6">
                <span className="bg-[#FFFBF9] text-[#3A241A] px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  24hr notice required
                </span>
              </div>
              <div className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white">
                <div className="flex items-center gap-1 font-bold text-xl drop-shadow-md">
                  TikTok
                </div>
                <div className="text-sm font-medium drop-shadow-md opacity-90">@sweetfixco._</div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Features Section */}
        <section className="text-center space-y-16">
          <div className="space-y-6 max-w-2xl mx-auto text-center flex flex-col items-center">
            <div className="text-xs font-bold tracking-wider text-[#C2A396] uppercase">
              Handmade Dessert Boutique
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              Sweet treats for celebrations, gifts, and cravings.
            </h2>
            <p className="text-[#7A5B4D] max-w-xl text-sm md:text-base">
              Sweet Fix Co. creates freshly made desserts for birthdays, gifts, celebrations, cosy nights in, and last-minute cravings. Every order is prepared with care and finished with soft, elegant presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Heart, title: "Fresh to Order", desc: "Prepared specially for each customer with a soft, homemade finish." },
              { icon: Sparkles, title: "Delivery & Collection", desc: "Available across the Midlands for gifting, treats, and celebrations." },
              { icon: Clock, title: "24hr Notice", desc: "Please order at least 24 hours in advance so everything is made fresh." },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] text-left shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#F5EAE5]">
                <div className="w-10 h-10 rounded-full bg-[#FFFBF9] border border-[#F5EAE5] flex items-center justify-center text-[#C2A396] mb-6">
                  <feature.icon size={16} />
                </div>
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-[#7A5B4D] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Menu Preview */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="text-xs font-bold tracking-wider text-[#C2A396] uppercase">
              Freshly made, beautifully finished
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Menu Preview</h2>
            <p className="text-[#7A5B4D]">A selection of handmade desserts available to order by DM.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                tag: "Popular", title: "Signature Tiramisu Cake", price: "DM for price",
                desc: "Layered creamy dessert finished with chocolate and wrapped with ladyfingers for a celebration-ready look.",
                img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=600"
              },
              { 
                tag: "Fresh to order", title: "Dessert Cups", price: "Available in boxes",
                desc: "Rich layered dessert pots with cream, chocolate, and a smooth homemade finish.",
                img: "https://images.unsplash.com/photo-1551024506-0cb4a1cb1cdd?auto=format&fit=crop&q=80&w=600"
              },
              { 
                tag: "Gift-ready", title: "Cupcake Gift Box", price: "DM for options",
                desc: "Soft cupcakes topped with creamy swirls, packed beautifully and ready to gift.",
                img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600"
              },
              { 
                tag: "Made to order", title: "Custom Sweet Boxes", price: "DM for price",
                desc: "Perfect for birthdays, treats, gifting, and dessert tables with elegant presentation.",
                img: "https://images.unsplash.com/photo-1481391319762-47dff7295406?auto=format&fit=crop&q=80&w=600"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[2rem] overflow-hidden shadow-sm flex flex-col h-full border border-[#F5EAE5]">
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <img src={item.img} alt={item.title} className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-[#3A241A] px-3 py-1 rounded-full text-[11px] font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white text-sm font-medium drop-shadow-md">
                    TikTok @sweetfixco._
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl mb-2">{item.title}</h3>
                  <p className="text-[#7A5B4D] text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#F5EAE5]">
                    <span className="text-xs font-semibold">{item.price}</span>
                    <button className="text-[#C2A396] text-xs font-semibold hover:text-[#3A241A] transition-colors">
                      Order via DM
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Style/Gallery Section */}
        <section className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-6">
            <div className="text-xs font-bold tracking-wider text-[#C2A396] uppercase">
              Sweet Fix Co. Style
            </div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight tracking-tight">
              Made with love, finished beautifully
            </h2>
            <p className="text-[#7A5B4D] max-w-md">
              Every dessert is prepared fresh and styled with Sweet Fix Co.'s signature soft, elegant finish.
            </p>
          </div>

          <div className="flex-1 w-full relative">
            <div className="grid grid-cols-2 gap-4">
               {/* Decorative Logo Block */}
              <div className="bg-[#FCECE6] rounded-3xl p-6 flex items-center justify-center aspect-square shadow-sm">
                <div className="text-center space-y-2">
                  <div className="flex justify-center text-[#D8A790] mb-2"><Sparkles /></div>
                  <div className="font-serif text-sm tracking-widest text-[#997364] uppercase border-y border-[#E8CFC4] py-2">
                    Sweet Fix Co.
                  </div>
                </div>
              </div>
              
              <div className="row-span-2 relative rounded-3xl overflow-hidden shadow-sm aspect-[4/5] col-start-2 row-start-1">
                 <img src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Tiramisu" />
              </div>

              <div className="rounded-3xl overflow-hidden shadow-sm aspect-square">
                 <img src="https://images.unsplash.com/photo-1551024506-0cb4a1cb1cdd?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Dessert Cups" />
              </div>
            </div>
          </div>
        </section>

        {/* 5. How to Order */}
        <section className="text-center space-y-12">
          <div className="space-y-4">
            <div className="text-xs font-bold tracking-wider text-[#C2A396] uppercase">
              Simple Ordering
            </div>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">How to Order</h2>
            <p className="text-[#7A5B4D]">Pick your dessert, message the details, and Sweet Fix Co. will prepare everything fresh.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Choose your dessert", desc: "Browse the menu preview or send inspiration for a custom order." },
              { num: "02", title: "Send a DM", desc: "Message @sweetfixco._ with your dessert choice, quantity, date, and delivery or collection preference." },
              { num: "03", title: "Allow 24hr notice", desc: "Orders are made fresh, so please message at least 24 hours before you need your desserts." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 lg:p-10 rounded-[2rem] text-left shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#F5EAE5]">
                <div className="font-serif text-3xl text-[#D8A790] mb-6">{step.num}</div>
                <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                <p className="text-[#7A5B4D] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <button className="bg-[#3A241A] text-[#FFFBF9] px-8 py-4 rounded-full font-medium hover:bg-[#2A1911] transition-colors mt-8 inline-block shadow-lg shadow-black/10">
            DM @sweetfixco._ to Order
          </button>
        </section>

        {/* 6. Footer CTA Card */}
        <section className="bg-[#FCECE6] rounded-[3rem] p-10 lg:p-16 flex flex-col lg:flex-row gap-12 justify-between border border-[#F5EAE5]">
          <div className="space-y-8 flex-1">
             <div className="text-xs font-bold tracking-wider text-[#C2A396] uppercase">
              Ready to fix your cravings?
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl leading-[1.1] tracking-tight max-w-lg">
              Message Sweet Fix Co.<br />
              to order fresh<br />
              handmade desserts.
            </h2>
            <div className="space-y-2 text-[#7A5B4D] text-sm font-medium">
              <p className="text-[#3A241A]">Sweet Fix Co.</p>
              <p>Based in Midlands</p>
              <p>Delivery & collection available</p>
              <p>DM to order</p>
              <p>24hr notice required</p>
              <p className="text-[#3A241A] pt-2">TikTok: @sweetfixco._</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 lg:self-center">
             <button className="w-full sm:w-auto bg-[#3A241A] text-[#FFFBF9] px-8 py-4 rounded-full font-medium hover:bg-[#2A1911] transition-colors">
               Message to Order
             </button>
             <button className="w-full sm:w-auto bg-white text-[#3A241A] px-8 py-4 rounded-full font-medium border border-[#E8D9D1] hover:bg-gray-50 transition-colors">
               Follow on TikTok
             </button>
          </div>
        </section>

        {/* Tiny Footer */}
        <footer className="flex justify-between items-center text-xs text-[#997364] font-medium pt-8 pb-4">
          <p>© Sweet Fix Co. — Fix Your Cravings</p>
          <p>@sweetfixco._</p>
        </footer>

      </main>
    </div>
  );
}
