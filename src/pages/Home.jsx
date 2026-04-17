import { Link } from 'react-router-dom'
// Images stored in /public/assets/ — 2D flat illustrations

/* ── Reusable stat card ── */
function Stat({ icon, value, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-10 h-10 rounded-xl bg-orange-500/15 flex items-center justify-center mb-3">
        <i className={`fa-solid ${icon} text-orange-400`}></i>
      </div>
      <p className="font-display font-bold text-xl text-white">{value}</p>
      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
    </div>
  )
}

/* ── Service card ── */
function ServiceCard({ icon, title, desc, link }) {
  return (
    <Link
      to={link || '/services'}
      className="reveal group bg-white rounded-2xl p-6 border border-slate-100 hover:border-orange-200
        hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 hover:-translate-y-1 block"
    >
      <div className="w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center mb-4 transition-colors">
        <i className={`fa-solid ${icon} text-orange-500 text-lg`}></i>
      </div>
      <h3 className="font-display font-bold text-slate-800 mb-2 leading-snug">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      <div className="mt-4 flex items-center gap-1.5 text-orange-500 text-sm font-semibold">
        Learn more <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
      </div>
    </Link>
  )
}

/* ── Why us item ── */
function WhyItem({ icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
        <i className={`fa-solid ${icon} text-orange-500`}></i>
      </div>
      <div>
        <h4 className="font-display font-bold text-slate-800 mb-1 text-sm">{title}</h4>
        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
      </div>
    </div>
  )
}

/* ── Impact card ── */
function ImpactCard({ number, label, icon, color }) {
  const colors = {
    orange: 'bg-orange-50 border-orange-100 text-orange-600',
    green:  'bg-green-50 border-green-100 text-green-600',
    blue:   'bg-blue-50 border-blue-100 text-blue-600',
    amber:  'bg-amber-50 border-amber-100 text-amber-600',
  }
  return (
    <div className={`reveal rounded-2xl border p-6 ${colors[color] || colors.orange}`}>
      <i className={`fa-solid ${icon} text-2xl mb-3 block`}></i>
      <p className="font-display font-extrabold text-3xl leading-none mb-2">{number}</p>
      <p className="text-sm leading-relaxed opacity-80">{label}</p>
    </div>
  )
}

const SERVICES = [
  { icon: 'fa-house',          title: 'Residential Rooftop',       desc: 'Solar PV systems for homes and high-rise buildings — clean power at your doorstep.' },
  { icon: 'fa-industry',       title: 'Commercial & Industrial',   desc: 'Maximise ROI with large-scale solar on unused rooftop space with minimal maintenance.' },
  { icon: 'fa-bolt',           title: 'MW Power Plants',           desc: 'Turnkey megawatt-scale solar solutions for businesses across India.' },
  { icon: 'fa-droplet',        title: 'Solar Water Heater',        desc: 'High-efficiency GI tanks with PUF insulation for reliable hot water year-round.' },
  { icon: 'fa-robot',          title: 'Auto Panel Cleaning',       desc: 'Fully automatic sprinkler system to remove dust — maximise panel efficiency.' },
  { icon: 'fa-file-contract',  title: 'Govt. Liaison & Paperwork', desc: 'MNRE approvals, DISCOM coordination, and subsidy applications handled end-to-end.' },
]

const WHY_US = [
  { icon: 'fa-award',       title: 'Adani & Luminous Authorized', desc: 'Certified partner for India\'s top solar brands.' },
  { icon: 'fa-map-marked-alt', title: 'PAN India Operations',    desc: 'Dealer and contractor network across all states.' },
  { icon: 'fa-leaf',        title: 'IGBC & LEED Points',         desc: 'Earn green building certification with every install.' },
  { icon: 'fa-rupee-sign',  title: 'Clear ROI Projections',      desc: 'Know exactly when your system pays for itself.' },
  { icon: 'fa-shield-halved', title: '25+ Year System Life',     desc: 'Top-grade components for long-term performance.' },
  { icon: 'fa-headset',     title: 'End-to-End Support',         desc: 'Design, install, O&M, and govt. paperwork — all in one.' },
]

