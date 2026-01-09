import "./TrustedBy.css";

import google from "../../assets/logos/google-ads.avif";
import meta from "../../assets/logos/meta.avif";
import linkedin from "../../assets/logos/linkedin.avif";
import perplexity from "../../assets/logos/perplexity.avif";
import openai from "../../assets/logos/chatgpt.avif";

const brands = [
  { name: "Google Ads", logo: google },
  { name: "Meta", logo: meta },
  { name: "LinkedIn", logo: linkedin },
  { name: "Perplexity AI", logo: perplexity },
  { name: "OpenAI", logo: openai }
];

export default function TrustedBy() {
  return (
    <section className="page">
    <section className="trusted">
      <p className="trusted-text">
        Trusted by performance-driven teams worldwide
      </p>

      <div className="trusted-logos">
        {brands.map((brand) => (
          <div key={brand.name} className="logo-box">
            <img
              src={brand.logo}
              alt={brand.name}
              className="brand-logo"
            />
            <span>{brand.name}</span>
          </div>
        ))}
      </div>
    </section></section>
  );
}
