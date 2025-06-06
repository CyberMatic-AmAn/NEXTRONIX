
// import { motion } from "framer-motion";
// import { Link } from "wouter";
// import { EventData } from "../data/eventsData";
// import { VideoData } from "../data/videoData";


// const Events = () => {
//   const getTechColor = (tech) => {
//   const colors = [
//     "text-blue-400 bg-blue-400/20",
//     "text-green-400 bg-green-400/20",
//     "text-green-500 bg-green-500/20",
//     "text-purple-400 bg-purple-400/20",
//     "text-orange-400 bg-orange-400/20",
//     "text-teal-400 bg-teal-400/20",
//     "text-pink-400 bg-pink-400/20",
//     "text-red-400 bg-red-400/20",
//     "text-gray-400 bg-gray-400/20"
//   ];
//   // Generate a random index based on the length of the colors array
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// };

//   const EventCard = ({ Event, index }) => (
//     <motion.div
//       className="card-hover bg-gray-800/50 rounded-2xl border border-neon-blue/30 overflow-hidden"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       viewport={{ once: true }}
//     >
//       <img
//         src={Event.image}
//         alt={Event.title}
//         className="w-full h-64 object-cover"
//       />
//       <div className="p-6">
//         <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
//           {Event.title}
//         </h3>
//         <h4 className="text-xl font-orbitron font-light mb-4 text-white">
//             {Event.date}
//         </h4>
//         <p className="text-gray-300 mb-6 leading-relaxed">
//           {Event.description}
//         </p>

//         <div className="mb-6">
//           <h4 className="text-sm font-semibold text-neon-blue mb-3">
//             Topics covered:
//           </h4>
//           <div className="flex flex-wrap gap-2">
//             {Event.topics.map((tech, i) => (
//               <span
//                 key={i}
//                 className={`px-3 py-1 rounded-full text-sm font-medium ${getTechColor(tech)}`}
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>

//         <div className="flex gap-4">
//           <motion.a
//             href={Event.info}
//             className="flex-1 border-2 border-neon-blue text-neon-blue text-center px-4 py-2 rounded-full font-semibold hover:bg-neon-blue hover:text-black transition-all duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Learn More
//           </motion.a>
//         </div>
//       </div>
//     </motion.div>
//   );

//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <motion.h1
//         className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Events Organised
//       </motion.h1>

//       <motion.p
//         className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         Explore our innovative robotics Events that showcase cutting-edge
//         technology and collaborative engineering excellence.
//       </motion.p>

//       <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
//         {EventData.map((Event, index) => (
//           <EventCard key={Event.id} Event={Event} index={index} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Events;

import { motion } from "framer-motion";
import { Link } from "wouter";
import { EventData } from "../data/eventsData";
import { VideoData } from "../data/videoData";

const Events = () => {
  const getTechColor = (tech) => {
    const colors = [
      "text-blue-400 bg-blue-400/20",
      "text-green-400 bg-green-400/20",
      "text-green-500 bg-green-500/20",
      "text-purple-400 bg-purple-400/20",
      "text-orange-400 bg-orange-400/20",
      "text-teal-400 bg-teal-400/20",
      "text-pink-400 bg-pink-400/20",
      "text-red-400 bg-red-400/20",
      "text-gray-400 bg-gray-400/20"
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const EventCard = ({ Event, index }) => (
    <motion.div
      className="card-hover bg-gray-800/50 rounded-2xl border border-neon-blue/30 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src={Event.image}
        alt={Event.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-orbitron font-bold mb-4 text-white">
          {Event.title}
        </h3>
        <h4 className="text-xl font-orbitron font-light mb-4 text-white">
          {Event.date}
        </h4>
        <p className="text-gray-300 mb-6 leading-relaxed">
          {Event.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-neon-blue mb-3">
            Topics covered:
          </h4>
          <div className="flex flex-wrap gap-2">
            {Event.topics.map((tech, i) => (
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
            href={Event.info}
            className="flex-1 border-2 border-neon-blue text-neon-blue text-center px-4 py-2 rounded-full font-semibold hover:bg-neon-blue hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
      </div>
    </motion.div>
  );

  const VideoCard = ({ video, index }) => (
    <motion.div
      className="bg-gray-800/50 rounded-2xl border border-neon-blue/30 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="p-6">
        <h3 className="text-lg font-orbitron font-bold mb-4 text-white">
          {video.title}-{video.time}
        </h3>
        <div className="w-full aspect-w-16 aspect-h-9 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>
        <p className="text-gray-300 leading-relaxed text-justify">
          {video.description}
        </p>
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
        Events Organised
      </motion.h1>

      <motion.p
        className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Explore our innovative robotics Events that showcase cutting-edge
        technology and collaborative engineering excellence.
      </motion.p>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
        {EventData.map((Event, index) => (
          <EventCard key={Event.id} Event={Event} index={index} />
        ))}
      </div>

      <motion.h1
        className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Videos
      </motion.h1>

      <motion.p
        className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Watch highlights from our robotics events and behind-the-scenes moments.
      </motion.p>

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {VideoData.map((video, index) => (
          <VideoCard key={video.id} video={video} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Events;
