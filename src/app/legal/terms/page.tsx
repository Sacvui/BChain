'use client';

import { useState } from 'react';
import { 
  Globe, ShieldCheck, Scale, 
  ArrowLeft, Menu, X
} from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="bg-slate-50 border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-slate-500 hover:text-natural-900 transition-colors">
            <ArrowLeft size={18} />
            <span className="text-[11px] font-black uppercase tracking-widest">Back to Home</span>
          </Link>
          <div className="flex items-center gap-2">
             <Scale size={18} className="text-emerald-500" />
             <span className="text-sm font-black uppercase tracking-tighter">Legal Center</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="mb-16">
           <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase italic">Terms of <span className="text-emerald-500">Use</span></h1>
           <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Cập nhật lần cuối: 02 Tháng 5, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">1. Chấp thuận điều khoản</h2>
              <p className="text-slate-600 leading-relaxed">Bằng việc truy cập và sử dụng nền tảng AgriChain, bạn đồng ý tuân thủ các Điều khoản sử dụng này. Nếu bạn không đồng ý, vui lòng ngừng sử dụng dịch vụ của chúng tôi.</p>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">2. Quyền sở hữu trí tuệ</h2>
              <p className="text-slate-600 leading-relaxed">Tất cả mã nguồn, thiết kế, biểu trưng và dữ liệu được biên soạn trên AgriChain là tài sản của AgriChain Foundation hoặc các bên cấp phép, được bảo vệ bởi luật sở hữu trí tuệ quốc tế.</p>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">3. Trách nhiệm người dùng</h2>
              <ul className="list-disc pl-6 space-y-3 text-slate-600">
                 <li>Không sử dụng nền tảng cho các mục đích bất hợp pháp hoặc gian lận dữ liệu nguồn gốc.</li>
                 <li>Bảo mật các khóa bí mật (private keys) liên quan đến ví của bạn.</li>
                 <li>Chịu trách nhiệm về tính chính xác của dữ liệu được ghi nhận lên chuỗi khối.</li>
              </ul>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">4. Giới hạn trách nhiệm</h2>
              <p className="text-slate-600 leading-relaxed">AgriChain cung cấp nền tảng "nguyên trạng" (as is). Chúng tôi không chịu trách nhiệm cho bất kỳ tổn thất tài chính nào phát sinh từ việc biến động giá token hoặc các lỗi kỹ thuật ngoài tầm kiểm soát của mạng lưới phi tập trung.</p>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">5. Thay đổi điều khoản</h2>
              <p className="text-slate-600 leading-relaxed">Chúng tôi có quyền sửa đổi các điều khoản này bất cứ lúc nào thông qua cơ chế biểu quyết quản trị (Governance). Việc bạn tiếp tục sử dụng dịch vụ sau khi các thay đổi được công bố đồng nghĩa với việc chấp nhận các điều khoản mới.</p>
           </section>
        </div>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-100 mt-20">
         <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">© 2026 AgriChain Foundation. All rights reserved.</p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
               <Link href="/legal/privacy" className="hover:text-emerald-500">Privacy Policy</Link>
               <Link href="/explorer" className="hover:text-emerald-500">Explorer</Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
