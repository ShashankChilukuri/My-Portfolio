import React from 'react';
import knowledge from '../data/knowledge.json';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Education</h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    {knowledge.education.length === 0 ? (
                        <p className="text-center text-gray-500">Coming soon...</p>
                    ) : (
                        knowledge.education.map((edu, index) => (
                            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 transition hover:shadow-md">
                                <div className="flex flex-col md:flex-row justify-between mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                                    <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full w-fit mt-2 md:mt-0">{edu.year}</span>
                                </div>
                                <p className="text-blue-600 font-medium mb-2">{edu.institution}</p>
                                {edu.details && <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.details}</p>}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Education;
