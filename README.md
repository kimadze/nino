# MIX HALL

სადღესასწაულო სივრცის ვებსაიტი და ღონისძიებების მართვის აპი.

## ლოკალურად გაშვება

საჭიროა Node.js 20 ან უფრო ახალი ვერსია.

```bash
npm ci
npm run dev
```

გარემოს ცვლადები შეინახეთ ადგილობრივ `.env` ფაილში:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

შესამოწმებლად გაუშვით `npm run build` და `npx tsc --noEmit -p tsconfig.app.json`.
