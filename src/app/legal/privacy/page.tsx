'use client';

import { useState } from 'react';
import { 
  Globe, ShieldCheck, FileText, Lock, 
  ArrowLeft, Menu, X, Scale
} from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
           <h1 className="text-5xl font-black tracking-tighter mb-4 uppercase italic">Privacy <span className="text-emerald-500">Policy</span></h1>
           <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Cập nhật lần cuối: 02 Tháng 5, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none space-y-12">
           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">1. Giới thiệu</h2>
              <p className="text-slate-600 leading-relaxed">AgriChain cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn sử dụng nền tảng blockchain của chúng tôi.</p>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">2. Thu thập dữ liệu</h2>
              <p className="text-slate-600 leading-relaxed mb-4">Chúng tôi thu thập các loại thông tin sau:</p>
              <ul className="list-disc pl-6 space-y-3 text-slate-600">
                 <li>Địa chỉ ví công khai (Public Wallet Address).</li>
                 <li>Dữ liệu nhật ký canh tác và nguồn gốc sản phẩm được cung cấp bởi nhà sản xuất.</li>
                 <li>Thông tin telemetry từ các thiết bị IoT được kết nối.</li>
              </ul>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">3. Tính bất biến của Blockchain</h2>
              <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2rem]">
                 <p className="text-emerald-800 text-sm leading-relaxed">Lưu ý quan trọng: Do bản chất của công nghệ blockchain, dữ liệu được ghi nhận vào sổ cái (ledger) là không thể thay đổi hoặc xóa bỏ. Vui lòng cân nhắc kỹ trước khi đăng tải thông tin cá nhân trực tiếp lên mạng lưới.</p>
              </div>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">4. Chia sẻ thông tin</h2>
              <p className="text-slate-600 leading-relaxed">Dữ liệu nguồn gốc sản phẩm và mã Hash được công khai để đảm bảo tính minh bạch cho người tiêu dùng cuối. Thông tin danh tính thực của nhà cung cấp được bảo mật theo các thỏa thuận hợp tác riêng biệt.</p>
           </section>

           <section>
              <h2 className="text-2xl font-black mb-6 uppercase italic text-natural-900">5. Liên hệ</h2>
              <p className="text-slate-600 leading-relaxed">Nếu bạn có bất kỳ câu hỏi nào về chính sách này, vui lòng liên hệ với đội ngũ pháp lý của chúng tôi tại: <span className="text-emerald-500 font-bold">legal@agrichain.com</span></p>
           </section>
        </div>
      </main>

      <footer className="bg-slate-50 py-12 border-t border-slate-100 mt-20">
         <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">© 2026 AgriChain Foundation. All rights reserved.</p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
               <Link href="/legal/terms" className="hover:text-emerald-500">Terms of Use</Link>
               <Link href="/explorer" className="hover:text-emerald-500">Explorer</Link>
            </div>
         </div>
      </footer>
    </div>
  );
}
