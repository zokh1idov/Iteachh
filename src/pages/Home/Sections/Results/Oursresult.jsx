import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const videos = [
  {
    id: 1,
    name: "Najot Ta'lim",
    src: "/imgs/Eldor.mp4", // <-- shu yerga haqiqiy video faylning (.mp4) manzilini qo'ying
    instagramUrl: "", // <-- shu yerga Instagram video (Reels) linkini qo'ying
  },
  {
    id: 2,
    name: "Bitiruvchi",
    src: "/imgs/Eldor2.mp4",
    instagramUrl: "",
  },
  {
    id: 3,
    name: "Dasturchi",
    src: "/imgs/Eldor3.mp4",
    instagramUrl: "",
  },
  {
    id: 4,
    name: "Bitiruvchi",
    src: "/imgs/Eldor4.mp4",
    instagramUrl: "",
  },
  {
    id: 5,
    name: "Bitiruvchi",
    src: "/imgs/Eldor5.mp4",
    instagramUrl: "",
  },
];

function VideoCard({ video, isPlaying, onPlay }) {
  const videoRef = useRef(null);

  const handleLoadedMetadata = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.currentTime = 0.1;
    }
  };

  const handlePlayClick = () => {
    onPlay(video.id);
    videoRef.current?.play();
  };

  // Boshqa karta bosilib, bu video endi "faol" bo'lmay qolsa — avtomatik to'xtaydi
  useEffect(() => {
    if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div
      id="about"
      className="group relative aspect-[9/16] w-[230px] flex-none overflow-hidden rounded-2xl bg-[#0a1522] shadow-sm sm:w-[220px]"
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.thumb || undefined}
        controls={isPlaying}
        playsInline
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {!isPlaying && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30" />

          {video.caption && (
            <div className="absolute left-3 right-3 top-3 rounded-xl bg-black/55 p-3 backdrop-blur-sm">
              <div className="mb-1 flex items-center gap-2">
                <span className="h-5 w-5 flex-none rounded-full bg-[#16a34a]" />
                <p className="text-[13px] font-bold leading-tight text-white">
                  {video.quote}
                </p>
              </div>
              <p className="mb-1 text-[11px] text-white/70">{video.name}</p>
              <p className="text-[12px] font-medium text-white">
                {video.caption}
              </p>
            </div>
          )}

          {video.badges && (
            <div className="absolute left-3 right-3 top-1/2 flex -translate-y-1/2 flex-col gap-2">
              {video.badges.map((b) => (
                <span
                  key={b}
                  className="rounded-lg bg-white/95 px-3 py-2 text-[13px] font-bold text-[#0a1522] shadow"
                >
                  {b}
                </span>
              ))}
            </div>
          )}

          {video.pill && (
            <span className="absolute left-3 top-3 rounded-md bg-[#0a1522]/85 px-2.5 py-1 text-[11px] font-bold text-white">
              {video.pill}
            </span>
          )}

          <button
            type="button"
            aria-label="Play"
            onClick={handlePlayClick}
            className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#16a34a] text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
          >
            <Play size={22} fill="currentColor" className="ml-0.5" />
          </button>

          {video.tag && (
            <span className="absolute bottom-3 left-3 text-[11px] font-semibold italic text-white/90">
              {video.tag}
            </span>
          )}
        </>
      )}

      <a
        href={video.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label={`${video.name} - Instagram`}
        className="absolute right-3 bottom-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/35 text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-[#16a34a]"
      >
        <InstagramIcon size={17} />
      </a>
    </div>
  );
}

export default function Oursresult() {
  const scrollerRef = useRef(null);
  const [playingId, setPlayingId] = useState(null);

  const scrollByCard = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.firstChild ? el.firstChild.offsetWidth + 16 : 260;
    el.scrollBy({ left: dir * cardWidth * 2, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-16 lg:px-5">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-sora text-[26px] font-extrabold uppercase tracking-tight text-[#0a1522] lg:text-[32px]">
          O'quvchilarimiz natijalari
        </h2>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => scrollByCard(-1)}
            aria-label="Oldingi"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eef1f0] text-[#0a1522] transition-colors duration-200 hover:border-[#16a34a] hover:bg-[#f0fdf4] hover:text-[#16a34a]"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard(1)}
            aria-label="Keyingi"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[#eef1f0] text-[#0a1522] transition-colors duration-200 hover:border-[#16a34a] hover:bg-[#f0fdf4] hover:text-[#16a34a]"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {videos.map((v) => (
          <div key={v.id} style={{ scrollSnapAlign: "start" }}>
            <VideoCard
              video={v}
              isPlaying={playingId === v.id}
              onPlay={setPlayingId}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
