const PROJECTS = [
  {
    id: 'proj-1',
    kw: '10 kW',
    type: 'Residential',
    location: 'Ahmedabad, Gujarat',
    client: 'Mr. Patel – Residential Home',
    savings: '₹12,000/month',
    panels: '25 Panels',
    // Residential house with solar panels on rooftop
    image: 'https://images.pexels.com/photos/12243093/pexels-photo-12243093.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Completed',
  },
  {
    id: 'proj-2',
    kw: '50 kW',
    type: 'Commercial',
    location: 'Surat, Gujarat',
    client: 'ABC Textiles Pvt. Ltd.',
    savings: '₹55,000/month',
    panels: '125 Panels',
    // Large commercial/factory rooftop covered with solar panels
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
    tag: 'Completed',
  },
  {
    id: 'proj-3',
    kw: '100 kW',
    type: 'Industrial',
    location: 'Rajkot, Gujarat',
    client: 'XYZ Manufacturing Unit',
    savings: '₹1.1 Lakh/month',
    panels: '250 Panels',
    // Solar panel installation on industrial building rooftop
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    tag: 'Completed',
  },
  {
    id: 'proj-4',
    kw: '5 kW',
    type: 'Residential',
    location: 'Vadodara, Gujarat',
    client: 'Mr. Shah – Bungalow',
    savings: '₹6,000/month',
    panels: '12 Panels',
    // Small bungalow / villa with a few solar panels on roof
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=600&q=80',
    tag: 'Completed',
  },
  {
    id: 'proj-5',
    kw: '500 kW',
    type: 'MW Plant',
    location: 'Kutch, Gujarat',
    client: 'Govt. Cooperative Society',
    savings: '₹5.5 Lakh/month',
    panels: '1250 Panels',
    // Vast open-field ground-mount solar farm with hundreds of panels
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80',
    tag: 'Completed',
  },
  {
    id: 'proj-6',
    kw: '25 kW',
    type: 'Commercial',
    location: 'Gandhinagar, Gujarat',
    client: 'Hotel Sunrise',
    savings: '₹28,000/month',
    panels: '63 Panels',
    // Hotel / commercial building rooftop with solar panels
    image: 'https://images.pexels.com/photos/9875438/pexels-photo-9875438.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Completed',
  },
]

const STATS = [
  { icon: 'fa-solar-panel',     value: '500+',  label: 'Projects Completed'   },
  { icon: 'fa-bolt',            value: '2 MW+', label: 'Total Capacity Installed' },
  { icon: 'fa-indian-rupee-sign', value: '₹2Cr+', label: 'Monthly Savings for Clients' },
  { icon: 'fa-map-location-dot', value: '15+',  label: 'States Covered'       },
]

const TYPE_COLORS = {
  Residential: 'bg-green-50 text-green-700 border border-green-100',
  Commercial:  'bg-blue-50 text-blue-700 border border-blue-100',
  Industrial:  'bg-orange-50 text-orange-700 border border-orange-100',
  'MW Plant':  'bg-purple-50 text-purple-700 border border-purple-100',
}

export default function Projects() {
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
            <span className="text-xs font-bold tracking-widest uppercase text-orange-400">Our Work</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white leading-tight mb-4">
            Successful <span className="text-orange-400">Solar Projects</span><br />
            Across India
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            Explore a selection of our completed installations — from small residential rooftops
            to large-scale industrial and MW-level solar plants.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center stagger">
            {STATS.map(s => (
              <div key={s.label} className="reveal">
                <i className={`fa-solid ${s.icon} text-white/70 text-xl mb-1.5 block`}></i>
                <p className="font-display font-extrabold text-2xl text-white">{s.value}</p>
                <p className="text-orange-100 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section id="projects-grid" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-7 bg-orange-500 rounded-full"></div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-500">Portfolio</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 mb-10">
            Featured <span className="text-orange-500">Installations</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger">
            {PROJECTS.map(p => (
              <div
                key={p.id}
                id={p.id}
                className="reveal bg-white rounded-2xl border border-slate-100 overflow-hidden
                  hover:border-orange-200 hover:shadow-xl hover:shadow-orange-50 transition-all group hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <img src={p.image} alt={p.client} loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TYPE_COLORS[p.type] || TYPE_COLORS.Commercial}`}>
                      {p.type}
                    </span>
                    <span className="text-xs bg-green-50 text-green-700 border border-green-100 font-semibold px-2.5 py-1 rounded-full">
                      <i className="fa-solid fa-circle-check text-[9px] mr-1"></i>{p.tag}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display font-bold text-slate-800 text-lg">{p.kw}</h3>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <i className="fa-solid fa-location-dot text-orange-400"></i>
                      {p.location}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">{p.client}</p>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-50">
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-0.5">Panels</p>
                      <p className="text-sm font-semibold text-slate-700">
                        <i className="fa-solid fa-solar-panel text-orange-400 mr-1.5 text-xs"></i>
                        {p.panels}
                      </p>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase tracking-wide mb-0.5">Monthly Savings</p>
                      <p className="text-sm font-semibold text-green-600">
                        <i className="fa-solid fa-circle-arrow-up text-xs mr-1"></i>
                        {p.savings}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-700">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <i className="fa-solid fa-solar-panel text-white/40 text-5xl mb-6 block"></i>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Want a Project Like This?
          </h2>
          <p className="text-orange-100 mb-8 leading-relaxed">
            Contact us for a free site assessment and custom system design for your home or business.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="tel:+919426465233"
              className="flex items-center gap-2 bg-white text-orange-600 font-bold px-7 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <i className="fa-solid fa-phone"></i> Call Us Now
            </a>
            <a href="mailto:kartavysolar@gmail.com?subject=Project Enquiry"
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold
                px-7 py-3.5 rounded-full border border-white/30 transition-all">
              <i className="fa-solid fa-envelope"></i> Send Enquiry
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
