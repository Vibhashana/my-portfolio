const HeroRings = () => {
  const ringSettings = {
    initialSize: 740,
    spacing: 200,
    ringCount: 6,
  };

  return (
    <>
      {Array.from({ length: ringSettings.ringCount }).map((_, index) => (
        <div
          className="hero-ring"
          key={`ring-${index}`}
          style={
            {
              "--ring-size": `${ringSettings.initialSize + ringSettings.spacing * index}px`,
              width: "var(--ring-size)",
              height: "var(--ring-size)",
              marginLeft: "calc(var(--ring-size) / 2 * -1)",
              marginTop: "calc(var(--ring-size) / 2 * -1)",
              animationDelay: `${0.1 * index}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </>
  );
};

export default HeroRings;
