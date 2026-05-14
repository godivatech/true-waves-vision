import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, Heart, TrendingUp, Users, MapPin, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal, Reveal3D } from "@/components/site/Reveal";
import { Floating3DBackground } from "@/components/site/Floating3DBackground";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — True Waves Group" },
      { name: "description", content: "Join True Waves Group. Explore current openings and build your career with a disciplined multi-vertical Indian group." },
      { property: "og:title", content: "Careers — True Waves Group" },
      { property: "og:description", content: "Build your career at India's most trusted multi-vertical group." },
    ],
  }),
  component: Careers,
});

const openings = [
  { title: "Real Estate Sales Manager", dept: "True Waves Realty", loc: "Chennai", type: "Full-time" },
  { title: "Property Valuation Analyst", dept: "True Valuators", loc: "Madurai", type: "Full-time" },
  { title: "Business Development Executive", dept: "True Wave Enterprise", loc: "Chennai", type: "Full-time" },
  { title: "Scaffolding Site Supervisor", dept: "True Wave Scaff", loc: "Pan-India", type: "Full-time" },
  { title: "Partner Relationship Manager", dept: "True Waves Associate", loc: "Chennai", type: "Full-time" },
  { title: "Marketing & Content Strategist", dept: "Group HQ", loc: "Chennai", type: "Full-time" },
];

const benefits = [
  { icon: TrendingUp, t: "Multi-Sector Exposure", d: "Work across real estate, valuation, technology, enterprise, and infrastructure." },
  { icon: Briefcase, t: "Direct Learning", d: "Work closely with experienced leaders and decision-makers." },
  { icon: Users, t: "Ownership Culture", d: "You get responsibility early—and the freedom to execute." },
  { icon: Heart, t: "Real Impact", d: "Your work directly contributes to large-scale projects and business outcomes." },
];

function Careers() {
  const [sent, setSent] = useState(false);
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
      <section className="relative pt-40 pb-16 bg-gradient-hero text-primary-foreground overflow-hidden grain">
        <motion.div 
          style={{ 
            rotateX: smoothRotateX,
            translateZ: smoothTranslateZ,
            scale: smoothScale,
            transformStyle: "preserve-3d"
          }}
          className="mx-auto max-w-7xl px-6 lg:px-10 relative"
        >
          <Reveal>
            <span className="eyebrow text-accent">Careers at True Waves Group</span>
            <h1 className="font-display text-4xl md:text-6xl mt-6 max-w-4xl leading-[1.1] text-balance font-semibold">
              Don’t Just Look for a Job<br /> <span className="text-gradient-brand">Build Something That Matters</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl opacity-80 leading-relaxed">
              If you're someone who wants more than a routine job—you're in the right place.
              At True Waves Group, we work on real projects, real challenges, and real growth.
            </p>
          </Reveal>
        </motion.div>
      </section>

      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="eyebrow text-accent">What It's Like To Work Here</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12 max-w-2xl leading-[1.15]">Not a corporate box<br />A place to grow</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {benefits.map((b, i) => (
              <Reveal3D key={i} delay={i * 80} className="bg-background p-8 h-full">
                <b.icon className="w-7 h-7 text-accent mb-5" />
                <h3 className="font-display text-xl mb-2">{b.t}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{b.d}</p>
              </Reveal3D>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="eyebrow text-accent">Is This You?</span>
              <h2 className="font-display text-3xl md:text-4xl mt-4 mb-6 leading-[1.15]">Who we are looking for</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We don't just hire for skills; we hire for mindset. If the following sounds like you, you'll fit right in.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="space-y-6">
                {[
                  "You like taking ownership, not just following instructions",
                  "You want to learn across industries, not stay limited to one role",
                  "You’re looking for growth—not just a salary",
                  "You want your work to actually make an impact"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 p-6 border border-border rounded-sm bg-card hover-lift">
                    <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="eyebrow text-accent">Current Openings</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12 leading-[1.15]">Roles we're hiring for</h2>
          </Reveal>
          <div className="border-t border-border">
            {openings.map((o, i) => (
              <Reveal key={i} delay={i * 50}>
                <a href="#apply" className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-border hover:bg-background/50 transition-colors px-4 -mx-4">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl group-hover:text-accent transition-colors">{o.title}</h3>
                    <div className="eyebrow text-muted-foreground mt-2">{o.dept}</div>
                  </div>
                  <div className="flex items-center gap-6 text-base text-muted-foreground">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {o.loc}</span>
                    <span>{o.type}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="pt-12 lg:pt-16 pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <span className="eyebrow text-accent">Apply Now</span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-10 leading-[1.15]">Tell us about yourself</h2>
          </Reveal>
          {sent ? (
            <div className="p-10 border border-accent rounded-sm bg-card text-center">
              <h3 className="font-display text-2xl mb-2">Application received</h3>
              <p className="text-muted-foreground">Our team will review your profile and be in touch shortly.</p>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground mb-8">
                Simple. Direct. No unnecessary steps. Just send us your updated CV, a short note about yourself, and the role/division you're applying for.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                className="grid gap-5"
              >
                <Field label="Full Name" name="name" required />
              <div className="grid md:grid-cols-2 gap-5">
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Position Applying For" name="position" required />
              {/* Temporarily commented outed */}
              {/* <div>
                <label className="eyebrow block mb-2">Resume</label>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" className="block w-full text-base file:mr-4 file:py-3 file:px-5 file:rounded-sm file:border-0 file:bg-accent file:text-accent-foreground file:cursor-pointer hover:file:bg-ink hover:file:text-white transition" required />
              </div> */}
                <button type="submit" className="mt-4 inline-flex items-center justify-center gap-3 bg-gradient-brand text-ink px-8 py-4 rounded-sm text-base font-medium shadow-brand hover:shadow-elegant transition-all duration-500">
                  Submit Application <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <div className="mt-12 p-8 border border-border rounded-sm bg-muted/30 text-center">
                <h3 className="font-display text-xl mb-4">How to Apply via Email</h3>
                <p className="text-base text-muted-foreground mb-4">
                  Send your CV and a short note to: <a href="mailto:careers@truewavesgroup.com" className="text-accent hover:underline font-semibold">careers@truewavesgroup.com</a>
                </p>
                <div className="text-sm font-mono bg-background p-3 rounded border border-border inline-block">
                  Subject: [Your Name] — [Role] — [Division]
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        maxLength={200}
        className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
      />
    </div>
  );
}
