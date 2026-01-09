import "./Hero.css";
import dashboardImg from "../../assets/dashboard.png";

export default function Hero() {
  return (
    <section className="page">
    <section className="hero">
      <div className="hero-left">
        <h1>
          Your <span>AI Performance Marketer</span> Running Ads 24/7
        </h1>

        <p>
          Ryze automatically audits, optimizes, and scales paid ads using AI —
          so you get better ROAS without manual effort.
        </p>

        <div className="hero-actions">
          <button className="primary-btn">Book a Demo</button>
          <button className="secondary-btn">See How It Works</button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={dashboardImg}
          alt="Ryze AI Dashboard"
          className="hero-dashboard"
        />
      </div>
    </section>
    </section>
  );
}
