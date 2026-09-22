import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { lovable } from "@/integrations/lovable";
import { supabase } from "@/integrations/supabase/client";

const GoogleIcon = () => (
  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09A6.5 6.5 0 0 1 5.49 12c0-.73.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.45 1.18 4.93l3.66-2.84z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

export default function Auth() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  useEffect(() => {
    if (user) navigate("/dashboard/events", { replace: true });
  }, [user, navigate]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email: loginEmail, password: loginPassword });
    setLoading(false);
    if (error) toast.error(error.message);
    else {
      toast.success("კეთილი იყოს თქვენი დაბრუნება");
      navigate("/dashboard/events");
    }
  };

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: { data: { full_name: signupName }, emailRedirectTo: window.location.origin },
    });
    setLoading(false);
    if (error) toast.error(error.message);
    else {
      toast.success("ანგარიში შექმნილია. დასადასტურებლად შეამოწმეთ ელფოსტა.");
      navigate("/dashboard/events");
    }
  };

  const handleGoogle = async () => {
    const { error } = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin });
    if (error) toast.error(error.message || "Google-ით შესვლა ვერ მოხერხდა");
  };

  const fieldClass = "h-12 rounded-xl border-border bg-[#fbfaf6] px-4 focus-visible:ring-primary";

  return (
    <div className="grid min-h-screen bg-background lg:grid-cols-[.9fr_1.1fr]">
      <section className="relative hidden overflow-hidden bg-[#25231f] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full border border-[#d5b45d]/15" />
        <div className="absolute -left-2 top-10 h-64 w-64 rounded-full border border-[#d5b45d]/20" />
        <Link to="/" className="relative z-10 w-fit"><Logo tone="gold" size="lg" /></Link>
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow mb-6 text-[#d5b45d]">MIX HALL · მართვის სივრცე</p>
          <h1 className="text-balance text-5xl font-semibold leading-tight xl:text-6xl">
            ყველა ღონისძიება ერთ დახვეწილ სივრცეში.
          </h1>
          <p className="mt-7 max-w-md leading-8 text-white/60">
            მართეთ რეგისტრაციები, სტუმრები და შედეგები მარტივად.
          </p>
        </div>
        <p className="relative z-10 text-xs text-white/35">© {new Date().getFullYear()} MIX HALL</p>
      </section>

      <section className="flex min-h-screen items-center justify-center px-5 py-12 sm:px-10">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center justify-between lg:hidden">
            <Logo size="md" />
            <Link to="/" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <ArrowLeft className="h-4 w-4" /> მთავარი
            </Link>
          </div>
          <div className="mb-8">
            <p className="eyebrow mb-3">კეთილი იყოს თქვენი დაბრუნება</p>
            <h2 className="text-3xl font-bold sm:text-4xl">MIX HALL-ის მართვა</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">შედით ან შექმენით ანგარიში ღონისძიებების სამართავად.</p>
          </div>

          <Tabs defaultValue="login">
            <TabsList className="mb-7 grid h-12 w-full grid-cols-2 rounded-xl bg-muted p-1">
              <TabsTrigger value="login" className="h-10 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">შესვლა</TabsTrigger>
              <TabsTrigger value="signup" className="h-10 rounded-lg data-[state=active]:bg-card data-[state=active]:shadow-sm">რეგისტრაცია</TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-0">
              <form onSubmit={handleLogin} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email-login">ელფოსტა</Label>
                  <Input id="email-login" type="email" placeholder="name@example.com" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-login">პაროლი</Label>
                  <Input id="password-login" type="password" placeholder="••••••••" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className={fieldClass} />
                </div>
                <Button type="submit" className="h-12 w-full rounded-xl bg-foreground font-bold text-background hover:bg-primary hover:text-primary-foreground" disabled={loading}>
                  {loading ? "გთხოვთ, დაელოდოთ…" : "შესვლა"}
                </Button>
              </form>
              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />ან<span className="h-px flex-1 bg-border" /></div>
              <Button variant="outline" className="h-12 w-full rounded-xl bg-card font-semibold" onClick={handleGoogle}><GoogleIcon />Google-ით გაგრძელება</Button>
            </TabsContent>

            <TabsContent value="signup" className="mt-0">
              <form onSubmit={handleSignup} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name-signup">სახელი და გვარი</Label>
                  <Input id="name-signup" placeholder="თქვენი სახელი" required value={signupName} onChange={(e) => setSignupName(e.target.value)} className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-signup">ელფოსტა</Label>
                  <Input id="email-signup" type="email" placeholder="name@example.com" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} className={fieldClass} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-signup">პაროლი</Label>
                  <Input id="password-signup" type="password" placeholder="••••••••" required value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} className={fieldClass} />
                </div>
                <Button type="submit" className="h-12 w-full rounded-xl bg-foreground font-bold text-background hover:bg-primary hover:text-primary-foreground" disabled={loading}>
                  {loading ? "გთხოვთ, დაელოდოთ…" : "ანგარიშის შექმნა"}
                </Button>
              </form>
              <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />ან<span className="h-px flex-1 bg-border" /></div>
              <Button variant="outline" className="h-12 w-full rounded-xl bg-card font-semibold" onClick={handleGoogle}><GoogleIcon />Google-ით გაგრძელება</Button>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
