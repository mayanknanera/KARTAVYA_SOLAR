import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const { pathname }              = useLocation()
  const isHome                    = pathname === '/'

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setMenuOpen(false), [pathname])

  const solid = scrolled

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${solid ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo */}
          <Link to="/" id="nav-logo" className="flex items-center group">
            <img
              src="/assets/logo.png"
              alt="Kartavya Solar"
              className={`h-24 w-auto transition-all duration-300
                ${solid ? '[mix-blend-mode:multiply]' : 'brightness-110'}`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                id={`nav-${label.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${isActive
                    ? 'text-orange-500 bg-orange-50'
                    : solid
                      ? 'text-slate-600 hover:text-orange-500 hover:bg-orange-50'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919426465233"
              id="nav-cta"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white
                text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200
                hover:shadow-lg hover:shadow-orange-200 hover:-translate-y-0.5"
            >
              <i className="fa-solid fa-phone text-xs"></i>
              Get Free Quote
            </a>
          </div>

          {/* Hamburger */}
          <button
            id="nav-hamburger"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
            className={`lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg transition
              ${solid ? 'hover:bg-slate-100' : 'hover:bg-white/15'}`}
          >
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 origin-center
              ${menuOpen ? 'rotate-45 translate-y-2' : ''}
              ${solid ? 'bg-slate-700' : 'bg-white'}`} />
            <span className={`block w-5 h-0.5 rounded transition-all duration-300
              ${menuOpen ? 'opacity-0 scale-x-0' : ''}
              ${solid ? 'bg-slate-700' : 'bg-white'}`} />
            <span className={`block w-5 h-0.5 rounded transition-all duration-300 origin-center
              ${menuOpen ? '-rotate-45 -translate-y-2' : ''}
              ${solid ? 'bg-slate-700' : 'bg-white'}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100
        shadow-xl transition-all duration-300 overflow-hidden
        ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        id="mobile-menu"
      >
        <nav className="px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              id={`nav-mobile-${label.toLowerCase()}`}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-medium transition-all
                ${isActive ? 'text-orange-500 bg-orange-50' : 'text-slate-700 hover:bg-slate-50'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href="tel:+919426465233"
            className="mt-2 flex items-center justify-center gap-2 bg-orange-500 text-white
              font-semibold text-sm px-4 py-3 rounded-xl"
            id="nav-mobile-cta"
          >
            <i className="fa-solid fa-phone text-xs"></i>
            +91 94264 65233
          </a>
        </nav>
      </div>
    </header>
  )
}
