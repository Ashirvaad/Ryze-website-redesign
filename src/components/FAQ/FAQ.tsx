import "./FAQ.css";

const faqs = [
  {
    question: "How does Ryze access my ad accounts?",
    answer:
      "Ryze connects securely using official advertising platform APIs with controlled permissions."
  },
  {
    question: "Is my data safe and private?",
    answer:
      "Yes. All data is encrypted in transit and at rest. Ryze never shares your data with third parties."
  },
  {
    question: "Can I control or pause AI actions?",
    answer:
      "Absolutely. You can review, approve, pause, or customize AI-driven actions at any time."
  },
  {
    question: "Which platforms does Ryze support?",
    answer:
      "Ryze supports Google Ads, Meta Ads, LinkedIn Ads, and more platforms are being added."
  },
  {
    question: "Is this suitable for small teams or agencies?",
    answer:
      "Yes. Ryze is designed for startups, in-house teams, and agencies managing multiple accounts."
  }
];

export default function FAQ() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        {faqs.map((faq) => (
          <div key={faq.question} className="faq-item">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
