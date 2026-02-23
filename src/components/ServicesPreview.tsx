"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Megaphone, Globe2, Users, BarChart3, LineChart, Palette } from "lucide-react";

const services = [
  {
    icon: <Megaphone size={28} />,
    title: "Sales Representation",
    description:
      "Direct market access to key luxury travel segments across GCC, MENAT, and European feeder markets, driving qualified booking inquiries.",
  },
  {
    icon: <Globe2 size={28} />,
    title: "Business Development",
    description:
      "Strategic partnerships with luxury travel agencies, tour operators, and corporate clients to expand distribution channels.",
  },
  {
    icon: <BarChart3 size={28} />,
    title: "Revenue Generation",
    description:
      "Data-driven rate optimization and yield management strategies to maximize RevPAR and drive commercial performance.",
  },
  {
    icon: <LineChart size={28} />,
    title: "Trade Analysis & Benchmarking",
    description:
      "Competitive market intelligence and performance benchmarking to identify revenue opportunities and optimize distribution.",
  },
  {
    icon: <Users size={28} />,
    title: "Event Management",
    description:
      "Strategic presence at key industry events and trade shows, connecting luxury properties with qualified buyers and travel professionals.",
  },
  {
    icon: <Palette size={28} />,
    title: "Marketing & PR",
    description:
      "Targeted exposure in key feeder markets through strategic media partnerships, trade relationships, and luxury industry networks.",
  },
];

export default function ServicesPreview() {
  const ref = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [initialLoad, setInitialLoad] = useState(true);

  // Register GSAP plugins
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  // Set up enhanced horizontal scroll effect that triggers on scroll, completes horizontal movement, then continues vertical scroll
  useEffect(() => {
    if (typeof window === "undefined" || !servicesRef.current || !containerRef.current) return;

    const services = servicesRef.current;
    const container = containerRef.current;
    const marketingCardElement = document.querySelector('[data-service="Marketing & PR"]');
    
    // Calculate the distance to the Marketing & PR card
    let scrollDistance = 0;
    if (marketingCardElement) {
      // Get position of the Marketing & PR card
      const marketingCardRect = marketingCardElement.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      
      // Calculate distance to center the Marketing & PR card
      scrollDistance = marketingCardRect.left - containerRect.left - (window.innerWidth / 2) + (marketingCardRect.width / 2);
      
      // Add a buffer so the last card is fully visible
      scrollDistance = Math.min(scrollDistance, services.scrollWidth - window.innerWidth);
    } else {
      // Fallback if element not found
      scrollDistance = services.scrollWidth - window.innerWidth;
    }
    
    // The scroll amount needed to complete the horizontal movement
    const scrollAmount = window.innerHeight; // Use viewport height as the scroll amount
    
    // Create the horizontal scroll effect that completes, then allows continued vertical scroll
    const scrollTween = gsap.to(services, {
      x: -scrollDistance,
      ease: "power1.out", // Smoother easing function
      scrollTrigger: {
        trigger: container,
        start: "top 30%", // Start when section is 30% from the top of viewport
        end: `+=${scrollAmount}`, // End after scrolling the defined amount
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 0.5, // Smoother scrub
        invalidateOnRefresh: true,
        onEnter: () => {
          // Highlight cards on enter
          gsap.to('[data-service]', {
            scale: 1,
            stagger: 0.05,
            duration: 0.4,
            ease: "back.out(1.5)"
          });
        },
        onUpdate: self => {
          // Add a visual indicator when reaching the end
          if (self.progress > 0.95) {
            const marketingCard = document.querySelector('[data-service="Marketing & PR"]');
            if (marketingCard) {
              marketingCard.classList.add('highlight-service');
            }
          } else {
            const marketingCard = document.querySelector('[data-service="Marketing & PR"]');
            if (marketingCard) {
              marketingCard.classList.remove('highlight-service');
            }
          }
          
          // Update opacity based on scroll progress for a staggered reveal effect
          services.querySelectorAll('[data-service]').forEach((card, index) => {
            const visibilityThreshold = index / (services.children.length - 1);
            if (self.progress > visibilityThreshold) {
              gsap.to(card, { opacity: 1, duration: 0.3 });
            }
          });
        },
        onLeave: () => {
          // When we leave the section, the horizontal scroll is complete
          const marketingCard = document.querySelector('[data-service="Marketing & PR"]');
          if (marketingCard) {
            marketingCard.classList.add('highlight-service');
          }
        },
        onLeaveBack: () => {
          // When scrolling back up
          const marketingCard = document.querySelector('[data-service="Marketing & PR"]');
          if (marketingCard) {
            marketingCard.classList.remove('highlight-service');
          }
        }
      }
    });

    // Clean up the ScrollTrigger when the component is unmounted
    return () => {
      scrollTween.scrollTrigger?.kill();
    };
  }, [initialLoad]);

  // Set initial load to false after first render
  useEffect(() => {
    setInitialLoad(false);
  }, []);

  return (
    <section ref={ref} id="services" className="relative bg-white">
      <div ref={containerRef} className="horizontal-scroll-container min-h-screen">
        <div className="section-container relative">
          {/* Section Header - Fixed Position */}
          <div ref={headerRef} className="absolute top-12 left-0 right-0 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <span className="inline-flex items-center gap-3 text-gold font-body text-caption tracking-[0.3em] uppercase mb-6 block">
                <span className="w-10 h-px bg-gold/50" />
                Commercial Services
                <span className="w-10 h-px bg-gold/50" />
              </span>
              <h2 className="font-display text-display-xl text-richblack mb-8 leading-tight">
                Driving <span className="text-gradient-gold">Revenue Growth</span>
              </h2>
              <div className="relative">
                <p className="font-body text-body-md text-bodytext max-w-2xl mx-auto mb-6">
                  Scroll to explore our services
                </p>
                <motion.div 
                  className="absolute left-1/2 -bottom-12 transform -translate-x-1/2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14"></path>
                    <path d="m19 12-7 7-7-7"></path>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Horizontal Scrolling Content */}
          <div 
            ref={servicesRef} 
            className="horizontal-scroll-content items-center px-[30vw] pt-52 pb-32"
          >
            <div className="flex items-stretch gap-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0.4, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="glass-card w-[380px] flex-shrink-0 p-8 lg:p-10 shadow-card hover:shadow-card-hover transition-all duration-500 group cursor-pointer relative overflow-hidden"
                  data-service={service.title}
                >
                  {/* Animated gradient border on hover */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-gold/0 via-gold/80 to-gold/0 rounded-lg opacity-0 group-hover:opacity-100 blur-[2px] group-hover:animate-border-flow"></div>
                  
                  {/* Card content with z-index to appear above the animated border */}
                  <div className="relative z-10 bg-white p-6 h-full rounded-lg flex flex-col">
                    {/* Icon with floating animation */}
                    <div className="w-16 h-16 flex items-center justify-center mb-6 text-gold/70 group-hover:text-gold transition-colors duration-300 group-hover:animate-float bg-cream/50 group-hover:bg-cream rounded-lg">
                      {service.icon}
                    </div>
                    
                    <h3 className="font-display text-display-sm text-richblack mb-4 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="font-body text-body-sm text-bodytext leading-relaxed group-hover:text-richblack transition-colors duration-300 flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Animated line that expands from center */}
                    <div className="relative h-px w-full mt-6 overflow-hidden">
                      <div className="absolute inset-0 w-0 left-1/2 -translate-x-1/2 h-[2px] bg-gold group-hover:w-full transition-all duration-700 ease-out"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
