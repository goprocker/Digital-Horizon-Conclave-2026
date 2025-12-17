import type { Metadata } from "next";
import { Geist, Geist_Mono, Orbitron } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Digital Horizon Conclave 2026",
  description: "The Convergence of AI, Gaming, and Smart Realities - Sathyabama Institute of Science and Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        {children}

        {/* Unicorn Studio Loader */}
        <Script
          id="unicorn-studio-loader"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(){
                if(!window.UnicornStudio){
                  window.UnicornStudio={isInitialized:false};
                  var s=document.createElement("script");
                  s.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.3/dist/unicornStudio.umd.js";
                  s.onload=function(){
                    if(!window.UnicornStudio.isInitialized){
                      UnicornStudio.init();
                      window.UnicornStudio.isInitialized=true;
                    }
                  };
                  (document.head||document.body).appendChild(s);
                }
              }();
            `,
          }}
        />

        {/* Unicorn Studio Re-init for Hot Reload */}
        <Script
          id="unicorn-studio-reinit"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", () => {
                if (window.UnicornStudio) {
                  UnicornStudio.init();
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
