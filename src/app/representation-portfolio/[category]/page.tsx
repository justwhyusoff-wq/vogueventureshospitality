"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const categoryData = {
  "hotels-resorts": {
    name: "Hotels & Resorts",
    positioning: "Distinguished luxury accommodations and full-service resorts.",
    partners: [
      {
        name: "Six Senses Rome",
        slug: "six-senses-rome",
        location: "Rome, Italy",
        positioning: "An urban oasis in the heart of the Eternal City.",
        image: "https://vogueventureshospitality.com/wp-content/uploads/2024/07/six-senses-roME.png"
      },
      {
        name: "Maison Paradis",
        slug: "maison-paradis",
        location: "Côte d'Azur, France",
        positioning: "Mediterranean elegance with direct coastal access.",
        image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
      },
      {
        name: "The Royal Atlantis",
        slug: "the-royal-atlantis",
        location: "Dubai, UAE",
        positioning: "Iconic architectural landmark and ultra-luxury resort.",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "luxury-villas": {
    name: "Luxury Villas",
    positioning: "Exclusive private estates and bespoke residential experiences.",
    partners: [
      {
        name: "Villa La Massa",
        slug: "villa-la-massa",
        location: "Tuscany, Italy",
        positioning: "Historic Florentine villa set along the Arno River.",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "tourism-boards": {
    name: "Tourism Boards",
    positioning: "Strategic destination marketing and development programs.",
    partners: [
      {
        name: "Visit Switzerland",
        slug: "visit-switzerland",
        location: "Switzerland",
        positioning: "Premium destination marketing for the Alpine region.",
        image: "https://vogueventureshospitality.com/wp-content/uploads/2024/07/VISIT.png"
      }
    ]
  },
  "wellness-destinations": {
    name: "Wellness Destinations",
    positioning: "Transformative health and luxury wellness retreats.",
    partners: [
      {
        name: "Aman Spa Resort",
        slug: "aman-spa",
        location: "Phuket, Thailand",
        positioning: "Serene wellness sanctuary focused on holistic health.",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  },
  "fine-dining": {
    name: "Fine Dining",
    positioning: "Signature culinary concepts and Michelin-starred experiences.",
    partners: [
      {
        name: "L'Ambrosia",
        slug: "l-ambrosia",
        location: "Paris, France",
        positioning: "Exceptional culinary identity in the heart of Paris.",
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
      }
    ]
  }
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const data = categoryData[category as keyof typeof categoryData];

  if (!data) return null;

  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <Link 
                href="/representation-portfolio" 
                className="text-gold font-body text-caption tracking-wider uppercase mb-8 flex items-center gap-2 hover:gap-3 transition-all"
              >
                <ArrowRight size={16} className="rotate-180" /> Back to Portfolio
              </Link>
              <h1 className="font-display text-display-xl text-richblack mb-6 leading-tight">
                {data.name}
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed">
                {data.positioning}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24 bg-cream/30">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {data.partners.map((partner, index) => (
                <motion.div
                  key={partner.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/representation-portfolio/${category}/${partner.slug}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden mb-6 bg-white border border-gold/10">
                      <Image 
                        src={partner.image} 
                        alt={partner.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-gold font-body text-[10px] tracking-widest uppercase mb-3">
                      <MapPin size={12} /> {partner.location}
                    </div>
                    <h3 className="font-display text-2xl text-richblack mb-3 group-hover:text-gold transition-colors">
                      {partner.name}
                    </h3>
                    <p className="font-body text-body-sm text-bodytext/70 mb-6 leading-relaxed">
                      {partner.positioning}
                    </p>
                    <div className="flex items-center text-gold font-body text-caption tracking-wider uppercase group-hover:gap-2 transition-all">
                      View Partnership <ArrowRight size={16} className="ml-2" />
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
