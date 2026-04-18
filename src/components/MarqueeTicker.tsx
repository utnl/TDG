"use client";

interface MarqueeTickerProps {
  items?: string[];
  speed?: number; // seconds for one full loop
  className?: string;
}

const defaultItems = [
  "2D Art",
  "Character Design",
  "Spine Animation",
  "VFX",
  "Cutscene",
  "Game UI",
  "Mobile Games",
  "Outsourcing Studio",
];

export default function MarqueeTicker({
  items = defaultItems,
  speed = 20,
  className = "",
}: MarqueeTickerProps) {
  // Triple the items so loop is seamless
  const repeated = [...items, ...items, ...items];

  return (
    <div
      className={`overflow-hidden border-t border-white/10 bg-black/60 backdrop-blur-sm py-3 ${className}`}
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite`,
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 mx-6 text-white/40 text-xs font-bold tracking-[0.2em] uppercase"
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-amber-500/60 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
