import './video.css'

export const metadata = {
  title: 'Video | Little John',
  description: 'Watch Little John.',
}

// Add YouTube video IDs here as they become available, then render <iframe> embeds.
const videos = []

export default function Video() {
  return (
    <div className="video-page">
      <h1>Video</h1>
      {videos.length === 0 ? (
        <p className="placeholder">
          Videos are on the way. In the meantime, find Little John on{' '}
          <a href="https://www.youtube.com/@littlejohn5329" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          .
        </p>
      ) : null}
    </div>
  )
}
