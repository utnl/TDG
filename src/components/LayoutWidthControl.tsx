"use client";

import { useState, useEffect } from "react";

type HeroMode = "studio" | "cyber";
type QuoteStyle = "amber-clip" | "white-round" | "outline-amber" | "glow-pulse";

const HERO_MODE_EVENT = "hero-mode-change";
const QUOTE_STYLE_EVENT = "quote-style-change";
const CARD_ROTATE_EVENT = "card-rotate-change";
const CARD_SPACING_EVENT = "card-spacing-change";
const CARD_MODE_EVENT = "card-mode-change";
const LAYOUT_MODE_EVENT = "layout-mode-change";
const MEDIA_LIST_EVENT = "media-list-change";

export type CardMode = "classic" | "fancy" | "image" | "ornate";
export type LayoutMode = "fan" | "row";
export type MediaItem = { id: string; name: string; label: string; thumbnail: string; path: string; isBgVideo?: boolean; isIframe?: boolean; };

export const defaultMediaList: MediaItem[] = [
  { id: '1', name: "MALEFICA", label: "Skin 2 — I", thumbnail: "/video/CutScene_SE/1big.gif", path: "/4c8ad3163362313.63e48bfc90be9.gif", isBgVideo: false, isIframe: false },
  { id: '2', name: "VESTA", label: "Skin 2 — III", thumbnail: "/video/CutScene_SE/2big.gif", path: "/video/CutScene_SE/video_summoner_3_skill_1_skin_2.mp4", isBgVideo: true, isIframe: false },
  { id: '3', name: "FABER", label: "Skin 2 — IV", thumbnail: "/video/CutScene_SE/3big.gif", path: "/video/CutScene_SE/video_summoner_4_skill_1_skin_2.mp4", isBgVideo: true, isIframe: false },
  { id: '4', name: "BIGBY", label: "Long Arm", thumbnail: "/video/CutScene_SE/4.png", path: "/video/Super_Move/BIGBY-Long Arm of the Law_Closed.mp4", isBgVideo: true, isIframe: false },
  { id: '5', name: "???", label: "On Your Knees", thumbnail: "/video/CutScene_SE/5.png", path: "/video/Super_Move/On_Your_Knees.mp4", isBgVideo: true, isIframe: false },
];

export function useMediaListListener(): MediaItem[] {
  const [list, setList] = useState<MediaItem[]>(defaultMediaList);
  useEffect(() => {
    const handler = (e: Event) => setList((e as CustomEvent<MediaItem[]>).detail);
    window.addEventListener(MEDIA_LIST_EVENT, handler);
    return () => window.removeEventListener(MEDIA_LIST_EVENT, handler);
  }, []);
  return list;
}

export function useLayoutModeListener(): LayoutMode {
  const [mode, setMode] = useState<LayoutMode>("fan");
  useEffect(() => {
    const handler = (e: Event) => setMode((e as CustomEvent<LayoutMode>).detail);
    window.addEventListener(LAYOUT_MODE_EVENT, handler);
    return () => window.removeEventListener(LAYOUT_MODE_EVENT, handler);
  }, []);
  return mode;
}

export function useCardModeListener(): CardMode {
  const [mode, setMode] = useState<CardMode>("ornate");
  useEffect(() => {
    const handler = (e: Event) => setMode((e as CustomEvent<CardMode>).detail);
    window.addEventListener(CARD_MODE_EVENT, handler);
    return () => window.removeEventListener(CARD_MODE_EVENT, handler);
  }, []);
  return mode;
}

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
  const [style, setStyle] = useState<QuoteStyle>("glow-pulse");
  useEffect(() => {
    const handler = (e: Event) => setStyle((e as CustomEvent<QuoteStyle>).detail);
    window.addEventListener(QUOTE_STYLE_EVENT, handler);
    return () => window.removeEventListener(QUOTE_STYLE_EVENT, handler);
  }, []);
  return style;
}

export function useCardRotateListener(): number {
  const [val, setVal] = useState(10);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(CARD_ROTATE_EVENT, handler);
    return () => window.removeEventListener(CARD_ROTATE_EVENT, handler);
  }, []);
  return val;
}

export function useCardSpacingListener(): number {
  const [val, setVal] = useState(48);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(CARD_SPACING_EVENT, handler);
    return () => window.removeEventListener(CARD_SPACING_EVENT, handler);
  }, []);
  return val;
}

