export function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Deep Technical Obsidian Ground */}
      <div className="absolute inset-0 bg-[#08090c]" />

      {/* Architectural Graph Grid (48px precision grid) */}
      <div
        className="bg-arch-grid absolute inset-0 opacity-60"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 20%, black 50%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, black 50%, transparent 85%)',
        }}
      />

      {/* Subtle Focal Ambient Glow tied to Active Palette */}
      <div
        className="absolute top-[5%] left-[20%] h-[600px] w-[600px] rounded-full blur-[160px] transition-colors duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
          opacity: 0.35,
        }}
      />

      <div
        className="absolute bottom-[15%] right-[10%] h-[500px] w-[500px] rounded-full blur-[180px] transition-colors duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
          opacity: 0.15,
        }}
      />

      {/* Edge Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#08090c]/90" />
    </div>
  )
}
