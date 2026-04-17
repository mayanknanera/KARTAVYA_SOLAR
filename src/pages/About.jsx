import { Link } from 'react-router-dom'

function PageHero({ label, title, subtitle }) {
  return (
    <section className="relative pt-32 pb-20 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-0.5 w-7 bg-orange-400 rounded-full"></div>
          <span className="text-xs font-bold tracking-widest uppercase text-orange-400">{label}</span>
        </div>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
          {title}
        </h1>
        {subtitle && <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

const VALUES = [
  { icon: 'fa-seedling',      title: 'Sustainability',  desc: 'Every decision is guided by environmental responsibility and long-term thinking.' },
  { icon: 'fa-lightbulb',     title: 'Innovation',      desc: 'From auto-cleaning systems to smart monitoring — we embrace cutting-edge technology.' },
  { icon: 'fa-handshake',     title: 'Integrity',       desc: 'Honest, transparent advice — we only recommend what\'s right for your specific needs.' },
  { icon: 'fa-star',          title: 'Excellence',      desc: 'Top-rated components, certified installations, zero-compromise quality standards.' },
]

const SPECS = [
  ['Inner Tank',       '2.5 mm Galvanized Iron'],
  ['Inner Coating',    'High Grade Marine Coating'],
  ['Outer Body',       '0.5 mm Galvanized Iron'],
  ['Insulation',       '50 mm High-Density PUF'],
  ['Stand Material',   '1.5 mm GI with PP Power Coating'],
  ['Connection',       'SS 1″ Diameter Threaded'],
  ['Electric Backup',  'Provision Provided'],
]

const TIMELINE = [
  { icon: 'fa-flag', year: 'Founded',   text: 'KARTAVYA SOLAR established with a mission to bring affordable clean energy to Indian homes and businesses.' },
  { icon: 'fa-handshake', year: 'Partnership', text: 'Became authorized partner for Adani Solar and Luminous Solar — India\'s most trusted solar brands.' },
  { icon: 'fa-globe-asia', year: 'Expansion', text: 'Expanded to PAN India operations with dealer and contractor networks across all states.' },
  { icon: 'fa-trophy', year: 'Today',    text: 'Thousands of installations across residential, commercial, and industrial sectors — and growing.' },
]

export default function About() {
  return (
    <>
      <PageHero
        label="About Us"
        title={<>Creating a Green World<br /><span className="text-orange-400">One Panel at a Time</span></>}
        subtitle="KARTAVYA SOLAR — Authorized solar energy installer serving PAN India. Bringing clean, affordable, renewable power to homes, businesses, and industries."
      />

      {/* ── Story ── */}
      <section id="our-story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-right">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Our Story</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 leading-tight mb-6">
                Building a <span className="text-orange-500">Sustainable Future</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The cost of energy from power grids keeps going up, and the importance of maintaining
                a healthy environment grows every day. Installing a solar energy system is a <strong>cost-effective,
                sustainable, and simple</strong> way to reduce your environmental footprint and energy budget.
              </p>
              <p className="text-slate-500 leading-relaxed mb-4 text-sm">
                Solar energy is non-polluting and renewable — and the source is <strong>free</strong>.
                Over 25 years, your new system will offset your carbon footprint by tons of CO₂,
                equal to planting acres of trees.
              </p>
              <p className="text-slate-500 leading-relaxed text-sm mb-8">
                KARTAVYA SOLAR is authorized to install the highest-rated solar energy solutions in India.
                We provide transparent ROI projections so you know exactly when your system pays for itself.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Adani Authorized', 'Luminous Partner', 'MNRE Recognized'].map(tag => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium
                    bg-orange-50 text-orange-700 border border-orange-100 px-3 py-1.5 rounded-full">
                    <i className="fa-solid fa-certificate text-[9px]"></i>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative reveal-left">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"
                  alt="Commercial rooftop solar installation"
                  className="w-full h-80 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* top badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/40 backdrop-blur-sm
                  border border-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Adani Authorized Install
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg border border-slate-100 p-5">
                <p className="font-display font-extrabold text-3xl text-orange-500">₹0</p>
                <p className="text-xs text-slate-500 mt-1">Source cost of<br />solar energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section id="mission" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Our Mission</span>
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-3">
              Green &amp; Clean Energy for <span className="text-orange-500">Every Indian</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">Serving MSMEs, Homes, and Large Enterprises — across every state in India.</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 stagger">
            {[
              { icon: 'fa-solar-panel', title: 'Solar Plant',          color: 'orange',
                desc: 'A solar plant can potentially abate 3000+ Tons (MSMEs) & 150+ Tons (Homes) of CO₂ annually.' },
              { icon: 'fa-leaf',        title: 'Clean Energy',         color: 'green',  accent: true,
                desc: 'Equivalent to planting 5000+ Trees (MSMEs) & 250+ Trees (Homes) each year.' },
              { icon: 'fa-award',       title: 'Green Certification',  color: 'blue',
                desc: 'Earn Green Building Certification points: IGBC, LEED — crucial for sustainable design.' },
            ].map(c => (
              <div key={c.title}
                className={`rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-lg
                  ${c.accent
                    ? 'bg-gradient-to-br from-orange-500 to-orange-700 border-transparent text-white'
                    : 'bg-white border-slate-100'}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5
                  ${c.accent ? 'bg-white/20' : 'bg-orange-50'}`}>
                  <i className={`fa-solid ${c.icon} text-xl ${c.accent ? 'text-white' : 'text-orange-500'}`}></i>
                </div>
                <h3 className={`font-display font-bold text-lg mb-3 ${c.accent ? 'text-white' : 'text-slate-800'}`}>{c.title}</h3>
                <p className={`text-sm leading-relaxed ${c.accent ? 'text-orange-100' : 'text-slate-500'}`}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section id="values" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-500">What We Stand For</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-12">
            Our Core <span className="text-orange-500">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
            {VALUES.map(v => (
              <div key={v.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-orange-200
                  hover:shadow-lg hover:shadow-orange-50 transition-all hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                  <i className={`fa-solid ${v.icon} text-orange-500 text-lg`}></i>
                </div>
                <h3 className="font-display font-bold text-slate-800 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Spec — Solar Water Heater ── */}
      <section id="product-spec" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="reveal-right">
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Featured Product</span>
              </div>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-3">
                Solar Water Heater<br /><span className="text-orange-500">Specifications</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                Marine-grade coated tanks with 50mm PUF insulation and stainless steel fittings —
                built for India's diverse climate, from coastal humidity to mountain cold.
              </p>
              <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                {SPECS.map(([label, val], i) => (
                  <div key={label}
                    className={`flex items-center justify-between px-5 py-3.5 gap-4
                      ${i !== SPECS.length - 1 ? 'border-b border-slate-50' : ''}`}
                  >
                    <span className="text-sm text-slate-500 font-medium">{label}</span>
                    <span className="text-sm font-semibold text-slate-800 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden lg:sticky lg:top-24 shadow-xl reveal-left">
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="Solar water heater installation on rooftop"
                  className="w-full h-72 object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-display font-bold text-white text-lg leading-snug">Solar Water Heater</p>
                  <p className="text-slate-300 text-xs mt-1">GI Tank • PUF Insulation • Marine Coating</p>
                </div>
              </div>
              <div className="bg-slate-900 px-6 py-4 grid grid-cols-3 divide-x divide-slate-700/60">
                {[['2.5mm', 'GI Tank'], ['50mm', 'PUF Insulation'], ['25yr', 'Life']].map(([val, lbl]) => (
                  <div key={lbl} className="text-center px-3">
                    <p className="font-bold text-orange-400 text-base leading-none">{val}</p>
                    <p className="text-slate-400 text-[10px] mt-1">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section id="journey" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Our Journey</span>
              <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900">
              How We <span className="text-orange-500">Grew</span>
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-orange-100"></div>
            <div className="space-y-10">
              {TIMELINE.map(({ icon, year, text }) => (
                <div key={year} className="reveal flex gap-8 relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center z-10 shadow-lg shadow-orange-200">
                    <i className={`fa-solid ${icon} text-white text-sm`}></i>
                  </div>
                  <div className="pt-1.5">
                    <p className="font-display font-bold text-orange-500 mb-1">{year}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to Go Solar?
          </h2>
          <p className="text-orange-100 mb-8">
            We're confident our qualifications and experience will meet your needs.
            Let's make your building more efficient together.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" id="about-cta-primary"
              className="flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full
                hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Contact Us
            </Link>
            <Link to="/services" id="about-cta-services"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold
                px-7 py-3.5 rounded-full border border-white/30 transition-all">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
