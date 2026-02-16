"use client";

import { ArrowRight, QrCode } from "lucide-react";
import Link from "next/link";

export default function Registration() {
    return (
        <section id="register" className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-20"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-6">
                    Secure Your <span className="text-primary">Spot</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Limited seats available for students and professionals. Join us for a transformative experience.
                </p>

                {/* Card: Scan QR */}
                <div className="glass p-8 rounded-2xl border border-white/10 max-w-md w-full relative mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-4">Scan to Register</h3>
                    <div className="bg-white p-4 w-60 h-60 mx-auto rounded-lg mb-4 flex items-center justify-center">
                        {/* Use QRCODE.jpeg as requested */}
                        <img src="/QRCODE.jpeg" alt="Registration QR Code" className="w-full h-full object-contain" />
                    </div>
                    <p className="text-sm text-gray-400">Scan this QR code with your phone</p>
                </div>
            </div>
        </section>
    );
}
