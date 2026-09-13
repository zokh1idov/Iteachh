import { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  Palette,
  Megaphone,
  Brain,
} from "lucide-react";

const slides = [
  {
    title: "Dasturlash yo'nalishi",
    subtitle: "Frontend, Backend va Mobile dasturlash",
    icon: Code,
    image:
      "/imgs/slide1.avif",
  },
  {
    title: "Dizayn va Grafika",
    subtitle: "UI/UX, Grafika va 3D Modellashtirish",
    icon: Palette,
    image:
      "/imgs/slide3.avif",
  },
  {
    title: "Raqamli Marketing",
    subtitle: "SMM, Target va Kontekst reklama",
    icon: Megaphone,
    image:
      "/imgs/slide2.avif",
  },
{
  title: "Sun'iy Intellekt",
  subtitle: "AI vositalari va Prompt injiniring",
  icon: Brain,
  image:
    "/imgs/slide4.avif",
},
];

function Counter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

function HeroSlider() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = (index) => {
    if (index < 0) {
      setActive(slides.length - 1);
    } else if (index >= slides.length) {
      setActive(0);
    } else {
      setActive(index);
    }
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused]);

  const current = slides[active];
  const Icon = current.icon;

  return (
    <div
      className="group relative w-full max-w-[540px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-[#e3e8e6] bg-[#f0fdf4] shadow-[0_20px_50px_rgba(10,21,34,0.08)]">
        {slides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === active ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="h-full w-full object-cover animate-[sliderImage_700ms_ease-out]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>
        ))}

        <div className="absolute bottom-4 left-4 right-4 z-20 flex translate-y-3 items-center gap-3 opacity-0 animate-[sliderInfo_650ms_150ms_ease-out_forwards] rounded-[14px] border border-white/20 bg-white/90 px-4 py-3 backdrop-blur-sm">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-[#f0fdf4]">
            <Icon size={17} className="text-[#16a34a]" />
          </span>
          <div className="text-left">
            <div className="text-[13.5px] font-semibold leading-tight text-[#0a1522]">
              {current.title}
            </div>
            <div className="mt-0.5 text-[11.5px] text-[#6b7a75]">
              {current.subtitle}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(active - 1)}
          aria-label="Oldingi"
          className="absolute left-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#0a1522] shadow-[0_6px_16px_rgba(0,0,0,0.12)] backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[#22c55e] hover:text-white"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          type="button"
          onClick={() => goTo(active + 1)}
          aria-label="Keyingi"
          className="absolute right-3 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-[#0a1522] shadow-[0_6px_16px_rgba(0,0,0,0.12)] backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100 hover:bg-[#22c55e] hover:text-white"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goTo(i)}
            aria-label={s.title}
            className="h-[6px] rounded-full transition-all duration-300"
            style={{
              width: i === active ? "26px" : "6px",
              backgroundColor: i === active ? "#16a34a" : "#dce4e0",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sliderImage {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        @keyframes sliderInfo {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-in {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 900px 500px at 78% 8%, rgba(34,197,94,0.07), transparent 60%), radial-gradient(ellipse 600px 400px at 10% 90%, rgba(34,197,94,0.05), transparent 60%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-5 lg:py-24">
        <div>
          <div
            className="hero-in mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#bbf7d0] bg-[#f0fdf4] py-1.5 pl-2.5 pr-3.5"
            style={{ animationDelay: "0s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)]" />
            <span className="text-[13px] font-semibold text-[#16a34a]">
              Farg'ona shahridagi zamonaviy kasblar markazi
            </span>
          </div>

          <h1
            className="hero-in mb-6 max-w-[620px] font-sora text-[36px] font-bold leading-[1.1] tracking-tight text-[#0a1522] lg:text-[52px]"
            style={{ animationDelay: "0.08s" }}
          >
            Zamonaviy kasblarni o'rganing. Kelajagingizni bugundan boshlang.
          </h1>

          <p
            className="hero-in mb-9 max-w-[500px] text-[17px] leading-relaxed text-[#6b7a75]"
            style={{ animationDelay: "0.16s" }}
          >
            iTeach — dasturlash, dizayn, marketing va sun'iy intellekt bo'yicha
            professional ta'lim markazi. 1000+ bitiruvchi, 6+ yuqori talabli
            yo'nalish.
          </p>

          <div
            className="hero-in mb-16 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-[10px] bg-[#22c55e] px-[26px] py-[14px] text-[15px] font-bold text-white shadow-[0_10px_25px_rgba(34,197,94,0.28)] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#16a34a] hover:shadow-[0_14px_32px_rgba(34,197,94,0.38)] active:translate-y-0"
            >
              Kurslarni ko'rish
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#consult"
              className="inline-flex items-center gap-2 rounded-[10px] border border-[#e3e8e6] bg-white px-[26px] py-[14px] text-[15px] font-semibold text-[#0a1522] transition-colors duration-300 hover:border-[#16a34a]/40 hover:bg-[#f6faf7]"
            >
              Bepul konsultatsiya
            </a>
          </div>

          <div
            className="hero-in flex max-w-[560px]"
            style={{ animationDelay: "0.32s" }}
          >
            <div className="flex-1 border-r border-[#e3e8e6] pr-7">
              <div className="font-sora text-[30px] font-bold tracking-tight text-[#16a34a]">
                <Counter value={1000} suffix="+" />
              </div>
              <div className="mt-1.5 text-[13px] leading-snug text-[#6b7a75]">
                Muvaffaqiyatli bitiruvchi
              </div>
            </div>
            <div className="flex-1 border-r border-[#e3e8e6] px-7">
              <div className="font-sora text-[30px] font-bold tracking-tight text-[#16a34a]">
                <Counter value={6} suffix="+" />
              </div>
              <div className="mt-1.5 text-[13px] leading-snug text-[#6b7a75]">
                Zamonaviy yo'nalish
              </div>
            </div>
            <div className="flex-1 px-7">
              <div className="font-sora text-[30px] font-bold tracking-tight text-[#16a34a]">
                <Counter value={95} suffix="%" />
              </div>
              <div className="mt-1.5 text-[13px] leading-snug text-[#6b7a75]">
                Ishga joylashish ko'rsatkichi
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-in relative flex h-auto items-center justify-center lg:justify-end"
          style={{ animationDelay: "0.2s" }}
        >
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}

export default Hero;
