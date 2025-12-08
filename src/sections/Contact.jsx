import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import knowledge from '../data/knowledge.json';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Get In Touch</h2>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {knowledge.contact.email && (
                        <a href={`mailto:${knowledge.contact.email}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                            <Mail size={20} />
                            <span>Email Me</span>
                        </a>
                    )}
                    {knowledge.contact.socials.linkedin && (
                        <a href={knowledge.contact.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                            <Linkedin size={20} />
                            <span>LinkedIn</span>
                        </a>
                    )}
                    {knowledge.contact.socials.github && (
                        <a href={knowledge.contact.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
                            <Github size={20} />
                            <span>GitHub</span>
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Contact;
