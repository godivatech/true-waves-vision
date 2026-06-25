import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, Heart, TrendingUp, Users, MapPin, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal, Reveal3D } from "@/components/site/Reveal";
import { Floating3DBackground } from "@/components/site/Floating3DBackground";
import { useLenis } from "lenis/react";
import cultureImg from "@/assets/section images/2.png";
import hiringImg from "@/assets/section images/3.png";

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
  const [selectedPosition, setSelectedPosition] = useState("");
  const lenis = useLenis();

  return (
    <>
      <Floating3DBackground />
      <section className="relative pt-40 pb-16 bg-gradient-hero text-primary-foreground overflow-hidden grain">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 relative">
          <Reveal>
            <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
              Careers at True Waves Group
            </span>
            <h1 className="font-display text-4xl md:text-6xl mt-6 max-w-4xl leading-[1.1] font-semibold">
              Build a Career <span className="text-gradient-brand">That Matters</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl opacity-85 leading-relaxed">
              We work on real projects, solve real challenges, and drive real growth. Discover your next opportunity here.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left side: Premium Image Container */}
            <div className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[580px] relative rounded-3xl overflow-hidden border border-border shadow-elegant group">
              <img 
                src={cultureImg} 
                alt="Working at True Waves" 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent pointer-events-none" />
            </div>

            {/* Right side: Culture benefits grid */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-6">
                  What It's Like To Work Here
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12 max-w-2xl leading-[1.15]">
                  Not a corporate box<br />A place to grow
                </h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((b, i) => (
                  <Reveal3D key={i} delay={i * 80} className="bg-background border border-border rounded-3xl p-8 h-full hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40">
                    <b.icon className="w-7 h-7 text-accent mb-5" />
                    <h3 className="font-display text-xl mb-2">{b.t}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">{b.d}</p>
                  </Reveal3D>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-16 lg:pt-20 pb-16 lg:pb-20 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
              Current Openings
            </span>
            <h2 className="font-display text-3xl md:text-4xl mt-4 mb-12 leading-[1.15]">Roles we're hiring for</h2>
          </Reveal>
          <div className="border-t border-border">
            {openings.map((o, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  onClick={() => {
                    setSelectedPosition(o.title);
                    setTimeout(() => {
                      if (lenis) {
                        lenis.scrollTo("#apply");
                      } else {
                        document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 50);
                  }}
                  className="cursor-pointer group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8 border-b border-border hover:bg-muted/30 hover:border-accent/40 rounded-2xl px-6 my-2 transition-all duration-300 hover:translate-x-1"
                >
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl group-hover:text-accent transition-colors">{o.title}</h3>
                    <div className="text-xs uppercase tracking-wider font-bold text-muted-foreground mt-2">{o.dept}</div>
                  </div>
                  <div className="flex items-center gap-6 text-base text-muted-foreground">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-accent" /> {o.loc}</span>
                    <span>{o.type}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:text-accent transition-all" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
                Is This You?
              </span>
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
                  <li key={idx} className="flex gap-4 p-6 border border-border rounded-2xl bg-card hover-lift">
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

      <section id="apply" className="pt-16 lg:pt-24 pb-24 lg:pb-32 bg-muted/40 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left side: The application form (7 Columns) */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="inline-flex items-center px-4 py-1.5 border border-accent/20 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-4">
                  Apply Now
                </span>
                <h2 className="font-display text-3xl md:text-4xl mt-4 mb-10 leading-[1.15]">Tell us about yourself</h2>
              </Reveal>
              {sent ? (
                <div className="p-10 border border-accent rounded-2xl bg-card text-center">
                  <h3 className="font-display text-2xl mb-2">Application received</h3>
                  <p className="text-muted-foreground">Our team will review your profile and be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <p className="text-muted-foreground mb-8 text-base">
                    Simple. Direct. No unnecessary steps. Just send us your details, and the role/division you're applying for.
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
                    <Field
                      label="Position Applying For"
                      name="position"
                      required
                      value={selectedPosition}
                      onChange={(e) => setSelectedPosition(e.target.value)}
                    />
                    <button type="submit" className="mt-4 inline-flex items-center justify-center gap-3 bg-gradient-brand text-ink px-8 py-4 rounded-full text-base font-medium shadow-brand hover:shadow-elegant transition-all duration-500 cursor-pointer">
                      Submit Application <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                  <div className="mt-12 p-8 border border-border rounded-xl bg-card text-center">
                    <h3 className="font-display text-xl mb-4">How to Apply via Email</h3>
                    <p className="text-base text-muted-foreground mb-4">
                      Send your CV and a short note to: <a href="mailto:careers@truewavesgroup.com" className="text-accent hover:underline font-semibold">careers@truewavesgroup.com</a>
                    </p>
                    <div className="text-sm font-mono bg-muted p-3 rounded border border-border inline-block">
                      Subject: [Your Name] — [Role] — [Division]
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Right side: We're Hiring Graphic (5 Columns) */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal delay={100}>
                <div className="relative rounded-3xl overflow-hidden border border-border bg-card p-6 md:p-8 shadow-elegant flex flex-col justify-center items-center">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-tr from-accent/5 to-muted/30 flex items-center justify-center border border-border/50">
                    <img
                      src={hiringImg}
                      alt="We're Hiring illustration"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                      Join Our Team
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      We are always looking for passionate builders, thinkers, and innovators. Submit your details today to get started.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="inline-flex items-center px-2 py-0.5 border border-accent/20 rounded-full text-[10px] font-semibold tracking-wider text-accent uppercase bg-accent/5 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        maxLength={200}
        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
      />
    </div>
  );
}
