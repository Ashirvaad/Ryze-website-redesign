import { useState } from "react";
import "./Screenshots.css";

import auditImg from "../../assets/audit.png";
import budgetImg from "../../assets/budget.png";
import creativeImg from "../../assets/creative.png";
import keywordImg from "../../assets/keyword.png";

const data = {
  Audits: auditImg,
  Budget: budgetImg,
  Creatives: creativeImg,
  Keywords: keywordImg
};

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState<keyof typeof data>("Audits");

  return (
    <section className="page">
    <section className="screenshots">
      <h2>See Ryze in Action</h2>

      <div className="tabs">
        {Object.keys(data).map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab as keyof typeof data)}
          >
            {tab}
          </button>
        ))}
      </div>

      <img
        src={data[activeTab]}
        alt={`${activeTab} dashboard`}
        className="dashboard-img"
      />
    </section></section>
  );
}
