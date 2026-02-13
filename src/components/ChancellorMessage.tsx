"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ChancellorMessage() {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-center gap-12"
                >
                    {/* Left Column: Portrait */}
                    <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 shadow-2xl overflow-hidden group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors duration-300 z-10" />
                            <Image
                                src="/chancellor.webp"
                                alt="Dr. Mariezenna Johnson"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column: Message */}
                    <div className="w-full md:w-2/3">
                        <div className="relative p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden">
                            {/* Abstract decorative pattern */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-6">
                                    Note from the Chancellor
                                </h2>

                                <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                                    <p>
                                        <span className="text-4xl text-primary font-serif absolute -translate-x-6 -translate-y-4 opacity-50">&ldquo;</span>
                                        It gives me immense pleasure to welcome you all to the <span className="text-white font-medium">Digital Horizon Conclave 2026</span>, a premier platform that brings together innovation, creativity, and technological excellence.
                                    </p>
                                    <p>
                                        In an era defined by rapid advancements in Artificial Intelligence, Gaming, and Smart Realities, this conclave serves as a bridge between academic learning and real-world industry practices. The symposium aims to inspire young minds, encourage critical thinking, and foster meaningful interactions with industry leaders and experts.
                                    </p>
                                    <p>
                                        I extend my heartfelt appreciation to the School of Computing, the Department of Computer Science and Engineering, the organizing committee, and all the participants for their dedication and enthusiasm in making this event a success.
                                    </p>
                                    <p>
                                        I wish the Digital Horizon Conclave 2026 every success and hope it becomes a transformative learning experience for all.
                                    </p>
                                </div>

                                <div className="mt-8 pt-8 border-t border-white/10">
                                    <h3 className="text-xl font-bold text-white font-[family-name:var(--font-orbitron)]">
                                        Dr. Mariezenna Johnson
                                    </h3>
                                    <p className="text-primary text-sm mt-1">Chancellor</p>
                                    <p className="text-gray-400 text-xs">Sathyabama Institute of Science and Technology</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
