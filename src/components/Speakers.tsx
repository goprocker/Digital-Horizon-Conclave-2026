"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin } from "lucide-react";
import styles from "./CardEffects.module.css";

const speakersData = {
    day1: [
        {
            name: "Kavitha Kalyan",
            role: "Director of Design, TCS",
            topic: "Beyond the Screen: How UI/UX is Redefining Digital Reality",
            image: "/KavithaKalyan.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/kavithakalyan/",
            time: "10:30 - 11:30 AM"
        },
        {
            name: "Deepan Raj",
            role: "Director of Design, HCL",
            topic: "Generative AI Unleashed: A Tool for Automation or a New Intelligence?",
            image: "/DeepanRaj.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/deepanrajm/",
            time: "11:45 - 1:00 PM"
        },
        {
            name: "Sridhar Shankar",
            role: "Founder & CEO, Intrino Robotics",
            topic: "Next-Gen Robotics: Bridging the Gap Between Humans and Machines",
            image: "/SridharSankar.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/sridhar-sankar-a66810140/",
            time: "2:00 - 3:00 PM"
        },
    ],
    day2: [
        {
            name: "Vinod Kumar V",
            role: "Senior L&D Professional, Phantom FX",
            topic: "Human-Centric Design: The Secret Code to Digital Success",
            image: "/VinodKumar.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/vinodkumar0205/",
            time: "10:00 - 11:30 AM"
        },
        {
            name: "Mario Royston",
            role: "Co-Founder, Weloadin",
            topic: "The Psychology of Play: How Game Design Hooks the Mind",
            image: "/MarioRoyston.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/marioroyston/",
            time: "11:45 - 1:00 PM"
        },
        {
            name: "Joshua Jebadurai",
            role: "Game Developer, Weloadin",
            topic: "Next-Gen Gaming: A Technological Leap or a Creative Shift?",
            image: "/JoshuaJebadurai.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/joshuajebadurai/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            time: "2:00 - 3:00 PM"
        },
    ],
    day3: [
        {
            name: "Ms. Gayathri Shri",
            role: "Creative director, Agreal studios",
            topic: "SnapAR: The Next Generation of Social Augmented Reality",
            image: "/Gayathri Shri.jpg", // Local image
            linkedin: "",
            time: "10:30 - 11:30 AM"
        },
        {
            name: "Ganesh R",
            role: "Vice President, Monolith Asia",
            topic: "Extended Reality: Blurring the Lines Between Physical and Digital",
            image: "/GaneshR.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/ganesh-r-82a05293/",
            time: "11:45 - 1:00 PM"
        },
        {
            name: "Jai Naressh",
            role: "Director, Cavin Infotech",
            topic: "Smart World: How Intelligent IoT is Reshaping Our Lives",
            image: "/JainaresshBC.jpg", // Local image
            linkedin: "https://www.linkedin.com/in/jaibc/",
            time: "2:00 - 3:00 PM"
        },
    ],
};

const days = [
    { id: "day1", label: "Day 1", date: "Feb 23" },
    { id: "day2", label: "Day 2", date: "Feb 24" },
    { id: "day3", label: "Day 3", date: "Feb 25" },
];

export default function Speakers() {
    const [activeDay, setActiveDay] = useState("day1");

    return (
        <section id="speakers" className="py-20 bg-background relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
                        Distinguished <span className="text-primary">Speakers</span>
                    </h2>
                    <p className="text-gray-400">Visionaries shaping the future</p>
                </div>

                {/* Tabs */}
                <div className="flexjustify-center mb-12">
                    <div className="flex space-x-4 bg-white/5 p-2 rounded-full backdrop-blur-sm border border-white/10 mx-auto w-fit">
                        {days.map((day) => (
                            <button
                                key={day.id}
                                onClick={() => setActiveDay(day.id)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeDay === day.id
                                    ? "bg-primary text-black shadow-[0_0_15px_rgba(0,240,255,0.5)]"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <span className="block font-bold">{day.label}</span>
                                <span className="text-xs opacity-80">{day.date}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeDay}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.container}`}
                        >
                            {speakersData[activeDay as keyof typeof speakersData].map((speaker: any, index) => (
                                <div key={index} className={`glass rounded-xl overflow-hidden group hover:border-primary/50 border border-white/10 ${styles.card}`}>
                                    <div className="p-6">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-blue-600 p-[2px] mb-4 mx-auto">
                                            <div className="w-full h-full rounded-full overflow-hidden bg-black">
                                                {/* Replace with real images if available, using placeholder for now */}
                                                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{speaker.name}</h3>
                                            <p className="text-primary text-sm mb-2">{speaker.role}</p>
                                            {speaker.time && <p className="text-gray-300 text-xs mb-2">{speaker.time}</p>}
                                            <div className="flex justify-center mb-4 min-h-[18px]">
                                                {speaker.linkedin && (
                                                    <a href={speaker.linkedin} className="text-gray-400 hover:text-[#0077b5] transition-colors" target="_blank" rel="noopener noreferrer">
                                                        <Linkedin size={18} />
                                                    </a>
                                                )}
                                            </div>
                                            <hr className="border-white/10 mb-4" />
                                            <p className="text-gray-300 text-sm italic">&quot;{speaker.topic}&quot;</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
