import "./Features.css";

import audit from "../../assets/features/audit.png";
import budget from "../../assets/features/budget.png";
import creative from "../../assets/features/creative.png";
import automation from "../../assets/features/automation.png";
import insights from "../../assets/features/insight.png";
import scale from "../../assets/features/upgraph.png";

const features = [
  {
    title: "AI Account Audits",
    desc: "Automatically detect inefficiencies, wasted spend, and missed opportunities.",
    icon: audit
  },
  {
    title: "Smart Budget Allocation",
    desc: "AI reallocates budget in real time to maximize ROAS across campaigns.",
    icon: budget
  },
  {
    title: "Creative Performance Analysis",
    desc: "Identify top-performing ads and pause low converters automatically.",
    icon: creative
  },
  {
    title: "24/7 Automation",
    desc: "Always-on optimization without manual intervention.",
    icon: automation
  },
  {
    title: "Actionable Insights",
    desc: "Clear AI recommendations you can act on instantly.",
    icon: insights
  },
  {
    title: "Effortless Scaling",
    desc: "Scale winning campaigns confidently with AI-driven decisions.",
    icon: scale
  }
];

export default function Features() {
  return (
    <section className="page">
    <section className="features" id="features">
      <div className="features-header">
        <h2>Built for Performance Marketers</h2>
        <p>
          Everything you need to optimize, automate, and scale ads using AI.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div key={feature.title} className="feature-card">
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section></section>
  );
}
