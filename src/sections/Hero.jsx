import React from 'react';
import { motion } from 'framer-motion';
import knowledge from '../data/knowledge.json';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 pt-20">
            <div className="container mx-auto px-6 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                >
                    {knowledge.name}
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    {knowledge.tagline}
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex gap-4 justify-center"
                >
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                    >
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition shadow-sm hover:shadow-md"
                    >
                        View Work
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
