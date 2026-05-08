import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, BarChart3, Layers, Code2 } from 'lucide-react';

const PremiumProjectCard = ({ project, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center w-full py-12 lg:py-20 group`}
        >
            {/* Glowing background blob */}
            <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-20' : '-right-20'} w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-[100px] -z-10 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/30 transition-colors duration-700`} />
            
            {/* Project Info Section */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 relative z-10">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold border border-blue-100 dark:border-blue-800/50 w-fit">
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                        Featured AI Project
                    </div>
                    {project.status && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 text-sm font-semibold border border-amber-100 dark:border-amber-800/50 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            {project.status}
                        </div>
                    )}
                </div>
                
                <div>
                    <h3 className="text-3xl lg:text-5xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-lg lg:text-xl font-medium text-blue-600 dark:text-blue-400 mb-4">
                        {project.tagline}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                        {project.description}
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-2">
                    <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold">
                            <Layers className="w-5 h-5 text-blue-500" />
                            Key Features
                        </div>
                        <ul className="flex flex-col gap-2">
                            {project.keyFeatures.slice(0, 4).map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {project.businessImpact ? (
                        <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold">
                                <BarChart3 className="w-5 h-5 text-purple-500" />
                                Business Impact
                            </div>
                            <ul className="flex flex-col gap-2">
                                {project.businessImpact.map((impact, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                        <ChevronRight className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" />
                                        <span>{impact}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3 p-5 rounded-2xl bg-white/50 dark:bg-gray-800/30 border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2 text-gray-900 dark:text-white font-bold">
                                <Code2 className="w-5 h-5 text-orange-500" />
                                Advanced Tech
                            </div>
                            <ul className="flex flex-col gap-2">
                                {project.keyFeatures.slice(4, 8).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Visual / Tech Stack Section */}
            <div className="w-full lg:w-1/2 relative z-10 perspective-1000">
                <motion.div 
                    whileHover={{ scale: 1.02, rotateY: isEven ? -5 : 5, rotateX: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-3xl p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl overflow-hidden"
                >
                    {/* Decorative UI elements mimicking a complex system */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    
                    <div className="mb-6 flex justify-between items-center">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="text-xs font-mono text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md">
                            System Architecture
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="h-16 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700/50 flex items-center justify-center animate-pulse" style={{ animationDelay: `${i * 0.2}s`, animationDuration: '3s' }}>
                                <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Core Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech, i) => (
                                <span key={i} className="px-4 py-2 rounded-lg text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PremiumProjectCard;
