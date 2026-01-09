import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./FeaturesPage.css";

const features = [
  {
    title: "AI Account Audits",
    desc:
      "Continuously scans your ad accounts to detect inefficiencies and growth opportunities.",
    points: [
      "Detect high CPA campaigns",
      "Identify low CTR creatives",
      "Find wasted ad spend"
    ]
  },
  {
    title: "Smart Budget Optimization",
    desc:
      "Automatically reallocates budget to campaigns that drive the highest ROI.",
    points: [
      "Reduce wasted spend",
      "Scale high performers",
      "Maintain budget efficiency"
    ]
  },
  {
    title: "Creative Performance Analysis",
    desc:
      "Analyzes ad creatives and scales winners while pausing low performers.",
    points: [
      "Compare creative variants",
      "Pause underperforming ads",
      "Boost winning creatives"
    ]
  },
  {
    title: "Keyword Intelligence",
    desc:
      "Optimizes keyword bids and match types to improve conversions.",
    points: [
      "Increase bids on high-value keywords",
      "Pause inefficient keywords",
      "Expand profitable match types"
    ]
  },
  {
    title: "24/7 Automation",
    desc:
      "Always-on optimization that works even when you’re offline.",
    points: [
      "Continuous monitoring",
      "Instant AI decisions",
      "No manual intervention"
    ]
  },
  {
    title: "Actionable Insights",
    desc:
      "Clear AI recommendations that explain what’s happening and why.",
    points: [
      "Transparent AI logic",
      "Easy-to-understand reports",
      "Confident scaling decisions"
    ]
  }
];

export default function FeaturesPage() {
  return (
    <section className="page">
      <Header />

      <section className="features-hero">
        <h1>Powerful AI Features Built for Performance Marketing</h1>
        <p>
          Everything you need to audit, optimize, and scale paid ads — powered by AI.
        </p>
      </section>

      <section className="features-grid-section">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>

              <ul>
                {feature.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="features-cta">
        <h2>See Ryze in Action</h2>
        <p>Let AI show you where your ads can perform better.</p>
        <button className="primary-btn">Book a Free Demo</button>
      </section>

      <Footer />
    </section>
  );
}

