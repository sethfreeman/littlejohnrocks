import Link from 'next/link'
import './tour.css'

export const metadata = {
  title: 'Tour | Little John',
  description: 'Little John tour dates and shows.',
}

// Add upcoming shows here, or wire in a Songkick/Bandsintown widget.
const shows = []

export default function Tour() {
  return (
    <div className="tour-page">
      <h1>Tour</h1>
      {shows.length === 0 ? (
        <div className="no-shows">
          <p>No dates on the calendar right now. Check back soon for upcoming shows.</p>
          <p>
            Want to book Little John? <Link href="/contact">Get in touch</Link>.
          </p>
        </div>
      ) : null}
    </div>
  )
}
