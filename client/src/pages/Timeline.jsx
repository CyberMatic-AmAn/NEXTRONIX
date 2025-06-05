// import { motion } from "framer-motion";

// const Timeline = () => {
//   const timelineData = [
//     {
//       year: "2020",
//       title: "Club Foundation",
//       description:
//         "NEXTRONIX was established with a vision to revolutionize robotics education and innovation in our institution."
//     },
//     {
//       year: "2021",
//       title: "First Competition Win",
//       description:
//         "Won the Regional Robotics Championship with our autonomous navigation robot, establishing our reputation."
//     },
//     {
//       year: "2022",
//       title: "AI Integration",
//       description:
//         "Successfully integrated machine learning algorithms into our robotic systems and launched workshop series."
//     },
//     {
//       year: "2023",
//       title: "National Recognition",
//       description:
//         "Achieved 1st place in National Robotics Competition and formed strategic industry partnerships."
//     },
//     {
//       year: "2024",
//       title: "Innovation Lab",
//       description:
//         "Established state-of-the-art robotics lab with advanced manufacturing capabilities and AI research division."
//     }
//   ];

//   const TimelineItem = ({ item, index, isLast }) => (
//     <motion.div
//       className="relative flex items-center mb-8"
//       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       viewport={{ once: true, margin: "-100px" }}
//     >
//       {/* Timeline line */}
//       {!isLast && (
//         <div className="absolute left-1/2 top-6 w-0.5 h-full bg-neon-blue/30 transform -translate-x-1/2"></div>
//       )}

//       {/* Timeline dot */}
//       <motion.div
//         className="absolute left-1/2 top-6 w-4 h-4 bg-neon-blue rounded-full transform -translate-x-1/2 z-10 border-4 border-black"
//         whileHover={{ scale: 1.5, boxShadow: "0 0 20px #00BFFF" }}
//       ></motion.div>

//       {/* Content */}
//       <div
//         className={`w-5/12 ${
//           index % 2 === 0 ? "pr-8 text-right" : "ml-auto pl-8"
//         }`}
//       >
//         <motion.div
//           className="bg-gray-800/50 rounded-xl p-6 border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
//           whileHover={{ scale: 1.02 }}
//         >
//           <div className="text-2xl font-orbitron font-bold text-neon-blue mb-2">
//             {item.year}
//           </div>
//           <h3 className="text-xl font-orbitron font-semibold mb-3 text-white">
//             {item.title}
//           </h3>
//           <p className="text-gray-300 leading-relaxed">{item.description}</p>
//         </motion.div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
//       <motion.h1
//         className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-neon-blue"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Our Journey
//       </motion.h1>

//       <motion.p
//         className="text-xl text-gray-300 text-center mb-16"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         Milestones and achievements that shaped NEXTRONIX
//       </motion.p>

//       <div className="relative">
//         {timelineData.map((item, index) => (
//           <TimelineItem
//             key={index}
//             item={item}
//             index={index}
//             isLast={index === timelineData.length - 1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Timeline;

import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  });

  return (
    <section id="timeline" className="py-20 px-4 bg-dark-grey/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-orbitron text-4xl font-bold text-center mb-16 text-white"
        >
          Our Journey
        </motion.h2>
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-neon-blue"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center"
              >
                {index % 2 === 0 ? (
                  <>
                    <div className="flex-1 pr-8 text-right">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-dark-grey p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
                      >
                        <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-2">
                          {item.year} - {item.title}
                        </h3>
                        <p className="text-light-grey">{item.description}</p>
                      </motion.div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black"></div>
                    <div className="flex-1 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-8"></div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-blue rounded-full border-4 border-black"></div>
                    <div className="flex-1 pl-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-dark-grey p-6 rounded-xl border border-neon-blue/20 hover:border-neon-blue/50 transition-all duration-300"
                      >
                        <h3 className="font-orbitron text-xl font-bold text-neon-blue mb-2">
                          {item.year} - {item.title}
                        </h3>
                        <p className="text-light-grey">{item.description}</p>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}