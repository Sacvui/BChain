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
                <div className="mb-6 rounded-3xl overflow-hidden border border-slate-100 shadow-lg aspect-square bg-white">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
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
              </div>
            </motion.div>

            <section>
              <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6 md:mb-10 flex items-center gap-2">
                <Globe size={12} />
                Lịch sử chuỗi khối
              </h2>
              {/* Timeline - Scrollable on mobile if needed, but here we just stack */}
              <div className="relative border-l-2 border-natural-100 ml-4 pl-6 md:pl-10 space-y-10 md:space-y-16">
                {product.nodes.map((node, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ x: 5 }}
                    onClick={() => setSelectedNode(node)}
                    className={`relative cursor-pointer group transition-all ${selectedNode === node ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
                  >
                    <div className={`absolute -left-[35px] md:-left-[51px] top-0 w-4 h-4 md:w-6 md:h-6 rounded-full border-4 border-white transition-all shadow-md group-hover:scale-125 ${selectedNode === node ? 'bg-natural-500 scale-125' : 'bg-natural-200'}`}></div>
                    <div className="space-y-0.5">
                      <p className="text-[8px] md:text-[10px] font-bold text-natural-400 uppercase tracking-widest">{node.type}</p>
                      <h4 className={`text-xs md:text-sm font-bold tracking-tight ${selectedNode === node ? 'text-natural-900' : 'text-slate-600'}`}>{node.title}</h4>
                      <p className="text-[8px] md:text-[10px] text-slate-400 font-mono mt-0.5">
                         {new Date(node.timestamp).toLocaleDateString('vi-VN')}
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
                      <div className="text-left md:text-right">
                         <p className="text-[8px] font-bold text-white/60 uppercase mb-0.5">Timestamp</p>
                         <p className="text-[10px] font-mono text-white">{selectedNode.timestamp}</p>
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

                        <div className="p-4 md:p-6 rounded-2xl md:rounded-[2rem] bg-slate-900 text-white relative overflow-hidden group">
                           <div className="flex justify-between items-start mb-2">
                             <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Blockchain Signature</p>
                             <button 
                               onClick={() => setShowHashModal(true)}
                               className="text-[10px] font-bold text-natural-900 bg-emerald-400 px-3 py-1.5 rounded-full hover:bg-emerald-300 transition-colors shadow-[0_0_15px_rgba(52,211,153,0.3)] flex items-center gap-1"
                             >
                               <Hash size={12} /> KIỂM CHỨNG ETH
                             </button>
                           </div>
                           <p className="text-[9px] md:text-xs font-mono text-emerald-400/80 break-all leading-relaxed group-hover:text-emerald-400 transition-colors">
                             {selectedNode.hash}
                           </p>
                        </div>
                      </div>
                    </div>

                    {/* Visual Evidence & Paperwork */}
                    <div className="space-y-8 md:space-y-12">
                      <div>
                        <h3 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4 md:mb-6">Chứng từ kỹ thuật số</h3>
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
