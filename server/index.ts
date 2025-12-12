// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ปรับ path ตามที่ไฟล์ index.html อยู่จริง
// ลองอันนี้ก่อน (ส่วนใหญ่ใช้ได้)
const publicPath = path.join(__dirname, "../public");

// ถ้าไม่ได้ ลองอันนี้แทน (ถ้า build ไป dist/public)
// const publicPath = path.join(__dirname, "../dist/public");

app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

// สำคัญที่สุด: ต้องมีบรรทัดนี้เท่านั้น Vercel ถึงจะรันได้
export default app;