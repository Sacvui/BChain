import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "vietnamese"], variable: "--font-inter" });
const ebGaramond = EB_Garamond({ subsets: ["latin", "vietnamese"], variable: "--font-garamond", style: ["italic", "normal"] });

export const metadata: Metadata = {
  title: "fwd LIFEchain | Dự án Mokup Xác thực Blockchain - Lê Phúc Hải",
  description: "Dự án Mokup xác thực thông tin qua Blockchain của Lê Phúc Hải. fwd LIFEchain là hệ sinh thái minh bạch hóa chuỗi cung ứng nông nghiệp Việt Nam, tập trung vào giá trị sạch và an toàn.",
  keywords: ["fwd LIFEchain", "fwdlife.vn", "Farm Worth Driven", "Blockchain Agriculture", "Lê Phúc Hải", "Traceability", "Nông nghiệp số"],
  authors: [{ name: "Lê Phúc Hải" }],
  openGraph: {
    title: "fwd LIFEchain | Dự án Mokup Xác thực Blockchain - Lê Phúc Hải",
    description: "Hệ thống minh bạch chuỗi cung ứng nông sản dựa trên Blockchain và AI.",
    url: "https://fwdlife.vn",
    siteName: "fwd LIFEchain",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "fwd LIFEchain Preview",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "fwd LIFEchain | Farm · Worth · Driven",
    description: "Minh bạch hóa giá trị nông sản từ gốc rễ.",
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
    <html lang="vi" className={`${inter.variable} ${ebGaramond.variable}`}>
      <body className="antialiased font-sans">
        {children}
        <Footer />
      </body>
    </html>
  );
}
