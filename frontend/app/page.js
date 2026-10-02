import Image from 'next/image'
import Link from 'next/link'
import './home.css'

export default function Home() {
  return (
    <div className="home-wrapper">
      <section className="hero-section" aria-label="Little John">
        <Image
          className="hero-image"
          src="/images/headshot.jpg"
          alt="Little John"
          width={640}
          height={640}
          priority
        />
      </section>

      <div className="home-content">
        <section className="bio-section">
          <p className="bio-text">
            <strong>Little John</strong> burst onto the Boston music scene of the early 1990s with
            introspective lyrics, sharp, driving guitars, and a rock-solid rhythm section. Fronted
            by{' '}
            <a href="https://sethfreemanmusic.com" target="_blank" rel="noopener noreferrer">
              <strong>Seth Freeman</strong>
            </a>
            , the band went on to reinvent itself on the West Coast, carrying its melodic rock from
            Boston basements to Bay Area stages.{' '}
            <Link href="/about">Read the full story</Link>.
          </p>
        </section>

        <section className="music-links" aria-label="Listen to Little John">
          <a
            className="music-button"
            href="https://music.apple.com/us/artist/little-john/1793937398"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple Music
          </a>
          <a
            className="music-button"
            href="https://open.spotify.com/artist/3upQ5sOxzOV5xltRzCtEkt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
          <a
            className="music-button"
            href="https://music.youtube.com/channel/UCZsrsW8KMvMCMElBcHHaQaA"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Music
          </a>
          <a
            className="music-button"
            href="https://music.amazon.com/artists/B000QJSEH6/little-john"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amazon Music
          </a>
        </section>

        <nav className="social-links" aria-label="Little John on social media">
          <a
            className="social-icon"
            href="https://www.instagram.com/littlejohnband/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07zm0 2.45a5.95 5.95 0 1 1 0 11.9 5.95 5.95 0 0 1 0-11.9zm0 9.81a3.86 3.86 0 1 0 0-7.72 3.86 3.86 0 0 0 0 7.72zm7.58-10.05a1.39 1.39 0 1 1-2.78 0 1.39 1.39 0 0 1 2.78 0z" />
            </svg>
          </a>
          <a
            className="social-icon"
            href="https://www.youtube.com/@littlejohn5329"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
            </svg>
          </a>
          <a
            className="social-icon"
            href="https://www.facebook.com/littlejohnband"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
            </svg>
          </a>
          <a
            className="social-icon"
            href="https://x.com/littlejohnmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.47l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.3 19.5h2.04L6.49 3.24H4.3L17.6 20.65z" />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  )
}
