// import { motion } from "framer-motion";
// import { Link } from "wouter";

// const Achievements = () => {
//   const projects = [
//     {
//       title: "Autonomous Navigation Robot",
//       description:
//         "AI-powered robot with advanced LIDAR mapping and obstacle avoidance capabilities using computer vision and machine learning algorithms.",
//       technologies: ["Python", "ROS", "OpenCV", "TensorFlow", "Arduino"],
//       image:
//         "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
//       achievements: "1st Place in National Robotics Competition 2023",
//       github: "https://github.com/nextronix/autonomous-nav"
//     },
//     {
//       title: "Robotic Arm Manipulator",
//       description:
//         "6-DOF robotic arm with computer vision for precise object manipulation and assembly tasks in industrial settings.",
//       technologies: ["C++", "OpenCV", "Arduino", "Servo Control", "3D Printing"],
//       image:
//         "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
//       achievements: "Best Innovation Award - Tech Expo 2023",
//       github: "https://github.com/nextronix/robotic-arm"
//     },
//     {
//       title: "Swarm Intelligence System",
//       description:
//         "Multi-robot system demonstrating swarm behavior and cooperative task execution with distributed problem-solving capabilities.",
//       technologies: [
//         "Python",
//         "ROS",
//         "Raspberry Pi",
//         "WiFi Communication",
//         "Machine Learning"
//       ],
//       image:
//         "https://images.unsplash.com/photo-1518314916381-77a37c2a49ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
//       achievements: "Research Paper Published in IEEE Conference",
//       github: "https://github.com/nextronix/swarm-intelligence"
//     }
//   ];

//   const ProjectCard = ({ project, index }) => (
//     <motion.div
//       className="card-hover bg-gray-800/50 rounded-2xl border border-neon-blue/30 overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       viewport={{ once: true }}
//     >
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
//           {project.title}
//         </h3>
//         <p className="text-gray-300 mb-6 leading-relaxed">
//           {project.description}
//         </p>

//         <div className="mb-6">
//           <h4 className="text-sm font-semibold text-neon-blue mb-3 ">
//             Technologies Used:
//           </h4>
//           <div className="flex flex-wrap gap-2">
//             {project.technologies.map((tech, i) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm font-medium text-orange-400 bg-orange-400/20"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="mb-6">
//           <h4 className="text-neon-blue font-semibold mb-2">Achievement:</h4>
//           <p className="text-green-400 font-medium">{project.achievements}</p>
//         </div>

//         <div className="flex gap-4">
//           <motion.a
//             href={project.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex-1 glow-button px-4 py-2 rounded-full text-black font-semibold text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <i className="fab fa-github mr-2"></i>
//             View Code
//           </motion.a>
//           <motion.button
//             className="flex-1 border-2 border-neon-blue text-neon-blue px-4 py-2 rounded-full font-semibold hover:bg-neon-blue hover:text-black transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Learn More
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <motion.h1
//         className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-neon-blue"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Our Achievements
//       </motion.h1>

//       <motion.p
//         className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         Explore our innovative robotics projects that showcase cutting-edge
//         technology and collaborative engineering excellence.
//       </motion.p>

//       <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard key={index} project={project} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Achievements;


import { motion } from "framer-motion";
import { Link } from "wouter";
import { projectData } from "../data/projectData";



const Projects = () => {
  const getTechColor = (tech) => {
    const colors = {
      Python: "text-blue-400 bg-blue-400/20",
      ROS: "text-green-400 bg-green-400/20",
      ROS2: "text-green-500 bg-green-500/20",
      OpenCV: "text-purple-400 bg-purple-400/20",
      TensorFlow: "text-orange-400 bg-orange-400/20",
      Arduino: "text-teal-400 bg-teal-400/20",
      "C++": "text-pink-400 bg-pink-400/20",
      PyTorch: "text-red-400 bg-red-400/20",
      "Raspberry Pi": "text-red-400 bg-red-400/20",
      Esp32:"text-green-500 bg-green-500/20",
    };
    return colors[tech] || "text-gray-400 bg-gray-400/20";
  };

  const ProjectCard = ({ project, index }) => (
    <motion.div
      className="card-hover bg-gray-800/50 rounded-2xl border border-neon-blue/30 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neon-blue mb-3">
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 glow-button px-4 py-2 rounded-full text-black font-semibold text-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <i className="fab fa-github mr-2"></i>
            View Code
          </motion.a>
          <motion.button
            className="flex-1 border-2 border-neon-blue text-neon-blue px-4 py-2 rounded-full font-semibold hover:bg-neon-blue hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.h1
        className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Projects
      </motion.h1>

      <motion.p
        className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore our innovative robotics projects that showcase cutting-edge
        technology and collaborative engineering excellence.
      </motion.p>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;