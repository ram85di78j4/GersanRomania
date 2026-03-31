# Ghid Complet: Configurare și Sincronizare Sanity CMS cu gersanromania.ro

## 📋 Rezumat Verificare

✅ **Instalare Corectă:**
- Dependențe Sanity instalate în `package.json`
- Schema-uri create în `sanity/schemas/`
- Integrare Next.js configurată în `src/lib/sanity/`
- Fișiere de configurare create: `sanity.config.ts`, `sanity.cli.ts`
- Sanity Studio integrat în Next.js la `/studio`

## 🚀 Pași pentru Activare Completă

### Pasul 1: Instalează Dependențele Noi

```bash
cd C:\Users\ram85\PythonProject\Gersan_Romania\led-landing
npm install
```

Aceasta va instala:
- `next-sanity` - Pentru integrarea Sanity Studio în Next.js
- `@sanity/vision` - Pentru testarea query-urilor GROQ
- `styled-components` - Necesar pentru Sanity Studio UI

### Pasul 2: Creează Proiect Sanity

```bash
# Instalează Sanity CLI global (dacă nu e deja instalat)
npm install -g @sanity/cli

# Login la Sanity
sanity login

# Creează proiect nou
sanity projects create

# Urmează instrucțiunile:
# - Project name: Gersan Romania
# - Use default dataset configuration: Yes
# - Dataset name: production
```

**Important:** Notează `Project ID` - vei avea nevoie de el!

### Pasul 3: Configurează Variabilele de Mediu

Creează fișierul `.env.local` în rădăcina proiectului:

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz  # Înlocuiește cu Project ID-ul tău
NEXT_PUBLIC_SANITY_DATASET=production

# Variabilele SMTP și Telegram (dacă le ai deja configurate)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=office@gersanromania.ro
SMTP_PASS=your-app-password
SMTP_FROM=office@gersanromania.ro

TELEGRAM_BOT_TOKEN=your-bot-token
TELEGRAM_CHAT_ID=your-chat-id
```

### Pasul 4: Configurează CORS pentru Sanity

Trebuie să adaugi domeniul tău în setările Sanity:

1. Mergi la https://www.sanity.io/manage
2. Selectează proiectul "Gersan Romania"
3. Settings → API → CORS Origins
4. Adaugă:
   - `http://localhost:3000` (pentru development)
   - `https://gersanromania.ro` (pentru production)
   - `https://www.gersanromania.ro` (dacă folosești www)

### Pasul 5: Testează Sanity Studio Local

```bash
# Pornește serverul de development
npm run dev

# Deschide în browser:
# http://localhost:3000/studio
```

Ar trebui să vezi Sanity Studio integrat în aplicația ta Next.js!

### Pasul 6: Creează Conținut Inițial

În Sanity Studio (`/studio`), creează:

1. **Autori** (minimum 1)
   - Nume, rol, bio, imagine

2. **Categorii** (minimum 3-4)
   - Iluminat LED
   - Automatizare Smart
   - Încărcare EV
   - Eficiență Energetică

3. **Proiecte** (transferă din placeholder)
   - AFI Palace
   - Kaufland EV
   - Primăverii Residence
   - Fabrica Dacia
   - Hotel Marriott
   - Glovo Fleet

4. **Articole** (transferă din placeholder)
   - Viitorul Iluminatului LED
   - Ghid Instalare Stații EV
   - Automatizare Casa 2024
   - Eficiență Energetică LED

## 🌐 Sincronizare cu gersanromania.ro

### Opțiunea 1: Vercel (Recomandat)

1. **Conectează repository-ul la Vercel:**
   ```bash
   # Instalează Vercel CLI
   npm install -g vercel
   
   # Login
   vercel login
   
   # Deploy
   vercel
   ```

2. **Configurează variabilele de mediu în Vercel:**
   - Dashboard → Project → Settings → Environment Variables
   - Adaugă toate variabilele din `.env.local`

3. **Configurează domeniul custom:**
   - Settings → Domains
   - Adaugă `gersanromania.ro`
   - Urmează instrucțiunile pentru DNS

