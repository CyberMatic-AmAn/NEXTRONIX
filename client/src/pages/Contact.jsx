import { motion } from "framer-motion";
import { Link } from "wouter";
import FloatingParticles from "../components/FloatingParticles";

const Contact = () => {
  const FloatingParticle = ({ delay = 0 }) => (
    <motion.div
      className="absolute w-2 h-2 bg-neon-blue rounded-full opacity-30"
      animate={{
        y: [-20, -100],
        x: [0, Math.random() * 100 - 50],
        opacity: [0.3, 0, 0.3]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0
      }}
    />
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Floating Particles Background */}
      {[...Array(20)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.5} />
      ))}

      <motion.h1
        className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-neon-blue"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get In Touch
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Ready to join the future of robotics? Get in touch with us!
      </motion.p>

      <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contact Information */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gray-800/50 rounded-xl p-8 border border-neon-blue/20">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
              Contact Information
            </h2>

            <div className="space-y-6">
              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-envelope text-neon-blue text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <a
                    href="mailto:contact@nextronix.club"
                    className="text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    president_nextronix_ppts@csvtu.ac.in
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-neon-blue text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-300">
                    University Campus, Chhattisgarh Swami Vivekanand Technical University , Bhilai , Chhattisgarh , INDIA
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
              >
                <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                  <i className="fas fa-clock text-neon-blue text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Meeting Hours</h3>
                  <p className="text-gray-300">Monday 2:00 PM - 3:00 PM</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="bg-gray-800/50 rounded-xl p-8 border border-neon-blue/20">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
              Follow Us
            </h2>
            <div className="flex space-x-6">
              <motion.a
                href="https://www.instagram.com/nextronix.utd/"
                className="w-16 h-16 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-instagram text-2xl"></i>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/nextronix-utd"
                className="w-16 h-16 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </motion.a>
              <motion.a
                href=" https://github.com/Nextronix-Club"
                className="w-16 h-16 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-github text-2xl"></i>
              </motion.a>
              <motion.a
                href=" https://www.youtube.com/@NEXTRONIX-s6x"
                className="w-16 h-16 bg-neon-blue/20 rounded-xl flex items-center justify-center text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fab fa-youtube text-2xl"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Alternative */}
        <motion.div
          className="bg-gray-800/50 rounded-xl p-8 border border-neon-blue/20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-orbitron font-bold mb-6 text-neon-blue">
            Quick Contact
          </h2>

          <div className="space-y-6">
            <motion.a
              href="mailto:maya.patel@nextronix.com?subject=Interest%20in%20NEXTRONIX&body=Hi%20NEXTRONIX%20team%2C%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20robotics%20club.%0A%0ABest%20regards"
              className="w-full bg-neon-blue text-black font-semibold py-3 rounded-lg hover:bg-neon-blue/80 transition-colors flex items-center justify-center"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px #00BFFF" }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-envelope mr-2"></i>
              Send us an Email
            </motion.a>

            <motion.a
              href="#"
              className="w-full border-2 border-neon-blue text-neon-blue py-3 rounded-lg hover:bg-neon-blue hover:text-black transition-colors flex items-center justify-center font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fas fa-calendar mr-2"></i>
              Schedule a Meeting
            </motion.a>

            <motion.a
              href="#"
              className="w-full border-2 border-neon-blue text-neon-blue py-3 rounded-lg hover:bg-neon-blue hover:text-black transition-colors flex items-center justify-center font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <i className="fab fa-youtube mr-2"></i>
              Subscribe to our YouTube channel
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.section
        className="mt-20 text-center relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-orbitron font-bold mb-6 text-white">
          Ready to Shape the Future?
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          Join NEXTRONIX and be part of the next generation of robotics
          innovators. Whether you're a beginner or an expert, there's a place
          for you in our community.
        </p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-neon-blue to-blue-500 text-black font-semibold rounded-lg hover:from-neon-blue/80 hover:to-blue-500/80 transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00BFFF" }}
          whileTap={{ scale: 0.95 }}
        >
          Join NEXTRONIX Today
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Contact;
