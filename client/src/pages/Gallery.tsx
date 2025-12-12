import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "พอร์ทัลชุมชนเกมมิ่ง",
    description: "เว็บไซต์ชุมชนเกมมิ่งที่สมบูรณ์พร้อมระบบสถิติผู้เล่น การจัดการเซิฟเวอร์ และฟอรัมสนทนา",
    image: "/images/project-1.png",
    tags: ["React", "Node.js", "MongoDB", "Real-time"],
    year: "2024"
  },
  {
    id: 2,
    title: "ร้านค้าออนไลน์เกมมิ่ง",
    description: "ระบบอีคอมเมิร์ซสำหรับขายสินค้าเกมมิ่ง พร้อมการชำระเงิน และการจัดการสินค้า",
    image: "/images/project-2.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Admin Panel"],
    year: "2024"
  },
  {
    id: 3,
    title: "ระบบอัตโนมัติ Discord Bot",
    description: "บอท Discord ขั้นสูงพร้อมระบบคำสั่งแบบกำหนดเอง การวิเคราะห์ผู้ใช้ และการจัดการเซิฟเวอร์",
    image: "/images/project-3.png",
    tags: ["Discord.js", "Node.js", "Analytics", "Automation"],
    year: "2023"
  },
  {
    id: 4,
    title: "แผงควบคุมเซิฟเวอร์ FiveM",
    description: "แดชบอร์ดจัดการเซิฟเวอร์ FiveM พร้อมการจัดการผู้เล่น ระบบเศรษฐกิจ และการจัดการงาน",
    image: "/images/project-4.png",
    tags: ["FiveM", "React", "WebSocket", "Real-time Monitoring"],
    year: "2023"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Background Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <span className="text-xl font-bold tracking-wider text-primary drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
              RTC ENTERTAINMENT
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="/#services" className="hover:text-primary transition-colors">บริการ</a>
            <a href="/#stats" className="hover:text-primary transition-colors">สถิติ</a>
            <a href="/gallery" className="text-primary">ผลงาน</a>
            <a href="/contact" className="hover:text-primary transition-colors">
              ติดต่อเรา
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="py-16 text-center mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 text-xs tracking-[0.2em]">
                แกลเลอรี่ผลงาน
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                ผลงานของเรา
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                โครงการที่เราได้สร้างสรรค์มาเพื่อให้ลูกค้าประสบความสำเร็จ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 overflow-hidden group h-full flex flex-col hover:shadow-[0_0_30px_rgba(0,243,255,0.15)]">
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden bg-black/40">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Project Info */}
                    <CardHeader className="flex-grow">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <CardTitle className="text-2xl group-hover:text-primary transition-colors mb-2">
                            {project.title}
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="text-xs border-primary/30 text-primary/70 hover:text-primary hover:border-primary/60 transition-colors"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4">
                        <Button
                          size="sm"
                          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          ดูโครงการ
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 border-primary/30 hover:border-primary"
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent skew-y-3 transform origin-center scale-110"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                พร้อมเริ่มโครงการของคุณหรือยัง?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                ติดต่อเราวันนี้เพื่อปรึกษาเกี่ยวกับโครงการของคุณ
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100083410325446"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.4)] border-none text-lg px-8">
                  ติดต่อเราบน Facebook
                </Button>
              </a>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black border-t border-border/40 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold text-primary mb-2">RTC ENTERTAINMENT</h3>
                <p className="text-muted-foreground text-sm">พลังของเจนเนอเรชั่นถัดไปของชุมชนเกมมิ่ง</p>
              </div>
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-white transition-colors">นโยบายความเป็นส่วนตัว</a>
                <a href="#" className="hover:text-white transition-colors">เงื่อนไขการใช้บริการ</a>
                <a href="https://www.facebook.com/profile.php?id=100083410325446" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ติดต่อ</a>
              </div>
            </div>
            <div className="mt-8 text-center text-xs text-gray-600">
              © 2025 Rtc Entertainment. สงวนลิขสิทธิ์
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
