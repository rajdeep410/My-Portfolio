import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { fadeInUp, slideInLeft, slideInRight } from '../data/animationVariants';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="experience" className="section-padding bg-gray-950/50">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-4">
                            <Briefcase className="text-accent-purple" size={32} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="w-24 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    {/* Timeline */}
                    <div className="max-w-4xl mx-auto">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                                className="relative pl-8 md:pl-12 pb-12 last:pb-0"
                            >
                                {/* Timeline Line */}
                                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan" />

                                {/* Timeline Dot */}
                                <motion.div
                                    whileHover={{ scale: 1.5 }}
                                    className="absolute left-0 top-2 w-4 h-4 -ml-[7px] rounded-full bg-accent-purple shadow-lg shadow-accent-purple/50"
                                />

                                {/* Experience Card */}
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 10 }}
                                    className="card card-hover"
                                >
                                    {/* Header */}
                                    <div className="mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-4 text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={16} className="text-accent-cyan" />
                                                <span className="font-semibold text-accent-cyan">{exp.company}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-accent-blue" />
                                                <span>{exp.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={16} className="text-accent-purple" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-3">
                                        {exp.responsibilities.map((responsibility, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                                transition={{ delay: idx * 0.1 }}
                                                className="flex items-start gap-3 text-gray-300"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 flex-shrink-0" />
                                                <span>{responsibility}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
