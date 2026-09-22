import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import mixHallPhoto from "@/assets/mix-hall-celebration.jpg";

const events = [
  { icon: "✦", title: "ბავშვთა დაბადების დღე", description: "ფერადი დეკორი, თამაშები და სიხარულით სავსე დღე." },
  { icon: "♫", title: "თინეიჯერების წვეულება", description: "მუსიკა, განათება და წვეულება მათივე სტილში." },
  { icon: "◆", title: "კორპორაციული საღამო", description: "გუნდური შეხვედრები და განსაკუთრებული საღამოები." },
  { icon: "✧", title: "ბოლო ზარი და გამოსაშვები", description: "სკოლის მნიშვნელოვანი დღის დაუვიწყარი აღნიშვნა." },
];

const questions = [
  { q: "როგორ დავჯავშნო დარბაზი?", a: "დაგვიკავშირდით დაჯავშნის ღილაკით და მოგვიყევით სასურველი თარიღისა და ღონისძიების შესახებ. დეტალებს ერთად შევათანხმებთ." },
  { q: "შეიძლება ღონისძიების ინდივიდუალურად დაგეგმვა?", a: "დიახ. ფორმატს, დეკორსა და პროგრამას თქვენს იდეასა და სტუმრების რაოდენობას მოვარგებთ." },
  { q: "რა შედის მომსახურებაში?", a: "მომსახურების შემადგენლობა ღონისძიების ტიპზეა დამოკიდებული. დაგეგმვისას ყველა დეტალს წინასწარ შეგითანხმებთ." },
];

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  return <div className="min-h-screen bg-[#f8f6ef] text-[#20251f]">
    <header className="sticky top-0 z-50 border-b border-[#ddd9c9] bg-[#f8f6ef]/95 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" aria-label="MIX HALL — მთავარი გვერდი"><Logo className="!text-[#252820]" /></Link>
        <nav className="hidden items-center gap-9 text-sm font-semibold md:flex" aria-label="მთავარი ნავიგაცია">
          <a href="#events" className="hover:text-[#a47d13]">ღონისძიებები</a><a href="#about" className="hover:text-[#a47d13]">ჩვენ შესახებ</a><a href="#questions" className="hover:text-[#a47d13]">კითხვები</a>
        </nav>
        <div className="hidden items-center gap-5 md:flex"><Link to="/auth" className="text-sm font-semibold hover:text-[#a47d13]">შესვლა</Link><Link to="/auth" className="inline-flex items-center gap-2 rounded-full bg-[#d6aa28] px-5 py-3 text-sm font-bold text-[#20251f] transition-colors hover:bg-[#efc54c]">დაჯავშნა <ArrowUpRight size={16} /></Link></div>
        <button type="button" className="rounded-lg p-2 md:hidden" aria-label={menuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="flex flex-col gap-4 border-t border-[#ddd9c9] px-6 py-5 font-semibold md:hidden" aria-label="მობილური ნავიგაცია"><a href="#events" onClick={() => setMenuOpen(false)}>ღონისძიებები</a><a href="#about" onClick={() => setMenuOpen(false)}>ჩვენ შესახებ</a><a href="#questions" onClick={() => setMenuOpen(false)}>კითხვები</a><Link to="/auth">დაჯავშნა →</Link></nav>}
    </header>

    <main>
      <section className="bg-[#1b2521] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 lg:grid-cols-[.95fr_1.05fr] lg:gap-16 lg:px-10 lg:py-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d6aa28]/40 bg-[#d6aa28]/10 px-4 py-2 text-xs font-bold tracking-[.12em] text-[#f5d675]"><span className="text-base">✦</span> MIX HALL · სადღესასწაულო სივრცე</div>
            <h1 className="max-w-xl font-display text-[clamp(3rem,5.8vw,5.8rem)] font-bold leading-[1.07] tracking-[-.055em]">თქვენი დღე <span className="text-[#e3ba43]">განსაკუთრებულ</span> სივრცეში.</h1>
            <p className="mt-7 max-w-lg text-base leading-8 text-[#d1d7cc] sm:text-lg">დაბადების დღე, ბოლო ზარი თუ კორპორაციული საღამო — MIX HALL-ში ყველა ზეიმს თავისი ხასიათი აქვს.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><Link to="/auth" className="inline-flex items-center gap-3 rounded-full bg-[#e3ba43] px-7 py-4 font-bold text-[#1b2521] transition-colors hover:bg-[#f4d576]">დაგეგმეთ თქვენი ზეიმი <ArrowRight size={18} /></Link><a href="#events" className="inline-flex items-center gap-2 px-3 py-4 font-semibold text-white hover:text-[#e3ba43]">იხილეთ ღონისძიებები <ArrowUpRight size={17} /></a></div>
            <div className="mt-12 border-t border-white/15 pt-6 text-sm text-[#d1d7cc]">თქვენი იდეა · ჩვენი სივრცე · დაუვიწყარი მოგონება</div>
          </div>
          <div className="relative"><div className="absolute -inset-3 rounded-[2rem] border border-[#e3ba43]/35" aria-hidden="true" /><img src={mixHallPhoto} alt="ბავშვები MIX HALL-ის სადღესასწაულო სივრცეში" className="relative aspect-[5/4] w-full rounded-[1.5rem] object-cover object-[center_48%] shadow-2xl lg:aspect-[4/4.2]" fetchPriority="high" /><div className="absolute bottom-5 left-5 rounded-xl bg-[#1b2521]/90 px-5 py-4 text-sm font-semibold text-[#fff3c4] shadow-lg backdrop-blur-sm">რეალური მომენტები MIX HALL-იდან ✦</div></div>
        </div>
      </section>

      <section id="events" className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-11 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#a47d13]">ღონისძიებები</p><h2 className="max-w-xl font-display text-4xl font-bold leading-tight tracking-[-.045em] sm:text-5xl">ყველა მიზეზი ზეიმისთვის</h2></div><p className="max-w-sm leading-7 text-[#676b61]">აირჩიეთ ფორმატი, რომელიც თქვენთვის მნიშვნელოვანია. დანარჩენს ერთად დავგეგმავთ.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{events.map((event, i) => <article key={event.title} className="group flex min-h-[300px] flex-col rounded-[1.75rem] border border-[#e4dfce] bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#d6aa28] hover:shadow-lg"><div className="flex items-start justify-between"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f8e9b5] text-3xl text-[#9b7510]" aria-hidden="true">{event.icon}</span><span className="text-xs font-bold text-[#a6a393]">0{i + 1} / 04</span></div><div className="mt-auto"><h3 className="mb-3 font-display text-2xl font-bold leading-tight">{event.title}</h3><p className="text-sm leading-6 text-[#676b61]">{event.description}</p></div></article>)}</div></div></section>

      <section id="about" className="bg-white py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#a47d13]">MIX HALL</p><h2 className="font-display text-4xl font-bold leading-tight tracking-[-.045em] sm:text-5xl">სივრცე, რომელიც თქვენს იდეას ერგება.</h2><p className="mt-6 max-w-lg leading-8 text-[#676b61]">ზოგი დღე განსაკუთრებულ ადგილს იმსახურებს. ჩვენ დაგეხმარებით, შეარჩიოთ ღონისძიების ფორმატი და წინასწარ გაიაროთ ყველა მნიშვნელოვანი დეტალი.</p><Link to="/auth" className="mt-7 inline-flex items-center gap-2 font-bold text-[#97740f] hover:gap-3">დაგვიკავშირდით <ArrowRight size={18} /></Link></div><div className="divide-y divide-[#e7e2d4] border-y border-[#e7e2d4]">{[{ n: "01", title: "გვითხარით თქვენი იდეა", body: "შეარჩიეთ თარიღი და მოგვიყევით როგორი დღე წარმოგიდგენიათ." }, { n: "02", title: "ერთად შევათანხმოთ დეტალები", body: "განვიხილოთ სივრცე, გაფორმება და თქვენი ღონისძიების საჭიროებები." }, { n: "03", title: "ისიამოვნეთ ზეიმით", body: "მოიწვიეთ სტუმრები და შექმენით ახალი მოგონებები." }].map((step) => <div key={step.n} className="grid grid-cols-[55px_1fr] gap-4 py-7"><span className="font-display text-2xl font-bold text-[#b18d2a]">{step.n}</span><div><h3 className="font-display text-xl font-bold">{step.title}</h3><p className="mt-2 leading-7 text-[#676b61]">{step.body}</p></div></div>)}</div></div></section>

      <section className="bg-[#1b2521] py-20 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-10"><div><p className="mb-4 text-sm font-bold text-[#e3ba43]">✦ თქვენი განსაკუთრებული დღე იწყება აქ</p><h2 className="max-w-2xl font-display text-4xl font-bold leading-tight tracking-[-.045em] sm:text-5xl">გავხადოთ თქვენი ზეიმი დაუვიწყარი.</h2></div><Link to="/auth" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#e3ba43] px-7 py-4 font-bold text-[#1b2521] hover:bg-[#f4d576]">დაჯავშნეთ ახლა <ArrowUpRight size={18} /></Link></div></section>

      <section id="questions" className="mx-auto max-w-4xl px-6 py-20 lg:py-28"><div className="mb-10 text-center"><p className="mb-3 text-xs font-bold uppercase tracking-[.2em] text-[#a47d13]">ხშირი კითხვები</p><h2 className="font-display text-4xl font-bold tracking-[-.045em]">კიდევ რამე გაინტერესებთ?</h2></div><div className="divide-y divide-[#ddd9c9] border-y border-[#ddd9c9]">{questions.map((item, i) => <div key={item.q}><button type="button" className="flex w-full items-center justify-between gap-5 py-6 text-left font-semibold" aria-expanded={openQuestion === i} onClick={() => setOpenQuestion(openQuestion === i ? null : i)}>{item.q}<ChevronDown size={19} className={`shrink-0 transition-transform ${openQuestion === i ? "rotate-180" : ""}`} /></button>{openQuestion === i && <p className="max-w-2xl pb-6 leading-7 text-[#676b61]">{item.a}</p>}</div>)}</div></section>
    </main>
    <footer className="border-t border-[#ddd9c9] py-10"><div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-10"><Link to="/"><Logo className="!text-[#252820]" /></Link><p className="text-sm text-[#676b61]">© {new Date().getFullYear()} MIX HALL. ყველა უფლება დაცულია.</p><a href="#" className="text-sm font-semibold hover:text-[#a47d13]">გვერდის დასაწყისში ↑</a></div></footer>
  </div>;
}
