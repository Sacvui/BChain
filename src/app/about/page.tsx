'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, Zap, Globe, ArrowRight, Layers, Award, Target, BookOpen, Cpu, BarChart3, Fingerprint, Lock, Database, Heart, Microscope, PenTool, Sparkles, GraduationCap, Waves } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Header />

      {/* Hero Section: Phù sa & Công nghệ */}
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
              <span>Nông sản Việt · Giá trị thật · Từ tâm Việt</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif italic mb-6 leading-[1.1] text-slate-950 max-w-5xl"
            >
              Câu chuyện <span className="text-emerald-600 font-sans not-italic font-black uppercase tracking-tighter">Phù Sa</span> <br />
              viết bằng Blockchain
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-500 font-light max-w-4xl mx-auto leading-relaxed"
            >
              <span className="font-serif italic text-emerald-600">fwd</span> <span className="font-bold text-slate-950">LIFEchain</span> ra đời từ khát khao của một người con miền Tây, mong muốn dùng công nghệ để bảo chứng cho từng sản phẩm sạch, an toàn từ vùng nguyên liệu trù phú của quê hương Việt Nam.
            </motion.p>
          </div>
        </div>
      </section>

      {/* The Soul: Người con miền Tây */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
              <div className="relative">
                 <div className="absolute -inset-4 bg-emerald-100 rounded-[4rem] blur-2xl opacity-30" />
                 <div className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl overflow-hidden border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent flex items-center justify-center p-12 text-center">
                       <div className="space-y-6">
                          <Waves size={120} className="mx-auto text-emerald-600/20" />
                          <p className="text-[10px] font-black text-slate-400 tracking-[0.5em] uppercase">Mekong Delta Legacy</p>
                       </div>
                    </div>
                 </div>
                 <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 max-w-sm">
                    <Heart size={32} className="text-emerald-600 mb-6" />
                    <p className="text-lg font-serif italic text-slate-900 leading-relaxed">
                       "Lớn lên bên những dòng kinh, tôi thấu hiểu giá trị của sự an toàn trong từng bữa ăn. Dự án này là tâm huyết của tôi để nông sản sạch Việt Nam có một danh phận xứng đáng."
                    </p>
                    <div className="mt-6 pt-6 border-t border-slate-100">
                       <span className="text-xs font-black uppercase tracking-widest text-slate-400">NCS Lê Phúc Hải</span>
                    </div>
                 </div>
              </div>
              <div className="space-y-12">
                 <div className="space-y-6">
                    <h2 className="text-xs font-black uppercase tracking-[0.5em] text-emerald-500">Tâm nguyện & Tầm nhìn</h2>
                    <h3 className="text-4xl md:text-5xl font-serif italic text-slate-950 leading-tight">Khi công nghệ thấu hiểu <br /> tấm lòng người nông dân</h3>
                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                       Trong hành trình nghiên cứu tiến sĩ, tôi luôn trăn trở làm sao để mỗi sản phẩm nông sản nguyên liệu từ Việt Nam đều được công nhận đúng giá trị. fwd LIFEchain không chỉ là giải pháp kỹ thuật, mà là cầu nối niềm tin giữa vùng nguyên liệu an toàn và người tiêu dùng hiện đại.
                    </p>
                 </div>
                 <div className="grid grid-cols-1 gap-10">
                    {[
                       { title: 'Cái Tâm', desc: 'Bắt đầu từ sự chân thành, mong muốn bảo vệ sức khỏe cộng đồng qua nguồn thực phẩm sạch.' },
                       { title: 'Cái Tầm', desc: 'Đưa nông sản Việt đạt chuẩn minh bạch quốc tế, khẳng định năng lực sản xuất nội địa.' },
                       { title: 'Năng Lực', desc: 'Hệ thống Blockchain hiện đại được thiết kế riêng để xác thực nguồn gốc một cách khách quan nhất.' }
                    ].map((item, i) => (
                       <div key={i} className="flex gap-6 items-start">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0" />
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

      {/* The Values: F-W-D simplified and natural */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-400 mb-4">Giá trị vận hành</h2>
            <h3 className="text-5xl font-serif italic text-slate-950">Triết lý fwd LIFE</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                letter: 'F',
                title: 'Farm (Vùng nguyên liệu)',
                meaning: 'Gốc rễ của sự an toàn',
                description: 'Dữ liệu được ghi nhận trực tiếp tại vườn, đảm bảo quy trình sản xuất sạch và minh bạch từ khâu canh tác đầu tiên.',
                icon: Sprout,
                color: 'text-emerald-600',
                bg: 'bg-emerald-50'
              },
              {
                letter: 'W',
                title: 'Worth (Giá trị sạch)',
                meaning: 'Lời hứa về chất lượng',
                description: 'Chúng tôi tôn trọng giá trị thật của nông sản. Mỗi sản phẩm được bảo chứng là một cam kết về an toàn thực phẩm cho cộng đồng.',
                icon: ShieldCheck,
                color: 'text-blue-600',
                bg: 'bg-blue-50'
              },
              {
                letter: 'D',
                title: 'Driven (Dẫn dắt)',
                meaning: 'Vươn tầm nông sản Việt',
                description: 'Sử dụng công nghệ để mở lối, giúp nông sản nguyên liệu Việt Nam trực tiếp kết nối và tạo dựng niềm tin trên toàn cầu.',
                icon: Zap,
                color: 'text-amber-600',
                bg: 'bg-amber-50'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 ${pillar.bg} ${pillar.color} rounded-2xl flex items-center justify-center mb-8`}>
                  <pillar.icon size={28} />
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-serif italic text-slate-200 block mb-2">{pillar.letter}</span>
                  <h4 className="text-2xl font-black text-slate-900">{pillar.title}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mt-2">{pillar.meaning}</p>
                </div>
                <p className="text-slate-500 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence: Nói về năng lực một cách nhẹ nhàng */}
      <section className="py-32 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row gap-24 items-center">
              <div className="flex-1 space-y-10">
                 <div className="inline-flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-[0.5em] text-[10px]">
                    <Microscope size={16} />
                    <span>Năng lực thực thi</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-serif italic leading-tight">
                    Minh bạch hóa <br /> 
                    <span className="text-emerald-500 font-sans not-italic font-black uppercase tracking-tighter">Niềm tin số</span>
                 </h2>
                 <p className="text-slate-400 text-lg font-light leading-relaxed">
                    Được xây dựng trên nền tảng của một đề án nghiên cứu tiến sĩ, hệ thống của chúng tôi sử dụng những tiêu chuẩn bảo mật cao nhất để giám sát an toàn vệ sinh thực phẩm cho nông sản Việt.
                 </p>
                 <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                       <div className="text-2xl font-black text-white">Xác thực 100%</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Nguồn gốc nguyên liệu</div>
                    </div>
                    <div>
                       <div className="text-2xl font-black text-white">Bảo mật đa tầng</div>
                       <div className="text-[10px] text-slate-500 uppercase tracking-widest mt-2">Dữ liệu bất biến</div>
                    </div>
                 </div>
              </div>
              <div className="flex-1">
                 <div className="bg-white/5 rounded-[3rem] border border-white/10 p-12 text-center">
                    <Cpu size={64} className="mx-auto text-emerald-500/50 mb-8" />
                    <h4 className="text-xl font-black uppercase tracking-tighter mb-4">Vùng nguyên liệu Việt v2.0</h4>
                    <p className="text-slate-400 text-sm font-light">
                       Hệ thống xác thực thông tin nông sản sạch dựa trên Blockchain, tối ưu cho đặc thù vùng nguyên liệu tại Việt Nam.
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final Message: Tâm thư */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
           <GraduationCap size={40} className="mx-auto text-slate-300" />
           <h3 className="text-3xl md:text-4xl font-serif italic text-slate-950 leading-tight">
             "Tôi tin rằng mỗi bữa cơm an toàn của người Việt <br /> chính là thước đo thành công lớn nhất của dự án này."
           </h3>
           <p className="text-slate-500 text-lg font-light leading-relaxed">
             Với sự kết hợp giữa tri thức hàn lâm và tình yêu quê hương, fwd LIFEchain cam kết đồng hành cùng nông nghiệp Việt Nam trên con đường chinh phục niềm tin của khách hàng bằng sự sạch sẽ và minh bạch tuyệt đối.
           </p>
           <div className="pt-10">
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
