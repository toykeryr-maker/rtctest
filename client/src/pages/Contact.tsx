import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission (in real app, this would send to backend)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("ส่งข้อความสำเร็จ! เราจะติดต่อคุณในเร็วๆ นี้");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <a href="/gallery" className="hover:text-primary transition-colors">ผลงาน</a>
            <a href="/contact" className="text-primary">ติดต่อเรา</a>
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
                ติดต่อเรา
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                มาติดต่อกันเถอะ
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                มีคำถามหรือต้องการเริ่มโครงการ? เรายินดีที่จะได้ยินจากคุณ
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-6"
              >
                <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-primary" />
                      อีเมล
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      ส่งอีเมลมาหาเราได้ตลอดเวลา
                    </p>
                    <p className="text-primary font-semibold mt-2">
                      contact@rtcentertainment.com
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-secondary" />
                      Facebook
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      ติดต่อเราผ่าน Facebook
                    </p>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100083410325446" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-semibold mt-2 hover:underline block"
                    >
                      RTC Entertainment
                    </a>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-accent-foreground" />
                      ตั้งอยู่ที่
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      ประเทศไทย
                    </p>
                    <p className="text-primary font-semibold mt-2">
                      พร้อมให้บริการ 24/7
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <Card className="bg-card/50 border-primary/20 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>ส่งข้อความให้เรา</CardTitle>
                    <CardDescription>
                      กรอกแบบฟอร์มด้านล่างและเราจะติดต่อคุณในเร็วๆ นี้
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          ชื่อของคุณ <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="กรอกชื่อของคุณ"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/50"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          อีเมล <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/50"
                        />
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          ข้อความ <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="เขียนข้อความของคุณที่นี่..."
                          value={formData.message}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          rows={6}
                          className="bg-background/50 border-primary/30 focus:border-primary focus:ring-primary/50 resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.4)] border-none text-lg py-6"
                      >
                        {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ"}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        เราจะตอบกลับภายใน 24 ชั่วโมง
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
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
                ต้องการความช่วยเหลือเพิ่มเติม?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                ติดต่อเราผ่าน Facebook สำหรับการสอบถามเพิ่มเติม
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=100083410325446"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.4)] border-none text-lg px-8">
                  ไปที่ Facebook
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
                <a href="/contact" className="hover:text-white transition-colors">ติดต่อ</a>
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
