'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Zap, Globe, ArrowRight, Layers, Users, Award, Target, BookOpen, Cpu, BarChart3, Fingerprint, Lock, Database, Heart, Microscope, PenTool, Sparkles, GraduationCap, Waves } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Header />

      {/* Hero Section: The Soul of the Mekong */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] bg-gradient-to-b from-emerald-50/50 to-white rounded-full blur-[120px] -z-10" />
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center space-y-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-600/30"
            >
              <Waves size={32} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-[0.4em] shadow-sm border border-slate-100"
            >
              <span>Vùng nguyên liệu Việt · Tầm nhìn Toàn cầu</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif italic mb-6 leading-[1.1] text-slate-950 max-w-5xl"
            >
              Khi phù sa <span className="text-emerald-600 font-sans not-italic font-black uppercase tracking-tighter">Hội tụ</span> <br />
              cùng công nghệ minh bạch
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed"
            >
              <span className="font-serif italic text-emerald-600">fwd</span> <span className="font-bold text-slate-950">LIFEchain</span> là lời cam kết của một người con miền Tây sông nước, mang khát vọng nâng tầm nông sản sạch từ chính vùng nguyên liệu Việt Nam vươn xa trên bản đồ thế giới.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Insight: Deeply Personal */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-emerald-100 rounded-[4rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
                 <div className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center p-12 text-center">
                       <div className="space-y-6">
                          <Waves size={120} className="mx-auto text-emerald-600/30" />
                          <p className="text-xs font-mono text-slate-400 tracking-[0.5em]">MEKONG DELTA SOUL</p>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-xs">
                    <Heart size={32} className="text-emerald-600 mb-6" />
                    <p className="text-lg font-serif italic text-slate-900 leading-relaxed">
                       "Tôi lớn lên từ phù sa, tôi hiểu giá trị của sự an toàn. Blockchain không chỉ là kỹ thuật, nó là cách tôi bảo vệ sự tử tế của người nông dân mình."
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">NCS Lê Phúc Hải</span>
                    </div>
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500">Tầm nhìn & Sứ mệnh</h2>
                    <h3 className="text-4xl md:text-5xl font-serif italic text-slate-950 leading-tight">Từ vùng nguyên liệu nội địa <br /> đến bàn ăn quốc tế</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                       Trong suốt hành trình làm nghiên cứu sinh (NCS), tôi nhận thấy giá trị thực sự của nông sản Việt nằm ở sự sạch và an toàn. Tuy nhiên, sự thiếu hụt niềm tin đã khiến những sản phẩm chất lượng nhất bị đánh đồng. fwd LIFEchain ra đời để xóa tan rào cản đó, khẳng định đẳng cấp của nông sản từ vùng nguyên liệu Việt Nam.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 gap-8">
                    {[
                       { title: 'Tâm (The Heart)', desc: 'Xây dựng dựa trên sự thấu hiểu vùng đất Miền Tây và khát vọng bảo vệ người tiêu dùng bằng thực phẩm sạch.' },
                       { title: 'Tầm (The Vision)', desc: 'Phát triển chuỗi giá trị nông sản nguyên liệu Việt Nam đạt chuẩn quốc tế thông qua công nghệ minh bạch.' },
                       { title: 'Lực (The Capability)', desc: 'Hệ thống Blockchain & AI hiệu năng cao, tối ưu hóa cho việc xác thực nguồn gốc và chất lượng an toàn vệ sinh.' }
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

      {/* The F-W-D Framework: Refined */}
      <section className="py-32 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-4">Giá trị vận hành</h2>
            <h3 className="text-5xl font-serif italic text-slate-950">Triết lý fwd LIFE</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                letter: 'F',
                title: 'Farm (Vùng nguyên liệu)',
                meaning: 'Nơi khởi nguồn sự an toàn',
                description: 'Chúng tôi bắt đầu từ chính những vùng trồng trù phú của Việt Nam. Dữ liệu sạch được ghi nhận trực tiếp, đảm bảo quy trình canh tác đạt chuẩn an toàn vệ sinh thực phẩm.',
                icon: Sprout,
                color: 'text-emerald-600',
                bg: 'bg-emerald-50'
              },
              {
                letter: 'W',
                title: 'Worth (Giá trị thực)',
                meaning: 'Sản phẩm sạch cho cộng đồng',
                description: 'Giá trị nằm ở sức khỏe con người. Mỗi chứng nhận số (NFT) là lời cam kết về một sản phẩm nông sản sạch, không hóa chất, an toàn cho mọi gia đình.',
                icon: ShieldCheck,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              {
                letter: 'D',
                title: 'Driven (Dẫn dắt)',
                meaning: 'Phát triển nông nghiệp Việt',
                description: 'Dẫn dắt bởi công nghệ để tối ưu hóa nguồn lực nội địa. Chúng tôi sử dụng Blockchain để kết nối nông sản Việt trực tiếp với thị trường toàn cầu.',
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

      {/* Technical Rigor: Năng lực & Tâm thế */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1 space-y-10">
                 <div className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-[0.5em] text-[10px]">
                    <Microscope size={16} />
                    <span>Năng lực thực thi chuyên sâu</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-serif italic leading-tight">
                    Công nghệ vì <br /> 
                    <span className="text-emerald-500 font-sans not-italic font-black uppercase tracking-tighter">Thực phẩm sạch</span>
                 </h2>
                 <p className="text-slate-400 text-xl font-light leading-relaxed">
                    Với tư cách là một nghiên cứu sinh, tôi không chỉ xây dựng phần mềm. Tôi xây dựng một hệ thống kiểm soát chất lượng tự động, nơi Blockchain và AI giám sát từng bước đi của nông sản từ vùng nguyên liệu Việt đến tay người dùng.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-6">
                    <div>
                       <div className="text-3xl font-black text-white">Secure-Trace</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Truy xuất 100%</div>
                    </div>
                    <div>
                       <div className="text-3xl font-black text-white">Safe-Check</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Giám sát an toàn</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1 relative">
                 <div className="w-full h-full bg-white/5 rounded-[4rem] border border-white/10 backdrop-blur-xl p-16 text-center">
                    <Cpu size={80} className="mx-auto text-emerald-500/50 mb-8" />
                    <h4 className="text-2xl font-black uppercase tracking-tighter mb-4">Vùng nguyên liệu Việt v2.0</h4>
                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                       Hệ thống quản lý dữ liệu an toàn thực phẩm trên nền tảng Blockchain, được thiết kế riêng cho đặc thù nông nghiệp Việt Nam.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* The Commitment: Academic & Heart */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
           <GraduationCap size={48} className="mx-auto text-slate-300" />
           <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Cam kết từ tâm</h2>
           <h3 className="text-4xl md:text-5xl font-serif italic text-slate-950 leading-tight">
             "Mục tiêu của tôi là mỗi sản phẩm Việt <br /> đều mang trong mình niềm tự hào về độ sạch và an toàn."
           </h3>
           <p className="text-slate-500 text-lg font-light leading-relaxed max-w-3xl mx-auto">
             Kết hợp giữa nghiên cứu khoa học hàn lâm và sự thấu hiểu thực địa từ miền Tây sông nước, fwd LIFEchain cam kết xây dựng một tương lai nơi nông sản nguyên liệu Việt Nam là bảo chứng cho chất lượng cao cấp nhất.
           </p>
           <div className="pt-12">
              <Link href="/portal" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all">
                 Khởi tạo giá trị sạch <ArrowRight size={16} />
              </Link>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
