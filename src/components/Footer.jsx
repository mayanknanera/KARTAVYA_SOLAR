import { Link } from 'react-router-dom'

const COL_LINKS = {
  Company: [
    { label: 'Home',     to: '/'         },
    { label: 'About Us', to: '/about'    },
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact',  to: '/contact'  },
  ],
  Services: [
    { label: 'Residential Rooftop', to: '/services' },
    { label: 'Commercial Plant',    to: '/services' },
    { label: 'MW Power Plant',      to: '/services' },
    { label: 'Solar Water Heater',  to: '/services' },
    { label: 'Panel Cleaning',      to: '/services' },
    { label: 'O&M Services',        to: '/services' },
  ],
}

const CONTACT_ITEMS = [
  { icon: 'fa-phone',    text: '+91 94264 65233', href: 'tel:+919426465233'              },
  { icon: 'fa-phone',    text: '+91 94094 55932', href: 'tel:+919409455932'              },
  { icon: 'fa-envelope', text: 'kartavysolar@gmail.com', href: 'mailto:kartavysolar@gmail.com' },
  { icon: 'fa-globe',    text: 'www.kartavy.in',  href: 'https://www.kartavy.in'        },
  { icon: 'fa-location-dot', text: 'Hirakbaug Shopping Centre, Marketing Yard Road, Amreli, Gujarat', href: null },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-300">
      {/* Top bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-slate-400">
            <i className="fa-solid fa-circle-info text-orange-400 mr-2"></i>
            Dealers welcome for solar rooftop work across <span className="text-white font-semibold">PAN INDIA</span>
          </p>
          <a
            href="tel:+919426465233"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white
              text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            <i className="fa-solid fa-phone text-xs"></i>
            Call Now
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-5">
            <div className="flex items-center">
              <img src="/assets/logo.png" alt="Kartavya Solar" className="h-28 w-auto brightness-110" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Authorized installer of premium solar energy solutions across PAN India.
              Serving residential, commercial, and industrial sectors.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-orange-500/10 text-orange-400 px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-certificate text-[10px]"></i> Adani Authorized
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-green-500/10 text-green-400 px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-check text-[10px]"></i> Luminous Partner
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-full">
                <i className="fa-solid fa-leaf text-[10px]"></i> MNRE Approved
              </span>
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(COL_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm text-slate-400 hover:text-orange-400 transition-colors flex items-center gap-2"
                    >
                      <i className="fa-solid fa-chevron-right text-[9px] text-orange-500/50"></i>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">Contact</h4>
            <ul className="space-y-4">
              {CONTACT_ITEMS.map(({ icon, text, href }, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className={`fa-solid ${icon} text-orange-400 text-xs`}></i>
                  </span>
                  {href ? (
                    <a href={href} className="text-sm text-slate-400 hover:text-orange-400 transition-colors leading-snug">
                      {text}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400 leading-snug">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Kartavya Solar. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            🌱 Green &amp; Clean Energy for MSMEs, Homes &amp; Enterprises
          </p>
        </div>
      </div>
    </footer>
  )
}
