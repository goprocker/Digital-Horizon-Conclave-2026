"use client";

import Image from "next/image";

// Ideally you would have these logos in public/images/
// Since we don't, I will use text placeholders or see if I can use generic placeholders.
const accreditations = [
    "NAAC A++", "NIRF", "NBA", "QS I-Gauge", "AICTE"
];

export default function Accreditation() {
    return (
        <section className="py-12 bg-white/5 border-t border-white/10">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-400 text-sm uppercase tracking-widest mb-8">Accredited By</p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {accreditations.map((name, index) => (
                        <div key={index} className="text-2xl font-bold text-white/50 hover:text-white transition-colors cursor-pointer font-serif">
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
