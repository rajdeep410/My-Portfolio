import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text"
            >
              rajdeep.Dev
            </motion.h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                onSetActive={() => setActiveSection(link.to)}
                className="cursor-pointer"
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    activeSection === link.to
                      ? "gradient-text"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 glass rounded-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    onSetActive={() => setActiveSection(link.to)}
                    className="cursor-pointer"
                  >
                    <motion.span
                      whileHover={{ x: 10 }}
                      className={`block py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                        activeSection === link.to
                          ? "gradient-text bg-white/10"
                          : "text-gray-300 hover:bg-white/5"
                      }`}
                    >
                      {link.name}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
