import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  Flower2,
  Menu,
  Music2,
  Sparkles,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { Logo } from "@/components/Logo";
const providedEventImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/813825514_122111973069326157_2053786015877639402_n-SCae0ARkWItTMMCjdD3LASw0EwSs4G.jpg";
const birthdayImage = "/images/mix-hall-birthday.png";
const teenPartyImage = "/images/mix-hall-teen-party.png";
const corporateImage = "/images/mix-hall-corporate.png";

const occasions = [
  { title: "ბავშვთა დაბადების დღე", label: "ფერადი და დაუვიწყარი", image: birthdayImage },
  { title: "თინეიჯერების წვეულება", label: "მუსიკა და ენერგია", image: teenPartyImage },
  { title: "კორპორაციული საღამო", label: "გუნდის განსაკუთრებული დღე", image: corporateImage },
  { title: "ბოლო ზარი და გამოსაშვები", label: "ახალი ეტაპის აღნიშვნა", image: teenPartyImage },
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
        <section className="relative overflow-hidden bg-[#122522] pt-20 text-[#fbf7ed]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(228,200,124,.16),transparent_25%),radial-gradient(circle_at_92%_75%,rgba(141,49,72,.24),transparent_32%)]" />
          <div className="absolute right-[-8%] top-[12%] text-[18rem] font-black leading-none tracking-[-.12em] text-white/[.025]">MIX</div>
          <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-16">
            <div className="relative z-10 max-w-2xl lg:pb-10">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#e4c87c]/30 bg-white/[.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[.22em] text-[#e4c87c]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e4c87c] shadow-[0_0_14px_#e4c87c]" />
                სადღესასწაულო სივრცე · თბილისი
              </div>
              <h1 className="text-balance text-[clamp(3.5rem,7vw,7.4rem)] font-semibold leading-[.9] tracking-[-.08em]">
                საღამო,
                <span className="editorial-title block font-medium italic text-[#e4c87c]">რომელიც რჩება.</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                თქვენი იდეა, ჩვენი სივრცე და მუსიკა, რომელიც ყველა სტუმარს ერთ რიტმში აერთიანებს.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/auth" className="group inline-flex items-center gap-3 rounded-full bg-[#e4c87c] px-7 py-4 font-bold text-[#122522] transition hover:-translate-y-0.5 hover:bg-white">
                  დაგეგმეთ ღონისძიება <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>
                <a href="#events" className="inline-flex items-center gap-2 px-3 py-3 font-bold text-white/75 transition hover:text-[#e4c87c]">
                  ნახეთ ფორმატები <span className="text-lg">↓</span>
                </a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6 text-sm text-white/55">
                <div><strong className="mr-2 text-2xl text-white">01</strong>ერთი გუნდი სრულად</div>
                <div><strong className="mr-2 text-2xl text-white">∞</strong>თქვენი სტილი, თქვენი ღამე</div>
              </div>
            </div>

            <div className="relative min-h-[480px] lg:min-h-[680px]">
              <div className="absolute -inset-3 rounded-[2.75rem] border border-[#e4c87c]/20 lg:rotate-3" />
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#263e3a] shadow-[0_30px_90px_rgba(0,0,0,.35)] lg:rotate-[-2deg]">
                <img src={providedEventImage} alt="DJ MIX HALL-ის სცენაზე" className="h-full w-full object-cover object-center opacity-95 saturate-[.88] transition duration-700 hover:scale-[1.025]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122522] via-transparent to-black/10" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 sm:p-8">
                  <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[.22em] text-[#e4c87c]">LIVE ENERGY</p><p className="text-lg font-semibold">შექმენი შენი მომენტი</p></div>
                  <Music2 className="h-7 w-7 text-[#e4c87c]" />
                </div>
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
                დაგვიკ��ვშირდით <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 py-10">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <Logo size="sm" />
          <p className="text-sm text-[#756f64]">© {new Date().getFullYear()} MIX HALL. ყველა უ���ლება დაცულია.</p>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold">ზემოთ <ChevronDown className="h-4 w-4 rotate-180" /></a>
        </div>
      </footer>
    </div>
  );
}
