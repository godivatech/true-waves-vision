import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Building2, Shield, TrendingUp, Users, Sparkles, Globe2, Award, Compass, Mountain, HardHat, LineChart, Handshake, ShieldCheck, Landmark } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import heroImg from "@/assets/hero_premium.png";
import heroSlide1 from "@/assets/hero section/1.png";
import heroSlide2 from "@/assets/hero section/2.png";
import residentialImg from "@/assets/project section images/resedential.png";
import commercialImg from "@/assets/project section images/commercial.png";
import infrastructureImg from "@/assets/project section images/infrastrucutre.png";
import institutionalImg from "@/assets/project section images/Institutional.png";
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
  const navigate = useNavigate();

  return (
    <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-muted/40 text-foreground relative overflow-hidden border-y border-border">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-accent/5 blur-[120px] rounded-full opacity-40 pointer-events-none" />

      <div className="mx-auto section-container relative z-10">
        <GSAPReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
                Our Five Pillars
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 leading-tight font-semibold text-foreground">
                One Group - Five Enterprises
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
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
                onClick={() => {
                  if (isActive) {
                    if (p.externalLink) {
                      window.open(p.externalLink, "_blank", "noopener,noreferrer");
                    } else {
                      navigate({ to: "/pillars", hash: p.id });
                    }
                  } else {
                    setActiveIndex(index);
                  }
                }}
                initial={false}
                animate={{
                  flex: isActive ? '8 1 0%' : '1 1 0%'
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col justify-end overflow-hidden cursor-pointer rounded-3xl bg-[#0A1128] border border-white/5 hover:border-white/10"
                style={{ willChange: "flex" }}
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
                  className={`absolute inset-0 bg-gradient-to-t from-[#0A1128] via-[#0A1128]/20 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
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
                      ${isActive ? 'w-14 h-14 bg-accent text-accent-foreground shadow-lg shadow-accent/20' : 'w-12 h-12 bg-white/5 text-white/40'}
                    `}>
                      <Icon className={isActive ? "w-7 h-7" : "w-6 h-6"} />
                    </div>

                    {/* Title Text wrapper */}
                    <div className="relative flex-grow min-h-[4.5rem] flex flex-col justify-center">
                      <div
                        className="absolute left-0 w-[500px] transition-all duration-700 ease-in-out text-white"
                        style={{
                          opacity: isActive ? 1 : 0,
                          transform: isActive ? 'translateX(0)' : 'translateX(20px)'
                        }}
                      >
                        <span className="eyebrow text-white/80 block mb-1 drop-shadow-sm">{p.tagline}</span>
                        <h3 className="font-display text-2xl font-bold whitespace-nowrap">{p.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Expanded description */}
                  <div
                    className="transition-all duration-700 ease-in-out overflow-hidden text-white"
                    style={{
                      maxHeight: isActive ? '200px' : '0px',
                      opacity: isActive ? 1 : 0,
                      marginTop: isActive ? '1rem' : '0'
                    }}
                  >
                    <p className="text-white/70 mb-6 leading-relaxed max-w-2xl line-clamp-3">
                      {p.description}
                    </p>
                    {p.externalLink ? (
                      <a
                        href={p.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
                      >
                        Visit Website <ArrowRight className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        to="/pillars"
                        hash={p.id}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 text-accent font-medium hover:text-white transition-colors"
                      >
                        Explore Details <ArrowRight className="w-4 h-4" />
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [heroSlide1, heroSlide2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 second crossfade timer
    return () => clearInterval(timer);
  }, [slides.length]);

  // Hero Parallax & Scroll Effects
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.8]);

  return (
    <>
      <Floating3DBackground />
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#040813] text-white grain">
        {/* Right Half: Full Brightness Parallax Image Slider */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute right-0 top-0 bottom-0 w-full h-full z-0 pointer-events-none"
        >
          <AnimatePresence>
            <motion.img
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              src={slides[currentSlide]}
              alt="Premium architectural presentation"
              className="absolute inset-0 w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          </AnimatePresence>
          {/* Mobile-only overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#040813] via-[#040813]/70 to-[#040813]/20 lg:hidden" />
        </motion.div>

        {/* Diagonal Sharp Rounded '<' SVG Mask */}
        <svg
          className="absolute inset-0 h-full w-full text-[#040813] fill-current pointer-events-none z-10 hidden lg:block"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          {/* Mathematically precise rounded inner corner mimicking the user's reference exactly */}
          <path d="M 0 0 L 670 0 L 470 400 Q 420 500, 470 600 L 670 1000 L 0 1000 Z" />
        </svg>

        {/* Faint Outlined Dot Grid Pattern (Isolated tightly to Bottom Left) */}
        <div
          className="absolute left-0 bottom-0 w-full lg:w-[40%] h-[45%] pointer-events-none z-10 hidden lg:block opacity-70"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='1.5' stroke='rgba(58,190,249,0.35)' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "48px 48px",
            backgroundPosition: "bottom left",
            WebkitMaskImage: "radial-gradient(circle at bottom left, rgba(0,0,0,1) 0%, transparent 60%)",
            maskImage: "radial-gradient(circle at bottom left, rgba(0,0,0,1) 0%, transparent 60%)"
          }}
        ></div>

        {/* Content Container */}
        <div className="relative mx-auto section-container w-full z-20 pt-36 pb-20 lg:py-0">
          <div className="grid grid-cols-12 items-center min-h-[calc(100vh-140px)]">
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-center max-w-[40rem]">
              {/* Eyebrow Label */}
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-[2px] w-6 bg-accent" />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent">
                    Where Vision Becomes Velocity
                  </span>
                </div>
              </Reveal>

              {/* Title */}
              <Reveal delay={150}>
                <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.08] font-bold tracking-tight text-white mb-6">
                  We Help You <br className="hidden md:inline" />
                  Invest <span className="text-accent">Smarter</span>,<br />
                  Build Better and <br />
                  Grow Faster
                </h1>
              </Reveal>

              {/* Description */}
              <Reveal delay={300}>
                <p className="max-w-[24rem] text-sm md:text-base text-slate-300 leading-relaxed mb-10">
                  South India's premier multi-sector group delivering excellence across real estate, valuation, and enterprise.
                </p>
              </Reveal>

              {/* CTAs */}
              <GSAPReveal delay={450}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/pillars"
                    className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-accent text-[#040813] font-bold rounded-lg shadow-[0_0_20px_rgba(58,190,249,0.25)] hover:opacity-95 transition-all duration-300 text-[13px] tracking-wide"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform duration-300" />
                    <span>Explore Our Group</span>
                  </Link>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-consultation-modal"))}
                    className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 px-7 py-3.5 rounded-lg text-white font-bold transition-all duration-300 cursor-pointer text-[13px] tracking-wide bg-transparent"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </GSAPReveal>

              {/* Stats Panel */}
              <GSAPReveal delay={600}>
                <div className="mt-14 p-5 md:px-8 md:py-6 relative rounded-[1.5rem] max-w-[46rem] flex flex-wrap md:flex-nowrap items-center justify-between gap-4 md:gap-8 overflow-hidden backdrop-blur-sm">
                  {/* Subtle Border and Gradient matching target precisely */}
                  <div className="absolute inset-0 rounded-[1.5rem] border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent pointer-events-none" />
                  <div className="absolute left-0 top-0 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#3ABEF9]/40 to-transparent pointer-events-none" />
                  
                  {/* Pillar Stat */}
                  <div className="relative flex items-center gap-4">
                    <div className="text-accent">
                      <Landmark className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-[24px] md:text-[28px] font-bold text-white leading-none mb-1">05</span>
                      <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold">Pillars</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="relative hidden md:block h-10 w-[1px] bg-slate-700/60" />

                  {/* Expertise Stat */}
                  <div className="flex items-center gap-4">
                    <div className="text-accent">
                      <Users className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-[24px] md:text-[28px] font-bold text-white leading-none mb-1">18+</span>
                      <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold whitespace-nowrap">Years of Expertise</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="hidden md:block h-10 w-[1px] bg-slate-700/60" />

                  {/* ISO Certification Stat */}
                  <div className="flex items-center gap-4">
                    <div className="text-accent">
                      <ShieldCheck className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display text-sm md:text-base font-bold text-white leading-none mb-1">ISO 9001:2015</span>
                      <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase font-bold whitespace-nowrap">Certified</span>
                    </div>
                  </div>
                </div>
              </GSAPReveal>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTH IN NUMBERS */}
      <Section eyebrow="Our Strength in Numbers" title="18+ Years of Proven Excellence Across South India" className="bg-background">
        <p className="-mt-8 mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          Delivering reliable solutions since 2008 — built on trust, performance, and long-term relationships.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { n: 18, s: "+", l: "Years of Proven Expertise" },
            { n: 20, s: "+", l: "Projects Delivered" },
            { n: 50, s: "+", l: "Strategic Partners" },
            { n: 5, s: "", l: "Business Pillars" },
          ].map((m, i) => (
            <GSAPReveal key={i} delay={i * 100} className="bg-background border border-border rounded-3xl p-8 hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1">
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
        className="bg-muted/30 border-y border-border"
        title={
          <>
            <span className="opacity-40">Built for Trust</span>
            <span className="opacity-30 mx-4">•</span>
            <span className="opacity-70">Driven by Data</span>
            <span className="opacity-30 mx-4">•</span>
            <span>Designed for Growth</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {[
            { icon: Sparkles, t: "Unified Ecosystem", d: "Five specialized verticals working together to maximize your business outcomes." },
            { icon: Award, t: "Certified Quality", d: "ISO 9001:2015 certified processes ensuring consistent, international standards." },
            { icon: Shield, t: "100% Transparency", d: "Clear communication and zero hidden costs at every stage of your journey." },
            { icon: Mountain, t: "15+ Years Expertise", d: "Deep understanding of South India's real estate trends and growth corridors." },
            { icon: Users, t: "Proven Leadership", d: "A highly experienced leadership team with cross-industry execution expertise." },
            { icon: Handshake, t: "50+ Trusted Partners", d: "A growing network of investors and developers who consistently choose us." },
            { icon: TrendingUp, t: "Measurable Outcomes", d: "No empty promises—we deliver clear, trackable, and reliable results." },
            { icon: Compass, t: "Tailored Strategies", d: "Customized approaches to align with your unique financial goals and risk profile." },
          ].map((f, i) => (
            <Reveal3D key={i} delay={i * 80} className="bg-background border border-border rounded-3xl p-8 group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
              <f.icon className="w-8 h-8 text-accent mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-display text-xl mb-3 font-semibold">{f.t}</h3>
              <p className="text-muted-foreground text-base leading-relaxed">{f.d}</p>
            </Reveal3D>
          ))}
        </div>
      </Section>

      <section className="relative pt-16 lg:pt-20 pb-16 lg:pb-20 bg-background text-foreground overflow-hidden border-t border-border">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

        <div className="mx-auto section-container relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <Reveal>
              <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-6">
                Investment Intelligence
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-10 text-foreground">
                Smart Investments - <span className="text-gradient-brand italic">Secure Growth</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* The Visual Piece */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal delay={200}>
                <div className="relative aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-full blur-[100px] animate-pulse" />
                  <div className="absolute inset-4 border border-black/5 rounded-full" />
                  <div className="absolute inset-12 border border-black/10 rounded-full" />
                  <motion.img
                    src={investImg}
                    alt="Investment Growth"
                    className="relative w-4/5 h-4/5 object-contain z-10 drop-shadow-[0_0_50px_rgba(3,169,244,0.15)]"
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
                    <div className="h-full p-8 rounded-3xl bg-card border border-border hover:bg-background hover:shadow-2xl hover:shadow-accent/10 hover:border-accent/40 hover:-translate-y-1 transition-all duration-500 group shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                        <span className="text-xs font-bold">0{i+1}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-foreground mb-3">{item.t}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
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
                    className="px-10 py-5 bg-accent text-white font-bold text-lg hover:bg-accent/90 hover:scale-105 transition-all duration-500 rounded-full shadow-lg shadow-accent/15"
                  >
                    Talk to an Expert
                  </button>
                  <Link to="/pillars" className="group flex items-center gap-2 text-muted-foreground font-semibold hover:text-accent transition-all">
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
              img: residentialImg
            },
            {
              t: "Commercial",
              d: "Strategically located developments offering high visibility, strong footfall, and sustainable rental yield potential. Designed to power businesses and maximize investment returns.",
              p: ["RSM Tower (Trichy)", "Lotus Shopping Centre (Madurai)", "Velraj Commercial Complex (Madurai)"],
              img: commercialImg
            },
            {
              t: "Infrastructure",
              d: "Execution of large-scale infrastructure projects that contribute to industrial growth and national development. Driven by engineering excellence, compliance, and timely delivery.",
              p: ["Chennai Metro Rail (Teynampet)", "L&T Kudankulam", "Kellogg’s Sri City"],
              img: infrastructureImg
            },
            {
              t: "Institutional / Hospital / Industrial",
              d: "Reliable execution of projects across education and healthcare sectors, ensuring quality, durability, and scalability. Building spaces that serve communities and future generations.",
              p: ["MGR University", "Thiagarajar College", "Govt. Hospital, Melur"],
              img: institutionalImg
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

      {/* PARTNER CTA */}
      <section className="pt-16 lg:pt-20 pb-16 lg:pb-20 bg-ink text-primary-foreground relative overflow-hidden grain">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-accent/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="mx-auto section-container relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <Reveal>
              <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 mb-6">
                Strategic Collaboration
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-8">
                One Ecosystem, <span className="text-gradient-brand italic">Multiple Paths</span>
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
                <div className="group relative h-[380px] rounded-4xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-accent/30 transition-all duration-700">
                  <div className="absolute inset-0 z-0">
                    <img
                      src={path.image}
                      alt=""
                      className="w-full h-full object-cover opacity-20 grayscale brightness-50 group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
                  </div>

                  <div className="relative z-10 h-full p-8 flex flex-col justify-end">
                    <div className="mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-500">
                        <path.icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-accent mb-2 block">{path.tag}</span>
                      <h3 className="font-display text-2xl font-bold text-white mb-3">{path.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                        {path.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <Link to="/contact" className="text-sm font-bold text-white hover:text-accent transition-colors flex items-center gap-2">
                        Get Started <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal3D>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Reveal>
              <div className="inline-block px-10 py-6 border border-white/10 rounded-full backdrop-blur-sm text-lg text-primary-foreground/40 italic max-w-3xl">
                "Growth is better when it’s built together. Let’s create long-term value, not just transactions."
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="pt-12 lg:pt-16 pb-8 lg:pb-12 bg-muted/30 border-t border-border">
        <div className="mx-auto section-container grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <Reveal>
            <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
              Our Presence & Visibility
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mt-4 font-semibold">Positioned Where Growth Happens</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              True Waves Group operates at the intersection of opportunity and expansion—across South India’s most promising real estate and investment markets.
            </p>
            <div className="mt-10 space-y-6">
              {[
                { t: "Strategic Locations", d: "Active across Tier 1 and high-growth Tier 2 cities in Tamil Nadu (Chennai, Coimbatore, Madurai, Trichy)." },
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
            <div className="relative flex items-center justify-center lg:translate-y-24">
              <img src={mapImg} alt="India presence map" className="w-full h-auto max-w-2xl" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Section({ eyebrow, title, children, className }: { eyebrow: string; title: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <section className={`pt-24 lg:pt-32 pb-16 lg:pb-20 ${className || ''}`}>
      <div className="mx-auto section-container">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
                {eyebrow}
              </span>
              <h2 className="font-display text-3xl md:text-4xl xl:text-5xl mt-4 max-w-none leading-tight">{title}</h2>
            </div>
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
