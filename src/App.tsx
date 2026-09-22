import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Logo } from "@/components/Logo";
import Landing from "@/pages/Landing";

const BackendApp = lazy(() => import("@/BackendApp"));
const backendConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
);

function SetupState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-12">
      <div className="lux-card w-full max-w-xl p-8 text-center sm:p-12">
        <Logo size="lg" className="mx-auto" />
        <p className="eyebrow mt-8">სისტემის დაკავშირება</p>
        <h1 className="mt-4 text-3xl font-bold sm:text-4xl">მართვის სივრცე თითქმის მზადაა</h1>
        <p className="mx-auto mt-5 max-w-md leading-8 text-muted-foreground">
          Dashboard-ის გასააქტიურებლად v0 ან Vercel პროექტში დაამატეთ
          Supabase-ის გარემოს ცვლადები.
        </p>
        <a href="/" className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 font-bold text-background hover:bg-primary hover:text-primary-foreground">
          მთავარ გვერდზე დაბრუნება
        </a>
      </div>
    </div>
  );
}

export default function App() {
  if (backendConfigured) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <BackendApp />
      </Suspense>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<SetupState />} />
      </Routes>
    </BrowserRouter>
  );
}
