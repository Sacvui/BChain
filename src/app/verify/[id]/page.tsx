'use client';

import { useState, useEffect, use } from 'react';
import { db, Product, BlockchainNode } from '@/lib/store/nosql-sim';
import { 
  ArrowLeft, ShieldCheck, MapPin, FileText, ImageIcon, ExternalLink, 
  Hash, Clock, Globe, Fingerprint, Activity, Layers, Sparkles, 
  Leaf, Package, Zap, Thermometer, Droplets, BarChart3, TrendingUp, Heart, Download,
  Box, ChevronRight, Copy, X, QrCode, ShieldAlert, Cpu
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function VerifyPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedNode, setSelectedNode] = useState<BlockchainNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(true);
  const [showHashModal, setShowHashModal] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { id } = unwrappedParams;
      const data = await db.findOne('products', { id });
      
      // Simulate scanning animation
      setTimeout(() => {
        setIsScanning(false);
        setProduct(data);
        if (data && data.nodes.length > 0) {
          setSelectedNode(data.nodes[0]);
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 },
            colors: ['#10b981', '#3b82f6', '#fdfcf8', '#6366f1']
          });
        }
        setLoading(false);
      }, 2500);
    };
    fetchData();
  }, [unwrappedParams]);

  if (isScanning) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0f0a] text-white p-6 overflow-hidden">
       <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #34d399 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
       </div>
       <motion.div 
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         className="relative w-48 h-48 md:w-64 md:h-64 mb-12"
       >
         <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-[3rem] shadow-[0_0_50px_rgba(16,185,129,0.1)]"></div>
         <motion.div 
            animate={{ 
              boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 60px rgba(16,185,129,0.5)", "0 0 20px rgba(16,185,129,0.2)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-4 border border-emerald-500/30 rounded-[2.5rem]"
         ></motion.div>
         <motion.div 
           animate={{ top: ['0%', '100%', '0%'] }}
           transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
           className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_30px_rgba(52,211,153,1)] z-10"
         ></motion.div>
         <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
               <Fingerprint size={100} className="text-emerald-400" />
            </motion.div>
         </div>
       </motion.div>
       <h2 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter text-center uppercase italic">AgriChain Authenticator</h2>
       <div className="flex items-center gap-4 text-emerald-400/70 font-mono text-xs md:text-sm">
          <span className="animate-pulse">QUERYING BLOCK {Math.floor(Math.random() * 20000000)}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
       </div>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf8] p-6 text-center">
      <div className="max-w-md p-10 bg-white rounded-[3rem] border border-slate-100 shadow-2xl">
        <ShieldAlert size={60} className="text-rose-500 mx-auto mb-6" />
        <h1 className="text-2xl font-black text-natural-900 mb-4 uppercase tracking-tight">Mã định danh không tồn tại</h1>
        <p className="text-slate-500 font-light leading-relaxed mb-8">Hệ thống AgriChain không tìm thấy thông tin cho mã này. Có thể sản phẩm đã bị làm giả hoặc chưa được ghi nhận lên chuỗi.</p>
        <Link href="/" className="w-full py-4 bg-natural-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95">
           <ArrowLeft size={18} /> QUAY LẠI TRANG CHỦ
        </Link>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fdfcf8] text-[#1a2f1a] pb-12 md:pb-24">
      {/* Premium Header Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100 px-4 md:px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-natural-900 transition-colors font-black text-[10px] md:text-xs tracking-widest uppercase">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">QUAY LẠI</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Connected: AgriChain Core v3</span>
            </div>
            <div className="px-4 py-2 rounded-full bg-emerald-500 text-white text-[10px] font-black shadow-xl shadow-emerald-500/30 flex items-center gap-2 uppercase tracking-widest">
              <ShieldCheck size={14} /> Verified on Blockchain
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 md:px-12 md:py-10">
        
        {/* NEW: Horizontal Blockchain Timeline at the TOP */}
        <section className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 px-2">
            <div className="space-y-2">
              <h2 className="text-xs md:text-sm font-black text-slate-400 uppercase tracking-[0.3em] flex items-center gap-3">
                <Layers size={18} className="text-emerald-500" />
                Dòng thời gian chuỗi khối
              </h2>
              <p className="text-3xl md:text-5xl font-black text-natural-950 tracking-tighter">Blockchain <span className="text-emerald-500 italic">Journey</span></p>
            </div>
            <div className="flex items-center gap-3 text-[10px] font-black text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100 shadow-sm">
              <Sparkles size={14} /> AI-TRUST VERIFIED SYSTEM
            </div>
          </div>

          <div className="relative group/timeline">
             {/* Horizontal Connection Line */}
             <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 hidden md:block rounded-full">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"
                ></motion.div>
             </div>

             <div className="flex overflow-x-auto pb-8 pt-4 gap-4 md:gap-10 snap-x no-scrollbar relative z-10">
                {product.nodes.map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onClick={() => setSelectedNode(node)}
                    className={`relative flex-shrink-0 w-[260px] md:w-[320px] snap-center cursor-pointer p-6 rounded-[2.5rem] border-2 transition-all duration-500 ${
                      selectedNode === node 
                      ? 'bg-white border-emerald-500 shadow-2xl shadow-emerald-900/20' 
                      : 'bg-white/40 border-slate-100 backdrop-blur-sm grayscale-[0.8] opacity-60 hover:opacity-100 hover:grayscale-0'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                       <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
                         selectedNode === node ? 'bg-emerald-500 text-white rotate-12 scale-110' : 'bg-slate-100 text-slate-400'
                       }`}>
                          {node.type === 'FARM' ? <Leaf size={22} /> : node.type === 'PROCESSING' ? <Activity size={22} /> : node.type === 'LAB' ? <Cpu size={22} /> : <Globe size={22} />}
                       </div>
                       <div className="text-right">
                          <p className={`text-[9px] font-mono font-black ${selectedNode === node ? 'text-emerald-500' : 'text-slate-400'}`}>BLOCK #{node.blockNumber || '19,482k'}</p>
                          <p className="text-[8px] font-black text-slate-300 uppercase tracking-widest mt-1">Confirmed Layer 2</p>
                       </div>
                    </div>

                    <div className="space-y-2 mb-6">
                       <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-lg border ${
                         selectedNode === node ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-slate-50 text-slate-400 border-slate-100'
                       }`}>
                          {node.type} PHASE
                       </span>
                       <h4 className="text-lg font-black text-natural-900 tracking-tight leading-tight">{node.title}</h4>
                    </div>

                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <Clock size={12} className="text-slate-300" />
                          <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{new Date(node.timestamp).toLocaleDateString('vi-VN')}</span>
                       </div>
                       {selectedNode === node && (
                         <motion.div 
                           layoutId="active-glow" 
                           className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,1)]"
                         ></motion.div>
                       )}
                    </div>

                    {/* Step indicator circle on the line (desktop only) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+145px)] hidden md:block">
                       <div className={`w-6 h-6 rounded-full border-4 border-[#fdfcf8] transition-all duration-500 ${selectedNode === node ? 'bg-emerald-500 shadow-[0_0_0_8px_rgba(16,185,129,0.2)] scale-125' : 'bg-slate-200'}`}></div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-20">
          
          {/* Left Column: Product Insights */}
          <div className="lg:col-span-4 space-y-10 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {product.image && (
                <div className="mb-8 rounded-[3.5rem] overflow-hidden border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-square bg-white relative group">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-natural-950/40 via-transparent to-transparent pointer-events-none"></div>
                  <motion.div 
                    animate={{ top: ['-10%', '110%', '-10%'] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[3px] bg-emerald-400 shadow-[0_0_30px_rgba(52,211,153,1)] z-10 opacity-60"
                  ></motion.div>
                  
                  {/* Verified Badge Overlay */}
                  <div className="absolute top-6 right-6">
                     <motion.div 
                       animate={{ scale: [1, 1.1, 1] }}
                       transition={{ duration: 2, repeat: Infinity }}
                       className="w-20 h-20 rounded-full bg-emerald-500/90 backdrop-blur-md flex flex-col items-center justify-center text-white border-4 border-white/20 shadow-2xl"
                     >
                        <ShieldCheck size={28} />
                        <span className="text-[7px] font-black uppercase tracking-widest mt-1">Authentic</span>
                     </motion.div>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-natural-100 text-natural-700 text-[10px] font-black uppercase tracking-widest border border-natural-200">
                  {product.category}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest border border-blue-100">
                  {product.attributes.grade || 'Premium'}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-natural-950 mb-10 tracking-tighter leading-[0.9]">{product.name}</h1>
              
              <div className="space-y-6 md:space-y-10">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group hover:border-emerald-500/20 transition-all">
                  <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                    <Fingerprint size={120} />
                  </div>
                  <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.3em] mb-8">Thông số định danh</h3>
                  <div className="space-y-5">
                    {Object.entries(product.attributes).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-sm md:text-base border-b border-slate-50 pb-4 last:border-0 last:pb-0">
                        <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{key.replace('_', ' ')}</span>
                        <span className="font-black text-natural-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {product.sustainability && (
                   <div className="p-10 rounded-[3.5rem] bg-[#111b11] text-white shadow-2xl relative overflow-hidden group">
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]"></div>
                      <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                               <Sparkles size={24} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-widest text-emerald-400">AI Trust Analysis</span>
                         </div>
                         <div className="text-center mb-10">
                            <motion.h3 
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                              className="text-7xl font-black tracking-tighter text-white"
                            >
                              {product.sustainability.score}
                            </motion.h3>
                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mt-2">Sustainability Score</p>
                         </div>
                         <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 italic text-sm leading-relaxed text-slate-300 font-light">
                            "{product.sustainability.ai_insight}"
                         </div>
                      </div>
                   </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Node Experience */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {selectedNode && (
                <motion.div 
                  key={selectedNode.id || selectedNode.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="bg-white rounded-[3rem] md:rounded-[4rem] border border-slate-100 shadow-[0_100px_150px_-30px_rgba(0,0,0,0.12)] overflow-hidden min-h-[600px] flex flex-col relative"
                >
                  {/* Immersive Visual Header */}
                  <div className="h-[300px] md:h-[450px] relative overflow-hidden group">
                    <img 
                      src={selectedNode.images[0]} 
                      alt={selectedNode.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-natural-950 via-natural-950/30 to-transparent"></div>
                    <div className="absolute top-10 left-10 flex gap-4">
                       <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/20">
                         {selectedNode.type} NODE
                       </span>
                    </div>
                    <div className="absolute bottom-10 left-10 right-10">
                       <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="space-y-4"
                       >
                          <div className="flex items-center gap-3">
                             <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                             <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.3em]">Live Verification Data</span>
                          </div>
                          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter leading-[0.9]">{selectedNode.title}</h2>
                       </motion.div>
                    </div>
                  </div>

                  {/* Blockchain Trust Bar */}
                  <div className="bg-slate-50 border-b border-slate-100 px-8 py-6 md:px-12 flex flex-wrap items-center justify-between gap-6">
                     <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-500 shadow-sm border border-slate-100">
                           <ShieldCheck size={24} />
                        </div>
                        <div>
                           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Hash Signature Status</p>
                           <p className="text-sm font-black text-natural-900">VERIFIED & IMMUTABLE</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block">
                           <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Tx Hash</p>
                           <p className="text-[10px] font-mono font-bold text-natural-900">{selectedNode.hash.substring(0, 16)}...</p>
                        </div>
                        <button 
                           onClick={() => setShowHashModal(true)}
                           className="px-6 py-3 bg-emerald-500 text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95"
                        >
                           Verify Raw Data
                        </button>
                     </div>
                  </div>

                  <div className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                     <div className="space-y-12">
                        <div>
                           <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Mô tả chi tiết</h4>
                           <p className="text-slate-600 text-sm md:text-lg font-light leading-relaxed">
                              {selectedNode.description}
                           </p>
                        </div>

                        <div className="p-8 rounded-[3rem] bg-natural-50 border border-natural-100 relative overflow-hidden group">
                           <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                              <MapPin size={80} />
                           </div>
                           <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">Vị trí địa lý</h4>
                           <p className="text-xl font-black text-natural-900 mb-2">{selectedNode.location}</p>
                           <p className="text-xs font-mono font-bold text-slate-400 tracking-widest">{selectedNode.coordinates}</p>
                           <Link href="#" className="mt-6 flex items-center gap-2 text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] hover:gap-4 transition-all">
                              View on Satellite <ArrowRight size={14} />
                           </Link>
                        </div>

                        {selectedNode.telemetry && <TelemetryDashboard telemetry={selectedNode.telemetry} />}
                     </div>

                     <div className="space-y-12">
                        <div>
                           <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-6">Chứng chỉ & Bằng chứng</h4>
                           <div className="space-y-3">
                              {selectedNode.documents.map((doc, i) => (
                                <motion.a 
                                  whileHover={{ x: 10 }}
                                  key={i} href={doc.url}
                                  className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 hover:border-emerald-500 transition-all shadow-sm group"
                                >
                                   <div className="flex items-center gap-4">
                                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                         <FileText size={20} />
                                      </div>
                                      <span className="text-xs font-black text-slate-700">{doc.name}</span>
                                   </div>
                                   <ExternalLink size={16} className="text-slate-200 group-hover:text-emerald-500" />
                                </motion.a>
                              ))}
                           </div>
                        </div>

                        <div className="bg-[#0a0f0a] rounded-[3rem] p-10 text-white relative overflow-hidden border border-white/5 shadow-2xl">
                           <div className="absolute inset-0 bg-emerald-500/5 animate-pulse"></div>
                           <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.4em] mb-8">Explorer Integration</h4>
                           <div className="space-y-6">
                              <p className="text-xs text-slate-400 font-light leading-relaxed">Mọi công đoạn này được niêm phong vào một khối (Block) duy nhất trên chuỗi AgriChain. Bạn có thể xem mã nguồn và giao dịch trực tiếp trên trình khám phá khối.</p>
                              <Link 
                                href={`/explorer/${selectedNode.txHash || selectedNode.hash}`}
                                className="w-full py-5 bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/30 hover:bg-emerald-400 transition-all"
                              >
                                 <Globe size={18} /> View on AgriChain Explorer
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Final Action */}
      <div className="mt-20 flex flex-col items-center gap-8 px-4">
         <div className="flex items-center gap-4">
            <div className="h-[1px] w-12 md:w-24 bg-slate-200"></div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.5em]">Trust Verified</p>
            <div className="h-[1px] w-12 md:w-24 bg-slate-200"></div>
         </div>
         <Link href="/" className="px-12 py-6 bg-natural-900 text-white rounded-[2rem] font-black text-sm uppercase tracking-widest flex items-center gap-4 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)] hover:-translate-y-2 hover:bg-black transition-all active:scale-95 group">
            <QrCode size={24} className="group-hover:rotate-12 transition-transform" /> 
            Quét thêm sản phẩm khác
         </Link>
      </div>

      <AnimatePresence>
        {showHashModal && selectedNode && (
          <HashSimulator node={selectedNode} onClose={() => setShowHashModal(false)} />
        )}
      </AnimatePresence>
    </main>
  );
}

function TelemetryDashboard({ telemetry }: { telemetry: any[] }) {
  return (
    <div className="space-y-6">
      <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] flex items-center gap-2">
        <Activity size={14} className="text-emerald-500" />
        Dữ liệu cảm biến thời gian thực
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {telemetry.map((t, i) => (
          <div key={i} className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  {t.label.includes('Nhiệt') ? <Thermometer size={18} /> : t.label.includes('Độ ẩm') ? <Droplets size={18} /> : <BarChart3 size={18} />}
                </div>
                <div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">{t.label}</p>
                  <p className="text-2xl font-black text-natural-900 leading-none">
                    {t.data[t.data.length - 1].value}{t.unit}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="h-16 w-full flex items-end gap-1.5 px-1">
              {t.data.map((d: any, idx: number) => {
                const max = Math.max(...t.data.map((item: any) => item.value));
                const min = Math.min(...t.data.map((item: any) => item.value));
                const height = max === min ? 50 : ((d.value - min) / (max - min)) * 80 + 20;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    className="flex-1 bg-emerald-500/10 rounded-t-lg relative group/bar hover:bg-emerald-500/30 transition-colors"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-natural-900 text-white text-[9px] px-2 py-1 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity z-10 font-bold">
                      {d.value}{t.unit}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HashSimulator({ node, onClose }: { node: BlockchainNode, onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [currentHash, setCurrentHash] = useState('');
  
  const rawData = JSON.stringify({
    id: node.id,
    type: node.type,
    title: node.title,
    location: node.location,
    timestamp: node.timestamp
  }, null, 2);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1200);

    let interval: any;
    const t2 = setTimeout(() => {
      setStep(2);
      interval = setInterval(() => {
        setCurrentHash('0x' + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join(''));
      }, 40);
    }, 2500);

    const t3 = setTimeout(() => {
      clearInterval(interval);
      setCurrentHash(node.hash);
      setStep(3);
      confetti({ 
        particleCount: 150, 
        spread: 120, 
        origin: { y: 0.5 }, 
        zIndex: 10000,
        colors: ['#34d399', '#ffffff', '#10b981']
      });
    }, 5500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(interval);
    };
  }, [node]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
    >
      <div className="w-full max-w-3xl bg-[#0a0f0a] border border-white/10 rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.2)] flex flex-col max-h-[90vh]">
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
               <Cpu size={24} />
             </div>
             <div>
               <h3 className="text-white font-black text-lg tracking-widest uppercase italic">Blockchain Verification Node</h3>
               <p className="text-emerald-500/60 text-[10px] font-mono tracking-widest uppercase">Node Status: Active • Network: AgriChain Mainnet</p>
             </div>
          </div>
          <button onClick={onClose} className="w-12 h-12 rounded-2xl bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-all"><X size={24} /></button>
        </div>
        
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar flex-grow flex flex-col gap-10">
           {/* Step 1: Raw Data Block */}
           <div className={`transition-all duration-700 ${step >= 0 ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
               <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse"></span> 01. Trích xuất dữ liệu gốc
             </p>
             <pre className="bg-black p-8 rounded-[2rem] text-blue-400 text-xs md:text-sm font-mono overflow-x-auto border border-white/5 leading-relaxed">
               {rawData}
             </pre>
           </div>

           {/* Step 2: Hashing process */}
           <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
               <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span> 02. Thuật toán băm Merkle Root
             </p>
             <div className="bg-black p-8 rounded-[2rem] border border-white/5 flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    <Hash size={32} className={step === 2 ? "text-amber-500" : "text-slate-700"} />
                  </motion.div>
                  <p className={`font-mono text-xs md:text-lg break-all leading-tight ${step === 2 ? 'text-amber-400' : 'text-slate-700'}`}>
                    {step >= 2 ? currentHash : 'Awaiting data stream...'}
                  </p>
                </div>
                {step === 2 && (
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3 }}
                        className="h-full bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                      ></motion.div>
                   </div>
                )}
             </div>
           </div>

           {/* Step 3: Result Match */}
           <div className={`transition-all duration-700 ${step >= 3 ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
             <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
               <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> 03. Kết quả đối soát chuỗi
             </p>
             <div className="bg-emerald-500/10 p-10 rounded-[2.5rem] border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
               {step >= 3 ? (
                  <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_40px_rgba(16,185,129,0.5)] shrink-0">
                       <ShieldCheck size={50} />
                    </div>
                    <div className="text-center md:text-left">
                       <h4 className="text-2xl font-black text-emerald-400 mb-2 uppercase tracking-tight italic">Authentication Success!</h4>
                       <p className="text-slate-400 text-sm md:text-base font-light leading-relaxed">Dữ liệu hoàn toàn trùng khớp với chữ ký số được lưu trữ tại Block #19,482,041. Sản phẩm được xác nhận là <span className="text-emerald-400 font-black">CHÍNH HÃNG</span> và không bị sửa đổi.</p>
                    </div>
                  </div>
               ) : (
                  <div className="flex items-center gap-4 text-slate-600 animate-pulse">
                     <Activity size={20} />
                     <p className="text-sm font-mono uppercase tracking-widest">Awaiting result match...</p>
                  </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
