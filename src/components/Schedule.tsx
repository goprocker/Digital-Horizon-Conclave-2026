"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import styles from "./CardEffects.module.css";

const scheduleData = [
    {
        day: "Day 1",
        date: "Feb 23, 2026",
        events: [
            { time: "10:30 - 11:30 AM", title: "Beyond the Screen: How UI/UX is Redefining Digital Reality", speaker: "Kavitha Kalyan", company: "TCS" },
            { time: "11:45 - 1:00 PM", title: "Generative AI Unleashed: A Tool for Automation or a New Intelligence?", speaker: "Deepan Raj", company: "HCL" },
            { time: "2:00 - 3:00 PM", title: "Next-Gen Robotics: Bridging the Gap Between Humans and Machines", speaker: "Sridhar Shankar", company: "Intrino Robotics" },
        ],
    },
    {
        day: "Day 2",
        date: "Feb 24, 2026",
        events: [
            { time: "10:00 - 11:30 AM", title: "Human-Centric Design: The Secret Code to Digital Success", speaker: "Vinod Kumar V", company: "Phantom FX" },
            { time: "11:45 - 1:00 PM", title: "The Psychology of Play: How Game Design Hooks the Mind", speaker: "Mario Royston", company: "Weloadin" },
            { time: "2:00 - 3:00 PM", title: "Next Level Gaming: Navigating the Technological Leap or a Narrative Shift?", speaker: "Joshua Jebadurai", company: "Weloadin" },
        ],
    },
    {
        day: "Day 3",
        date: "Feb 25, 2026",
        events: [
            { time: "10:00 - 11:30 AM", title: "Building Worlds: The Power of Unreal in Modern Simulation", speaker: "Aravind Neelakandan", company: "Epic Games" },
            { time: "11:45 - 1:00 PM", title: "Extended Reality: Blurring the Lines Between Physical and Digital", speaker: "Ganesh R", company: "Monolith Asia" },
            { time: "2:00 - 3:00 PM", title: "Smart World: How Intelligent IoT is Reshaping Our Lives", speaker: "Jai Naressh", company: "Cavin Infotech" },
        ],
    },
];

export default function Schedule() {
    return (
        <section id="schedule" className="py-20 bg-black/40 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
                        Event <span className="text-primary">Schedule</span>
                    </h2>
                    <p className="text-gray-400">Mark your calendars</p>
                </div>

                <div className="space-y-12 max-w-4xl mx-auto">
                    {scheduleData.map((day, dayIndex) => (
                        <motion.div
                            key={dayIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: dayIndex * 0.1 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Day Header */}
                            <div className="mb-6 flex items-center md:justify-center gap-4">
                                <span className="text-2xl font-bold text-white">{day.day}</span>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-primary text-sm">{day.date}</span>
                            </div>

                            {/* Timeline Items */}
                            <div className={`space-y-6 relative border-l-2 border-white/10 md:border-none pl-6 md:pl-0 ${styles.container}`}>
                                {day.events.map((event, index) => (
                                    <div key={index} className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 ${styles.card}`}>
                                        <div className="flex items-center gap-4 md:w-1/3">
                                            <Clock size={18} className="text-primary" />
                                            <span className="text-white font-mono">{event.time}</span>
                                        </div>
                                        <div className="md:w-1/3 md:text-center">
                                            <h4 className="text-lg font-bold text-white">{event.title}</h4>
                                        </div>
                                        <div className="md:w-1/3 md:text-right flex flex-col items-end">
                                            <span className="text-sm font-bold text-white">{event.speaker}</span>
                                            <span className="text-xs text-primary">{event.company}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
