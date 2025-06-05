import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { teamData } from "../data/teamData.js";
import "./Team.css";

function TeamMemberCard({ member, index, isVisible, size = "medium" }) {
  const imageSize = {
    large: "w-24 h-24",
    medium: "w-20 h-20",
    small: "w-16 h-16",
  };

  const cardPadding = {
    large: "p-6",
    medium: "p-4",
    small: "p-3",
  };

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay:0 }}
      whileHover={{ scale: 1.05 }}
      className={`bg-deep-black/50 rounded-xl transition-all duration-300 border border-neutral-50 hover:border-white ${cardPadding[size]}`}
    >
      
      <img
        src={member.image}
        alt={member.name}
        className={`${imageSize[size]} rounded-full mx-auto mb-4 object-cover border border-cyber-cyan/30`}
      />
      <h4 className={`font-orbitron font-bold text-center text-white mb-1 ${size === "small" ? "text-sm" : "text-lg"}`}>
        {member.name}
      </h4>
      <p className={`text-cyber-cyan text-center mb-3 ${size === "small" ? "text-xs" : "text-sm"}`}>
        {member.position}
      </p>
      {member.email && (
        <p className={`text-white/80 text-center mb-4 ${size === "small" ? "text-xs" : "text-sm"}`}>
          <a href={`mailto:${member.email}`} className="hover:text-vivid-magenta transition-colors">
            {member.email}
          </a>
        </p>
      )}
      <div className="flex justify-center space-x-4">
        {member.linkedin && (
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className={`text-cyber-cyan hover:text-vivid-magenta transition-colors duration-300 ${size === "small" ? "text-sm" : ""}`}
            aria-label={`Visit ${member.name}'s LinkedIn profile`}
          >
            <FaLinkedin />
          </motion.a>
        )}
        {member.github && (
          <motion.a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className={`text-cyber-cyan hover:text-vivid-magenta transition-colors duration-300 ${size === "small" ? "text-sm" : ""}`}
            aria-label={`Visit ${member.name}'s GitHub profile`}
          >
            <FaGithub />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export default function Team() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section id="team" className="py-20 px-4 bg-deep-black min-h-screen font-roboto" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-white shadow-text"
        >
          Our Team
        </motion.h2>
        
        {/* Mentors Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-orbitron text-2xl font-bold mb-8 text-white"
          >
            Mentors
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.mentors.map((mentor, index) => (
              <TeamMemberCard
                key={mentor.id}
                member={mentor}
                index={index}
                isVisible={isVisible}
                size="large"
              />
            ))}
          </div>
        </div>

        {/* Team Leaders Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-orbitron text-2xl font-bold mb-8 text-white"
          >
            Team Leaders
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.leaders.map((leader, index) => (
              <TeamMemberCard
                key={leader.id}
                member={leader}
                index={index}
                isVisible={isVisible}
                size="large"
              />
            ))}
          </div>
        </div>

        {/* P.R and Outreach Team Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-orbitron text-2xl font-bold mb-8 text-white"
          >
            P.R and Outreach Team
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.outreach.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
                isVisible={isVisible}
                size="small"
              />
            ))}
          </div>
        </div>

        {/* Technical Team Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-orbitron text-2xl font-bold mb-8 text-white"
          >
            Technical Team
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamData.technical.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
                isVisible={isVisible}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}