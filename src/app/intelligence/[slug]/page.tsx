"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight, Share2, Tag } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const articleData = {
  "gcc-luxury-expectations-2024": {
    title: "Evolving Luxury Expectations of GCC Travelers in 2024",
    category: "GCC Trends",
    date: "Feb 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1583165278998-6de0c7c4b8f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    content: [
      {
        type: "paragraph",
        text: "The luxury hospitality landscape in the GCC is undergoing a fundamental transformation. As we move through 2024, the discerning travelers from Saudi Arabia, the UAE, and Qatar are no longer satisfied with traditional markers of prestige. Instead, they are seeking deeper alignment with brand values, radical personalization, and seamless digital-to-physical transitions."
      },
      {
        type: "pullquote",
        text: "The modern GCC luxury traveler values time and privacy above all else, viewing hospitality not just as a service, but as an essential facilitator of their lifestyle."
      },
      {
        type: "heading",
        text: "Radical Personalization & Privacy"
      },
      {
        type: "paragraph",
        text: "Privacy remains the cornerstone of GCC luxury travel, but the definition has expanded. It is no longer just about physical seclusion; it is about data privacy, quiet service, and the ability to move through a property undetected. Luxury hotels that successfully implement 'invisible service'—anticipating needs before they are articulated—are capturing the lion's share of this market."
      },
      {
        type: "heading",
        text: "The Multi-Generational Shift"
      },
      {
        type: "paragraph",
        text: "We are observing a significant increase in multi-generational family travel. This requires properties to rethink their suite configurations and connecting room strategies. The commercial impact is clear: properties that can accommodate large families without compromising on the luxury experience for other guests are seeing a 25% higher RevPAR from this segment."
      }
    ],
    tags: ["GCC", "Luxury Travel", "Market Analysis", "Hospitality Trends"]
  }
};

export default function ArticleSinglePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = articleData[slug as keyof typeof articleData];

  if (!article) return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="font-display text-4xl mb-4 text-richblack">Article Not Found</h1>
        <Link href="/intelligence" className="text-gold underline">Return to Intelligence</Link>
      </div>
    </div>
  );

  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Article Hero */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544981037-8312c40c1dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <span className="text-gold font-body text-caption tracking-widest uppercase">{article.category}</span>
                <span className="w-1 h-1 rounded-full bg-gold/30"></span>
                <span className="text-richblack/40 font-body text-caption tracking-widest uppercase flex items-center gap-2">
                  <Calendar size={12} /> {article.date}
                </span>
              </div>
              <h1 className="font-display text-display-lg md:text-display-xl text-richblack mb-10 leading-tight">
                {article.title}
              </h1>
              <div className="flex items-center justify-center gap-6 text-richblack/40 font-body text-caption tracking-widest uppercase">
                <span className="flex items-center gap-2"><Clock size={14} /> {article.readTime}</span>
                <button className="flex items-center gap-2 hover:text-gold transition-colors"><Share2 size={14} /> Share</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-4">
          <div className="max-w-[1400px] mx-auto relative h-[60vh] md:h-[70vh] overflow-hidden">
            <Image 
              src={article.image} 
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-24 bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <div className="editorial-content space-y-12">
                {article.content.map((item, index) => {
                  if (item.type === "paragraph") {
                    return <p key={index} className="font-body text-body-lg text-bodytext leading-relaxed">{item.text}</p>;
                  }
                  if (item.type === "heading") {
                    return <h2 key={index} className="font-display text-display-md text-richblack pt-4">{item.text}</h2>;
                  }
                  if (item.type === "pullquote") {
                    return (
                      <div key={index} className="py-12 border-y border-gold/20 my-16">
                        <blockquote className="font-display text-display-sm text-richblack italic text-center leading-relaxed">
                          &ldquo;{item.text}&rdquo;
                        </blockquote>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              {/* Tags */}
              <div className="mt-20 pt-10 border-t border-gold/10 flex flex-wrap items-center gap-4">
                <Tag size={16} className="text-gold" />
                {article.tags.map(tag => (
                  <span key={tag} className="px-4 py-1.5 bg-cream/50 text-richblack/60 font-body text-[10px] tracking-widest uppercase">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Back Link */}
              <div className="mt-16 text-center">
                <Link 
                  href="/intelligence" 
                  className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-widest uppercase hover:gap-5 transition-all"
                >
                  <ArrowRight size={16} className="rotate-180" /> Back to Intelligence
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Preview */}
        <section className="py-24 bg-cream/30">
          <div className="section-container text-center mb-16">
            <h2 className="font-display text-display-sm text-richblack">Continue Reading</h2>
          </div>
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Link href="#" className="group block">
                <div className="relative aspect-[16/9] overflow-hidden mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Related"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <h3 className="font-display text-2xl text-richblack mb-3 group-hover:text-gold transition-colors">Optimizing MENAT Market Access</h3>
                <div className="flex items-center text-gold font-body text-caption tracking-widest uppercase">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </div>
              </Link>
              <Link href="#" className="group block">
                <div className="relative aspect-[16/9] overflow-hidden mb-6">
                  <Image 
                    src="https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                    alt="Related"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <h3 className="font-display text-2xl text-richblack mb-3 group-hover:text-gold transition-colors">European Distribution Report</h3>
                <div className="flex items-center text-gold font-body text-caption tracking-widest uppercase">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </div>
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