### Opțiunea 2: Netlify

1. **Conectează repository-ul:**
   - New site from Git
   - Selectează repository-ul GitHub

2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment variables:**
   - Site settings → Environment variables
   - Adaugă toate variabilele

4. **Domeniu custom:**
   - Domain management → Add custom domain
   - `gersanromania.ro`

### Opțiunea 3: Server Propriu (VPS/Dedicated)

```bash
# Pe server
git clone https://github.com/your-username/GersanRomania.git
cd GersanRomania/led-landing

# Instalează dependențe
npm install

# Creează .env.local cu variabilele de mediu

# Build pentru production
npm run build

# Pornește cu PM2
npm install -g pm2
pm2 start npm --name "gersan-romania" -- start
pm2 save
pm2 startup
```

**Configurare Nginx:**
```nginx
server {
    listen 80;
    server_name gersanromania.ro www.gersanromania.ro;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🔄 Workflow de Actualizare Conținut

### Pentru Editare Conținut:

1. **Accesează Sanity Studio:**
   - Production: `https://gersanromania.ro/studio`
   - Sau: `https://gersan-romania.sanity.studio` (dacă ai deployed studio separat)

2. **Editează/Adaugă conținut**

3. **Publică** (butonul Publish)

4. **Așteaptă 60 secunde** pentru revalidare
   - Sau rebuild manual pentru actualizare imediată

### Pentru Actualizări Code:

```bash
# Local
git add .
git commit -m "Descriere modificări"
git push origin main

# Vercel/Netlify vor face deploy automat
# Pentru server propriu:
ssh user@server
cd GersanRomania/led-landing
git pull
npm install
npm run build
pm2 restart gersan-romania
```

## 📊 Structura Finală

```
led-landing/
├── sanity/                          ✅ Schema-uri Sanity
│   ├── sanity.config.ts            ✅ Configurare Studio
│   ├── sanity.cli.ts               ✅ Configurare CLI
│   ├── schema.ts                   ✅ Schema principală
│   └── schemas/                    ✅ Schema-uri individuale
│       ├── project.ts
│       ├── article.ts
│       ├── category.ts
│       └── author.ts
│
├── src/
│   ├── app/
│   │   └── studio/[[...index]]/    ✅ Sanity Studio integrat
│   │       ├── page.tsx
│   │       └── layout.tsx
│   │
│   └── lib/sanity/                 ✅ Integrare Next.js
│       ├── client.ts
│       ├── config.ts
│       ├── queries.ts
│       └── index.ts
│
├── .env.local                      ⚠️ Trebuie creat
└── package.json                    ✅ Dependențe actualizate
```

## ✅ Checklist Final

- [ ] Instalat dependențe: `npm install`
- [ ] Creat proiect Sanity
- [ ] Configurat `.env.local` cu Project ID
- [ ] Configurat CORS în Sanity dashboard
- [ ] Testat Studio local: `http://localhost:3000/studio`
- [ ] Creat conținut inițial (autori, categorii)
- [ ] Migrat proiecte din placeholder în Sanity
- [ ] Migrat articole din placeholder în Sanity
- [ ] Configurat deployment (Vercel/Netlify/VPS)
- [ ] Configurat domeniu custom `gersanromania.ro`
- [ ] Testat site-ul în production
- [ ] Verificat că conținutul se actualizează

## 🆘 Troubleshooting

### Studio nu se încarcă:
```bash
# Verifică dependențele
npm install next-sanity @sanity/vision styled-components

# Rebuild
npm run build
```

### Conținut nu apare:
1. Verifică `.env.local` - Project ID corect?
2. Verifică că conținutul e publicat (nu draft)
3. Așteaptă 60s pentru revalidare
4. Check browser console pentru erori

### Erori CORS:
- Adaugă domeniul în Sanity dashboard → Settings → API → CORS Origins

## 📞 Suport

- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs

---

**Website-ul funcționează cu sau fără Sanity - placeholder data este fallback automat!**
