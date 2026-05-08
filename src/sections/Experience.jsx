import React from 'react';
import knowledge from '../data/knowledge.json';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">Experience</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-light">
                        My professional journey and industry contributions.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-12">
                    {knowledge.experience.length === 0 ? (
                        <p className="text-center text-gray-500 italic py-8">Experience details coming soon...</p>
                    ) : (
                        knowledge.experience.map((exp, index) => (
                            <div key={index} className="flex flex-col md:flex-row gap-8 p-10 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 items-start">
                                <div className="md:w-1/3 flex flex-col items-start">
                                    {exp.domain && (
                                        <div className="w-12 h-12 mb-6 rounded-xl overflow-hidden bg-white border border-gray-100 dark:border-gray-700 flex items-center justify-center p-2 shadow-sm">
                                            <img
                                                src={`https://logo.clearbit.com/${exp.domain}`}
                                                alt={exp.company}
                                                className="w-full h-full object-contain"
                                                onError={(e) => e.target.style.display = 'none'}
                                            />
                                        </div>
                                    )}
                                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">{exp.period}</span>
                                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-4">{exp.company}</h4>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight leading-tight">{exp.role}</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{exp.description}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Experience;
