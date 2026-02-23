"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Hotels & Resorts",
    slug: "hotels-resorts",
    positioning: "Luxury accommodations with full-service amenities and bespoke experiences.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Luxury Villas",
    slug: "luxury-villas",
    positioning: "Private estate experiences with dedicated service and exclusive amenities.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Tourism Boards",
    slug: "tourism-boards",
    positioning: "Strategic destination marketing and commercial development programs.",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Wellness Destinations",
    slug: "wellness-destinations",
    positioning: "Transformative health and wellness experiences in luxury settings.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Fine Dining",
    slug: "fine-dining",
    positioning: "Culinary excellence with distinctive concepts and signature experiences.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
                The Portfolio
              </span>
              <h1 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Our Representation <span className="text-gradient-gold">Portfolio</span>
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed">
                Curated Luxury Hospitality Partnerships
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Blocks */}
        <section className="py-24 bg-cream/30">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/representation-portfolio/${category.slug}`} className="block h-full bg-white border border-gold/10 overflow-hidden shadow-sm hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-1">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image 
                        src={category.image} 
                        alt={category.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-richblack/60 via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="font-display text-xl text-white mb-2">{category.name}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="font-body text-xs text-bodytext/70 mb-6 leading-relaxed line-clamp-2">
                        {category.positioning}
                      </p>
                      <div className="flex items-center text-gold font-body text-[10px] tracking-widest uppercase group-hover:gap-2 transition-all">
                        View Collection <ArrowRight size={12} className="ml-2" />
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
