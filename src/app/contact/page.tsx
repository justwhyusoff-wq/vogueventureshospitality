"use client";

import { LenisProvider } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, ArrowRight, Clock } from "lucide-react";

const regions = [
  {
    name: "Europe",
    cities: "London, Paris, Milan",
    email: "europe@vogueventureshospitality.com",
    phone: "+44 20 7946 0123"
  },
  {
    name: "GCC",
    cities: "Dubai, Riyadh, Doha",
    email: "gcc@vogueventureshospitality.com",
    phone: "+971 55 1666183"
  },
  {
    name: "MENAT",
    cities: "Istanbul, Cairo, Casablanca",
    email: "menat@vogueventureshospitality.com",
    phone: "+90 212 345 6789"
  },
  {
    name: "United States",
    cities: "New York, Miami, Los Angeles",
    email: "usa@vogueventureshospitality.com",
    phone: "+1 212 555 0198"
  }
];

export default function ContactPage() {
  return (
    <LenisProvider>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="section-container relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
                Connect With Our Team
              </span>
              <h1 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Explore Commercial <span className="text-gradient-gold">Partnership</span>
              </h1>
              <p className="font-display text-display-sm text-bodytext/80 leading-relaxed max-w-2xl mx-auto">
                Explore strategic partnership opportunities with our team across Europe, GCC, and MENAT regions. Strategic market expansion and distribution excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="py-24 bg-cream/30">
          <div className="section-container">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Contact Info Sidebar */}
                <div className="lg:col-span-4 space-y-12">
                  <div>
                    <h3 className="font-display text-2xl text-richblack mb-6">General Inquiries</h3>
                    <div className="space-y-4">
                      <a href="mailto:sales@vogueventureshospitality.com" className="flex items-center gap-4 text-bodytext hover:text-gold transition-colors">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gold/10">
                          <Mail size={18} className="text-gold" />
                        </div>
                        <span className="font-body text-body-sm">sales@vogueventureshospitality.com</span>
                      </a>
                      <div className="flex items-center gap-4 text-bodytext">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gold/10">
                          <Clock size={18} className="text-gold" />
                        </div>
                        <span className="font-body text-body-sm">Response within 24 hours</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl text-richblack mb-6">Global Headquarters</h3>
                    <div className="flex items-start gap-4 text-bodytext">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-gold/10 flex-shrink-0">
                        <MapPin size={18} className="text-gold" />
                      </div>
                      <span className="font-body text-body-sm leading-relaxed">
                        Vogue Venture Hospitality<br/>
                        Downtown Dubai<br/>
                        United Arab Emirates
                      </span>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-8">
                  <div className="bg-white p-10 md:p-14 shadow-xl border border-gold/5 rounded-lg">
                    <form className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="block font-body text-caption text-bodytext/80 tracking-widest uppercase font-medium">Property Type</label>
                          <select className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors appearance-none">
                            <option>Select Type</option>
                            <option>Hotel & Resort</option>
                            <option>Luxury Villa</option>
                            <option>Tourism Board</option>
                            <option>Fine Dining</option>
                            <option>Wellness Destination</option>
                          </select>
                        </div>
                        <div className="space-y-3">
                          <label className="block font-body text-caption text-bodytext/80 tracking-widest uppercase font-medium">Region of Interest</label>
                          <select className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors appearance-none">
                            <option>Select Region</option>
                            <option>Europe</option>
                            <option>GCC</option>
                            <option>MENAT</option>
                            <option>USA</option>
                            <option>Global Representation</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="block font-body text-caption text-bodytext/80 tracking-widest uppercase font-medium">Commercial Objectives</label>
                        <textarea 
                          rows={4}
                          placeholder="Tell us about your revenue and distribution goals..."
                          className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors resize-none"
                        ></textarea>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="block font-body text-caption text-bodytext/80 tracking-widest uppercase font-medium">Implementation Timeline</label>
                          <select className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors appearance-none">
                            <option>Select Timeline</option>
                            <option>Immediate (1-3 months)</option>
                            <option>Strategic (3-6 months)</option>
                            <option>Future Planning (6+ months)</option>
                          </select>
                        </div>
                        <div className="flex items-end pb-2">
                          <button type="submit" className="w-full group inline-flex items-center justify-center px-8 py-5 bg-gold text-richblack font-body text-body-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-gold-glow">
                            Request Strategic Consultation <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Representation Section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="section-container">
            <div className="text-center mb-20">
              <h2 className="font-display text-display-md text-richblack mb-6">Regional Representation</h2>
              <div className="w-20 h-0.5 bg-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {regions.map((region) => (
                <div key={region.name} className="space-y-6">
                  <div className="flex items-center gap-3 text-gold">
                    <Globe size={20} />
                    <h3 className="font-display text-xl text-richblack">{region.name}</h3>
                  </div>
                  <div className="space-y-2">
                    <p className="font-body text-xs text-bodytext/50 tracking-widest uppercase">Key Markets</p>
                    <p className="font-body text-body-sm text-richblack">{region.cities}</p>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-gold/10">
                    <a href={`mailto:${region.email}`} className="block font-body text-xs text-bodytext/70 hover:text-gold transition-colors">{region.email}</a>
                    <a href={`tel:${region.phone.replace(/\s/g, '')}`} className="block font-body text-xs text-bodytext/70 hover:text-gold transition-colors">{region.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Button section - Large and Centered */}
        <section className="py-24 bg-richblack text-white relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="section-container relative z-10">
            <h2 className="font-display text-display-lg mb-10 max-w-3xl mx-auto">Ready to Elevate Your Property&apos;s Commercial Position?</h2>
            <button className="group inline-flex items-center px-12 py-6 bg-gold text-richblack font-body text-body-md font-bold tracking-wider uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-gold-glow">
              Request Strategic Consultation <ArrowRight size={20} className="ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </LenisProvider>
  );
}
