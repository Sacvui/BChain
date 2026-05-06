'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Zap, Globe, ArrowRight, Layers, Users, Award, Target } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
            <Sprout size={22} />
          </div>
          <div className="flex flex-col">
             <div className="flex items-baseline gap-1">
                <span className="font-serif text-sm font-light text-emerald-600 italic lowercase">fwd</span>
                <span className="font-sans text-base font-black text-natural-950 uppercase ml-1">LIFE</span>
                <span className="font-serif text-sm font-light text-slate-400 lowercase">chain</span>
             </div>
             <p className="text-[7px] font-medium text-slate-500">Farm · Worth · Driven</p>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/portal" className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-emerald-600 transition-colors">Cổng Portal</Link>
          <Link href="/verify/YEN-001" className="px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-full hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/20 uppercase tracking-widest">Xác thực ngay</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-50/50 rounded-full blur-3xl -z-10" />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-8"
          >
            <Award size={14} />
            <span>Dự án Nghiên cứu Tiến sĩ</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif italic mb-8 leading-tight text-slate-950"
          >
            Định nghĩa lại <span className="text-emerald-600 font-sans not-italic font-black uppercase tracking-tighter">Giá Trị</span> <br />
            từ Nông trại đến Kỹ thuật số
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed mb-12"
          >
            fwd LIFEchain không chỉ là một nền tảng Blockchain. Đây là một hệ sinh thái giá trị được xây dựng trên nền tảng nghiên cứu khoa học, nhằm minh bạch hóa chuỗi cung ứng nông sản và nâng tầm thương hiệu Việt.
          </motion.p>
        </div>
      </section>

      {/* The FWD Framework */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Triết lý cốt lõi</h2>
            <h3 className="text-3xl md:text-4xl font-serif italic text-slate-950">Mô hình fwd LIFE</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                letter: 'F',
                title: 'Farm (Nông trại)',
                meaning: 'Gốc rễ & Sự thật',
                description: 'Mọi dữ liệu bắt đầu từ mảnh đất. Chúng tôi số hóa quy trình canh tác ngay tại hiện trường thông qua IoT và AI.',
                icon: Sprout,
                color: 'text-emerald-600',
                bg: 'bg-emerald-50'
              },
              {
                letter: 'W',
                title: 'Worth (Giá trị)',
                meaning: 'Bảo chứng & Niềm tin',
                description: 'Giá trị không chỉ nằm ở sản phẩm, mà nằm ở sự minh bạch. Mỗi sản phẩm mang một định danh số duy nhất (NFT).',
                icon: ShieldCheck,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              {
                letter: 'D',
                title: 'Driven (Dẫn dắt)',
                meaning: 'Công nghệ & Tương lai',
                description: 'Dẫn dắt bởi dữ liệu lớn (Big Data) và Blockchain để tạo ra một chuỗi giá trị bền vững và có khả năng mở rộng.',
                icon: Zap,
                color: 'text-amber-600',
                bg: 'bg-amber-50'
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm transition-all"
              >
                <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <pillar.icon size={28} />
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-black text-slate-100 block mb-2">{pillar.letter}</span>
                  <h4 className="text-xl font-bold text-slate-900">{pillar.title}</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mt-1">{pillar.meaning}</p>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Identity */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold uppercase tracking-widest text-xs">
                <Target size={16} />
                <span>Tầm nhìn học thuật</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-slate-950">
                Từ Luận án Tiến sĩ đến <br />
                Giải pháp Thực tiễn
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed font-light text-lg">
                <p>
                  Dự án được khởi xướng bởi <strong>NCS Lê Phúc Hải</strong>, tập trung vào việc ứng dụng Blockchain để giải quyết bài toán niềm tin trong ngành nông nghiệp Việt Nam.
                </p>
                <p>
                  Mục tiêu của fwd LIFEchain là tạo ra một "Sổ cái sự thật" (Ledger of Truth), nơi mọi thông tin từ vùng trồng, chứng nhận GlobalGAP đến quá trình logistics đều được mã hóa và không thể thay đổi.
                </p>
              </div>
              <div className="flex gap-12 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-black text-natural-900">100%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Minh bạch</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-natural-900">0.1s</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Xác thực</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-natural-900">24/7</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest mt-1">Giám sát</div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="w-full aspect-square bg-slate-100 rounded-[4rem] overflow-hidden rotate-3 shadow-2xl">
                 <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center p-20">
                    <div className="text-center space-y-6">
                       <Globe size={120} className="mx-auto text-emerald-600/20 animate-pulse" />
                       <div className="text-xs font-mono text-slate-400">CONNECTING NODES...</div>
                    </div>
                 </div>
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-xs">
                <Users size={32} className="text-emerald-600 mb-4" />
                <p className="text-sm font-medium text-slate-900 italic">"Chúng tôi xây dựng công nghệ để bảo vệ giá trị truyền thống."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="h-48 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4">
                      <Layers size={32} className="text-emerald-500" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Blockchain Layer</span>
                   </div>
                   <div className="h-64 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4">
                      <Zap size={32} className="text-amber-500" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Smart Contracts</span>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="h-64 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4">
                      <Globe size={32} className="text-blue-500" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">Node Network</span>
                   </div>
                   <div className="h-48 bg-white/5 rounded-3xl border border-white/10 flex flex-col items-center justify-center gap-4">
                      <Sprout size={32} className="text-emerald-500" />
                      <span className="text-[10px] font-bold tracking-widest uppercase">IoT Sensors</span>
                   </div>
                </div>
             </div>
             <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-serif italic leading-tight">
                  Nền tảng kỹ thuật <br />
                  <span className="text-emerald-500 font-sans not-italic font-black uppercase">LIFE Engine</span>
                </h2>
                <p className="text-slate-400 text-lg font-light leading-relaxed">
                  LIFE Engine là lõi xử lý của fwd LIFEchain, kết hợp giữa thuật toán đồng thuận (Consensus) hiệu năng cao và trí tuệ nhân tạo (AI) để phân tích rủi ro chuỗi cung ứng.
                </p>
                <ul className="space-y-4">
                  {[
                    'Bảo mật mã hóa đa lớp (Multi-layer Encryption)',
                    'Khả năng mở rộng không giới hạn cho hàng triệu sản phẩm',
                    'Tương thích hoàn toàn với các thiết bị IoT di động',
                    'Giao diện quản lý trực quan cho người nông dân'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="pt-8">
                   <Link href="/explorer" className="inline-flex items-center gap-3 text-emerald-500 font-bold uppercase tracking-widest text-xs group">
                      Khám phá hạ tầng 
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
         <div className="max-w-5xl mx-auto px-6">
            <div className="bg-emerald-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/40">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
               <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-serif italic mb-8">Bạn đã sẵn sàng để minh bạch hóa giá trị?</h2>
                  <p className="text-emerald-100 text-lg mb-12 max-w-2xl mx-auto font-light">
                    Tham gia cùng chúng tôi trong cuộc cách mạng số hóa nông nghiệp bền vững.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <Link href="/portal" className="px-10 py-5 bg-white text-emerald-950 rounded-full font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                      Bắt đầu ngay
                    </Link>
                    <Link href="/contact" className="px-10 py-5 bg-emerald-700 text-white rounded-full font-black uppercase tracking-widest hover:bg-emerald-800 transition-all border border-emerald-500">
                      Liên hệ tư vấn
                    </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-slate-100 text-center">
         <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.3em]">
           © 2026 fwd LIFEchain · Farm · Worth · Driven · PhD Research Project
         </p>
      </footer>
    </div>
  );
}
