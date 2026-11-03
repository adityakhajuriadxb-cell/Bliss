import Photo from '@/components/site/Photo';

const TILES = [
  { photo: 'workshopOwner', caption: 'Get paid, wherever you work.', tone: 'navy' },
  { photo: 'pairStreet', caption: 'Send money home, with no surprises.', tone: 'green' },
  { photo: 'womanPhoneYellow', caption: 'See every fee up front.', tone: 'slate' },
  { photo: 'manPhoneHills', caption: 'Move freely. Get paid locally.', tone: 'navy' },
  { photo: 'womanSidewalk', caption: 'Know the moment it lands.', tone: 'green' },
];

export default function PhotoMarquee() {
  return (
    <section className="section section--tight-top">
      <div className="wrap">
        <div className="left-head" data-reveal>
          <h2>Where your money meets<br />every border</h2>
          <p>Bliss is built for real life: family support, freelance work, shops and suppliers in 160+ countries.</p>
        </div>
      </div>
      <div className="marquee-clip">
        <div className="marquee marquee--photos">
          {[0, 1].map((group) => (
            <ul key={group} aria-hidden={group === 1 ? 'true' : undefined}>
              {TILES.map((tile) => (
                <li key={tile.photo} className={`photo-tile photo-tile--${tile.tone}`}>
                  <div className="photo-tile__img">
                    <Photo name={tile.photo} sizes="470px" decorative={group === 1} />
                  </div>
                  <p>{tile.caption}</p>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
