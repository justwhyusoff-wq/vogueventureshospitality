"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { Globe, Target, Compass, Award } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    title: "Commercial Precision",
    description: "Our strategies are built on data-driven insights and rigorous market analysis, ensuring every move is calculated for maximum revenue impact.",
    icon: <Target className="text-gold" size={32} />
  },
  {
    title: "Global Network",
    description: "We maintain deep-rooted relationships across the world's most influential luxury travel networks, providing our partners with immediate authority.",
    icon: <Globe className="text-gold" size={32} />
  },
  {
    title: "Strategic Agility",
    description: "In an evolving luxury landscape, we adapt quickly to market shifts, identifying and capturing emerging opportunities before the competition.",
    icon: <Compass className="text-gold" size={32} />
  },
  {
    title: "Excellence in Execution",
    description: "We are committed to the highest standards of representation, reflecting the prestige and identity of the world-class properties we serve.",
    icon: <Award className="text-gold" size={32} />
  }
];

export default function OurStoryPage() {
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
                The Firm
              </span>
              <h1 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Strategic Hospitality <span className="text-gradient-gold">Representation</span>
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed max-w-2xl mx-auto">
                A specialized commercial growth firm for the world&apos;s most distinguished properties.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Philosophy */}
        <section className="py-24 bg-cream/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-display text-display-md text-richblack mb-8">Mission & Philosophy</h2>
                <div className="space-y-6">
                  <p className="font-body text-body-lg text-bodytext leading-relaxed">
                    Vogue Ventures Hospitality was founded on a simple principle: luxury hospitality requires more than just exposure—it requires strategic commercial authority.
                  </p>
                  <p className="font-body text-body-lg text-bodytext/80 leading-relaxed">
                    We believe that the most successful luxury properties are those that successfully bridge the gap between world-class experiences and sophisticated distribution. Our philosophy is rooted in the belief that representation is an active, results-driven discipline that should directly impact a property&apos;s bottom line.
                  </p>
                </div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden shadow-xl border border-gold/10">
                <Image 
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Luxury Hospitality Philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Market Positioning */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container text-center mb-20">
            <h2 className="font-display text-display-md text-richblack">Regional Presence</h2>
            <div className="w-20 h-0.5 bg-gold mx-auto mt-6"></div>
          </div>
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-10 border border-gold/5 bg-cream/10">
                <h3 className="font-display text-2xl text-richblack mb-4">Europe</h3>
                <p className="font-body text-body-md text-bodytext/70 leading-relaxed">
                  Connecting premium properties with the most established wealth centers across Northern and Western Europe.
                </p>
              </div>
              <div className="p-10 border border-gold/5 bg-cream/10">
                <h3 className="font-display text-2xl text-richblack mb-4">GCC & MENAT</h3>
                <p className="font-body text-body-md text-bodytext/70 leading-relaxed">
                  Strategic access to the world&apos;s highest-spending travel segments in the Middle East and Gulf regions.
                </p>
              </div>
              <div className="p-10 border border-gold/5 bg-cream/10">
                <h3 className="font-display text-2xl text-richblack mb-4">United States</h3>
                <p className="font-body text-body-md text-bodytext/70 leading-relaxed">
                  Premium market penetration across key gateway cities and luxury resort feeder markets in North America.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Framework */}
        <section className="py-24 bg-cream/30">
          <div className="section-container text-center mb-20">
            <h2 className="font-display text-display-md text-richblack">Our Approach Framework</h2>
          </div>
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 border border-gold/10 shadow-sm text-center"
                >
                  <div className="mb-6 flex justify-center">{pillar.icon}</div>
                  <h3 className="font-display text-xl text-richblack mb-4">{pillar.title}</h3>
                  <p className="font-body text-body-sm text-bodytext/70 leading-relaxed">
                    {pillar.description}
                  </p>
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
