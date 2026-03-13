import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/store/Providers";
import { Toaster } from "react-hot-toast";
import LayoutWrapper from "@/components/LayoutWrapper";


export const metadata: Metadata = {
  title: "E-commerce Dashboard",
  description: "Production-ready dashboard for products and cart.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Providers>
           <Toaster />
           <div className="container py-8">
            <LayoutWrapper>
          {children}
        </LayoutWrapper>
        </div>
        </Providers>
      </body>
    </html>
  );
}

