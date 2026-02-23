"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Building2, TrendingUp, Handshake } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface MetricProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    function step(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);

      setCount(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <span className="font-display text-display-xl text-richblack tabular-nums leading-none">
      {count}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

const metrics: MetricProps[] = [
  { icon: <Globe size={24} />, value: 27, suffix: "+", label: "Countries Represented" },
  { icon: <Building2 size={24} />, value: 45, suffix: "+", label: "Luxury Properties" },
  { icon: <TrendingUp size={24} />, value: 28, suffix: "%", label: "Avg Revenue Increase" },
  { icon: <Handshake size={24} />, value: 35, suffix: "+", label: "Strategic Partnerships" },
];

export default function AuthorityMetrics() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-28 bg-cream">
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(212, 175, 55, 0.2) 0%, transparent 70%)",
      }} />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="section-container"
      >
        <div className="text-center mb-16">
          <h3 className="font-display text-display-md text-richblack mb-4">Our Impact Over <span className="text-gold">5 Years</span></h3>
          <p className="font-body text-body-sm text-bodytext max-w-lg mx-auto">Delivering measurable commercial growth for luxury hospitality partners</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={staggerItem}
              className="text-center relative"
            >
              {i < metrics.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
              )}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-gold bg-white rounded-full shadow-card">
                {metric.icon}
              </div>
              <div className="mb-5">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} inView={isInView} />
              </div>
              <p className="font-body text-caption text-bodytext/80 tracking-[0.2em] uppercase font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 gold-divider" />
    </section>
  );
}
