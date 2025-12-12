import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, BarChart, Bar, Legend } from "recharts";
import { Server, Globe, Cpu, Activity, Users, Shield, Zap, Code, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const serverData = [
  { time: "00:00", players: 120, load: 45 },
  { time: "04:00", players: 80, load: 30 },
  { time: "08:00", players: 150, load: 55 },
  { time: "12:00", players: 320, load: 75 },
  { time: "16:00", players: 450, load: 85 },
  { time: "20:00", players: 580, load: 92 },
  { time: "23:59", players: 490, load: 80 },
];

const performanceData = [
  { name: "Web", uptime: 99.9, speed: 95 },
  { name: "DB", uptime: 99.8, speed: 92 },
  { name: "API", uptime: 99.95, speed: 98 },
  { name: "CDN", uptime: 100, speed: 99 },
];

export default function Home() {
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
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary animate-pulse" />
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-xl font-bold tracking-wider text-primary drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]">
                RTC ENTERTAINMENT
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">บริการ</a>
            <a href="#stats" className="hover:text-primary transition-colors">สถิติ</a>
            <Link href="/gallery" className="hover:text-primary transition-colors">ผลงาน</Link>
            <Link href="/contact">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary hover:border-primary">
                ติดต่อเรา
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
            <img 
              src="/images/cover.png" 
              alt="Rtc Entertainment Cover" 
              className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
            />
          </div>
          
          <div className="container mx-auto px-4 relative z-20 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary bg-primary/5 backdrop-blur-sm px-4 py-1 text-xs tracking-[0.2em]">
                ระบบออนไลน์
              </Badge>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary drop-shadow-[0_0_30px_rgba(0,243,255,0.3)]">
                เซิฟเวอร์<br />เจนเนอเรชั่นถัดไป
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
                เซิฟเวอร์ FiveM พรีเมียม เว็บไซต์ประสิทธิภาพสูง และการพัฒนาระบบแบบกำหนดเอง
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,243,255,0.4)] border-none text-lg px-8">
                    <Zap className="mr-2 h-5 w-5" /> เริ่มโครงการ
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover:border-primary text-lg px-8">
                    ดูผลงาน
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background/50 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">บริการหลัก</h2>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="w-10 h-10 text-primary" />,
                  title: "พัฒนาเว็บไซต์",
                  desc: "เว็บไซต์ที่ตอบสนองและเร็วสูงที่ปรับแต่งสำหรับชุมชนเกมมิ่งและธุรกิจ",
                  features: ["React/Next.js", "SEO ปรับปรุง", "ออกแบบแบบกำหนดเอง"]
                },
                {
                  icon: <Server className="w-10 h-10 text-secondary" />,
                  title: "เซิฟเวอร์ FiveM",
                  desc: "โฮสติ้งเซิฟเวอร์ที่ปราศจากความล่าช้าและป้องกัน DDoS พร้อมการรวมสคริปต์แบบกำหนดเอง",
                  features: ["99.9% Uptime", "ป้องกันการโกง", "สคริปต์แบบกำหนดเอง"]
                },
                {
                  icon: <Code className="w-10 h-10 text-accent-foreground" />,
                  title: "พัฒนาระบบ",
                  desc: "โซลูชันซอฟต์แวร์และเครื่องมือการอัตโนมัติที่ปรับแต่งสำหรับความต้องการของคุณ",
                  features: ["Discord Bots", "การรวม API", "ฐานข้อมูล"]
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 border-primary/20 backdrop-blur-sm hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] group h-full">
                    <CardHeader>
                      <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                        {service.icon}
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6">{service.desc}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Data Section */}
        <section id="stats" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 skew-y-3 transform origin-top-left scale-110"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">เมตริกสด</h2>
                <p className="text-muted-foreground max-w-xl">
                  สำรวจข้อมูลประสิทธิภาพแบบเรียลไทม์จากโครงสร้างพื้นฐานที่จัดการของเรา 
                  ทำความเข้าใจเทรนด์ในกิจกรรมของผู้เล่นและโหลดระบบ
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="border-primary/30">
                  <Activity className="w-4 h-4 mr-2" /> มุมมองสด
                </Button>
                <Button variant="outline" size="sm" className="border-primary/30">
                  ส่งออกรายงาน
                </Button>
              </div>
            </div>

            <Tabs defaultValue="traffic" className="w-full">
              <TabsList className="bg-background/50 border border-border mb-8">
                <TabsTrigger value="traffic">การวิเคราะห์การจราจร</TabsTrigger>
                <TabsTrigger value="performance">สุขภาพระบบ</TabsTrigger>
              </TabsList>
              
              <TabsContent value="traffic" className="space-y-4">
                <Card className="bg-black/40 border-primary/20 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-primary" />
                      กิจกรรมผู้เล่นและโหลดเซิฟเวอร์
                    </CardTitle>
                    <CardDescription>การวิเคราะห์เทรนด์ 24 ชั่วโมงแสดงเวลาการใช้งานสูงสุด</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={serverData}>
                        <defs>
                          <linearGradient id="colorPlayers" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="var(--color-secondary)" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="var(--color-secondary)" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                        <XAxis dataKey="time" stroke="#666" />
                        <YAxis stroke="#666" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Legend />
                        <Area 
                          type="monotone" 
                          dataKey="players" 
                          stroke="var(--color-primary)" 
                          fillOpacity={1} 
                          fill="url(#colorPlayers)" 
                          strokeWidth={2}
                          name="ผู้เล่น"
                        />
                        <Area 
                          type="monotone" 
                          dataKey="load" 
                          stroke="var(--color-secondary)" 
                          fillOpacity={1} 
                          fill="url(#colorLoad)" 
                          strokeWidth={2}
                          name="โหลด"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="performance">
                <Card className="bg-black/40 border-primary/20 backdrop-blur-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-secondary" />
                      ความเชื่อถือได้ของโครงสร้างพื้นฐาน
                    </CardTitle>
                    <CardDescription>เวลาทำงานและความเร็วการตอบสนองทั่วบริการที่จัดการทั้งหมด</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={performanceData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" horizontal={false} />
                        <XAxis type="number" domain={[0, 100]} stroke="#666" />
                        <YAxis dataKey="name" type="category" stroke="#fff" width={50} />
                        <Tooltip 
                          cursor={{fill: 'rgba(255,255,255,0.05)'}}
                          contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                        />
                        <Legend />
                        <Bar dataKey="uptime" name="Uptime %" fill="var(--color-primary)" radius={[0, 4, 4, 0]} barSize={20} />
                        <Bar dataKey="speed" name="คะแนนความเร็ว" fill="var(--color-secondary)" radius={[0, 4, 4, 0]} barSize={20} />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
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
