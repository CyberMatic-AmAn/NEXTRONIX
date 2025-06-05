// import { motion } from "framer-motion";
// import { Link } from "wouter";
// import TypewriterEffect from "../components/TypewriterEffect";
// // import Robot3DModel from "../components/Robot3DModel";
// import FloatingParticles from "../components/FloatingParticles";

// const Home = () => {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
//         <FloatingParticles />

//         {/* Desktop Layout */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Half - Text Content */}
//           <motion.div
//             className="text-center lg:text-left space-y-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl text-white"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               NEXTRONIX
//             </motion.h1>

//             <div className="text-2xl md:text-3xl lg:text-4xl text-neon-blue font-medium h-16 flex items-center justify-center lg:justify-start">
//               <TypewriterEffect text="New Era of Mechatronix" />
//             </div>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-8"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               <motion.button
//                 onClick={() => scrollToSection("about")}
//                 className="glow-button px-8 py-4 rounded-full text-black font-semibold text-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore More
//               </motion.button>
//               <Link href="/contact">
//                 <motion.div
//                   className="border-2 border-neon-blue text-neon-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-neon-blue hover:text-black transition-all duration-300 text-center cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Contact Us
//                 </motion.div>
//               </Link>
//             </motion.div>
//           </motion.div>

//           {/* Right Half - 3D Model Display */}
//           <motion.div
//             className="flex justify-center lg:justify-end"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <div className="w-96 h-96">
//               {/* <Robot3DModel /> */}
//             </div>
//           </motion.div>
//         </div>

//         {/* Mobile/Tablet Layout - Robot on top, text below */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:hidden flex flex-col items-center space-y-8">
//           {/* 3D Model Display - Top */}
//           <motion.div
//             className="flex justify-center w-full"
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <div className="w-80 h-80 sm:w-96 sm:h-96">
//               {/* <Robot3DModel /> */}
//             </div>
//           </motion.div>

//           {/* Text Content - Bottom */}
//           <motion.div
//             className="text-center space-y-6 w-full"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <motion.h1
//               className="font-orbitron font-black text-4xl sm:text-6xl md:text-7xl text-white"
//               initial={{ opacity: 0, y: -30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.6 }}
//             >
//               NEXTRONIX
//             </motion.h1>

//             <div className="text-xl sm:text-2xl md:text-3xl text-neon-blue font-medium h-12 sm:h-16 flex items-center justify-center">
//               <TypewriterEffect text="New Era of Mechatronix" />
//             </div>

//             <motion.div
//               className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-6"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.8 }}
//             >
//               <motion.button
//                 onClick={() => scrollToSection("about")}
//                 className="glow-button px-6 sm:px-8 py-3 sm:py-4 rounded-full text-black font-semibold text-base sm:text-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore More
//               </motion.button>
//               <Link href="/contact">
//                 <motion.div
//                   className="border-2 border-neon-blue text-neon-blue px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-neon-blue hover:text-black transition-all duration-300 text-center cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Contact Us
//                 </motion.div>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Featured Project */}
//       <motion.section
//         className="py-20 bg-gray-900/50"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-orbitron font-bold text-center mb-16 text-neon-blue">
//             Featured Project
//           </h2>

