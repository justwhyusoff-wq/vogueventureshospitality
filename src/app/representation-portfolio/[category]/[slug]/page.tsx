"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star, ExternalLink } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Partner data mock
const partnersData = {
  "six-senses-rome": {
    name: "Six Senses Rome",
    category: "hotels-resorts",
    location: "Rome, Italy",
    segment: "Ultra-Luxury Urban Resort",
    image: "https://vogueventureshospitality.com/wp-content/uploads/2024/07/six-senses-roME.png",
    overview: "Six Senses Rome is a sanctuary of wellness and sustainability in the heart of the historic center. Housed in the restored Palazzo Salviati Cesi Mellini, the property blends heritage architecture with contemporary luxury and the brand's signature wellness philosophy.",
    highlights: [
      "Bespoke Six Senses Spa with Roman Baths",
      "Sustainable design and operations philosophy",
      "Panoramic rooftop terrace with 360-degree city views",
      "Strategic location near the Trevi Fountain and Pantheon"
    ],
    scope: [
      "GCC & MENAT Market Representation",
      "Strategic Trade Partnerships",
      "High-Value Individual (HVI) Sales",
      "Regional Marketing & PR Coordination"
    ],
    marketFocus: "Positioning the property as the premier wellness destination for discerning travelers from the Middle East and Gulf regions.",
    gallery: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    website: "https://www.sixsenses.com/en/hotels/rome"
  },
  "maison-paradis": {
    name: "Maison Paradis",
    category: "hotels-resorts",
    location: "Côte d'Azur, France",
    segment: "Boutique Coastal Retreat",
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
    overview: "An icon of French Riviera elegance, Maison Paradis offers an intimate escape overlooking the Mediterranean. Known for its exceptional service and private beach access, it represents the pinnacle of seasonal luxury in Southern France.",
    highlights: [
      "Private Mediterranean beach club",
      "Michelin-starred dining experience",
      "Exclusive suites with panoramic sea views",
      "Bespoke concierge services for elite travelers"
    ],
    scope: [
      "European Distribution Optimization",
      "Direct Sales Representation",
      "Trade Analysis & Yield Management",
      "Strategic Event Management"
    ],
    marketFocus: "Targeting high-net-worth individuals from Northern Europe and the GCC during the summer season.",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    ],
    website: "#"
  }
};

export default function PartnerSinglePage() {
  const params = useParams();
  const slug = params.slug as string;
  const partner = partnersData[slug as keyof typeof partnersData];

  if (!partner) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4">Partner Not Found</h1>
        <Link href="/representation-portfolio" className="text-gold underline">Return to Portfolio</Link>
      </div>
    </div>
  );

  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Image */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image 
            src={partner.image} 
            alt={partner.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-richblack/30"></div>
          <div className="absolute inset-0 flex items-end pb-24">
            <div className="section-container w-full text-white">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 font-body text-caption tracking-widest uppercase mb-4">
                  <MapPin size={16} className="text-gold" /> {partner.location}
                </div>
                <h1 className="font-display text-display-xl mb-4">{partner.name}</h1>
                <p className="font-body text-body-lg text-white/90 max-w-2xl">{partner.segment}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7">
                <h2 className="font-display text-display-md text-richblack mb-8">Property Overview</h2>
                <p className="font-body text-body-lg text-bodytext leading-relaxed">
                  {partner.overview}
                </p>
              </div>
              <div className="lg:col-span-5 bg-cream/30 p-10 border border-gold/10">
                <h3 className="font-display text-2xl text-richblack mb-6 flex items-center gap-3">
                  <Star size={20} className="text-gold" /> Highlights
                </h3>
                <ul className="space-y-4">
                  {partner.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3 font-body text-body-md text-bodytext/80">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Representation Scope */}
        <section className="py-24 bg-cream/20">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <h2 className="font-display text-display-md text-richblack mb-8">Representation Scope</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {partner.scope.map((item, i) => (
                    <div key={i} className="bg-white p-6 border border-gold/5 shadow-sm">
                      <CheckCircle2Icon />
                      <p className="font-body text-body-sm font-medium text-richblack mt-4">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="border-l-4 border-gold pl-8">
                  <h3 className="font-display text-2xl text-richblack mb-4">Strategic Market Focus</h3>
                  <p className="font-body text-body-lg text-bodytext italic leading-relaxed">
                    &ldquo;{partner.marketFocus}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container text-center mb-16">
            <h2 className="font-display text-display-md text-richblack">Property Gallery</h2>
          </div>
          <div className="max-w-[1600px] mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {partner.gallery.map((img, i) => (
                <div key={i} className={`relative overflow-hidden ${i === 0 ? 'md:col-span-2 md:aspect-[21/9]' : 'aspect-[4/3]'}`}>
                  <Image 
                    src={img} 
                    alt={`${partner.name} gallery ${i}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-cream/30">
          <div className="section-container text-center">
            <h2 className="font-display text-display-sm text-richblack mb-8 italic">Interested in exploring this property?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center px-10 py-4 border border-gold text-gold font-body text-body-sm font-semibold tracking-wider uppercase hover:bg-gold hover:text-richblack transition-all"
              >
                Official Website <ExternalLink size={16} className="ml-2" />
              </a>
              <Link 
                href="/contact"
                className="group inline-flex items-center px-10 py-4 bg-gold text-richblack font-body text-body-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all"
              >
                Request Consultation <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
}

function CheckCircle2Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
      <path d="m9 12 2 2 4-4"></path>
    </svg>
  );
}
