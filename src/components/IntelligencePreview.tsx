"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

const articles = [
  {
    category: "GCC Market Analysis",
    title: "Evolving Luxury Expectations of GCC Travelers in 2024",
    excerpt:
      "Comprehensive analysis of booking patterns, spending behaviors, and experiential preferences from Saudi Arabia, UAE, and Qatar luxury travelers.",
    readTime: "8 min read",
    featured: true,
  },
  {
    category: "MENAT Distribution",
    title: "Optimizing MENAT Market Access for European Luxury Properties",
    excerpt:
      "Strategic distribution channels and commercial partnerships that drive qualified bookings from Middle East, North Africa and Turkey markets.",
    readTime: "6 min read",
    featured: false,
  },
  {
    category: "European Markets",
    title: "European Luxury Hotel Distribution Benchmarking Report",
    excerpt:
      "Comparative analysis of distribution strategies, RevPAR performance, and market penetration across premium European destinations.",
    readTime: "7 min read",
    featured: false,
  },
];

export default function IntelligencePreview() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featured = articles.find((a) => a.featured);
  const secondary = articles.filter((a) => !a.featured);

  return (
    <section ref={ref} id="intelligence" className="relative py-section bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
            <span className="w-8 h-px bg-gold/50" />
            Market Intelligence
            <span className="w-8 h-px bg-gold/50" />
          </span>
          <h2 className="font-display text-display-lg text-richblack mb-6">
            Regional <span className="text-gradient-gold">Market Insights</span>
          </h2>
          <p className="font-body text-body-md text-bodytext max-w-2xl mx-auto">
            Data-driven analysis of luxury travel trends, booking patterns, and growth opportunities across our core geographic markets.
          </p>
        </motion.div>

        {/* Editorial Layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-10"
        >
          {/* Featured Article */}
          {featured && (
            <motion.article
              variants={staggerItem}
              className="group glass-card overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-card-hover lg:row-span-2 hover-zoom transform hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 transition-transform duration-700 ease-luxury group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1583165278998-6de0c7c4b8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", /* Real luxury hotel in GCC */
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-richblack/10 via-richblack/30 to-richblack/60" />
                <div className="absolute top-6 left-6">
                  <span className="font-body text-caption text-gold tracking-[0.2em] uppercase px-3 py-1.5 bg-richblack/70 backdrop-blur-sm">
                    {featured.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="font-display text-display-sm text-richblack mb-4 group-hover:text-gold transition-colors duration-300 lg:text-display-md">
                  {featured.title}
                </h3>
                <p className="font-body text-body-sm text-bodytext mb-6 leading-relaxed">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-bodytext/60">
                    <Clock size={14} />
                    <span className="font-body text-caption">{featured.readTime}</span>
                  </div>
                  <span className="text-gold/70 group-hover:text-gold transition-colors duration-300">
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          )}

          {/* Secondary Articles */}
          <div className="flex flex-col gap-6">
            {secondary.map((article, index) => (
              <motion.article
                key={article.title}
                variants={staggerItem}
                className="group glass-card overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-card-hover flex-1 transform hover:-translate-y-1"
              >
                {/* Add real image header to each article */}
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 ease-luxury group-hover:scale-105"
                    style={{
                      backgroundImage:
                        index === 0
                          ? "url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" /* MENAT image */
                          : "url('https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')", /* European luxury hotel */
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-richblack/40 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="font-body text-caption text-gold tracking-[0.2em] uppercase px-3 py-1.5 bg-richblack/50 backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                {/* Category already displayed in the image header */}
                <h3 className="font-display text-display-sm text-richblack mb-3 group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-body text-body-sm text-bodytext mb-5 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-bodytext/60">
                    <Clock size={14} />
                    <span className="font-body text-caption">{article.readTime}</span>
                  </div>
                  <span className="text-gold/70 group-hover:text-gold transition-colors duration-300">
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
