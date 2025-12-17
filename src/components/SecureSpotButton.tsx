"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SecureSpotButton() {
    return (
        <Link
            href="#register"
            className="inline-flex items-center justify-center gap-3 relative px-10 py-5 rounded-full transition-all hover:scale-105 group overflow-visible"
        >
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "linear-gradient(90deg, #1a1a1a, #2a2a2a, #1a1a1a)",
                    backgroundSize: "200% 100%",
                }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"
                style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.3), transparent)",
                }}
            />

            {/* Text with liquid effect */}
            <span className="relative z-10 liquid-text uppercase" style={{
                fontSize: '1.25rem',
                fontWeight: 900,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textShadow: '0 1px 0 rgba(0,0,0,0.3), 0 2px 0 rgba(0,0,0,0.2), 0 3px 0 rgba(0,0,0,0.1)',
            }}>
                Secure Your Spot
            </span>
            <ArrowRight size={22} className="relative z-10 text-white" style={{
                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.3))'
            }} />

            <style jsx>{`
                .liquid-text {
                    filter: url(#liquid-filter);
                    animation: liquidWave 6s ease-in-out infinite;
                    font-family: 'Impact', 'Arial Black', sans-serif;
                    font-stretch: condensed;
                }
                
                @keyframes liquidWave {
                    0%, 100% { 
                        filter: url(#liquid-filter);
                    }
                    50% { 
                        filter: url(#liquid-filter-alt);
                    }
                }
            `}</style>

            {/* SVG filters for liquid distortion effect */}
            <svg width="0" height="0" style={{ position: 'absolute' }}>
                <defs>
                    <filter id="liquid-filter" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.008 0.004"
                            numOctaves="3"
                            result="turbulence"
                            seed="1"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="12s"
                                values="0.008 0.004;0.012 0.006;0.008 0.004"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="turbulence"
                            scale="3"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>

                    <filter id="liquid-filter-alt" x="-50%" y="-50%" width="200%" height="200%">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.01 0.005"
                            numOctaves="3"
                            result="turbulence"
                            seed="2"
                        >
                            <animate
                                attributeName="baseFrequency"
                                dur="12s"
                                values="0.01 0.005;0.014 0.007;0.01 0.005"
                                repeatCount="indefinite"
                            />
                        </feTurbulence>
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="turbulence"
                            scale="4"
                            xChannelSelector="R"
                            yChannelSelector="G"
                        />
                    </filter>
                </defs>
            </svg>
        </Link>
    );
}
