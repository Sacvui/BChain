'use client';

import { useState, useEffect, use } from 'react';
import { db, Product, BlockchainNode } from '@/lib/store/nosql-sim';
import { ArrowLeft, ShieldCheck, MapPin, FileText, ImageIcon, ExternalLink, Hash, Clock, Globe, Fingerprint, Activity, Layers, Sparkles, Leaf, Package, Zap } from 'lucide-react';
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
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#10b981', '#3b82f6', '#fdfcf8']
          });
        }
        setLoading(false);
      }, 2000);
    };
    fetchData();
  }, [unwrappedParams]);

  if (isScanning) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-natural-900 text-white p-6">
       <motion.div 
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         className="relative w-32 h-32 md:w-48 md:h-48 mb-8 md:mb-12"
       >
         <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-3xl"></div>
         <motion.div 
           animate={{ top: ['0%', '100%', '0%'] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10"
         ></motion.div>
         <div className="absolute inset-4 flex items-center justify-center">
            <Fingerprint size={60} className="md:size-20 text-emerald-400 opacity-50" />
         </div>
       </motion.div>
       <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-center">Đang truy vấn chuỗi khối...</h2>
       <p className="text-slate-400 text-xs md:text-sm font-light text-center">Vui lòng chờ trong giây lát để xác thực mã định danh.</p>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf8] p-6 text-center">
      <div>
        <h1 className="text-2xl font-bold text-natural-900">Không tìm thấy sản phẩm</h1>
        <Link href="/" className="text-natural-500 hover:underline mt-4 inline-block font-bold">Quay lại trang chủ</Link>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fdfcf8] text-[#1a2f1a] pb-12 md:pb-24">
      {/* Premium Header Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-4 md:px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-natural-900 transition-colors font-bold text-[10px] md:text-sm">
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">QUAY LẠI</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
               <Layers size={12} />
               ETH MAINNET: {product.nodes[0].hash.substring(0, 10)}...
            </div>
            <div className="px-3 py-1.5 md:px-5 md:py-2 rounded-full bg-emerald-500 text-white text-[9px] md:text-[11px] font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} /> XÁC THỰC BLOCKCHAIN
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          
          {/* Left Column: Product Sidebar */}
          <div className="lg:col-span-4 space-y-8 md:space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {product.image && (
                <div className="mb-6 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl aspect-square bg-white relative group">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {/* High-tech scanning beam */}
                  <motion.div 
                    initial={{ top: '-10%' }}
                    animate={{ top: '110%' }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10 opacity-50"
                  ></motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-natural-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              )}
              <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-lg bg-natural-100 text-natural-600 text-[8px] md:text-[10px] font-black uppercase tracking-widest mb-3 md:mb-4">
                {product.category}
              </div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-natural-950 mb-6 md:mb-8 tracking-tighter leading-tight">{product.name}</h1>
              
              <div className="space-y-4 md:space-y-6">
                <div className="natural-card p-6 md:p-8 bg-white shadow-xl shadow-natural-900/5 border-natural-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Fingerprint size={60} />
                  </div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 md:mb-6">Thông số kỹ thuật</h3>
                  <div className="space-y-3 md:space-y-4">
                    {Object.entries(product.attributes).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-xs md:text-sm border-b border-slate-50 pb-2 md:pb-3 last:border-0 last:pb-0">
                        <span className="text-slate-400 font-medium capitalize">{key}</span>
                        <span className="font-bold text-natural-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-blue-50 border border-blue-100 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-blue-500 shadow-sm shrink-0">
                    <Activity size={20} />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] font-bold text-blue-400 uppercase tracking-widest">Health Score</p>
                    <p className="text-xs md:text-sm font-bold text-blue-900">100% Nguyên Chất</p>
                  </div>
                </div>

                {product.sustainability && (
                  <div className="space-y-6">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="p-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-900 via-emerald-950 to-black text-white shadow-2xl shadow-emerald-900/40 relative overflow-hidden group"
                    >
                       {/* Animated Glow */}
                       <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-400 rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000"></div>
                       
                       <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-400/10 flex items-center justify-center text-emerald-400 border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.2)]">
                               <Leaf size={20} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Sustainability Index</span>
                         </div>
                         
                         <div className="flex items-end gap-3 mb-4">
                            <motion.span 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-6xl font-black tracking-tighter"
                            >
                              {product.sustainability.score}
                            </motion.span>
                            <span className="text-xl font-bold text-emerald-400/60 mb-2">/100</span>
                         </div>
                         
                         <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden backdrop-blur-md border border-white/5 p-0.5">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${product.sustainability.score}%` }}
                              transition={{ duration: 2, ease: "circOut" }}
                              className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_20px_rgba(52,211,153,0.5)]"
                            ></motion.div>
                         </div>
                         
                         <div className="mt-8 flex items-center justify-between">
                            <div className="flex -space-x-2">
                               {[1,2,3].map(i => (
                                 <div key={i} className="w-6 h-6 rounded-full border-2 border-emerald-950 bg-emerald-800 flex items-center justify-center">
                                    <ShieldCheck size={10} className="text-emerald-400" />
                                 </div>
                               ))}
                            </div>
                            <p className="text-[10px] font-bold text-emerald-400/80 uppercase tracking-widest">Global Verified</p>
                         </div>
                       </div>
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-2xl shadow-natural-900/5 relative overflow-hidden"
                    >
                       <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-natural-50 rounded-full blur-[40px] opacity-50"></div>
                       
                       <div className="relative z-10">
                         <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-2xl bg-natural-900 text-white flex items-center justify-center shadow-lg shadow-natural-900/20">
                               <Sparkles size={18} />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-natural-900">AI Deep Analysis</span>
                         </div>
                         
                         <div className="relative p-5 bg-natural-50/50 rounded-2xl border border-natural-100/50">
                            <div className="absolute -left-1 top-4 w-1 h-8 bg-natural-900 rounded-full"></div>
                            <p className="text-sm text-natural-900 font-medium leading-relaxed italic">
                              "{product.sustainability.ai_insight}"
                            </p>
                         </div>
                         
                         <div className="mt-8 grid grid-cols-2 gap-4">
                            {[
                              { label: "Carbon", value: product.sustainability.carbon_footprint, icon: Globe },
                              { label: "Water", value: product.sustainability.water_saved, icon: Activity }
                            ].map((m, i) => (
                              <div key={i} className="group p-4 bg-white rounded-2xl border border-slate-100 hover:border-natural-900/20 transition-all hover:shadow-lg">
                                 <div className="flex items-center gap-2 mb-2">
                                    <m.icon size={12} className="text-slate-300" />
                                    <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">{m.label}</span>
                                 </div>
                                 <p className="text-sm font-black text-natural-900">{m.value}</p>
                              </div>
                            ))}
                         </div>
                       </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Globe size={12} />
                  Lịch sử chuỗi khối
                </h2>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-100">
                  <ShieldCheck size={10} />
                  ALL SECURED
                </div>
              </div>
              
              <div className="relative space-y-4">
                {/* Futuristic Connector Line */}
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-natural-100 via-natural-200 to-natural-100 hidden md:block"></div>
                
                {product.nodes.map((node, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedNode(node)}
                    className={`relative flex items-start gap-4 p-4 rounded-2xl cursor-pointer transition-all border ${
                      selectedNode === node 
                      ? 'bg-white border-natural-200 shadow-xl shadow-natural-900/5 ring-1 ring-natural-500/20' 
                      : 'bg-transparent border-transparent opacity-50 hover:opacity-100 hover:bg-natural-50'
                    }`}
                  >
                    {/* Node Icon/Indicator */}
                    <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border-2 transition-all ${
                      selectedNode === node 
                      ? 'bg-natural-900 border-natural-900 text-white shadow-lg' 
                      : 'bg-white border-slate-100 text-slate-400'
                    }`}>
                       {i === 0 ? <Package size={18} /> : i === product.nodes.length - 1 ? <Globe size={18} /> : <Zap size={18} />}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <p className={`text-[8px] font-black uppercase tracking-widest ${selectedNode === node ? 'text-natural-500' : 'text-slate-400'}`}>
                          {node.type}
                        </p>
                        <p className="text-[8px] font-mono text-slate-400">
                          {node.hash.substring(0, 10)}
                        </p>
                      </div>
                      <h4 className={`text-xs md:text-sm font-bold tracking-tight truncate ${selectedNode === node ? 'text-natural-900' : 'text-slate-600'}`}>
                        {node.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock size={10} className="text-slate-300" />
                        <span className="text-[9px] text-slate-400 font-medium">
                          {new Date(node.timestamp).toLocaleDateString('vi-VN')}
                        </span>
                      </div>
                    </div>

                    {/* Active Pulse Indicator */}
                    {selectedNode === node && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                         <div className="w-2 h-2 rounded-full bg-natural-500 animate-ping"></div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Interactive Node Detail Viewer */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {selectedNode && (
                <motion.div 
                  key={selectedNode.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden min-h-[500px] md:min-h-[700px] flex flex-col relative"
                >
                  {/* Immersive Banner */}
                  <div className="h-48 md:h-80 relative overflow-hidden group">
                    <img 
                      src={selectedNode.images[0]} 
                      alt={selectedNode.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-natural-950 via-natural-950/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2 md:mb-3">
                           <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest border border-white/20">
                             {selectedNode.type}
                           </span>
                           <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[8px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                             Verified
                           </span>
                        </div>
                        <h2 className="text-xl md:text-4xl font-extrabold text-white tracking-tight">{selectedNode.title}</h2>
                      </div>
                      <div className="flex flex-col md:items-end gap-3">
                         <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 text-white/80 text-[10px] font-mono">
                            <Fingerprint size={12} className="text-emerald-400" />
                            {selectedNode.hash.substring(0, 20)}...
                         </div>
                         <div className="flex items-center gap-4 text-white/50 text-[9px] font-bold uppercase tracking-widest">
                            <span className="flex items-center gap-1"><Globe size={10} /> IPFS Secured</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={10} /> Signed by Node</span>
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* Blockchain Binding Bar */}
                  <div className="bg-emerald-500/5 border-b border-emerald-500/10 p-4 md:px-10 flex flex-wrap items-center justify-between gap-4">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Dữ liệu được bảo chứng bởi Smart Contract</span>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                           <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Digital Signature</span>
                           <span className="text-[10px] font-mono text-natural-900 font-bold">0x7F2...D9C4</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Merkle Proof</span>
                           <span className="text-[10px] font-mono text-natural-900 font-bold">MATCHED ✅</span>
                        </div>
                     </div>
                  </div>

                  <div className="p-6 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 flex-grow">
                    {/* Detailed Context */}
                    <div className="space-y-8 md:space-y-12">
                      <div>
                        <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 md:mb-6">Mô tả quy trình</h3>
                        <p className="text-slate-600 leading-relaxed text-xs md:text-sm font-light">
                          {selectedNode.description}
                        </p>
                      </div>

                      <div className="space-y-4 md:space-y-6">
                        <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-natural-50 border border-natural-100 flex items-start gap-4 md:gap-5">
                           <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white flex items-center justify-center text-natural-500 shadow-sm shrink-0">
                             <MapPin size={20} />
                           </div>
                           <div>
                             <p className="text-[8px] md:text-[10px] font-black text-natural-400 uppercase tracking-widest mb-1">Vị trí thực tế</p>
                             <p className="text-sm md:text-base font-bold text-natural-900 leading-tight">{selectedNode.location}</p>
                             <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 bg-white rounded-full text-[8px] md:text-[10px] font-mono text-slate-500 border border-slate-100">
                                <Globe size={10} /> {selectedNode.coordinates}
                             </div>
                           </div>
                        </div>

                        <div className="p-6 md:p-8 rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-black text-white relative overflow-hidden group border border-white/5 shadow-2xl">
                            {/* Scanning pulse */}
                            <div className="absolute inset-0 bg-emerald-500/5 animate-pulse pointer-events-none"></div>
                            
                            <div className="flex justify-between items-start mb-6 relative z-10">
                              <div>
                                <p className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-1">Blockchain Hash Signature</p>
                                <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Secured by Ethereum Node #42</p>
                              </div>
                              <button 
                                onClick={() => setShowHashModal(true)}
                                className="text-[10px] font-black text-natural-900 bg-emerald-400 px-4 py-2 rounded-xl hover:bg-emerald-300 transition-all shadow-[0_0_20px_rgba(52,211,153,0.4)] flex items-center gap-2 active:scale-95"
                              >
                                <Hash size={14} /> KIỂM CHỨNG ETH
                              </button>
                            </div>
                            <div className="bg-black/50 p-4 rounded-2xl border border-white/5 relative z-10">
                               <p className="text-[10px] md:text-sm font-mono text-emerald-400/90 break-all leading-relaxed tracking-wider">
                                 {selectedNode.hash}
                               </p>
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Visual Evidence & Paperwork */}
                    <div className="space-y-8 md:space-y-12">
                      <div>
                        <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 md:mb-6">Bảo chứng kỹ thuật số (Paperwork)</h3>
                        <div className="grid grid-cols-1 gap-2 md:gap-3">
                          {selectedNode.documents.map((doc, i) => (
                            <motion.a 
                              whileHover={{ scale: 1.01 }}
                              whileTap={{ scale: 0.99 }}
                              key={i}
                              href={doc.url}
                              className="flex items-center justify-between p-4 rounded-xl md:rounded-2xl bg-white border border-slate-100 hover:border-natural-900 transition-all shadow-sm group"
                            >
                              <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-natural-50 group-hover:text-natural-600 transition-colors shrink-0">
                                   <FileText size={18} />
                                </div>
                                <span className="text-xs font-bold text-slate-700 truncate max-w-[150px] sm:max-w-none">{doc.name}</span>
                              </div>
                              <ExternalLink size={16} className="text-slate-300 group-hover:text-natural-900 shrink-0" />
                            </motion.a>
                          ))}
                        </div>

                        {/* Merkle Binding Certificate */}
                        <div className="mt-6 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                           <div className="flex items-center gap-2 mb-4">
                              <ShieldCheck size={16} className="text-emerald-500" />
                              <span className="text-[10px] font-black text-natural-900 uppercase tracking-widest">Blockchain Binding</span>
                           </div>
                           <div className="space-y-2.5">
                              <div className="flex justify-between items-center bg-white/50 p-2 rounded-lg border border-white">
                                 <span className="text-[8px] font-bold text-slate-400 uppercase">Storage</span>
                                 <span className="text-[9px] font-bold text-blue-500 font-mono">IPFS://QmXo...Z2a</span>
                              </div>
                              <div className="flex justify-between items-center bg-white/50 p-2 rounded-lg border border-white">
                                 <span className="text-[8px] font-bold text-slate-400 uppercase">Verification</span>
                                 <span className="text-[9px] font-bold text-emerald-500">SIGNED & LOCKED 🔒</span>
                              </div>
                           </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 md:mb-6">Hình ảnh lưu trữ</h3>
                        <div className="grid grid-cols-2 gap-3 md:gap-4">
                          {selectedNode.images.map((img, i) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ scale: 1.05 }}
                              className="aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-100 shadow-sm cursor-zoom-in"
                            >
                              <img src={img} className="w-full h-full object-cover" alt="Verification Evidence" />
                            </motion.div>
                          ))}
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

      <AnimatePresence>
        {showHashModal && selectedNode && (
          <HashSimulator node={selectedNode} onClose={() => setShowHashModal(false)} />
        )}
      </AnimatePresence>
    </main>
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
    // Step 1: Parse Data
    const t1 = setTimeout(() => setStep(1), 1500);

    // Step 2: Hashing
    let interval: any;
    const t2 = setTimeout(() => {
      setStep(2);
      interval = setInterval(() => {
        setCurrentHash('0x' + Array.from({length: 64}, () => Math.floor(Math.random()*16).toString(16)).join(''));
      }, 50);
    }, 3000);

    // Step 3: Match Success
    const t3 = setTimeout(() => {
      clearInterval(interval);
      setCurrentHash(node.hash);
      setStep(3);
      confetti({ particleCount: 80, spread: 100, origin: { y: 0.5 }, zIndex: 10000 });
    }, 6000);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(interval);
    };
  }, [node]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
               <Activity size={16} />
             </div>
             <div>
               <h3 className="text-white font-bold text-sm tracking-widest uppercase">EVM Node Simulator</h3>
               <p className="text-slate-500 text-[10px] font-mono">Keccak-256 / SHA-256 Verification</p>
             </div>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-white p-2"><ArrowLeft size={20} /></button>
        </div>
        
        <div className="p-6 md:p-8 flex-grow flex flex-col gap-6">
           {/* Step 1: Raw Data Block */}
           <div className={`transition-all duration-500 ${step >= 0 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span> 1. Khối dữ liệu gốc (Payload)
             </p>
             <pre className="bg-black/50 p-4 rounded-xl text-blue-400 text-xs font-mono overflow-x-auto border border-slate-800">
               {rawData}
             </pre>
           </div>

           {/* Step 2: Hashing process */}
           <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span> 2. Chạy thuật toán băm (Hashing)
             </p>
             <div className="bg-black/50 p-4 rounded-xl border border-slate-800 flex items-center gap-4">
               <Hash size={24} className={step === 2 ? "text-amber-500 animate-spin" : "text-slate-600"} />
               <p className={`font-mono text-xs break-all ${step === 2 ? 'text-amber-400' : 'text-slate-600'}`}>
                 {step >= 2 ? currentHash : 'Waiting for payload...'}
               </p>
             </div>
           </div>

           {/* Step 3: Result Match */}
           <div className={`transition-all duration-500 ${step >= 3 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
             <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 3. Kết quả đối chiếu với sổ cái
             </p>
             <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
               {step >= 3 ? (
                 <div className="flex flex-col gap-4">
                   <div className="flex items-start gap-3">
                     <ShieldCheck size={24} className="text-emerald-400 shrink-0" />
                     <div>
                       <p className="text-emerald-400 font-bold text-sm mb-1">Xác minh toàn vẹn dữ liệu thành công!</p>
                       <p className="text-slate-400 text-xs font-light">Chữ ký Hash trùng khớp tuyệt đối với dữ liệu trên mạng lưới. Không có bất kỳ sự thay đổi hay làm giả nào được phát hiện.</p>
                     </div>
                   </div>
                   <div className="mt-2 p-3 bg-black/40 rounded-lg border border-emerald-500/10 text-[10px] font-mono space-y-1.5">
                     <div className="flex justify-between"><span className="text-slate-500">Block Number:</span><span className="text-emerald-400">19,482,041</span></div>
                     <div className="flex justify-between"><span className="text-slate-500">Gas Used:</span><span className="text-emerald-400">42,109 Gwei</span></div>
                     <div className="flex justify-between"><span className="text-slate-500">Smart Contract:</span><span className="text-emerald-400">0x7a2d4E813F0C5...f9e1</span></div>
                     <div className="flex justify-between"><span className="text-slate-500">Network:</span><span className="text-emerald-400">Ethereum Mainnet</span></div>
                   </div>
                 </div>
               ) : (
                 <p className="text-slate-600 text-xs font-mono">Awaiting verification...</p>
               )}
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
