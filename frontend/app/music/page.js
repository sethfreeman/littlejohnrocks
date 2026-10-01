import './music.css'

export const metadata = {
  title: 'Music | Little John',
  description: 'Listen to Little John on your favorite streaming platform.',
}

const platforms = [
  { name: 'Apple Music', href: 'https://music.apple.com/us/artist/little-john/1793937398' },
  { name: 'Spotify', href: 'https://open.spotify.com/artist/3upQ5sOxzOV5xltRzCtEkt' },
  { name: 'YouTube Music', href: 'https://music.youtube.com/channel/UCZsrsW8KMvMCMElBcHHaQaA' },
  { name: 'Amazon Music', href: 'https://music.amazon.com/artists/B000QJSEH6/little-john' },
]

const releases = [
  { title: 'Too Much Fun', note: 'The West Coast reinvention.' },
  { title: "We'll Always Have Ohio", note: 'The final Boston-era release.' },
  { title: 'Derailer', note: 'Debut full-length, featuring the "Shoelace" single.' },
  { title: 'Scared', note: 'The first release — a vinyl single.' },
]

export default function Music() {
  return (
    <div className="music-page">
      <h1>Music</h1>
      <p className="intro">
        Melody-driven alt-rock, from the Boston scene to the Bay Area. Stream Little John wherever
        you listen.
      </p>

      <section className="platforms" aria-label="Streaming platforms">
        {platforms.map((p) => (
          <a
            key={p.name}
            className="platform-button"
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {p.name}
          </a>
        ))}
      </section>

      <section className="releases">
        <h2>Releases</h2>
        <ul>
          {releases.map((r) => (
            <li key={r.title}>
              <span className="release-title">{r.title}</span>
              <span className="release-note">{r.note}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
