import './tips.css'

export const metadata = {
  title: 'Tip Jar | Little John',
  description: 'Support Little John.',
}

// Monochrome icons — use currentColor so they match the mono/typewriter theme.
const VenmoIcon = () => (
  <svg viewBox="0 0 111 111" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M82.5 22c2.9 4.8 4.2 9.7 4.2 16C86.7 57.5 68.2 80 53.8 91H22L9.5 20h28.3l6.3 50.8C53.3 61.7 62 45.8 62 33.8c0-6.7-1.2-11.2-3-14.8L82.5 22z" />
  </svg>
)

const PayPalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm2.98-11.9c-.49.12-.853.556-.94 1.118l-.84 5.33-.117.74c.082-.518.526-.9 1.05-.9h2.19c4.298 0 7.664-1.747 8.647-6.797.03-.149.054-.294.077-.437-.26-.138-.542-.256-.846-.354-.075-.024-.15-.047-.228-.068a7.1 7.1 0 0 0-.399-.111 10.6 10.6 0 0 0-.43-.085 15.9 15.9 0 0 0-1.678-.123h-5.09c-.24 0-.474.024-.7.08z" />
  </svg>
)

const CashAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M23.59 3.47A5.1 5.1 0 0 0 20.54.42C19.23 0 18.03 0 15.62 0H8.38C5.97 0 4.77 0 3.46.42A5.1 5.1 0 0 0 .41 3.47C0 4.78 0 5.98 0 8.39v7.24c0 2.41 0 3.61.41 4.92a5.1 5.1 0 0 0 3.05 3.05C4.77 24 5.97 24 8.38 24h7.24c2.41 0 3.61 0 4.92-.42a5.1 5.1 0 0 0 3.05-3.05c.41-1.31.41-2.51.41-4.92V8.39c0-2.41 0-3.61-.42-4.92zM17.42 8.1l-.93.92a.5.5 0 0 1-.67.02 4.4 4.4 0 0 0-2.82-1c-.84 0-1.68.28-1.68 1.04 0 .77.89.99 1.92 1.38 1.8.6 3.3 1.36 3.3 3.13 0 1.93-1.5 3.26-3.95 3.4l-.22 1.03a.49.49 0 0 1-.48.39h-1.54l-.08-.01a.49.49 0 0 1-.38-.58l.24-1.08a5.6 5.6 0 0 1-2.47-1.34v-.01a.48.48 0 0 1 0-.68l1-.96a.49.49 0 0 1 .66 0 4 4 0 0 0 2.76 1.08c1.12 0 1.87-.48 1.87-1.23 0-.76-.77-.97-2.23-1.52-1.23-.44-2.9-1.16-2.9-2.98 0-2.08 1.73-3.1 3.76-3.19l.21-1.05a.49.49 0 0 1 .48-.39h1.53l.09.01c.26.06.43.31.37.58l-.23 1.04a5.4 5.4 0 0 1 2.17 1.14l.02.02a.48.48 0 0 1-.01.68z" />
  </svg>
)

const tipLinks = [
  { name: 'Venmo', handle: '@Seth-Freeman-21', href: 'https://venmo.com/Seth-Freeman-21', Icon: VenmoIcon },
  { name: 'PayPal', handle: '@sethfreemanmusic', href: 'https://paypal.me/sethfreemanmusic', Icon: PayPalIcon },
  { name: 'Cash App', handle: '$manfreeseth', href: 'https://cash.app/$manfreeseth', Icon: CashAppIcon },
]

export default function Tips() {
  return (
    <div className="tips-page">
      <h1>Tip Jar</h1>
      <p className="intro">Thank you for the support!</p>
      <div className="tip-links">
        {tipLinks.map(({ name, handle, href, Icon }) => (
          <a
            key={name}
            className="tip-button"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="tip-icon">
              <Icon />
            </span>
            <span className="tip-text">
              <span className="tip-name">{name}</span>
              <span className="tip-handle">{handle}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
