import "./HowItWorks.css";
import connectImg from "../../assets/how/link.png";
import optimizeImg from "../../assets/how/automation.png";
import scaleImg from "../../assets/how/graph.png";

const steps = [
  {
    id: "01",
    title: "Connect Accounts",
    desc: "Securely connect ad platforms.",
    image: connectImg
  },
  {
    id: "02",
    title: "AI Optimization",
    desc: "24/7 audits & improvements.",
    image: optimizeImg
  },
  {
    id: "03",
    title: "Scale ROI",
    desc: "Increase what works automatically.",
    image: scaleImg
  }
];


export default function HowItWorks() {
  return (
    <section className="page">
    <section className="how">
      <h2>How Ryze Works</h2>

      <div className="steps">
  {steps.map(step => (
    <div key={step.id} className="step-card">
      <img src={step.image} alt={step.title} className="step-icon" />
      <span className="step-number">{step.id}</span>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  ))}
</div>
 </section></section>
  );
}
