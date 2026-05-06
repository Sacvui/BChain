'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Zap, Globe, ArrowRight, Layers, Users, Award, Target, BookOpen, Cpu, BarChart3, Fingerprint, Lock, Database } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] bg-emerald-50/40 rounded-full blur-3xl -z-10" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-[0.3em] mb-10 shadow-sm"
          >
            <Award size={14} />
            <span>Đề án Nghiên cứu Tiến sĩ · NCS Lê Phúc Hải</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-serif italic mb-10 leading-[1.1] text-slate-950"
          >
            Nâng tầm <span className="text-emerald-600 font-sans not-italic font-black uppercase tracking-tighter">Giá Trị</span> <br />
            Nông sản Việt bằng Blockchain
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed mb-16"
          >
            Hệ sinh thái <span className="font-serif italic text-emerald-600 px-1">fwd</span> <span className="font-bold text-slate-900 uppercase">LIFEchain</span> là sự giao thoa giữa giá trị bản địa truyền thống và công nghệ sổ cái phân tán tiên tiến nhất.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <div className="flex items-center gap-4 bg-slate-50 px-8 py-6 rounded-2xl border border-slate-100 shadow-sm">
               <Database className="text-emerald-600" size={32} />
               <div className="text-left">
                  <div className="text-2xl font-black text-slate-900">Decentralized</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">Hạ tầng phi tập trung</div>
               </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 px-8 py-6 rounded-2xl border border-slate-100 shadow-sm">
               <Fingerprint className="text-blue-600" size={32} />
               <div className="text-left">
                  <div className="text-2xl font-black text-slate-900">Immutable</div>
                  <div className="text-xs text-slate-400 uppercase tracking-widest">Dữ liệu bất biến</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-emerald-500">Thách thức hiện tại</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic leading-tight">Tại sao chúng ta cần một tiêu chuẩn mới?</h3>
              <p className="text-slate-400 text-lg font-light leading-relaxed">
                Trong một thế giới mà người tiêu dùng ngày càng thông minh, việc chỉ dán nhãn "Sạch" hay "Hữu cơ" là chưa đủ. Các lỗ hổng trong chuỗi cung ứng truyền thống dẫn đến:
              </p>
              <div className="space-y-6">
                {[
                  { t: 'Thiếu minh bạch', d: 'Dữ liệu dễ dàng bị thay đổi hoặc làm giả.' },
                  { t: 'Đứt gãy thông tin', d: 'Người mua không biết sản phẩm thực sự đến từ nông trại nào.' },
                  { t: 'Giá trị bị xói mòn', d: 'Nông sản chất lượng cao bị đánh đồng với hàng kém chất lượng.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center flex-shrink-0">
                      <Lock size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.t}</h4>
                      <p className="text-slate-400 text-sm font-light">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500/10 blur-[100px] rounded-full" />
              <div className="grid grid-cols-2 gap-4 relative">
                 <div className="aspect-[4/5] bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end">
                    <BarChart3 className="text-emerald-500 mb-4" size={40} />
                    <div className="text-2xl font-black text-white">85%</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Tin tưởng hơn vào Blockchain</p>
                 </div>
                 <div className="aspect-[4/5] bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-end mt-12">
                    <Users className="text-blue-500 mb-4" size={40} />
                    <div className="text-2xl font-black text-white">Gen Z</div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Phân khúc khách hàng mục tiêu</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The FWD Philosophy Deep Dive */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Triết lý vận hành</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic text-slate-950">Mô hình fwd LIFE</h3>
            <p className="mt-8 text-slate-500 text-lg max-w-2xl mx-auto font-light">
              Chúng tôi không chỉ số hóa dữ liệu, chúng tôi số hóa niềm tin thông qua ba trụ cột chiến lược.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                letter: 'f',
                title: 'Farm (Nông trại)',
                subtitle: 'The Source of Truth',
                desc: 'Mọi hành trình bắt đầu từ gốc rễ. Chúng tôi kết nối trực tiếp với người nông dân, ghi nhận nhật ký sản xuất thời gian thực bằng IoT và định vị GPS không thể chối cãi.',
                icon: Sprout,
                accent: 'emerald'
              },
              {
                letter: 'w',
                title: 'Worth (Giá trị)',
                subtitle: 'Validated Quality',
                desc: 'Mỗi sản phẩm là một thực thể số duy nhất. Giá trị được xác lập dựa trên chứng nhận thật, quy trình thật và sự giám sát đa phương của cộng đồng Blockchain.',
                icon: ShieldCheck,
                accent: 'blue'
              },
              {
                letter: 'd',
                title: 'Driven (Dẫn dắt)',
                subtitle: 'Data-Driven Future',
                desc: 'Sử dụng sức mạnh của AI để phân tích xu hướng tiêu dùng và tối ưu chuỗi cung ứng, dẫn dắt nông nghiệp Việt Nam vươn xa trên bản đồ thế giới.',
                icon: Zap,
                accent: 'amber'
              }
            ].map((p, idx) => (
              <div key={idx} className="relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group">
                <div className={`w-16 h-16 bg-${p.accent}-100 text-${p.accent}-600 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform`}>
                  <p.icon size={32} />
                </div>
                <span className="text-7xl font-serif italic text-slate-200 absolute top-8 right-10 leading-none">{p.letter}</span>
                <h4 className="text-2xl font-black text-slate-950 mb-1">{p.title}</h4>
                <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-6">{p.subtitle}</p>
                <p className="text-slate-500 leading-relaxed font-light">{p.desc}</p>
                <div className="mt-8 pt-8 border-t border-slate-200">
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      <div className={`w-2 h-2 rounded-full bg-${p.accent}-500`} />
                      Node Active
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Methodology */}
      <section className="py-24 bg-emerald-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-20">
             <div className="flex-1 space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-emerald-700 text-[10px] font-bold uppercase tracking-widest">
                  <BookOpen size={14} />
                  <span>Phương pháp nghiên cứu</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif italic leading-tight text-slate-950">
                  Nền tảng học thuật vững chắc
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="space-y-3">
                      <h4 className="font-black text-slate-900 text-lg">Mô hình S-O-R</h4>
                      <p className="text-sm text-slate-500 font-light">Phân tích hành vi người dùng Gen Z dựa trên các kích thích công nghệ.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="font-black text-slate-900 text-lg">Signaling Theory</h4>
                      <p className="text-sm text-slate-500 font-light">Blockchain đóng vai trò là "tín hiệu" chất lượng cực mạnh gửi đến thị trường.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="font-black text-slate-900 text-lg">TAM / UTAUT2</h4>
                      <p className="text-sm text-slate-500 font-light">Nghiên cứu mức độ chấp nhận công nghệ của người tiêu dùng và nông dân.</p>
                   </div>
                   <div className="space-y-3">
                      <h4 className="font-black text-slate-900 text-lg">Green Marketing</h4>
                      <p className="text-sm text-slate-500 font-light">Tích hợp các tiêu chuẩn xanh vào lõi của quá trình xác thực Blockchain.</p>
                   </div>
                </div>
             </div>
             <div className="flex-1 bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100 flex flex-col justify-between">
                <div className="space-y-6">
                   <Target className="text-emerald-600" size={48} />
                   <h4 className="text-2xl font-serif italic text-slate-950 leading-snug">
                     "Mục tiêu tối thượng của tôi là xây dựng một cầu nối bền vững giữa công nghệ cao và bàn ăn của mọi gia đình Việt."
                   </h4>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">LH</div>
                      <div>
                         <div className="font-bold text-slate-900">NCS Lê Phúc Hải</div>
                         <div className="text-xs text-slate-400 uppercase tracking-widest">Founder & Lead Researcher</div>
                      </div>
                   </div>
                </div>
                <div className="mt-12 space-y-4">
                   <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Affiliations</div>
                   <div className="flex gap-4 opacity-50">
                      <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
                      <div className="h-8 w-24 bg-slate-200 rounded animate-pulse" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6">
           <div className="text-center mb-20">
             <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Lộ trình phát triển</h2>
             <h3 className="text-4xl font-serif italic text-slate-950">Hành trình vươn tầm</h3>
           </div>
           
           <div className="relative space-y-12">
              <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-100" />
              {[
                { phase: 'Giai đoạn 1', title: 'Hoàn thiện Proof of Concept (PoC)', desc: 'Xây dựng hạ tầng Blockchain và xác thực cho 3 dòng sản phẩm chủ lực.' },
                { phase: 'Giai đoạn 2', title: 'Mở rộng Mạng lưới Node', desc: 'Kết nối với các hợp tác xã và doanh nghiệp logistics lớn tại Lâm Đồng và Khánh Hòa.' },
                { phase: 'Giai đoạn 3', title: 'AI Integration', desc: 'Triển khai hệ thống dự báo nhu cầu thị trường dựa trên dữ liệu chuỗi cung ứng thực tế.' },
                { phase: 'Giai đoạn 4', title: 'Hệ sinh thái Toàn diện', desc: 'Trở thành tiêu chuẩn xác thực hàng đầu cho nông sản xuất khẩu Việt Nam.' }
              ].map((step, i) => (
                <div key={i} className="relative pl-24 group">
                   <div className="absolute left-6 top-0 w-4 h-4 bg-white border-4 border-emerald-500 rounded-full z-10 group-hover:scale-150 transition-transform" />
                   <div className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">{step.phase}</div>
                   <h4 className="text-2xl font-serif italic text-slate-950 mb-3">{step.title}</h4>
                   <p className="text-slate-500 font-light leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
