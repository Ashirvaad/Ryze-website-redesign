import { useRef } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "Ryze helped us increase ROAS while cutting wasted ad spend.",
    name: "Marketing Lead",
    company: "SaaS Company",
    result: "+28% ROAS"
  },
  {
    quote: "The automated audits saved our team hours every week.",
    name: "Growth Manager",
    company: "E-commerce Brand",
    result: "10+ hrs/week saved"
  },
  {
    quote: "Feels like having a senior marketer on autopilot.",
    name: "Agency Founder",
    company: "Digital Agency",
    result: "-21% CPA"
  },
  {
    quote: "Budget optimization alone paid for the tool in weeks.",
    name: "Paid Ads Lead",
    company: "Fintech Startup",
    result: "+18% ROI"
  },
  {
    quote: "Creatives analysis helped us scale winning ads faster.",
    name: "Performance Marketer",
    company: "D2C Brand",
    result: "2× CTR"
  }
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const scrollAmount = 360;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  return (
    <section className="page">
    <section className="testimonials">
      <div className="testimonials-header">
        <h2>Wall of Love ❤️</h2>
        <p>Loved by performance marketers and growth teams</p>
      </div>

      <div className="slider-wrapper">
        <button
          className="arrow left"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div className="testimonial-slider" ref={sliderRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="avatar">{t.name.charAt(0)}</div>

              <p className="quote">“{t.quote}”</p>

              <div className="author">
                <strong>{t.name}</strong>
                <span>{t.company}</span>
              </div>

              <div className="result">{t.result}</div>
            </div>
          ))}
        </div>

        <button
          className="arrow right"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section></section>
  );
}
