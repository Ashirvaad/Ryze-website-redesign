import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import "./FAQPage.css";

export default function FAQPage() {
  return (
    <>
      <Header />

      <main className="faq-page">
        <FAQ />
      </main>

      <Footer />
    </>
  );
}
