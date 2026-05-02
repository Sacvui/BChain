import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mockup thị phạm xác minh Minh bạch chuỗi khối (Blockchain) - NCS Lê Phúc Hải",
  description: "Hệ thống xác thực nguồn gốc nông sản kết hợp AI và Blockchain. Đề án nghiên cứu của Nghiên cứu sinh Lê Phúc Hải.",
  keywords: ["Blockchain", "AgriChain", "Minh bạch chuỗi khối", "Lê Phúc Hải", "Nghiên cứu sinh", "Xác thực nông sản"],
  authors: [{ name: "Lê Phúc Hải" }],
  openGraph: {
    title: "AgriChain - Minh bạch chuỗi khối & AI",
    description: "Hệ thống xác thực nguồn gốc nông sản kết hợp AI và Blockchain. Đề án nghiên cứu của Nghiên cứu sinh Lê Phúc Hải.",
    url: "https://agrichain.lephuchai.com", // Giả định domain của bạn
    siteName: "AgriChain",
    images: [
      {
        url: "/og-image.png", // Bạn nên đặt ảnh tôi vừa tạo vào thư mục public với tên này
        width: 1200,
        height: 630,
        alt: "AgriChain Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriChain - Minh bạch chuỗi khối & AI",
    description: "Đề án nghiên cứu của Nghiên cứu sinh Lê Phúc Hải.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
