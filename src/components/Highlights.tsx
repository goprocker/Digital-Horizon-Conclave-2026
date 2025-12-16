"use client";

import { motion } from "framer-motion";
import { Mic, Cpu, Gamepad2, Layers, Briefcase } from "lucide-react";

import styles from "./CardEffects.module.css";

const highlights = [
    {
        icon: <Mic size={40} />,
        title: "Expert Speakers",
        description: "Learn from industry leaders in Design, AI, Robotics, and Gaming.",
    },
    {
        icon: <Cpu size={40} />,
        title: "AI & Emerging Tech",
        description: "Explore the latest in Generative AI, Automation, and Smart Realities.",
    },
    {
        icon: <Gamepad2 size={40} />,
        title: "Gaming & XR",
        description: "Dive into the world of Next-Gen Gaming and Extended Reality.",
    },
    {
        icon: <Layers size={40} />,
        title: "Hands-on Insights",
        description: "Practical sessions and deep dives into real-world applications.",
    },
    {
        icon: <Briefcase size={40} />,
        title: "Career Focused",
        description: "Networking opportunities and career guidance for future tech leaders.",
    },
];

export default function Highlights() {
    return (
        <section id="highlights" className="py-20 bg-black/20 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
                        Event <span className="text-primary">Highlights</span>
                    </h2>
                    <p className="text-gray-400">What makes Digital Horizon Conclave unique?</p>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.container}`}>
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`glass p-8 rounded-2xl hover:bg-white/5 border border-white/5 group ${styles.card}`}
                        >
                            <div className="text-primary mb-6 p-4 bg-primary/10 rounded-full inline-block group-hover:bg-primary group-hover:text-black transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
