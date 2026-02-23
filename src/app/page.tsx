"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStrip from "@/components/BrandStrip";
import PortfolioPreview from "@/components/PortfolioPreview";
import ServicesPreview from "@/components/ServicesPreview";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import GlobalCoverage from "@/components/GlobalCoverage";
import AuthorityMetrics from "@/components/AuthorityMetrics";
import IntelligencePreview from "@/components/IntelligencePreview";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <LenisProvider>
      <Header />
      <main>
        <Hero /> {/* Keep hero dark */}
        <BrandStrip /> {/* New brand strip component */}
        <PortfolioPreview />
        <ServicesPreview /> {/* Will have horizontal scroll */}
        <FeaturedCaseStudy />
        <GlobalCoverage /> 
        <AuthorityMetrics />
        <IntelligencePreview />
        <ConsultationCTA /> {/* Keep CTA dark */}
        <CookieConsent /> {/* Premium cookie popup */}
      </main>
      <Footer />
    </LenisProvider>
  );
}
