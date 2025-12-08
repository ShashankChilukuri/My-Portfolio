import React from 'react';
import knowledge from '../data/knowledge.json';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">Projects</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {knowledge.projects.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden p-6 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
