import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Building2, Shield, TrendingUp, Users, Sparkles, Globe2, Award, Compass, Mountain, HardHat, LineChart, Handshake } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroImg from "@/assets/hero_premium.png";
import projectsImg from "@/assets/projects.jpg";
import mapImg from "@/assets/map.png";
import investImg from "@/assets/1.png";
import partnerImg from "@/assets/2.png";
import { Reveal, Reveal3D, Counter, GSAPReveal, GSAPCounter } from "@/components/site/Reveal";
import { Floating3DBackground } from "@/components/site/Floating3DBackground";
import { pillars } from "@/data/pillars";
import realtyBg from "@/assets/realty_bg.png";
import associatesBg from "@/assets/associates_bg.png";
import valuatorsBg from "@/assets/valuators_bg.png";
import enterpriseBg from "@/assets/enterprise_bg.png";
import scaffoldingBg from "@/assets/scaffolding_bg.png";
import geoAeroBg from "@/assets/geo_aero_bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "True Waves Group — Where Vision Becomes Velocity" },
      { name: "description", content: "South India-based investment and development business group built on five expert pillars — real estate, valuation, association, enterprise and scaffolding." },
      { property: "og:title", content: "Trusted Investment & Development Group in South India | True Waves Group" },
      { property: "og:description", content: "We Help You Invest Smarter, Build Better and Grow Faster." },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});


const pillarIcons = [Building2, Handshake, LineChart, Sparkles, Compass, HardHat];
const pillarBgs = [realtyBg, associatesBg, valuatorsBg, enterpriseBg, scaffoldingBg, geoAeroBg];

function InteractivePillarsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 lg:py-32 bg-ink text-primary-foreground relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-accent/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

      <div className="mx-auto section-container relative z-10">
        <GSAPReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="eyebrow text-accent/80">Our Five Pillars</span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4 leading-[1.1] font-semibold">
                One group<br />Five enterprises
              </h2>
            </div>
            <p className="text-lg text-primary-foreground/60 max-w-md">
              A unified ecosystem designed to seamlessly manage every aspect of your real estate, valuation, and enterprise needs.
            </p>
          </div>
        </GSAPReveal>

        <div className="flex flex-col lg:flex-row w-full h-[600px] lg:h-[450px] gap-3 lg:gap-4 overflow-hidden relative">
          {pillars.map((p, index) => {
            const Icon = pillarIcons[index] ?? Mountain;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={p.id}
                onClick={() => setActiveIndex(index)}
                initial={false}
                animate={{
                  flex: isActive ? '8 1 0%' : '1 1 0%',
                  rotateY: isActive ? 0 : index % 2 === 0 ? 15 : -15,
                  z: isActive ? 20 : 0
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-end overflow-hidden cursor-pointer rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10"
                style={{ transformStyle: "preserve-3d", willChange: "flex, transform" }}
              >
                {/* Background Image */}
                <div
                  className={`absolute inset-0 transition-all duration-1000 ${isActive ? (index === 4 ? 'opacity-85' : 'opacity-70') : 'opacity-[0.08] grayscale brightness-50'}`}
                  style={{
                    backgroundImage: `url(${pillarBgs[index]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: isActive ? 'scale(1)' : 'scale(1.1)',
                  }}
                />

                {/* Active Background Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Number indicator */}
                <div className={`absolute top-6 left-6 font-display font-bold transition-all duration-700 ${isActive ? 'text-5xl text-white/10' : 'text-2xl text-white/5'} z-0`}>
                  0{index + 1}
                </div>

                <div className="relative z-10 p-5 lg:p-8 flex flex-col justify-end h-full w-full">

                  {/* Label container */}
                  <div className="flex items-center gap-4">
                    <div className={`
                      flex items-center justify-center rounded-2xl transition-all duration-700 shrink-0
                      ${isActive ? 'w-14 h-14 bg-accent text-accent-foreground shadow-lg shadow-accent/20' : 'w-12 h-12 bg-white/5 text-primary-foreground/40'}
                    `}>
                      <Icon className={isActive ? "w-7 h-7" : "w-6 h-6"} />
                    </div>

                    {/* Title Text wrapper */}
                    <div className="relative flex-grow h-14 flex flex-col justify-center overflow-hidden">
                      <div
                        className="absolute left-0 w-[500px] transition-all duration-700 ease-in-out"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0)' : 'translateX(20px)'
                        }}
                      >
                        <span className="eyebrow text-white block mb-1 drop-shadow-sm">{p.tagline}</span>
                        <h3 className="font-display text-2xl font-bold whitespace-nowrap">{p.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Expanded description */}
                  <div
                    className="transition-all duration-700 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: isActive ? '200px' : '0px',
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? '1rem' : '0'
                    }}
                  >
                    <p className="text-primary-foreground/70 mb-6 leading-relaxed max-w-2xl line-clamp-3">
                      {p.description}
                    </p>
                    {p.externalLink ? (
                      <a 
                        href={p.externalLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-foreground transition-colors"
                      >
                        Explore enterprise <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link to="/pillars" className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors">
                        Explore enterprise <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Home() {
  const { scrollYProgress } = useScroll();
  
  // Hero Parallax & 3D Effects
  const heroRotateX = useTransform(scrollYProgress, [0, 0.15], [0, 12]);
  const heroTranslateZ = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothRotateX = useSpring(heroRotateX, springConfig);
  const smoothTranslateZ = useSpring(heroTranslateZ, springConfig);
  const smoothScale = useSpring(heroScale, springConfig);

  return (
    <div style={{ perspective: "1500px" }}>
      <Floating3DBackground />
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-gradient-hero text-primary-foreground grain">
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={heroImg}
            alt="Ultra-premium modern corporate architectural facade at golden hour"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128]/80 via-transparent to-transparent" />
        </motion.div>

        <motion.div 
          style={{ 
            rotateX: smoothRotateX,
            translateZ: smoothTranslateZ,
            scale: smoothScale,
            transformStyle: "preserve-3d"
          }}
          className="relative mx-auto section-container pb-20 pt-40 w-full"
        >
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="eyebrow text-accent">Where Vision Becomes Velocity</span>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] leading-[1.1] max-w-5xl text-balance font-semibold">
              We Help You Invest <span className="text-gradient-brand">Smarter</span>,
              <br />
              Build Better and Grow Faster
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl opacity-80 leading-relaxed text-balance">
              South India's premier multi-sector group delivering excellence across real estate, 
              valuation, and enterprise development. Built for growth.
            </p>
          </Reveal>
          <GSAPReveal delay={450}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/pillars" className="group btn-primary text-base tracking-wide shadow-brand hover:shadow-elegant">
                Explore Our Group
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
                className="inline-flex items-center gap-3 border border-primary-foreground/30 px-7 py-4 rounded-full text-base tracking-wide hover:bg-primary-foreground hover:text-accent transition-all duration-500 cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </GSAPReveal>

          <div className="mt-20 hidden md:flex items-end gap-16 opacity-80">
            <div><div className="font-display text-3xl font-semibold">05</div><div className="text-sm tracking-widest uppercase opacity-60 mt-1">Pillars</div></div>
            <div><div className="font-display text-3xl font-semibold">18+</div><div className="text-sm tracking-widest uppercase opacity-60 mt-1">Years of expertise</div></div>
            <div><div className="font-display text-3xl font-semibold">ISO 9001:2015</div><div className="text-sm tracking-widest uppercase opacity-60 mt-1">Certified</div></div>
          </div>
        </motion.div>
      </section>

      {/* STRENGTH IN NUMBERS */}
      <Section eyebrow="Our Strength in Numbers" title={<>18+ Years of Proven Excellence<br />Across South India</>}>
        <p className="-mt-8 mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          Delivering reliable solutions since 2008 — built on trust, performance, and long-term relationships.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { n: 18, s: "+", l: "Years of Proven Expertise" },
            { n: 20, s: "+", l: "Projects Delivered" },
            { n: 50, s: "+", l: "Strategic Partners" },
            { n: 5, s: "", l: "Business Pillars" },
          ].map((m, i) => (
            <GSAPReveal key={i} delay={i * 100} className="bg-background p-10">
              <div className="font-display text-5xl md:text-6xl text-foreground font-semibold">
                <GSAPCounter to={m.n} suffix={m.s} />
              </div>
              <div className="mt-3 text-base text-muted-foreground tracking-wide">{m.l}</div>
            </GSAPReveal>
          ))}
        </div>
      </Section>

      {/* INTERACTIVE PILLARS */}
      <InteractivePillarsSection />

      {/* WHY CHOOSE US */}
      <Section eyebrow="Why Choose True Waves Group" title={<>Built for Trust. Driven by Data.<br />Designed for Growth.</>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: Sparkles, t: "One Powerful Ecosystem", d: "Five specialized verticals — real estate, valuation, enterprise, scaffolding & partnerships — working seamlessly to maximize your outcomes." },
            { icon: Award, t: "Certified Quality You Can Rely On", d: "ISO 9001:2015 certified processes ensuring consistency, transparency, and international-standard execution." },
            { icon: Shield, t: "100% Transparent Approach", d: "Clear communication, zero hidden costs, and complete clarity at every stage of your investment journey." },
            { icon: Mountain, t: "Deep Market Expertise (15+ Years)", d: "Strong understanding of Tamil Nadu real estate trends, growth corridors, and investment potential." },
            { icon: Users, t: "Leadership That Delivers", d: "A highly experienced leadership team with proven expertise across multiple industries." },
            { icon: Handshake, t: "Trusted by 50+ Partners", d: "A growing network of investors, developers, and institutions who consistently choose us." },
            { icon: TrendingUp, t: "Measurable Results", d: "In a market full of promises, we deliver results you can see and track." },
          ].map((f, i) => (
            <Reveal3D key={i} delay={i * 80} className="bg-background p-10 group hover:bg-muted/40 transition-colors duration-500">
              <f.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-xl mb-3 font-semibold">{f.t}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{f.d}</p>
            </Reveal3D>
          ))}
        </div>
      </Section>

      {/* WHY INVEST */}
      <section className="relative py-32 lg:py-48 bg-accent text-accent-foreground overflow-hidden">
        <div className="mx-auto section-container relative z-10">
          {/* Section Hero: Editorial Split */}
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-32 items-center mb-32">
            <Reveal>
              <div className="max-w-xl">
                <span className="eyebrow text-white/70 mb-6 block">Investment Intelligence</span>
                <h2 className="font-display text-5xl md:text-7xl leading-[1.05] font-semibold text-white mb-10">
                  Smart Investments.<br />
                  Secure Growth.
                </h2>
                <p className="text-xl leading-relaxed text-white mb-12">
                  The right investment isn’t just about returns—it’s about clarity, confidence, and long-term value. We bridge the gap between vision and high-yield reality.
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
                      className="px-10 py-5 bg-white text-accent font-bold text-lg hover:bg-navy-dark hover:text-white transition-all duration-500 rounded-full cursor-pointer"
                    >
                      Talk to an Expert
                    </button>
                  <Link to="/pillars" className="group flex items-center gap-2 text-white font-semibold border-b border-white/40 pb-1 hover:border-white transition-all">
                    Explore Opportunities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* The Centerpiece Image */}
            <Reveal delay={200}>
              <div className="relative aspect-square flex items-center justify-center p-12 lg:p-20">
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute inset-0 border border-white/20 rounded-full" />
                <motion.img 
                  src={investImg} 
                  alt="Investment Growth Visualization" 
                  className="relative w-full h-full object-contain drop-shadow-2xl z-10 animate-float"
                />
              </div>
            </Reveal>
          </div>

          {/* Editorial Grid: Detailed Points */}
          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 border-t border-white/30 pt-16">
            {[
              { k: "01", t: "Diversified Opportunities", d: "Access real estate, technology, and enterprise sectors — all under one trusted group." },
              { k: "02", t: "Lower Risk, Higher Stability", d: "Multi-sector model reduces dependency on a single market, giving you balanced growth." },
              { k: "03", t: "50+ Proven Projects", d: "A strong portfolio across residential, commercial, and infrastructure developments." },
              { k: "04", t: "Direct Expert Access", d: "Speak directly with professionals — no middle layers, no automated responses." },
              { k: "05", t: "Wealth Partnership", d: "We don’t just complete projects — we build trusted partnerships that grow with you." },
            ].map((b, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group">
                  <div className="font-display text-4xl text-white/40 font-bold mb-6 group-hover:text-white/60 transition-colors">{b.k}</div>
                  <h3 className="font-display text-2xl mb-4 font-semibold text-white">{b.t}</h3>
                  <p className="text-lg text-white/80 leading-relaxed">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <Section eyebrow="Our Projects & Expertise" title="A Portfolio That Reflects Scale, Diversity & Execution">
        <p className="-mt-8 mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          We don’t operate in one segment—we deliver across multiple sectors, ensuring diversified expertise and proven execution.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              t: "Residential", 
              d: "Modern living spaces designed for comfort, aesthetics, and long-term appreciation, catering to evolving lifestyle needs. Premium locations. Thoughtful architecture. Future-ready communities.",
              p: ["TVS Emerald Peninsula", "Indus Luxury Apartments", "RITZ Residences", "Alagar Homes"],
              img: projectsImg
            },
            { 
              t: "Commercial", 
              d: "Strategically located developments offering high visibility, strong footfall, and sustainable rental yield potential. Designed to power businesses and maximize investment returns.",
              p: ["RSM Tower (Trichy)", "Lotus Shopping Centre (Madurai)", "Velraj Commercial Complex (Madurai)"],
              img: projectsImg
            },
            { 
              t: "Infrastructure", 
              d: "Execution of large-scale infrastructure projects that contribute to industrial growth and national development. Driven by engineering excellence, compliance, and timely delivery.",
              p: ["Chennai Metro Rail (Teynampet)", "L&T Kudankulam", "Kellogg’s Sri City"],
              img: projectsImg
            },
            { 
              t: "Institutional / Hospital / Industrial", 
              d: "Reliable execution of projects across education and healthcare sectors, ensuring quality, durability, and scalability. Building spaces that serve communities and future generations.",
              p: ["MGR University", "Thiagarajar College", "Govt. Hospital, Melur"],
              img: projectsImg
            },
          ].map((cat, i) => (
            <Reveal3D key={i} delay={i * 100} className="bg-card border border-border rounded-sm overflow-hidden flex flex-col">
              <div className="aspect-[16/9] relative overflow-hidden">
                <img src={cat.img} alt={cat.t} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <h3 className="absolute bottom-6 left-6 font-display text-2xl text-white font-semibold">{cat.t}</h3>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-muted-foreground text-base leading-relaxed mb-6">{cat.d}</p>
                <div className="mt-auto pt-6 border-t border-border">
                  <div className="eyebrow text-accent text-xs mb-3">Notable Projects</div>
                  <div className="flex flex-wrap gap-2">
                    {cat.p.map((projectName) => (
                      <span key={projectName} className="text-sm font-medium px-3 py-1 bg-muted rounded-full">
                        {projectName}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal3D>
          ))}
        </div>

      </Section>

      {/* PRESENCE */}
      <section className="py-28 lg:py-40 bg-muted/30">
        <div className="mx-auto section-container grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <Reveal>
            <span className="eyebrow text-accent">Our Presence & Visibility</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 font-semibold">Positioned Where<br />Growth Happens</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              True Waves Group operates at the intersection of opportunity and expansion—across South India’s most promising real estate and investment markets.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { t: "Strategic Locations", d: "Active across Tier 1 and high-growth Tier 2 cities in Tamil Nadu (Chennai, Madurai, Trichy)." },
                { t: "Future-Ready Land Holdings", d: "Positioned in upcoming corridors with strong appreciation potential." },
                { t: "On-Ground Accessibility", d: "Operational offices in West Mambalam (Chennai) & Narimedu (Madurai)." },
                { t: "Strong Institutional Network", d: "Connected with banks, NBFCs, government bodies & private institutions." },
              ].map((item) => (
                <div key={item.t} className="flex gap-4">
                  <div className="shrink-0 w-1.5 h-1.5 rounded-full bg-accent mt-2" />
                  <div>
                    <div className="font-display font-semibold text-foreground">{item.t}</div>
                    <div className="text-muted-foreground text-sm">{item.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="relative flex items-center justify-center">
              <img src={mapImg} alt="India presence map" className="w-full h-auto max-w-2xl" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="py-32 lg:py-48 bg-ink text-primary-foreground relative overflow-hidden grain">
        <div className="mx-auto section-container relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 lg:gap-32 items-center">
            
            {/* Visual Frame */}
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
                <div className="relative aspect-[4/5] bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  <motion.img 
                    src={partnerImg} 
                    alt="Strategic Partnership" 
                    className="w-full h-full object-cover grayscale brightness-125 opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000"
                    style={{ objectPosition: 'center 20%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <div className="font-display text-3xl font-bold mb-2">Build Together.</div>
                    <p className="text-sm opacity-50 max-w-xs">Creating enduring value through structured, high-yield collaboration.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Content Spread */}
            <div>
              <Reveal>
                <span className="eyebrow text-accent mb-6 block">Strategic Collaboration</span>
                <h2 className="font-display text-5xl md:text-7xl leading-[1.05] font-semibold mb-10">
                  One Ecosystem.<br />
                  <span className="text-gradient-brand">Multiple Paths.</span>
                </h2>
                <p className="text-xl leading-relaxed opacity-70 mb-12 max-w-xl">
                  Whether you’re entering the market or scaling your presence, True Waves Group offers structured, high-value collaborations built on shared momentum and absolute transparency.
                </p>
                
                <div className="space-y-12 mb-16">
                  {[
                    { t: "Landowners", d: "Transform land into high-value developments or revenue-generating assets." },
                    { t: "Investors", d: "Access diversified investment opportunities across real estate, technology & enterprise." },
                    { t: "Agents & Consultants", d: "Grow your network and earnings through our structured partner ecosystem." },
                    { t: "Financial Institutions", d: "Collaborate on valuation, funding, and large-scale investment opportunities." },
                  ].map((p, i) => (
                    <div key={i} className="group flex gap-8 items-start">
                      <div className="w-12 h-[2px] bg-accent/30 mt-4 group-hover:w-20 group-hover:bg-accent transition-all duration-500" />
                      <div>
                        <h3 className="font-display text-2xl mb-2 font-semibold text-white group-hover:text-accent transition-colors">{p.t}</h3>
                        <p className="text-lg opacity-50 leading-relaxed group-hover:opacity-80 transition-opacity">{p.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="group btn-primary text-xl shadow-brand hover:shadow-elegant">
                  Partner With Us <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Reveal>
            </div>
          </div>
          
          <div className="mt-32 text-center">
            <div className="inline-block px-10 py-5 border border-white/10 rounded-full backdrop-blur-sm text-base opacity-40 italic">
              "Growth is better when it’s built together. Let’s create long-term value, not just transactions."
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto section-container">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="eyebrow text-accent">{eyebrow}</span>
              <h2 className="font-display text-4xl md:text-5xl mt-4 max-w-2xl text-balance leading-[1.15]">{title}</h2>
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
