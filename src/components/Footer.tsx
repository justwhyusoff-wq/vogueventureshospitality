"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Linkedin,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const footerLinks = {
  services: [
    { label: "Sales Representation", href: "/services/sales-representation" },
    { label: "Business Development", href: "/services/business-development" },
    { label: "Revenue Generation", href: "/services/revenue-generation" },
    { label: "Trade Analysis", href: "/services/trade-analysis" },
    { label: "Marketing & PR", href: "/services/marketing-pr" },
  ],
  company: [
    { label: "Our Story", href: "/our-story" },
    { label: "Regional Presence", href: "/contact#regions" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Market Intelligence", href: "/intelligence" },
    { label: "Case Studies", href: "/case-studies" },
  ],
};

const socialLinks = [
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white pt-section-sm pb-10">
      <div className="gold-divider mb-section-sm" />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand Column */}
          <motion.div variants={staggerItem} className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 border border-gold flex items-center justify-center">
                <span className="text-gold font-display text-sm font-bold">V</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-richblack text-sm tracking-[0.2em] uppercase leading-none">
                  Vogue Ventures
                </span>
                <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-body mt-0.5">
                  Hospitality
                </span>
              </div>
            </Link>
            <p className="font-body text-body-sm text-bodytext leading-relaxed mb-8 max-w-xs">
              Strategic representation and commercial growth for luxury hospitality properties across key global markets.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-gold/10 bg-cream/50 text-bodytext/70 hover:border-gold hover:text-gold hover:bg-cream transition-all duration-300 rounded-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={staggerItem}>
            <h4 className="font-body text-caption text-gold tracking-[0.2em] uppercase mb-6 font-medium">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={staggerItem}>
            <h4 className="font-body text-caption text-gold tracking-[0.2em] uppercase mb-6 font-medium">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Column */}
          <motion.div variants={staggerItem}>
            <h4 className="font-body text-caption text-gold tracking-[0.2em] uppercase mb-6 font-medium">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-body-sm text-bodytext hover:text-gold transition-colors duration-300 inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h4 className="font-body text-caption text-gold tracking-[0.2em] uppercase mb-4 font-medium">
                Regional Presence
              </h4>
              <p className="font-body text-body-sm text-bodytext/80 leading-relaxed">
                Europe · GCC · MENAT<br />
                United States
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="gold-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-caption text-bodytext/60">
            © {new Date().getFullYear()} Vogue Ventures Hospitality. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-caption text-bodytext/60 hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-caption text-bodytext/60 hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="font-body text-caption text-bodytext/60 hover:text-gold transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
