import Link from 'next/link';
import Photo from '@/components/site/Photo';
import { Message } from '@/components/brand/AccountUI';
import { SITE } from '@/config/site';

export default function Closing({
  title = (
    <>
      Your money arrives.<br />On time, in full.
    </>
  ),
  text = 'We’re launching soon. See how Bliss moves money for people, businesses and platforms.',
  photo = 'friendsPhoneCafe',
}) {
  return (
    <section className="section section--tight-top" id="get-started">
      <div className="wrap closing" data-reveal>
        <div className="closing__copy">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link href={SITE.cta.href} className="btn btn-mint btn-lg">{SITE.cta.label}</Link>
        </div>
        <div className="closing__media">
          <Photo name={photo} sizes="(max-width: 900px) 100vw, 620px" />
          <div className="closing__msgs">
            <Message name="Sloane">What’s my IBAN again?</Message>
            <Message name="Bliss" tone="us">It’s in your account, ready to copy and share.</Message>
          </div>
        </div>
      </div>
    </section>
  );
}