export default function Home() {
  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section id="hero" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* subtle grid background */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {/* gradient blobs */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-600/8 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — text */}
            <div className="fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20
                text-orange-400 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
                <i className="fa-solid fa-star text-[10px]"></i>
                Dealers Welcome — PAN INDIA
              </div>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] mb-6">
                Power India With<br />
                <span className="text-orange-400">Clean Solar</span><br />
                Energy
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                KARTAVYA SOLAR delivers custom solar solutions for homes, businesses
                and industries — reducing energy costs and carbon footprints across PAN India.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to="/contact"
                  id="hero-cta-primary"
                  className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white
                    font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5"
                >
                  <i className="fa-solid fa-sun text-sm"></i>
                  Get Free Consultation
                </Link>
                <Link
                  to="/services"
                  id="hero-cta-services"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white
                    font-semibold px-6 py-3 rounded-full border border-white/20 transition-all"
                >
                  <i className="fa-solid fa-caret-right text-sm"></i>
                  Our Services
                </Link>
              </div>

              {/* Partner logos */}
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-xs text-slate-500 uppercase tracking-wider">Authorized by</span>
                <span className="bg-white/5 border border-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-lg">
                  Adani Solar
                </span>
                <span className="bg-white/5 border border-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-lg">
                  Luminous Solar
                </span>
              </div>
            </div>

            {/* Right — hero image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg float">

                {/* Stacked card shadow layers */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-orange-500/20 blur-sm pointer-events-none" />
                <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl bg-orange-400/15 pointer-events-none" />

                {/* Main image — clipped with angled bottom */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 88%, 85% 100%, 0 100%)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80"
                    alt="Residential house with rooftop solar panels"
                    className="w-full object-cover aspect-[4/3] scale-105"
                  />
                  {/* Orange duotone tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-transparent to-slate-900/50" />
                  {/* Scanline texture */}
                  <div className="absolute inset-0 opacity-[0.06]"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 4px)' }} />
                </div>

                {/* Top-right floating energy chip */}
                <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-2xl px-4 py-2.5 shadow-lg shadow-orange-500/40 flex items-center gap-2">
                  <i className="fa-solid fa-bolt text-sm"></i>
                  <div>
                    <p className="font-bold text-sm leading-none">Solar Live</p>
                    <p className="text-orange-200 text-[10px] mt-0.5">Generating now</p>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse ml-1"></span>
                </div>

                {/* Left side vertical label */}
                <div className="absolute -left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
                  <div className="h-16 w-px bg-gradient-to-b from-transparent via-orange-400/60 to-transparent" />
                  <span className="text-orange-400/70 text-[10px] font-bold tracking-[0.2em] uppercase"
                    style={{ writingMode: 'vertical-rl' }}>Clean Energy</span>
                  <div className="h-16 w-px bg-gradient-to-b from-transparent via-orange-400/60 to-transparent" />
                </div>

                {/* Bottom-left floating savings card */}
                <div className="absolute -bottom-6 -left-4 bg-slate-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-arrow-trend-up text-green-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm leading-none">₹12,000 <span className="text-green-400 text-xs">↑</span></p>
                    <p className="text-slate-400 text-[10px] mt-0.5">Avg. monthly savings</p>
                  </div>
                </div>

                {/* Bottom-right dot grid decoration */}
                <div className="absolute -bottom-3 -right-3 w-20 h-20 opacity-30 pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, #fb923c 1px, transparent 1px)', backgroundSize: '6px 6px' }} />

              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 bg-slate-800/60 backdrop-blur border border-slate-700/60 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />
            <Stat icon="fa-recycle"          value="3000+"  label="Tons CO₂ Abated Annually" />
            <Stat icon="fa-tree"             value="5000+"  label="Trees Equivalent Planted"  />
            <Stat icon="fa-calendar-check"   value="25 yrs" label="System Lifespan"           />
            <Stat icon="fa-map-location-dot" value="PAN"    label="India Coverage"             />
          </div>
        </div>
      </section>

      {/* ──────────── SERVICES PREVIEW ──────────── */}
      <section id="services-preview" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-500">What We Offer</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <h2 className="reveal font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight">
              Complete <span className="text-orange-500">Solar</span> Solutions
            </h2>
            <Link to="/services" id="services-view-all"
              className="flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap">
              View all services <i className="fa-solid fa-arrow-right text-xs"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
            {SERVICES.map(s => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* ──────────── ABOUT SPLIT ──────────── */}
      <section id="about-preview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image side */}
            <div className="relative reveal-left">
              <div className="rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                  alt="Commercial building with rooftop solar panels"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-4">
                <p className="font-display font-bold text-2xl text-orange-500">₹0</p>
                <p className="text-xs text-slate-500 mt-0.5">Cost of sunshine</p>
              </div>
            </div>

            {/* Content side */}
            <div className="reveal-right">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Who We Are</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-5">
                KARTAVYA SOLAR —<br />
                <span className="text-orange-500">Creating a Green World</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Solar energy is non-polluting, renewable, and the source is <strong>free</strong>.
                KARTAVYA SOLAR is authorized to install the highest-rated solar energy solutions —
                with transparent ROI projections showing exactly when your system pays for itself.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm mb-7">
                Over 25 years, your solar system will offset your carbon footprint by tons of CO₂,
                equal to planting acres of trees. We serve MSMEs, homes, and large enterprises across
                every state in India.
              </p>

              <div className="flex flex-wrap gap-2 mb-7">
                {['IGBC Certified', 'LEED Points', 'MNRE Approved', 'Green Building'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium
                    bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1.5 rounded-full">
                    <i className="fa-solid fa-check text-[9px]"></i>
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/about"
                id="home-about-cta"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white
                  font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-orange-200"
              >
                Our Story <i className="fa-solid fa-arrow-right text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── IMPACT NUMBERS ──────────── */}
      <section id="impact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Environmental Impact</span>
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              Every Panel <span className="text-orange-500">Saves the Planet</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            <ImpactCard number="3000+" label="Tons of CO₂ abated by MSMEs annually"    icon="fa-cloud"  color="orange" />
            <ImpactCard number="150+"  label="Tons of CO₂ abated by homes annually"    icon="fa-leaf"   color="green"  />
            <ImpactCard number="5000+" label="Trees equivalent planted (MSMEs)"        icon="fa-tree"   color="green"  />
            <ImpactCard number="250+"  label="Trees equivalent planted (homes)"        icon="fa-seedling" color="amber" />
          </div>

          <p className="text-center text-xs text-slate-400 mt-6 italic">
            *MNRE estimates. Actual values depend on system size and location.
          </p>
        </div>
      </section>

      {/* ──────────── WHY US ──────────── */}
      <section id="why-kartavya" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Why Choose Us</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-4">
                The <span className="text-orange-500">KARTAVYA</span> Advantage
              </h2>
              <p className="text-slate-500 leading-relaxed mb-10">
                From site assessment to commissioning and beyond — we handle everything
                with transparency, expertise, and a commitment to clean energy.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {WHY_US.map(item => <WhyItem key={item.title} {...item} />)}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col gap-6">
              <img src="https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=80" alt="Premium solar panels close-up" className="w-full h-56 object-cover" loading="lazy" />
              <div className="px-8 pb-8 flex flex-col gap-5">
                <div className="text-center">
                  <p className="font-display font-bold text-white text-xl">Premium Components</p>
                  <p className="text-slate-400 text-sm mt-1">Top-rated panels • 25-year warranty • Max efficiency</p>
                </div>
                <Link
                  to="/contact"
                  id="why-us-cta"
                  className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600
                    text-white font-semibold py-3 rounded-xl transition-colors"
                >
                  <i className="fa-solid fa-solar-panel text-sm"></i>
                  Get a Free Site Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── CTA BANNER ──────────── */}
      <section id="cta-banner" className="py-20 bg-gradient-to-br from-orange-500 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-solar-panel text-white text-2xl"></i>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
            Ready to Go Solar?
          </h2>
          <p className="text-orange-100 text-lg leading-relaxed mb-8">
            Get a free site assessment and custom solar plan for your property.
            No hidden costs, clear ROI projections.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="tel:+919426465233"
              id="cta-call"
              className="flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full
                hover:shadow-2xl hover:-translate-y-0.5 transition-all"
            >
              <i className="fa-solid fa-phone"></i>
              Call Now
            </a>
            <Link
              to="/contact"
              id="cta-contact-link"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold
                px-7 py-3.5 rounded-full border border-white/30 transition-all"
            >
              <i className="fa-solid fa-envelope"></i>
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
