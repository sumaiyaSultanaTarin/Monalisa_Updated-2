import React, { useEffect, useRef, useState } from "react";

const targetValues = {
  awards: 140,
  clients: 182,
  trainers: 130,
  treatment: 167,
};

export default function Counter() {
  const [counters, setCounters] = useState({
    awards: 0,
    clients: 0,
    trainers: 0,
    treatment: 0,
  });

  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          // Start animation
          Object.entries(targetValues).forEach(([key, value]) => {
            let start = 0;
            const increment = Math.ceil(value / 100);

            const interval = setInterval(() => {
              start += increment;
              if (start >= value) {
                start = value;
                clearInterval(interval);
              }
              setCounters((prev) => ({
                ...prev,
                [key]: start,
              }));
            }, 20);
          });

          setHasAnimated(true); // ensure only once
        }
      },
      { threshold: 0.3 } // 30% visible hole trigger hobe
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="counter_item"
      className="counter section-padding"
      style={{
        backgroundImage: "url(assets/img/bg/counter-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="row count text-center">
          {[
            { title: "Awards won", key: "awards" },
            { title: "Our Clients", key: "clients" },
            { title: "Trainers", key: "trainers" },
            { title: "Treatment", key: "treatment" },
          ].map((item, index) => (
            <div
              key={index}
              className="col-sm-3 col-xs-6 wow fadeInLeft"
              data-wow-duration="1000ms"
              data-wow-delay={`${(index + 1) * 200}ms`}
            >
              <div className="timer">
                <h2 className="time_counter">{counters[item.key]}</h2>
                <p className="counter_title">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
