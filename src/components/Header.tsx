"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useUIStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/representation-portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Intelligence", href: "/intelligence" },
  { label: "Our Story", href: "/our-story" },
];

export default function Header() {
  const { isMobileMenuOpen, isHeaderSolid, setHeaderSolid, toggleMobileMenu, setMobileMenuOpen } =
    useUIStore();

  useEffect(() => {
    const handleScroll = () => {
      setHeaderSolid(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setHeaderSolid]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury",
          isHeaderSolid
            ? "bg-richblack/95 backdrop-blur-md border-b border-gold/10"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50 flex items-center gap-3">
              <Image 
                src="https://vogueventureshospitality.com/wp-content/uploads/2022/01/vogue-venture.png" 
                alt="Vogue Ventures Hospitality" 
                width={168}
                height={56}
                className="h-12 md:h-14 object-contain"  
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-cream/70 hover:text-gold text-body-sm font-body tracking-wider uppercase transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-6">
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center px-7 py-3 bg-gold text-richblack font-body text-body-sm font-semibold tracking-wider uppercase hover:bg-gold-light transition-all duration-300 hover:shadow-gold-glow"
              >
                Request Strategic Consultation
              </Link>

              <button
                onClick={toggleMobileMenu}
                className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center text-cream"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-richblack/98 backdrop-blur-xl"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-display text-display-md text-cream hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center px-10 py-4 bg-gold text-richblack font-body text-body-md font-semibold tracking-wider uppercase"
                >
                  Request Strategic Consultation
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
