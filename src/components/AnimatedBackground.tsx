export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#080a11]" />

      {/* Modern Developer Isometric Grid with Radial Mask */}
      <div
        className="bg-grid absolute inset-0 opacity-40"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, black 40%, transparent 80%)',
        }}
      />

      {/* Floating Ambient Light Orb 1 - Top Center / Left */}
      <div
        className="animate-pulse-slow absolute -top-[10%] left-[15%] h-[550px] w-[550px] rounded-full blur-[140px] transition-colors duration-700"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.5,
        }}
      />

      {/* Floating Ambient Light Orb 2 - Middle Right */}
      <div
        className="animate-pulse-slow absolute top-[40%] -right-[10%] h-[600px] w-[600px] rounded-full blur-[160px] transition-colors duration-700"
        style={{
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
          opacity: 0.25,
          animationDelay: '-5s',
        }}
      />

      {/* Floating Ambient Light Orb 3 - Bottom Left */}
      <div
        className="animate-pulse-slow absolute bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full blur-[140px] transition-colors duration-700"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.35,
          animationDelay: '-8s',
        }}
      />

      {/* Vignette Overlay for Crisp Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080a11]/80" />
    </div>
  )
}

