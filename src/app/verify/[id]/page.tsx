'use client';

import { useState, useEffect, use } from 'react';
import { db, Product, BlockchainNode } from '@/lib/store/nosql-sim';
import { 
  ArrowLeft, ShieldCheck, MapPin, FileText, ImageIcon, ExternalLink, 
  Hash, Clock, Globe, Fingerprint, Activity, Layers, Sparkles, 
  Leaf, Package, Zap, Thermometer, Droplets, BarChart3, TrendingUp, Heart, Download,
  Box, ChevronRight, Copy, X, QrCode, ShieldAlert, Cpu, ArrowRight,
  Shield, Info, Database, Search, CheckCircle2, History, Link as LinkIcon, Lock
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
              animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
               <Fingerprint size={120} className="text-emerald-400" />
            </motion.div>
         </div>
       </motion.div>
       <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter text-center uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">Decrypting Identity</h2>
       <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4 text-emerald-400/50 font-mono text-sm uppercase tracking-widest">
            <span className="animate-pulse">Accessing Node #8824...</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
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
                 <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="relative group">
                    <div className="absolute -inset-4 bg-emerald-500/10 rounded-[4.5rem] blur-2xl group-hover:bg-emerald-500/20 transition-all"></div>
                    <div className="relative rounded-[4rem] overflow-hidden border-8 border-white shadow-2xl aspect-square bg-white">
                       <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-natural-950/40 via-transparent to-transparent"></div>
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
                 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <div className="flex items-center gap-4 mb-6">
                       <span className="px-5 py-2 rounded-full bg-emerald-50 text-emerald-600 text-xs font-black uppercase tracking-[0.1em] border border-emerald-100">{product.category}</span>
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
              </div>
           </div>
        </section>

        {/* Formation Stages Section */}
        <section className="mb-24">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                 <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
                    <Layers size={20} className="text-emerald-500" />
                    Các giai đoạn hình thành sản phẩm
                 </h2>
                 <p className="text-4xl md:text-6xl font-black text-natural-950 tracking-tighter">Formation <span className="text-emerald-500">Journey</span></p>
              </div>
           </div>

           {/* Vertical Formation Flow */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                 {product.nodes.map((node, i) => (
                   <motion.div 
                     key={i}
                     onClick={() => setSelectedNode(node)}
                     className={`cursor-pointer p-6 rounded-[2.5rem] border-2 transition-all flex items-center gap-6 ${
                       selectedNode === node 
                       ? 'bg-natural-900 text-white border-natural-900 shadow-2xl scale-105 z-10' 
                       : 'bg-white text-slate-500 border-slate-100 hover:border-emerald-500'
                     }`}
                   >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${selectedNode === node ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-slate-400'}`}>
                         <span className="font-black text-xl">{i+1}</span>
                      </div>
                      <div className="min-w-0">
                         <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-1">{node.type} PHASE</p>
                         <h4 className="font-black text-lg truncate leading-none">{node.title}</h4>
                      </div>
                      <ChevronRight size={20} className={`ml-auto ${selectedNode === node ? 'text-emerald-500' : 'text-slate-200'}`} />
                   </motion.div>
                 ))}
              </div>

              <div className="lg:col-span-8">
                 <AnimatePresence mode="wait">
                    {selectedNode && (
                      <motion.div
                        key={selectedNode.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-white rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden flex flex-col"
                      >
                         <div className="h-[300px] relative">
                            <img src={selectedNode.images[0]} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-natural-950/80 to-transparent"></div>
                            <div className="absolute bottom-10 left-10">
                               <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{selectedNode.title}</h3>
                            </div>
                         </div>

                         <div className="p-10 md:p-16 space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                               <div className="space-y-8">
                                  <div>
                                     <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Chi tiết công đoạn</h4>
                                     <p className="text-slate-600 leading-relaxed font-light">{selectedNode.description}</p>
                                  </div>
                                  <div className="flex flex-col gap-4">
                                     <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <MapPin size={20} className="text-emerald-500" />
                                        <div>
                                           <p className="text-[9px] font-black text-slate-400 uppercase">Location</p>
                                           <p className="text-sm font-bold">{selectedNode.location}</p>
                                        </div>
                                     </div>
                                     <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                        <Clock size={20} className="text-emerald-500" />
                                        <div>
                                           <p className="text-[9px] font-black text-slate-400 uppercase">Timestamp</p>
                                           <p className="text-sm font-bold">{new Date(selectedNode.timestamp).toLocaleString('vi-VN')}</p>
                                        </div>
                                     </div>
                                  </div>
                               </div>

                               <div className="space-y-8">
                                  <h4 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] flex items-center gap-2">
                                     <History size={14} className="text-emerald-500" /> Lịch sử xác thực (Audit Trail)
                                  </h4>
                                  <div className="space-y-4">
                                     {[
                                       { label: "Data Capture", time: "T+0m", status: "Success", icon: Database },
                                       { label: "Node Consensus", time: "T+2m", status: "Success", icon: Cpu },
                                       { label: "Ledger Immutable", time: "T+5m", status: "Sealed", icon: Lock },
                                       { label: "Block Confirmed", time: "T+8m", status: "Active", icon: LinkIcon }
                                     ].map((step, i) => (
                                       <div key={i} className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl group hover:border-emerald-500 transition-all">
                                          <div className="flex items-center gap-3">
                                             <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-emerald-500 transition-colors">
                                                <step.icon size={16} />
                                             </div>
                                             <span className="text-xs font-bold text-slate-700">{step.label}</span>
                                          </div>
                                          <div className="text-right">
                                             <p className="text-[9px] font-black text-emerald-500 uppercase">{step.status}</p>
                                             <p className="text-[8px] font-mono text-slate-300">{step.time}</p>
                                          </div>
                                       </div>
                                     ))}
                                  </div>
                               </div>
                            </div>

                            <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center justify-between">
                               <div className="flex items-center gap-4">
                                  <div className="w-12 h-12 rounded-2xl bg-natural-900 flex items-center justify-center text-emerald-500">
                                     <ShieldCheck size={24} />
                                  </div>
                                  <div>
                                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Blockchain Signature</p>
                                     <p className="text-xs font-mono font-bold text-slate-900 break-all">{selectedNode.hash.substring(0, 32)}...</p>
                                  </div>
                               </div>
                               <Link 
                                 href={`/explorer/${selectedNode.txHash || selectedNode.hash}`}
                                 className="px-8 py-4 bg-emerald-500 text-white rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 shadow-xl shadow-emerald-500/20"
                               >
                                  <Globe size={18} /> View Ledger
                               </Link>
                            </div>
                         </div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
        </section>

        {/* AI & Sustainability Section */}
        {product.sustainability && (
           <section className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="p-12 md:p-20 rounded-[4rem] bg-[#111b11] text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                 <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-10">
                       <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20"><Sparkles size={28} /></div>
                       <span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-400">AI Trust Synthesis</span>
                    </div>
                    <div className="flex items-end gap-4 mb-12">
                       <h3 className="text-9xl font-black tracking-tighter leading-none">{product.sustainability.score}</h3>
                       <div className="pb-4">
                          <p className="text-xl font-bold text-emerald-400">/100</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Trust Score</p>
                       </div>
                    </div>
                    <div className="p-8 bg-white/5 rounded-[3rem] border border-white/10 italic text-lg leading-relaxed font-light text-slate-300">
                       "{product.sustainability.ai_insight}"
                    </div>
                 </div>
              </div>

              <div className="flex flex-col gap-8">
                 <div className="p-12 rounded-[4rem] bg-white border border-slate-100 shadow-2xl flex-grow">
                    <h3 className="text-2xl font-black text-natural-950 mb-6 tracking-tighter uppercase italic">Sản phẩm này được hình thành như thế nào?</h3>
                    <p className="text-slate-500 font-light leading-relaxed mb-8">Hệ thống AgriChain ghi nhận từng biến số từ môi trường nuôi trồng đến quy trình tinh chế để tạo ra bản sao số (Digital Twin) hoàn hảo nhất.</p>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Carbon</p>
                          <p className="text-lg font-black">{product.sustainability.carbon_footprint}</p>
                       </div>
                       <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                          <p className="text-[9px] font-black text-slate-400 uppercase mb-1">Water</p>
                          <p className="text-lg font-black">{product.sustainability.water_saved}</p>
                       </div>
                    </div>
                 </div>
                 
                 <div 
                   onClick={() => setShowHashModal(true)}
                   className="p-10 rounded-[3rem] bg-emerald-500 text-white shadow-2xl shadow-emerald-500/30 flex items-center justify-between cursor-pointer hover:bg-emerald-600 transition-all"
                 >
                    <div className="flex items-center gap-6">
                       <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center border border-white/20"><Hash size={28} /></div>
                       <h3 className="text-xl font-black tracking-tighter">Verify Cryptographic Hash</h3>
                    </div>
                    <ArrowRight size={28} />
                 </div>
              </div>
           </section>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-32 flex flex-col items-center gap-10">
         <Link href="/" className="px-16 py-8 bg-natural-900 text-white rounded-[2.5rem] font-black text-sm uppercase tracking-[0.2em] flex items-center gap-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all">
            <QrCode size={28} /> Verify Another Product
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

function HashSimulator({ node, onClose }: { node: BlockchainNode, onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [currentHash, setCurrentHash] = useState('');
  
  const rawData = JSON.stringify({ id: node.id, type: node.type, title: node.title, location: node.location, timestamp: node.timestamp }, null, 2);

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
      confetti({ particleCount: 150, spread: 120, origin: { y: 0.5 }, zIndex: 10000 });
    }, 5000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearInterval(interval); };
  }, [node]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#050805] border border-white/10 rounded-[4rem] overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-10 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
          <div className="flex items-center gap-5">
             <div className="w-16 h-16 rounded-[2rem] bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20"><Cpu size={32} /></div>
             <div><h3 className="text-white font-black text-2xl uppercase italic">Hashing Node</h3></div>
          </div>
          <button onClick={onClose} className="w-16 h-16 rounded-[2rem] bg-white/5 text-white hover:bg-white/10 flex items-center justify-center"><X size={32} /></button>
        </div>
        <div className="p-10 overflow-y-auto flex-grow flex flex-col gap-12">
           <div className={`transition-all ${step >= 0 ? 'opacity-100' : 'opacity-0'}`}>
             <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">01. Data Payload</p>
             <pre className="bg-black p-8 rounded-[2rem] text-blue-400 text-sm font-mono border border-white/5">{rawData}</pre>
           </div>
           <div className={`transition-all ${step >= 1 ? 'opacity-100' : 'opacity-0'}`}>
             <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.5em] mb-4">02. Hashing Progress</p>
             <div className="bg-black p-8 rounded-[2rem] border border-white/5 font-mono text-amber-400 break-all">{step >= 2 ? currentHash : '...'}</div>
           </div>
           <div className={`transition-all ${step >= 3 ? 'opacity-100' : 'opacity-0'}`}>
             <div className="bg-emerald-500/10 p-10 rounded-[3rem] border border-emerald-500/20 flex items-center gap-8 text-white">
                <ShieldCheck size={64} className="text-emerald-500" />
                <div>
                   <h4 className="text-2xl font-black text-emerald-400 uppercase italic">Immutable Match</h4>
                   <p className="text-slate-400">Dữ liệu được bảo chứng tại Block #{node.blockNumber}.</p>
                </div>
             </div>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
