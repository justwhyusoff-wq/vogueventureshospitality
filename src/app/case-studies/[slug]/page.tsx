"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { ArrowRight, Target } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const caseStudyData = {
  "maison-paradis-revenue": {
    title: "Maison Paradis Revenue Growth",
    property: "Maison Paradis",
    location: "Côte d'Azur, France",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    challenge: "A luxury Mediterranean property with strong product but limited commercial reach beyond its local market. High dependency on seasonal local demand led to revenue volatility and underutilized capacity during shoulder months.",
    implementation: "Our team developed a comprehensive market expansion strategy targeting key GCC and Northern European feeder markets. We redesigned the rate architecture to support international distribution and established direct sales channels with elite travel agencies.",
    distribution: "Optimized channel mix by reducing OTA reliance and increasing direct bookings through strategic trade partnerships. Implemented a tiered pricing strategy aligned with high-value international travel windows.",
    impact: [
      { label: "Revenue Growth", value: "34%", description: "Increase in net operating income" },
      { label: "Market Expansion", value: "52%", description: "Growth in GCC source market bookings" },
      { label: "Direct Bookings", value: "28%", description: "Reduction in OTA commission costs" },
      { label: "RevPAR", value: "19%", description: "Increase in average daily rate performance" }
    ],
    quote: "Vogue Ventures Hospitality transformed our commercial footprint. Their strategic access to the GCC market alone shifted our entire annual performance.",
    quoteAuthor: "General Manager, Maison Paradis",
    relatedServices: ["Revenue Generation", "Sales Representation", "Trade Analysis"]
  },
  "royal-atlantis-gcc": {
    title: "The Royal Atlantis GCC Launch",
    property: "The Royal Atlantis",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    challenge: "Launching an iconic ultra-luxury resort in a highly competitive Dubai market required immediate authority and market penetration within the regional travel trade.",
    implementation: "Executed a multi-phase pre-opening sales strategy focusing on top-tier GCC travel operators and HVI (High Value Individual) segments. Established premium positioning through exclusive trade events and personalized relationship management.",
    distribution: "Secured preferred partner status with the region's leading luxury travel networks. Developed bespoke regional offers that catered specifically to the privacy and service expectations of the Middle Eastern elite.",
    impact: [
      { label: "Market Entry", value: "100%", description: "Presence in all major GCC luxury networks" },
      { label: "Booking Pace", value: "45%", description: "Ahead of pre-opening revenue targets" },
      { label: "Visibility", value: "12", description: "Strategic trade events in first 6 months" },
      { label: "Brand Equity", value: "Top 3", description: "Ranked regional luxury preference" }
    ],
    quote: "The launch was seamless. VVH's deep connections in the region gave us an immediate advantage that would have taken years to build independently.",
    quoteAuthor: "Commercial Director, The Royal Atlantis",
    relatedServices: ["Sales Representation", "Event Management", "Business Development"]
  }
};

export default function CaseStudySinglePage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudyData[slug as keyof typeof caseStudyData];

  if (!study) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Case Study Not Found</h1>
        <Link href="/case-studies" className="text-gold underline">Return to Case Studies</Link>
      </div>
    </div>
  );

  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center overflow-hidden">
          <Image 
            src={study.image} 
            alt={study.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-richblack/40"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="section-container w-full text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <Link 
                  href="/case-studies" 
                  className="text-gold font-body text-caption tracking-wider uppercase mb-8 flex items-center gap-2 hover:gap-3 transition-all"
                >
                  <ArrowRight size={16} className="rotate-180" /> Back to Case Studies
                </Link>
                <h1 className="font-display text-display-xl mb-4 leading-tight">{study.title}</h1>
                <p className="font-body text-body-lg text-white/90">{study.property} — {study.location}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Challenge & Implementation */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="font-display text-display-md text-richblack mb-8 underline-gold">Market Challenge</h2>
                <p className="font-body text-body-lg text-bodytext leading-relaxed">
                  {study.challenge}
                </p>
              </div>
              <div>
                <h2 className="font-display text-display-md text-richblack mb-8 underline-gold">Strategic Implementation</h2>
                <p className="font-body text-body-lg text-bodytext leading-relaxed">
                  {study.implementation}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Distribution Strategy */}
        <section className="py-24 bg-cream/30">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-display text-display-md text-richblack mb-8">Distribution Strategy</h2>
              <p className="font-body text-body-lg text-bodytext leading-relaxed">
                {study.distribution}
              </p>
            </div>
          </div>
        </section>

        {/* Revenue & Impact Metrics */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container text-center mb-20">
            <h2 className="font-display text-display-md text-richblack mb-4">Revenue & Performance Impact</h2>
            <div className="w-20 h-0.5 bg-gold mx-auto"></div>
          </div>
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {study.impact.map((metric, index) => (
                <div key={index} className="p-10 bg-cream/20 border border-gold/10 text-center">
                  <div className="text-gold font-display text-5xl mb-4">{metric.value}</div>
                  <h3 className="font-display text-lg text-richblack mb-2 uppercase tracking-wider">{metric.label}</h3>
                  <p className="font-body text-xs text-bodytext/60 tracking-widest uppercase">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Executive Quote */}
        <section className="py-24 bg-richblack text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10">
            <Target size={400} strokeWidth={0.5} />
          </div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-gold font-display text-6xl mb-8 leading-none">&ldquo;</div>
              <p className="font-display text-display-sm mb-10 leading-relaxed italic">
                {study.quote}
              </p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-px bg-gold mb-4"></div>
                <span className="font-body text-caption tracking-widest uppercase text-gold">{study.quoteAuthor}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-white border-b border-gold/10">
          <div className="section-container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <h3 className="font-display text-2xl text-richblack">Applied Strategic Services</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {study.relatedServices.map(service => (
                  <span key={service} className="px-6 py-2 border border-gold/20 font-body text-xs tracking-widest uppercase text-richblack/60">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
}
