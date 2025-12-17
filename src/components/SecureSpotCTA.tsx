"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SecureSpotCTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative py-24 overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #0a1628 0%, #1a2744 50%, #0f1f3d 100%)",
            }}
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                {/* Card Container */}
                <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-black text-white text-center mb-6 tracking-tight"
                    >
                        Secure Your Spot
                    </motion.h2>

                    {/* Body Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-gray-300 text-center mb-8 max-w-2xl mx-auto leading-relaxed"
                    >
                        Limited seats available for students and professionals. Join us for a transformative experience.
                    </motion.p>

                    {/* QR Code and Button Container */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                        {/* QR Code */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.4,
                                type: "spring",
                                stiffness: 200,
                                damping: 15
                            }}
                            className="relative"
                        >
                            <div className="bg-white p-4 rounded-2xl shadow-xl">
                                <Image
                                    src="/qecode.png"
                                    alt="Registration QR Code"
                                    width={200}
                                    height={200}
                                    className="w-48 h-48 md:w-56 md:h-56"
                                />
                            </div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary to-cyan-400 rounded-2xl blur-xl opacity-20 -z-10" />
                        </motion.div>

                        {/* Register Button */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <Link
                                href="#register"
                                className="group relative inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-black bg-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                                {/* Button content */}
                                <span className="relative z-10 tracking-wide">Register Now</span>

                                {/* Animated shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-center text-sm text-gray-400 mt-8"
                    >
                        Digital Horizon Conclave 2026
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
