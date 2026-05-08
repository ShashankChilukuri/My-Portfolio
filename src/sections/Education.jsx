import React from 'react';
import knowledge from '../data/knowledge.json';

const Education = () => {
    return (
        <section id="education" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">Education</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-light">
                        My academic foundation and educational milestones.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    {knowledge.education.length === 0 ? (
                        <p className="text-center text-gray-500 italic py-8">Academic details coming soon...</p>
                    ) : (
                        knowledge.education.map((edu, index) => (
                            <div key={index} className="group p-8 bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-gray-100 dark:border-gray-800 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300">
                                <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white uppercase tracking-tight group-hover:text-purple-600 transition-colors">{edu.degree}</h3>
                                    <span className="text-xs font-black px-4 py-1.5 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full border border-purple-100 dark:border-purple-800 w-fit">{edu.year}</span>
                                </div>
                                <p className="text-lg font-bold text-gray-700 dark:text-gray-300 mb-4">{edu.institution}</p>
                                {edu.details && <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{edu.details}</p>}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;
