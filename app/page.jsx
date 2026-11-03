import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Hero from '@/components/home/Hero';
import Benefits from '@/components/home/Benefits';
import HowItWorks from '@/components/home/HowItWorks';
import PhotoMarquee from '@/components/home/PhotoMarquee';
import Capabilities from '@/components/home/Capabilities';
import AccountTypes from '@/components/home/AccountTypes';
import Audiences from '@/components/home/Audiences';
import Plans from '@/components/home/Plans';
import PromiseBand from '@/components/home/PromiseBand';
import Explore from '@/components/home/Explore';
import Faq from '@/components/home/Faq';
import Closing from '@/components/home/Closing';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <PhotoMarquee />
        <Capabilities />
        <AccountTypes />
        <Audiences />
        <Plans />
        <PromiseBand />
        <Explore />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
