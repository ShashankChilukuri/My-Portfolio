import React from 'react';
import knowledge from '../data/knowledge.json';

const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Experience</h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {knowledge.experience.length === 0 ? (
                        <p className="text-center text-gray-500">Coming soon...</p>
                    ) : (
                        knowledge.experience.map((exp, index) => (
                            <div key={index} className="border-l-4 border-blue-600 pl-6 py-2">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                <p className="text-lg text-blue-600 mb-1">{exp.company}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
                                <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
