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
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">{title}</h1>
        {subtitle && <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

const SERVICES = [
  {
    id: 'residential',
    icon: 'fa-house',
    tag: 'Most Popular',
    title: 'Residential Solar Rooftop',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80',
    desc: 'Solar Rooftop (PV) systems mounted on the rooftop of residential or high-rise buildings. Components include photovoltaic modules, mounting systems, cables, solar inverters, and electrical accessories.',
    features: ['Grid-tie & off-grid options', 'Net metering support', 'Government subsidy guidance', 'Mobile monitoring app'],
    color: 'orange',
  },
  {
    id: 'commercial',
    icon: 'fa-industry',
    title: 'Industrial, Residential & Commercial Solar Plant',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    desc: 'Solar energy provides a good return on investment through the use of un-utilized rooftop space and requires minimal maintenance. Custom solutions for your commercial building with transparent ROI projections.',
    features: ['Customized plant sizing', 'ROI within 4–6 years', 'Minimal maintenance required', 'Annual energy audits'],
    color: 'blue',
  },
  {
    id: 'mw-plant',
    icon: 'fa-bolt',
    title: 'Solar MW Power Plant',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
    desc: 'KARTAVYA SOLAR has worked with most states in India to provide contractor service with green energy solutions. MW-scale solutions built for reliability and maximum output across India\'s diverse landscapes.',
    features: ['Ground-mount & rooftop', 'Full EPC service', 'State-specific expertise', 'Grid connectivity support'],
    color: 'amber',
  },
  {
    id: 'water-heater',
    icon: 'fa-droplet',
    title: 'Solar Water Heater',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    desc: 'High-efficiency solar water heating with 2.5mm GI inner tank, marine-grade coating, and 50mm PUF insulation for maximum heat retention. Built for India\'s diverse climate conditions.',
    features: ['2.5 mm GI inner tank', '50 mm PUF insulation', 'Electric backup provision', 'SS 1″ threaded connection'],
    color: 'green',
  },
  {
    id: 'cleaning',
    icon: 'fa-robot',
    title: 'Solar Cleaning Sprinkler & Automation',
    image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=600&q=80',
    desc: 'KARTAVYA SOLAR specialises in fully automatic solar panel cleaning systems. Our automation controllers remove dirt, dust, and debris — ensuring optimal panel performance and efficiency year-round.',
    features: ['Fully automated schedule', 'Water-efficient system', 'Remote monitoring', 'Boosts output by up to 30%'],
    color: 'purple',
  },
  {
    id: 'consulting',
    icon: 'fa-file-contract',
    title: 'Project Designing & Consultancy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    desc: 'Professional solar consultancy — project design, all government approvals, procurement support, installation team management, commissioning, and advisor services with honest and forthright advice.',
    features: ['Project design & layout', 'All govt. approvals', 'Procurement support', 'Commissioning & handover'],
    color: 'indigo',
  },
  {
    id: 'om',
    icon: 'fa-screwdriver-wrench',
    title: 'Operation & Maintenance',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    desc: 'Cost-effective O&M packages focusing on inverter performance and monitoring system optimization. Comprehensive maintenance plans to keep your solar system performing at peak efficiency for 25+ years.',
    features: ['Inverter maintenance', 'Performance monitoring', 'Annual cleaning contracts', 'Emergency response'],
    color: 'slate',
  },
  {
    id: 'govt',
    icon: 'fa-landmark',
    title: 'Government Liaison & Paperwork',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
    desc: 'Complete government liaison service — from MNRE applications and DISCOM coordination to state-level solar policy filings and subsidy paperwork. KARTAVYA SOLAR has been at the forefront since solar policy was announced in India.',
    features: ['MNRE applications', 'State DISCOM coordination', 'Net metering agreements', 'Subsidy paperwork'],
    color: 'teal',
  },
]

const iconColor = {
  orange: 'bg-orange-50 text-orange-500',
  blue:   'bg-blue-50 text-blue-500',
  amber:  'bg-amber-50 text-amber-500',
  green:  'bg-green-50 text-green-500',
  purple: 'bg-purple-50 text-purple-500',
  indigo: 'bg-indigo-50 text-indigo-500',
  slate:  'bg-slate-100 text-slate-500',
  teal:   'bg-teal-50 text-teal-500',
}

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Services"
        title={<>Complete Solar Solutions<br /><span className="text-orange-400">for Every Need</span></>}
        subtitle="From a single rooftop panel to a MW-scale power plant — we design, install, and maintain solar energy systems across residential, commercial, and industrial sectors."
      />

      {/* Services grid */}
      <section id="all-services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-500">All Services</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-12">
            Everything <span className="text-orange-500">Solar</span>
          </h2>

          <div className="space-y-8">
            {SERVICES.map((svc, i) => (
              <article
                key={svc.id}
                id={`service-${svc.id}`}
                className="reveal grid md:grid-cols-5 gap-0 rounded-2xl border border-slate-100 overflow-hidden
                  hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all group"
              >
                {/* Image panel */}
                <div className={`md:col-span-2 overflow-hidden flex items-center justify-center min-h-[220px]
                  ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full min-h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-3 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconColor[svc.color] || iconColor.orange}`}>
                      <i className={`fa-solid ${svc.icon}`}></i>
                    </div>
                    {svc.tag && (
                      <span className="text-xs font-bold bg-orange-50 text-orange-600 border border-orange-100 px-2.5 py-1 rounded-full">
                        {svc.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-bold text-xl text-slate-900 mb-3 leading-snug">{svc.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{svc.desc}</p>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6">
                    {svc.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <i className="fa-solid fa-circle-check text-orange-400 text-xs flex-shrink-0"></i>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div>
                    <a
                      href={`mailto:kartavysolar@gmail.com?subject=Enquiry: ${svc.title}`}
                      id={`service-enquire-${svc.id}`}
                      className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600
                        text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all
                        hover:shadow-lg hover:shadow-orange-200"
                    >
                      <i className="fa-solid fa-envelope text-xs"></i>
                      Enquire Now
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08]"
          style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-7 bg-white/60 rounded-full"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/80">Partnership</span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
                Dealers Welcome — <span className="text-orange-100">PAN INDIA</span>
              </h2>
              <p className="text-orange-100/80 max-w-lg">
                Join our growing network of solar dealers and contractors across all Indian states.
                Competitive margins, technical support, and certified training provided.
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a href="tel:+919409455932" id="dealer-call-cta"
                className="flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50
                  font-semibold px-6 py-3 rounded-full transition-colors shadow-lg">
                <i className="fa-solid fa-phone text-sm"></i>
                Call for Dealership
              </a>
              <a href="mailto:kartavysolar@gmail.com?subject=Dealer Enquiry" id="dealer-email-cta"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white
                  font-semibold px-6 py-3 rounded-full border border-white/30 transition-colors">
                <i className="fa-solid fa-envelope text-sm"></i>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
