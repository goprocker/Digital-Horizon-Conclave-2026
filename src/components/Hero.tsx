"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import SecureSpotButton from "./SecureSpotButton";
import FluidHoverReveal from "./FluidHoverReveal";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        >
            {/* Fluid Hover Reveal Background */}
            <FluidHoverReveal />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="pointer-events-auto"
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
                            <span>Feb 23-25, 2026</span>
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
                        <SecureSpotButton />
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
