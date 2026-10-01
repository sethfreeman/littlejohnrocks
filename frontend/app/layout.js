import { SpeedInsights } from '@vercel/speed-insights/next'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Little John',
  description: 'Little John — melody-driven rock, from Boston basements to Bay Area stages.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Navbar />
          <main>{children}</main>
          <footer>
            <p>&copy; 2026 Little John. All rights reserved.</p>
          </footer>
        </div>
        <SpeedInsights />
      </body>
    </html>
  )
}
