import hfr from "@assets/Projects/Human-following-robot.jpg";
import ieri from "@assets/Projects/IEri-Robot.jpg";
import gcra from "@assets/Projects/Gesture-controlled-Robot-arm.jpg";
import lfc from "@assets/Projects/line-following-car.jpg";
import snr from "@assets/Projects/Sonar-sensor.jpg";


export const projectData = [
  {
    id: "project-1",
    title: "Human Following Car",
    description: "Developed a self-driving robot with advanced control algorithms and real-time adjustments.",
    image: hfr,
    technologies: ["Arduino", "Python"],
    github: "https://github.com",
  },
  {
    id: "project-2",
    title: "Precision Gesture Arm",
    description: "Industrial-grade robotic arm with computer vision integration for automated assembly and quality control.",
    image: gcra,
    technologies: ["OpenCV", "Python", "Arduino"],
    github: "https://github.com",
  },
  {
    id: "project-3",
    title: "iERi",
    description: "AI-powered human friendly robot with autonomous capabilities, object recognition, and real-time data transmission.",
    image: ieri,
    technologies: ["TensorFlow", "Arduino", "Python"],
    github: "https://github.com",
  },
  {
    id: "project-4",
    title: "Line Following Car",
    description: "Self-driven car with autonomous capabilities, object recognition, and Obstacle avoidance.",
    image: lfc,
    technologies: ["Esp32","ROS", "Python"],
    github: "https://github.com",
  },
  {
    id: "project-5",
    title: "Sonar Sensor",
    description: "A high quality sonar sensor made using ultraSonic sensor for object recognition and Obstacle avoidance.",
    image: snr,
    technologies: ["Arduino","ROS", "Python"],
    github: "https://github.com",
  },
];