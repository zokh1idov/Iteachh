import {
  BsInstagram,
  BsYoutube,
  BsFacebook,
  BsSend,
  BsGeoAlt,
  BsCompass,
  BsEnvelope,
} from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-white text-slate-900 border-t border-slate-200/80 pt-16 pb-8 transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 1-Ustun: Logo va Haqida */}
          <div className="flex flex-col items-start">
            <a
              href="/"
              className="flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80 mb-5"
            >
              <img
                src="/imgs/logo.png"
                alt="iTeach"
                className="h-9 w-auto lg:h-11"
              />
            </a>
            <p className="text-slate-600 text-sm leading-relaxed">
              iTeach Academy — zamonaviy talabdagi texnologik yo'nalishlar
              bo'yicha mustahkam bilim va real tajribani beruvchi professional
              ta'lim maskani.
            </p>
          </div>

          {/* 2-Ustun: Kurslar */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 tracking-wide uppercase text-xs">
              Kurslar
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Dasturlash
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Dizayn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  SMM & Marketing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Sun'iy Intellekt
                </a>
              </li>
            </ul>
          </div>

          {/* 3-Ustun: Kompaniya */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 tracking-wide uppercase text-xs">
              Kompaniya
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Natijalar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-emerald-600 transition-colors inline-block"
                >
                  Vakansiyalar
                </a>
              </li>
            </ul>
          </div>

          {/* 4-Ustun: Bog'lanish */}
          <div>
            <h4 className="text-base font-bold text-slate-900 mb-4 tracking-wide uppercase text-xs">
              Bog'lanish
            </h4>
            <div className="flex flex-col gap-3 text-sm text-slate-600 mb-6 font-medium">
              <div className="flex items-start gap-2">
                <BsGeoAlt className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-800">Manzil:</strong> Farg'ona
                  sh, Sayligoh ko'chasi 18/2 uy
                </span>
              </div>
              <div className="flex items-start gap-2">
                <BsCompass className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                <span>
                  <strong className="text-slate-800">Mo'ljal:</strong> Emirates
                  kafesi ro'parasida
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BsEnvelope className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  <strong className="text-slate-800">Email:</strong>{" "}
                  www.iteachstudy@gmail.com
                </span>
              </div>
            </div>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                aria-label="Telegram"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <BsSend className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <BsInstagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <BsFacebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200/80 text-slate-600 flex items-center justify-center hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/20 transition-all duration-300"
              >
                <BsYoutube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Pastki mualliflik qismi */}
        <div className="pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 iTeach Academy. Barcha huquqlar himoyalangan.</p>
          <p className="text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-500/20">
            Zamonaviy kasblar markazi.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
