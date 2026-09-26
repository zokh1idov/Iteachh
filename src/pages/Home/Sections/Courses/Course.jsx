import { useEffect, useState } from "react";
import { ArrowRight, Code2, Megaphone, Brain, Boxes } from "lucide-react";
import { db } from "../../../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const COURSE_VISUALS = [
  {
    keywords: ["front", "react", "html", "css", "javascript", " js"],
    icon: Code2,
    image: "/imgs/slider7.jfif",
  },
  {
    keywords: ["back", "node", "server", "sql", "php", "java"],
    icon: Code2,
    image: "/imgs/slide1.avif",
  },
  {
    keywords: ["3d", "max", "blender", "design", "interior"],
    icon: Boxes,
    image: "/imgs/slider3.webp",
  },
  {
    keywords: ["ai", "sun'iy", "intellekt", "intelligence", "chatgpt"],
    icon: Brain,
    image: "/imgs/slider2.avif",
  },
  {
    keywords: ["smm", "marketing", "digital"],
    icon: Megaphone,
    image: "/imgs/slider1.jpg",
  },
  {
    keywords: ["python"],
    icon: Code2,
    image: "/imgs/slider5.jfif",
  },
];

const DEFAULT_VISUAL = { icon: Code2, image: "/imgs/slider1.jpg" };

function getCourseVisual(title = "") {
  const lower = title.toLowerCase();
  const match = COURSE_VISUALS.find((v) =>
    v.keywords.some((k) => lower.includes(k))
  );
  return match || DEFAULT_VISUAL;
}

function CourseCard({ course, index }) {
  const { icon: Icon, image } = getCourseVisual(course.title);

  return (
    <article
      className="group overflow-hidden rounded-[16px] border border-[#e7ece9] bg-white p-2.5 shadow-[0_5px_20px_rgba(10,21,34,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#b7e8c8] hover:shadow-[0_18px_40px_rgba(22,163,74,0.12)]"
      style={{
        animation: `courseIn 650ms ${index * 90}ms ease-out both`,
      }}
    >
      <div className="relative h-[155px] overflow-hidden rounded-[10px] bg-[#f0fdf4]">
        <img
          src={image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute left-3 top-3 flex h-9 w-9 -translate-y-2 items-center justify-center rounded-[10px] bg-white/90 text-[#16a34a] opacity-0 shadow-md backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon size={18} />
        </div>
      </div>

      <div className="px-1.5 pb-1 pt-3">
        <h3 className="min-h-[21px] text-[20px] font-bold leading-tight text-[#111827]">
          {course.title}
        </h3>

        <div className="mt-2.5 space-y-1 text-[9px] leading-[1.4] text-[#78837f]">
          <p className="text-[15px]">
            O'quvchilar:{" "}
            <span className="font-semibold text-[#39443f]">
              {course.students || 0}
            </span>
            <span className="mx-2 text-[#d5dcd8]">•</span>
            Holat:{" "}
            <span className="font-semibold text-[#39443f]">
              {course.status || "Faol"}
            </span>
          </p>

          <p className="text-[15px]">
            Mentor:{" "}
            <span className="font-semibold text-[#39443f]">
              {course.mentor}
            </span>
          </p>
        </div>

        <div className="mt-3 flex gap-1.5">
          <button
            type="button"
            className="flex-1 rounded-[7px] bg-[#e6f7ed] py-2 text-[13px] font-bold text-[#16a34a] transition-all duration-300 hover:bg-[#d2f1df] hover:-translate-y-[1px] cursor-pointer"
          >
            Batafsil ma'lumot
          </button>

          <button
            type="button"
            className="group/button flex-1 rounded-[7px] bg-[#16a34a] py-2 text-[13px] font-bold text-white transition-all duration-300 hover:bg-[#15803d] hover:-translate-y-[1px] hover:shadow-[0_7px_16px_rgba(22,163,74,0.25)] cursor-pointer"
          >
            <span className="inline-flex items-center justify-center gap-1">
              Kursga yozilish
              <ArrowRight
                size={10}
                className="transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </article>
  );
}

function Course() {
  const [courses, setCourses] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "courses"), (snap) => {
      setCourses(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  useEffect(() => {
    if (courses.length === 0) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % courses.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [courses.length]);

  const visibleCourses = courses.slice(0, visibleCount);

  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#f8faf9] px-5 py-16 lg:px-6 lg:py-20 scroll-mt-24"
    >
      <style>{`
        @keyframes courseIn {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes titleIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="mx-auto max-w-[1200px]">
        <div
          className="mb-9 text-center"
          style={{ animation: "titleIn 700ms ease-out both" }}
        >
          <span className="inline-flex rounded-full border border-[#b9ebca] bg-[#ecfdf3] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#16a34a]">
            O'QUV DASTURLARI
          </span>

          <h2 className="mt-3 text-[32px] font-extrabold tracking-tight text-[#111827] lg:text-[40px]">
            Barcha kurslar
          </h2>

          <h4 className="mx-auto mt-2 max-w-[600px] text-[11px] text-[#8a9490]">
            O'zingizga mos kursni tanlang va professional sohangizni bugunoq
            boshlang
          </h4>
        </div>

        {courses.length === 0 ? (
          <p className="text-center text-[#8a9490]">
            Hozircha kurslar qo'shilmagan
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visibleCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} index={index} />
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-2">
              {courses.map((course, index) => (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={course.title}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    index === active
                      ? "w-7 bg-[#16a34a]"
                      : "w-1.5 bg-[#cfd8d3] hover:bg-[#8ed3a7]"
                  }`}
                />
              ))}
            </div>

            {courses.length > 6 && (
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={() =>
                    setVisibleCount((prev) =>
                      prev === courses.length ? 6 : courses.length
                    )
                  }
                  className="rounded-full bg-[#16a34a] px-6 py-2 text-sm font-bold text-white hover:bg-[#15803d] transition-colors"
                >
                  {visibleCount === courses.length
                    ? "Kamroq ko'rsatish"
                    : "Barchasini ko'rish"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default Course;