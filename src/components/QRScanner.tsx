'use client';

import { useEffect, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface QRScannerProps {
  onClose: () => void;
}

export default function QRScanner({ onClose }: QRScannerProps) {
  const [error, setError] = useState<string>('');
  const router = useRouter();

  useEffect(() => {
    let html5QrCode: Html5Qrcode;
    let isMounted = true;

    const startScanner = async () => {
      try {
        // Small delay to ensure the div is rendered
        await new Promise(resolve => setTimeout(resolve, 300));
        if (!isMounted) return;

        html5QrCode = new Html5Qrcode("reader");

        await html5QrCode.start(
          { facingMode: "environment" }, // Prefer back camera
          {
            fps: 10,
            qrbox: { width: 250, height: 250 }
          },
          (decodedText) => {
            if (!isMounted) return;
            // Handle successful scan
            try {
              html5QrCode.stop().catch(console.error);
              
              let id = decodedText;
              if (decodedText.includes('/verify/')) {
                const parts = decodedText.split('/verify/');
                id = parts[parts.length - 1].replace('/', '');
              }
              
              // Navigate to the verification page
              window.location.href = `/verify/${id}`;
            } catch (err) {
              console.error("Routing error:", err);
            }
          },
          (errorMessage) => {
            // Ignore scan errors as they happen every frame a QR is not found
          }
        );
      } catch (err) {
        console.error("Camera start error:", err);
        if (isMounted) {
          setError("Không thể truy cập Camera. Vui lòng cấp quyền trong trình duyệt.");
        }
      }
    };

    startScanner();

    return () => {
      isMounted = false;
      if (html5QrCode && html5QrCode.isScanning) {
        html5QrCode.stop().catch(console.error);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-6 backdrop-blur-md">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-50"
      >
        <X size={24} />
      </button>

      <div className="w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl relative">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-900">Quét mã Blockchain</h3>
          <span className="text-[10px] font-bold text-natural-500 uppercase tracking-widest bg-natural-50 px-2 py-1 rounded">Live Camera</span>
        </div>
        
        {/* The scanner will mount here */}
        <div id="reader" className="w-full bg-black min-h-[300px]"></div>
        
        {error ? (
          <div className="p-4 text-center bg-red-50">
            <p className="text-sm text-red-500 font-medium">{error}</p>
          </div>
        ) : (
          <div className="p-6 text-center bg-slate-50">
            <p className="text-sm text-slate-500">Đưa mã QR trên bao bì vào khung hình để xác thực nguồn gốc.</p>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest animate-pulse">
           Searching for Block Signature...
         </div>
      </div>
    </div>
  );
}
