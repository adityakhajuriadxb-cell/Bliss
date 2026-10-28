import SpeedBand from '@/components/brand/SpeedBand';

// One registration or licence, shown like a certificate card: the authority, what it
// covers, where, and the reference number. `light` is for use on navy backgrounds.
export default function LicenceCard({ credential, light = false }) {
  const { authority, title, detail, region, ref, refLabel = 'Registration No.' } = credential;
  return (
    <article className={`bl-licence${light ? ' bl-licence--light' : ''}`}>
      <div className="bl-licence__top">
        <img src={light ? '/brand/logos/bliss-mark.svg' : '/brand/logos/bliss-mark-reversed.svg'} alt="" width="28" height="28" />
        <span className="bl-licence__region">{region}</span>
      </div>
      <h3 className="bl-licence__authority">{authority}</h3>
      <p className="bl-licence__title">{title}</p>
      <p className="bl-licence__detail">{detail}</p>
      {ref && (
        <p className="bl-licence__ref">
          <span>{refLabel}</span>
          {ref}
        </p>
      )}
      <SpeedBand variant="small" tone={light ? 'light' : 'dark'} className="bl-licence__band" />
    </article>
  );
}
