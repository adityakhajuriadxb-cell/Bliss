import Header from '@/components/Header';
import SiteEffects from '@/components/SiteEffects';
import GradientBackdrop from '@/components/sections/GradientBackdrop';
import Hero from '@/components/sections/Hero';
import Separator from '@/components/sections/Separator';
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
        <GradientBackdrop />
        <div className="elementor elementor-24" data-elementor-type="wp-page" data-elementor-id="24">
          <Hero />
          <Separator sectionId="61ba82e" columnId="36c28aa" widgetId="a90de43" />
          <About />
          <TransferBanner />
          <Features />
          <Separator sectionId="4f9e22e" columnId="2a09d4d" widgetId="98fedc9" />
          <AppBanner />
          <WhyChooseUs />
          <Roadmap />
          <Separator sectionId="a2596a3" columnId="bce6512" widgetId="8a51db3" />
          <Faq />
          <Cta />
          <Separator sectionId="40fe03b" columnId="1589518" widgetId="6df5371" />
          <Footer />
        </div>
      </main>
      <SiteEffects />
    </>
  );
}
