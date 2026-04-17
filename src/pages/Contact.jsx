const CONTACTS = [
  {
    id: 'phone-1',
    icon: 'fa-phone',
    label: 'Primary Phone',
    value: '+91 94264 65233',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+919426465233',
    action: 'Call Now',
    color: 'orange',
  },
  {
    id: 'phone-2',
    icon: 'fa-mobile-screen',
    label: 'Alternate Phone',
    value: '+91 94094 55932',
    sub: 'Mon – Sat, 9 AM – 7 PM',
    href: 'tel:+919409455932',
    action: 'Call Now',
    color: 'orange',
  },
  {
    id: 'email',
    icon: 'fa-envelope',
    label: 'Email Us',
    value: 'kartavysolar@gmail.com',
    sub: 'Opens in Outlook / Gmail',
    href: 'mailto:kartavysolar@gmail.com?subject=Solar Enquiry — KARTAVYA SOLAR&body=Hello KARTAVYA SOLAR team,%0D%0A%0D%0AI am interested in your solar energy solutions.%0D%0A%0D%0AName:%0D%0ALocation:%0D%0AType of Building:%0D%0AMonthly Bill:%0D%0A%0D%0AThank you!',
    action: 'Send Email',
    color: 'blue',
  },
  {
    id: 'website',
    icon: 'fa-globe',
    label: 'Website',
    value: 'www.kartavy.in',
    sub: 'Visit our official site',
    href: 'https://www.kartavy.in',
    action: 'Visit',
    color: 'slate',
    external: true,
  },
]

const TEMPLATES = [
  {
    id: 'tpl-residential',
    icon: 'fa-house',
    label: 'Residential Solar',
    subject: 'Residential Solar Rooftop Enquiry — KARTAVYA SOLAR',
    body: `Hello KARTAVYA SOLAR team,%0D%0A%0D%0AI am interested in a residential solar rooftop installation.%0D%0A%0D%0AName:%0D%0AAddress:%0D%0AMonthly Bill:%0D%0AProperty Type:%0D%0A%0D%0APlease contact me.%0D%0A%0D%0AThank you!`,
  },
  {
    id: 'tpl-commercial',
    icon: 'fa-industry',
    label: 'Commercial Enquiry',
    subject: 'Commercial Solar Plant Enquiry — KARTAVYA SOLAR',
    body: `Hello KARTAVYA SOLAR team,%0D%0A%0D%0AI am interested in a commercial solar plant.%0D%0A%0D%0ACompany:%0D%0ALocation:%0D%0ARooftop Area:%0D%0AMonthly Bill:%0D%0A%0D%0AThank you!`,
  },
  {
    id: 'tpl-dealer',
    icon: 'fa-handshake',
    label: 'Dealer / Partner',
    subject: 'Dealer Partnership Enquiry — KARTAVYA SOLAR',
    body: `Hello KARTAVYA SOLAR team,%0D%0A%0D%0AI am interested in becoming a dealer / partner.%0D%0A%0D%0AName:%0D%0ARegion / State:%0D%0AContact Number:%0D%0A%0D%0AThank you!`,
  },
  {
    id: 'tpl-mw',
    icon: 'fa-bolt',
    label: 'MW Plant Project',
    subject: 'MW Solar Plant Project Enquiry — KARTAVYA SOLAR',
    body: `Hello KARTAVYA SOLAR team,%0D%0A%0D%0AI am looking for a large-scale MW solar power plant.%0D%0A%0D%0AOrganization:%0D%0AProject Location:%0D%0ARequired Capacity (MW):%0D%0ATimeline:%0D%0A%0D%0AThank you!`,
  },
]

