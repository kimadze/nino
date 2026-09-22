import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Flower2,
  Menu,
  Music2,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import eventKids from "@/assets/event-hackathon-ai.jpg";
import eventTeen from "@/assets/event-chill-code-workshop.jpg";
import eventCorporate from "@/assets/event-startup-weekend.jpg";
import eventGraduation from "@/assets/event-vibe-coding-summit.jpg";

const occasions = [
  { title: "ბავშვთა დაბადების დღე", label: "ფერადი და დაუვიწყარი", image: eventKids },
  { title: "თინეიჯერების წვეულება", label: "მუსიკა და ენერგია", image: eventTeen },
  { title: "კორპორაციული საღამო", label: "გუნდის განსაკუთრებული დღე", image: eventCorporate },
  { title: "ბოლო ზარი და გამოსაშვები", label: "ახალი ეტაპის აღნიშვნა", image: eventGraduation },
];

const advantages = [
  { icon: Flower2, title: "დეკორი", text: "სივრცის ხასიათზე და თქვენს იდეაზე მორგებული გაფორმება." },
  { icon: UtensilsCrossed, title: "მენიუ", text: "სუფრა, რომელიც ფორმატსა და სტუმრების გემოვნებას ერგება." },
  { icon: Music2, title: "მუსიკა და განათება", text: "სწორი ატმოსფერო პირველი სტუმრიდან ბოლო ცეკვამდე." },
  { icon: Sparkles, title: "სრული ორგანიზება", text: "ერთიანი გუნდი, რომელიც ყველა მნიშვნელოვან დეტალს უვლის." },
];

