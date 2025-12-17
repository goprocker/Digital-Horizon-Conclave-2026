"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import SecureSpotButton from "./SecureSpotButton";

export default function Hero() {
    // Mouse position state
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for premium feel
    const springConfig = { damping: 25, stiffness: 100, mass: 0.5 }; // "TitanGate" smooth feel
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    // Layer Transforms (Parallax Effects)
    const auroraX = useTransform(springX, [-0.5, 0.5], ["-5%", "5%"]);
    const auroraY = useTransform(springY, [-0.5, 0.5], ["-5%", "5%"]);

    const blob1X = useTransform(springX, [-0.5, 0.5], ["-8%", "8%"]);
    const blob1Y = useTransform(springY, [-0.5, 0.5], ["-8%", "8%"]);

    const blob2X = useTransform(springX, [-0.5, 0.5], ["8%", "-8%"]); // Moves opposite
    const blob2Y = useTransform(springY, [-0.5, 0.5], ["8%", "-8%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { width, height } = currentTarget.getBoundingClientRect();

        // Normalize coordinates to range [-0.5, 0.5]
        const x = (clientX / width) - 0.5;
        const y = (clientY / height) - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };


    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
            onMouseMove={handleMouseMove}
        >
            {/* Unicorn Studio Animation Background */}
            <div
                data-us-project="xbdff3O7QjNIzf5H0zWe"
                data-us-scale="1"
                data-us-dpi="1.5"
                data-us-production="false"
                data-us-lazyload="false"
                data-us-alttext="Interactive hero animation"
                data-us-arialabel="Digital Horizon Conclave hero background"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0,
                }}
            />

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
