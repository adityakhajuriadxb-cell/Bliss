import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { SITE } from '@/config/site';

// Footer legal pages. Their text wasn't part of the saved homepage, so add your content here.
const PAGES = {
  'privacy-policy': { title: 'Privacy Policy', body: null },
  'terms-and-conditions': { title: 'Terms and Conditions', body: null },
  'cookie-policy': { title: 'Cookie Policy', body: null },
  'request-account-deletion': { title: 'Request Account Deletion', body: null },
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
      <main className="fix">
        <section className="section-py-80" style={{ paddingTop: 180 }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8 col-lg-10">
                <div className="section__title text-center">
                  <h2 className="title">{page.title}</h2>
                </div>
                {page.body ?? <p className="text-center">This page is coming soon.</p>}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
