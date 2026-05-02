'use client';

import { useState, useEffect } from 'react';
import { db } from '@/lib/store/nosql-sim';
import { 
  Globe, Search, Box, Activity, Zap, ArrowRight, 
  ChevronRight, Database, ShieldCheck, Cpu, Clock, TrendingUp
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ExplorerHome() {
  const [stats, setStats] = useState<any>(null);
  const [blocks, setBlocks] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const s = await db.getCollection('network_stats');
      const b = await db.getCollection('latest_blocks');
      const t = await db.getCollection('latest_transactions');
      setStats(s[0]);
      setBlocks(b);
      setTransactions(t);
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Explorer Header */}
      <header className="bg-[#111b11] text-white border-b border-white/5 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:rotate-12 transition-transform">
               <Globe size={18} />
            </div>
            <span className="font-black tracking-tighter text-xl">AgriChain<span className="text-emerald-500 text-xs ml-1 uppercase tracking-widest">Explorer</span></span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-[11px] font-bold uppercase tracking-widest text-slate-400">
             <Link href="/explorer" className="text-emerald-400">Home</Link>
             <Link href="/explorer/blocks" className="hover:text-white transition-colors">Blocks</Link>
             <Link href="/explorer/transactions" className="hover:text-white transition-colors">Transactions</Link>
             <Link href="#" className="hover:text-white transition-colors">Nodes</Link>
          </div>

          <div className="flex items-center gap-4">
             <div className="hidden sm:flex items-center gap-2 text-[10px] font-bold text-slate-400 px-3 py-1 bg-white/5 rounded-full border border-white/10">
                <ShieldCheck size={12} className="text-emerald-400" /> Mainnet
             </div>
             <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">A</div>
          </div>
        </div>
      </header>

      {/* Hero Search Section */}
      <section className="bg-[#111b11] text-white py-12 md:py-20 relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #34d399 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl">
               <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
                  Xác thực nguồn gốc nông sản trên <span className="text-emerald-400">AgriChain Ledger</span>
               </h1>
               
               <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                     <Search className="text-slate-500 group-focus-within:text-emerald-400 transition-colors" size={20} />
                  </div>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm theo Txn Hash / Block / Address / Token" 
                    className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 pl-14 pr-32 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white/15 transition-all"
                  />
                  <div className="absolute inset-y-2 right-2 flex items-center">
                     <Link 
                       href={searchQuery ? `/explorer/${searchQuery}` : '#'}
                       className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 h-full rounded-xl flex items-center justify-center font-bold text-sm transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
                     >
                        SEARCH
                     </Link>
                  </div>
               </div>
            </div>

            {/* Network Stats Cards */}
            {stats && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-20">
                 {[
                   { label: "AGRI PRICE", value: stats.price, change: stats.price_change, icon: Zap, color: "text-blue-400" },
                   { label: "MARKET CAP", value: stats.market_cap, change: "Dominance: 52%", icon: Globe, color: "text-emerald-400" },
                   { label: "GAS PRICE", value: stats.gas_price, change: "Low Latency", icon: Activity, color: "text-amber-400" },
                   { label: "TPS", value: stats.tps, change: "Active Nodes: 1,420", icon: Cpu, color: "text-purple-400" }
                 ].map((stat, i) => (
                   <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-white/5 border border-white/10 backdrop-blur-sm p-5 rounded-2xl"
                   >
                      <div className="flex items-center gap-2 mb-3">
                         <stat.icon size={14} className={stat.color} />
                         <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{stat.label}</span>
                      </div>
                      <div className="flex items-baseline gap-2">
                         <span className="text-xl font-black">{stat.value}</span>
                         <span className="text-[10px] font-bold text-emerald-400">{stat.change}</span>
                      </div>
                   </motion.div>
                 ))}
              </div>
            )}
         </div>
      </section>

      {/* Main Lists Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Latest Blocks */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <Box size={14} className="text-emerald-500" /> Latest Blocks
                  </h3>
                  <Link href="/explorer/blocks" className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest">View All Blocks</Link>
               </div>
               <div className="p-2 flex-grow">
                  {blocks.map((block, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-2xl border-b border-slate-50 last:border-0 group">
                       <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                             <Box size={18} />
                          </div>
                          <div>
                             <p className="text-sm font-bold text-blue-600 cursor-pointer hover:underline">{block.height}</p>
                             <p className="text-[10px] text-slate-400 font-medium">{block.timestamp}</p>
                          </div>
                       </div>
                       <div className="hidden sm:block text-right">
                          <p className="text-xs font-bold text-slate-900">Validator: <span className="text-blue-600 cursor-pointer hover:underline">{block.validator}</span></p>
                          <p className="text-[10px] text-slate-400 font-medium">{block.txns} txns in 12s</p>
                       </div>
                       <div className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-lg text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                          {block.reward}
                       </div>
                    </div>
                  ))}
               </div>
               <div className="p-4 bg-slate-50 text-center">
                  <Link href="/explorer/blocks" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-600 transition-colors flex items-center justify-center gap-2 w-full">
                     View all blocks <ArrowRight size={12} />
                  </Link>
               </div>
            </div>

            {/* Latest Transactions */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden flex flex-col">
               <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2">
                    <Activity size={14} className="text-emerald-500" /> Latest Transactions
                  </h3>
                  <Link href="/explorer/transactions" className="text-[10px] font-bold text-blue-600 hover:underline uppercase tracking-widest">View All Transactions</Link>
               </div>
               <div className="p-2 flex-grow">
                  {transactions.map((tx, i) => (
                    <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 transition-colors rounded-2xl border-b border-slate-50 last:border-0 group">
                       <div className="flex items-center gap-4 min-w-0 flex-1">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                             <FileText size={18} />
                          </div>
                          <div className="min-w-0">
                             <Link href={`/explorer/${tx.hash}`} className="text-sm font-bold text-blue-600 hover:underline block truncate">{tx.hash}</Link>
                             <p className="text-[10px] text-slate-400 font-medium">{tx.timestamp}</p>
                          </div>
                       </div>
                       <div className="hidden md:block flex-1 px-4">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">From / To</p>
                          <div className="flex items-center gap-2">
                             <span className="text-blue-600 font-bold text-xs truncate max-w-[80px]">{tx.from}</span>
                             <ChevronRight size={10} className="text-slate-300" />
                             <span className="text-blue-600 font-bold text-xs truncate max-w-[80px]">{tx.to}</span>
                          </div>
                       </div>
                       <div className="text-right shrink-0">
                          <div className="px-3 py-1 bg-slate-900 text-white rounded-lg text-[10px] font-black uppercase tracking-widest mb-1">
                             {tx.value}
                          </div>
                          <p className="text-[10px] text-slate-400 font-mono">Fee: {tx.fee}</p>
                       </div>
                    </div>
                  ))}
               </div>
               <div className="p-4 bg-slate-50 text-center">
                  <Link href="/explorer/transactions" className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] hover:text-slate-600 transition-colors flex items-center justify-center gap-2 w-full">
                     View all transactions <ArrowRight size={12} />
                  </Link>
               </div>
            </div>

         </div>
      </section>

      {/* Footer Block */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8 mt-12">
         <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
               <div className="col-span-1 md:col-span-2">
                  <Link href="/" className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-white">
                       <Globe size={20} />
                    </div>
                    <span className="font-black tracking-tighter text-2xl text-slate-900">AgriChain<span className="text-emerald-500 text-xs ml-1 uppercase tracking-widest">Explorer</span></span>
                  </Link>
                  <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
                    AgriChain là mạng lưới blockchain phi tập trung tối ưu hóa cho minh bạch chuỗi cung ứng nông sản, cung cấp dữ liệu xác thực 100% từ trang trại đến người tiêu dùng.
                  </p>
               </div>
               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Network</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Nodes Status</Link></li>
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Validators</Link></li>
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">APIs</Link></li>
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Governance</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] mb-6">Resources</h4>
                  <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Documentation</Link></li>
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Smart Contracts</Link></li>
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
                     <li><Link href="#" className="hover:text-emerald-500 transition-colors">Terms of Use</Link></li>
                  </ul>
               </div>
            </div>
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">© 2026 AgriChain Foundation. All rights reserved.</p>
               <div className="flex gap-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                     NETWORK STATUS: ONLINE
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">BUILD 3.0.1-STABLE</div>
               </div>
            </div>
         </div>
      </footer>
    </div>
  );
}

function FileText({ size, className }: { size: number, className?: string }) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <line x1="10" y1="9" x2="8" y2="9"/>
    </svg>
  );
}
