import React from 'react';
import knowledge from '../data/knowledge.json';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">About Me</h2>
                <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed whitespace-pre-line">
                    {knowledge.about}
                </div>
            </div>
        </section>
    );
};

export default About;
