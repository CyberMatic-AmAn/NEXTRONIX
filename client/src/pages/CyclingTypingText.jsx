import { useState, useEffect } from "react";

const CyclingTypingText = ({ texts, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const typeSpeed = 100; // Milliseconds per character
  const deleteSpeed = 50; // Milliseconds per character
  const pauseDuration = 2000; // Pause after typing/deleting

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (charIndex < texts[currentIndex].length) {
        // Type next character
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev + texts[currentIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, typeSpeed);
      } else {
        // Pause after typing, then start deleting
        timeout = setTimeout(() => {
          setIsTyping(false);
          setCharIndex(texts[currentIndex].length - 1);
        }, pauseDuration);
      }
    } else {
      if (charIndex >= 0) {
        // Delete last character
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, deleteSpeed);
      } else {
        // Move to next text and start typing
        timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
          setCharIndex(0);
          setDisplayText("");
        }, pauseDuration);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isTyping, currentIndex, texts]);

  return (
    <span className={`${className} inline-block`}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default CyclingTypingText;