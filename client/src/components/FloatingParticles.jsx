const FloatingParticles = ({ count = 20 }) => {
  const particles = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className="particle absolute bg-neon-blue rounded-full opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 6}s`,
        animationDuration: `${6 + Math.random() * 4}s`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        top: `${Math.random() * 100}%`
      }}
    />
  ));

  return <div className="particles">{particles}</div>;
};

export default FloatingParticles;
