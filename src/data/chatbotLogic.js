import knowledge from './knowledge.json';

export const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    // Helper to check for keywords
    const has = (keywords) => keywords.some(k => lowerInput.includes(k));

    // 1. Greetings
    if (lowerInput.match(/\b(hi|hello|hey|greetings|start)\b/)) {
        return `Hello! I'm ${knowledge.name}'s AI assistant. Ask me about his skills, projects, or experience!`;
    }

    // 2. Specialized / Expertise
    if (has(['specialise', 'specialize', 'expert', 'focus', 'strong at', 'good at'])) {
        return 'Shashank specializes in Backend Engineering, AI/ML Systems, and Full-Stack Development. He has strong expertise in Python, JavaScript, React, and building scalable systems.';
    }

    // 3. About / Who / Intro
    if (has(['who are you', 'about', 'intro', 'bio', 'summary', 'tell me'])) {
        return knowledge.about;
    }

    // 4. Skills / Tech Stack
    if (has(['skill', 'stack', 'technology', 'technologies', 'language', 'framework', 'tool'])) {
        return `My technical skills include: ${knowledge.skills.join(', ')}.`;
    }

    // 5. Projects
    if (has(['project', 'work', 'built', 'create', 'portfolio'])) {
        const projectNames = knowledge.projects.map(p => p.title).join(', ');
        return `I have built excellent projects such as: ${projectNames}. Ask me about a specific one!`;
    }

    // 6. Experience / Job / Company
    if (has(['experience', 'company', 'job', 'intern', 'wipro', 'work'])) {
        if (knowledge.experience.length === 0) return "I am currently open to new opportunities.";
        return `I have experience working at: ${knowledge.experience.map(e => e.company).join(', ')}. Specifically: ${knowledge.experience[0].description}`;
    }

    // 7. Education / Degree
    if (has(['education', 'degree', 'college', 'university', 'study', 'student'])) {
        return `I am a Final-year Computer Science student at ${knowledge.education[0].institution} with a CGPA of 9.3.`;
    }

    // 8. Contact
    if (has(['contact', 'email', 'reach', 'social', 'linkedin', 'github', 'connect'])) {
        return `You can reach me at ${knowledge.contact.email}. Connect on LinkedIn: ${knowledge.contact.socials.linkedin}`;
    }

    // Specific Project Queries (Dynamic matching)
    const matchedProject = knowledge.projects.find(p => lowerInput.includes(p.title.toLowerCase()) || lowerInput.includes(p.title.toLowerCase().split(' ')[0]));
    if (matchedProject) {
        return `${matchedProject.title}: ${matchedProject.description} (Tech: ${matchedProject.techStack.join(', ')})`;
    }

    // Default fallback
    return "I can answer about Shashank’s specialized skills, projects, experience, and education. Try asking 'What is he specialized in?' or 'List his projects'.";
};
