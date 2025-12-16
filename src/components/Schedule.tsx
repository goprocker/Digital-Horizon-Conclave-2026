"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const scheduleData = [
    {
        day: "Day 4",
        date: "Feb 4, 2026",
        events: [
            { time: "10:00 AM", title: "Inauguration Ceremony", location: "Main Auditorium" },
            { time: "11:30 AM", title: "Keynote: Beyond the Screen", location: "Hall A" },
            { time: "02:00 PM", title: "Workshop: UI/UX Trends", location: "Lab 1" },
        ],
    },
    {
        day: "Day 5",
        date: "Feb 5, 2026",
        events: [
            { time: "10:00 AM", title: "Panel: AI Ethics", location: "Hall B" },
            { time: "11:30 AM", title: "Exhibition: Robotics Showcase", location: "Expo Center" },
            { time: "02:00 PM", title: "Hackathon Kickoff", location: "Tech Park" },
        ],
    },
    {
        day: "Day 6",
        date: "Feb 6, 2026",
        events: [
            { time: "10:00 AM", title: "Gaming Tournament Finals", location: "Gaming Arena" },
            { time: "01:00 PM", title: "Closing Keynote & Awards", location: "Main Auditorium" },
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
                            <div className="space-y-6 relative border-l-2 border-white/10 md:border-none pl-6 md:pl-0">
                                {day.events.map((event, index) => (
                                    <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                                        <div className="flex items-center gap-4 md:w-1/3">
                                            <Clock size={18} className="text-primary" />
                                            <span className="text-white font-mono">{event.time}</span>
                                        </div>
                                        <div className="md:w-1/3 md:text-center">
                                            <h4 className="text-lg font-bold text-white">{event.title}</h4>
                                        </div>
                                        <div className="md:w-1/3 md:text-right">
                                            <span className="text-sm text-gray-400">{event.location}</span>
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
