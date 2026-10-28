import Header from '@/components/Header';
import SiteEffects from '@/components/SiteEffects';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import TransferBanner from '@/components/sections/TransferBanner';
import Features from '@/components/sections/Features';
import AppBanner from '@/components/sections/AppBanner';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Roadmap from '@/components/sections/Roadmap';
import Faq from '@/components/sections/Faq';
import Cta from '@/components/sections/Cta';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="fix">
        <div className="elementor elementor-24" data-elementor-type="wp-page" data-elementor-id="24">
          <Hero />
          <Services />
          <About />
          <TransferBanner />
          <Features />
          <AppBanner />
          <WhyChooseUs />
          <Roadmap />
          <Faq />
          <Cta />
          <Footer />
        </div>
      </main>
      <SiteEffects />
    </>
  );
}
