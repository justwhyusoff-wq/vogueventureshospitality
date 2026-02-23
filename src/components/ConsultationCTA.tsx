"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

export default function ConsultationCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="consultation" className="relative py-36 bg-cream overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.1) 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(26,26,26,1) 0%, rgba(42,42,42,1) 50%, rgba(26,26,26,1) 100%)",
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
              <span className="w-8 h-px bg-gold/50" />
              Strategic Partnership
              <span className="w-8 h-px bg-gold/50" />
            </span>
            <h2 className="font-display text-display-lg text-richblack mb-6">
              Explore Commercial <span className="text-gradient-gold">Partnership</span>
            </h2>
            <p className="font-body text-body-md text-bodytext max-w-2xl mx-auto">
              Discuss your market expansion goals with our regional directors to explore 
              how strategic representation can drive revenue growth and distribution across key luxury markets.
            </p>
          </motion.div>

          {/* Form Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-card p-10 md:p-14 lg:p-20 shadow-xl border border-gold/5 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <label className="block font-body text-caption text-bodytext/80 tracking-[0.15em] uppercase mb-4 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-bodytext/30"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block font-body text-caption text-bodytext/80 tracking-[0.15em] uppercase mb-4 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-bodytext/30"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block font-body text-caption text-bodytext/80 tracking-[0.15em] uppercase mb-4 font-medium">
                    Property / Company
                  </label>
                  <input
                    type="text"
                    placeholder="Hotel, resort or company name"
                    className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-bodytext/30"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block font-body text-caption text-bodytext/80 tracking-[0.15em] uppercase mb-4 font-medium">
                    Market Interest
                  </label>
                  <select
                    className="w-full bg-transparent border-b border-gold/20 text-bodytext/50 font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors duration-300 appearance-none"
                    disabled
                  >
                    <option>Select target market</option>
                  </select>
                </div>
              </div>

              <div className="mb-14">
                <label className="block font-body text-caption text-bodytext/80 tracking-[0.15em] uppercase mb-4 font-medium">
                  Commercial Objectives
                </label>
                <textarea
                  placeholder="Tell us about your revenue and distribution goals..."
                  rows={3}
                  className="w-full bg-transparent border-b border-gold/20 text-richblack font-body text-body-md py-3 focus:border-gold focus:outline-none transition-colors duration-300 placeholder:text-bodytext/30 resize-none"
                  readOnly
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-14">
                <div className="max-w-sm">
                  <p className="font-body text-caption text-bodytext/50 mb-2">
                    All discussions are confidential. Our team operates across Europe, GCC, and the United States.
                  </p>
                  <p className="font-body text-caption text-gold">
                    We typically respond within 24 business hours.
                  </p>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-12 border-t border-gold/20 pt-14 mb-14">
                <div>
                  <h3 className="font-display text-display-sm text-richblack mb-4">Our Offices</h3>
                  <p className="font-body text-body-sm text-bodytext mb-6">
                    Vogue Venture Hospitality<br/>
                    Downtown Dubai<br/>
                    United Arab Emirates
                  </p>
                  
                  <h3 className="font-display text-body-md text-richblack mb-3 mt-6">Direct Contact</h3>
                  <ul className="space-y-2">
                    <li className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300">
                      <a href="mailto:sales@vogueventureshospitality.com" className="inline-flex items-center gap-2">
                        <span className="w-5 h-5 flex items-center justify-center bg-gold/10 rounded-full text-gold">@</span>
                        sales@vogueventureshospitality.com
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-display text-display-sm text-richblack mb-4">Regional Contacts</h3>
                  <ul className="space-y-4">
                    <li>
                      <span className="font-body text-caption text-gold tracking-[0.15em] uppercase block mb-1">UAE</span>
                      <a href="tel:+971551666183" className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300">+971 55 1666183</a>
                    </li>
                    <li>
                      <span className="font-body text-caption text-gold tracking-[0.15em] uppercase block mb-1">KSA</span>
                      <a href="tel:+966566733725" className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300">+966 566 733725</a>
                    </li>
                    <li>
                      <span className="font-body text-caption text-gold tracking-[0.15em] uppercase block mb-1">Qatar</span>
                      <a href="tel:+97433139073" className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300">+974 33 139073</a>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="w-full flex justify-center">
                <button
                  type="button"
                  className="group inline-flex items-center px-16 py-6 bg-gold text-richblack font-body text-body-md font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-gold-light hover:shadow-gold-glow whitespace-nowrap"
                >
                  Request Strategic Consultation
                  <ArrowRight
                    size={16}
                    className="ml-3 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
