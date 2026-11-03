import Link from 'next/link';
import Photo from '@/components/site/Photo';
import Accordion from '@/components/site/Accordion';
import { SITE } from '@/config/site';

const FAQS = [
  {
    q: 'What is a virtual IBAN?',
    a: 'An IBAN that belongs to your Bliss account. People pay it like any bank account, and the money lands in your account, matched to that IBAN.',
  },
  {
    q: 'How long does a transfer take?',
    a: 'Most transfers arrive in seconds. Some take longer, depending on the country and the receiving bank. If yours does, we tell you why and when to expect it.',
  },
  {
    q: 'How do you keep my money safe?',
    a: 'Every transfer is encrypted and checked for fraud before it goes through.',
  },
  {
    q: 'Are there hidden fees?',
    a: 'No. You see the rate and every fee before you confirm. The fee you see is the fee you pay.',
  },
  {
    q: 'Which countries can I send to?',
    a: 'You can send to 160+ countries, and we add more every month.',
  },
  {
    q: 'Is Bliss a bank?',
    a: 'No. Bliss is not a bank. We provide accounts for holding, sending and receiving money.',
  },
];

export default function Faq() {
  return (
    <section className="section section--tight-top" id="faq">
      <div className="wrap faq">
        <div className="faq__side" data-reveal>
          <div className="faq__photo"><Photo name="womanLaptop" sizes="(max-width: 900px) 100vw, 470px" /></div>
          <p className="faq__label">Want the full picture?</p>
          <p className="faq__sub">See every product and how each one works.</p>
          <Link href={SITE.cta.href} className="btn btn-navy">{SITE.cta.label}</Link>
        </div>
        <div className="faq__main" data-reveal>
          <h2>Questions, answered</h2>
          <Accordion items={FAQS} />
        </div>
      </div>
    </section>
  );
}
