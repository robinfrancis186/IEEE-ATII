import { Layout } from "@/components/Layout";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { PartnerCarousel } from "@/components/PartnerCarousel";
import { StatCounter } from "@/components/StatCounter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Activity, BookOpen, Accessibility as WheelchairIcon, Briefcase, Users, FlaskConical } from "lucide-react";
import { 
  LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer 
} from "recharts";

import projectsHeroImg from "@assets/ChatGPT_Image_May_2,_2026,_09_48_10_PM_(8)_1777748003996.png";
import sparshImg from "@assets/ChatGPT_Image_May_2,_2026,_09_48_21_PM_(4)_1777748003997.png";
import communityImg from "@assets/ChatGPT_Image_May_2,_2026,_09_48_21_PM_(5)_1777748003997.png";
import impactImg from "@assets/ChatGPT_Image_May_2,_2026,_09_48_21_PM_(6)_1777748003997.png";
import workshopImg from "@assets/ChatGPT_Image_May_2,_2026,_09_48_22_PM_(8)_1777748003997.png";

const lineData = [
  { year: "2020", impact: 2.1 },
  { year: "2021", impact: 5.8 },
  { year: "2022", impact: 9.6 },
  { year: "2023", impact: 16.8 },
  { year: "2024", impact: 20.5 },
];

const focusPieData = [
  { name: "Assistive Devices", value: 33, color: "#023A74" },
  { name: "Inclusive Education", value: 25, color: "#642396" },
  { name: "Accessibility Tools", value: 20, color: "#01A0A0" },
  { name: "Livelihood & Skills", value: 12, color: "#FD7B09" },
  { name: "Community Inclusion", value: 10, color: "#475569" },
];

const regionPieData = [
  { name: "South India", value: 42, color: "#01A0A0" },
  { name: "North India", value: 28, color: "#FD7B09" },
  { name: "East India", value: 17, color: "#023A74" },
  { name: "West India", value: 13, color: "#642396" },
];

