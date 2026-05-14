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
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-ink text-primary-foreground relative overflow-hidden">
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
    <>
      <Floating3DBackground />
      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-gradient-hero text-primary-foreground grain" style={{ perspective: "1500px" }}>
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
      <Section 
        eyebrow="Why Choose True Waves Group" 
        title={
          <>
            <span className="opacity-40">Built for Trust</span><br />
            <span className="opacity-70">Driven by Data</span><br />
            <span>Designed for Growth</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {[
            { icon: Sparkles, t: "One Powerful Ecosystem", d: "Five specialized verticals — real estate, valuation, enterprise, scaffolding & partnerships — working seamlessly to maximize your outcomes." },
            { icon: Award, t: "Certified Quality You Can Rely On", d: "ISO 9001:2015 certified processes ensuring consistency, transparency, and international-standard execution." },
            { icon: Shield, t: "100% Transparent Approach", d: "Clear communication, zero hidden costs, and complete clarity at every stage of your investment journey." },
            { icon: Mountain, t: "Deep Market Expertise (15+ Years)", d: "Strong understanding of Tamil Nadu real estate trends, growth corridors, and investment potential." },
            { icon: Users, t: "Leadership That Delivers", d: "A highly experienced leadership team with proven expertise across multiple industries." },
            { icon: Handshake, t: "Trusted by 50+ Partners", d: "A growing network of investors, developers, and institutions who consistently choose us." },
            { icon: TrendingUp, t: "Measurable Results", d: "In a market full of promises, we deliver results you can see and track." },
            { icon: Compass, t: "Tailored Investment Strategies", d: "We don't believe in one-size-fits-all. Every partnership is customized to align with your unique financial goals and risk appetite." },
          ].map((f, i) => (
            <Reveal3D key={i} delay={i * 80} className="bg-background p-10 group hover:bg-muted/40 transition-colors duration-500">
              <f.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-xl mb-3 font-semibold">{f.t}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{f.d}</p>
            </Reveal3D>
          ))}
        </div>
      </Section>

      <section className="relative pt-24 lg:pt-32 pb-32 lg:pb-40 bg-ink text-primary-foreground overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-accent/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="mx-auto section-container relative z-10">
          <div className="text-center mb-24 lg:mb-32">
            <Reveal>
              <span className="eyebrow text-accent/80 mb-6 block">Investment Intelligence</span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-10 text-balance">
                Smart Investments<br />
                <span className="text-gradient-brand italic">Secure Growth</span>
              </h2>
              <p className="text-xl text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed text-balance">
                The right investment isn’t just about returns—it’s about clarity, confidence, and long-term value. We bridge the gap between vision and high-yield reality.
              </p>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* The Visual Piece */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal delay={200}>
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                  <div className="absolute inset-4 border border-white/5 rounded-full" />
                  <div className="absolute inset-12 border border-white/10 rounded-full" />
                  <motion.img
                    src={investImg}
                    alt="Investment Growth"
                    className="relative w-4/5 h-4/5 object-contain z-10 drop-shadow-[0_0_50px_rgba(3,169,244,0.2)]"
                    animate={{ 
                      y: [0, -20, 0],
                      rotate: [0, 2, 0]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </div>
              </Reveal>
            </div>

            {/* Strategic Value Grid */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  { t: "Diversified Opportunities", d: "Access real estate, technology, and enterprise sectors under one trusted group." },
                  { t: "Lower Risk Stability", d: "Multi-sector model reduces dependency on a single market for balanced growth." },
                  { t: "50+ Proven Projects", d: "A strong portfolio across residential, commercial, and infrastructure." },
                  { t: "Direct Expert Access", d: "Speak directly with professionals — no middle layers or automated responses." },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <div className="h-full p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-accent/40 transition-all duration-500 group">
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                        <span className="text-xs font-bold">0{i+1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white mb-3">{item.t}</h3>
                      <p className="text-sm text-primary-foreground/50 leading-relaxed group-hover:text-primary-foreground/70 transition-colors">
                        {item.d}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={400}>
                <div className="mt-12 flex flex-wrap gap-6 items-center">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
                    className="px-10 py-5 bg-white text-accent font-bold text-lg hover:bg-accent hover:text-white transition-all duration-500 rounded-full shadow-lg shadow-white/5"
                  >
                    Talk to an Expert
                  </button>
                  <Link to="/pillars" className="group flex items-center gap-2 text-white/60 font-semibold hover:text-white transition-all">
                    View Opportunities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>
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
      <section className="pt-12 lg:pt-16 pb-24 lg:pb-48 bg-muted/30">
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
            <div className="relative flex items-center justify-center lg:translate-y-12">
              <img src={mapImg} alt="India presence map" className="w-full h-auto max-w-2xl" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="pt-24 lg:pt-32 pb-32 lg:pb-40 bg-ink text-primary-foreground relative overflow-hidden grain">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="mx-auto section-container relative z-10">
          <div className="text-center mb-20 lg:mb-28">
            <Reveal>
              <span className="eyebrow text-accent/80 mb-6 block">Strategic Collaboration</span>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tighter mb-8 text-balance">
                One Ecosystem<br />
                <span className="text-gradient-brand italic">Multiple Paths</span>
              </h2>
              <p className="text-xl text-primary-foreground/60 max-w-2xl mx-auto leading-relaxed">
                Whether you're entering the market or scaling your presence, we offer structured, high-value collaborations built on transparency.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                id: 'landowners',
                title: 'Landowners',
                tag: 'Development',
                desc: 'Transform land into high-value residential or commercial assets with our execution expertise.',
                icon: Building2,
                image: realtyBg
              },
              {
                id: 'investors',
                title: 'Investors',
                tag: 'Growth',
                desc: 'Access diversified investment opportunities across real estate, infrastructure, and enterprise verticals.',
                icon: LineChart,
                image: associatesBg
              },
              {
                id: 'partners',
                title: 'Strategic Partners',
                tag: 'Scale',
                desc: 'Collaborate on large-scale infrastructure and industrial projects with a proven execution partner.',
                icon: Handshake,
                image: geoAeroBg
              }
            ].map((path, idx) => (
              <Reveal3D key={path.id} delay={idx * 100}>
                <div className="group relative h-[500px] rounded-4xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-accent/30 transition-all duration-700">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={path.image}
                      alt=""
                      className="w-full h-full object-cover opacity-20 grayscale brightness-50 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
                  </div>

                  <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                    <div className="mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                        <path.icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 block">{path.tag}</span>
                      <h3 className="font-display text-3xl font-bold text-white mb-4">{path.title}</h3>
                      <p className="text-white/50 leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                        {path.desc}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <Link to="/contact" className="text-sm font-bold text-white hover:text-accent transition-colors flex items-center gap-2">
                        Get Started <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal3D>
            ))}
          </div>

          <div className="mt-32 text-center">
            <Reveal>
              <div className="inline-block px-10 py-6 border border-white/10 rounded-full backdrop-blur-sm text-lg text-primary-foreground/40 italic max-w-3xl">
                "Growth is better when it’s built together. Let’s create long-term value, not just transactions."
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-20">
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
