'use client'

import { useState } from 'react'
import Link from 'next/link'
import './Navbar.css'

const links = [
  { href: '/', label: 'Home' },
  { href: '/music', label: 'Music' },
  { href: '/video', label: 'Video' },
  { href: '/photos', label: 'Photos' },
  { href: '/about', label: 'Bio' },
  { href: '/tour', label: 'Tour' },
  { href: '/epk', label: 'Press Kit' },
  { href: '/tips', label: 'Tip Jar' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Little John</h1>
      </div>

      <button
        type="button"
        className="nav-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        <span className={`hamburger ${open ? 'is-open' : ''}`} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <ul id="primary-nav" className={open ? 'is-open' : ''}>
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