const CARD_SIZE_EVENT = "card-size-change";
const BG_OVERLAY_EVENT = "bg-overlay-change";
const CARD_DIM_EVENT = "card-dim-change";
const CARD_VIGNETTE_EVENT = "card-vignette-change";

export function useCardSizeListener(): number {
  const [val, setVal] = useState(1.25);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(CARD_SIZE_EVENT, handler);
    return () => window.removeEventListener(CARD_SIZE_EVENT, handler);
  }, []);
  return val;
}

export function useBgOverlayListener(): number {
  const [val, setVal] = useState(25); // 25% mặc định
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(BG_OVERLAY_EVENT, handler);
    return () => window.removeEventListener(BG_OVERLAY_EVENT, handler);
  }, []);
  return val;
}

export function useCardDimListener(): number {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<number>).detail);
    window.addEventListener(CARD_DIM_EVENT, handler);
    return () => window.removeEventListener(CARD_DIM_EVENT, handler);
  }, []);
  return val;
}

export function useCardVignetteListener(): boolean {
  const [val, setVal] = useState(false);
  useEffect(() => {
    const handler = (e: Event) => setVal((e as CustomEvent<boolean>).detail);
    window.addEventListener(CARD_VIGNETTE_EVENT, handler);
    return () => window.removeEventListener(CARD_VIGNETTE_EVENT, handler);
  }, []);
  return val;
}

