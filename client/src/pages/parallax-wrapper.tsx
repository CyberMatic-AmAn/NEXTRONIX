import { useState, useEffect, useRef, ReactNode } from 'react';

interface ParallaxWrapperProps {
  children: ReactNode;
  speed?: number;
}

export default function ParallaxWrapper({ children, speed = 0.05 }: ParallaxWrapperProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;

    const x = (window.innerWidth / 2 - e.clientX) * speed;
    const y = (window.innerHeight / 2 - e.clientY) * speed;

    setPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [speed]);

  return (
    <div 
      ref={ref}
      className="parallax"
      style={{ 
        transform: `translateX(${position.x}px) translateY(${position.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      {children}
    </div>
  );
}
