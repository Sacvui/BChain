'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/store/nosql-sim';
import { 
  Globe, Search, Cpu, Activity, ShieldCheck, 
  MapPin, Zap, TrendingUp, Filter, Server
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NodesPage() {
  const [nodes, setNodes] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const n = await db.getCollection('nodes');
      setNodes(n);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <header className="bg-[#111b11] text-white border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/explorer" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
               <Globe size={18} />
            </div>
            <span className="font-black tracking-tighter text-xl">AgriChain<span className="text-emerald-500 text-xs ml-1 uppercase tracking-widest">Explorer</span></span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
             <Link href="/explorer" className="hover:text-white transition-colors">Home</Link>
             <Link href="/explorer/blocks" className="hover:text-white transition-colors">Blocks</Link>
             <Link href="/explorer/nodes" className="text-emerald-400">Nodes</Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
           <div>
             <h1 className="text-2xl font-black tracking-tight mb-2">Validator Nodes</h1>
             <p className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center gap-2">
                <Server size={12} className="text-emerald-500" />
                Active Validators: {nodes.length} / 1,420
             </p>
           </div>
           <div className="flex gap-3">
              <div className="px-4 py-2 bg-emerald-500 text-white rounded-lg text-[11px] font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/20">
                 <Zap size={12} /> BECOME A VALIDATOR
              </div>
           </div>
        </div>

        {/* Global Node Map Placeholder */}
        <div className="bg-[#111b11] rounded-[2.5rem] p-8 md:p-12 mb-10 relative overflow-hidden group border border-white/5 shadow-2xl">
           <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #34d399 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
           </div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                 <h2 className="text-white text-3xl font-black tracking-tighter mb-4">Mạng lưới phi tập trung toàn cầu</h2>
                 <p className="text-slate-400 text-sm leading-relaxed mb-6">Các node của AgriChain được đặt tại các vùng nông nghiệp trọng điểm để đảm bảo dữ liệu được ghi nhận tức thời và minh bạch tuyệt đối tại nguồn.</p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Total Staked</p>
                       <p className="text-xl font-black text-white">42.5M AGRI</p>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                       <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Avg Uptime</p>
                       <p className="text-xl font-black text-white">99.96%</p>
                    </div>
                 </div>
              </div>
              <div className="flex-1 flex justify-center">
                 <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-emerald-500/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-2 border-emerald-500/10 animate-ping"></div>
                    <Globe size={120} className="text-emerald-500 opacity-20" />
                    {nodes.map((_, i) => (
                      <motion.div 
                        key={i}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                        className="absolute w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,1)]"
                        style={{ 
                          top: `${50 + 40 * Math.sin(i * Math.PI / 2)}%`, 
                          left: `${50 + 40 * Math.cos(i * Math.PI / 2)}%` 
                        }}
                      ></motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50/50 border-b border-slate-100">
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Node Name</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Uptime</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Staked Amount</th>
                       <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Rewards</th>
                    </tr>
                 </thead>
                 <tbody>
                    {nodes.map((node, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors group">
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                               <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                  <Cpu size={18} />
                               </div>
                               <div>
                                  <p className="text-sm font-black text-slate-900">{node.name}</p>
                                  <p className="text-[10px] font-mono text-slate-400">ID: {node.id}</p>
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-2">
                               <MapPin size={14} className="text-slate-300" />
                               <span className="text-xs font-bold text-slate-700">{node.location}</span>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <span className="px-3 py-1 bg-emerald-50 text-emerald-600 border border-emerald-100 rounded-full text-[9px] font-black uppercase tracking-widest">
                               {node.status}
                            </span>
                         </td>
                         <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                               <span className="text-xs font-bold text-slate-700">{node.uptime}</span>
                               <div className="w-16 h-1 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-emerald-500" style={{ width: node.uptime }}></div>
                               </div>
                            </div>
                         </td>
                         <td className="px-8 py-6">
                            <span className="text-xs font-black text-slate-900">{node.staked}</span>
                         </td>
                         <td className="px-8 py-6">
                            <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded border border-emerald-100 flex items-center gap-1 w-fit">
                               <TrendingUp size={10} /> +2.4% APR
                            </span>
                         </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </main>
    </div>
  );
}
