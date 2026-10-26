import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaBars,
  FaXmark,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
} from 'react-icons/fa6'

const WHATSAPP = '2349019028248'
const PHONE = '+2348121061960'

const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`

const services = [
  {
    number: '01',
    title: 'Residential Interiors',
    description: 'Thoughtfully designed homes that reflect your personality and the way you live.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '02',
    title: 'Commercial Spaces',
    description: 'Distinctive workplaces and commercial environments designed to inspire.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=75',
  },
  {
    number: '03',
    title: 'Bespoke Furniture',
    description: 'Made-to-order furniture crafted to complement your space and lifestyle.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=75',
  },
]

const projects = [
  {
    title: 'The Art of Living',
    category: 'Residential Interior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=75',
  },
  {
    title: 'Quiet Luxury',
    category: 'Contemporary Living',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=75',
  },
  {
    title: 'Everyday Elegance',
    category: 'Modern Residence',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=75',
  },
]

const artisans = [
  'Carpentry & Woodwork',
  'Electrical Services',
  'Plumbing',
  'Painting & Finishing',
  'Tiling & Flooring',
  'Furniture & Upholstery',
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-5 max-w-xl leading-7 text-[#716d67]">{description}</p>}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Interior Design', href: '#services' },
    { label: 'Artisan Services', href: '#artisans' },
    { label: 'Furniture', href: '#furniture' },
    { label: 'Contact', href: '#contact' },
  ]

  const enquire = (service) => {
    window.open(
      whatsappLink(`Hello Interiors by PlanetSpace! I'm interested in ${service}. I'd like to discuss my requirements and get a quotation. Please let me know how we can proceed.`),
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="min-h-screen overflow-hidden bg-white text-[#171714]">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <nav className="glass-nav mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl px-5 py-4 sm:px-7">
          <a href="#home" className="group flex items-center gap-3" aria-label="Interiors by PlanetSpace home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a18455]/60 font-serif text-xl text-[#a18455]">
              P
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-base tracking-wide sm:text-lg">PLANETSPACE</span>
              <span className="mt-1 block text-[8px] tracking-[0.34em] text-[#8e7043] sm:text-[9px]">
                INTERIORS
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => enquire('an interior design consultation')}
            className="gold-button hidden sm:inline-flex"
          >
            Let's Talk <FaArrowUpRightFromSquare size={12} />
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaXmark /> : <FaBars />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="glass-nav mx-auto mt-2 max-w-[1440px] rounded-2xl p-4 lg:hidden"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm transition hover:bg-[#a18455]/10"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMenuOpen(false)
                  enquire('an interior design consultation')
                }}
                className="gold-button mt-3 w-full"
              >
                Request a Consultation <FaArrowRight size={12} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="home" className="relative flex min-h-[760px] items-end bg-[#171714] sm:min-h-[820px] lg:min-h-[900px]">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=78"
            alt="Elegant contemporary living room with warm neutral tones"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

          <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-44 sm:px-10 sm:pb-24 lg:px-16 lg:pb-32">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-[#e2c99e] sm:text-xs">
                <span className="h-px w-10 bg-[#c2a16c]" />
                A considered approach to living
              </p>

              <h1 className="font-serif text-5xl font-normal leading-[1.08] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl lg:text-[88px]">
                Spaces that
                <br />
                inspire. <span className="italic text-[#e2c99e]">Interiors</span>
                <br />
                that define you.
              </h1>

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                Thoughtfully designed interiors, bespoke furniture, and skilled
                craftsmanship for spaces that feel unmistakably yours.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <button onClick={() => enquire('an interior design project')} className="gold-button">
                  Start Your Project <FaArrowRight size={13} />
                </button>
                <a href="#portfolio" className="outline-button">
                  Discover Our Work
                </a>
              </div>
            </motion.div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/25 pt-6 text-[10px] uppercase tracking-[0.2em] text-white/70 sm:mt-20">
              <span>Lekki, Lagos, Nigeria</span>
              <span>Design · Craft · Detail</span>
              <a href="#services" className="hidden items-center gap-2 sm:flex">
                Explore the studio <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="eyebrow">Welcome to PlanetSpace</p>
              <h2 className="section-title">
                Thoughtful design.
                <br />
                <span className="italic text-[#a18455]">Meaningful spaces.</span>
              </h2>
            </div>
            <div className="max-w-xl md:justify-self-end">
              <p className="text-base leading-8 text-[#716d67]">
                We believe exceptional spaces are more than beautiful rooms.
                They are a reflection of who you are, how you live, and what
                matters to you. We bring design, furniture, and craftsmanship
                together to help make that vision real.
              </p>
              <button onClick={() => enquire('a project consultation')} className="text-link mt-6">
                Tell us about your vision <FaArrowRight size={13} />
              </button>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#f7f4ef] px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <SectionHeading
              eyebrow="What we do"
              title="Designed around the way you live."
              description="From the first idea to the finishing touches, we bring together considered design and practical expertise."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <button onClick={() => enquire(service.title)} className="block w-full text-left">
                    <div className="image-frame aspect-[4/4.7]">
                      <img src={service.image} alt={service.title} loading="lazy" />
                      <span className="image-action"><FaArrowUpRightFromSquare /></span>
                    </div>
                    <div className="flex items-start justify-between gap-4 pt-5">
                      <div>
                        <p className="mb-2 text-[10px] tracking-[0.2em] text-[#a18455]">{service.number}</p>
                        <h3 className="font-serif text-2xl sm:text-3xl">{service.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[#716d67]">{service.description}</p>
                      </div>
                      <span className="mt-5 text-[#a18455] transition-transform group-hover:translate-x-1">
                        <FaArrowRight />
                      </span>
                    </div>
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto max-w-[1280px]">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <SectionHeading
                eyebrow="Selected spaces"
                title="A closer look at considered living."
                description="A visual introduction to the spaces and styles that inspire our work."
              />
              <button onClick={() => enquire('a project similar to your featured interiors')} className="text-link mb-12">
                Discuss a similar project <FaArrowRight size={13} />
              </button>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  onClick={() => enquire(`a project inspired by "${project.title}"`)}
                  className={`project-card group text-left ${index === 0 ? 'md:row-span-2' : ''}`}
                >
                  <div className={`image-frame ${index === 0 ? 'aspect-[4/5]' : 'aspect-[5/2.8]'}`}>
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="project-overlay">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#e2c99e]">{project.category}</p>
                        <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">{project.title}</h3>
                      </div>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition group-hover:border-[#c2a16c] group-hover:bg-[#a18455]">
                        <FaArrowRight />
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-[#8a857e]">
              These images are initial visual placeholders. We will replace them with your company's actual completed projects when available.
            </p>
          </div>
        </section>

        <section id="furniture" className="bg-[#171714] px-6 py-20 text-white sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto grid max-w-[1280px] items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <p className="eyebrow">Made for your space</p>
              <h2 className="section-title text-white">
                Furniture with
                <br />
                <span className="italic text-[#d4b783]">a point of view.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base sm:leading-8">
                Discover bespoke furniture shaped around your space, your taste,
                and the details that make a house feel like home.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Beds', 'Sofas', 'Accent Chairs', 'Dining Sets'].map((item) => (
                  <button
                    key={item}
                    onClick={() => enquire(`${item.toLowerCase()} and bespoke furniture`)}
                    className="rounded-full border border-white/20 px-4 py-2.5 text-xs transition hover:border-[#c2a16c] hover:text-[#e2c99e]"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <button onClick={() => enquire('bespoke furniture')} className="gold-button mt-9">
                Enquire About Furniture <FaArrowRight size={13} />
              </button>
            </div>
            <div className="image-frame order-1 aspect-[4/4.5] md:order-2">
              <img
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=75"
                alt="Contemporary sofa in a carefully styled living room"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section id="artisans" className="px-6 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Craftsmanship you can count on</p>
              <h2 className="section-title">
                The right hands
                <br />
                for every <span className="italic text-[#a18455]">detail.</span>
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-7 text-[#716d67] sm:text-base sm:leading-8">
                Need help bringing a project together or taking care of a repair?
                Contact our team to discuss your needs and arrange an appropriate
                artisan service.
              </p>
              <button onClick={() => enquire('help finding an artisan for my project')} className="gold-button mt-8">
                Request an Artisan <FaArrowRight size={13} />
              </button>
            </div>

            <div className="divide-y divide-black/10 border-y border-black/10">
              {artisans.map((artisan, index) => (
                <button
                  key={artisan}
                  onClick={() => enquire(artisan)}
                  className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="flex items-center gap-5">
                    <span className="text-xs text-[#a18455]">0{index + 1}</span>
                    <span className="font-serif text-xl transition group-hover:translate-x-1 sm:text-2xl">{artisan}</span>
                  </span>
                  <FaArrowRight className="shrink-0 text-sm text-[#a18455] transition group-hover:translate-x-1" />
                </button>
              ))}
              <p className="pt-4 text-xs leading-5 text-[#8a857e]">
                Contact us to confirm service availability, location, and scheduling.
              </p>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
          <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-[#eae3d8] px-6 py-16 text-center sm:px-12 sm:py-24">
            <div className="pointer-events-none absolute -right-12 -top-24 h-64 w-64 rounded-full border border-[#a18455]/20 sm:h-96 sm:w-96" />
            <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full border border-[#a18455]/20 sm:h-96 sm:w-96" />
            <div className="relative mx-auto max-w-2xl">
              <p className="eyebrow">Your vision, our craft</p>
              <h2 className="section-title">Every great space starts with a conversation.</h2>
              <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#716d67]">
                Tell us what you have in mind. Let's talk about your space, your ideas,
                and how we can bring them to life.
              </p>
              <button onClick={() => enquire('a new project or consultation')} className="gold-button mt-8">
                Start a Conversation <FaWhatsapp size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-[#11110f] px-6 pb-8 pt-16 text-white sm:px-10 sm:pt-20 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2">
              <a href="#home" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a18455]/60 font-serif text-xl text-[#d4b783]">P</span>
                <span>
                  <span className="block font-serif text-lg tracking-wide">PLANETSPACE</span>
                  <span className="mt-1 block text-[9px] tracking-[0.34em] text-[#d4b783]">INTERIORS</span>
                </span>
              </a>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Thoughtful interiors, bespoke furniture, and artisan services
                for spaces that feel unmistakably yours.
              </p>
            </div>

            <div>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#d4b783]">Explore</h3>
              <div className="flex flex-col items-start gap-3 text-sm text-white/65">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="transition hover:text-white">{link.label}</a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xs uppercase tracking-[0.2em] text-[#d4b783]">Get in touch</h3>
              <a href={`tel:${PHONE}`} className="mb-4 flex items-center gap-3 text-sm text-white/70 hover:text-white">
                <FaPhone className="text-[#d4b783]" /> +234 812 106 1960
              </a>
              <a href={whatsappLink('Hello Interiors by PlanetSpace! I would like to make an enquiry.')} target="_blank" rel="noreferrer" className="mb-4 flex items-center gap-3 text-sm text-white/70 hover:text-white">
                <FaWhatsapp className="text-[#d4b783]" /> WhatsApp us
              </a>
              <a href="https://www.instagram.com/interiorsbyplanetspace/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/70 hover:text-white">
                <FaInstagram className="text-[#d4b783]" /> Instagram
              </a>
              <p className="mt-5 text-xs leading-6 text-white/45">
                2nd Floor, Muniru Plaza,<br />
                Ogombo Road, Lekki, Lagos.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
            <p>© {new Date().getFullYear()} Interiors by PlanetSpace. All rights reserved.</p>
            <p>Designed with intention.</p>
          </div>
        </div>
      </footer>

      <a
        href={whatsappLink('Hello Interiors by PlanetSpace! I would like to make an enquiry.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Interiors by PlanetSpace on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#a18455] text-2xl text-white shadow-xl transition hover:scale-105 hover:bg-[#8c7048] sm:bottom-7 sm:right-7"
      >
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default App


