"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/ConsultationCTA";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Target
} from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

const serviceContent = {
  "sales-representation": {
    title: "Sales Representation",
    positioning: "Direct market access to high-value travel segments.",
    overview: "We provide a dedicated sales force that acts as an extension of your team, delivering direct access to the world&apos;s most lucrative luxury travel segments. Our representation model focuses on building long-term relationships with key decision-makers in the travel trade, ensuring your property remains top-of-mind for high-net-worth bookings.",
    methodology: [
      {
        title: "Target Identification",
        description: "Identifying high-potential travel agencies and corporate partners specifically aligned with your property&apos;s segment."
      },
      {
        title: "Direct Outreach",
        description: "Personalized sales calls and presentations to qualified buyers across our core geographic markets."
      },
      {
        title: "Relationship Management",
        description: "Ongoing engagement and support for trade partners to maintain booking momentum and loyalty."
      },
      {
        title: "Performance Tracking",
        description: "Comprehensive reporting on sales activities, lead generation, and converted booking inquiries."
      }
    ]
  },
  "business-development": {
    title: "Business Development",
    positioning: "Strategic distribution expansion and partnership acquisition.",
    overview: "Identifying and securing high-impact partnerships with luxury travel trade and corporate entities. We expand your property's distribution footprint by connecting you with specialized operators and high-value corporate accounts that traditional sales channels often miss.",
    methodology: [
      {
        title: "Market Mapping",
        description: "Analyzing untapped distribution opportunities within Europe, GCC, and North American markets."
      },
      {
        title: "Contract Negotiation",
        description: "Securing favorable commercial terms with strategic partners to ensure sustainable revenue growth."
      },
      {
        title: "Partnership Integration",
        description: "Seamlessly onboarding new distribution partners and ensuring your property is effectively represented."
      },
      {
        title: "Yield Monitoring",
        description: "Regularly evaluating partner performance to optimize contribution and ROI."
      }
    ]
  },
  "revenue-generation": {
    title: "Revenue Generation",
    positioning: "Data-driven yield optimization for luxury properties.",
    overview: "Maximizing net operating income through sophisticated pricing strategies and channel management. Our approach combines market intelligence with advanced revenue management principles to ensure your property achieves its maximum commercial potential.",
    methodology: [
      {
        title: "Rate Architecture",
        description: "Developing robust pricing structures that reflect property value while remaining competitive in the market."
      },
      {
        title: "Channel Mix Optimization",
        description: "Balancing direct bookings with strategic third-party distribution to reduce OTA dependency."
      },
      {
        title: "Dynamic Pricing",
        description: "Implementing real-time rate adjustments based on demand patterns and competitive shifts."
      },
      {
        title: "RevPAR Enhancement",
        description: "Focusing on key performance indicators to drive sustainable growth in rooms and ancillary revenue."
      }
    ]
  },
  "trade-analysis": {
    title: "Trade Analysis & Benchmarking",
    positioning: "Strategic market intelligence and competitive positioning.",
    overview: "Deep-dive analysis of market trends and competitor performance to inform strategic decision-making. We provide the data-driven insights necessary to understand your position in the luxury landscape and identify clear pathways for commercial growth.",
    methodology: [
      {
        title: "Data Collection",
        description: "Gathering comprehensive market data and competitor pricing across targeted distribution channels."
      },
      {
        title: "Competitive Set Analysis",
        description: "Evaluating your property's performance against direct competitors to identify strengths and weaknesses."
      },
      {
        title: "Gap Identification",
        description: "Locating missed revenue opportunities and distribution voids in your current strategy."
      },
      {
        title: "Strategic Recommendations",
        description: "Actionable commercial insights designed to improve market share and revenue performance."
      }
    ]
  },
  "event-management": {
    title: "Event Management",
    positioning: "Premium industry presence and high-value networking.",
    overview: "Strategic coordination of presence at key global luxury travel events and trade shows. We ensure your property is represented at the right venues, meeting the right buyers, with a presentation that reflects your premium brand identity.",
    methodology: [
      {
        title: "Event Selection",
        description: "Prioritizing industry events that offer the highest concentration of relevant buyers for your property."
      },
      {
        title: "Delegate Qualification",
        description: "Vetting meeting requests to ensure your time is focused on buyers with verified booking potential."
      },
      {
        title: "Appointment Scheduling",
        description: "Managing complex event diaries to maximize high-value engagement throughout the show."
      },
      {
        title: "Follow-up Strategy",
        description: "Post-event lead management to convert handshakes into confirmed commercial partnerships."
      }
    ]
  },
  "marketing-pr": {
    title: "Marketing & PR",
    positioning: "Strategic exposure in key luxury feeder markets.",
    overview: "Building brand authority and awareness among affluent travelers and the luxury travel trade. We develop targeted communication strategies that position your property as a premier choice for discerning international guests.",
    methodology: [
      {
        title: "Media Strategy",
        description: "Developing comprehensive marketing plans that leverage the most effective channels for luxury reach."
      },
      {
        title: "Press Relations",
        description: "Facilitating connections with top-tier travel media and luxury lifestyle publications."
      },
      {
        title: "Influencer Engagement",
        description: "Curating partnerships with high-authority creators whose audience aligns with your property's profile."
      },
      {
        title: "Content Distribution",
        description: "Ensuring your property's story is told effectively across trade and consumer touchpoints."
      }
    ]
  }
};

