import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./CaseStudiesPage.css";

export default function CaseStudiesPage() {
  return (
    <>
      <Header />

      <section className="case-hero">
        <h1>Real Results from AI-Driven Marketing</h1>
        <p>How teams improved performance using Ryze.</p>
      </section>

      <section className="case-grid">
        <div className="case-card">
          <h3>SaaS Company</h3>
          <p>Reduced CPA by 22% while scaling spend.</p>
          <span>+22% ROAS</span>
        </div>

        <div className="case-card">
          <h3>E-commerce Brand</h3>
          <p>Paused low-performing creatives automatically.</p>
          <span>2× CTR</span>
        </div>

        <div className="case-card">
          <h3>Marketing Agency</h3>
          <p>Saved hours of manual optimization weekly.</p>
          <span>10+ hrs/week saved</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
