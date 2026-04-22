"use client";

import { useState, useEffect } from "react";

type HeroMode = "studio" | "cyber";
type QuoteStyle = "amber-clip" | "white-round" | "outline-amber" | "glow-pulse";

const HERO_MODE_EVENT = "hero-mode-change";
const QUOTE_STYLE_EVENT = "quote-style-change";
const CARD_ROTATE_EVENT = "card-rotate-change";
const CARD_SPACING_EVENT = "card-spacing-change";

export function useHeroModeListener(): HeroMode {
  const [mode, setMode] = useState<HeroMode>("cyber");
  useEffect(() => {
    const handler = (e: Event) => setMode((e as CustomEvent<HeroMode>).detail);
    window.addEventListener(HERO_MODE_EVENT, handler);
    return () => window.removeEventListener(HERO_MODE_EVENT, handler);
  }, []);
  return mode;
}

export function useQuoteStyleListener(): QuoteStyle {
  const [style, setStyle] = useState<QuoteStyle>("amber-clip");
  useEffect(() => {
    const handler = (e: Event) => setStyle((e as CustomEvent<QuoteStyle>).detail);
    window.addEventListener(QUOTE_STYLE_EVENT, handler);
    return () => window.removeEventListener(QUOTE_STYLE_EVENT, handler);
  }, []);
  return style;
}

export function useCardRotateListener(): number {
  const [val, setVal] = useState(6);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(CARD_ROTATE_EVENT, handler);
    return () => window.removeEventListener(CARD_ROTATE_EVENT, handler);
  }, []);
  return val;
}

export function useCardSpacingListener(): number {
  const [val, setVal] = useState(28);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(CARD_SPACING_EVENT, handler);
    return () => window.removeEventListener(CARD_SPACING_EVENT, handler);
  }, []);
  return val;
}

const quoteOptions: { id: QuoteStyle; label: string }[] = [
  { id: "amber-clip",   label: "Amber Clip"  },
  { id: "white-round",  label: "White Round" },
  { id: "outline-amber",label: "Outline"     },
  { id: "glow-pulse",   label: "Glow Pulse"  },
];

function Slider({
  label, value, min, max, step, unit = "", onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; unit?: string; onChange: (v: number) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-white/50 text-[10px] uppercase tracking-widest">{label}</span>
        <span className="text-amber-400 font-black text-[11px]">{value}{unit}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-amber-400 cursor-pointer h-1" />
      <div className="flex justify-between text-white/20 text-[9px]">
        <span>{min}{unit}</span><span>{max}{unit}</span>
      </div>
    </div>
  );
}

export default function LayoutWidthControl() {
  const [open, setOpen]           = useState(false);
  const [width, setWidth]         = useState(75);
  const [textY, setTextY]         = useState(-68);
  const [cardsY, setCardsY]       = useState(36);
  const [cardSize, setCardSize]   = useState(130);
  const [cardRotate, setCardRotate] = useState(6);   // degrees per offset
  const [cardSpacing, setCardSpacing] = useState(28); // px per offset
  const [heroMode, setHeroModeState]   = useState<HeroMode>("cyber");
  const [quoteStyle, setQuoteStyleState] = useState<QuoteStyle>("amber-clip");

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--layout-width",    `${width}%`);
    r.setProperty("--hero-text-y",     `${textY}px`);
    r.setProperty("--hero-cards-y",    `${cardsY}px`);
    r.setProperty("--hero-card-size",  `${cardSize / 100}`);
    r.setProperty("--hero-card-rotate",`${cardRotate}`);
    r.setProperty("--hero-card-spacing",`${cardSpacing}`);
  }, [width, textY, cardsY, cardSize, cardRotate, cardSpacing]);

  const setHeroMode   = (m: HeroMode)   => { setHeroModeState(m);   window.dispatchEvent(new CustomEvent(HERO_MODE_EVENT,   { detail: m })); };
  const setQuoteStyle = (s: QuoteStyle) => { setQuoteStyleState(s); window.dispatchEvent(new CustomEvent(QUOTE_STYLE_EVENT, { detail: s })); };

  const handleCardRotate = (v: number) => {
    setCardRotate(v);
    window.dispatchEvent(new CustomEvent(CARD_ROTATE_EVENT, { detail: v }));
  };
  const handleCardSpacing = (v: number) => {
    setCardSpacing(v);
    window.dispatchEvent(new CustomEvent(CARD_SPACING_EVENT, { detail: v }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2">
      {open && (
        <div className="bg-black/93 border border-white/12 backdrop-blur-md rounded-xl px-4 py-4 flex flex-col gap-3 shadow-2xl w-[230px] max-h-[80vh] overflow-y-auto">

          {/* Layout width */}
          <Slider label="Layout Width" value={width} min={60} max={100} step={1} unit="%" onChange={setWidth} />

          <div className="h-px bg-white/8" />

          {/* Text Y */}
          <Slider label="Text Y" value={textY} min={-120} max={120} step={4} unit="px" onChange={setTextY} />

          {/* Cards Y */}
          <Slider label="Cards Y" value={cardsY} min={-120} max={120} step={4} unit="px" onChange={setCardsY} />

          {/* Card size */}
          <Slider label="Card Size" value={cardSize} min={60} max={150} step={5} unit="%" onChange={setCardSize} />

          {/* Card rotate */}
          <Slider label="Card Rotate" value={cardRotate} min={0} max={15} step={1} unit="°" onChange={handleCardRotate} />

          {/* Card spacing */}
          <Slider label="Card Spacing" value={cardSpacing} min={0} max={80} step={4} unit="px" onChange={handleCardSpacing} />

          <div className="h-px bg-white/8" />

          {/* Hero mode */}
          <div className="flex flex-col gap-1.5">
            <span className="text-white/50 text-[10px] uppercase tracking-widest">Hero Style</span>
            <div className="flex gap-2">
              {(["studio", "cyber"] as HeroMode[]).map((m) => (
                <button key={m} onClick={() => setHeroMode(m)}
                  className={`flex-1 py-1.5 text-[11px] font-bold uppercase rounded-lg border transition-all ${
                    heroMode === m ? "bg-amber-400 border-amber-400 text-black" : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                  }`}>
                  {m}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-white/8" />

          {/* Quote style */}
          <div className="flex flex-col gap-1.5">
            <span className="text-white/50 text-[10px] uppercase tracking-widest">Get a Quote</span>
            <div className="flex flex-col gap-1">
              {quoteOptions.map((opt) => (
                <button key={opt.id} onClick={() => setQuoteStyle(opt.id)}
                  className={`w-full py-1.5 px-3 text-[11px] font-bold uppercase text-left rounded-lg border transition-all ${
                    quoteStyle === opt.id ? "bg-amber-400/20 border-amber-400/60 text-amber-300" : "border-white/10 text-white/45 hover:text-white hover:border-white/25"
                  }`}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      <button onClick={() => setOpen(!open)}
        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${
          open ? "bg-amber-300 text-black" : "bg-amber-500 hover:bg-amber-400 text-black"
        }`}>
        <svg className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-90" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" strokeWidth={2} />
        </svg>
      </button>
    </div>
  );
}
