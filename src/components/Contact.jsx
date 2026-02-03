import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from "../data/animationVariants";
import emailjs from "@emailjs/browser";

const ContactCard = ({ icon: Icon, title, value, href }) => {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      variants={staggerItem}
      whileHover={{ scale: 1.02, x: 10 }}
      className="card group cursor-pointer block"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-white/5 group-hover:bg-gradient-to-br group-hover:from-accent-purple/20 group-hover:to-accent-blue/20 transition-all duration-300">
          <Icon className="text-accent-cyan" size={24} />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-400 mb-0.5">{title}</p>
          <p className="text-white font-medium group-hover:text-accent-cyan transition-colors duration-300 break-all">
            {value}
          </p>
        </div>
      </div>
    </motion.a>
  );
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("x8nTmiBXORoqjI3gv");
  }, []);
  // press enter to send the message

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      await emailjs.send(
        "service_rajdeep410",
        "template_1judvli",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
      );
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-950/50 overflow-hidden"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-4"
            >
              <Mail className="text-accent-purple" size={32} />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Get In Touch
              </h2>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="w-24 h-1 bg-gradient-to-r from-accent-purple via-accent-blue to-accent-cyan mx-auto rounded-full"
            />
            <motion.p
              variants={fadeInUp}
              className="text-gray-400 mt-4 max-w-2xl mx-auto"
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <ContactCard
                icon={Mail}
                title="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactCard
                icon={Phone}
                title="Phone"
                value={personalInfo.phone}
                href={`tel:${personalInfo.phone}`}
              />
              <ContactCard
                icon={MapPin}
                title="Location"
                value={personalInfo.location}
                href="#"
              />
              <ContactCard
                icon={Linkedin}
                title="LinkedIn"
                value="Connect with me"
                href={personalInfo.linkedin}
              />
              <ContactCard
                icon={Github}
                title="GitHub"
                value="Check out my code"
                href={personalInfo.github}
              />
            </div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/50 text-white transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/50 text-white transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        e.target.form.requestSubmit();
                      }
                    }}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-accent-purple focus:outline-none focus:ring-2 focus:ring-accent-purple/50 text-white transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Sending..."
                    : submitted
                      ? "Message Sent!"
                      : "Send Message"}
                  <Send size={18} />
                </motion.button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-cyan text-center text-sm"
                  >
                    Thank you! I'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