const steps = [
  ["01", "მოგვიყევით ჩანაფიქრი", "თარიღი, სტუმრების რაოდენობა და როგორი განწყობა წარმოგიდგენიათ."],
  ["02", "ერთად შევქმნათ გეგმა", "შევათანხმებთ სივრცეს, პროგრამას, დეკორსა და მენიუს."],
  ["03", "ისიამოვნეთ თქვენი დღით", "ღონისძიების მიმდინარეობასა და დეტალებზე MIX HALL იზრუნებს."],
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f8f5ed] text-[#25231f]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f8f5ed]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link to="/" aria-label="MIX HALL — მთავარი გვერდი">
            <Logo size="sm" />
          </Link>
          <nav className="hidden items-center gap-9 text-sm font-semibold text-[#5f5a51] md:flex" aria-label="მთავარი ნავიგაცია">
            <a href="#events" className="hover:text-[#25231f]">ღონისძიებები</a>
            <a href="#experience" className="hover:text-[#25231f]">სივრცე</a>
            <a href="#process" className="hover:text-[#25231f]">როგორ ვმუშაობთ</a>
          </nav>
          <div className="hidden items-center gap-5 md:flex">
            <Link to="/auth" className="text-sm font-semibold text-[#5f5a51] hover:text-[#25231f]">შესვლა</Link>
            <Link to="/auth" className="inline-flex items-center gap-2 rounded-full bg-[#25231f] px-5 py-3 text-sm font-bold text-white hover:bg-[#b89435] hover:text-[#25231f]">
              დაჯავშნა <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <button
            type="button"
            className="rounded-full border border-black/10 p-2.5 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/5 bg-[#f8f5ed] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 font-semibold">
              <a href="#events" onClick={() => setMenuOpen(false)}>ღონისძიებები</a>
              <a href="#experience" onClick={() => setMenuOpen(false)}>სივრცე</a>
              <a href="#process" onClick={() => setMenuOpen(false)}>როგორ ვმუშაობთ</a>
              <Link to="/auth" className="text-[#9b7a25]">დაჯავშნა →</Link>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-screen pt-20">
          <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-12 lg:py-20">
            <div className="relative z-10">
              <p className="eyebrow mb-7">სადღესასწაულო სივრცე · თბილისი</p>
              <h1 className="max-w-2xl text-balance text-[clamp(3.2rem,6.2vw,6.8rem)] font-semibold leading-[.98] tracking-[-.065em]">
                სივრცე თქვენი
                <span className="editorial-title block font-medium italic text-[#a98227]">განსაკუთრებული</span>
                დღისთვის
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#6d675d] sm:text-lg">
                ელეგანტური გარემო, ყურადღებით დაგეგმილი დეტალები და გუნდი,
                რომელიც თქვენს იდეას დაუვიწყარ მოვლენად აქცევს.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/auth" className="inline-flex items-center gap-3 rounded-full bg-[#25231f] px-7 py-4 font-bold text-white hover:bg-[#b89435] hover:text-[#25231f]">
                  დაგეგმეთ თქვენი დღე <ArrowRight className="h-5 w-5" />
                </Link>
                <a href="#events" className="inline-flex items-center gap-2 rounded-full border border-black/15 px-7 py-4 font-bold hover:border-[#b89435] hover:text-[#8f6d1d]">
                  ღონისძიებების ნახვა
                </a>
              </div>
              <div className="mt-12 flex items-center gap-3 text-sm text-[#6d675d]">
                <CalendarDays className="h-5 w-5 text-[#a98227]" />
                ინდივიდუალური დაგეგმვა თითოეული ღონისძიებისთვის
              </div>
            </div>

            <div className="relative grid h-[560px] grid-cols-12 grid-rows-12 gap-3 lg:h-[680px]">
              <div className="col-span-8 row-span-9 overflow-hidden rounded-[2rem] bg-[#ded7c7]">
                <img src={eventCorporate} alt="MIX HALL-ის ღონისძიების სივრცე" className="h-full w-full object-cover saturate-[.72] sepia-[.12]" />
              </div>
              <div className="col-span-4 col-start-9 row-span-6 row-start-2 overflow-hidden rounded-[2rem] bg-[#ded7c7]">
                <img src={eventKids} alt="სადღესასწაულო ღონისძიება" className="h-full w-full object-cover saturate-[.72] sepia-[.12]" />
              </div>
              <div className="col-span-6 col-start-7 row-span-5 row-start-8 overflow-hidden rounded-[2rem] border-[10px] border-[#f8f5ed] bg-[#ded7c7]">
                <img src={eventGraduation} alt="საღამოს ღონისძიება" className="h-full w-full object-cover saturate-[.7] sepia-[.15]" />
              </div>
              <div className="absolute -bottom-3 left-5 rounded-2xl bg-[#25231f] px-5 py-4 text-sm text-white shadow-xl">
                <span className="block text-2xl font-semibold text-[#d5b45d]">ერთი სივრცე</span>
                ბევრი მნიშვნელოვანი მოგონებისთვის
              </div>
            </div>
          </div>
        </section>

        <section id="events" className="bg-[#25231f] py-24 text-white lg:py-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow mb-4 text-[#d5b45d]">ღონისძიებები</p>
                <h2 className="max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  ყველა დღეს თავისი ხასიათი აქვს
                </h2>
              </div>
              <p className="max-w-md leading-7 text-white/60">
                თითოეულ ფორმატს ვქმნით სტუმრების, განწყობისა და თქვენი სურვილების მიხედვით.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {occasions.map((occasion, index) => (
                <article key={occasion.title} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-white/5">
                    <img src={occasion.image} alt={occasion.title} className="h-full w-full object-cover saturate-[.62] transition duration-500 group-hover:scale-[1.035] group-hover:saturate-100" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                    <span className="absolute left-5 top-5 text-xs font-bold tracking-[.18em] text-white/70">0{index + 1}</span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[.16em] text-[#e0c477]">{occasion.label}</p>
                      <h3 className="text-xl font-semibold leading-snug">{occasion.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24 lg:py-32">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <p className="eyebrow mb-4">MIX HALL-ის გამოცდილება</p>
              <h2 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                ყველაფერი, რაც სრულყოფილ დღეს ქმნის
              </h2>
              <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6d675d]">
                თითოეული ელემენტი ერთ საერთო იდეას ემსახურება — თქვენ და თქვენს სტუმრებს მხოლოდ ზეიმით ტკბობა დაგრჩეთ.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[2rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <article key={item.title} className="bg-[#fbf9f3] p-8 lg:min-h-[280px] lg:p-9">
                  <item.icon className="h-7 w-7 text-[#a98227]" strokeWidth={1.5} />
                  <h3 className="mt-16 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6d675d]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="border-y border-black/10 bg-white/55 py-24 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
            <div>
              <p className="eyebrow mb-4">მარტივი პროცესი</p>
              <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">თქვენი იდეიდან სრულ ღონისძიებამდე</h2>
              <p className="mt-6 max-w-md leading-8 text-[#6d675d]">
                დაგეგმვას თავიდანვე გასაგებს და სასიამოვნოს ვხდით.
              </p>
            </div>
            <div className="border-t border-black/15">
              {steps.map(([number, title, text]) => (
                <div key={number} className="grid gap-4 border-b border-black/15 py-7 sm:grid-cols-[70px_1fr] sm:py-9">
                  <span className="editorial-title text-3xl text-[#b89435]">{number}</span>
                  <div>
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="mt-2 leading-7 text-[#6d675d]">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[2.4rem] bg-[#25231f] px-7 py-20 text-white sm:px-12 lg:px-20 lg:py-24">
            <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#d5b45d]/20" />
            <div className="absolute -right-4 -top-8 h-52 w-52 rounded-full border border-[#d5b45d]/25" />
            <div className="relative flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="eyebrow mb-5 text-[#d5b45d]">თქვენი თარიღი</p>
                <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                  დავიწყოთ განსაკუთრებული დღის დაგეგმვა
                </h2>
              </div>
              <Link to="/auth" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#d5b45d] px-7 py-4 font-bold text-[#25231f] hover:bg-white">
                დაგვიკავშირდით <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Logo size="sm" />
          <p className="text-sm text-[#756f64]">© {new Date().getFullYear()} MIX HALL. ყველა უფლება დაცულია.</p>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold">ზემოთ <ChevronDown className="h-4 w-4 rotate-180" /></a>
        </div>
      </footer>
    </div>
  );
}
