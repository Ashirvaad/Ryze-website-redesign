import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./PricingPage.css";

export default function PricingPage() {
  return (
    <section className="page">
      <Header />

      {/* HERO */}
      <section className="pricing-hero">
        <h1>Simple, Transparent Pricing</h1>
        <p>
          Choose a plan that fits your growth stage. Upgrade, downgrade, or cancel
          anytime.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="pricing-section">
        <div className="pricing-grid">

          {/* STARTER */}
          <div className="pricing-card">
            <h3>Starter</h3>
            <p className="price">Free</p>
            <p className="price-sub">For trying Ryze</p>

            <ul>
              <li>AI Account Audit</li>
              <li>Basic Recommendations</li>
              <li>Email Reports</li>
            </ul>

            <button className="outline-btn">Get Started</button>
          </div>

          {/* GROWTH */}
          <div className="pricing-card featured">
            <span className="badge">Most Popular</span>
            <h3>Growth</h3>
            <p className="price">$99<span>/month</span></p>
            <p className="price-sub">For scaling teams</p>

            <ul>
              <li>24/7 AI Optimization</li>
              <li>Budget Reallocation</li>
              <li>Creative Performance Analysis</li>
              <li>Keyword Optimization</li>
              <li>Priority Support</li>
            </ul>

            <button className="primary-btn">Book a Demo</button>
          </div>

          {/* ENTERPRISE */}
          <div className="pricing-card">
            <h3>Enterprise</h3>
            <p className="price">Custom</p>
            <p className="price-sub">For large teams</p>

            <ul>
              <li>Advanced AI Models</li>
              <li>Multi-Account Management</li>
              <li>Dedicated Strategist</li>
              <li>Custom Integrations</li>
            </ul>

            <button className="outline-btn">Contact Sales</button>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pricing-cta">
        <h2>Not sure which plan is right?</h2>
        <p>Let our AI audit your account and suggest the best setup.</p>
        <button className="primary-btn">Get a Free Audit</button>
      </section>

      <Footer />
    </section>
  );
}
