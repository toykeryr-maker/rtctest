// server/index.ts  ← ไฟล์นี้ต้องเป็นแบบนี้เป๊ะ ๆ
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// เปลี่ยนตรงนี้ตามที่ index.html อยู่จริง
const publicPath = path.join(__dirname, "../public");   // ลองอันนี้ก่อน

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;   // สำคัญที่สุด ต้องมีบรรทัดนี้!