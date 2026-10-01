import './tips.css'

export const metadata = {
  title: 'Tip Jar | Little John',
  description: 'Support Little John.',
}

// TODO: replace with Little John's real tip-jar handles/links before publishing.
const tipLinks = [
  { name: 'Venmo', handle: '@your-handle', href: 'https://venmo.com/' },
  { name: 'PayPal', handle: '@your-handle', href: 'https://www.paypal.com/' },
]

export default function Tips() {
  return (
    <div className="tips-page">
      <h1>Tip Jar</h1>
      <p className="intro">
        Love the music? Toss a little something in the tip jar. Every bit helps us keep writing,
        recording, and playing. Thank you for the support!
      </p>
      <div className="tip-links">
        {tipLinks.map((t) => (
          <a
            key={t.name}
            className="tip-button"
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tip-name">{t.name}</span>
            <span className="tip-handle">{t.handle}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
