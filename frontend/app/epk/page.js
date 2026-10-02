import Image from 'next/image'
import Link from 'next/link'
import './epk.css'

export const metadata = {
  title: 'Press Kit | Little John',
  description: 'Electronic press kit for Little John — bio, photos, and music links.',
}

const pressPhotos = [
  { src: '/images/headshot.jpg', alt: 'Little John press photo', w: 640, h: 640 },
  { src: '/images/sticker-road-case.jpg', alt: 'Little John sticker on a road case', w: 1360, h: 504 },
]

export default function Epk() {
  return (
    <div className="epk-page">
      <h1>Electronic Press Kit</h1>

      <section className="epk-section">
        <h2>About</h2>
        <p>
          Little John is a melodic rock band fronted by Seth Freeman. It emerged on the
          Boston scene of the early 1990s — introspective lyrics, driving guitars, a rock-solid
          rhythm section — released the albums <em>Derailer</em> and{' '}
          <em>We&apos;ll Always Have Ohio</em>, then reinvented itself on the West Coast with{' '}
          <em>Too Much Fun</em>. From Boston basements to Bay Area stages, the band is a testament
          to reinvention, resilience, and the enduring power of melodic rock.
        </p>
        <p>
          <Link href="/about">Read the full bio</Link>.
        </p>
      </section>

      <section className="epk-section">
        <h2>Photos</h2>
        <div className="epk-photos">
          {pressPhotos.map((p) => (
            <a key={p.src} href={p.src} target="_blank" rel="noopener noreferrer">
              <Image src={p.src} alt={p.alt} width={p.w} height={p.h} />
            </a>
          ))}
        </div>
        <p className="epk-note">Click an image to open the full-resolution file.</p>
      </section>

      <section className="epk-section">
        <h2>Music</h2>
        <div className="epk-links">
          <a href="https://music.apple.com/us/artist/little-john/1793937398" target="_blank" rel="noopener noreferrer">
            Apple Music
          </a>
          <a href="https://open.spotify.com/artist/3upQ5sOxzOV5xltRzCtEkt" target="_blank" rel="noopener noreferrer">
            Spotify
          </a>
          <a href="https://music.youtube.com/channel/UCZsrsW8KMvMCMElBcHHaQaA" target="_blank" rel="noopener noreferrer">
            YouTube Music
          </a>
          <a href="https://music.amazon.com/artists/B000QJSEH6/little-john" target="_blank" rel="noopener noreferrer">
            Amazon Music
          </a>
        </div>
      </section>

      <section className="epk-section">
        <h2>Contact</h2>
        <p>
          Booking &amp; press: reach out via the <Link href="/contact">contact page</Link>.
        </p>
      </section>
    </div>
  )
}
