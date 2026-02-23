"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "All",
  "GCC Trends",
  "European Distribution",
  "MENAT Market Access",
  "Luxury Consumer Insights"
];

const articles = [
  {
    title: "Evolving Luxury Expectations of GCC Travelers in 2024",
    slug: "gcc-luxury-expectations-2024",
    category: "GCC Trends",
    excerpt: "Comprehensive analysis of booking patterns, spending behaviors, and experiential preferences from Saudi Arabia, UAE, and Qatar luxury travelers.",
    date: "Feb 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1583165278998-6de0c7c4b8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: true
  },
  {
    title: "Optimizing MENAT Market Access for European Properties",
    slug: "optimizing-menat-market-access",
    category: "MENAT Market Access",
    excerpt: "Strategic distribution channels and commercial partnerships that drive qualified bookings from Middle East and Turkey markets.",
    date: "Jan 28, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    title: "European Luxury Hotel Distribution Benchmarking Report",
    slug: "european-luxury-distribution-report",
    category: "European Distribution",
    excerpt: "Comparative analysis of distribution strategies, RevPAR performance, and market penetration across premium European destinations.",
    date: "Jan 15, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false
  },
  {
    title: "The Rise of Regenerative Wellness in Luxury Hospitality",
    slug: "regenerative-wellness-luxury-trends",
    category: "Luxury Consumer Insights",
    excerpt: "Exploring how high-net-worth individuals are shifting their wellness focus from recovery to total regenerative experiences.",
    date: "Dec 05, 2023",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    featured: false
  }
];

export default function IntelligencePage() {
  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

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
                Market Insights
              </span>
              <h1 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Regional Market <span className="text-gradient-gold">Intelligence</span>
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed">
                Strategic analysis of the luxury hospitality landscape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Bar */}
        <section className="py-6 bg-cream/30 border-y border-gold/10 sticky top-20 z-30 backdrop-blur-md">
          <div className="section-container">
            <div className="flex overflow-x-auto gap-8 no-scrollbar pb-2 md:pb-0">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  className="whitespace-nowrap font-body text-caption tracking-widest uppercase text-richblack/60 hover:text-gold transition-colors"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="py-24 bg-white">
            <div className="section-container">
              <Link href={`/intelligence/${featuredArticle.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-7 aspect-[16/9] relative overflow-hidden">
                  <Image 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="lg:col-span-5">
                  <span className="font-body text-caption text-gold tracking-widest uppercase mb-6 block">Featured Analysis</span>
                  <h2 className="font-display text-display-md text-richblack mb-6 group-hover:text-gold transition-colors leading-tight">
                    {featuredArticle.title}
                  </h2>
                  <p className="font-body text-body-lg text-bodytext/70 mb-8 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-richblack/40 font-body text-caption tracking-widest uppercase">
                    <span className="flex items-center gap-2"><Clock size={14} /> {featuredArticle.readTime}</span>
                    <span className="flex items-center gap-2">Read Article <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" /></span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-24 bg-cream/20">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
              {regularArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/intelligence/${article.slug}`} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden mb-8">
                      <Image 
                        src={article.image} 
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="bg-richblack/50 backdrop-blur-md text-white font-body text-[10px] tracking-widest uppercase px-3 py-1.5 border border-white/10">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-display text-2xl text-richblack mb-4 group-hover:text-gold transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="font-body text-body-sm text-bodytext/70 mb-6 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-gold font-body text-caption tracking-wider uppercase group-hover:gap-2 transition-all">
                      Read Full Report <ArrowRight size={14} className="ml-2" />
                    </div>
                  </Link>
                </motion.article>
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
