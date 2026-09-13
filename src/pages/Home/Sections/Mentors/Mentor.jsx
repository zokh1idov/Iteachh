
import { Award,  Send, Sparkles } from 'lucide-react';
import { LiaLinkedin } from 'react-icons/lia';

 function Mentor() {
  return (
    <section id='mentors' className="bg-white text-slate-900 py-20 px-4 transition-all duration-300">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                <img 
                  src="/imgs/a.png" 
                  alt="Rahmatulloh Abdulaziz" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Rahmatulloh Abdulaziz
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
              SMM & Marketing
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi.
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

          <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                <img 
                  src="/imgs/a1.png" 
                  alt="Asadbek Turg'unboyev" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Asadbek Turg'unboyev
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
              Sun'iy Intellekt (AI)
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi.
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

          <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                <img 
                  src="/imgs/а2.png" 
                  alt="Abdulhafiz Yusubjonov" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Abdulhafiz Yusubjonov
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
              3D Max Interior Design
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi.
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

          <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                <img 
                  src="/imgs/а3.png" 
                  alt="Abduhalil Abduhalilov" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Abduhalil Abduhalilov
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
              Python dasturlash
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi.
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

          <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                <img 
                  src="/imgs/а4.png" 
                  alt="Sherali Bobakalonov" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Sherali Bobakalonov
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
              Frontend dasturlash
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi.
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

          <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-emerald-500/20 group-hover:ring-emerald-500 transition-all duration-300 shadow-md">
                <img 
                  src="/imgs/а5.png" 
                  alt="Abdurahmon Karimjonov" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <span className="absolute bottom-0 right-0 bg-emerald-500 text-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Award className="w-4 h-4" />
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
              Abdurahmon Karimjonov
            </h3>
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mt-2 mb-4 border border-emerald-500/20">
              Backend dasturlash
            </span>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Ko'p yillik amaliy tajribaga ega bo'lib, o'quvchilarga professional darslar o'tadi va real portfolio ustida ishlashni o'rgatadi.
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
        </div>
      </div>
    </section>
  );
}
export default Mentor;