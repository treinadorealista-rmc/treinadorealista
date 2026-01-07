export function DiagonalLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main diagonal lines */}
      <div className="absolute top-0 right-0 w-full h-full">
        <svg
          className="absolute top-0 right-0 w-[200%] h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <line
            x1="60"
            y1="0"
            x2="100"
            y2="100"
            stroke="hsl(var(--primary))"
            strokeWidth="0.15"
          />
          <line
            x1="70"
            y1="0"
            x2="110"
            y2="100"
            stroke="hsl(var(--primary))"
            strokeWidth="0.1"
          />
          <line
            x1="80"
            y1="0"
            x2="120"
            y2="100"
            stroke="hsl(var(--primary))"
            strokeWidth="0.08"
          />
        </svg>
      </div>
      
      {/* Subtle glow effect */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
    </div>
  );
}
