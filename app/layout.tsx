import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockchain Verification - Smart Bird's Nest",
  description: "Xác minh nguồn gốc Nước Yến thông qua công nghệ Blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
