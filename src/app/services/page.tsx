"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { 
  Megaphone, 
  Globe2, 
  BarChart3, 
  LineChart, 
  Users, 
  Palette,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Sales Representation",
    slug: "sales-representation",
    description: "Direct market access to key luxury travel segments across GCC, MENAT, and European feeder markets.",
    icon: <Megaphone className="text-gold" size={32} />,
  },
  {
    title: "Business Development",
    slug: "business-development",
    description: "Strategic partnerships with luxury travel agencies, tour operators, and corporate clients.",
    icon: <Globe2 className="text-gold" size={32} />,
  },
  {
    title: "Revenue Generation",
    slug: "revenue-generation",
    description: "Data-driven rate optimization and yield management strategies to maximize RevPAR.",
    icon: <BarChart3 className="text-gold" size={32} />,
  },
  {
    title: "Trade Analysis & Benchmarking",
    slug: "trade-analysis",
    description: "Competitive market intelligence and performance benchmarking to identify revenue opportunities.",
    icon: <LineChart className="text-gold" size={32} />,
  },
  {
    title: "Event Management",
    slug: "event-management",
    description: "Strategic presence at key industry events and trade shows, connecting properties with qualified buyers.",
    icon: <Users className="text-gold" size={32} />,
  },
  {
    title: "Marketing & PR",
    slug: "marketing-pr",
    description: "Targeted exposure in key feeder markets through strategic media partnerships and luxury networks.",
    icon: <Palette className="text-gold" size={32} />,
  },
];

export default function ServicesPage() {
  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <span className="text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
                Expertise & Solutions
              </span>
              <h1 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Commercial Growth <span className="text-gradient-gold">Solutions</span>
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed">
                Representation & Revenue Strategy for Luxury Hospitality
              </p>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-cream/30">
          <div className="section-container">
            <div className="max-w-3xl">
              <p className="font-body text-body-lg text-bodytext leading-relaxed">
                Vogue Ventures Hospitality provides specialized commercial representation and strategic growth advisory for the world&apos;s most distinguished hotels, resorts, and destinations. We bridge the gap between luxury properties and high-value feeder markets through sophisticated distribution strategies and direct market access.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/services/${service.slug}`} className="block h-full">
                    <div className="mb-8">{service.icon}</div>
                    <h3 className="font-display text-display-sm text-richblack mb-4 transition-colors group-hover:text-gold relative inline-block">
                      {service.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-500 group-hover:w-full"></span>
                    </h3>
                    <p className="font-body text-body-md text-bodytext/70 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-gold font-body text-caption tracking-wider uppercase group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={16} className="ml-2" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ConsultationCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
}
