import { useEffect, useState } from "react";
import { Award, Send, Sparkles } from "lucide-react";
import { LiaLinkedin } from "react-icons/lia";
import { db } from "../../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const ICONS = [Award, Sparkles];
const DEFAULT_IMAGES = [
  "/imgs/a.png",
  "/imgs/a1.png",
  "/imgs/а2.png",
  "/imgs/а3.png",
  "/imgs/а4.png",
  "/imgs/а5.png",
];

function Mentor() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "mentors"), (snap) => {
      setMentors(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  return (
    <section
      id="mentors"
      className="bg-white text-slate-900 py-20 px-4 transition-all duration-300"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm hover:bg-emerald-100/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            MENTORLAR
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Professional mentorlarimiz
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
            Har bir mentor o'z sohasida yirik tajribaga hamda pedagogik qobiliyatga ega
          </p>
        </div>

        {mentors.length === 0 ? (
          <p className="text-center text-slate-400">
            Hozircha mentorlar qo'shilmagan
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => {
              const Icon = ICONS[index % ICONS.length];
              const image = DEFAULT_IMAGES[index % DEFAULT_IMAGES.length];

              return (
                <div
                  key={mentor.id}
                  className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                      <img
                        src={image}
                        alt={mentor.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {mentor.name}
                  </h3>

                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
                    {mentor.field}
                  </span>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga
                    professional darslar o'tadi va real portfolio ustida
                    ishlashni o'rgatadi.
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-200/60 w-full flex justify-center gap-3">
                    <button className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-colors">
                      <LiaLinkedin className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-emerald-500 hover:text-white transition-colors">
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default Mentor;