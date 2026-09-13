import { UserCheck, BookOpen, Briefcase, Award } from 'lucide-react';

function Proccess() {
  const steps = [
    {
      number: "01",
      title: "Ro'yxatdan o'ting",
      description: "O'zingiz qiziqqan yo'nalish bo'yicha bepul konsultatsiya so'rovini qoldiring.",
      icon: UserCheck
    },
    {
      number: "02",
      title: "Darslarni boshlang",
      description: "Haftada 3 kun, 2 soatdan maxsus sinfxonalarda tajribali mentorlar bilan darslar.",
      icon: BookOpen
    },
    {
      number: "03",
      title: "Real loyihalar",
      description: "Mentorlar yordamida o'z portfoliosingiz uchun real keyslarni ishlab chiqing.",
      icon: Briefcase
    },
    {
      number: "04",
      title: "Sertifikat va Ish",
      description: "Sertifikatga ega bo'ling va hamkor kompaniyalarimizda o'z faoliyatingizni boshlang.",
      icon: Award
    }
  ];

  return (
    <section  className="bg-white text-slate-900 py-20 px-4 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-50/50 text-emerald-600 font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm hover:bg-emerald-100/50 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            TA'LIM TIZIMI
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Ta'lim qanday amalga oshiriladi?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="group relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-500/40 hover:-translate-y-2 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-emerald-500 group-hover:scale-110 transition-transform">
                      {step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Proccess;