const beneficiaryBarData = [
  { name: "PwDs", value: 40 },
  { name: "Students", value: 25 },
  { name: "Seniors", value: 12 },
  { name: "Caregivers", value: 8 },
  { name: "Others", value: 7 },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <SEO
        title="Projects & Impact | IEEE Kerala ATIIG"
        description="See the measurable impact of IEEE Kerala ATIIG: 25,000+ engineers reached, 200+ workshops delivered, 50+ research collaborations, and humanitarian technology projects spanning energy, water, and disaster response."
        path="/projects"
        keywords="IEEE Kerala projects, IEEE Kerala impact, engineering projects Kerala, IEEE humanitarian technology"
        schemas={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects & Impact", path: "/projects" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "IEEE Kerala ATIIG Projects & Impact",
            url: "https://ieee-atiig.replit.app/projects",
            isPartOf: { "@id": "https://ieee-atiig.replit.app/#website" },
          },
          {
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "IEEE Kerala ATIIG Impact Metrics",
            description: "Aggregate impact figures for IEEE Kerala ATIIG programs: 100+ projects delivered, 25,000+ lives impacted, 50+ partners, 65+ events conducted, 18+ active assistive-technology prototypes.",
            url: "https://ieee-atiig.replit.app/projects",
            creator: { "@id": "https://ieee-atiig.replit.app/#organization" },
            spatialCoverage: { "@type": "AdministrativeArea", name: "Kerala, India" },
            temporalCoverage: "2018/..",
            keywords: ["assistive technology", "inclusive innovation", "Kerala", "IEEE", "humanitarian engineering", "SDG"],
            license: "https://creativecommons.org/licenses/by/4.0/",
          },
        ]}
      />
      {/* Hero */}
      <section className="bg-navy text-white pt-20 pb-24 overflow-hidden relative" data-testid="projects-hero">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">Projects That Create Inclusive Impact</h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From low-cost prosthetics to digital accessibility tools, our projects translate empathy into engineering.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-5xl mx-auto bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-black text-orange mb-1">58+</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-teal mb-1">25K+</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Lives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-purple mb-1">18</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">States Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-orange mb-1">120+</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Partners</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-4xl font-black text-teal mb-1">1.2K+</div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Categories */}
      <section className="py-24 bg-slate-50" data-testid="projects-categories">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
              <h3 className="font-bold text-navy text-xl mb-2">Impact Across India</h3>
              <p className="text-sm text-slate-500 mb-6">Hover any state to see active programs.</p>

              {/* Interactive India Map */}
              <div className="relative w-full aspect-[4/5] mb-6">
                <svg viewBox="0 0 100 120" className="w-full h-full drop-shadow-md">
                  <defs>
                    <linearGradient id="indiaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f1f5f9" />
                      <stop offset="100%" stopColor="#e2e8f0" />
                    </linearGradient>
                  </defs>
                  <path d="M40,10 L60,10 L70,30 L90,40 L90,60 L70,70 L60,110 L50,115 L40,110 L30,80 L20,70 L10,50 L20,30 Z" fill="url(#indiaGrad)" stroke="#cbd5e1" strokeWidth="0.6" />
                </svg>

                {/* State markers */}
                {[
                  { id: "kerala", label: "Kerala", projects: 32, lives: "18.4K", top: "82%", left: "42%", color: "orange", size: "lg", hq: true },
                  { id: "tn", label: "Tamil Nadu", projects: 9, lives: "3.1K", top: "78%", left: "52%", color: "orange", size: "md" },
                  { id: "karnataka", label: "Karnataka", projects: 7, lives: "2.2K", top: "65%", left: "42%", color: "teal", size: "md" },
                  { id: "maharashtra", label: "Maharashtra", projects: 4, lives: "850", top: "55%", left: "38%", color: "teal", size: "sm" },
                  { id: "delhi", label: "Delhi NCR", projects: 3, lives: "620", top: "30%", left: "45%", color: "purple", size: "sm" },
                  { id: "wb", label: "West Bengal", projects: 2, lives: "410", top: "42%", left: "70%", color: "purple", size: "sm" },
                  { id: "assam", label: "Assam", projects: 1, lives: "180", top: "32%", left: "82%", color: "purple", size: "sm" },
                ].map((s) => {
                  const colorMap: Record<string, string> = {
                    orange: "bg-orange",
                    teal: "bg-teal",
                    purple: "bg-purple",
                  };
                  const sizeMap: Record<string, string> = {
                    lg: "w-5 h-5",
                    md: "w-3.5 h-3.5",
                    sm: "w-2.5 h-2.5",
                  };
                  return (
                    <div
                      key={s.id}
                      className="absolute group cursor-pointer"
                      style={{ top: s.top, left: s.left, transform: "translate(-50%, -50%)" }}
                    >
                      {/* Pulse halo */}
                      <span className={`absolute inset-0 ${colorMap[s.color]} rounded-full animate-ping opacity-40 ${sizeMap[s.size]}`} />
                      <span className={`relative block ${colorMap[s.color]} ${sizeMap[s.size]} rounded-full ring-2 ring-white shadow-md transition-transform group-hover:scale-150`} />
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-20">
                        <div className="bg-navy text-white text-xs rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
                          <div className="font-black flex items-center gap-1.5">
                            {s.label}
                            {s.hq && <span className="text-[9px] bg-orange text-white px-1.5 py-0.5 rounded-sm font-bold">HQ</span>}
                          </div>
                          <div className="text-[11px] text-slate-300 font-medium mt-0.5">{s.projects} projects • {s.lives} lives</div>
                          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-navy" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-5 border-t border-slate-100">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-orange" /></div>
                  <div className="text-xs font-bold text-navy">High Impact</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">10+ Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-teal" /></div>
                  <div className="text-xs font-bold text-navy">Active</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">3–9 Projects</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1"><span className="w-3 h-3 rounded-full bg-purple" /></div>
                  <div className="text-xs font-bold text-navy">Emerging</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">1–2 Projects</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black text-navy mb-8">Project Categories</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Assistive Devices", count: "16+", icon: <Activity className="w-6 h-6 text-navy" /> },
                  { title: "Inclusive Education", count: "14+", icon: <BookOpen className="w-6 h-6 text-purple" /> },
                  { title: "Accessibility Tools", count: "12+", icon: <WheelchairIcon className="w-6 h-6 text-teal" /> },
                  { title: "Livelihood & Skills", count: "9+", icon: <Briefcase className="w-6 h-6 text-orange" /> },
                  { title: "Community Inclusion", count: "7+", icon: <Users className="w-6 h-6 text-navy" /> },
                  { title: "Research & Innovation", count: "8+", icon: <FlaskConical className="w-6 h-6 text-teal" /> }
                ].map((cat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-orange transition-colors cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-navy text-lg mb-1">{cat.title}</h3>
                    <div className="text-slate-500 font-medium text-sm">{cat.count} Projects</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="featured" className="py-24 bg-white" data-testid="projects-featured">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="bg-orange text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Featured Project</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img src={sparshImg} alt="Sparsh Prosthetic Hand" className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3]" />
                <div className="absolute -bottom-6 -right-6 bg-navy text-white p-6 rounded-2xl shadow-lg border-4 border-white hidden md:block">
                  <div className="text-3xl font-black text-orange mb-1">₹35K</div>
                  <div className="text-sm font-bold uppercase tracking-wider">Avg. Cost Saved</div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-black text-navy mb-6">Sparsh — Affordable Myoelectric Prosthetic Hand</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Sparsh is an indigenously designed, lightweight and affordable myoelectric prosthetic hand that restores grip, confidence and independence for upper-limb amputees in developing regions.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Low Cost", "Lightweight", "Multi-grip", "User-centric"].map(tag => (
                    <span key={tag} className="bg-teal/10 text-teal font-bold px-3 py-1 rounded-md text-sm">{tag}</span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-8 border-y border-slate-100 py-6">
                  <div>
                    <div className="text-2xl font-black text-navy">1,200+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Users</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-navy">18</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">States</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-navy">45+</div>
                    <div className="text-xs font-bold text-slate-500 uppercase">Partner Orgs</div>
                  </div>
                </div>
                
                <div className="mb-10 space-y-4">
                  <h3 className="font-bold text-navy text-lg mb-4">Project Outcomes:</h3>
                  {[
                    "Enhanced daily living independence",
                    "Improved self-confidence and social inclusion",
                    "Enables education and employment opportunities",
                    "Low-cost, maintenance-light and repair ecosystem"
                  ].map((outcome, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-orange shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-navy hover:bg-navy/90 text-white font-bold h-14 px-8 text-base w-full sm:w-auto">
                  View Project Details <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact in Numbers */}
      <section className="py-24 bg-slate-50" data-testid="projects-data">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Impact in Numbers</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Data-driven insights demonstrating the scale of our interventions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-navy mb-8 text-center">Lives Impacted Over the Years</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={lineData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <RechartsTooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Line type="monotone" dataKey="impact" stroke="#01A0A0" strokeWidth={4} dot={{r: 6, fill: '#01A0A0', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 8}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-navy mb-8 text-center">Impact by Beneficiary Group (%)</h3>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={beneficiaryBarData} layout="vertical" margin={{top: 0, right: 30, left: 20, bottom: 0}}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                    <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#023A74', fontWeight: 600, fontSize: 13}} width={80} />
                    <RechartsTooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                    <Bar dataKey="value" fill="#642396" radius={[0, 4, 4, 0]} barSize={24} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <h3 className="text-lg font-bold text-navy mb-8 text-center">Impact by Focus Area</h3>
              <div className="h-64 flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={focusPieData} cx="50%" cy="50%" innerRadius={70} outerRadius={100} paddingAngle={2} dataKey="value">
                      {focusPieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <RechartsTooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {focusPieData.slice(0, 3).map((entry, index) => (
                  <div key={index} className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: entry.color}}></span>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <h3 className="text-lg font-bold text-navy mb-8 text-center">Beneficiaries by Region</h3>
              <div className="h-64 flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={regionPieData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                      {regionPieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                    </Pie>
                    <RechartsTooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {regionPieData.map((entry, index) => (
                  <div key={index} className="flex items-center text-sm font-bold text-slate-700">
                    <span className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: entry.color}}></span>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stories of Change */}
      <section id="impact" className="py-24 bg-white" data-testid="projects-stories">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-navy mb-4">Stories of Change</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Real impact measured in changed lives.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Arun",
                role: "Sparsh Prosthetic Hand User",
                quote: "From Dependence to Independence — Sparsh gives me the freedom I never thought possible. I can now work and live with confidence again.",
                color: "border-orange",
                img: communityImg,
              },
              {
                name: "Ananya",
                role: "Student Beneficiary",
                quote: "Learning Without Barriers — The assistive learning tools helped me continue my education and achieve my dreams.",
                color: "border-purple",
                img: impactImg,
              },
              {
                name: "Sajeer/Mohammed",
                role: "Mobility Device Users",
                quote: "Mobility Restored — The mobility device built by IEEE Kerala changed my life. I can travel independently to support my family.",
                color: "border-teal",
                img: workshopImg,
              }
            ].map((story, i) => (
              <div key={i} className={`bg-slate-50 rounded-3xl border-t-4 ${story.color} overflow-hidden`}>
                <div className="h-40 overflow-hidden">
                  <img src={story.img} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 relative">
                  <div className={`absolute -top-5 left-8 w-10 h-10 rounded-full ${story.color.replace('border-', 'bg-')} text-white flex items-center justify-center font-serif text-3xl shadow-md pt-1`}>
                    "
                  </div>
                  <p className="text-slate-700 font-medium leading-relaxed mb-6 mt-2">
                    {story.quote}
                  </p>
                  <div className="font-bold text-navy text-lg">{story.name}</div>
                  <div className="text-sm text-slate-500 font-medium">{story.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Alignment */}
      <section id="sdg" className="py-20 bg-slate-900 text-white" data-testid="projects-sdg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-black mb-10">Aligned with UN Sustainable Development Goals</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { num: "3", bg: "bg-[#4C9F38]", title: "Good Health" },
              { num: "4", bg: "bg-[#C5192D]", title: "Quality Education" },
              { num: "8", bg: "bg-[#A21942]", title: "Economic Growth" },
              { num: "9", bg: "bg-[#FD6925]", title: "Innovation" },
              { num: "10", bg: "bg-[#DD1367]", title: "Reduced Inequalities" },
              { num: "11", bg: "bg-[#FD9D24]", title: "Sustainable Cities" },
              { num: "17", bg: "bg-[#19486A]", title: "Partnerships" }
            ].map((sdg, i) => (
              <div key={i} className={`w-20 h-20 md:w-24 md:h-24 ${sdg.bg} rounded-lg flex flex-col items-center justify-center p-2 shadow-lg transform hover:scale-110 transition-transform cursor-pointer`}>
                <span className="text-sm font-black opacity-80">SDG</span>
                <span className="text-3xl font-black">{sdg.num}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PartnerCarousel />

      {/* CTA */}
      <section className="py-20 bg-teal text-center" data-testid="projects-cta">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Be a Part of Inclusive Impact</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-navy hover:bg-navy/90 text-white font-bold px-8 h-14 text-base shadow-xl">
              <Link to="/get-involved#partner">Partner With Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-orange hover:bg-orange/90 text-white font-bold px-8 h-14 text-base shadow-xl">
              <Link to="/get-involved">Join Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
