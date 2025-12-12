# คู่มือการขึ้นโฮส Rtc Entertainment Showcase

## วิธีการขึ้นโฮสบน Manus (แนะนำ)

Manus ให้บริการโฮสติ้งแบบ Static Website โดยไม่มีค่าใช้บริการเพิ่มเติม

### ขั้นตอน:
1. **คลิกปุ่ม Publish** ในหน้า Management UI ของ Manus
2. **เลือกโดเมน** ที่คุณต้องการ (สามารถซื้อโดเมนใหม่หรือใช้ default domain)
3. **กดยืนยัน** และรอให้ระบบประมวลผล (ประมาณ 2-5 นาที)
4. **เว็บไซต์ของคุณจะขึ้นสด** พร้อมใช้งาน

---

## วิธีการขึ้นโฮสบน Vercel (ทางเลือก)

### ขั้นตอน:

#### 1. **เตรียมโค้ด**
```bash
# ติดตั้ง dependencies
pnpm install

# Build project
pnpm build
```

#### 2. **สร้าง GitHub Repository**
```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Push ไปยัง GitHub
git remote add origin https://github.com/YOUR_USERNAME/rtc-entertainment-showcase.git
git branch -M main
git push -u origin main
```

#### 3. **ขึ้นโฮสบน Vercel**
- ไปที่ https://vercel.com
- คลิก "New Project"
- เลือก GitHub repository ของคุณ
- Vercel จะตรวจจับ Vite project โดยอัตโนมัติ
- คลิก "Deploy"
- รอให้ deployment เสร็จ (ประมาณ 3-5 นาที)

---

## วิธีการขึ้นโฮสบน Netlify (ทางเลือก)

### ขั้นตอน:

#### 1. **Build project**
```bash
pnpm install
pnpm build
```

#### 2. **ขึ้นโฮสบน Netlify**
- ไปที่ https://netlify.com
- คลิก "New site from Git"
- เลือก GitHub repository ของคุณ
- ตั้งค่า:
  - **Build command:** `pnpm build`
  - **Publish directory:** `dist`
- คลิก "Deploy site"

---

## วิธีการขึ้นโฮสบน Railway (ทางเลือก)

### ขั้นตอน:

#### 1. **สร้าง Railway Account**
- ไปที่ https://railway.app
- ลงทะเบียนด้วย GitHub

#### 2. **Deploy**
- คลิก "New Project"
- เลือก "Deploy from GitHub repo"
- เลือก repository ของคุณ
- Railway จะ auto-detect และ deploy

#### 3. **ตั้งค่า Environment**
```
NODE_ENV=production
```

---

## วิธีการขึ้นโฮสบน Render (ทางเลือก)

### ขั้นตอน:

#### 1. **ไปที่ Render**
- https://render.com

#### 2. **สร้าง Static Site**
- คลิก "New +"
- เลือก "Static Site"
- เชื่อมต่อ GitHub repository
- ตั้งค่า:
  - **Build Command:** `pnpm install && pnpm build`
  - **Publish directory:** `dist`
- คลิก "Create Static Site"

---

## วิธีการขึ้นโฮสบน cPanel/Shared Hosting

### ขั้นตอน:

#### 1. **Build project ในเครื่องของคุณ**
```bash
pnpm install
pnpm build
```

#### 2. **อัพโหลดไฟล์**
- เปิด FTP Client (เช่น FileZilla)
- เชื่อมต่อกับ cPanel FTP
- อัพโหลดไฟล์ทั้งหมดจากโฟลเดอร์ `dist` ไปยัง `public_html`

#### 3. **ตั้งค่า .htaccess**
สร้างไฟล์ `.htaccess` ในโฟลเดอร์ `public_html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## วิธีการขึ้นโฮสบน Docker

### ขั้นตอน:

#### 1. **สร้าง Dockerfile**
```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

#### 2. **Build Docker Image**
```bash
docker build -t rtc-entertainment .
```

#### 3. **Run Container**
```bash
docker run -p 3000:3000 rtc-entertainment
```

---

## ข้อมูลสำคัญ

### โครงสร้างโปรเจค
```
rtc-entertainment-showcase/
├── client/                 # Frontend code
│   ├── src/
│   │   ├── pages/         # Page components (Home, Gallery, Contact)
│   │   ├── components/    # Reusable components
│   │   ├── App.tsx        # Main app component with routing
│   │   └── index.css      # Global styles
│   └── public/            # Static assets (images)
├── server/                # Backend server (Express)
├── package.json           # Dependencies
└── vite.config.ts        # Vite configuration
```

### Build Output
- **Output Directory:** `dist/`
- **Entry Point:** `dist/index.html`

### Environment Variables
ปัจจุบันไม่มีการใช้ environment variables ที่จำเป็น

---

## การแก้ไขปัญหา

### ปัญหา: หน้าเว็บไม่โหลดอย่างถูกต้อง
**วิธีแก้:** ตรวจสอบให้แน่ใจว่า `.htaccess` ถูกตั้งค่าให้ redirect ทุก request ไปยัง `index.html`

### ปัญหา: CSS/JS ไม่โหลด
**วิธีแก้:** ตรวจสอบ base URL ใน `vite.config.ts` ให้ตรงกับ path ของเว็บไซต์

### ปัญหา: ฟอร์มติดต่อไม่ทำงาน
**วิธีแก้:** ฟอร์มปัจจุบันเป็น client-side validation เท่านั้น สำหรับการส่งอีเมลจริง ต้องเชื่อมต่อ Backend API

---

## ขั้นตอนถัดไป

1. **เพิ่มระบบส่งอีเมล:** ใช้ Nodemailer หรือ SendGrid API
2. **เพิ่มฐานข้อมูล:** เก็บข้อมูลติดต่อในฐานข้อมูล
3. **เพิ่มระบบ Analytics:** ติดตั้ง Google Analytics หรือ Plausible
4. **ปรับปรุง SEO:** เพิ่ม Meta tags และ Schema markup

---

## ติดต่อสำหรับความช่วยเหลือ

- **Facebook:** https://www.facebook.com/profile.php?id=100083410325446
- **Email:** contact@rtcentertainment.com

---

**หมายเหตุ:** แนะนำให้ใช้ Manus Hosting เพราะมีความง่ายและสะดวกที่สุด
