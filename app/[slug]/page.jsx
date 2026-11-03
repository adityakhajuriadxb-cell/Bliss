import { notFound } from 'next/navigation';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import PageHero from '@/components/site/PageHero';
import { SITE } from '@/config/site';

// Footer legal pages. Their text wasn't part of the saved homepage, so add your content here.
const PAGES = {
  'privacy-policy': { title: 'Privacy policy', body: null },
  'terms-and-conditions': { title: 'Terms and conditions', body: null },
  'cookie-policy': { title: 'Cookie policy', body: null },
  'request-account-deletion': { title: 'Request account deletion', body: null },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${PAGES[slug]?.title} – ${SITE.name}` };
}

export default async function LegalPage({ params }) {
  const { slug } = await params;
  const page = PAGES[slug];
  if (!page) notFound();

  return (
    <>
      <Header />
      <main>
        <PageHero title={page.title} />
        <section className="section legal">
          <div className="wrap">{page.body ?? <p>This page is coming soon.</p>}</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
