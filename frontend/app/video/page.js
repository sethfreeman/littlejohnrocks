import './video.css'

export const metadata = {
  title: 'Video | Little John',
  description: 'Watch Little John music and lyric videos.',
}

// Newest first.
const videos = [
  { id: '1ZHwPlZuqcA', title: '"Shoelace" — music video' },
  { id: 'AVRjNWTetjs', title: '"Finally Got It" — lyric video' },
  { id: 'bRVwLgBhPkA', title: '"Scared" — lyric video' },
  { id: 'JR54SryWyfA', title: 'Derailer' },
]

export default function Video() {
  return (
    <div className="video-page">
      <h1>Video</h1>
      <div className="video-grid">
        {videos.map((v) => (
          <figure className="video-item" key={v.id}>
            <div className="video-embed">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                title={v.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <figcaption>{v.title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
