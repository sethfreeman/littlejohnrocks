import Image from 'next/image'
import './photos.css'

export const metadata = {
  title: 'Photos | Little John',
  description: 'Photos of Little John.',
}

const photos = [
  { src: '/images/headshot.jpg', alt: 'Little John', w: 640, h: 640 },
  { src: '/images/sticker-road-case.jpg', alt: 'Little John sticker on a road case', w: 1360, h: 504 },
]

export default function Photos() {
  return (
    <div className="photos-page">
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map((p) => (
          <div className="photo-item" key={p.src}>
            <Image src={p.src} alt={p.alt} width={p.w} height={p.h} />
          </div>
        ))}
      </div>
    </div>
  )
}
