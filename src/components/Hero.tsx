"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background mix-blend-overlay opacity-90"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex flex-col items-center gap-4 mb-6">
                        <span className="text-primary font-bold tracking-widest text-sm md:text-base uppercase bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            Sathyabama Institute of Science & Technology
                        </span>
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium tracking-wider backdrop-blur-sm">
                            NATIONAL LEVEL TECHNICAL SYMPOSIUM
                        </span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 font-[family-name:var(--font-orbitron)] uppercase bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-primary neon-text">
                        Digital Horizon <br className="hidden md:block" /> Conclave 2026
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
                        The Convergence of <span className="text-primary font-medium">AI</span>, <span className="text-primary font-medium">Gaming</span>, and <span className="text-primary font-medium">Smart Realities</span>
                    </p>

                    {/* Event Details */}
                    <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar className="text-primary" size={20} />
                            <span>Feb 4-6, 2026</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="text-primary" size={20} />
                            <span>10:00 AM Onwards</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="text-primary" size={20} />
                            <span>Sathyabama Institute of Science & Technology</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#register"
                            className="inline-flex items-center justify-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)]"
                        >
                            Register Now <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="#schedule"
                            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-white/10 hover:border-white/30 backdrop-blur-sm"
                        >
                            View Schedule
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>
    );
}
