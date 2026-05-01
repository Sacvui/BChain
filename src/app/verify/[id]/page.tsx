'use client';

import { useState, useEffect, use } from 'react';
import { db, Product, BlockchainNode } from '@/lib/store/nosql-sim';
import { ArrowLeft, ShieldCheck, MapPin, FileText, ImageIcon, ExternalLink, Hash, Clock, Globe, Fingerprint, Activity, Layers } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function VerifyPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedNode, setSelectedNode] = useState<BlockchainNode | null>(null);
  const [loading, setLoading] = useState(true);
  const [isScanning, setIsScanning] = useState(true);

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
  }, [params]);

  if (isScanning) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-natural-900 text-white p-6">
       <motion.div 
         initial={{ scale: 0.8, opacity: 0 }}
         animate={{ scale: 1, opacity: 1 }}
         className="relative w-48 h-48 mb-12"
       >
         <div className="absolute inset-0 border-4 border-emerald-500/20 rounded-3xl"></div>
         <motion.div 
           animate={{ top: ['0%', '100%', '0%'] }}
           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
           className="absolute left-0 right-0 h-1 bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)] z-10"
         ></motion.div>
         <div className="absolute inset-4 flex items-center justify-center">
            <Fingerprint size={80} className="text-emerald-400 opacity-50" />
         </div>
       </motion.div>
       <h2 className="text-2xl font-bold mb-2 tracking-tight">Đang truy vấn chuỗi khối...</h2>
       <p className="text-slate-400 text-sm font-light">Vui lòng chờ trong giây lát để xác thực mã định danh.</p>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfcf8]">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-natural-900">Không tìm thấy sản phẩm</h1>
        <Link href="/" className="text-natural-500 hover:underline mt-4 inline-block">Quay lại trang chủ</Link>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-[#fdfcf8] text-[#1a2f1a] pb-24">
      {/* Premium Header Nav */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-slate-500 hover:text-natural-900 transition-colors font-bold text-sm">
            <ArrowLeft size={18} />
            QUAY LẠI
          </Link>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
               <Layers size={12} />
               TX_ID: {product.nodes[0].hash.substring(0, 16)}...
            </div>
            <div className="px-5 py-2 rounded-full bg-emerald-500 text-white text-[11px] font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2">
              <ShieldCheck size={14} /> XÁC THỰC THÀNH CÔNG
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Product Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-3 py-1 rounded-lg bg-natural-100 text-natural-600 text-[10px] font-black uppercase tracking-widest mb-4">
                {product.category}
              </div>
              <h1 className="text-4xl font-extrabold text-natural-950 mb-8 tracking-tighter leading-tight">{product.name}</h1>
              
              <div className="space-y-6">
                <div className="natural-card p-8 bg-white shadow-xl shadow-natural-900/5 border-natural-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5">
                    <Fingerprint size={80} />
                  </div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Thông tin NoSQL</h3>
                  <div className="space-y-4">
                    {Object.entries(product.attributes).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center text-sm border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                        <span className="text-slate-400 font-medium capitalize">{key}</span>
                        <span className="font-bold text-natural-900">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-blue-500 shadow-sm">
                    <Activity size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Health Score</p>
                    <p className="text-sm font-bold text-blue-900">100% Nguyên Chất</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <section>
              <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-10 flex items-center gap-2">
                <Globe size={14} />
                Lịch sử chuỗi khối
              </h2>
              <div className="relative border-l-2 border-natural-100 ml-4 pl-10 space-y-16">
                {product.nodes.map((node, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedNode(node)}
                    className={`relative cursor-pointer group transition-all ${selectedNode === node ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <div className={`absolute -left-[51px] top-0 w-6 h-6 rounded-full border-4 border-white transition-all shadow-md group-hover:scale-125 ${selectedNode === node ? 'bg-natural-500 scale-125' : 'bg-natural-200'}`}></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-natural-400 uppercase tracking-widest">{node.type}</p>
                      <h4 className={`text-sm font-bold tracking-tight ${selectedNode === node ? 'text-natural-900' : 'text-slate-600'}`}>{node.title}</h4>
                      <p className="text-[10px] text-slate-400 font-mono mt-1">
                         {new Date(node.timestamp).toLocaleDateString('vi-VN')} • {new Date(node.timestamp).toLocaleTimeString('vi-VN')}
                      </p>
                    </div>
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
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-[3rem] border border-slate-100 shadow-2xl overflow-hidden min-h-[700px] flex flex-col relative"
                >
                  {/* Immersive Banner */}
                  <div className="h-80 relative overflow-hidden group">
                    <img 
                      src={selectedNode.images[0]} 
                      alt={selectedNode.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-natural-950 via-natural-950/20 to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                           <span className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase tracking-widest border border-white/20">
                             Node Type: {selectedNode.type}
                           </span>
                           <span className="px-3 py-1 rounded-lg bg-emerald-500 text-white text-[9px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                             Block Verified
                           </span>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">{selectedNode.title}</h2>
                      </div>
                      <div className="hidden md:block text-right">
                         <p className="text-[10px] font-bold text-white/60 uppercase mb-1">Timestamp</p>
                         <p className="text-xs font-mono text-white">{selectedNode.timestamp}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-16 flex-grow">
                    {/* Detailed Context */}
                    <div className="space-y-12">
                      <div>
                        <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-6">Mô tả quy trình</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-light">
                          {selectedNode.description}
                        </p>
                      </div>

                      <div className="space-y-6">
                        <div className="p-6 rounded-[2rem] bg-natural-50 border border-natural-100 flex items-start gap-5">
                           <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-natural-500 shadow-sm shrink-0">
                             <MapPin size={24} />
                           </div>
                           <div>
                             <p className="text-[10px] font-black text-natural-400 uppercase tracking-widest mb-1">Vị trí thực tế</p>
                             <p className="text-base font-bold text-natural-900 leading-tight">{selectedNode.location}</p>
                             <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-[10px] font-mono text-slate-500 border border-slate-100">
                                <Globe size={10} /> {selectedNode.coordinates}
                             </div>
                           </div>
                        </div>

                        <div className="p-6 rounded-[2rem] bg-slate-900 text-white relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-4 opacity-10">
                              <Hash size={60} />
                           </div>
                           <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Blockchain Signature</p>
                           <p className="text-xs font-mono text-emerald-400 break-all leading-relaxed">
                             {selectedNode.hash}
                           </p>
                        </div>
                      </div>
                    </div>

                    {/* Visual Evidence & Paperwork */}
                    <div className="space-y-12">
                      <div>
                        <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-6">Chứng từ kỹ thuật số</h3>
                        <div className="grid grid-cols-1 gap-3">
                          {selectedNode.documents.map((doc, i) => (
                            <motion.a 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              key={i}
                              href={doc.url}
                              className="flex items-center justify-between p-5 rounded-2xl bg-white border border-slate-100 hover:border-natural-900 transition-all shadow-sm group"
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-natural-50 group-hover:text-natural-600 transition-colors">
                                  <FileText size={20} />
                                </div>
                                <span className="text-sm font-bold text-slate-700">{doc.name}</span>
                              </div>
                              <ExternalLink size={18} className="text-slate-300 group-hover:text-natural-900" />
                            </motion.a>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.2em] mb-6">Hình ảnh lưu trữ</h3>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedNode.images.map((img, i) => (
                            <motion.div 
                              key={i} 
                              whileHover={{ scale: 1.05 }}
                              className="aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-sm cursor-zoom-in"
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
    </main>
  );
}
