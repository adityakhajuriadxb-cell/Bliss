import Image from 'next/image';
import { PHOTOS } from '@/config/photos';

// A photo from config/photos.js that fills its positioned parent.
export default function Photo({ name, sizes = '100vw', priority = false, decorative = false }) {
  const photo = PHOTOS[name];
  return (
    <Image
      src={photo.src}
      alt={decorative ? '' : photo.alt}
      fill
      sizes={sizes}
      priority={priority}
      style={{ objectFit: 'cover', objectPosition: photo.position }}
    />
  );
}
