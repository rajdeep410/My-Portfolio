import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { User } from 'lucide-react';
import { about } from '../data/portfolioData';
import { fadeInUp, slideInLeft, scaleIn } from '../data/animationVariants';
import profileImg from '../assets/profile.jpg';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-padding bg-gray-950/50">
            <div className="container-custom">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInUp}
                >
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <motion.div
                            variants={slideInLeft}
                            className="inline-flex items-center gap-3 mb-4"
                        >
                            <User className="text-accent-purple" size={32} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="w-24 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 max-w-6xl mx-auto">
                        {/* Profile Image Column */}
                        <motion.div
                            variants={scaleIn}
                            className="w-full max-w-sm lg:w-1/3"
                        >
                            <div className="card p-2 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent-purple via-accent-blue to-accent-cyan opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
                                <div className="relative z-10 rounded-xl overflow-hidden border border-white/10">
                                    <img
                                        src={profileImg}
                                        alt="Rajdeep"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Content Column */}
                        <motion.div
                            variants={fadeInUp}
                            className="lg:w-2/3"
                        >
                            <div className="card card-hover relative overflow-hidden group">
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl" />

                                <div className="relative z-10">
                                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                                        {about.summary}
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="glass p-4 rounded-lg border border-white/5">
                                            <p className="text-accent-cyan font-bold text-xl">4+</p>
                                            <p className="text-gray-400 text-sm">Major Projects</p>
                                        </div>
                                        <div className="glass p-4 rounded-lg border border-white/5">
                                            <p className="text-accent-purple font-bold text-xl">Intern</p>
                                            <p className="text-gray-400 text-sm">MERN Stack</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
