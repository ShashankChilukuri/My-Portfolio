import React from 'react';
import { motion } from 'framer-motion';
import knowledge from '../data/knowledge.json';

const About = () => {
    return (
        <section id="about" className="min-h-[80vh] flex items-center justify-center bg-[#0b1120] relative overflow-hidden border-t border-white/5">
            {/* Background elements mirroring Hero */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-900/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-white leading-[0.95]"
                    >
                        About
                        <span className="ml-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">
                            Me
                        </span>
                    </motion.h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-tight leading-relaxed">
                        {knowledge.about}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-wrap gap-4 justify-center"
                >
                    <div className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold backdrop-blur-sm">
                        <span className="text-blue-400">9.3</span> CGPA
                    </div>
                    <div className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold backdrop-blur-sm">
                        <span className="text-indigo-400">7+</span> Projects
                    </div>
                    <div className="px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold backdrop-blur-sm">
                        SDE Intern @ <span className="text-purple-400">nDMatrix</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
