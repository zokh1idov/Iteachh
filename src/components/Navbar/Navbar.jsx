import { useState } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between rounded-[22px] border border-[#edf1ef] bg-white/95 px-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md">

        <a
          href="#"
          className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
        >
          <img
            src="/imgs/logo.png"
            alt="iTeach"
            className="h-9 w-auto lg:h-11"
          />
        </a>

        <ul className="hidden items-center gap-7 lg:flex xl:gap-8">

          <li>
            <a
              href="#courses"
              className="group relative py-2 text-[14px] font-medium text-[#59636b] transition-colors duration-300 hover:text-[#16a34a]"
            >
              Kurslar
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#directions"
              className="group relative py-2 text-[14px] font-medium text-[#59636b] transition-colors duration-300 hover:text-[#16a34a]"
            >
              Yo'nalishlar
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#results"
              className="group relative py-2 text-[14px] font-medium text-[#59636b] transition-colors duration-300 hover:text-[#16a34a]"
            >
              Natijalar
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#mentors"
              className="group relative py-2 text-[14px] font-medium text-[#59636b] transition-colors duration-300 hover:text-[#16a34a]"
            >
              Mentorlar
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="group relative py-2 text-[14px] font-medium text-[#59636b] transition-colors duration-300 hover:text-[#16a34a]"
            >
              Biz haqimizda
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

          <li>
            <a
              href="#blog"
              className="group relative py-2 text-[14px] font-medium text-[#59636b] transition-colors duration-300 hover:text-[#16a34a]"
            >
              Blog
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#16a34a] shadow-[0_0_8px_rgba(22,163,74,0.5)] transition-all duration-300 group-hover:w-full" />
            </a>
          </li>

        </ul>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">

          <a
            href="tel:+998886657777"
            className="group flex items-center gap-2 text-[14px] font-semibold text-[#26323a] transition-colors duration-300 hover:text-[#16a34a]"
          >
            <Phone
              size={17}
              className="text-[#16a34a] transition-transform duration-300 group-hover:scale-110"
            />
            <span>+998 88 665 77 77</span>
          </a>

          <a
            href="#courses"
            className="group flex items-center gap-3 rounded-full bg-[#16a34a] px-6 py-3 text-[14px] font-bold text-white shadow-[0_8px_20px_rgba(22,163,74,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#15803d] hover:shadow-[0_12px_28px_rgba(22,163,74,0.35)] active:translate-y-0"
          >
            Kursga yozilish
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#e3e8e6] text-[#26323a] transition-all duration-300 hover:border-[#16a34a] hover:text-[#16a34a] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-[1200px] rounded-[20px] border border-[#edf1ef] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] lg:hidden">

          <div className="flex flex-col gap-2">

            <a
              href="#courses"
              onClick={() => setOpen(false)}
              className="group relative rounded-xl px-4 py-3 text-base font-medium text-[#59636b] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a]"
            >
              Kurslar
              <span className="absolute bottom-1 left-4 h-[2px] w-0 rounded-full bg-[#16a34a] transition-all duration-300 group-hover:w-8" />
            </a>

            <a
              href="#directions"
              onClick={() => setOpen(false)}
              className="group relative rounded-xl px-4 py-3 text-base font-medium text-[#59636b] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a]"
            >
              Yo'nalishlar
              <span className="absolute bottom-1 left-4 h-[2px] w-0 rounded-full bg-[#16a34a] transition-all duration-300 group-hover:w-8" />
            </a>

            <a
              href="#results"
              onClick={() => setOpen(false)}
              className="group relative rounded-xl px-4 py-3 text-base font-medium text-[#59636b] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a]"
            >
              Natijalar
              <span className="absolute bottom-1 left-4 h-[2px] w-0 rounded-full bg-[#16a34a] transition-all duration-300 group-hover:w-8" />
            </a>

            <a
              href="#mentors"
              onClick={() => setOpen(false)}
              className="group relative rounded-xl px-4 py-3 text-base font-medium text-[#59636b] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a]"
            >
              Mentorlar
              <span className="absolute bottom-1 left-4 h-[2px] w-0 rounded-full bg-[#16a34a] transition-all duration-300 group-hover:w-8" />
            </a>

            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="group relative rounded-xl px-4 py-3 text-base font-medium text-[#59636b] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a]"
            >
              Biz haqimizda
              <span className="absolute bottom-1 left-4 h-[2px] w-0 rounded-full bg-[#16a34a] transition-all duration-300 group-hover:w-8" />
            </a>

            <a
              href="#blog"
              onClick={() => setOpen(false)}
              className="group relative rounded-xl px-4 py-3 text-base font-medium text-[#59636b] transition-all duration-300 hover:bg-[#f0fdf4] hover:text-[#16a34a]"
            >
              Blog
              <span className="absolute bottom-1 left-4 h-[2px] w-0 rounded-full bg-[#16a34a] transition-all duration-300 group-hover:w-8" />
            </a>

            <div className="my-2 h-px bg-[#edf1ef]" />

            <a
              href="tel:+998886657777"
              className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-[#26323a] transition-colors hover:text-[#16a34a]"
            >
              <Phone size={18} className="text-[#16a34a]" />
              +998 88 665 77 77
            </a>

            <a
              href="#courses"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#16a34a] py-3.5 text-base font-bold text-white shadow-[0_8px_20px_rgba(22,163,74,0.25)] transition-all duration-300 hover:bg-[#15803d] hover:shadow-[0_12px_28px_rgba(22,163,74,0.35)]"
            >
              Kursga yozilish
              <ArrowRight size={18} />
            </a>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;