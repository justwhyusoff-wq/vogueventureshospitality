"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

// Real brand logos - updated with user-provided URLs
const brandLogos = [
  "https://vogueventureshospitality.com/wp-content/uploads/2024/07/six-senses-roME.png",
  "https://vogueventureshospitality.com/wp-content/uploads/2024/07/VISIT.png",
  "https://vogueventureshospitality.com/wp-content/uploads/2025/07/palloze-logo-image-1.jpg",
  "https://vogueventureshospitality.com/wp-content/uploads/2025/07/romeo-logo.jpg",
  "https://vogueventureshospitality.com/wp-content/uploads/2024/07/1-1-scaled-1.jpg",
  "https://vogueventureshospitality.com/wp-content/uploads/2024/07/8-scaled-1.jpg",
];


export default function BrandStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Add animation speed control functionality on hover
  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const slowAnimation = () => {
        // Switch to slower animation on hover
        scrollElement.style.animation = 'scrollBrandsSlow 5s linear infinite';
      };
      
      const speedUpAnimation = () => {
        // Faster animation when not hovering
        scrollElement.style.animation = 'scrollBrands 1s linear infinite';
      };
      
      // Set initial fast speed
      scrollElement.style.animation = 'scrollBrands 1s linear infinite';
      
      scrollElement.addEventListener('mouseenter', slowAnimation);
      scrollElement.addEventListener('mouseleave', speedUpAnimation);
      
      return () => {
        scrollElement.removeEventListener('mouseenter', slowAnimation);
        scrollElement.removeEventListener('mouseleave', speedUpAnimation);
      };
    }
  }, []);

  return (
    <section className="py-6 bg-white border-b border-gold/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-gold/70 font-body text-caption tracking-wider uppercase">
            <span className="text-xs">Our Partners</span>
            <span className="h-px w-4 bg-gold/40"></span>
          </div>

          {/* NavBar-Style Brand Strip - shows exactly 3 visible brands */}
          <div className="flex-1 overflow-hidden">
            <div className="relative py-1 md:py-2">
              <div
                ref={scrollRef}
                className="flex items-center justify-center md:justify-start gap-8 py-2"
                style={{
                  whiteSpace: "nowrap",
                  willChange: "transform",
                  /* Animation will be controlled by JS */
                }}
              >
                {/* Only show 3 visible brands at a time */}
                {brandLogos.map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 h-12 w-32 md:h-16 md:w-40 opacity-80 hover:opacity-100 transition-all duration-500 hover:scale-105"
                  >
                    <div className="relative h-full w-full filter grayscale hover:grayscale-0 transition-all duration-500 transform hover:translate-y-[-2px]">
                      <Image
                        src={logo}
                        alt={`Brand partner ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="160px"
                        unoptimized
                        priority
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <button
              className="p-2 bg-white rounded-full border border-gold/30 text-gold hover:bg-gold/5 hover:border-gold transition-all duration-500 shadow-sm hover:shadow-md"
              aria-label="View all partners"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
