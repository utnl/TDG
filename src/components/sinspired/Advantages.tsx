"use client";
import { useEffect, useRef, useState } from "react";

const counters = [
  { value: 150, label: "Projects", suffix: "+" },
  { value: 50, label: "Clients", suffix: "+" },
  { value: 3700, label: "just number 😊", suffix: "" },
];

export default function Advantages() {
  return (
    <section className="container-wrap advantages">
      <div className="container-custom">
        <div className="heading" data-aos="fade-up">
          <h2>BENEFITS</h2>
          <p>BENEFITS</p>
        </div>

        <div className="content" data-aos="fade-up">
          <p>
            We offer qualified, inventive services with a commitment to excellence, 
            covering all aspects of 2D and 3D art, character design, and game elements. 
            Our team ensures a seamless journey from concept to delivery, making your 
            vision a reality.
          </p>
        </div>

        <div className="cards" data-count={counters.length}>
          {counters.map((item, index) => (
            <CounterItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterItem({ value, label, suffix }: { value: number; label: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="counter-item" data-aos="fade-up">
      <div className="counter-inner">
        <span className="counter" data-val={value}>
          {count}
        </span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="counter-label">{label}</div>
    </div>
  );
}
