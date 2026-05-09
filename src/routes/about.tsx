import { createFileRoute } from '@tanstack/react-router'
import { useState } from "react";
import { Target, Compass, Heart, Shield, Sparkles, TrendingUp, Layers, Zap, Trophy, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { Reveal, Reveal3D } from "@/components/site/Reveal";
import { Floating3DBackground } from "@/components/site/Floating3DBackground";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — True Waves Group" },
      { name: "description", content: "Vision, mission, core values and leadership behind True Waves Group — a multi-vertical Indian business group." },
      { property: "og:title", content: "About True Waves Group" },
      { property: "og:description", content: "Our vision, mission, values and leadership." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: About,
});

const leaders = [
  {
    name: "S. Sanjay",
    role: "Managing Director | Founder",
    bio: "With over 18 years of experience, Mr. Sanjay is the driving force behind True Waves Group, having built the organization from its foundation into a diversified, multi-sector platform. Beginning his journey as an engineering professional, he combined technical expertise with strategic foresight to expand into real estate, valuation, infrastructure, and enterprise solutions—creating a cohesive ecosystem focused on long-term value creation. Known for his disciplined approach and deep industry insight, he leads with a clear philosophy: integrity as the foundation, performance as the outcome. His vision continues to shape the company’s growth, positioning it for sustained success across evolving markets.",
    initials: "SS"
  },
  {
    name: "Narasimhan",
    role: "Director – True Waves Realty",
    bio: "A seasoned civil engineer with over three decades of industry experience, Mr. Narasimhan has contributed to landmark projects across some of India’s most respected organizations, including TVS Group, DLF, RWD, and Chettinad Group. Known for his collaborative leadership style, he brings a balanced combination of technical expertise and strategic thinking. His ability to remain adaptable in evolving market conditions, while identifying high-potential opportunities, has been instrumental in driving expansion and strengthening the company’s real estate portfolio. With a mindset rooted in teamwork and a willingness to embrace new challenges, Mr. Narasimhan plays a key role in guiding the organization toward sustainable growth and long-term value creation.",
    initials: "N"
  },
  {
    name: "Chiranjeevi",
    role: "Director – True Valuators",
    bio: "With strong expertise in asset valuation, Mr. Chiranjeevi plays a pivotal role in delivering precise, compliant, and data-driven assessments across diverse asset classes. Backed by a foundation of professional standards and institutional affiliations, he ensures every valuation is conducted with accuracy, transparency, and rigorous document verification—aligning with globally recognized practices and regulatory frameworks. His approach integrates market intelligence, technical evaluation, and technology-enabled insights—enabling clients, financial institutions, and stakeholders to make informed decisions with confidence. Driven by a commitment to excellence and reliability, he contributes to building a valuation ecosystem where precision is not just expected, but consistently delivered.",
    initials: "C"
  },
  {
    name: "V. Santhanam",
    role: "Founder – True Waves Enterprise",
    bio: "A senior professional with a distinguished background in the Tamil Nadu Police Department, Mr. V. Santhanam brings extensive experience in security operations, investigation procedures, and administrative leadership. With a career rooted in discipline, vigilance, and structured execution, he plays a critical role in ensuring operational excellence across enterprise and security verticals. His expertise in handling complex environments, combined with a strong command over coordination and compliance, enables seamless execution of projects with precision and reliability. He is instrumental in upholding the company’s standards of professionalism, ensuring that every assignment is delivered with efficiency, accountability, and a commitment to client satisfaction.",
    initials: "VS"
  },
  {
    name: "J. Swarnalatha",
    role: "Director – True Waves Scaff",
    bio: "J. Swarnalatha is a dynamic professional leading True Waves Scaffolding with a strong commitment to safety, quality, and operational excellence. With hands-on expertise in scaffolding rental and material trading, she ensures every project is supported with reliable systems and timely execution. Her leadership is defined by structured planning, attention to detail, and a focus on delivering dependable solutions across residential, commercial, and industrial projects. With a vision rooted in growth and innovation, she plays a key role in building strong foundations while maintaining the highest standards of safety and trust.",
    initials: "JS"
  },
];

const values = [
  { icon: Shield, t: "Integrity", d: "Uncompromising in ethics. Absolute in accountability." },
  { icon: Sparkles, t: "Excellence", d: "Relentless in standards. Precise in delivery." },
  { icon: Compass, t: "Innovation", d: "Driven by insight. Enabled by technology." },
  { icon: Heart, t: "Trust", d: "Built over time. Strengthened through every outcome." },
  { icon: TrendingUp, t: "Growth", d: "Measured, scalable, and aligned with long-term value creation." },
  { icon: Target, t: "Collaboration", d: "Unified thinking. Collective success." },
];

