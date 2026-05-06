'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Zap, Globe, ArrowRight, Layers, Users, Award, Target, BookOpen, Cpu, BarChart3, Fingerprint, Lock, Database, Heart, Microscope, PenTool, Sparkles, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Header />

      {/* Hero Section: The Soul of the Land */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-gradient-to-b from-emerald-50/50 to-white rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-600/30"
            >
              <Heart size={32} fill="currentColor" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm border border-slate-100"
            >
              <span>Di sản số cho Nông nghiệp Việt</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif italic mb-6 leading-[1.1] text-slate-950 max-w-5xl"
            >
              Nơi công nghệ <span className="text-emerald-600 font-sans not-italic font-black uppercase tracking-tighter">Bảo vệ</span> <br />
              linh hồn của đất mẹ
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 font-light max-w-3xl mx-auto leading-relaxed"
            >
              <span className="font-serif italic text-emerald-600">fwd</span> <span className="font-bold text-slate-950">LIFEchain</span> không chỉ là những dòng code khô khan. Đó là lời cam kết của một người con xứ đất đỏ, sử dụng tri thức Tiến sĩ để giữ gìn sự minh bạch cho từng mầm xanh.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Calling: Why we exist */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-emerald-100 rounded-[4rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                 <div className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center p-12">
                       <div className="text-center space-y-6">
                          <Sprout size={120} className="mx-auto text-emerald-600/30" />
                          <p className="text-xs font-mono text-slate-400 tracking-[0.5em]">ROOTS OF INTEGRITY</p>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-xs">
                    <PenTool size={32} className="text-emerald-600 mb-6" />
                    <p className="text-lg font-serif italic text-slate-900 leading-relaxed">
                       "Tôi tin rằng mỗi trái chín, mỗi tổ yến đều mang trong mình một câu chuyện. Blockchain chính là người kể chuyện trung thực nhất."
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">NCS Lê Phúc Hải</span>
                    </div>
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500">Tầm nhìn & Sứ mệnh</h2>
                    <h3 className="text-4xl md:text-5xl font-serif italic text-slate-950 leading-tight">Khi tri thức trở thành <br /> chiếc khiên bảo vệ</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                       Trong suốt hành trình làm nghiên cứu sinh (NCS), tôi nhận ra rằng nỗi đau lớn nhất của người nông dân không phải là sương gió, mà là sự đánh tráo giá trị. Một sản phẩm tâm huyết bị trộn lẫn với hàng kém chất lượng vì thiếu một hệ thống bảo chứng đủ tầm.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 gap-8">
                    {[
                       { title: 'Tâm (The Heart)', desc: 'Xây dựng dựa trên sự thấu hiểu và tôn trọng giá trị thật của sức lao động.' },
                       { title: 'Tầm (The Vision)', desc: 'Hướng tới một tiêu chuẩn nông nghiệp số toàn cầu, nơi thương hiệu Việt được định vị đẳng cấp.' },
                       { title: 'Lực (The Capability)', desc: 'Hạ tầng Blockchain độc lập, bảo mật cao và khả năng mở rộng không giới hạn.' }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 items-start">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                          <div>
                             <h4 className="text-xl font-bold text-slate-900">{item.title}</h4>
                             <p className="text-slate-500 font-light mt-1">{item.desc}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The Deep Philosophy: F-W-D */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5">
           <Globe size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-4">Giá trị cốt lõi</h2>
            <h3 className="text-5xl font-serif italic text-slate-950">Triết lý fwd LIFE</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                letter: 'F',
                title: 'Farm (Nông trại)',
                meaning: 'Cội nguồn của sự sống',
                description: 'Chúng tôi bắt đầu từ mảnh đất, từ bàn tay người nông dân. Mọi dữ liệu thô được ghi nhận bằng IoT tại vùng trồng là "Sự thật gốc" (Origin Truth) không thể xuyên tạc.',
                icon: Sprout,
                color: 'text-emerald-600',
                bg: 'bg-emerald-50'
              },
              {
                letter: 'W',
                title: 'Worth (Giá trị)',
                meaning: 'Bảo chứng sự tử tế',
                description: 'Giá trị không đo bằng tiền, mà bằng sự minh bạch. Mỗi định danh số (NFT) cho sản phẩm là một tấm bằng chứng nhận cho sự tận tâm của người sản xuất.',
                icon: ShieldCheck,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              {
                letter: 'D',
                title: 'Driven (Dẫn dắt)',
                meaning: 'Tương lai số bền vững',
                description: 'Dẫn dắt bởi dữ liệu và thuật toán, nhưng phục vụ con người. Chúng tôi sử dụng AI để dự báo và Blockchain để kết nối, tạo nên một cộng đồng cùng thịnh vượng.',
                icon: Zap,
                color: 'text-amber-600',
                bg: 'bg-amber-50'
              }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200"
              >
                <div className={`w-16 h-16 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-10`}>
                  <pillar.icon size={32} />
                </div>
                <div className="mb-6">
                  <span className="text-5xl font-serif italic text-slate-100 block mb-2">{pillar.letter}</span>
                  <h4 className="text-2xl font-black text-slate-900">{pillar.title}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mt-2">{pillar.meaning}</p>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Capability: Technical Mastery */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '64px 64px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1 space-y-10">
                 <div className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-[0.5em] text-[10px]">
                    <Microscope size={16} />
                    <span>Năng lực thực thi</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-serif italic leading-tight">
                    Công nghệ phục vụ <br /> 
                    <span className="text-emerald-500 font-sans not-italic font-black uppercase tracking-tighter">Đạo đức</span>
                 </h2>
                 <p className="text-slate-400 text-xl font-light leading-relaxed">
                    Chúng tôi không chạy theo xu hướng, chúng tôi xây dựng nền tảng từ những tiêu chuẩn khắt khe nhất của một luận án Tiến sĩ. Mỗi thuật toán đều được kiểm chứng để đảm bảo sự công bằng và minh bạch tuyệt đối.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                       <div className="text-3xl font-black text-white">256-bit</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Mã hóa đa tầng</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black text-white">Zero-Leak</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Bảo mật dữ liệu</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black text-white">Hybrid-AI</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Phân tích rủi ro</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black text-white">P2P Mesh</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Hạ tầng mạng lưới</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1">
                 <div className="relative aspect-square">
                    <div className="absolute inset-0 bg-emerald-500 rounded-full blur-[120px] opacity-20 animate-pulse" />
                    <div className="relative w-full h-full bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl flex items-center justify-center p-16">
                       <div className="text-center space-y-8">
                          <Cpu size={120} className="mx-auto text-emerald-500/50" />
                          <div className="space-y-2">
                             <p className="text-2xl font-black uppercase tracking-tighter">LIFE ENGINE v2.0</p>
                             <p className="text-[10px] font-mono text-slate-500 tracking-[0.5em]">AUTONOMOUS AUDIT PROTOCOL</p>
                          </div>
                          <div className="pt-8 flex flex-wrap justify-center gap-3">
                             {['Consensus', 'IoT Sync', 'AI Audit', 'NFT Minting'].map((tag, i) => (
                                <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                                   {tag}
                                </span>
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The Commitment: Academic Rigor */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
           <GraduationCap size={48} className="mx-auto text-slate-300" />
           <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Cam kết học thuật</h2>
           <h3 className="text-4xl md:text-5xl font-serif italic text-slate-950 leading-tight">
             "Một dự án không chỉ để trình bày, <br /> mà để thay đổi tương lai."
           </h3>
           <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto">
             fwd LIFEchain được phát triển dựa trên các nghiên cứu khoa học nghiêm túc về hành vi người tiêu dùng (mô hình S-O-R), lý thuyết tín hiệu (Signaling Theory) và sự chấp nhận công nghệ (TAM/UTAUT2). Mỗi bước đi của dự án đều có sự bảo chứng về mặt lý luận và thực tiễn.
           </p>
           <div className="pt-12">
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all cursor-pointer">
                 Xem Thesis Roadmap <ArrowRight size={16} />
              </div>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
         <div className="max-w-6xl mx-auto">
            <div className="bg-emerald-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/40 group">
               <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-white/20 transition-all duration-700" />
               <div className="relative z-10 space-y-10">
                  <h2 className="text-5xl md:text-7xl font-serif italic leading-none">Cùng chúng tôi viết tiếp <br /> chương mới cho Nông nghiệp</h2>
                  <p className="text-emerald-100 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                    Sự tử tế của người nông dân cần được công nghệ bảo vệ. Hãy để fwd LIFEchain là người bảo chứng cho giá trị của bạn.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
                    <Link href="/portal" className="px-12 py-6 bg-white text-emerald-950 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all hover:-translate-y-1 shadow-xl">
                      Khởi tạo Di sản số
                    </Link>
                    <Link href="/contact" className="px-12 py-6 bg-emerald-700 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-800 transition-all border border-emerald-500">
                      Kết nối chuyên gia
                    </Link>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
}
