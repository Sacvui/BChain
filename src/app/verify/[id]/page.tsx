'use client';

import { useState, useEffect, use } from 'react';
import { db, Product, BlockchainNode } from '@/lib/store/nosql-sim';
import { 
  ArrowLeft, ShieldCheck, MapPin, FileText, ImageIcon, ExternalLink, 
  Hash, Clock, Globe, Fingerprint, Activity, Layers, Sparkles, 
  Leaf, Package, Zap, Thermometer, Droplets, BarChart3, TrendingUp, Heart, Download,
  Box, ChevronRight, Copy, X, QrCode, ShieldAlert, Cpu, ArrowRight,
  Shield, Info, Database, Search, CheckCircle2
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
  const [activeTab, setActiveTab] = useState<'details' | 'blockchain' | 'sustainability'>('details');

  useEffect(() => {
    const fetchData = async () => {
      const { id } = unwrappedParams;
      const data = await db.findOne('products', { id });
      
      // Simulate high-fidelity scanning animation
      setTimeout(() => {
        setIsScanning(false);
        setProduct(data);
        if (data && data.nodes.length > 0) {
          setSelectedNode(data.nodes[0]);
          confetti({
            particleCount: 150,
            spread: 70,
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#050805] text-white p-6 overflow-hidden">
       {/* High-tech background grid */}
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#34d399 1px, transparent 1px), linear-gradient(90deg, #34d399 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
       </div>
       
       <motion.div 
         initial={{ scale: 0.5, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         className="relative w-64 h-64 md:w-80 md:h-80 mb-12"
       >
         <div className="absolute inset-0 border-[8px] border-emerald-500/10 rounded-[4rem]"></div>
         <motion.div 
            animate={{ 
              boxShadow: ["0 0 40px rgba(16,185,129,0.1)", "0 0 100px rgba(16,185,129,0.4)", "0 0 40px rgba(16,185,129,0.1)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-6 border-2 border-emerald-500/20 rounded-[3rem]"
         ></motion.div>
         
         <motion.div 
           animate={{ top: ['0%', '100%', '0%'] }}
           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
           className="absolute left-0 right-0 h-1.5 bg-emerald-400 shadow-[0_0_40px_rgba(52,211,153,1)] z-10"
         ></motion.div>

         <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                opacity: [0.2, 0.6, 0.2],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
               <Fingerprint size={120} className="text-emerald-400" />
            </motion.div>
         </div>
       </motion.div>
       
       <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-center uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
          Decrypting Identity
       </h2>
       <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-emerald-400/50 font-mono text-sm uppercase tracking-widest">
            <span className="animate-pulse">Accessing Node #8824...</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <div className="w-48 h-1 bg-white/5 rounded-full mt-4 overflow-hidden">
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{ duration: 2.5 }}
               className="h-full bg-emerald-500"
             ></motion.div>
          </div>
       </div>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf8] p-6 text-center">
      <div className="max-w-md p-12 bg-white rounded-[4rem] border border-slate-100 shadow-2xl">
        <ShieldAlert size={80} className="text-rose-500 mx-auto mb-8" />
        <h1 className="text-3xl font-black text-natural-900 mb-4 uppercase tracking-tighter">Identity Not Found</h1>
        <p className="text-slate-500 font-light leading-relaxed mb-10">Mã sản phẩm này chưa được đăng ký trên AgriChain Core. Vui lòng kiểm tra lại tem chống giả hoặc liên hệ nhà sản xuất.</p>
        <Link href="/" className="w-full py-5 bg-natural-900 text-white rounded-3xl font-bold flex items-center justify-center gap-3 hover:bg-black transition-all active:scale-95 shadow-2xl shadow-natural-900/20">
           <ArrowLeft size={20} /> QUAY LẠI TRANG CHỦ
        </Link>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fdfcf8] text-[#1a2f1a] pb-24">
      {/* Sticky Premium Header */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-2xl border-b border-slate-100 px-4 md:px-8 py-5 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 text-slate-900 group">
            <div className="w-10 h-10 bg-natural-900 rounded-xl flex items-center justify-center text-white shadow-xl shadow-natural-900/20 group-hover:rotate-12 transition-transform">
               <ShieldCheck size={20} />
            </div>
            <span className="font-black tracking-tighter text-2xl uppercase">AgriChain<span className="text-emerald-500 ml-1">Trust</span></span>
          </Link>
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden lg:flex items-center gap-3 px-5 py-2 bg-slate-50 border border-slate-100 rounded-2xl">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-[11px] font-mono font-black text-slate-400 uppercase tracking-widest">Protocol: V3.0-Mainnet</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-emerald-500 text-white text-[11px] font-black shadow-2xl shadow-emerald-500/40 flex items-center gap-2 uppercase tracking-[0.1em]">
              <CheckCircle2 size={16} /> Verified Authentic
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        
        {/* Product Digital Passport Header */}
        <section className="mb-16 md:mb-24">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
              <div className="lg:col-span-5">
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                   className="relative group"
                 >
                    <div className="absolute -inset-4 bg-emerald-500/10 rounded-[4.5rem] blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                    <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl aspect-square bg-white">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-natural-950/40 via-transparent to-transparent"></div>
                       {/* Identity Overlay */}
                       <div className="absolute bottom-10 left-10 right-10">
                          <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] text-white">
                             <QrCode size={32} />
                             <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Product Fingerprint</p>
                                <p className="text-xs font-mono font-bold truncate">{product.id.toUpperCase()}</p>
                             </div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                 >
                    <div className="flex items-center gap-4 mb-6">
                       <span className="px-5 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-[0.1em] border border-emerald-100">
                          {product.category}
                       </span>
                       <span className="px-5 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-[0.1em] border border-blue-100">
                          {product.attributes.origin}
                       </span>
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black text-natural-950 mb-8 tracking-tighter leading-[0.85]">
                       {product.name.split(' ').map((word, i) => i === 0 ? word + ' ' : <span key={i} className="text-emerald-500">{word} </span>)}
                    </h1>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                       {Object.entries(product.attributes).map(([key, value]) => (
                         <div key={key} className="p-6 bg-white rounded-[2rem] border border-slate-100 shadow-sm">
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">{key.replace('_', ' ')}</p>
                            <p className="text-lg font-black text-natural-900">{value}</p>
                         </div>
                       ))}
                    </div>
                 </motion.div>

                 <div className="flex flex-wrap gap-4 pt-4">
                    <button className="px-8 py-5 bg-natural-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-natural-900/30 hover:-translate-y-1 transition-all active:scale-95">
                       <Download size={20} /> Certificate of Trust
                    </button>
                    <button className="px-8 py-5 bg-white border border-slate-200 text-slate-900 rounded-[2rem] font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-slate-50 transition-all active:scale-95">
                       <Share2 size={20} /> Share Asset
                    </button>
                 </div>
              </div>
           </div>
        </section>

        {/* High-Fidelity Blockchain Timeline */}
        <section className="mb-24">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                 <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                    <Layers size={20} className="text-emerald-500" />
                    Lịch sử chuỗi cung ứng (Blockchain Ledger)
                 </h2>
                 <p className="text-4xl md:text-6xl font-black text-natural-950 tracking-tighter">Traceability <span className="text-emerald-500">Stream</span></p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-[2rem] border border-emerald-100 shadow-xl shadow-emerald-900/5">
                 <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
                    <Activity size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Network Status</p>
                    <p className="text-sm font-black text-natural-900 italic">Sychronized & Verified</p>
                 </div>
              </div>
           </div>

           <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-slate-100 -translate-y-1/2 hidden md:block rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   animate={{ width: '100%' }}
                   transition={{ duration: 2.5, ease: "easeInOut" }}
                   className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"
                 ></motion.div>
              </div>

              <div className="flex overflow-x-auto pb-12 pt-6 gap-6 md:gap-12 snap-x no-scrollbar relative z-10">
                 {product.nodes.map((node, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.2 }}
                     onClick={() => setSelectedNode(node)}
                     className={`relative flex-shrink-0 w-[280px] md:w-[360px] snap-center cursor-pointer p-8 rounded-[3rem] border-4 transition-all duration-500 ${
                       selectedNode === node 
                       ? 'bg-white border-emerald-500 shadow-[0_40px_80px_-15px_rgba(16,185,129,0.2)]' 
                       : 'bg-white/40 border-slate-100 backdrop-blur-md opacity-60 hover:opacity-100 hover:scale-[1.02]'
                     }`}
                   >
                     <div className="flex items-start justify-between mb-8">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 ${
                          selectedNode === node ? 'bg-emerald-500 text-white rotate-12 scale-110' : 'bg-slate-100 text-slate-400'
                        }`}>
                           {node.type === 'FARM' ? <Leaf size={28} /> : node.type === 'PROCESSING' ? <Zap size={28} /> : node.type === 'LAB' ? <Cpu size={28} /> : <Globe size={28} />}
                        </div>
                        <div className="text-right">
                           <p className={`text-[10px] font-mono font-black ${selectedNode === node ? 'text-emerald-500' : 'text-slate-400'}`}>BLOCK #{node.blockNumber}</p>
                           <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em] mt-1">Confirmed Layer 2</p>
                        </div>
                     </div>

                     <div className="space-y-3 mb-8">
                        <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-xl border ${
                          selectedNode === node ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-slate-50 text-slate-400 border-slate-100'
                        }`}>
                           {node.type} PHASE
                        </span>
                        <h4 className="text-2xl font-black text-natural-900 tracking-tighter leading-tight">{node.title}</h4>
                     </div>

                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <Clock size={14} className="text-slate-300" />
                           <span className="text-[11px] text-slate-400 font-black uppercase tracking-[0.2em]">{new Date(node.timestamp).toLocaleDateString('vi-VN')}</span>
                        </div>
                        <ChevronRight size={20} className={selectedNode === node ? 'text-emerald-500' : 'text-slate-200'} />
                     </div>

                     {/* Step indicator circle on the line (desktop only) */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%+190px)] hidden md:block">
                        <div className={`w-8 h-8 rounded-full border-4 border-[#fdfcf8] transition-all duration-500 ${selectedNode === node ? 'bg-emerald-500 shadow-[0_0_0_12px_rgba(16,185,129,0.2)] scale-125' : 'bg-slate-200'}`}></div>
                     </div>
                   </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Selected Node Details - Full Width immersive view */}
        <AnimatePresence mode="wait">
           {selectedNode && (
             <motion.div
               key={selectedNode.id}
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -50 }}
               className="bg-white rounded-[4rem] border border-slate-100 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] overflow-hidden"
             >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                   {/* Visual side */}
                   <div className="h-[400px] lg:h-auto relative overflow-hidden group">
                      <img src={selectedNode.images[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-natural-950 via-natural-950/20 to-transparent"></div>
                      <div className="absolute bottom-12 left-12 right-12">
                         <div className="flex items-center gap-4 mb-4">
                            <span className="px-4 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-xl shadow-emerald-500/30">Verified Evidence</span>
                            <span className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest rounded-xl border border-white/20">GPS: {selectedNode.coordinates}</span>
                         </div>
                         <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">{selectedNode.title}</h2>
                      </div>
                   </div>

                   {/* Content side */}
                   <div className="p-10 md:p-20 space-y-12">
                      <div className="flex justify-between items-start">
                         <div className="space-y-1">
                            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Audit Description</p>
                            <h3 className="text-3xl font-black text-natural-950 tracking-tighter">Ghi chép công đoạn</h3>
                         </div>
                         <div className="w-16 h-16 rounded-[2rem] bg-emerald-50 flex items-center justify-center text-emerald-500 border border-emerald-100">
                            <ShieldCheck size={32} />
                         </div>
                      </div>

                      <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed">
                         {selectedNode.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                            <MapPin className="text-natural-400 mb-4" size={24} />
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Cơ sở vận hành</p>
                            <p className="text-lg font-black text-natural-900 leading-tight">{selectedNode.location}</p>
                         </div>
                         <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                            <Clock className="text-natural-400 mb-4" size={24} />
                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Thời gian ghi nhận</p>
                            <p className="text-lg font-black text-natural-900 leading-tight">{new Date(selectedNode.timestamp).toLocaleString('vi-VN')}</p>
                         </div>
                      </div>

                      <div className="space-y-6">
                         <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Tài liệu bảo chứng (Immutable Paperwork)</h4>
                         <div className="grid grid-cols-1 gap-4">
                            {selectedNode.documents.map((doc, i) => (
                              <a key={i} href={doc.url} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-3xl hover:border-emerald-500 transition-all group shadow-sm">
                                 <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                       <FileText size={20} />
                                    </div>
                                    <span className="text-sm font-black text-slate-700">{doc.name}</span>
                                 </div>
                                 <ExternalLink size={20} className="text-slate-200 group-hover:text-emerald-500" />
                              </a>
                            ))}
                         </div>
                      </div>

                      <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between">
                         <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-[#111b11] flex items-center justify-center text-emerald-400">
                               <Fingerprint size={24} />
                            </div>
                            <div>
                               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Digital Signature</p>
                               <p className="text-xs font-mono font-bold text-slate-900">{selectedNode.hash.substring(0, 24)}...</p>
                            </div>
                         </div>
                         <Link 
                           href={`/explorer/${selectedNode.txHash || selectedNode.hash}`}
                           className="w-full md:w-auto px-8 py-4 bg-emerald-500 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all active:scale-95"
                         >
                            <Globe size={18} /> View on AgriChain Explorer
                         </Link>
                      </div>
                   </div>
                </div>
             </motion.div>
           )}
        </AnimatePresence>

        {/* AI Trust & Sustainability Section */}
        {product.sustainability && (
           <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-12 md:p-20 rounded-[4rem] bg-[#111b11] text-white relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                          <Sparkles size={28} />
                       </div>
                       <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400">AI Trust Synthesis</span>
                    </div>
                    <div className="flex items-end gap-4 mb-12">
                       <h3 className="text-9xl font-black tracking-tighter leading-none">{product.sustainability.score}</h3>
                       <div className="pb-4">
                          <p className="text-xl font-bold text-emerald-400">/100</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Stability Score</p>
                       </div>
                    </div>
                    <div className="space-y-6">
                       <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-md italic text-lg leading-relaxed font-light text-slate-300">
                          "{product.sustainability.ai_insight}"
                       </div>
                       <div className="grid grid-cols-3 gap-4">
                          {[
                            { label: "Carbon", value: product.sustainability.carbon_footprint, icon: Globe },
                            { label: "Water", value: product.sustainability.water_saved, icon: Activity },
                            { label: "Social", value: product.sustainability.social_impact, icon: Heart }
                          ].map((item, i) => (
                            <div key={i} className="text-center p-4 bg-white/5 rounded-3xl border border-white/5">
                               <item.icon size={16} className="mx-auto mb-2 text-emerald-400" />
                               <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{item.label}</p>
                               <p className="text-[11px] font-bold text-white truncate">{item.value}</p>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </div>

              <div className="space-y-8">
                 <div className="p-12 md:p-16 rounded-[4rem] bg-white border border-slate-100 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[400px]">
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none"></div>
                    <div>
                       <h3 className="text-3xl font-black text-natural-950 mb-6 tracking-tighter">Xác thực IOT & Cảm biến</h3>
                       <p className="text-slate-500 font-light leading-relaxed mb-10">Dữ liệu telemetry từ các thiết bị cảm biến tại trang trại và nhà máy được đồng bộ trực tiếp lên AgriChain để đảm bảo điều kiện môi trường luôn tối ưu.</p>
                    </div>
                    {selectedNode?.telemetry ? (
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {selectedNode.telemetry.map((t, i) => (
                             <div key={i} className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                                <div className="flex justify-between items-center mb-4">
                                   <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-500 shadow-sm">
                                      {t.label.includes('Nhiệt') ? <Thermometer size={18} /> : <Droplets size={18} />}
                                   </div>
                                   <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest bg-emerald-50 px-2 py-1 rounded">Optimal</span>
                                </div>
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{t.label}</p>
                                <p className="text-2xl font-black text-natural-900">{t.data[t.data.length-1].value}{t.unit}</p>
                             </div>
                          ))}
                       </div>
                    ) : (
                       <div className="p-10 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200 text-center">
                          <Activity className="mx-auto mb-4 text-slate-300" size={40} />
                          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select a phase to view telemetry</p>
                       </div>
                    )}
                 </div>

                 <div className="p-10 rounded-[4rem] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-between group cursor-pointer hover:bg-emerald-600 transition-all">
                    <div className="flex items-center gap-6">
                       <div className="w-16 h-16 rounded-[2rem] bg-white/20 flex items-center justify-center border border-white/20 group-hover:rotate-12 transition-transform">
                          <Hash size={32} />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">Simulation Tools</p>
                          <p className="text-2xl font-black tracking-tighter">Verify Raw Hashing</p>
                       </div>
                    </div>
                    <button 
                       onClick={() => setShowHashModal(true)}
                       className="w-14 h-14 rounded-full bg-white text-emerald-500 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                    >
                       <ArrowRight size={28} />
                    </button>
                 </div>
              </div>
           </section>
        )}
      </div>

      {/* Footer Final CTA */}
      <div className="mt-32 flex flex-col items-center gap-10 px-4">
         <div className="flex items-center gap-6">
            <div className="h-[1px] w-20 md:w-40 bg-slate-200"></div>
            <div className="flex items-center gap-3">
               <ShieldCheck className="text-emerald-500" size={24} />
               <span className="text-xs font-black text-slate-400 uppercase tracking-[0.5em]">AgriChain Sealed</span>
            </div>
            <div className="h-[1px] w-20 md:w-40 bg-slate-200"></div>
         </div>
         <Link href="/" className="px-16 py-8 bg-natural-900 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.2em] flex items-center gap-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 hover:bg-black transition-all active:scale-95 group">
            <QrCode size={28} className="group-hover:rotate-12 transition-transform" /> 
            Verify Another Product
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

// Re-using the same TelemetryDashboard and HashSimulator with enhanced styling
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
    const t1 = setTimeout(() => setStep(1), 1000);

    let interval: any;
    const t2 = setTimeout(() => {
      setStep(2);
      interval = setInterval(() => {
        setCurrentHash('0x' + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join(''));
      }, 40);
    }, 2000);

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
    }, 5000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(interval);
    };
  }, [node]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
    >
      <div className="w-full max-w-4xl bg-[#050805] border border-white/10 rounded-[4rem] overflow-hidden shadow-[0_0_120px_rgba(16,185,129,0.2)] flex flex-col max-h-[90vh]">
        <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
          <div className="flex items-center gap-5">
             <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shadow-2xl">
               <Cpu size={32} />
             </div>
             <div>
               <h3 className="text-white font-black text-2xl tracking-tighter uppercase italic">EVM Authenticator Node</h3>
               <p className="text-emerald-500/60 text-[11px] font-mono tracking-[0.3em] uppercase">Status: Synchronized • Block Depth: 128</p>
             </div>
          </div>
          <button onClick={onClose} className="w-16 h-16 rounded-[2rem] bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-all shadow-inner"><X size={32} /></button>
        </div>
        
        <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar flex-grow flex flex-col gap-12">
           {/* Step 1: Raw Data Block */}
           <div className={`transition-all duration-700 ${step >= 0 ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
             <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
               <span className="w-3 h-3 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span> 01. Payload Extraction
             </p>
             <pre className="bg-black p-10 rounded-[3rem] text-blue-400 text-sm md:text-base font-mono overflow-x-auto border border-white/5 leading-relaxed shadow-inner">
               {rawData}
             </pre>
           </div>

           {/* Step 2: Hashing process */}
           <div className={`transition-all duration-700 ${step >= 1 ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
             <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
               <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span> 02. Merkle Root Generation
             </p>
             <div className="bg-black p-10 rounded-[3rem] border border-white/5 flex flex-col gap-8 shadow-inner">
                <div className="flex items-center gap-8">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                    <Hash size={48} className={step === 2 ? "text-amber-500" : "text-slate-700"} />
                  </motion.div>
                  <p className={`font-mono text-sm md:text-2xl break-all leading-tight tracking-tighter ${step === 2 ? 'text-amber-400' : 'text-slate-700'}`}>
                    {step >= 2 ? currentHash : 'Awaiting stream...'}
                  </p>
                </div>
                {step === 2 && (
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 3 }}
                        className="h-full bg-gradient-to-r from-amber-600 to-amber-400 shadow-[0_0_30px_rgba(245,158,11,0.8)]"
                      ></motion.div>
                   </div>
                )}
             </div>
           </div>

           {/* Step 3: Result Match */}
           <div className={`transition-all duration-700 ${step >= 3 ? 'opacity-100' : 'opacity-0 translate-y-12'}`}>
             <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-6 flex items-center gap-4">
               <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span> 03. Consensus Verification
             </p>
             <div className="bg-emerald-500/5 p-12 rounded-[4rem] border border-emerald-500/20 shadow-[0_0_100px_rgba(16,185,129,0.1)]">
               {step >= 3 ? (
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-32 h-32 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_60px_rgba(16,185,129,0.6)] shrink-0 border-8 border-white/20">
                       <ShieldCheck size={64} />
                    </div>
                    <div className="text-center md:text-left space-y-4">
                       <h4 className="text-4xl font-black text-emerald-400 uppercase tracking-tighter italic leading-none">Trust Seal Validated</h4>
                       <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">Dữ liệu hoàn toàn trùng khớp với chữ ký số tại <span className="text-white font-bold">Block #{node.blockNumber}</span>. Sản phẩm được chứng thực bởi 1,420 Node phân tán. Trạng thái: <span className="text-emerald-400 font-black">CHÍNH HÃNG</span>.</p>
                    </div>
                  </div>
               ) : (
                  <div className="flex items-center gap-6 text-slate-600 animate-pulse p-4">
                     <Activity size={32} />
                     <p className="text-xl font-mono uppercase tracking-[0.2em]">Finalizing match with ledger...</p>
                  </div>
               )}
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}

// Share icon missing from lucide
function Share2({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
    </svg>
  );
}
