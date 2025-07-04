import HeroSection from './pages/hero-section';
import AboutSection from './pages/about-section';
import ImpactSection from './pages/impact-section';
import BarriersSection from './pages/barriers-section';
import PowerSection from './pages/power-section';
import MagicSection from './pages/magic-section';
import TestimonialsSection from './pages/testimonials-section';
import BookSession from './pages/book-session';
import Gallery from './pages/gallery-section';
import BenefitSection from './pages/benefit-section';
import ImageConsultancy from './pages/image-consultancy';


export default function Home() {
  return (
    <main className="min-h-screen">
      
      {/* Main Content */}
      <div className="pt-20"> {/* Add padding-top to account for fixed header */}
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
          <Gallery />
        </section>

        {/* Barriers Section */}
        <section id="barriers">
          <BarriersSection />
        </section>

        {/* Image Consultancy Section */}
        <section id="image-consultancy">
          <ImageConsultancy />
        </section>

        {/* Benefits Section */}
        <section id="benefits">
          <BenefitSection />
        </section>

        {/* Impact Section */}
        {/* <section id="impact">
          <ImpactSection />
        </section> */}

        {/* Power Section */}
        <section id="power">
          <PowerSection />
        </section>

        {/* Magic Section */}
        {/* <section id="magic">
          <MagicSection />
        </section> */}

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* Book Session Section */}
        <section id="book-session">
          <BookSession />
        </section>
      </div>
    </main>
  );
}