const quoteOptions: { id: QuoteStyle; label: string }[] = [
  { id: "amber-clip", label: "Amber Clip" },
  { id: "white-round", label: "White Round" },
  { id: "outline-amber", label: "Outline" },
  { id: "glow-pulse", label: "Glow Pulse" },
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
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(76);
  const [textY, setTextY] = useState(8);
  const [cardsX, setCardsX] = useState(-16);
  const [cardsY, setCardsY] = useState(-120);
  const [cardSize, setCardSize] = useState(125);
  const [cardRotate, setCardRotate] = useState(10);
  const [cardSpacing, setCardSpacing] = useState(48);
  const [bgOverlay, setBgOverlay] = useState(25);
  const [cardDim, setCardDim] = useState(0);
  const [cardVignette, setCardVignette] = useState(false);
  const [heroMode, setHeroModeState] = useState<HeroMode>("cyber");
  const [quoteStyle, setQuoteStyleState] = useState<QuoteStyle>("glow-pulse");
  const [cardModeState, setCardModeState] = useState<CardMode>("ornate");
  const [layoutModeState, setLayoutModeState] = useState<LayoutMode>("fan");
  const [mediaList, setMediaListState] = useState<MediaItem[]>(defaultMediaList);
  const [showLayout, setShowLayout] = useState(true);
  const [showCard, setShowCard] = useState(false);
  const [showStyle, setShowStyle] = useState(false);
  const [showTypography, setShowTypography] = useState(false);
  const [showMediaSettings, setShowMediaSettings] = useState(false);

  // Typography state
  const [titleSize, setTitleSize] = useState(92);
  const [titleColor, setTitleColor] = useState("#ffffff");
  const [highlightColor, setHighlightColor] = useState("#f59e0b");
  const [subtitleSize, setSubtitleSize] = useState(16);
  const [subtitleColor, setSubtitleColor] = useState("#f59e0b");
  const [descSize, setDescSize] = useState(18);
  const [descColor, setDescColor] = useState("#ffffff");
  const [btnColor, setBtnColor] = useState("#f59e0b");

  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--layout-width", `${width}%`);
    r.setProperty("--hero-text-y", `${textY}px`);
    r.setProperty("--hero-cards-x", `${cardsX}px`);
    r.setProperty("--hero-cards-y", `${cardsY}px`);
    r.setProperty("--hero-card-size", `${cardSize / 100}`);
    window.dispatchEvent(new CustomEvent(CARD_SIZE_EVENT, { detail: cardSize / 100 }));
    r.setProperty("--hero-card-rotate", `${cardRotate}`);
    r.setProperty("--hero-card-spacing", `${cardSpacing}`);

    // Typography
    r.setProperty("--hero-title-size", `${titleSize}px`);
    r.setProperty("--hero-title-color", titleColor);
    r.setProperty("--hero-highlight-color", highlightColor);
    r.setProperty("--hero-subtitle-size", `${subtitleSize}px`);
    r.setProperty("--hero-subtitle-color", subtitleColor);
    r.setProperty("--hero-desc-size", `${descSize}px`);
    r.setProperty("--hero-desc-color", descColor);
    r.setProperty("--hero-btn-bg", btnColor);
  }, [width, textY, cardsX, cardsY, cardSize, cardRotate, cardSpacing, titleSize, titleColor, highlightColor, subtitleSize, subtitleColor, descSize, descColor, btnColor]);

  const setHeroMode = (m: HeroMode) => { setHeroModeState(m); window.dispatchEvent(new CustomEvent(HERO_MODE_EVENT, { detail: m })); };
  const setQuoteStyle = (s: QuoteStyle) => { setQuoteStyleState(s); window.dispatchEvent(new CustomEvent(QUOTE_STYLE_EVENT, { detail: s })); };
  const setCardMode = (m: CardMode) => { setCardModeState(m); window.dispatchEvent(new CustomEvent(CARD_MODE_EVENT, { detail: m })); };
  const setLayoutMode = (m: LayoutMode) => { setLayoutModeState(m); window.dispatchEvent(new CustomEvent(LAYOUT_MODE_EVENT, { detail: m })); };

  const handleCardRotate = (v: number) => { setCardRotate(v); window.dispatchEvent(new CustomEvent(CARD_ROTATE_EVENT, { detail: v })); };
  const handleCardSpacing = (v: number) => { setCardSpacing(v); window.dispatchEvent(new CustomEvent(CARD_SPACING_EVENT, { detail: v })); };
  const handleBgOverlay = (v: number) => { setBgOverlay(v); window.dispatchEvent(new CustomEvent(BG_OVERLAY_EVENT, { detail: v })); };
  const handleCardDim = (v: number) => { setCardDim(v); window.dispatchEvent(new CustomEvent(CARD_DIM_EVENT, { detail: v })); };
  const handleCardVignette = (v: boolean) => { setCardVignette(v); window.dispatchEvent(new CustomEvent(CARD_VIGNETTE_EVENT, { detail: v })); };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, idx: number, type: 'thumbnail' | 'bg') => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const newList = [...mediaList];
    if (type === 'thumbnail') {
      newList[idx] = { ...newList[idx], thumbnail: url };
    } else {
      const isVideo = file.type.startsWith('video/');
      newList[idx] = { ...newList[idx], path: url, isBgVideo: isVideo, isIframe: false };
    }
    setMediaListState(newList);
    window.dispatchEvent(new CustomEvent(MEDIA_LIST_EVENT, { detail: newList }));
  };

  const handleMediaUrlChange = (val: string, idx: number, type: 'thumbnail' | 'bg') => {
    const newList = [...mediaList];
    if (type === 'thumbnail') {
      newList[idx] = { ...newList[idx], thumbnail: val };
    } else {
      const isIframe = val.includes('vimeo.com') || val.includes('youtube.com');
      const isVideo = val.endsWith('.mp4') || val.endsWith('.webm') || isIframe;
      newList[idx] = { ...newList[idx], path: val, isBgVideo: isVideo, isIframe };
    }
    setMediaListState(newList);
    window.dispatchEvent(new CustomEvent(MEDIA_LIST_EVENT, { detail: newList }));
  };

  return (
    <div className="fixed bottom-6 left-6 z-[9999] flex flex-col items-start gap-2">
      {open && (
        <div className="bg-black/93 border border-white/12 backdrop-blur-md rounded-xl px-5 py-5 flex flex-col gap-4 shadow-2xl w-[300px] max-h-[85vh] overflow-y-auto">

          {/* SECTION: LAYOUT */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowLayout(!showLayout)}
              className="flex items-center justify-between w-full text-amber-500 font-black text-[11px] uppercase tracking-[0.2em] mb-1"
            >
              <span>Positioning</span>
              <svg className={`w-3 h-3 transition-transform ${showLayout ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {showLayout && (
              <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <Slider label="Layout Width" value={width} min={60} max={100} step={1} unit="%" onChange={setWidth} />
                <Slider label="Text Y Offset" value={textY} min={-120} max={120} step={4} unit="px" onChange={setTextY} />
                <Slider label="Cards X Pos" value={cardsX} min={-200} max={200} step={4} unit="px" onChange={setCardsX} />
                <Slider label="Cards Y Pos" value={cardsY} min={-120} max={120} step={4} unit="px" onChange={setCardsY} />
              </div>
            )}
          </div>

          <div className="h-px bg-white/8" />

          {/* SECTION: CARD STYLE */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowCard(!showCard)}
              className="flex items-center justify-between w-full text-amber-500 font-black text-[11px] uppercase tracking-[0.2em] mb-1"
            >
              <span>Card Graphics</span>
              <svg className={`w-3 h-3 transition-transform ${showCard ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {showCard && (
              <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <Slider label="Card Size" value={cardSize} min={60} max={150} step={5} unit="%" onChange={setCardSize} />
                <Slider label="Fan Rotation" value={cardRotate} min={0} max={15} step={1} unit="°" onChange={handleCardRotate} />
                <Slider label="Fan Spacing" value={cardSpacing} min={0} max={80} step={4} unit="px" onChange={handleCardSpacing} />
                <Slider label="Dim (Inactive)" value={cardDim} min={0} max={80} step={5} unit="%" onChange={handleCardDim} />

                <div className="flex items-center justify-between py-1">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">Vignette</span>
                  <button
                    onClick={() => handleCardVignette(!cardVignette)}
                    className={`w-10 h-5 rounded-full transition-all relative ${cardVignette ? "bg-amber-400" : "bg-white/15"}`}
                  >
                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${cardVignette ? "left-5" : "left-0.5"}`} />
                  </button>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">Frame Style</span>
                  <div className="flex flex-col gap-1">
                    {[
                      { id: "classic", label: "TDG Original" },
                      { id: "fancy", label: "Fantasy Frame" },
                      { id: "ornate", label: "Fantasy Ornate" },
                      { id: "image", label: "Custom PNG" }
                    ].map((opt) => (
                      <button key={opt.id} onClick={() => setCardMode(opt.id as CardMode)}
                        className={`w-full py-1.5 px-3 text-[10px] font-bold uppercase text-left rounded-lg border transition-all ${cardModeState === opt.id ? "bg-amber-500/20 border-amber-500/60 text-amber-400" : "border-white/10 text-white/45 hover:text-white hover:border-white/25"
                          }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">Stack Mode</span>
                  <div className="flex gap-2">
                    {[
                      { id: "fan", label: "Fan" },
                      { id: "row", label: "Row" }
                    ].map((opt) => (
                      <button key={opt.id} onClick={() => setLayoutMode(opt.id as LayoutMode)}
                        className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg border transition-all ${layoutModeState === opt.id ? "bg-amber-400 border-amber-400 text-black" : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                          }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-px bg-white/8" />

          {/* SECTION: STYLE */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowStyle(!showStyle)}
              className="flex items-center justify-between w-full text-amber-500 font-black text-[11px] uppercase tracking-[0.2em] mb-1"
            >
              <span>Global Aesthetics</span>
              <svg className={`w-3 h-3 transition-transform ${showStyle ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {showStyle && (
              <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-top-1 duration-200">
                <Slider label="BG Overlay" value={bgOverlay} min={0} max={80} step={5} unit="%" onChange={handleBgOverlay} />

                <div className="flex flex-col gap-2">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">Theme</span>
                  <div className="flex gap-2">
                    {(["studio", "cyber"] as HeroMode[]).map((m) => (
                      <button key={m} onClick={() => setHeroMode(m)}
                        className={`flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg border transition-all ${heroMode === m ? "bg-amber-400 border-amber-400 text-black" : "border-white/15 text-white/50 hover:text-white hover:border-white/30"
                          }`}>
                        {m}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">Quote Button</span>
                  <div className="flex flex-col gap-1">
                    {quoteOptions.map((opt) => (
                      <button key={opt.id} onClick={() => setQuoteStyle(opt.id)}
                        className={`w-full py-1.5 px-3 text-[10px] font-bold uppercase text-left rounded-lg border transition-all ${quoteStyle === opt.id ? "bg-amber-400/20 border-amber-400/60 text-amber-300" : "border-white/10 text-white/45 hover:text-white hover:border-white/25"
                          }`}>
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-px bg-white/8" />

          {/* SECTION: TYPOGRAPHY */}
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setShowTypography(!showTypography)}
              className="flex items-center justify-between w-full text-amber-500 font-black text-[11px] uppercase tracking-[0.2em] mb-1"
            >
              <span>Typography</span>
              <svg className={`w-3 h-3 transition-transform ${showTypography ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {showTypography && (
              <div className="flex flex-col gap-4 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="flex flex-col gap-2">
                  <Slider label="Main Title Size" value={titleSize} min={30} max={140} step={2} unit="px" onChange={setTitleSize} />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] text-white/40 uppercase">Colors:</span>
                    <div className="flex gap-1">
                      <input type="color" value={titleColor} onChange={(e) => setTitleColor(e.target.value)} className="w-5 h-5 bg-transparent border-0 cursor-pointer" title="Line 1 Color" />
                      <input type="color" value={highlightColor} onChange={(e) => setHighlightColor(e.target.value)} className="w-5 h-5 bg-transparent border-0 cursor-pointer" title="Line 2 Highlight Color" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Slider label="Subtitle Size" value={subtitleSize} min={10} max={30} step={1} unit="px" onChange={setSubtitleSize} />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] text-white/40 uppercase">Color:</span>
                    <input type="color" value={subtitleColor} onChange={(e) => setSubtitleColor(e.target.value)} className="w-5 h-5 bg-transparent border-0 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Slider label="Description Size" value={descSize} min={12} max={24} step={1} unit="px" onChange={setDescSize} />
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[9px] text-white/40 uppercase">Color:</span>
                    <input type="color" value={descColor} onChange={(e) => setDescColor(e.target.value)} className="w-5 h-5 bg-transparent border-0 cursor-pointer" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-white/50 text-[10px] uppercase tracking-widest">Button Color</span>
                  <input type="color" value={btnColor} onChange={(e) => setBtnColor(e.target.value)} className="w-full h-6 bg-white/5 border border-white/10 rounded cursor-pointer" />
                </div>
              </div>
            )}
          </div>

          <div className="h-px bg-white/8" />

          {/* Media Upload Settings */}
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => setShowMediaSettings(!showMediaSettings)}
              className="flex items-center justify-between w-full text-amber-500 font-black text-[11px] uppercase tracking-[0.2em] mb-1"
            >
              <span>Asset Library</span>
              <svg className={`w-3 h-3 transition-transform ${showMediaSettings ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>

            {showMediaSettings && (
              <div className="flex flex-col gap-3 mt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                {mediaList.map((media, idx) => (
                  <div key={media.id} className="flex flex-col gap-1.5 border-l-2 border-amber-500/30 pl-2">
                    <span className="text-[10px] font-bold text-amber-400/80">Slot {idx + 1}</span>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] text-white/70 bg-white/5 hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors border border-white/10 flex items-center justify-between">
                          <span>Thumb</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleMediaUpload(e, idx, 'thumbnail')} />
                        </label>
                        <input type="text" placeholder="URL" className="w-full bg-black/50 border border-white/10 text-white text-[9px] px-2 py-1 rounded outline-none focus:border-amber-500/50"
                          value={media.thumbnail.startsWith('blob:') ? '' : media.thumbnail}
                          onChange={(e) => handleMediaUrlChange(e.target.value, idx, 'thumbnail')}
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <label className="text-[9px] text-white/70 bg-white/5 hover:bg-white/10 px-2 py-1 rounded cursor-pointer transition-colors border border-white/10 flex items-center justify-between">
                          <span>Hero BG</span>
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
                          <input type="file" accept="video/*,image/*" className="hidden" onChange={(e) => handleMediaUpload(e, idx, 'bg')} />
                        </label>
                        <input type="text" placeholder="URL / Vimeo" className="w-full bg-black/50 border border-white/10 text-white text-[9px] px-2 py-1 rounded outline-none focus:border-amber-500/50"
                          value={media.path.startsWith('blob:') ? '' : media.path}
                          onChange={(e) => handleMediaUrlChange(e.target.value, idx, 'bg')}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      <button onClick={() => setOpen(!open)}
        className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${open ? "bg-amber-300 text-black" : "bg-amber-500 hover:bg-amber-400 text-black"
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
