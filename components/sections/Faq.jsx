'use client';

import { useState } from 'react';
import ElementorSection from '@/components/ElementorSection';

const FAQS = [
  {
    q: 'How long does a transfer take?',
    a: 'Most transfers are completed within minutes, depending on the destination country and payment method.',
  },
  {
    q: 'Is my money safe with your platform?',
    a: 'Yes, all transactions are protected with advanced encryption and secure banking partners.',
  },
  {
    q: 'Are there any hidden charges?',
    a: 'No, we follow transparent pricing so you always see the exact fees before confirming a transfer.',
  },
  {
    q: 'Which countries do you support?',
    a: 'We support transfers to 100+ countries worldwide with expanding coverage every month.',
  },
  {
    q: 'Can I track my transfer?',
    a: 'Yes, you can track every transfer in real-time directly from your dashboard or app.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We support multiple options including bank transfers, cards, and local payment methods depending on region.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <ElementorSection sectionId="ca64bed" columnId="43b90d3" widgetId="f7fa6af" widget="tp-faq">
      <section className="faq-area faq-style-two faq-style-three">
        <div className="container">
          <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;">
            <div className="col-xl-8 col-lg-10">
              <div className="section__title text-center title-mb-75">
                <h2 className="title text-uppercase">
                  Frequently Asked <span className="tg-text-gradient">Questions</span>
                </h2>
                <p className="desc">Everything you need to know about sending money globally with our platform.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <div className="faq__wrapper">
                <div className="accordion" id="accordionFaq">
                  {FAQS.map((item, i) => {
                    const isOpen = open === i;
                    return (
                      <div className="accordion-item" key={item.q}>
                        <h2 className="accordion-header" id={`headingOne-${i}`}>
                          <button
                            className={`accordion-button${isOpen ? '' : ' collapsed'}`}
                            type="button"
                            aria-expanded={isOpen}
                            aria-controls={`collapseOne-${i}`}
                            onClick={() => setOpen(isOpen ? null : i)}
                          >
                            {item.q}
                          </button>
                        </h2>
                        <div
                          id={`collapseOne-${i}`}
                          className={`accordion-collapse collapse${isOpen ? ' show' : ''}`}
                          aria-labelledby={`headingOne-${i}`}
                        >
                          <div className="accordion-body">
                            <p>{item.a}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="faq__img">
                <img decoding="async" src="/assets/images/faqss-1-scaled.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ElementorSection>
  );
}
