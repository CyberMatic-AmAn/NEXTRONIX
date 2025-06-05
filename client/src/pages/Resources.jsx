import { motion } from "framer-motion";

const Resources = () => {
  const resources = [
    {
      title: "Arduino Programming Fundamentals",
      description:
        "Complete guide to Arduino programming for robotics applications, from basic sensors to advanced motor control.",
      category: "Programming",
      level: "Beginner",
      link: "https://www.arduino.cc/",
      icon: "fas fa-code"
    },
    {
      title: "Computer Vision with OpenCV",
      description:
        "Learn computer vision techniques for robotics using OpenCV and Python for object detection and tracking.",
      category: "AI/ML",
      level: "Intermediate",
      link: "https://opencv.org/",
      icon: "fas fa-eye"
    },
    {
      title: "ROS (Robot Operating System)",
      description:
        "Master the Robot Operating System framework for building complex robotic applications and simulations.",
      category: "Software",
      level: "Advanced",
      link: "https://www.ros.org/",
      icon: "fas fa-robot"
    },
    {
      title: "Custom PCB Design and Fabrication",
      description:
        "Design and print custom PCB's using JLCPLB for rapid prototyping.",
      category: "Hardware",
      level: "Beginner",
      link: "https://jlcpcb.com/",
      icon: "fas fa-cube"
    },
    {
      title: "Machine Learning for Robotics",
      description:
        "Apply machine learning algorithms to robotics problems including navigation, control, and decision making.",
      category: "AI/ML",
      level: "Advanced",
      link: "https://youtu.be/LvC68w9JS4Y?feature=shared",
      icon: "fas fa-brain"
    },
    {
      title: "PCB Design Basics",
      description:
        "Learn circuit design and PCB layout for custom robotics electronics using KiCad and Altium Designer.",
      category: "Hardware",
      level: "Intermediate",
      link: "https://www.youtube.com/playlist?list=PLkEZIY-NgCD_tuHk_gR0RWVecNoOZ157G",
      icon: "fas fa-microchip"
    }
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case "Beginner":
        return "text-green-400 bg-green-400/20";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/20";
      case "Advanced":
        return "text-red-400 bg-red-400/20";
      default:
        return "text-gray-400 bg-gray-400/20";
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      Programming: "text-blue-400 bg-blue-400/20",
      "AI/ML": "text-purple-400 bg-purple-400/20",
      Software: "text-green-400 bg-green-400/20",
      Hardware: "text-orange-400 bg-orange-400/20"
    };
    return colors[category] || "text-gray-400 bg-gray-400/20";
  };

  const ResourceCard = ({ resource, index }) => (
    <motion.div
      className="card-hover bg-gray-800/50 rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center mr-4">
          <i className={`${resource.icon} text-neon-blue text-xl`}></i>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-orbitron font-semibold mb-2 text-white">
            {resource.title}
          </h3>
          <div className="flex space-x-2">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                resource.category
              )}`}
            >
              {resource.category}
            </span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(
                resource.level
              )}`}
            >
              {resource.level}
            </span>
          </div>
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {resource.description}
      </p>

      <motion.a
        href={resource.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/80 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Access Resource
        <i className="fas fa-external-link-alt ml-2"></i>
      </motion.a>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-neon-blue"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Learning Resources
      </motion.h1>

      <motion.p
        className="text-xl text-gray-300 text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Curated materials to advance your robotics knowledge and skills
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <ResourceCard key={index} resource={resource} index={index} />
        ))}
      </div>

      {/* Additional Resources Section */}
      <motion.section
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-orbitron font-bold mb-8 text-neon-blue">
          Need More Resources?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Join our community to access exclusive workshops, mentorship programs,
          and collaborative projects.
        </p>
        <motion.button
          className="px-8 py-4 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/80 transition-colors"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00BFFF" }}
          whileTap={{ scale: 0.95 }}
        >
          Join NEXTRONIX Community
        </motion.button>
      </motion.section>
    </div>
  );
};

export default Resources;
