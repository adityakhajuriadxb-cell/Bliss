import Link from 'next/link';
import Icon from '@/components/brand/Icon';
import Photo from '@/components/site/Photo';
import { BarChart } from '@/components/brand/AccountUI';

export default function Benefits() {
  return (
    <section className="section" id="benefits">
      <div className="wrap">
        <div className="split-head" data-reveal>
          <h2>The future of<br />moving money</h2>
          <p>Bliss takes the waiting out of cross-border payments. You always know what you pay, what arrives and when.</p>
        </div>
        <div className="trio">
          <article className="trio__card trio__card--photo" data-reveal>
            <Photo name="womanPhoneOutdoors" sizes="(max-width: 900px) 100vw, 420px" />
            <div className="trio__balance">
              <div className="ui-row">
                <p className="ui-kicker">Your balance</p>
                <span className="ui-round ui-round--mint"><Icon name="more" size={18} /></span>
              </div>
              <p className="ui-amount ui-amount--md">€21,530.86</p>
              <div className="ui-actions">
                <span className="ui-pill ui-pill--solid">Send <Icon name="send" size={16} /></span>
                <span className="ui-pill">Add money</span>
              </div>
            </div>
          </article>

          <article className="trio__card trio__card--navy" data-reveal>
            <span className="ui-round ui-round--mist"><Icon name="fee" size={20} /></span>
            <h3>Every fee shown<br />before you send</h3>
            <div className="trio__foot">
              <p>See the rate, the fee and the exact amount your recipient gets. What you see is what you pay.</p>
              <div className="trio__action">
                <Link href="/services/cross-border-payments">See how it works</Link>
                <span className="ui-round ui-round--mist"><Icon name="send" size={20} /></span>
              </div>
            </div>
          </article>

          <article className="trio__card trio__card--soft" data-reveal>
            <h3>See money as it lands</h3>
            <p>Watch every incoming payment on your account, with the sender and the reference.</p>
            <div className="trio__chart">
              <span className="trio__sheet trio__sheet--a" />
              <span className="trio__sheet trio__sheet--b" />
              <BarChart />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