const FAQ = [
  { q: 'Do you operate outside Gujarat?',      a: 'Yes! KARTAVYA SOLAR has dealer and contractor networks across PAN India — all states.' },
  { q: 'How fast can I get a consultation?',   a: "Call or email us and we'll arrange a free site visit within 2–3 working days." },
  { q: 'Do you handle government approvals?',  a: 'Yes — we handle all MNRE, DISCOM, and state solar policy paperwork end-to-end.' },
  { q: 'Can I become an authorized dealer?',   a: "Absolutely! Call +91 94094 55932 or email us — we're actively growing our dealer network." },
]

const MAP_SRC = `https://www.openstreetmap.org/export/embed.html?bbox=71.07,21.53,71.37,21.68&layer=mapnik&marker=21.6038,71.2211`

const iconBg = {
  orange: 'bg-orange-50 text-orange-500',
  blue:   'bg-blue-50 text-blue-500',
  slate:  'bg-slate-100 text-slate-500',
}

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-0.5 w-7 bg-orange-400 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-400">Contact</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Let's Talk <span className="text-orange-400">Solar</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            Have a project idea or want a free quote? Reach out — we respond quickly
            and honestly. No forms needed, just tap and connect.
          </p>
        </div>
      </section>

      {/* Main */}
      <section id="contact-info" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left — contacts + templates */}
            <div className="lg:col-span-3 space-y-8 reveal-left">
              {/* Label */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
                  <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Contact Details</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mb-2">
                  Get In <span className="text-orange-500">Touch</span>
                </h2>
                <p className="text-sm text-slate-500">
                  Tap any card to open directly in your phone or email. No form needed.
                </p>
              </div>

              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACTS.map(c => (
                  <a
                    key={c.id}
                    id={`contact-${c.id}`}
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4 p-5 rounded-2xl border border-slate-100
                      hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all hover:-translate-y-0.5"
                  >
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors
                      ${iconBg[c.color] || iconBg.orange} group-hover:bg-orange-100`}>
                      <i className={`fa-solid ${c.icon} text-base`}></i>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{c.label}</p>
                      <p className="font-semibold text-slate-800 text-sm truncate">{c.value}</p>
                      {c.sub && <p className="text-xs text-slate-400 mt-0.5">{c.sub}</p>}
                    </div>
                    <i className="fa-solid fa-arrow-right text-xs text-orange-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"></i>
                  </a>
                ))}
              </div>

              {/* Email templates */}
              <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
                <h3 className="font-display font-bold text-slate-800 mb-1.5">
                  <i className="fa-solid fa-paper-plane text-orange-500 mr-2"></i>
                  Quick Email Templates
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Choose a template — your email app (Outlook, Gmail, etc.) will open with the enquiry pre-filled.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {TEMPLATES.map(t => (
                    <a
                      key={t.id}
                      id={t.id}
                      href={`mailto:kartavysolar@gmail.com?subject=${t.subject}&body=${t.body}`}
                      className="group flex items-center gap-2.5 bg-white border border-orange-100
                        hover:border-orange-300 hover:bg-orange-500 rounded-xl px-4 py-3 transition-all"
                    >
                      <i className={`fa-solid ${t.icon} text-orange-400 group-hover:text-white text-sm flex-shrink-0`}></i>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-white">{t.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 flex-wrap text-sm">
                <span className="text-slate-400">Also visit:</span>
                {[
                  { href: 'https://www.kartavy.in', label: 'kartavy.in' },
                  { href: 'https://www.kartavysolar.in', label: 'kartavysolar.in' },
                ].map(l => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-orange-500 hover:text-orange-700 font-medium transition-colors">
                    <i className="fa-solid fa-globe text-xs"></i>
                    {l.label}
                  </a>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919426465233?text=Hello%20KARTAVYA%20SOLAR%2C%20I%20am%20interested%20in%20solar%20energy%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border border-green-100 hover:border-green-300
                  hover:bg-green-100 rounded-2xl p-5 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200">
                  <i className="fa-brands fa-whatsapp text-white text-2xl"></i>
                </div>
                <div className="flex-1">
                  <p className="font-display font-bold text-slate-800 text-sm">Chat on WhatsApp</p>
                  <p className="text-xs text-slate-500 mt-0.5">Tap to open a pre-filled message — fastest way to reach us</p>
                </div>
                <i className="fa-solid fa-arrow-right text-xs text-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></i>
              </a>

              {/* Response promise strip */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: 'fa-clock', title: 'Quick Reply', desc: 'Within 2–4 hours' },
                  { icon: 'fa-calendar-check', title: 'Site Visit', desc: 'In 2–3 working days' },
                  { icon: 'fa-indian-rupee-sign', title: 'Free Quote', desc: 'No hidden charges' },
                ].map(item => (
                  <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-4 text-center">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-2">
                      <i className={`fa-solid ${item.icon} text-orange-500 text-sm`}></i>
                    </div>
                    <p className="font-display font-bold text-slate-800 text-xs">{item.title}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Map + address */}
            <div className="lg:col-span-2 space-y-5 reveal-right">
              {/* Map card */}
              <div className="rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="px-5 py-4 border-b border-slate-50">
                  <h3 className="font-display font-bold text-slate-800 flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-orange-500"></i>
                    Our Location
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Hirakbaug Shopping Centre, Marketing Yard Road, Amreli, Gujarat</p>
                </div>
                <div className="relative">
                  <iframe
                    id="contact-map-iframe"
                    title="KARTAVYA SOLAR Location — Ahmedabad, Gujarat"
                    src={MAP_SRC}
                    width="100%"
                    height="260"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Address details */}
                <div className="p-5 space-y-4">
                  {[
                    { icon: 'fa-location-dot', label: 'Address', lines: ['KARTAVYA SOLAR', 'Hirakbaug Shopping Centre', 'Marketing Yard Road, Amreli, Gujarat'] },
                    { icon: 'fa-clock',         label: 'Hours',   lines: ['Mon – Sat: 9 AM – 7 PM', 'Sunday: By Appointment'] },
                  ].map(row => (
                    <div key={row.label} className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0">
                        <i className={`fa-solid ${row.icon} text-orange-500 text-xs`}></i>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{row.label}</p>
                        {row.lines.map(l => <p key={l} className="text-sm text-slate-700">{l}</p>)}
                      </div>
                    </div>
                  ))}

                  <a
                    href="https://maps.google.com/?q=Hirakbaug+Shopping+Centre+Marketing+Yard+Road+Amreli+Gujarat"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="contact-get-directions"
                    className="flex items-center justify-center gap-2 w-full bg-orange-50 hover:bg-orange-100
                      text-orange-600 font-semibold text-sm py-2.5 rounded-xl transition-colors"
                  >
                    <i className="fa-solid fa-diamond-turn-right"></i>
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Why contact panel */}
              <div className="bg-slate-900 rounded-2xl p-6">
                <h4 className="font-display font-bold text-white mb-4 flex items-center gap-2">
                  <i className="fa-solid fa-circle-info text-orange-400"></i>
                  Why Contact Us?
                </h4>
                <ul className="space-y-3">
                  {[
                    'Free site assessment & consultation',
                    'Custom solar plan for your building',
                    'Clear ROI projections — no hidden costs',
                    'Government subsidy guidance included',
                    'Dealers & partners welcome PAN India',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <i className="fa-solid fa-circle-check text-orange-400 flex-shrink-0 text-xs"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="contact-faq" className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">FAQ</span>
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="font-display font-extrabold text-3xl text-slate-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {FAQ.map(({ q, a }) => (
              <div key={q} className="reveal bg-white rounded-2xl border border-slate-100 p-6 hover:border-orange-200 transition-colors">
                <h4 className="font-display font-bold text-slate-800 mb-2 flex items-start gap-3">
                  <i className="fa-solid fa-circle-question text-orange-400 mt-0.5 flex-shrink-0"></i>
                  {q}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed pl-7">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
