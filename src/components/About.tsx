"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-orbitron)] text-white">
                        About The <span className="text-primary">Conclave</span>
                    </h2>
                    <div className="glass p-8 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <p className="text-lg text-gray-300 leading-relaxed mb-6">
                            The <strong className="text-white">Digital Horizon Conclave 2026</strong> is a premier National-level Technical Symposium organizing by the <span className="text-primary">School of Computing, Department of Computer Science & Engineering</span> at Sathyabama Institute of Science and Technology.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            This event serves as a platform for the convergence of cutting-edge technologies. We focus on bridging the gap between industry experts and students through knowledge sharing in <span className="text-accent">AI, Gaming, XR, Robotics, UI/UX, and IoT</span>. Join us to witness the future of digital realities.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none"></div>
        </section>
    );
}
