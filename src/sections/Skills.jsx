import React from 'react';
import knowledge from '../data/knowledge.json';

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Skills</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {knowledge.skills.map((skill, index) => (
                        <div key={index} className="px-6 py-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
