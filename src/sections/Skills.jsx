import React from 'react';
import { Lightbulb, Layout, Grid } from 'lucide-react';
import knowledge from '../data/knowledge.json';

const skillLogoMap = {
    "JavaScript": "js",
    "Python": "python",
    "Java": "java",
    "C": "c",
    "React.js": "react",
    "Node.js": "nodejs",
    "Express.js": "express",
    "MySQL": "mysql",
    "MongoDB": "mongodb",
    "AWS (EC2, S3, Lambda - Beginner)": "aws",
    "Render": "render",
    "Vercel": "vercel",
    "Git": "git",
    "GitHub": "github",
    "Postman": "postman",
    "Databricks": "databricks"
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Technical Toolkit</h2>
                    <p className="text-gray-500 dark:text-gray-400 font-light">
                        A comprehensive set of technologies I use to bring ideas to life.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {knowledge.skills.map((skill, index) => {
                        const logoKey = skillLogoMap[skill];
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 px-6 py-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 group"
                            >
                                {logoKey ? (
                                    <img
                                        src={`https://skillicons.dev/icons?i=${logoKey}`}
                                        alt={skill}
                                        className="w-6 h-6 group-hover:scale-110 transition-transform"
                                    />
                                ) : (
                                    <div className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                        {skill === "Problem Solving" ? <Lightbulb size={20} /> :
                                            skill === "System Design Basics" ? <Layout size={20} /> :
                                                <Grid size={20} />}
                                    </div>
                                )}
                                <span className="font-semibold tracking-tight">{skill}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
