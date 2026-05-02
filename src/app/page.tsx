'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Leaf, Search, Package, QrCode, ArrowRight, Star, Globe, Zap, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import QRScanner from '@/components/QRScanner';

const products = [
  {
    id: "yen-sao-nha-trang",
    category: "Yến Sào",
    name: "Yến Sào Nha Trang Premium",
    description: "Sản phẩm khai thác từ hệ thống hang yến tự nhiên tại đảo Nha Trang, tinh chế thủ công 100%.",
    attributes: { origin: "Nha Trang", purity: "99.9%", grade: "AAA" },
    color: "emerald"
  },
  {
    id: "tra-o-long-bao-loc",
    category: "Trà Cao Cấp",
    name: "Trà Ô Long Bảo Lộc",
    description: "Những búp trà 1 tôm 2 lá từ cao nguyên Bảo Lộc, chế biến theo công nghệ lên men bán phần.",
    attributes: { origin: "Bảo Lộc", weight: "250g", altitude: "1200m" },
    color: "amber"
  },
  {
    id: "mat-gang-tea",
    category: "Trà Thảo Mộc",
    name: "Mát Gang Tea - Atisô",
    description: "Chiết xuất từ hoa Atisô tươi vùng cao nguyên Lạc Dương, hỗ trợ thanh nhiệt giải độc.",
    attributes: { origin: "Lạc Dương", weight: "50g", grade: "Premium" },
    color: "emerald"
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
          <div className="flex items-center gap-2 font-bold text-lg md:text-xl tracking-tight text-natural-900">
             <div className="w-8 h-8 md:w-10 md:h-10 bg-natural-900 rounded-xl flex items-center justify-center text-white">
               <ShieldCheck size={20} />
             </div>
             <span>AGRI<span className="text-natural-500">CHAIN</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
            <Link href="/explorer" className="hover:text-natural-900 transition-colors">AgriChain Explorer</Link>
            <Link href="/tools/qr" className="hover:text-natural-900 transition-colors flex items-center gap-1.5">
               <QrCode size={14} /> Trình tạo mã QR
            </Link>
            <Link href="/explorer/nodes" className="px-6 py-3 bg-natural-900 text-white rounded-full hover:shadow-2xl hover:shadow-natural-900/40 transition-all">Kết nối Node</Link>
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
              className="absolute top-20 left-4 right-4 bg-white rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] z-50 p-10 flex flex-col gap-8 md:hidden border border-slate-100"
            >
              <Link href="/explorer" className="text-xl font-black text-natural-950 uppercase tracking-tight">AgriChain Explorer</Link>
              <Link href="/tools/qr" className="text-xl font-black text-natural-950 uppercase tracking-tight">Trình tạo mã QR</Link>
              <Link href="/explorer/nodes" className="w-full py-5 bg-natural-900 text-white rounded-2xl font-black text-center uppercase tracking-widest text-sm shadow-xl shadow-natural-900/20">Kết nối Node</Link>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-natural-100 shadow-xl shadow-natural-900/5 text-natural-600 text-[10px] md:text-[11px] font-black mb-8 md:mb-12 uppercase tracking-[0.2em]">
              <Star size={14} className="fill-natural-500 text-natural-500" />
              <span>Tiên phong minh bạch nông sản 4.0</span>
            </div>
            <h1 className="text-5xl md:text-[9rem] font-black mb-10 md:mb-14 text-natural-950 tracking-[-0.04em] leading-[0.9] lg:leading-[0.85]">
              Xác thực <span className="relative inline-block text-emerald-500">
                Sạch
                <motion.svg 
                  className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-5 text-emerald-100" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="6" />
                </motion.svg>
              </span> <br className="hidden md:block" /> bằng Blockchain
            </h1>
            <p className="text-slate-500 text-sm md:text-2xl max-w-3xl mx-auto font-light leading-relaxed mb-12 md:mb-20 px-4">
              Mô hình thị phạm giải pháp <span className="font-bold text-natural-900">AI-Trust</span> tích hợp <span className="font-bold text-natural-900">Blockchain</span> trong truy xuất nguồn gốc nông sản. Đề tài nghiên cứu ứng dụng công nghệ số hóa chuỗi giá trị bền vững.
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
                  className="w-full sm:w-auto px-10 py-5 bg-white border border-slate-200 text-slate-700 rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
                >
                  <Package size={20} />
                  Tạo mã QR SP
                </Link>
            </div>
          </motion.div>
        </header>

        {/* Stats Section - Mobile Scrollable */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-4 md:gap-8 mb-20 md:mb-32 pb-4 no-scrollbar scroll-px-4 snap-x">
          {[
            { label: "Verified Blocks", value: "12,482", icon: Zap },
            { label: "Partner Farms", value: "85+", icon: Leaf },
            { label: "Product Groups", value: "12", icon: Package },
            { label: "Trust Score", value: "99.8%", icon: ShieldCheck }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              className="min-w-[160px] md:min-w-0 snap-center text-center p-6 bg-white/50 rounded-3xl border border-slate-100"
            >
              <div className="flex justify-center mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-natural-50 flex items-center justify-center text-natural-500">
                  <stat.icon size={20} />
                </div>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-natural-900 mb-1">{stat.value}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Selection */}
        <section className="space-y-8 md:space-y-12 mb-20 md:mb-32 px-2">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-natural-950 mb-2 tracking-tight">Sản phẩm tiêu biểu</h2>
              <p className="text-slate-500 text-sm font-light">Chọn sản phẩm để xem luồng xác thực Blockchain.</p>
            </div>
            <Link href="#" className="text-natural-600 font-bold flex items-center gap-2 group text-sm">
              Tất cả sản phẩm <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {products.map((p) => (
              <motion.div
                key={p.id}
                className="group relative"
              >
                <div className="relative natural-card p-6 md:p-10 bg-white h-full flex flex-col hover:border-natural-200 transition-all shadow-sm">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <span className="px-3 py-1 rounded-full bg-natural-50 text-natural-600 text-[9px] md:text-[10px] font-extrabold uppercase tracking-widest border border-natural-100">
                      {p.category}
                    </span>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-natural-900 group-hover:text-white transition-all">
                      <QrCode size={24} />
                    </div>
                  </div>

                  <h3 className="text-xl md:text-3xl font-bold text-natural-900 mb-2 md:mb-4 tracking-tight">{p.name}</h3>
                  <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-10 leading-relaxed font-light">
                    {p.description}
                  </p>

                  <div className="grid grid-cols-3 gap-2 md:gap-4 mb-8 md:mb-12">
                    {Object.entries(p.attributes).map(([key, value]) => (
                      <div key={key} className="space-y-0.5">
                        <p className="text-[8px] md:text-[10px] font-bold text-slate-300 uppercase">{key}</p>
                        <p className="text-[10px] md:text-sm font-bold text-natural-800">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/verify/${p.id}`}
                    className="mt-auto group/btn inline-flex items-center justify-between w-full p-2 pr-4 md:pr-6 bg-slate-50 hover:bg-natural-900 hover:text-white rounded-2xl transition-all font-bold text-sm md:text-base"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center text-natural-900 shadow-sm group-hover/btn:bg-white/10 group-hover/btn:text-white transition-colors">
                        <Search size={18} />
                      </div>
                      <span>Xác minh nhanh</span>
                    </div>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works - Mobile Optimized */}
        <section className="bg-natural-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
             <Globe size={400} className="translate-x-1/2 -translate-y-1/4" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-8 tracking-tight">Quy trình vận hành phi tập trung</h2>
            <div className="space-y-8 md:space-y-12">
              {[
                { title: "Ghi nhận từ Farm", desc: "Mọi dữ liệu gieo trồng và chăm sóc được ký số bởi nông dân tại nguồn." },
                { title: "Kiểm định Lab", desc: "Các chỉ số hóa lý được phân tích và đẩy trực tiếp lên chuỗi bởi phòng thí nghiệm." },
                { title: "Chốt Block cuối", desc: "Khi quét mã QR, bạn đang truy vấn dữ liệu trực tiếp từ các node blockchain." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 font-bold text-sm md:text-lg border border-white/10 shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1 md:mb-2">{item.title}</h4>
                    <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 md:py-20 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[10px] md:text-sm font-light">© 2026 AGRI CHAIN - Công nghệ minh bạch nông sản thế hệ mới</p>
      </footer>
    </div>
  );
}
