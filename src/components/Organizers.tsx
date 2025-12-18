"use client";

import styles from "./CardEffects.module.css";

const organizers = [
    { role: "Chief Patrons", names: ["Dr. Mariazeena Johnson (Chancellor)", "Dr. Marie Johnson (President)", "Ms. Maria Catherine Johnson (Vice President)"] },

    { role: "Convenors", names: ["Dr. L. Lakshmanan (HOD, CSE)", "Dr. P. Ajitha (HOD, SPEC)"] },
    { role: "Faculty Co-ordinators", names: ["Ms. S. Balapriya", "Ms. J. Refonaa", "Ms. Sylvia Grace", "Ms. U.A. Ranjini", "Ms. Shanmugaa Priyaa", "Ms. Priya Lakshmi"] },
    { role: "Student Co-ordinators", names: ["Nangaiyar (II Yr - AI & Robotics)", "Dharshana K. S (II Yr - AI & Robotics)", "Gopinath (I Yr - AI)"] },
];

export default function Organizers() {
    return (
        <section id="team" className="py-20 bg-background relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-orbitron)] text-white mb-4">
                        Organizing <span className="text-primary">Team</span>
                    </h2>
                </div>

                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.container}`}>
                    {organizers.map((group, index) => (
                        <div key={index} className={`glass p-6 rounded-xl border border-white/5 text-center hover:border-primary/30 ${styles.card}`}>
                            <h3 className="text-xl font-bold text-primary mb-4 uppercase tracking-wider">{group.role}</h3>
                            <ul className="space-y-2">
                                {group.names.map((name, idx) => (
                                    <li key={idx} className="text-white font-medium">{name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
