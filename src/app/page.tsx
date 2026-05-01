'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, Leaf, Search, Package, Link as LinkIcon, QrCode, ArrowRight, Star, Globe, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  {
    id: "YEN-001",
    category: "Yến Sào",
    name: "Yến Sào Tinh Chế Thượng Hạng",
    description: "Sản phẩm khai thác từ hệ thống nhà yến tự nhiên tại Khánh Hòa.",
    attributes: { origin: "Khánh Hòa", purity: "99.9%", grade: "AAA" },
    color: "emerald"
  },
  {
    id: "CAFE-002",
    category: "Cà Phê",
    name: "Arabica Cầu Đất Special",
    description: "Cà phê specialty từ vùng nguyên liệu cao 1600m tại Đà Lạt.",
    attributes: { origin: "Đà Lạt", roast: "Medium", altitude: "1600m" },
    color: "amber"
  }
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#fdfcf8] text-[#1a2f1a] overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-natural-100 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute top-[20%] -left-[10%] w-[30%] h-[30%] bg-emerald-100 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-24">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-natural-900">
             <div className="w-10 h-10 bg-natural-900 rounded-xl flex items-center justify-center text-white">
               <ShieldCheck size={24} />
             </div>
             <span>AGRI<span className="text-natural-500">CHAIN</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-natural-900 transition-colors">Hệ thống</a>
            <a href="#" className="hover:text-natural-900 transition-colors">Báo cáo</a>
            <a href="#" className="px-5 py-2.5 bg-natural-900 text-white rounded-full hover:shadow-lg hover:shadow-natural-900/20 transition-all">Kết nối Node</a>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="mb-32 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-natural-100 shadow-sm text-natural-600 text-xs font-bold mb-8 uppercase tracking-widest">
              <Star size={14} className="fill-natural-500 text-natural-500" />
              <span>Nền tảng minh bạch nông sản số 1</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-8 text-natural-950 tracking-tighter leading-[1.1]">
              Xác thực <span className="relative inline-block text-natural-500">
                Sạch
                <motion.svg 
                  className="absolute -bottom-2 left-0 w-full h-3 text-natural-200" 
                  viewBox="0 0 100 10" 
                  preserveAspectRatio="none"
                >
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" />
                </motion.svg>
              </span> bằng Blockchain
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed mb-12">
              Xây dựng niềm tin vững chắc cho người tiêu dùng Gen Z thông qua quy trình truy xuất nguồn gốc không thể thay đổi và trí tuệ nhân tạo.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
               <button className="px-8 py-4 bg-natural-900 text-white rounded-2xl font-bold flex items-center gap-3 shadow-xl shadow-natural-900/20 hover:-translate-y-1 transition-all">
                 <QrCode size={20} />
                 Quét mã ngay
               </button>
               <button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold flex items-center gap-3 hover:bg-slate-50 transition-all">
                 <Globe size={20} />
                 Xem bản đồ Farm
               </button>
            </div>
          </motion.div>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {[
            { label: "Verified Blocks", value: "12,482", icon: Zap },
            { label: "Partner Farms", value: "85+", icon: Leaf },
            { label: "Product Groups", value: "12", icon: Package },
            { label: "Trust Score", value: "99.8%", icon: ShieldCheck }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-2xl bg-natural-50 flex items-center justify-center text-natural-500">
                  <stat.icon size={24} />
                </div>
              </div>
              <p className="text-3xl font-bold text-natural-900 mb-1">{stat.value}</p>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Product Selection */}
        <section className="space-y-12 mb-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold text-natural-950 mb-3 tracking-tight">Sản phẩm tiêu biểu</h2>
              <p className="text-slate-500 font-light">Chọn sản phẩm bên dưới để bắt đầu luồng xác thực Blockchain.</p>
            </div>
            <Link href="#" className="text-natural-600 font-bold flex items-center gap-2 group">
              Tất cả sản phẩm <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {products.map((p, idx) => (
              <motion.div
                key={p.id}
                onMouseEnter={() => setHoveredProduct(p.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group relative"
              >
                <div className="absolute inset-0 bg-natural-500/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative natural-card p-10 bg-white h-full flex flex-col hover:border-natural-200 transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <span className="px-4 py-1.5 rounded-full bg-natural-50 text-natural-600 text-[10px] font-extrabold uppercase tracking-[0.15em] border border-natural-100">
                      {p.category}
                    </span>
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-natural-900 group-hover:text-white transition-all shadow-sm">
                      <QrCode size={28} />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-natural-900 mb-4 tracking-tight">{p.name}</h3>
                  <p className="text-slate-500 text-sm mb-10 leading-relaxed font-light">
                    {p.description}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-12">
                    {Object.entries(p.attributes).map(([key, value]) => (
                      <div key={key} className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-300 uppercase">{key}</p>
                        <p className="text-sm font-bold text-natural-800">{value}</p>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/verify/${p.id}`}
                    className="mt-auto group/btn inline-flex items-center justify-between w-full p-2 pr-6 bg-slate-50 hover:bg-natural-900 hover:text-white rounded-2xl transition-all font-bold"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-natural-900 shadow-sm group-hover/btn:bg-white/10 group-hover/btn:text-white transition-colors">
                        <Search size={20} />
                      </div>
                      <span>Kiểm tra minh bạch</span>
                    </div>
                    <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="bg-natural-900 rounded-[3rem] p-12 md:p-24 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
             <Globe size={600} className="translate-x-1/2 -translate-y-1/4" />
          </div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Quy trình vận hành phi tập trung</h2>
            <div className="space-y-12">
              {[
                { title: "Ghi nhận từ Farm", desc: "Mọi dữ liệu gieo trồng và chăm sóc được ký số bởi nông dân tại nguồn." },
                { title: "Kiểm định Lab", desc: "Các chỉ số hóa lý được phân tích và đẩy trực tiếp lên chuỗi bởi phòng thí nghiệm." },
                { title: "Chốt Block cuối", desc: "Khi quét mã QR, bạn đang truy vấn dữ liệu trực tiếp từ các node blockchain toàn cầu." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-emerald-400 font-bold text-lg border border-white/10 shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="py-20 px-6 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm font-light">© 2026 AGRI CHAIN - Công nghệ minh bạch nông sản thế hệ mới</p>
      </footer>
    </div>
  );
}