//           <div className="max-w-2xl mx-auto">
//             <motion.div
//               className="card-hover bg-gray-800/50 rounded-2xl border border-neon-blue/30 p-8"
//               whileHover={{ scale: 1.02 }}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
//                 alt="Advanced robotics project"
//                 className="w-full h-64 object-cover rounded-xl mb-6"
//               />
//               <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
//                 Autonomous Navigation Robot
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed">
//                 Our latest project combines AI-powered navigation with advanced
//                 sensor fusion to create a fully autonomous robot capable of
//                 complex environment mapping and obstacle avoidance.
//               </p>
//               <Link href="/achievements">
//                 <motion.div
//                   className="inline-block glow-button px-6 py-3 rounded-full text-black font-semibold cursor-pointer"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   View Details
//                 </motion.div>
//               </Link>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* About Us */}
//       <motion.section
//         id="about"
//         className="py-20"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-orbitron font-bold mb-8 text-neon-blue">
//             About NEXTRONIX
//           </h2>
//           <p className="text-xl text-gray-300 leading-relaxed mb-8">
//             NEXTRONIX is a cutting-edge robotics club dedicated to pushing the
//             boundaries of mechatronic innovation. Our mission is to foster
//             creativity, technical excellence, and collaborative learning in the
//             field of robotics and automation.
//           </p>
//           <p className="text-lg text-gray-400 leading-relaxed mb-12">
//             We believe in hands-on learning, where students can explore advanced
//             concepts in artificial intelligence, mechanical design, and
//             electronic systems. Through our projects and workshops, we're
//             building the next generation of robotics engineers and innovators.
//           </p>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-8">
//             <motion.a
//               href="#"
//               className="text-3xl text-gray-400 hover:text-neon-blue transition-colors duration-300"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//             >
//               <i className="fab fa-instagram"></i>
//             </motion.a>
//             <motion.a
//               href="#"
//               className="text-3xl text-gray-400 hover:text-neon-blue transition-colors duration-300"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//             >
//               <i className="fab fa-linkedin"></i>
//             </motion.a>
//             <motion.a
//               href="#"
//               className="text-3xl text-gray-400 hover:text-neon-blue transition-colors duration-300"
//               whileHover={{ scale: 1.2, rotate: 5 }}
//             >
//               <i className="fab fa-github"></i>
//             </motion.a>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// };

// export default Home;




// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { ChevronDown } from "lucide-react";
// import ParallaxWrapper from "./parallax-wrapper";
// import TrueFocus from "./TrueFocus";
// import TypingAndDeleteText from "./TypingAndDeleteText";
// import CyclingTypingText from "./CyclingTypingText";
// import robo from "./robo.gif"; // Path for public directory
// import "./Home.css";

// export default function Home() {
//   const handleScrollToSection = (id) => {
//     console.log(`Scrolling to ${id}`); // Debug log
//     const element = document.getElementById(id);
//     if (element) {
//       const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
//       window.scrollTo({
//         top: offsetTop,
//         behavior: "smooth",
//       });
//     } else {
//       console.warn(`Element with ID ${id} not found`); // Debug warning
//     }
//   };

//   const projects = [
//     {
//       title: "AI-Powered Recon Drone",
//       description: "A cutting-edge drone with AI-driven navigation, sensor fusion, and a modular design for advanced missions.",
//       image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&h=400&q=80",
//     },
//     {
//       title: "Modular Robotic Arm",
//       description: "A versatile robotic arm with interchangeable tools and real-time control for industrial automation.",
//       image: "https://images.unsplash.com/photo-1599749340530-f38db28f86d6?auto=format&fit=crop&w=800&h=400&q=80",
//     },
//     {
//       title: "Autonomous Rover",
//       description: "A high-precision rover with terrain-adaptive wheels and onboard AI for exploration missions.",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=400&q=80",
//     },
//   ];

//   const socialLinks = [
//     { platform: "instagram", url: "https://instagram.com/nextronix", label: "Instagram" },
//     { platform: "linkedin", url: "https://linkedin.com/company/nextronix", label: "LinkedIn" },
//     { platform: "github", url: "https://github.com/nextronix", label: "GitHub" },
//   ];

//   const roboticsFacts = [
//     " ",
//     "Hi",
//     "Do you know the fact",
//     "Robotics combines AI, engineering, and innovation.",
//     "Robots can perform tasks with precision.",
//     "Mechatronics powers autonomous systems."
//   ];

