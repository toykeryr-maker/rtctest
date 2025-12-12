# Rtc Entertainment - Showcase Website

เว็บไซต์แสดงผลงานและบริการของ Rtc Entertainment ที่ออกแบบด้วยสไตล์ Cyberpunk/Neon Noir

## 🎨 ฟีเจอร์

- ✨ **Hero Section** - ภาพปกสวยงามพร้อม Neon Effects
- 🎯 **Services** - แสดงบริการหลัก 3 ประเภท
- 📊 **Live Metrics** - กราฟแสดงข้อมูล Real-time
- 🖼️ **Portfolio Gallery** - แสดงผลงาน 4 โปรเจค
- 📝 **Contact Form** - ฟอร์มติดต่อพร้อมการตรวจสอบ
- 🌐 **Responsive Design** - ใช้ได้ทั้ง Desktop และ Mobile
- 🎭 **Animations** - Smooth transitions และ entrance effects

## 🛠️ เทคโนโลยี

- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + Custom CSS
- **Routing:** Wouter
- **Animations:** Framer Motion
- **Charts:** Recharts
- **UI Components:** shadcn/ui
- **Build Tool:** Vite

## 📦 การติดตั้ง

### ข้อกำหนด
- Node.js 22+
- pnpm 10+

### ขั้นตอน

1. **Clone หรือแตกไฟล์ zip**
```bash
# หากใช้ git
git clone <repository-url>
cd rtc-entertainment-showcase

# หากใช้ zip
unzip rtc-entertainment-showcase.zip
cd rtc-entertainment-showcase
```

2. **ติดตั้ง Dependencies**
```bash
pnpm install
```

3. **รัน Development Server**
```bash
pnpm dev
```

เว็บไซต์จะเปิดที่ `http://localhost:3000`

4. **Build for Production**
```bash
pnpm build
```

Output จะอยู่ในโฟลเดอร์ `dist/`

## 📁 โครงสร้างโปรเจค

```
rtc-entertainment-showcase/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          # หน้าแรก
│   │   │   ├── Gallery.tsx       # หน้าผลงาน
│   │   │   ├── Contact.tsx       # หน้าติดต่อ
│   │   │   └── NotFound.tsx      # หน้า 404
│   │   ├── components/
│   │   │   └── ui/               # shadcn/ui components
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx  # Theme management
│   │   ├── App.tsx               # Main app + routing
│   │   ├── index.css             # Global styles
│   │   └── main.tsx              # Entry point
│   ├── public/
│   │   └── images/               # Static images
│   └── index.html
├── server/
│   └── index.ts                  # Express server
├── package.json
├── vite.config.ts
├── tsconfig.json
├── DEPLOYMENT_GUIDE.md           # คู่มือการขึ้นโฮส
└── README.md                     # ไฟล์นี้
```

## 🎨 การปรับแต่ง

### เปลี่ยนสี
แก้ไขไฟล์ `client/src/index.css`:
```css
.dark {
  --primary: oklch(0.75 0.15 200); /* เปลี่ยนสีหลัก */
  --secondary: oklch(0.65 0.25 300); /* เปลี่ยนสีรอง */
  /* ... */
}
```

### เปลี่ยนข้อความ
แก้ไขไฟล์ในโฟลเดอร์ `client/src/pages/`:
- `Home.tsx` - หน้าแรก
- `Gallery.tsx` - หน้าผลงาน
- `Contact.tsx` - หน้าติดต่อ

### เพิ่มรูปภาพ
1. วางรูปภาพในโฟลเดอร์ `client/public/images/`
2. อ้างอิงในโค้ด: `<img src="/images/your-image.png" />`

## 🚀 การขึ้นโฮส

### วิธีที่ 1: Manus Hosting (แนะนำ)
```bash
# คลิกปุ่ม Publish ในหน้า Management UI
# เลือกโดเมน และกดยืนยัน
```

### วิธีที่ 2: Vercel
```bash
# ติดตั้ง Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### วิธีที่ 3: Netlify
```bash
# ติดตั้ง Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### วิธีที่ 4: GitHub Pages
```bash
# Build
pnpm build

# Push ไปยัง GitHub
git add dist/
git commit -m "Deploy"
git push origin main
```

ดูรายละเอียดเพิ่มเติมใน `DEPLOYMENT_GUIDE.md`

## 📝 ฟอร์มติดต่อ

ฟอร์มติดต่อปัจจุบันมีการตรวจสอบข้อมูล (Validation) แต่ยังไม่ได้เชื่อมต่อกับ Backend

### เพื่อให้ฟอร์มส่งอีเมลจริง:

1. **ติดตั้ง Backend** (ใช้ Node.js + Express)
2. **เพิ่ม API Endpoint** สำหรับรับข้อมูลฟอร์ม
3. **ใช้ Nodemailer หรือ SendGrid** เพื่อส่งอีเมล
4. **อัปเดต Contact.tsx** เพื่อส่งข้อมูลไปยัง API

ตัวอย่าง:
```typescript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

## 🔧 คำสั่งที่มีประโยชน์

```bash
# ติดตั้ง dependencies
pnpm install

# รัน development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Check TypeScript
pnpm check

# Format code
pnpm format
```

## 📱 Responsive Design

เว็บไซต์ออกแบบให้ใช้ได้บน:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🎯 SEO

เว็บไซต์มีการตั้งค่า SEO พื้นฐาน:
- Meta tags ในไฟล์ `index.html`
- Open Graph tags
- Semantic HTML

สำหรับ SEO ที่ดีขึ้น ให้เพิ่ม:
- Google Analytics
- Sitemap
- Robots.txt
- Schema markup

## 🐛 การแก้ไขปัญหา

### ปัญหา: Port 3000 ถูกใช้งาน
```bash
# ใช้ port อื่น
pnpm dev -- --port 3001
```

### ปัญหา: Build ล้มเหลว
```bash
# ลบ node_modules และ lock file
rm -rf node_modules pnpm-lock.yaml

# ติดตั้งใหม่
pnpm install
pnpm build
```

### ปัญหา: CSS ไม่โหลด
ตรวจสอบ browser console สำหรับ errors และ clear cache

## 📞 ติดต่อ

- **Facebook:** https://www.facebook.com/profile.php?id=100083410325446
- **Email:** contact@rtcentertainment.com

## 📄 ลิขสิทธิ์

© 2025 Rtc Entertainment. สงวนลิขสิทธิ์

---

**หมายเหตุ:** สำหรับวิธีการขึ้นโฮสโดยละเอียด ดู `DEPLOYMENT_GUIDE.md`