const markets = [
  { name: "Europe", description: "UK, France, Italy, Spain, Switzerland" },
  { name: "GCC", description: "UAE, Saudi Arabia, Qatar, Kuwait, Bahrain" },
  { name: "MENAT", description: "Turkey, Egypt, Morocco, Jordan" },
  { name: "USA", description: "Key gateway cities & luxury resort destinations" }
];

export default function ServiceSinglePage() {
  const params = useParams();
  const slug = params.slug as string;
  const content = serviceContent[slug as keyof typeof serviceContent];

  if (!content) return null;

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
              <Link 
                href="/services" 
                className="text-gold font-body text-caption tracking-wider uppercase mb-8 flex items-center gap-2 hover:gap-3 transition-all"
              >
                <ArrowRight size={16} className="rotate-180" /> Back to Services
              </Link>
              <h1 className="font-display text-display-xl text-richblack mb-6 leading-tight">
                {content.title}
              </h1>
              <p className="font-display text-display-sm text-gradient-gold leading-tight italic">
                {content.positioning}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Commercial Overview */}
        <section className="py-20 bg-cream/30">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-display-md text-richblack mb-8">Commercial Overview</h2>
                <p className="font-body text-body-lg text-bodytext leading-relaxed mb-8">
                  {content.overview}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-gold" />
                    <span className="font-body text-body-md text-richblack">Direct market access & representation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-gold" />
                    <span className="font-body text-body-md text-richblack">Revenue growth & yield optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-gold" />
                    <span className="font-body text-body-md text-richblack">Strategic distribution partnerships</span>
                  </div>
                </div>
              </div>
              <div className="aspect-[4/3] bg-white border border-gold/10 p-8 shadow-card flex items-center justify-center">
                <Target size={120} className="text-gold/20" strokeWidth={1} />
              </div>
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <div className="text-center mb-20">
              <h2 className="font-display text-display-md text-richblack mb-6">Strategic Methodology</h2>
              <div className="w-20 h-0.5 bg-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.methodology.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-cream flex items-center justify-center font-display text-gold text-xl border border-gold/20">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="font-display text-display-sm text-richblack mb-3">{step.title}</h3>
                    <p className="font-body text-body-md text-bodytext/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markets Served */}
        <section className="py-24 bg-cream/30">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-display-md text-richblack">Markets Served</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {markets.map((market) => (
                <div key={market.name} className="bg-white p-8 border border-gold/5 shadow-sm text-center">
                  <Globe className="text-gold mx-auto mb-6" size={32} strokeWidth={1.5} />
                  <h3 className="font-display text-xl text-richblack mb-3">{market.name}</h3>
                  <p className="font-body text-xs text-bodytext/60 tracking-wider uppercase">
                    {market.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Preview */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <div className="bg-richblack p-12 md:p-20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-30 group-hover:scale-105 transition-transform duration-1000"></div>
              <div className="relative z-10 max-w-3xl">
                <span className="text-gold font-body text-caption tracking-widest uppercase mb-6 block">Featured Impact</span>
                <h2 className="font-display text-display-lg text-cream mb-8">Driving Commercial Results in the Mediterranean</h2>
                <Link href="/case-studies" className="inline-flex items-center px-10 py-4 bg-gold text-richblack font-body text-body-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all">
                  View Case Study <ArrowRight size={16} className="ml-3" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ConsultationCTA />
      </main>
      <Footer />
    </LenisProvider>
  );
}