//   return (
//     <div className="min-h-screen bg-deep-black text-white font-roboto bg-[url('/patterns/circuit-tile.png')] bg-repeat bg-[length:200px_200px] opacity-90">
//       <section className="relative min-h-screen pt-20 flex items-center overflow-hidden" id="hero">
//         <div className="absolute inset-0 circuit-pattern opacity-20"></div>
//         <div className="container px-4 py-16 mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="flex justify-center">
//                 <TrueFocus
//                   sentence="NEXTRONIX"
//                   manualMode={false}
//                   blurAmount={3}
//                   borderColor="#00A6FB"
//                   glowColor="rgba(0, 166, 251, 0.6)"
//                   animationDuration={0.5}
//                   pauseBetweenAnimations={2}
//                 />
//               </div>
//               <div className="flex justify-center">
//                 <div className="min-h-[60px] w-full flex justify-center items-center">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 2.5, duration: 0.6 }}
//                     className="mt-0 mb-4 w-full text-center"
//                   >
//                     <TypingAndDeleteText
//                       text="NEW ERA OF MECHTRONIX"
//                       className="text-cyber-cyan text-base md:text-lg font-jetbrains"
//                     />
//                   </motion.div>
//                 </div>
//               </div>
//               <div className="flex justify-center">
//                 <motion.div
//                   className="flex flex-col sm:flex-row gap-4"
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 3.5, duration: 0.6 }}
//                 >
//                   <Button
//                     size="lg"
//                     className="bg-vivid-magenta text-white font-semibold shadow-glow hover:bg-dark-magenta hover:text-white transition-all duration-300"
//                     onClick={() => {
//                       console.log("Explore Projects clicked");
//                       handleScrollToSection("projects");
//                     }}
//                   >
//                     Explore Projects
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="lg"
//                     className="bg-vivid-magenta text-white font-semibold shadow-glow hover:bg-dark-magenta hover:text-white transition-all duration-300"
//                     onClick={() => {
//                       console.log("About Us clicked");
//                       handleScrollToSection("about");
//                     }}
//                   >
//                     About Us
//                   </Button>
//                 </motion.div>
//               </div>
//             </motion.div>
//             <ParallaxWrapper speed={0.03}>
//               <motion.div
//                 className="relative w-full max-w-[400px] mx-auto aspect-square"
//                 initial={{ opacity: 0, scale: 0.95 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.7, delay: 0.5 }}
//               >
//                 <img
//                   src={robo}
//                   alt="NEXTRONIX Robotics Animation"
//                   className="w-full h-full object-cover rounded-xl shadow-img"
//                   loading="lazy"
//                 />
//                 <motion.div
//                   className="absolute -bottom-4 -right-4 bg-deep-black p-4 rounded-md border border-electric-blue circuit-overlay min-w-[200px] min-h-[40px] flex items-center"
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: 1 }}
//                 >
//                   <CyclingTypingText
//                     texts={roboticsFacts}
//                     className="font-jetbrains text-sm text-cyber-cyan"
//                   />
//                 </motion.div>
//               </motion.div>
//             </ParallaxWrapper>
//           </div>
//           <motion.div
//             className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5, duration: 0.5 }}
//           >
//             <button
//               onClick={() => {
//                 console.log("ChevronDown clicked");
//                 handleScrollToSection("projects");
//               }}
//               className="inline-block animate-bounce text-cyber-cyan hover:text-electric-blue"
//               aria-label="Scroll down"
//             >
//               <ChevronDown className="h-8 w-8" />
//             </button>
//           </motion.div>
//         </div>
//       </section>
//       <motion.section
//         className="py-16 bg-deep-black"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         id="projects"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-center mb-12 text-electric-blue tracking-tight shadow-text">
//             Featured Innovations
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//             {projects.map((project, index) => (
//               <div key={index} className="relative">
//                 <div className="absolute inset-0 circuit-pattern opacity-10 rounded-xl"></div>
//                 <motion.div
//                   className="relative bg-deep-black/50 rounded-xl border border-cyber-cyan p-6 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,245,0.3)] transition-shadow duration-300"
//                   whileHover={{ scale: 1.02 }}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover rounded-lg mb-6"
//                     loading="lazy"
//                   />
//                   <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">
//                     {project.title}
//                   </h3>
//                   <p className="text-white/80 text-sm mb-6 leading-relaxed">
//                     {project.description}
//                   </p>
//                   <Button
//                     className="bg-vivid-magenta text-white font-semibold shadow-glow hover:bg-dark-magenta hover:text-white transition-all duration-300"
//                     onClick={() => {
//                       console.log(`${project.title} View Details clicked`);
//                       // TODO: Consider navigating to a specific project page instead of scrolling to 'projects'
//                       handleScrollToSection("projects");
//                     }}
//                   >
//                     View Details
//                   </Button>
//                 </motion.div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </motion.section>
//       <motion.section
//         className="py-16 bg-deep-black"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         id="about"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-8 text-electric-blue tracking-tight shadow-text">
//             About NEXTRONIX
//           </h2>
//           <div className="relative max-w-2xl mx-auto">
//             <div className="absolute inset-0 circuit-pattern opacity-10 rounded-xl"></div>
//             <div className="relative bg-deep-black/50 rounded-xl border border-cyber-cyan p-6 sm:p-8">
//               <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
//                 NEXTRONIX is a robotics club focused on advancing mechatronics through AI, engineering excellence, and collaborative innovation.
//               </p>
//               <div className="flex justify-center gap-6">
//                 {socialLinks.map(({ platform, url, label }) => (
//                   <motion.a
//                     key={platform}
//                     href={url}
//                     className="text-lg text-white/80 hover:text-cyber-cyan transition-colors duration-300"
//                     whileHover={{ scale: 1.2, rotate: 5 }}
//                     whileTap={{ scale: 0.9 }}
//                     aria-label={`Visit NEXTRONIX on ${label}`}
//                   >
//                     <i className={`fab fa-${platform}`}></i>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.section>
//     </div>
//   );
// }


