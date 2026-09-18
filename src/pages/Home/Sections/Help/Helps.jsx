import { useState } from "react";
import { Plus } from "lucide-react";

const faqData = [
  {
    q: "Najot Ta'limda qanday kurslar bor?",
    a: "Markazimizda dasturlash, dizayn, SMM & marketing va sun'iy intellekt (AI) yo'nalishlari bo'yicha kurslar mavjud.",
  },
  {
    q: "Til kurslari bormi?",
    a: "Bizda til kurslari mavjud emas. Markazimizda dasturlash, grafik dizayn va marketing yo'nalishlari bo'yicha ta'lim beriladi.",
  },
  {
    q: "Najot Ta'lim ish bilan ta'minlaydimi?",
    a: "Kurslarni muvaffaqiyatli bitirgan o'quvchilarga ma'lum shartlar asosida ish taklifi beriladi. Har oy bitiruvchilarning ishga kirish statistikasi ijtimoiy tarmoqlarda yoritib boriladi.",
  },
  {
    q: "Yosh chegarasi qanday?",
    a: "Markazimizda 16 yoshdan 35 yoshgacha yosh chegarasi mavjud. 14–16 yosh yoki 35 yoshdan yuqori o'quvchilar suhbat asosida o'qishlari mumkin.",
  },
  {
    q: "Kimlarga grant ajratiladi?",
    a: 'Yoshlar ishlari agentligining "Kelajak kasblari" granti asosida o\'qishingiz mumkin. Ariza tasdiqlansa, 6 oygacha 1 mln 300 minggacha kurs to\'lovi qoplab beriladi.',
  },
  {
    q: "Najot Ta'lim qayerda joylashgan?",
    a: "Toshkent shahrida (Xadra, Chilonzor, Chimboy) hamda Farg'ona, Samarqand va Xorazm viloyatlarida filiallar mavjud. Call-markaz: 78 888 98 88.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
    id="Savolar"
      className="border-b border-[#eef1f0] last:border-b-0 transition-colors duration-300 hover:bg-[#f0fdf4]"
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-[15.5px] text-[#0a1522]"
      >
        <span>{item.q}</span>
        <span
          className={`flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? "bg-[#16a34a] text-white rotate-[135deg]" : "text-[#16a34a]"
          }`}
        >
          <Plus size={15} strokeWidth={2.4} />
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-[640px] px-6 pb-5 text-[14px] leading-relaxed text-[#6b7a75]">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Helps() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-22 lg:px-5">
      <h2 className="mb-11 font-sora text-[28px] font-extrabold uppercase leading-tight tracking-tight text-[#0a1522] lg:text-[34px]">
        Ko'p so'raladigan savollar
      </h2>

      <div className="grid grid-cols-1">
        <div className="overflow-hidden rounded-[18px] border border-[#eef1f0] bg-white shadow-[0_1px_2px_rgba(10,21,34,0.03)]">
          {faqData.map((item, idx) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}