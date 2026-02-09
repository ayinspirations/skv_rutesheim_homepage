
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

export const Stats: React.FC = () => {
  return (
    <section className="py-16 md:py-32 px-4 md:px-6 bg-[#fbfbfd]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          <StatCard label="Abteilungen" value={14} />
          <StatCard label="Mitglieder" value={1250} suffix="+" />
          <StatCard label="Teams" value={42} />
          <StatCard label="Sporttage" value={7} />
        </div>
      </div>
    </section>
  );
};

const StatCard: React.FC<{ label: string; value: number; suffix?: string }> = ({ label, value, suffix }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-white p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col items-center justify-center text-center group hover:shadow-xl transition-all duration-500"
  >
    <span className="text-3xl md:text-6xl font-black tracking-tight text-black mb-1 md:mb-4">
      <Counter value={value} suffix={suffix} />
    </span>
    <span className="text-[8px] md:text-sm font-black text-black/30 uppercase tracking-[0.2em]">
      {label}
    </span>
  </motion.div>
);
