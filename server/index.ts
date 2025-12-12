// server/index.ts  ← ไฟล์นี้ต้องอยู่ที่ root หรือในโฟลเดอร์ api ก็ได้
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// กำหนด path ที่ถูกต้องสำหรับ Vercel (สำคัญมาก!)
const publicPath = path.join(__dirname, "../public"); // หรือ "../dist/public" ดูข้อ 3

app.use(express.static(publicPath));

// สำหรับ SPA (React, Next.js, Vite ฯลฯ) ที่ใช้ client-side routing
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// สำคัญที่สุด: ต้อง export แบบนี้เท่านั้น Vercel ถึงจะรันได้
export default app;