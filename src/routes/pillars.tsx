import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { Building2, Handshake, LineChart, Sparkles, Compass, HardHat, ArrowRight, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import { Floating3DBackground } from "@/components/site/Floating3DBackground";
import { pillars } from "@/data/pillars";

import realtyBg from "@/assets/realty_bg.png";
import associatesBg from "@/assets/associates_bg.png";
import valuatorsBg from "@/assets/valuators_bg.png";
import enterpriseBg from "@/assets/enterprise_bg.png";
import scaffoldingBg from "@/assets/scaffolding_bg.png";
import geoAeroBg from "@/assets/geo_aero_bg.png";

export const Route = createFileRoute("/pillars")({
  head: () => ({
    meta: [
      { title: "Our Five Pillars — True Waves Group" },
      { name: "description", content: "Five specialised enterprises: True Waves Realty, Associate, Valuators, Enterprise, and Scaff." },
      { property: "og:title", content: "Our Five Pillars — True Waves Group" },
      { property: "og:description", content: "Five specialised enterprises. One disciplined group." },
    ],
  }),
  component: Pillars,
});

const icons = [Building2, Handshake, LineChart, Sparkles, Compass, HardHat];
const images = [realtyBg, associatesBg, valuatorsBg, enterpriseBg, scaffoldingBg, geoAeroBg];

function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track vertical scroll progress for the horizontal translation
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Map vertical scroll (0 to 1) to horizontal movement
  // We have 6 pillars, so we want to scroll through them.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  const smoothX = useSpring(x, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="bg-ink selection:bg-accent selection:text-white">
      <Floating3DBackground />

      {/* Cinematic Hero: Sets the stage */}
      <section className="relative h-[90vh] flex flex-col justify-center bg-gradient-hero text-primary-foreground px-6 lg:px-10 overflow-hidden">
        <div className="mx-auto section-container w-full relative z-10">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-accent/60" />
              <span className="eyebrow text-accent tracking-[0.3em]">The Ecosystem</span>
            </div>
            <h1 className="font-display text-[8vw] lg:text-[5.5rem] leading-[1] font-bold tracking-tighter mb-10">
              FIVE <br />
              <span className="text-gradient-brand">PILLARS</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="max-w-xl text-base md:text-lg opacity-60 leading-relaxed font-light">
                Expertise, focus, and synergy — a world-class integrated platform designed to handle every dimension of high-value development and investment.
              </p>
              <div className="flex items-center gap-4 text-accent/80 animate-pulse">
                <MousePointer2 className="w-5 h-5 rotate-180" />
                <span className="text-sm font-bold tracking-widest uppercase">Scroll to explore</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Abstract background numbers */}
        <div className="absolute -bottom-20 -right-20 font-display text-[30vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
          05
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      {/* Tall container provides the "scroll length" */}
      <div ref={containerRef} className="relative h-[600vh] bg-ink">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x: smoothX }} className="flex h-full">
            {pillars.map((p, i) => {
              const Icon = icons[i];
              return (
                <section
                  key={p.id}
                  className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center p-6 lg:p-20 overflow-hidden"
                >
                  {/* Background Image with Parallax */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={images[i]}
                      alt=""
                      className="w-full h-full object-cover opacity-30 grayscale brightness-75 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/40 to-ink" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink" />
                  </div>

                  {/* Background Index Number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[40vw] font-black text-white/[0.03] select-none leading-none z-0">
                    0{i + 1}
                  </div>

                  <div className="mx-auto section-container w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
                    {/* Content Left */}
                    <div className="flex flex-col items-start">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        <span className="eyebrow text-accent mb-6 block tracking-[0.2em]">{p.tagline}</span>
                        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-bold text-white mb-8">
                          {p.name.split(' ').map((word, idx, arr) => (
                            <span key={idx} className={idx > 1 ? "text-accent" : ""}>
                              {word}
                              {idx === 1 && arr.length > 2 ? <br className="hidden lg:block" /> : idx < arr.length - 1 ? " " : ""}
                            </span>
                          ))}
                        </h2>
                        <p className="text-xl text-white/60 leading-relaxed mb-12 max-w-lg">
                          {p.description}
                        </p>

                        <div className="flex flex-wrap gap-6">
                          <Link
                            to="/contact"
                            className="btn-primary text-lg shadow-xl"
                          >
                            Enquire Now
                          </Link>
                          {p.externalLink && (
                            <a
                              href={p.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center gap-3 text-white font-semibold hover:text-accent transition-all"
                            >
                              Visit Website <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Right: Grids */}
                    <div className="hidden lg:grid gap-12">
                      {Object.entries(p).map(([key, value]) => {
                        if (Array.isArray(value)) {
                          const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                          return (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.8, delay: 0.4 }}
                            >
                              <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                  <Icon className="w-5 h-5 text-accent" />
                                </div>
                                <h4 className="font-display text-xl font-bold tracking-wide uppercase text-white/80">{title}</h4>
                              </div>
                              <ul className="grid gap-4 pl-16">
                                {value.map((item, idx) => (
                                  <li key={idx} className="text-lg text-white/40 flex items-start gap-4 group/item hover:text-white transition-colors duration-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 opacity-20 group-hover/item:opacity-100 transition-opacity shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)]" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          );
                        }
                        return null;
                      })}
                    </div>
                  </div>
                </section>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Final Transition CTA */}
      <section className="relative pt-32 lg:pt-48 pb-32 lg:pb-48 bg-ink text-white text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <Reveal>
            <span className="eyebrow text-accent mb-8 block tracking-[0.4em] uppercase">The Future of Growth</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-[1] tracking-tighter">
              READY TO <br />
              <span className="text-gradient-brand italic">COLLABORATE?</span>
            </h2>
            <Link
              to="/contact"
              className="btn-primary text-xl font-bold py-6 px-12 hover:scale-105"
            >
              Start Conversation <ArrowRight className="w-6 h-6" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
