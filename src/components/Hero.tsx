"use client";

import { useEffect, useRef, Suspense, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroAmbient = dynamic(() => import("./HeroAmbient"), {
  ssr: false,
  loading: () => null,
});

gsap.registerPlugin(ScrollTrigger);

// Headline structure for better typography and spacing
const headline = {
  line1: "Global Luxury",
  line2: "Hospitality Representation",
  line3: "Across Europe & MENAT"
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [connectionSpeed, setConnectionSpeed] = useState<'fast' | 'slow'>('fast');

  // Detect connection speed
  useEffect(() => {
    // Check connection speed using Navigation API or performance metrics
    if ('connection' in navigator) {
      const connection = (navigator as { connection?: { effectiveType?: string; saveData?: boolean } }).connection;
      const isSlowConnection = connection?.effectiveType === '2g' || 
                              connection?.effectiveType === '3g' || 
                              connection?.saveData;
                              
      if (isSlowConnection) {
        setConnectionSpeed('slow');
      }
    } else {
      // Fallback method - check how quickly a small test image loads
      const startTime = Date.now();
      const testImage = new Image();
      testImage.onload = () => {
        const endTime = Date.now();
        const loadTime = endTime - startTime;
        if (loadTime > 150) { // If test image takes more than 150ms, assume slower connection
          setConnectionSpeed('slow');
        }
      };
      testImage.src = '/images/connection-test.png'; // Small 1x1 pixel test image
    }
  }, []);

  // Adjust video quality based on detected connection speed
  useEffect(() => {
    if (videoRef.current && connectionSpeed === 'slow') {
      // For slow connections, pause video until it has buffered enough
      const videoElement = videoRef.current;
      videoElement.pause();
      
      // Start playback once we have enough data
      const handleCanPlay = () => {
        if (videoElement) {
          videoElement.play().catch(() => {
            // If autoplay fails, at least we have the poster image
            console.log('Video autoplay failed due to browser restrictions');
          });
        }
      };
      
      videoElement.addEventListener('canplaythrough', handleCanPlay);
      return () => {
        if (videoElement) {
          videoElement.removeEventListener('canplaythrough', handleCanPlay);
        }
      };
    }
  }, [connectionSpeed]);
  
  // GSAP animations setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Enhanced parallax effect on scroll
      if (contentRef.current) {
        // Main content moves up and fades slightly
        gsap.to(contentRef.current, {
          y: -100,
          opacity: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "80% top",
            scrub: true,
          },
        });
        
        // Find headline elements for staggered parallax
        const headline1 = contentRef.current.querySelector('.headline-1');
        const headline2 = contentRef.current.querySelector('.headline-2');
        const headline3 = contentRef.current.querySelector('.headline-3');
        
        if (headline1 && headline2 && headline3) {
          // Create staggered parallax effect for each line
          gsap.to(headline1, {
            y: -120,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "80% top",
              scrub: true,
            },
          });
          
          gsap.to(headline2, {
            y: -80,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "80% top",
              scrub: true,
            },
          });
          
          gsap.to(headline3, {
            y: -60,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "80% top",
              scrub: true,
            },
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Luxury Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Fallback background image in case video fails to load */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80')"
          }}
        />
        {/* Self-hosted Video Background */}
        <div className="absolute inset-0 pointer-events-none">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="/video/hero-poster.jpg"
            className="absolute w-full h-full object-cover"
            preload={connectionSpeed === 'fast' ? 'auto' : 'metadata'}
          >
            {/* For fast connections, load high-quality video */}
            {connectionSpeed === 'fast' && (
              <source src="/video/Hero.mp4" type="video/mp4" />
            )}
            
            {/* For slow connections, use a lower quality version if available */}
            {connectionSpeed === 'slow' && (
              <source src="/video/Hero-low.mp4" type="video/mp4" />
            )}
            
            {/* Fallback to high quality if low quality isn't available */}
            {connectionSpeed === 'slow' && (
              <source src="/video/Hero.mp4" type="video/mp4" />
            )}
            
            {/* Add WebM version if available for better performance */}
            {/* <source src="/video/hero.webm" type="video/webm" /> */}
          </video>
        </div>
        <div className="absolute inset-0 bg-richblack opacity-60" /> {/* Increased overlay opacity */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 30% 50%, rgba(212, 175, 55, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-[1] bg-hero-overlay opacity-75"
      /> {/* Stronger overlay for better contrast */}

      {/* R3F Ambient Layer - Only load on desktop */}
      <div className="hidden md:block">
        <Suspense fallback={null}>
          <HeroAmbient />
        </Suspense>
      </div>
      
      {/* Simple gradient for mobile */}
      <div className="md:hidden absolute inset-0 z-[1] pointer-events-none opacity-40">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.15), transparent), radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.1), transparent)"
          }}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="relative z-10 section-container text-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          {/* Logo moved to header */}
          <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase">
            <span className="w-8 h-px bg-gold/50" />
            Luxury Hospitality Group
            <span className="w-8 h-px bg-gold/50" />
          </span>
        </motion.div>

        {/* Headline - Consolidated for better SEO and hierarchy */}
        <div className="mb-12 md:mb-20 space-y-8 md:space-y-10">
          <div className="overflow-hidden">
            <motion.h1 
              className="headline-1 font-display text-display-xl text-cream leading-[1.1] md:leading-[1.15]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block mb-4">{headline.line1}</span>
              <span className="text-gradient-gold block">{headline.line2}</span>
            </motion.h1>
          </div>

          <motion.div 
            className="headline-3 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block font-body text-body-sm md:text-body-md text-gold tracking-[0.4em] uppercase border-t border-gold/30 pt-6">
              {headline.line3}
            </span>
          </motion.div>
        </div>

        {/* Subheadline - increased spacing */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
          className="font-body text-body-md md:text-body-lg text-white/90 font-medium max-w-2xl mx-auto mb-16 md:mb-24 px-4 md:px-0 leading-relaxed tracking-wide"
        >
          Driving commercial growth and market access for luxury hospitality properties
        </motion.p>

        {/* Single primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
          className="px-4 md:px-0"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center px-16 py-7 bg-gold text-richblack font-body text-body-sm font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-gold-light hover:shadow-gold-glow transform hover:-translate-y-1"
          >
            Request Strategic Consultation
            <ArrowRight className="ml-4 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 font-body text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-gold/50" />
        </motion.div>
      </motion.div>

      {/* Bottom Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 z-10 gold-divider" />
    </section>
  );
}
