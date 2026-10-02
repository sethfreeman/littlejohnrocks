import { Courier_Prime } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from './components/Navbar'
import './globals.css'

const courierPrime = Courier_Prime({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-courier',
  display: 'swap',
})

export const metadata = {
  title: 'Little John',
  description: 'Little John — melodic rock, from Boston basements to Bay Area stages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={courierPrime.variable}>
      <body>
        <div className="App">
          <Navbar />
          <main>{children}</main>
          <footer>
            <p>&copy; 2026 Little John. All rights reserved.</p>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
