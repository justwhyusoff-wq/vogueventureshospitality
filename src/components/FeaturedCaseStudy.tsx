"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { slideInLeft, slideInRight } from "@/lib/animations";

const metrics = [
  { label: "Market Challenge", value: "Over-reliance on OTAs with low profitability" },
  { label: "Distribution Strategy", value: "Direct booking optimization + strategic partnerships" },
  { label: "Revenue Improvement", value: "34% growth in net operating income" },
  { label: "Market Expansion", value: "Increased GCC bookings by 52%" },
];

export default function FeaturedCaseStudy() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="case-study" className="relative py-32 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-28"
        >
          <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
            <span className="w-8 h-px bg-gold/50" />
            Commercial Impact
            <span className="w-8 h-px bg-gold/50" />
          </span>
          <h2 className="font-display text-display-xl text-richblack leading-tight mb-2">
            Driving <span className="text-gradient-gold">Measurable Results</span>
          </h2>
          <div className="w-40 h-px bg-gold/30 mx-auto mt-8"></div>
        </motion.div>

        {/* Case Study Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mt-20">
          {/* Left: Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-card border border-gold/10">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-luxury hover:scale-105"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-richblack/70 via-richblack/40 to-richblack/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 border border-gold/30 flex items-center justify-center mx-auto mb-4 bg-white/90 backdrop-blur-sm rounded-sm">
                    <span className="font-display text-gold text-display-sm">MP</span>
                  </div>
                  <p className="text-white font-body text-body-sm font-medium">Maison Paradis</p>
                  <p className="text-gold font-body text-caption mt-1">Côte d&apos;Azur, France</p>
                </div>
              </div>
              {/* Gold accent border */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/30" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="font-body text-caption text-gold tracking-[0.2em] uppercase block mb-4">
              Strategic Representation — Mediterranean Resort
            </span>
            <h3 className="font-display text-display-lg text-richblack mb-6">
              Commercial Growth Case Study
            </h3>
            <div className="gold-divider-left w-32 mb-8" />
            <p className="font-body text-body-md text-bodytext mb-10 leading-relaxed">
              A luxury Mediterranean property with strong product but limited commercial reach beyond its local market.
              Our team developed and executed a comprehensive market expansion strategy targeting key GCC feeder markets,
              optimized rate structures, and established strategic distribution partnerships to drive significant revenue growth.
            </p>

            {/* Metrics */}
            <div className="space-y-8 mb-14">
              {metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="py-4 border-b border-gold/10"
                >
                  <span className="font-body text-body-sm text-gold tracking-wider uppercase block mb-2">{metric.label}</span>
                  <span className="font-display text-display-md text-richblack">
                    {metric.value}
                  </span>
                </motion.div>
              ))}
            </div>

            <a
              href="#"
              className="group inline-flex items-center gap-3 font-body text-body-sm text-gold tracking-wider uppercase hover:text-gold-light transition-colors duration-300"
            >
              View Commercial Strategy
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
