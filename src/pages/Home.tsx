import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import TrustedBy from "../components/TrustedBy/Trustedby";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Features from "../components/Features/Features";
import Screenshots from "../components/Screenshots/Screenshots";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Features />
      <Screenshots />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
