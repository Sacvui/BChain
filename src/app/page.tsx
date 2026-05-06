'use client';

import { useState, useEffect } from 'react';
import { 
  ShieldCheck, Leaf, Search, Package, QrCode, ArrowRight, Star, Globe, Zap, Menu, X,
  Activity, Layers, Clock, BarChart3, Cpu, Lock, Eye, Truck, Users, Sparkles, Sprout
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import QRScanner from '@/components/QRScanner';

const products = [
  {
    id: "YEN-001",
    category: "Yến Sào",
    name: "Yến Sào Tinh Chế Thượng Hạng",
    description: "Khai thác từ hệ thống hang yến tự nhiên tại Ninh Hòa, bảo chứng bởi công nghệ Blockchain và IoT.",
    attributes: { origin: "Khánh Hòa", purity: "99.9%", grade: "AAA" },
    image: "https://images.unsplash.com/photo-1590402444816-a1284b33e1d1?w=800&q=80"
  },
  {
    id: "TRA-003",
    category: "Trà Thảo Mộc",
    name: "Mát Gang Tea - Atisô Đà Lạt",
    description: "Chiết xuất từ hoa Atisô tươi vùng cao nguyên Lạc Dương, sấy lạnh công nghệ cao giữ trọn dược tính.",
    attributes: { origin: "Lâm Đồng", weight: "50g", process: "Sấy lạnh" },
    image: "https://images.unsplash.com/photo-1515471209610-dae1c9a581c5?w=800&q=80"
  },
  {
    id: "CAFE-002",
    category: "Cà Phê",
    name: "Cà Phê Arabica Cầu Đất",
    description: "Hạt Arabica thượng hạng từ độ cao 1600m, rang xay theo phương pháp Honey Process độc bản.",
    attributes: { origin: "Đà Lạt", altitude: "1600m", roast: "Medium" },
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80"
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [showScanner, setShowScanner] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a2f1a] overflow-x-hidden">
      <AnimatePresence>
        {showScanner && <QRScanner onClose={() => setShowScanner(false)} />}
      </AnimatePresence>

      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[60%] md:w-[40%] h-[40%] bg-natural-100 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] md:w-[30%] h-[30%] bg-emerald-100 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-12 md:mb-24 px-2">
          <Link href="/" className="flex items-center gap-3 group">
             <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 transition-transform group-hover:scale-110">
                <Sprout size={24} />
             </div>
             <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                   <span className="font-serif text-2xl tracking-normal text-emerald-600 font-light italic lowercase px-1">fwd</span>
                   <div className="flex items-baseline">
                      <span className="font-sans text-2xl tracking-tighter text-natural-950 font-black uppercase">LIFE</span>
                      <span className="font-serif text-xl tracking-tighter text-natural-900 font-light lowercase">chain</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                   <span className="text-[9px] font-medium text-slate-500">Farm</span>
                   <div className="w-1 h-1 rounded-full bg-emerald-500/30"></div>
                   <span className="text-[9px] font-medium text-slate-500">Worth</span>
                   <div className="w-1 h-1 rounded-full bg-emerald-500/30"></div>
                   <span className="text-[9px] font-medium text-slate-500">Driven</span>
                </div>
             </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-black uppercase tracking-widest text-slate-400">
            <Link href="/about" className="hover:text-emerald-500 transition-colors">Philosophy</Link>
            <Link href="/explorer" className="hover:text-natural-900 transition-colors">Explorer</Link>
            <Link href="/portal" className="hover:text-natural-900 transition-colors">Portal</Link>
            <Link href="/explorer/nodes" className="px-6 py-3 bg-natural-900 text-white rounded-2xl hover:shadow-xl hover:shadow-emerald-500/10 transition-all hover:-translate-y-0.5">Connect Node</Link>
          </div>

          <button 
            className="md:hidden p-2 text-natural-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-2xl z-50 p-8 flex flex-col gap-6 md:hidden border border-slate-100"
            >
              <Link href="/explorer" className="text-lg font-bold text-natural-950">AgriChain Explorer</Link>
              <Link href="/tools/qr" className="text-lg font-bold text-natural-950">Trình tạo mã QR</Link>
              <Link href="/explorer/nodes" className="w-full py-4 bg-natural-900 text-white rounded-2xl font-bold text-center">Kết nối Node</Link>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <header className="mb-20 md:mb-32 text-center relative px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-500 text-[10px] md:text-xs font-bold mb-6 md:mb-8 uppercase tracking-widest">
              <Star size={14} className="text-slate-400" />
              <span>Hệ sinh thái Nông nghiệp Minh bạch</span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black mb-6 md:mb-8 text-natural-950 tracking-tighter leading-[1.1]">
              Farm Worth <span className="text-slate-400 font-light italic">Driven</span>
            </h1>
            <p className="text-slate-500 text-sm md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-8 md:mb-12">
              <span className="font-bold text-natural-900 uppercase tracking-widest text-xs md:text-sm block mb-4">FWD LifeChain</span>
              Minh bạch hóa giá trị nông sản từ gốc rễ nông trại bằng công nghệ Blockchain & AI, 
              kiến tạo niềm tin bền vững cho thế hệ người tiêu dùng mới.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
               <button 
                 onClick={() => setShowScanner(true)}
                 className="w-full sm:w-auto px-8 py-4 bg-natural-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-natural-900/20 hover:-translate-y-1 active:scale-95 transition-all"
               >
                 <QrCode size={20} />
                 Quét mã Camera
               </button>
               <Link 
                 href="/tools/qr"
                 className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all"
               >
                 <Package size={20} />
                 Tạo mã QR SP
               </Link>
            </div>
          </motion.div>
        </header>

        {/* Section 1: Live Network Pulse */}
        <section className="mb-24 md:mb-40">
           <div className="flex items-center gap-3 mb-10 md:mb-16">
              <div className="w-12 h-12 rounded-2xl bg-natural-900 text-white flex items-center justify-center shadow-xl shadow-natural-900/20">
                 <Activity size={24} />
              </div>
              <div>
                 <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase italic">Network <span className="text-emerald-500">Pulse</span></h2>
                 <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest">Real-time Blockchain Activity</p>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Stats */}
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { label: "Active Nodes", value: "128", icon: Globe, color: "text-blue-500" },
                  { label: "Blocks Verified", value: "19.4M", icon: Layers, color: "text-emerald-500" },
                  { label: "T. Throughput", value: "14.2 TPS", icon: Zap, color: "text-amber-500" },
                  { label: "Security Level", value: "99.9%", icon: ShieldCheck, color: "text-purple-500" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 md:p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-900/5 flex flex-col justify-between"
                  >
                    <div className={`${stat.color} mb-6`}><stat.icon size={24} /></div>
                    <div>
                      <p className="text-2xl md:text-4xl font-black text-natural-900 tracking-tighter mb-1">{stat.value}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Big Chart Preview Area */}
                <div className="col-span-2 md:col-span-4 p-8 md:p-12 bg-natural-900 rounded-[3rem] text-white relative overflow-hidden shadow-2xl">
                   <div className="absolute top-0 right-0 p-12 opacity-5"><BarChart3 size={200} /></div>
                   <div className="relative z-10">
                      <div className="flex justify-between items-center mb-12">
                         <h3 className="text-xl font-bold tracking-tight">Ecosystem Transparency Index</h3>
                         <span className="px-4 py-1.5 rounded-full bg-white/10 text-emerald-400 text-[10px] font-bold uppercase border border-white/10">Live Stream</span>
                      </div>
                      <div className="flex items-end gap-2 md:gap-4 h-32 md:h-48 mb-8">
                         {[40, 70, 45, 90, 65, 80, 50, 100, 75, 85, 60, 95].map((h, i) => (
                           <motion.div 
                             key={i}
                             initial={{ height: 0 }}
                             animate={{ height: `${h}%` }}
                             transition={{ delay: i * 0.05, duration: 1 }}
                             className="flex-1 bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg opacity-80"
                           ></motion.div>
                         ))}
                      </div>
                      <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                         <span>Production</span>
                         <span>Logistics</span>
                         <span>Retail</span>
                         <span>Verified</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Sidebar: Latest Activity */}
              <div className="lg:col-span-4 space-y-6">
                 <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-900/5 h-full">
                    <h3 className="text-xs font-black text-natural-900 uppercase tracking-[0.2em] mb-8 flex items-center gap-2">
                       <Clock size={14} className="text-emerald-500" />
                       Recent Validations
                    </h3>
                    <div className="space-y-6">
                       {[
                         { id: "0x7d...f1a", time: "2s ago", type: "Mint", color: "bg-emerald-500" },
                         { id: "0x3a...a4", time: "15s ago", type: "Audit", color: "bg-blue-500" },
                         { id: "0x9c...c0", time: "42s ago", type: "Transfer", color: "bg-amber-500" },
                         { id: "0x5e...e0", time: "1m ago", type: "Verify", color: "bg-purple-500" }
                       ].map((tx, i) => (
                         <div key={i} className="flex items-center justify-between group">
                            <div className="flex items-center gap-4">
                               <div className={`w-2 h-2 rounded-full ${tx.color} animate-pulse`}></div>
                               <div>
                                  <p className="text-[11px] font-mono font-bold text-natural-900 group-hover:text-emerald-500 transition-colors">{tx.id}</p>
                                  <p className="text-[9px] text-slate-400 font-bold uppercase">{tx.type} • {tx.time}</p>
                               </div>
                            </div>
                            <ArrowRight size={14} className="text-slate-200 group-hover:text-natural-900 transition-all" />
                         </div>
                       ))}
                    </div>
                    <Link href="/explorer" className="mt-12 block py-4 bg-slate-50 text-natural-900 rounded-2xl text-[10px] font-black uppercase text-center hover:bg-natural-900 hover:text-white transition-all tracking-[0.2em]">
                       Full Explorer Access
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        {/* Section 2: Immersive Product Showcase */}
        <section className="mb-24 md:mb-40">
          <div className="text-center mb-16 md:mb-24">
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 uppercase italic">Featured <span className="text-emerald-500">Assets</span></h2>
             <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                Các sản phẩm đạt tiêu chuẩn xác thực Blockchain khắt khe nhất trong hệ sinh thái FWD LifeChain.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative rounded-[3rem] overflow-hidden bg-white shadow-2xl shadow-slate-900/5 group-hover:shadow-emerald-500/10 transition-all border border-slate-100 h-full flex flex-col">
                  <div className="h-64 md:h-80 overflow-hidden relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-natural-950 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-6 left-6">
                       <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest border border-white/20">
                          {p.category}
                       </span>
                    </div>
                  </div>

                  <div className="p-8 md:p-10 flex-grow flex flex-col">
                    <h3 className="text-xl md:text-2xl font-black text-natural-900 mb-4 tracking-tight group-hover:text-emerald-500 transition-colors">{p.name}</h3>
                    <p className="text-slate-500 text-xs md:text-sm mb-8 font-light leading-relaxed">
                      {p.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-8 pt-6 border-t border-slate-50">
                       {Object.entries(p.attributes).slice(0, 2).map(([key, value]) => (
                         <div key={key}>
                            <p className="text-[8px] font-bold text-slate-300 uppercase tracking-widest mb-1">{key}</p>
                            <p className="text-[11px] font-black text-natural-800">{value}</p>
                         </div>
                       ))}
                    </div>

                    <Link 
                      href={`/verify/${p.id}`}
                      className="mt-auto py-5 bg-natural-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-emerald-500 hover:text-white transition-all shadow-xl shadow-natural-900/10 group-hover:translate-y-[-4px]"
                    >
                      <Search size={16} />
                      Verify Asset
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Technology Pillars */}
        <section className="mb-24 md:mb-40 p-8 md:p-24 bg-natural-900 rounded-[3rem] md:rounded-[5rem] text-white overflow-hidden relative">
           <div className="absolute top-0 right-0 p-12 opacity-5"><Cpu size={400} className="rotate-12" /></div>
           
           <div className="relative z-10 flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
              <div className="lg:w-1/2">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest border border-emerald-500/30 mb-8">
                    <Sparkles size={14} /> Core Technology
                 </div>
                 <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-tight">AI & <span className="text-emerald-500">Blockchain</span> Synergy</h2>
                 <p className="text-slate-400 text-sm md:text-xl font-light leading-relaxed mb-12">
                    Sự kết hợp hoàn hảo giữa Trí tuệ nhân tạo (AI) để giám sát chất lượng và Chuỗi khối (Blockchain) để lưu trữ vĩnh viễn, tạo nên chuẩn mực mới trong minh bạch nông sản.
                 </p>
                 <div className="flex gap-4">
                    <button className="px-8 py-4 bg-emerald-500 text-natural-950 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20">
                       Learn More
                    </button>
                    <button className="px-8 py-4 bg-white/10 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest border border-white/10 hover:bg-white/20 transition-all">
                       Technical Docs
                    </button>
                 </div>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                 {[
                   { title: "Immutable Ledger", desc: "Dữ liệu không thể sửa xóa một khi đã chốt block.", icon: Lock },
                   { title: "AI Quality Guard", desc: "Phân tích hình ảnh và thông số để đánh giá chất lượng.", icon: Eye },
                   { title: "Smart Logistics", desc: "Tự động kích hoạt thanh toán khi điều kiện IoT thỏa mãn.", icon: Truck },
                   { title: "Global Consensus", desc: "Mạng lưới node toàn cầu cùng tham gia xác thực.", icon: Users }
                 ].map((pill, i) => (
                   <div key={i} className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                      <div className="text-emerald-500 mb-6"><pill.icon size={32} /></div>
                      <h4 className="text-lg md:text-xl font-black mb-3 italic tracking-tight">{pill.title}</h4>
                      <p className="text-slate-500 text-xs md:text-sm font-light leading-relaxed">{pill.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Section 4: Validator CTA */}
        <section className="mb-24 md:mb-32">
           <div className="p-12 md:p-24 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-[3rem] md:rounded-[5rem] text-natural-950 flex flex-col md:flex-row justify-between items-center gap-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700"><ShieldCheck size={300} /></div>
              
              <div className="relative z-10 max-w-2xl">
                 <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 uppercase italic">Become a <span className="text-white">Validator</span></h2>
                 <p className="text-natural-900/70 text-sm md:text-xl font-bold leading-relaxed mb-8">
                    Tham gia vận hành mạng lưới AgriChain và nhận phần thưởng từ các giao dịch xác thực nông sản toàn cầu.
                 </p>
                 <div className="flex gap-4">
                    <button className="px-10 py-5 bg-natural-950 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-2xl shadow-natural-950/20 hover:bg-black transition-all">
                       Connect Node
                    </button>
                 </div>
              </div>

              <div className="relative z-10 bg-white/20 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl">
                 <div className="flex flex-col gap-8">
                    <div className="text-center">
                       <p className="text-4xl md:text-6xl font-black tracking-tighter text-natural-950">128</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-natural-900/50">Active Global Nodes</p>
                    </div>
                    <div className="w-full h-[1px] bg-natural-900/10"></div>
                    <div className="text-center">
                       <p className="text-4xl md:text-6xl font-black tracking-tighter text-natural-950">2.4M</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-natural-900/50">Staked AGRI Tokens</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
}
