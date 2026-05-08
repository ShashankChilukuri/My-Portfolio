import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import knowledge from '../data/knowledge.json';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">Get In Touch</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-light">
                        I'm always open to discussing new projects, creative ideas, or opportunities.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-24">
                    {knowledge.contact.email && (
                        <a href={`mailto:${knowledge.contact.email}`} className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                            <span className="font-bold text-gray-900 dark:text-white">Email Me</span>
                        </a>
                    )}
                    {knowledge.contact.socials.linkedin && (
                        <a href={knowledge.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <Linkedin size={20} className="text-blue-700 dark:text-blue-500" />
                            <span className="font-bold text-gray-900 dark:text-white">LinkedIn</span>
                        </a>
                    )}
                    {knowledge.contact.socials.github && (
                        <a href={knowledge.contact.socials.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                            <Github size={20} className="text-gray-900 dark:text-white" />
                            <span className="font-bold text-gray-900 dark:text-white">GitHub</span>
                        </a>
                    )}
                </div>

                {/* Minimal Footer */}
                <div className="pt-16 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-gray-400 dark:text-gray-500 text-xs font-medium tracking-wider">
                        © {new Date().getFullYear()} {knowledge.name}. All rights reserved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
