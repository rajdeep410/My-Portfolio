import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { socialLinks, personalInfo } from '../data/portfolioData';
import { fadeInUp } from '../data/animationVariants';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-padding bg-gray-950/80 border-t border-white/10">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-center"
                >
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-6 mb-8">
                        <motion.a
                            href={personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="p-3 rounded-lg glass glass-hover"
                        >
                            <Github className="text-accent-purple" size={24} />
                        </motion.a>
                        <motion.a
                            href={personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, rotate: -5 }}
                            className="p-3 rounded-lg glass glass-hover"
                        >
                            <Linkedin className="text-accent-blue" size={24} />
                        </motion.a>
                        <motion.a
                            href={`mailto:${personalInfo.email}`}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            className="p-3 rounded-lg glass glass-hover"
                        >
                            <Mail className="text-accent-cyan" size={24} />
                        </motion.a>
                    </div>

                    {/* Copyright */}
                    <p className="text-gray-400 mb-2">
                        © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>

                    {/* Made with love */}
                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                        Made with <Heart className="text-accent-purple fill-accent-purple" size={16} /> using React & Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