function About() {
  const { scrollYProgress } = useScroll();

  const heroRotateX = useTransform(scrollYProgress, [0, 0.15], [0, 12]);
  const heroTranslateZ = useTransform(scrollYProgress, [0, 0.15], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothRotateX = useSpring(heroRotateX, springConfig);
  const smoothTranslateZ = useSpring(heroTranslateZ, springConfig);
  const smoothScale = useSpring(heroScale, springConfig);

  return (
    <div style={{ perspective: "1500px" }}>
      <Floating3DBackground />
      <section className="relative pt-40 pb-20 bg-gradient-hero text-white overflow-hidden grain">
        <div className="absolute inset-0 opacity-30">
          <img src={heroImg} alt="" className="w-full h-full object-cover" width={1920} height={1280} />
        </div>
        <motion.div
          style={{
            rotateX: smoothRotateX,
            translateZ: smoothTranslateZ,
            scale: smoothScale,
            transformStyle: "preserve-3d"
          }}
          className="mx-auto section-container relative"
        >
          <Reveal>
            <span className="eyebrow text-accent">Let's Tell You Who We Are</span>
            <h1 className="font-display text-4xl md:text-6xl mt-6 max-w-4xl leading-[1.1] text-balance font-semibold">
              If you’re here, you’re probably looking for the right place to <span className="text-gradient-brand">invest</span> <span className="text-gradient-brand">grow</span> or <span className="text-gradient-brand">partner</span>
            </h1>
          </Reveal>
        </motion.div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="mx-auto section-container grid md:grid-cols-3 gap-8 lg:gap-10">
          <Reveal3D className="h-full">
            <div className="h-full flex flex-col p-8 lg:p-10 border border-border/50 rounded-3xl bg-card shadow-sm hover:shadow-elegant transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Layers className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-6 font-bold">What do we actually do?</h3>
              <div className="text-muted-foreground leading-relaxed flex-grow">
                <p className="mb-6 font-medium text-foreground/80">Five powerful verticals working in synergy:</p>
                <ul className="space-y-4">
                  {[
                    "Real Estate Development",
                    "Engineering & Project Execution",
                    "Professional Valuation & Advisory",
                    "Skilled Manpower & Support",
                    "Scaffolding & Formwork"
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm lg:text-base">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="font-semibold text-accent leading-snug">
                  Because it means you don’t deal with multiple companies—we handle everything under one roof.
                </p>
              </div>
            </div>
          </Reveal3D>

          <Reveal3D delay={100} className="h-full">
            <div className="h-full flex flex-col p-8 lg:p-10 border border-border/50 rounded-3xl bg-card shadow-sm hover:shadow-elegant transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Zap className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-6 font-bold">What makes us different?</h3>
              <div className="text-muted-foreground leading-relaxed flex-grow">
                <p className="text-lg lg:text-xl font-medium text-foreground/80 mb-6 italic leading-relaxed">
                  "Real growth comes from trust, clarity, and smart decisions—not just promises."
                </p>
                <p className="leading-relaxed">
                  That’s why we focus on transparent communication, data-driven insights, long-term relationships, and real, measurable outcomes. We bridge the gap between abstract vision and tangible velocity.
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-accent font-bold tracking-widest uppercase text-xs">
                  The True Waves Edge
                </div>
              </div>
            </div>
          </Reveal3D>

          <Reveal3D delay={200} className="h-full">
            <div className="h-full flex flex-col p-8 lg:p-10 border border-border/50 rounded-3xl bg-card shadow-sm hover:shadow-elegant transition-all duration-500">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-8">
                <Trophy className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl lg:text-3xl mb-6 font-bold">What have we achieved?</h3>
              <div className="text-muted-foreground leading-relaxed flex-grow">
                <p className="mb-6 font-medium text-foreground/80">A track record built on consistency and professional recognition:</p>
                <ul className="space-y-5">
                  {[
                    { t: "ISO 9001:2015 Certified", s: "Operational excellence" },
                    { t: "TOI Trendsetter 2024", s: "Award-winning leadership" },
                    { t: "Grade-1 Contractor", s: "Government registered" },
                    { t: "Approved IBBI Valuer", s: "Professional standards" },
                    { t: "Trusted by 50+ Partners", s: "Proven network" }
                  ].map((item) => (
                    <li key={item.t} className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                      <div>
                        <div className="text-foreground font-semibold leading-none mb-1">{item.t}</div>
                        <div className="text-xs uppercase tracking-widest opacity-60 font-bold">{item.s}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 pt-8 border-t border-border/50">
                <div className="font-display text-3xl font-black text-accent/20">18+ YEARS</div>
              </div>
            </div>
          </Reveal3D>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto section-container grid md:grid-cols-2 gap-12">
          <Reveal3D className="p-10 border border-border rounded-3xl bg-card h-full">
            <Target className="w-8 h-8 text-accent mb-6" />
            <span className="eyebrow text-accent">Our Vision</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 mb-5 font-semibold leading-[1.15]">
              To shape the future of capital deployment
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Building a platform where every decision compounds into enduring value and long-horizon growth through clarity and discipline.
            </p>
          </Reveal3D>
          <Reveal3D delay={120} className="p-10 border border-border rounded-3xl bg-card h-full">
            <Compass className="w-8 h-8 text-accent mb-6" />
            <span className="eyebrow text-accent">Our Mission</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 mb-5 font-semibold leading-[1.15]">
              To convert vision into velocity
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Orchestrating intelligence, technology, and execution with precision to deliver measurable, scalable performance consistently ahead of the curve.
            </p>
          </Reveal3D>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="mx-auto section-container">
          <Reveal>
            <span className="eyebrow text-accent">Our Core Values</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-16 max-w-2xl leading-[1.15]">The principles that guide every decision</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {values.map((v, i) => (
              <Reveal3D key={i} delay={i * 70} className="bg-background p-8 group h-full">
                <v.icon className="w-7 h-7 text-accent mb-5 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="font-display text-2xl mb-2">{v.t}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{v.d}</p>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-40 bg-muted/10">
        <div className="mx-auto section-container">
          <Reveal>
            <span className="eyebrow text-accent">Leadership</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-20 max-w-2xl leading-[1.15]">
              Seasoned leaders, one shared conviction
            </h2>
          </Reveal>

          <LeadershipGrid />
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="mx-auto max-w-4xl section-container text-center">
          <Reveal3D>
            <span className="eyebrow text-accent">Before you move forward</span>
            <h2 className="font-display text-4xl md:text-5xl mt-6 mb-8 font-semibold leading-[1.15]">
              We don’t believe in empty promises or aggressive sales pitches
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              Clear data, Straightforward conversations, Real results — Let’s talk.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a href="/contact" className="btn-primary">
                Contact Us
              </a>
              <a href="/pillars" className="inline-flex items-center gap-3 bg-card border border-border text-foreground px-8 py-3.5 rounded-full text-base font-medium hover:border-primary/50 transition-all duration-500">
                Explore Our Pillars
              </a>
            </div>
          </Reveal3D>
        </div>
      </section>
    </div>
  );
}

function LeadershipGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {leaders.map((l, i) => (
        <motion.div
          key={l.name}
          layout
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`group flex flex-col p-8 lg:p-10 border border-border/50 rounded-3xl bg-card shadow-sm hover:shadow-elegant transition-all duration-500 overflow-hidden relative ${expandedIndex === i ? 'md:col-span-2' : ''
            }`}
        >
          {/* Subtle background ID */}
          <div className="absolute top-0 right-0 p-8 font-display text-6xl font-black text-accent/[0.03] select-none pointer-events-none">
            0{i + 1}
          </div>

          <motion.div layout="position" className="flex items-center gap-6 mb-8">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-hero flex items-center justify-center font-display text-3xl text-white font-bold shadow-brand">
              {l.initials}
            </div>
            <div>
              <div className="eyebrow text-accent mb-1 text-xs">{l.role}</div>
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight">{l.name}</h3>
            </div>
          </motion.div>

          <div className="relative">
            <motion.p
              layout
              className={`text-muted-foreground leading-relaxed transition-all duration-500 ${expandedIndex === i ? 'text-lg lg:text-xl' : 'line-clamp-3 lg:line-clamp-4'
                }`}
            >
              {l.bio}
            </motion.p>

            <motion.button
              layout
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="mt-6 flex items-center gap-2 text-accent font-bold text-sm tracking-widest uppercase hover:text-ink transition-colors group/btn"
            >
              {expandedIndex === i ? (
                <>Collapse Bio <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-1 transition-transform" /></>
              ) : (
                <>Read Full Bio <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" /></>
              )}
            </motion.button>
          </div>

          {expandedIndex === i && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-12 pt-8 border-t border-border/40 flex items-center justify-between"
            >
              <div className="text-xs font-bold tracking-[0.2em] text-accent/40 uppercase">Senior Management</div>
              <div className="text-xs font-medium text-muted-foreground italic">Compounding trust since 2008</div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}


