'use client';

import { useState } from 'react';
import { 
  Globe, Book, Search, FileText, Code, 
  Layers, Zap, Cpu, ArrowRight, Terminal, Menu, X
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function DocumentationPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = [
    {
      title: "Getting Started",
      icon: Zap,
      items: ["Mạng lưới AgriChain là gì?", "Cài đặt ví AgriChain", "Hướng dẫn quét mã QR"]
    },
    {
      title: "Core Concepts",
      icon: Layers,
      items: ["Cơ chế đồng thuận Proof of Trust", "Cấu trúc Block & Transaction", "Smart Contract Logic"]
    },
    {
      title: "Developer Guides",
      icon: Terminal,
      items: ["Tích hợp API v3", "Websocket Events", "Xây dựng dApp trên AgriChain"]
    },
    {
      title: "Validator Docs",
      icon: Cpu,
      items: ["Yêu cầu phần cứng", "Staking & Rewards", "Bảo mật Node"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-natural-900 rounded-lg flex items-center justify-center text-white shadow-lg shadow-natural-900/20 group-hover:rotate-12 transition-transform">
               <Book size={18} />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase">AgriChain<span className="text-emerald-500 ml-1">Docs</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 w-80">
             <Search size={14} className="text-slate-400" />
             <input type="text" placeholder="Search documentation..." className="bg-transparent border-none text-xs focus:outline-none w-full" />
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-400 hover:text-natural-900">
             {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-20">
           <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase italic">Hi, How can we <span className="text-emerald-500">help?</span></h1>
           <p className="text-slate-500 text-lg max-w-2xl mx-auto">Tài liệu hướng dẫn chi tiết dành cho người dùng, nhà phát triển và validator trong hệ sinh thái AgriChain.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {sections.map((section, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-900/5 hover:border-emerald-500/20 transition-all group"
             >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                   <section.icon size={24} />
                </div>
                <h3 className="text-lg font-black text-natural-900 mb-6 uppercase italic">{section.title}</h3>
                <div className="space-y-4">
                   {section.items.map((item, j) => (
                     <Link key={j} href="#" className="flex items-center justify-between text-sm text-slate-500 hover:text-emerald-500 transition-colors group/item">
                        <span>{item}</span>
                        <ArrowRight size={14} className="opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all" />
                     </Link>
                   ))}
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-24 p-12 md:p-20 bg-[#111b11] rounded-[4rem] text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
           <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #34d399 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
           <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase italic">Become an <span className="text-emerald-500">Expert</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">Tham gia cộng đồng nhà phát triển của chúng tôi trên Discord để thảo luận, đặt câu hỏi và đóng góp cho mã nguồn mở của AgriChain.</p>
              <div className="flex flex-wrap gap-6">
                 <button className="px-10 py-5 bg-emerald-500 text-natural-950 rounded-[2rem] font-black uppercase tracking-widest shadow-2xl shadow-emerald-500/30 hover:bg-emerald-400 transition-all">
                    JOIN DISCORD
                 </button>
                 <button className="px-10 py-5 bg-white/10 text-white rounded-[2rem] font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-all">
                    GITHUB REPO
                 </button>
              </div>
           </div>
           <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-emerald-500/10 rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              <Code size={180} className="text-emerald-500 opacity-20 relative z-10" />
           </div>
        </div>
      </main>
    </div>
  );
}
