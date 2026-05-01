'use client';

import { useEffect, useRef, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface QRScannerProps {
  onClose: () => void;
}

export default function QRScanner({ onClose }: QRScannerProps) {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const router = useRouter();

  useEffect(() => {
    let isScannerRunning = true;
    
    // Slight delay to ensure DOM is ready for Html5QrcodeScanner
    const timer = setTimeout(() => {
      if (!isScannerRunning) return;
      
      scannerRef.current = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 },
        /* verbose= */ false
      );

      scannerRef.current.render(
        (decodedText) => {
          if (!isScannerRunning) return;
          
          try {
            if (scannerRef.current) {
              scannerRef.current.clear();
            }
            
            let id = decodedText;
            if (decodedText.includes('/verify/')) {
              // Extract the ID from the end of the URL
              const parts = decodedText.split('/verify/');
              id = parts[parts.length - 1].replace('/', '');
            }
            
            // Force browser navigation to ensure reliable routing from outside React context
            window.location.href = `/verify/${id}`;
            
          } catch (err) {
            console.error("Scanner error:", err);
          }
        },
        (error) => {
          // Ignore frequent scanning errors
        }
      );
    }, 100);

    return () => {
      isScannerRunning = false;
      clearTimeout(timer);
      if (scannerRef.current) {
        scannerRef.current.clear().catch(err => console.error("Failed to clear scanner", err));
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-6 backdrop-blur-md">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Quét mã Blockchain</h3>
          <span className="text-[10px] font-bold text-natural-500 uppercase tracking-widest bg-natural-50 px-2 py-1 rounded">Live Camera</span>
        </div>
        
        <div id="reader" className="w-full aspect-square"></div>
        
        <div className="p-6 text-center bg-slate-50">
          <p className="text-sm text-slate-500">Đưa mã QR trên bao bì vào khung hình để xác thực nguồn gốc.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
           Searching for Block Signature...
         </div>
      </div>
    </div>
  );
}
