import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TypingAndDeleteText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (index < text.length) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[index]);
          setIndex((prev) => prev + 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (index > 0) {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setIndex((prev) => prev - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
      }
    }

    return () => clearTimeout(timeout);
  }, [index, isTyping, text]);

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <span className={className}>
      <AnimatePresence>
        {displayText.split("").map((letter, i) => (
          <motion.span
            key={`${letter}-${i}`}
            variants={letterVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.1 }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </span>
  );
};

export default TypingAndDeleteText;