import { Code2, LayoutDashboard, Megaphone, Cpu, ArrowRight } from "lucide-react";

const directions = [
  {
    icon: Code2,
    title: "Dasturlash",
    desc: "Frontend, Backend va Python darslari yordamida dunyoning xohlagan nuqtasidan turib ishlang.",
    count: "3 ta kurs",
  },
  {
    icon: LayoutDashboard,
    title: "Dizayn",
    desc: "3D Max Interior Design va zamonaviy UI/UX dizayn qonun-qoidalarini chuqur o'rganing.",
    count: "2 ta kurs",
  },
  {
    icon: Megaphone,
    title: "SMM & Marketing",
    desc: "SMM PRO kursi orqali brendlarni ijtimoiy tarmoqlarda professional rivojlantiring.",
    count: "1 ta kurs",
  },
  {
    icon: Cpu,
    title: "Sun'iy Intellekt (AI)",
    desc: "Neyrotarmoqlar va AI vositalaridan real loyihalarda unumli foydalanishni o'rganing.",
    count: "1 ta kurs",
  },
];

function Directions() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20">
      <style>{`
        @keyframes dirFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dir-in {
          opacity: 0;
          animation: dirFadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .dir-card {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      box-shadow 0.35s ease,
                      border-color 0.35s ease,
                      background-color 0.35s ease;
        }
        .dir-card:hover {
          transform: translateY(-6px);
          border-color: #bbf7d0;
          background-color: #ffffff;
          box-shadow: 0 20px 40px rgba(22, 163, 74, 0.12);
        }
        .dir-icon-wrap {
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
                      background-color 0.35s ease;
        }
        .dir-card:hover .dir-icon-wrap {
          transform: scale(1.08) rotate(-4deg);
          background-color: #dcfce7;
        }
        .dir-arrow {
          transition: transform 0.3s ease;
        }
        .dir-card:hover .dir-arrow {
          transform: translateX(4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .dir-in, .dir-card, .dir-icon-wrap, .dir-arrow {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-5">
        <div className="flex flex-col items-center text-center">
          <span
            className="dir-in mb-5 inline-flex items-center rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-4 py-1.5 text-[13px] font-semibold text-[#16a34a]"
            style={{ animationDelay: "0s" }}
          >
            YO'NALISHLAR
          </span>

          <h2
            className="dir-in font-sora text-[28px] font-bold tracking-tight text-[#0a1522] lg:text-[38px]"
            style={{ animationDelay: "0.08s" }}
          >
            Qaysi yo'nalishni tanlaysiz?
          </h2>

          <p
            className="dir-in mt-4 max-w-[620px] text-[15px] leading-relaxed text-[#6b7a75] lg:text-[16px]"
            style={{ animationDelay: "0.16s" }}
          >
            Har bir yo'nalish eng dolzarb talablar, real loyihalar va amaliy ko'nikmalar asosida tajribali mutaxassislar tomonidan qurilgan.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {directions.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="dir-in dir-card group rounded-[16px] border border-[#eef1f0] bg-[#fafbfa] p-7"
                style={{ animationDelay: `${0.24 + i * 0.08}s` }}
              >
                <div className="dir-icon-wrap flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#f0fdf4]">
                  <Icon size={20} className="text-[#16a34a]" />
                </div>

                <h3 className="mt-5 text-[18px] font-bold text-[#0a1522]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-[420px] text-[14px] leading-relaxed text-[#6b7a75]">
                  {item.desc}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-[#eef1f0] pt-4">
                  <span className="text-[13px] font-semibold text-[#16a34a]">
                    {item.count}
                  </span>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0a1522] transition-colors duration-300 hover:text-[#16a34a]"
                  >
                    Batafsil
                    <ArrowRight size={14} className="dir-arrow" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Directions;