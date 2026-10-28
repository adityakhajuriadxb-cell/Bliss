'use client';

import { useState } from 'react';
import ElementorSection from '@/components/ElementorSection';

const FAQS = [
  {
    q: 'How long does a transfer take?',
    a: 'Most transfers arrive in seconds. Some take longer, depending on the country and the receiving bank. If yours does, we tell you why and when to expect it.',
  },
  {
    q: 'Is my money protected?',
    a: 'Yes. Every transfer is encrypted and checked for fraud, and we work with regulated banking partners.',
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
    q: 'Can I track my transfer?',
    a: 'Yes. Follow every transfer live in the app, from the moment you send to the moment it lands.',
  },
  {
    q: 'How can I pay?',
    a: 'Pay by bank transfer, card or a local payment method. The options depend on your country.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <ElementorSection id="faq" sectionId="ca64bed" columnId="43b90d3" widgetId="f7fa6af" widget="tp-faq">
      <section className="faq-area faq-style-two faq-style-three">
        <div className="container">
          <div className="row justify-content-center" data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: true; delay: 100;">
            <div className="col-xl-8 col-lg-10">
              <div className="section__title text-center title-mb-75">
                <h2 className="title">Questions, answered</h2>
                <p className="desc">What you need to know before you send.</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-8 col-lg-10">
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
          </div>
        </div>
      </section>
    </ElementorSection>
  );
}
