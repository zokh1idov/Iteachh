import { useState, useRef, useEffect } from 'react';
import { Phone, Send, User, ChevronDown, Check, Code, Share2, Bot, Layers } from 'lucide-react';

function Consultation() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({ 
    id: 'dasturlash', 
    label: 'Dasturlash', 
    icon: Code 
  });

  const dropdownRef = useRef(null);

  const options = [
    { id: 'dasturlash', label: 'Dasturlash', icon: Code },
    { id: 'smm', label: 'SMM & Marketing', icon: Share2 },
    { id: 'ai', label: "Sun'iy Intellekt (AI)", icon: Bot },
    { id: 'design', label: '3D Max Interior Design', icon: Layers },
  ];

  // Dropdown tashqarisiga bosilganda yopish
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const SelectedIcon = selectedOption.icon;

  return (
    <section id='blog' className="bg-white text-slate-900 py-20 px-4 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-6 shadow-sm hover:bg-emerald-100/50 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              BEPUL KONSULTATSIYA
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Kelajagingizni bugunoq boshlang
            </h2>
            
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Telefon raqamingizni yozib qoldiring, biz sizga qo'ng'iroq qilamiz va barcha savollaringizga batafsil javob berishga harakat qilamiz.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-4 w-full sm:w-auto">
              <div className="p-3 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 block">Tezkor aloqa:</span>
                <a 
                  href="tel:+998886657777" 
                  className="text-xl font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                >
                  +998 88 665 77 77
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Ma'lumotlaringizni qoldiring
            </h3>

            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ismingiz
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Masalan: Davron"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium shadow-sm"
                  />
                  <User className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Telefon raqamingiz
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    placeholder="+998 (__) ___-__-__"
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-sm font-medium shadow-sm"
                  />
                  <Phone className="w-5 h-5 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div ref={dropdownRef} className="relative">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Qiziqayotgan yo'nalishingiz
                </label>
                
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className={`w-full bg-white border ${isOpen ? 'border-emerald-500 ring-4 ring-emerald-500/10' : 'border-slate-200'} rounded-xl px-4 py-3.5 text-slate-900 transition-all text-sm font-medium shadow-sm flex items-center justify-between group cursor-pointer`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                      <SelectedIcon className="w-4 h-4" />
                    </div>
                    <span>{selectedOption.label}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-500' : ''}`} />
                </button>

                {isOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-900/10 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                    {options.map((option) => {
                      const Icon = option.icon;
                      const isSelected = selectedOption.id === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => {
                            setSelectedOption(option);
                            setIsOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-sm font-medium flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected 
                              ? 'bg-emerald-50/70 text-emerald-600' 
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span>{option.label}</span>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-emerald-600" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Yuborish</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Consultation;