import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParallaxWrapper from "./parallax-wrapper";
import TrueFocus from "./TrueFocus";
import TypingAndDeleteText from "./TypingAndDeleteText";
import CyclingTypingText from "./CyclingTypingText";
import project from "./Achievements"; 
import Squares from "./Squares";
import robo from "./robo.gif";
import "./Home.css";
import hfr from "@assets/Projects/Human-following-robot.jpg";
import ieri from "@assets/Projects/IEri-Robot.jpg";
import gcra from "@assets/Projects/Gesture-controlled-Robot-arm.jpg";

export default function Home() {
  const handleScrollToSection = (id) => {
    console.log(`Scrolling to ${id}`);
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.warn(`Element with ID ${id} not found`);
    }
  };

  const projects = [
    {
      title: "Human Following Robot",
      description: "A human following robot with Self-driven navigation, sensor fusion, with modular design.",
      image: hfr,
    },
    {
      title: "Human Friendly AI-Robot",
      description: "A user friendly robot with AI integration for high quality conversation and chat.",
      image: ieri,
    },
    {
      title: "Modular Robotic Arm",
      description: "A versatile robotic arm with interchangeable tools and gesture control for industrial automation.",
      image: gcra,
    },
  ];

  const socialLinks = [
    { platform: "instagram", url: "https://www.instagram.com/nextronix.utd/", label: "Instagram" },
    { platform: "linkedin", url: "https://www.linkedin.com/company/nextronix-utd", label: "LinkedIn" },
    { platform: "github", url: " https://github.com/Nextronix-Club", label: "GitHub" },
  ];

  const roboticsFacts = [
    "Hi",
    "We are NEXTRONIX",
    "Do you know the fact",
    "Robotics is the technology of future.",
    "Robots can perform tasks with precision.",
    "Mechatronics powers autonomous systems.",
  ];

  return (
    <div className="min-h-screen bg-deep-100 text-white font-roboto relative">
      <div className="absolute inset-0 z-0 opacity-90">
        <Squares
          direction="diagonal"
          speed={0.7}
          borderColor="#999"
          squareSize={100}
          hoverFillColor="#222"
        />
      </div>
      <section className="relative min-h-screen pt-20 flex items-center overflow-hidden" id="hero">
        <div className="container px-4 py-16 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex justify-center">
                <TrueFocus
                  sentence="NEXTRONIX"
                  manualMode={false}
                  blurAmount={3}
                  borderColor="#ffffff"
                  glowColor="rgba(0, 0, 0, 0)" // Changed to transparent to remove glow effect
                  animationDuration={0.5}
                  pauseBetweenAnimations={2}
                  textColor="#ffffff"
                />
              </div>
              <div className="flex justify-center">
                <div className="min-h-[60px] w-full flex justify-center items-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                    className="mt-0 mb-4 w-full text-center"
                  >
                    <TypingAndDeleteText
                      text="NEXT ERA OF MECHATRONIX"
                      className="text-cyan text-base md:text-lg font-jetbrains"
                    />
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-center">
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 0.6 }}
                >
                  <Button 
                    variant="secondary"
                    size="lg" 
                    onClick={() => handleScrollToSection('projects')}
                  >
                    Explore Projects
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    onClick={() => handleScrollToSection('about')}
                  >
                    About us
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <ParallaxWrapper speed={0.03}>
              <motion.div
                className="relative w-full max-w-[400px] mx-auto aspect-square border-2 border-secondary bg-slate-900 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <img
                  src={robo}
                  alt="NEXTRONIX Robotics Animation"
                  className="w-full h-full object-cover rounded-xl shadow-img"
                  loading="lazy"
                />
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-slate-900 p-4 rounded-md border border-electric-blue min-w-[200px] min-h-[40px] flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <CyclingTypingText
                    texts={roboticsFacts}
                    className="font-jetbrains text-sm text-white-cyan"
                  />
                </motion.div>
              </motion.div>
            </ParallaxWrapper>
          </div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <button
              onClick={() => {
                console.log("ChevronDown clicked");
                handleScrollToSection("projects");
              }}
              className="inline-block animate-bounce text-cyber-cyan hover:text-electric-blue"
              aria-label="Scroll down"
            >
              <ChevronDown className="h-8 w-8" />
            </button>
          </motion.div>
        </div>
      </section>
      <motion.section
        className="py-16 bg-deep-100 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="projects"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold text-center mb-12 text-white tracking-tight">
            Featured Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="relative">
                <motion.div
                  className="relative bg-black rounded-xl border border-white p-6 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay:  0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover rounded-lg mb-6"
                    loading="lazy"
                  />
                  <h3 className="text-xl font-orbitron font-semibold mb-4 text-white">
                    {project.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    className=" hover:text-white transition-all duration-300"
                    variant = "secondary"
                    onClick={() => {
                      console.log(`${project.title} View Details clicked`);
                      handleScrollToSection(project);
                    }}
                  >
                    View Details
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
        className="py-16 bg-deep-100 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        id="about"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-orbitron font-bold mb-8 text-white tracking-tight">
            About NEXTRONIX
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="relative bg-black rounded-xl border border-white-black p-6 sm:p-8">
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                <span className="font-semibold">Nextronix</span>, the official Robotics Club of the University Teaching Department at Chhattisgarh Swami Vivekanand Technical University (CSVTU), operates under the esteemed <span className="font-semibold">Programmers' Paradise Technical Society</span>. We are a dynamic community of students committed to advancing robotics, embedded systems, and automation technologies through innovation and collaboration.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                Our mission is to unite passionate students in a hands-on learning environment, empowering them to design, build, and innovate through robotics projects. We foster technical excellence by exploring cutting-edge fields such as the Internet of Things (IoT), Artificial Intelligence (AI), Machine Learning (ML), microcontrollers, and automation.
              </p>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-6">
                At Nextronix, we engage in diverse activities, including designing and prototyping robots, conducting research and development, and organizing workshops, hackathons, and tech talks. We actively participate in national competitions and contribute to open-source projects, promoting knowledge sharing and community growth. Join us to transform ideas into impactful solutions and shape the future of technology.
              </p>
              <div className="flex justify-center gap-6">
                {socialLinks.map(({ platform, url, label }) => (
                  <motion.a
                    key={platform}
                    href={url}
                    className="text-lg text-white/80 hover:text-cyber-cyan transition-colors duration-300"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Visit NEXTRONIX on ${label}`}
                  >
                    <i className={`fab fa-${platform}`}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}