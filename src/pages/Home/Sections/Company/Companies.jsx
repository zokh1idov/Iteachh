import  { useState } from 'react';
import { ChevronLeft, ChevronRight,  TrendingUp, Award, Users, MapPin, ArrowUpRight } from 'lucide-react';

 function Companies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  return (
    <div id="results" className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 font-sans text-slate-900">
      {}
      <div className="mx-auto max-w-[1200px] bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-100">
        
        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-50 text-emerald-700 font-semibold text-xs tracking-wider uppercase">
                STATISTIKA VA HAMKORLAR
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              1000+ muvaffaqiyatli bitiruvchilarimiz ish joylari
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Biz nufuzli tashkilotlar bilan doimiy muloqotdamiz. Eng yaxshi bitiruvchilarimiz o'z faoliyatlarini nufuzli milliy hamda xalqaro IT korxonalarda davom ettirishmoqda.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col items-center">
            {}
            <div className="w-full relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[260px] flex flex-col justify-between group">
              
              {currentSlide === 0 && (
                <div className="animate-fadeIn space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md uppercase tracking-wider">Ko'rsatkich</span>
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    STATISTIKA: 95% ISH BILAN TA'MINLANGAN
                  </h3>
                  <div className="flex items-center gap-6 pt-2">
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      Bitiruvchilarimizning katta qismi yetakchi IT kompaniyalarda o'z faoliyatlarini muvaffaqiyatli davom ettirmoqda.
                    </p>
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center rounded-full border-4 border-emerald-500 bg-emerald-50/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <span className="text-xl font-black text-slate-900">95%</span>
                    </div>
                  </div>
                </div>
              )}

              {currentSlide === 1 && (
                <div className="animate-fadeIn space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md uppercase tracking-wider">Xalqaro daraja</span>
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    XALQARO HAMKORLAR: 50+ IT STRUKTURALAR
                  </h3>
                  <div className="flex items-center gap-6 pt-2">
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      AQSh, Yevropa va Osiyo mamlakatlaridagi top IT kompaniyalar bilan strategik sheriklik o'rnatilgan.
                    </p>
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center rounded-full border-4 border-blue-500 bg-blue-50/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <span className="text-xl font-black text-slate-900">50+</span>
                    </div>
                  </div>
                </div>
              )}

              {currentSlide === 2 && (
                <div className="animate-fadeIn space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-violet-100 text-violet-800 text-xs font-bold rounded-md uppercase tracking-wider">Daromad</span>
                    <Users className="w-6 h-6 text-violet-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                    O'RTACHA START MAOSH: $500+
                  </h3>
                  <div className="flex items-center gap-6 pt-2">
                    <p className="text-slate-600 text-sm leading-relaxed flex-1">
                      Bitiruvchi muhandislarimiz birinchi uch oy ichida yuqori maoshli mutaxassis darajasiga yetishadi.
                    </p>
                    <div className="relative w-20 h-20 shrink-0 flex items-center justify-center rounded-full border-4 border-violet-500 bg-violet-50/50 shadow-inner group-hover:scale-105 transition-transform duration-300">
                      <span className="text-lg font-black text-slate-900">$500+</span>
                    </div>
                  </div>
                </div>
              )}

              {}
              <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentSlide(0)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === 0 ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-200 hover:bg-slate-400'
                    }`}
                  />
                  <button
                    onClick={() => setCurrentSlide(1)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === 1 ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-200 hover:bg-slate-400'
                    }`}
                  />
                  <button
                    onClick={() => setCurrentSlide(2)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === 2 ? 'w-8 bg-slate-900' : 'w-2.5 bg-slate-200 hover:bg-slate-400'
                    }`}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {}
        <div className="pt-8 border-t border-slate-100 space-y-8">
          
          <div>
            <h2 className="text-lg sm:text-xl font-black text-slate-900 uppercase tracking-wide">
              BITIRUVCHILARIMIZ ISHLOVCHI ETALON KOMPANIYALAR:
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-500 mt-1 uppercase tracking-wider">
              ETALON COMPANIYALAR VA HUDUDLAR: TASHKENT VA FARG'ONA
            </p>
          </div>

          <div className="space-y-10">

            {}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-widest border-b border-slate-100 pb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Tashkent Shahri</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    S
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-blue-600 transition-colors">
                    Sapton
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    E
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-slate-900 transition-colors">
                    Epam Systems
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    U
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-emerald-600 transition-colors">
                    Ucell Tech
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    P
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-amber-600 transition-colors">
                    Payme Lab
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

              </div>
            </div>

            {}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-slate-700 font-bold text-xs uppercase tracking-widest border-b border-slate-100 pb-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Farg'ona Viloyati</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    K
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-indigo-600 transition-colors">
                    KURZ
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    L
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-yellow-600 transition-colors">
                    Layokti
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    K
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-teal-600 transition-colors">
                    KarenAtayun
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-5 flex items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-slate-900 cursor-pointer overflow-hidden">
                  <div className="w-9 h-9 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-110 transition-transform">
                    F
                  </div>
                  <span className="font-bold text-slate-900 text-lg tracking-tight group-hover:text-rose-600 transition-colors">
                    Fergana IT Hub
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-all absolute top-2 right-2" />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
export default Companies;