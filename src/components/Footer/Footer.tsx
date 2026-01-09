import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>RYZE</h3>
          <p>
            AI-powered performance marketing platform that helps teams optimize
            and scale ads automatically.
          </p>
        </div>

        {/* PRODUCT */}
        <div className="footer-col">
          <h4>Product</h4>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/features">Features</NavLink>
          <a href="#">How It Works</a>
          <a href="#">Case Studies</a>
        </div>

        {/* COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Ryze. All rights reserved.</span>
        <span className="footer-note">
          Built with ❤️ for performance marketers
        </span>
      </div>
    </footer>
  );
}
