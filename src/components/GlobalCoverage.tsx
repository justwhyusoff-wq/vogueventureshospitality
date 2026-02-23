"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Globe } from "lucide-react";

const regions = [
  {
    name: "Europe",
    description: "Strategic representation across key luxury markets in UK, France, Italy, Spain and Switzerland",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    marketFocus: "Connecting established European luxury properties with GCC and MENAT affluent travelers"
  },
  {
    name: "GCC",
    description: "Premium market access in UAE, Saudi Arabia, Qatar, Kuwait and Bahrain",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    marketFocus: "Facilitating luxury property distribution to high-spending GCC clientele"
  },
  {
    name: "MENAT",
    description: "Strategic presence in Middle East, North Africa and Turkey's luxury hospitality markets",
    image: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    marketFocus: "Developing emerging luxury destinations for discerning international clientele"
  },
  {
    name: "United States",
    description: "Premium market representation in key gateway cities and luxury resort destinations",
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    marketFocus: "Connecting American luxury properties with international affluent travelers"
  },
];

export default function GlobalCoverage() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="global-coverage" className="relative py-36 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-32"
        >
          <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
            <span className="w-8 h-px bg-gold/50" />
            International Representation
            <span className="w-8 h-px bg-gold/50" />
          </span>
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center">
              <Globe size={24} className="text-gold" />
            </div>
          </div>
          <h2 className="font-display text-display-xl text-richblack mb-8">
            Our <span className="text-gradient-gold">Global Coverage</span>
          </h2>
          <p className="font-body text-body-md text-richblack/70 max-w-xl mx-auto">
            Strategic representation across key luxury feeder markets
          </p>
        </motion.div>

        {/* Regions Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {regions.map((region) => (
            <motion.div
              key={region.name}
              variants={staggerItem}
              className="flex bg-cream hover-zoom shadow-card hover:shadow-card-hover transition-all duration-500 rounded-lg transform hover:-translate-y-1"
            >
              {/* Region Image */}
              <div className="w-1/3 relative overflow-hidden rounded-l-lg">
                <Image
                  src={region.image}
                  alt={region.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-richblack/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="font-display text-display-sm text-cream rotate-[-90deg]">
                    {region.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="w-2/3 p-8 flex flex-col justify-center">
                <p className="font-body text-body-sm text-richblack/80 leading-relaxed mb-6">
                  {region.description.split(' ').slice(0, 12).join(' ')}...
                </p>
                <div className="mt-auto">
                  <span className="font-body text-caption tracking-wider uppercase text-gold block mb-2 group-hover:text-gold-dark transition-colors duration-300">Key Markets</span>
                  <p className="font-body text-body-sm text-richblack font-medium">
                    {region.name === "Europe" && "UK • France • Italy • Switzerland"}
                    {region.name === "GCC" && "UAE • Saudi Arabia • Qatar • Kuwait"}
                    {region.name === "MENAT" && "Turkey • Egypt • Morocco • Jordan"}
                    {region.name === "United States" && "NYC • Miami • LA • Las Vegas"}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
