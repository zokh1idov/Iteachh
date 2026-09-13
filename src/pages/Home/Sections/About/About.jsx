import  { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

 function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id='about' className="bg-white text-slate-900 py-20 px-4 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm hover:bg-emerald-100/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Fikrlar
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Bitiruvchilarimiz nima deyishadi?
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl">
            Bizning darslarimiz va muhitimiz haqida real o'quvchilarimiz tomonidan bildirilgan xolis fikrlar bilan tanishing.
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-end gap-3 mb-6">
            <button 
              onClick={() => setActiveTab(activeTab === 0 ? 1 : 0)}
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="Oldingi"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveTab(activeTab === 0 ? 1 : 0)}
              className="p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:text-emerald-600 hover:border-emerald-500 hover:bg-emerald-50/30 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              aria-label="Keyingi"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="overflow-hidden">
            {activeTab === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="/imgs/с1.jpg" 
                            alt="Diana Sabirova" 
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-white">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            Diana Sabirova
                          </h3>
                          <p className="text-emerald-600 font-medium text-xs tracking-wide">
                            Grafik Dizayn Bitiruvchisi
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                      "iTEACH menga qisqa fursatda Grafik dizayn sohasini o'rganishda va birinchi buyurtmalarimni olishda katta yordam berdi. Mentorlar har doim qo'llab-quvvatlashadi."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">5.0</span>
                  </div>
                </div>

                <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="/imgs/с2.jpg" 
                            alt="Chittigul Parpiyeva" 
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-white">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            Chittigul Parpiyeva
                          </h3>
                          <p className="text-emerald-600 font-medium text-xs tracking-wide">
                            SMM PRO Bitiruvchisi
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                      "SMM bo'yicha juda ko'p narsani bilardim deb o'ylagan edim, lekin bu kursda amaliyot butunlay boshqacha ekanini ko'rdim. Portfolio yig'ishga katta imkoniyat berildi."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">5.0</span>
                  </div>
                </div>

                <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="/imgs/с3.jpg" 
                            alt="Champahon Birnarsa" 
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-white">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            Dilnura Numanova 
                          </h3>
                          <p className="text-emerald-600 font-medium text-xs tracking-wide">
                            Frontend Dasturlash Bitiruvchisi
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                      "8 oylik Frontend darslaridan so'ng amaliyot o'tab, hozirda mahalliy studiyada ish boshladim. Dars videolari telegram guruhda saqlanishi juda qulay."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=200" 
                            alt="Madina Rahimova" 
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-white">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            Madina Rahimova
                          </h3>
                          <p className="text-emerald-600 font-medium text-xs tracking-wide">
                            UI/UX Dizayn Bitiruvchisi
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                      "Dizayn sohasiga noldan kirib keldim. Kursdagi amaliy loyihalar va ustozlarning doimiy nazorati tufayli xalqaro kompaniyada stajirovka boshladim."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">5.0</span>
                  </div>
                </div>

                <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" 
                            alt="Jahongir Aliyev" 
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-white">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            Jahongir Aliyev
                          </h3>
                          <p className="text-emerald-600 font-medium text-xs tracking-wide">
                            Python Backend Bitiruvchisi
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                      "Backend yo'nalishi bo'yicha kuchli poydevor oldim. Haqiqiy loyihalar bilan ishlash tajribasi menga ish intervyularidan muvaffaqiyatli o'tishga yordam berdi."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">5.0</span>
                  </div>
                </div>

                <div className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <img 
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" 
                            alt="Sardor Karimov" 
                            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all duration-300 group-hover:scale-105"
                          />
                          <span className="absolute -bottom-1 -right-1 bg-emerald-500 p-1 rounded-full text-white">
                            <Star className="w-3 h-3 fill-current" />
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                            Sardor Karimov
                          </h3>
                          <p className="text-emerald-600 font-medium text-xs tracking-wide">
                            Flutter Mobile Bitiruvchisi
                          </p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-slate-300 group-hover:text-emerald-200 transition-colors" />
                    </div>
                    <p className="text-slate-600 leading-relaxed text-sm group-hover:text-slate-800 transition-colors">
                      "Mobil dasturlash sohasidagi eng so'nggi texnologiyalarni o'rgandik. Dars jarayonida o'zimning birinchi ilovamni App Store va Play Market'ga joyladim."
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">5.0</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center gap-2 mt-10">
            <button 
              onClick={() => setActiveTab(0)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeTab === 0 ? 'w-8 bg-emerald-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
              aria-label="Sahifa 1"
            />
            <button 
              onClick={() => setActiveTab(1)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeTab === 1 ? 'w-8 bg-emerald-500' : 'w-2.5 bg-slate-200 hover:bg-slate-300'}`}
              aria-label="Sahifa 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default  About;