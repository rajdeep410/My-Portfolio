import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-scroll";
import { personalInfo } from "../data/portfolioData";
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  staggerItem,
  scaleIn,
} from "../data/animationVariants";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom section-padding relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Left Content - Text Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left lg:flex-1"
          >
            {/* Greeting */}
            <motion.div
              variants={staggerItem}
              className="flex items-center justify-center lg:justify-start gap-2 mb-6"
            >
              <Sparkles className="text-accent-purple" size={20} />
              <span className="text-accent-cyan font-medium">
                Welcome to my portfolio
              </span>
              <Sparkles className="text-accent-purple" size={20} />
            </motion.div>

            {/* Name with gradient */}
            <motion.h1
              variants={fadeInDown}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            {/* Title with typing effect */}
            <motion.h2
              variants={fadeInUp}
              className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Intro */}
            <motion.p
              variants={fadeInUp}
              className="text-md md:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              {personalInfo.intro}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <motion.a
                href="resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
              >
                <Download size={20} />
                Download Resume
              </motion.a>

              <Link to="projects" smooth={true} duration={500} offset={-80}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2 w-full sm:w-auto justify-center cursor-pointer"
                >
                  View Projects
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Photo */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-accent-purple/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border-2 border-dashed border-accent-blue/20"
              />

              {/* Main Image Container */}
              <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-br from-accent-purple via-accent-blue to-accent-cyan shadow-2xl shadow-accent-purple/30 overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-950 flex items-center justify-center relative">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 glass px-4 py-2 rounded-lg border border-accent-purple/20 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent-purple glow-purple" />
                <span className="text-xs font-semibold text-white">
                  MERN Stack
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-lg border border-accent-blue/20 flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-accent-blue glow-blue" />
                <span className="text-xs font-semibold text-white">
                  Full Stack
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="mt-20 flex justify-center lg:justify-center"
        >
          <div className="w-6 h-10 border-2 border-accent-purple rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-accent-purple rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
