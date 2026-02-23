"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

const categoryItems = [
  {
    name: "Hotels & Resorts",
    description: "Luxury accommodations with full-service amenities and bespoke experiences",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/hotels-resorts"
  },
  {
    name: "Luxury Villas",
    description: "Private estate experiences with dedicated service and exclusive amenities",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/luxury-villas"
  },
  {
    name: "Tourism Boards",
    description: "Strategic destination marketing and commercial development programs",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/tourism-boards"
  },
  {
    name: "Wellness Destinations",
    description: "Transformative health and wellness experiences in luxury settings",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/wellness-destinations"
  },
  {
    name: "Fine Dining",
    description: "Culinary excellence with distinctive concepts and signature experiences",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    link: "/fine-dining"
  },
];

export default function PortfolioPreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="portfolio" className="relative py-32 bg-cream/30">
      <div className="section-container">
        {/* Gold decorative elements */}
        <div className="absolute top-20 left-10 w-16 h-16 border-t border-l border-gold/20 hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border-b border-r border-gold/20 hidden lg:block"></div>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28 max-w-3xl mx-auto"
        >
          <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
            <span className="w-8 h-px bg-gold/50" />
            Commercial Representation
            <span className="w-8 h-px bg-gold/50" />
          </span>
          <h2 className="font-display text-display-lg mb-8">
            Our <span className="text-gradient-gold">Luxury</span> Portfolio
          </h2>
          <p className="font-body text-body-md text-bodytext max-w-2xl mx-auto">
            Strategic representation across key luxury hospitality segments, delivering targeted market access and revenue growth.
          </p>
        </motion.div>

        {/* Category Blocks - 5-column grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mt-20"
        >
          {categoryItems.map((category, index) => (
            <motion.div
              key={category.name}
              variants={staggerItem}
              className="group hover-zoom flex flex-col bg-white rounded-lg border border-gold/10 hover:shadow-card-hover hover:border-gold/30 transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-2 h-full"
            >
              {/* Category Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-103">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center filter brightness-95 group-hover:brightness-105 transition-all duration-700"
                    priority={index < 3}
                  />
                </div>
                {/* Removed gradient overlay as requested */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-gold/30 via-gold/10 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 flex items-center justify-center relative overflow-hidden">
                <div className="flex flex-col items-center z-10 w-full">
                  <h3 className="font-display text-richblack text-center relative font-medium text-lg">
                    {category.name}
                  </h3>
                  <div className="h-0.5 w-0 bg-gold mt-3 mb-3 group-hover:w-20 transition-all duration-700 ease-in-out" />
                  <div className="mt-2 overflow-hidden h-0 group-hover:h-auto transition-all duration-500">
                    <p className="text-bodytext/80 text-xs text-center font-body transition-all duration-700 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      {category.description.split(' ').slice(0, 4).join(' ')}...
                    </p>
                  </div>
                  <div className="mt-3 overflow-hidden">
                    <span className="text-gold text-xs uppercase tracking-wider font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                
                {/* Modern animated gradient backdrop with decorative accent */}
                <div 
                  className="absolute -bottom-20 left-0 right-0 h-full w-full bg-gradient-to-t from-gold/10 to-transparent group-hover:bottom-0 transition-all duration-700 ease-in-out opacity-0 group-hover:opacity-100"
                />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-gold/40 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
