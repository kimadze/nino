# MIX HALL

MIX HALL-ის ღონისძიებების დაგეგმვისა და მართვის აპლიკაცია. პროექტი აერთიანებს საჯარო Landing გვერდს, ავტორიზაციას, ღონისძიებების Dashboard-ს, სტუმრების მართვას, ანალიტიკას, ინტეგრაციებსა და პარამეტრებს.

## v0.app-ში გაშვება

1. გახსენით [v0.app](https://v0.app/).
2. აირჩიეთ **Import from GitHub**.
3. მიუთითეთ `kimadze/nino` რეპოზიტორია და `main` განშტოება.
4. Landing გვერდი მუშაობს დამატებითი გარემოს ცვლადების გარეშე.
5. Dashboard-ის სრული ფუნქციონალისთვის დაამატეთ ქვემოთ მოცემული Supabase ცვლადები.

## გარემოს ცვლადები

შექმენით `.env` ფაილი `.env.example`-ის მიხედვით:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

თუ ეს ცვლადები ჯერ არ არის დამატებული, აპი Landing გვერდს ჩვეულებრივ აჩვენებს და Dashboard-ის მისამართებზე გასაგებ setup ეკრანს გახსნის.

## ლოკალურად გაშვება

```sh
npm install
npm run dev
```

Production build:

```sh
npm run build
```

## Vercel

`vercel.json` შეიცავს Vite SPA rewrite-ს, ამიტომ პირდაპირი ბმულები და დაცული მარშრუტები refresh-ის შემდეგაც სწორად იხსნება.

## ტექნოლოგიები

- React + TypeScript
- Vite
- Tailwind CSS + shadcn/ui
- Supabase
- Recharts
