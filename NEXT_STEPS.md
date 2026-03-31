# 🚀 Pași Următori pentru Activare Sanity CMS

## ✅ Ce Este Deja Configurat:

- ✅ Proiect Sanity creat: **Gersan Romania**
- ✅ Project ID: **ea7y15d2**
- ✅ Organization: **Production**
- ✅ Dataset: **production** (private)
- ✅ Dependențe instalate
- ✅ Fișiere de configurare create
- ✅ Build testat și funcțional

---

## 📋 Pași Rapizi (5 minute):

### **Pasul 1: Creează `.env.local`**

Copiază fișierul template:

```bash
# În terminal, rulează:
copy .env.local.template .env.local
```

SAU creează manual fișierul `.env.local` în rădăcina proiectului cu:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=ea7y15d2
NEXT_PUBLIC_SANITY_DATASET=production
```

### **Pasul 2: Configurează CORS în Sanity**

1. Deschide: https://www.sanity.io/manage/project/ea7y15d2
2. Mergi la: **Settings** → **API** → **CORS Origins**
3. Click **Add CORS origin**
4. Adaugă:
   - Origin: `http://localhost:3000`
   - Allow credentials: ✅ (bifat)
   - Click **Save**
5. Adaugă al doilea origin:
   - Origin: `https://gersanromania.ro`
   - Allow credentials: ✅ (bifat)
   - Click **Save**

### **Pasul 3: Pornește Serverul**

```bash
npm run dev
```

Deschide în browser:
- **Website:** http://localhost:3000
- **Sanity Studio:** http://localhost:3000/studio

### **Pasul 4: Login în Studio**

1. Mergi la http://localhost:3000/studio
2. Vei fi redirecționat să te autentifici
3. Login cu contul tău Sanity
4. Vei vedea Sanity Studio integrat!

---

## 📝 Creează Conținut Inițial:

### **1. Autori (Authors)**
- Click **Authors** în sidebar
- Click **Create new**
- Completează:
  - Name: Numele tău
  - Slug: generat automat
  - Role: "Content Manager" sau "Technical Writer"
  - Bio: Scurtă descriere
  - Image: Upload poză (opțional)
- Click **Publish**

### **2. Categorii (Categories)**
Creează 4 categorii:

1. **Iluminat LED**
   - Slug: `iluminat-led`
   - Color: `cyan`
   - Description: "Soluții LED pentru iluminat comercial și industrial"

2. **Automatizare Smart**
   - Slug: `automatizare-smart`
   - Color: `purple`
   - Description: "Sisteme inteligente de control și automatizare"

3. **Încărcare EV**
   - Slug: `incarcare-ev`
   - Color: `green`
   - Description: "Infrastructură de încărcare pentru vehicule electrice"

4. **Eficiență Energetică**
   - Slug: `eficienta-energetica`
   - Color: `pink`
   - Description: "Optimizare consum energetic și sustenabilitate"

### **3. Proiecte (Projects)**
Transferă proiectele din placeholder:

**Exemplu - AFI Palace:**
- Title: "Centru Comercial AFI Palace"
- Slug: `centru-comercial-afi-palace`
- Type: "Comercial"
- Location: "București"
- Year: "2023"
- Description: "Sistem complet de iluminat LED..."
- Image: Upload imagine
- Technologies: ["LED Premium", "Control DMX", "Senzori de mișcare"]
- Equipment: ["Panouri LED 600x600", "Spoturi LED", "Benzi LED RGB"]
- Results: 
  - Metric: "Reducere consum energetic", Value: "65%"
  - Metric: "Durată de viață", Value: "50,000 ore"
- Glow Color: "cyan"
- Featured: ✅

Repetă pentru celelalte 5 proiecte din `src/data/placeholder/projects.ts`

### **4. Articole (Articles)**
Transferă articolele din placeholder:

**Exemplu:**
- Title: "Viitorul Iluminatului LED în Spațiile Comerciale"
- Slug: `viitorul-iluminatului-led-spatii-comerciale`
- Excerpt: "Descoperă cum tehnologia LED..."
- Category: Selectează "Iluminat LED"
- Author: Selectează autorul creat
- Published At: Alege data
- Read Time: 5
- Featured: ✅
- Content: Scrie conținutul complet (sau copiază din placeholder)

---

## 🌐 Deploy pe gersanromania.ro:

### **Opțiunea 1: Vercel (Recomandat)**

```bash
# Instalează Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Configurează variabilele de mediu în Vercel Dashboard:
# - NEXT_PUBLIC_SANITY_PROJECT_ID=ea7y15d2
# - NEXT_PUBLIC_SANITY_DATASET=production
# - (+ SMTP și Telegram dacă le ai)

# Adaugă domeniul custom în Vercel:
# Settings → Domains → Add gersanromania.ro
```

### **Opțiunea 2: Netlify**

1. Conectează repo pe Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=ea7y15d2`
   - `NEXT_PUBLIC_SANITY_DATASET=production`
4. Adaugă domeniu custom: `gersanromania.ro`

---

## ✅ Verificare Finală:

- [ ] `.env.local` creat cu Project ID
- [ ] CORS configurat în Sanity dashboard
- [ ] `npm run dev` rulează fără erori
- [ ] Studio accesibil la `/studio`
- [ ] Login în Studio funcționează
- [ ] Creat minimum 1 autor
- [ ] Creat 4 categorii
- [ ] Creat minimum 1 proiect
- [ ] Creat minimum 1 articol
- [ ] Conținutul apare pe website
- [ ] Deploy pe production
- [ ] Domeniu configurat

---

## 🆘 Troubleshooting:

### Studio nu se încarcă:
```bash
# Verifică .env.local
cat .env.local

# Restart server
npm run dev
```

### Eroare CORS:
- Verifică că ai adăugat `http://localhost:3000` în CORS origins
- Verifică că "Allow credentials" este bifat

### Conținut nu apare:
- Verifică că ai publicat (nu doar salvat draft)
- Așteaptă 60 secunde pentru revalidare
- Sau rebuild: `npm run build && npm start`

---

## 📞 Link-uri Utile:

- **Sanity Dashboard:** https://www.sanity.io/manage/project/ea7y15d2
- **Sanity Docs:** https://www.sanity.io/docs
- **Next.js Docs:** https://nextjs.org/docs

---

**Gata! Website-ul este complet funcțional cu Sanity CMS!** 🎉
