"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { ArrowRight, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const caseStudies = [
  {
    title: "Maison Paradis Revenue Growth",
    slug: "maison-paradis-revenue",
    property: "Maison Paradis",
    location: "Côte d'Azur, France",
    result: "34% growth in net operating income through distribution optimization.",
    metric: "34%",
    metricLabel: "Revenue Increase",
    category: "Revenue Generation",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
  },
  {
    title: "The Royal Atlantis GCC Launch",
    slug: "royal-atlantis-gcc",
    property: "The Royal Atlantis",
    location: "Dubai, UAE",
    result: "Established market leadership within 6 months of representation.",
    metric: "52%",
    metricLabel: "Market Share Growth",
    category: "Sales Representation",
    region: "GCC",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Villa La Massa Market Expansion",
    slug: "villa-la-massa-expansion",
    property: "Villa La Massa",
    location: "Tuscany, Italy",
    result: "Successful penetration into the North American luxury segment.",
    metric: "28%",
    metricLabel: "US Booking Increase",
    category: "Business Development",
    region: "USA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function CaseStudiesPage() {
  const [filter, setFilter] = useState({ category: "All", region: "All" });

  const categories = ["All", ...Array.from(new Set(caseStudies.map(c => c.category)))];
  const regions = ["All", ...Array.from(new Set(caseStudies.map(c => c.region)))];

  const filteredStudies = caseStudies.filter(study => {
    return (filter.category === "All" || study.category === filter.category) &&
           (filter.region === "All" || study.region === filter.region);
  });

  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white text-center">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
                Impact & Performance
              </span>
              <h1 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Driving Measurable <span className="text-gradient-gold">Commercial Impact</span>
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed">
                Strategic results for world-class hospitality properties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-cream/30 border-y border-gold/10">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <Filter size={18} className="text-gold" />
                <span className="font-body text-caption tracking-widest uppercase text-richblack/60">Filter Cases</span>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs text-bodytext/50 uppercase tracking-widest">Service:</span>
                  <select 
                    className="bg-transparent border-b border-gold/20 font-body text-body-sm text-richblack py-1 focus:outline-none focus:border-gold"
                    value={filter.category}
                    onChange={(e) => setFilter({ ...filter, category: e.target.value })}
                  >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs text-bodytext/50 uppercase tracking-widest">Region:</span>
                  <select 
                    className="bg-transparent border-b border-gold/20 font-body text-body-sm text-richblack py-1 focus:outline-none focus:border-gold"
                    value={filter.region}
                    onChange={(e) => setFilter({ ...filter, region: e.target.value })}
                  >
                    {regions.map(reg => <option key={reg} value={reg}>{reg}</option>)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Grid */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/case-studies/${study.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden mb-8 shadow-sm">
                      <Image 
                        src={study.image} 
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-3 text-center min-w-[80px]">
                        <div className="text-gold font-display text-2xl leading-none">{study.metric}</div>
                        <div className="text-richblack font-body text-[10px] uppercase tracking-widest mt-1">Impact</div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-body text-[10px] tracking-widest uppercase text-gold">{study.category}</span>
                        <span className="w-1 h-1 rounded-full bg-gold/30"></span>
                        <span className="font-body text-[10px] tracking-widest uppercase text-richblack/40">{study.region}</span>
                      </div>
                      <h3 className="font-display text-2xl text-richblack group-hover:text-gold transition-colors">
                        {study.title}
                      </h3>
                      <p className="font-body text-body-sm text-bodytext/70 leading-relaxed">
                        {study.result}
                      </p>
                      <div className="pt-2 flex items-center text-gold font-body text-caption tracking-wider uppercase group-hover:gap-2 transition-all">
                        View Results <ArrowRight size={16} className="ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
}
