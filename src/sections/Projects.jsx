import React from 'react';
import { motion } from 'framer-motion';
import knowledge from '../data/knowledge.json';
import PremiumProjectCard from '../components/PremiumProjectCard';

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-white dark:bg-gray-900 overflow-hidden border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6">
                
                {/* Premium Projects Header */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 uppercase tracking-tighter">
                            Featured AI Initiatives
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
                            A deep dive into complex, enterprise-grade AI systems and platforms I've built to solve real-world problems.
                        </p>
                    </motion.div>
                </div>

                {/* Premium Projects Showcase */}
                <div className="flex flex-col gap-12 lg:gap-24 max-w-7xl mx-auto mb-32">
                    {knowledge.premiumProjects?.map((project, index) => (
                        <PremiumProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* Other Projects Header */}
                <div className="max-w-2xl mx-auto text-center mb-16 relative">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-200 dark:border-gray-800"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-6 bg-white dark:bg-gray-900 text-xl font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                            More Projects
                        </span>
                    </div>
                </div>

                {/* Standard Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {knowledge.projects.map((project, index) => (
                        <div key={index} className="group flex flex-col bg-gray-50 dark:bg-gray-800/50 rounded-3xl border border-gray-100 dark:border-gray-700 p-8 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500">
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">{project.description}</p>
                            </div>
                            <div className="mt-auto flex flex-wrap gap-2">
                                {project.techStack.map((tech, i) => (
                                    <span key={i} className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 bg-white dark:bg-gray-900 px-3 py-1 rounded-full border border-gray-100 dark:border-gray-800">
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
