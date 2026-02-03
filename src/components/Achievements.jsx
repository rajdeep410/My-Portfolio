import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import * as Icons from 'lucide-react';
import { achievements, interests } from '../data/portfolioData';
import { fadeInUp, staggerContainer, staggerItem } from '../data/animationVariants';

const AchievementCard = ({ item, index }) => {
    const IconComponent = Icons[item.icon] || Icons.Star;

    return (
        <motion.div
            variants={staggerItem}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="card card-hover text-center group"
        >
            <div className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-accent-purple/20 to-accent-blue/20 group-hover:from-accent-purple/30 group-hover:to-accent-blue/30 transition-all mb-4">
                    <IconComponent className="text-accent-cyan" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="achievements" className="section-padding">
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
                            <Icons.Star className="text-accent-purple" size={32} />
                            <h2 className="text-4xl md:text-5xl font-bold gradient-text">Achievements & Interests</h2>
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="w-24 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mx-auto rounded-full"
                        />
                    </div>

                    {/* Achievements */}
                    <div className="mb-12">
                        <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Icons.Trophy className="text-accent-purple" size={24} />
                            Achievements
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => (
                                <AchievementCard key={index} item={achievement} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Interests */}
                    <div>
                        <motion.h3 variants={fadeInUp} className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Icons.Heart className="text-accent-cyan" size={24} />
                            Interests
                        </motion.h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {interests.map((interest, index) => (
                                <AchievementCard key={index} item={interest} index={index} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
