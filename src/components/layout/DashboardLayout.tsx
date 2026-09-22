import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Eye, LogOut, Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useProfile } from "@/hooks/useProfile";

const navItems = [
  { title: "ღონისძიებები", url: "/dashboard/events" },
  { title: "სტუმრები", url: "/dashboard/attendees" },
  { title: "ანალიტიკა", url: "/dashboard/analytics" },
  { title: "ინტეგრაციები", url: "/dashboard/integrations" },
  { title: "პარამეტრები", url: "/dashboard/settings" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { user, signOut } = useAuth();
  const { data: profile } = useProfile();
  const navigate = useNavigate();

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1480px] items-center gap-5 px-4 sm:px-7 lg:px-10">
          <Link to="/dashboard/events" className="mr-3 shrink-0">
            <Logo size="sm" />
          </Link>
          <nav className="hidden flex-1 items-center gap-1 lg:flex" aria-label="Dashboard ნავიგაცია">
            {navItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                activeClassName="bg-foreground text-background hover:bg-foreground hover:text-background"
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto hidden items-center gap-3 sm:flex">
            {profile?.company_slug && (
              <Button variant="outline" size="sm" className="rounded-full bg-card" asChild>
                <Link to={`/company/${profile.company_slug}`}>
                  <Eye className="mr-2 h-4 w-4" /> კომპანიის გვერდი
                </Link>
              </Button>
            )}
            {user && <span className="hidden max-w-[170px] truncate text-xs text-muted-foreground xl:block">{user.email}</span>}
            <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground" onClick={handleSignOut} aria-label="გასვლა">
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
          <button
            type="button"
            className="ml-auto rounded-full border border-border bg-card p-2.5 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "მენიუს დახურვა" : "მენიუს გახსნა"}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-card px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-[1480px] flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.url}
                  to={item.url}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground"
                  activeClassName="bg-foreground text-background"
                >
                  {item.title}
                </NavLink>
              ))}
              {profile?.company_slug && (
                <Link to={`/company/${profile.company_slug}`} className="rounded-xl px-4 py-3 text-sm font-semibold">
                  კომპანიის გვერდი
                </Link>
              )}
              <button onClick={handleSignOut} className="mt-2 flex items-center gap-2 border-t border-border px-4 pt-4 text-left text-sm text-muted-foreground">
                <LogOut className="h-4 w-4" /> გასვლა
              </button>
            </div>
          </nav>
        )}
      </header>
      <main ref={mainRef} className="dashboard-content mx-auto w-full max-w-[1480px] px-4 py-7 sm:px-7 sm:py-9 lg:px-10 lg:py-12">
        {children}
      </main>
    </div>
  );
}
