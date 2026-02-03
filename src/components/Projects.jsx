import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FolderGit2, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { fadeInUp, staggerContainer, staggerItem } from '../data/animationVariants';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ y: -10 }}
            className="card card-hover group relative overflow-hidden"
        >
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-accent-blue/10 to-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                {/* Project Icon */}
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 group-hover:from-accent-purple/30 group-hover:to-accent-blue/30 transition-all">
                        <FolderGit2 className="text-accent-cyan" size={28} />
                    </div>
                    <div className="flex gap-3">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="text-gray-400 hover:text-accent-purple transition-colors"
                        >
                            <Github size={24} />
                        </motion.a>
                        {project.liveDemo && (
                            <motion.a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: -5 }}
                                className="text-gray-400 hover:text-accent-cyan transition-colors"
                            >
                                <ExternalLink size={24} />
                            </motion.a>
                        )}
                    </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:gradient-text transition-all">
                    {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-xs font-medium rounded-full glass text-accent-cyan border border-accent-cyan/30"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="section-padding">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={staggerContainer}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-4">
                            <FolderGit2 className="text-accent-purple" size={32} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Featured Projects</h2>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="w-24 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
