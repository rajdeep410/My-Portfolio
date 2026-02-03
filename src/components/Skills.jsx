import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import * as Icons from 'lucide-react';
import { skills } from '../data/portfolioData';
import { fadeInUp, staggerContainer, staggerItem } from '../data/animationVariants';

const SkillCard = ({ skill, index }) => {
    const IconComponent = Icons[skill.icon] || Icons.Code;

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.05, y: -5 }}
            className="card card-hover group"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 group-hover:from-accent-purple/30 group-hover:to-accent-blue/30 transition-all">
                    <IconComponent className="text-accent-cyan" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:gradient-text transition-all">
                    {skill.name}
                </h3>
            </div>
        </motion.div>
    );
};

const SkillCategory = ({ title, skills, icon: Icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="mb-12"
        >
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                <Icon className="text-accent-purple" size={28} />
                <h3 className="text-2xl font-bold text-white">{title}</h3>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} skill={skill} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-padding">
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
                            <Icons.Zap className="text-accent-purple" size={32} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Skills & Expertise</h2>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="w-24 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    {/* Skill Categories */}
                    <SkillCategory title="Frontend Development" skills={skills.frontend} icon={Icons.Layout} />
                    <SkillCategory title="Backend Development" skills={skills.backend} icon={Icons.Server} />
                    <SkillCategory title="Database & Tools" skills={skills.database} icon={Icons.Database} />
                    <SkillCategory title="Soft Skills" skills={skills.soft} icon={Icons.Heart} />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
