"use client";

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">DHC<span className="text-primary">2026</span></h3>
                        <p className="text-gray-400 text-sm">
                            Sathyabama Institute of Science and Technology<br />
                            (Deemed to be University)<br />
                            Jeppiaar Nagar, Rajiv Gandhi Salai,<br />
                            Chennai - 600 119.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex items-center gap-2"><Mail size={16} /> dean.computing@sathyabama.ac.in</li>
                            <li className="flex items-center gap-2"><Phone size={16} /> 044 - 2450 3150</li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    &copy; 2026 Sathyabama Institute of Science and Technology. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
