import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Building2, Handshake, LineChart, Sparkles, Compass, HardHat, ArrowRight } from "lucide-react";
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
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setActiveIdx(index);
          }
        });
      },
      {
        rootMargin: "-25% 0px -50% 0px",
        threshold: 0.1,
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="bg-background selection:bg-accent selection:text-white min-h-screen">
      <Floating3DBackground />

      <section className="relative pt-40 pb-20 bg-gradient-to-b from-muted/50 to-background border-b border-border/40 overflow-hidden grain">
        <div className="mx-auto section-container w-full relative z-10">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-accent/60" />
              <span className="eyebrow text-accent tracking-[0.25em] uppercase">Our Ecosystem</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tighter text-foreground mb-6">
              THE FIVE <span className="text-gradient-brand">PILLARS</span>
            </h1>
            <p className="max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-normal">
              An integrated conglomerate platform delivering expertise and excellence across real estate development, property valuation, trading, scaffolding, and partner services.
            </p>
          </Reveal>
        </div>

        <div className="absolute -bottom-16 -right-16 font-display text-[25vw] font-black text-muted/10 leading-none select-none pointer-events-none">
          05
        </div>
      </section>

      <section className="relative z-10 border-b border-border/40">
        <div className="grid lg:grid-cols-12 items-stretch">
          
          <div className="hidden lg:block lg:col-span-5 sticky top-[80px] h-[calc(100vh-80px)] overflow-hidden bg-muted">
            {images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  activeIdx === idx ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
                }`}
              >
                <img
                  src={img}
                  alt={pillars[idx]?.name || "Showcase"}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
              </div>
            ))}

            <div className="absolute left-8 bottom-8 z-20 bg-background/90 backdrop-blur-md px-4 py-2.5 border border-border/50 rounded-2xl shadow-lg flex items-center gap-3">
              <span className="font-display font-black text-sm text-accent">
                0{activeIdx + 1}
              </span>
              <div className="h-4 w-[1px] bg-border" />
              <span className="text-[10px] font-bold tracking-wider text-foreground uppercase">
                {pillars[activeIdx]?.name}
              </span>
            </div>

            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-20">
              {pillars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const element = document.getElementById(pillars[idx].id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeIdx === idx 
                      ? "bg-accent scale-125 shadow-[0_0_10px_rgba(58,190,249,0.8)]" 
                      : "bg-white/50 backdrop-blur-sm border border-black/15 hover:bg-white"
                  }`}
                  aria-label={`Scroll to Pillar ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7 bg-background">
            {pillars.map((p, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={p.id}
                  id={p.id}
                  data-index={i}
                  ref={(el) => (cardRefs.current[i] = el)}
                  onMouseEnter={() => setActiveIdx(i)}
                  className={`px-6 md:px-12 py-20 lg:py-32 border-b border-border/40 last:border-none flex flex-col justify-center transition-colors duration-500 ${
                    activeIdx === i ? "bg-muted/10" : ""
                  }`}
                >
                  <Reveal>
                    <div className="block lg:hidden w-full aspect-[16/10] rounded-3xl overflow-hidden border border-border/80 shadow-md mb-8 relative">
                      <img
                        src={images[i]}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/90 backdrop-blur-md border border-border/50 flex items-center justify-center font-display font-bold text-accent text-xs shadow-sm select-none">
                        0{i + 1}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/15 flex items-center justify-center text-accent shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold tracking-wider text-accent uppercase bg-accent/5 px-3.5 py-1 border border-accent/15 rounded-full">
                        {p.tagline}
                      </span>
                    </div>

                    <h2 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
                      {p.name}
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 font-normal">
                      {p.description}
                    </p>

                    <div className="space-y-10">
                      {Object.entries(p).map(([key, value]) => {
                        if (Array.isArray(value)) {
                          const title = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                          return (
                            <div key={key} className="space-y-4">
                              <h4 className="text-xs uppercase tracking-[0.15em] text-accent font-extrabold">{title}</h4>
                              <div className="grid sm:grid-cols-2 gap-4">
                                {value.map((item, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-start gap-3 p-5 md:p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:border-accent/25 hover:shadow-md transition-all duration-300"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-accent mt-2.5 shrink-0 shadow-[0_0_6px_rgba(var(--accent-rgb),0.4)]" />
                                    <span className="text-sm md:text-base font-semibold text-foreground/90 leading-relaxed">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return null;
                      })}
                    </div>

                    <div className="flex flex-wrap gap-4 border-t border-border/40 pt-10 mt-10">
                      <Link
                        to="/contact"
                        className="btn-primary py-3.5 px-8 text-sm font-bold rounded-full shadow-lg"
                      >
                        Enquire Now
                      </Link>
                      {p.externalLink && (
                        <a
                          href={p.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors py-3.5 px-7 rounded-full border border-accent/20 hover:bg-accent/5"
                        >
                          Visit Website <ArrowRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-ink text-white text-center overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/20 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="mx-auto max-w-4xl px-6 relative z-10">
          <Reveal>
            <span className="eyebrow text-accent mb-8 block tracking-[0.4em] uppercase">The Future of Growth</span>
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-10 leading-[1.1] tracking-tighter">
              READY TO <br />
              <span className="text-gradient-brand italic">COLLABORATE?</span>
            </h2>
            <Link
              to="/contact"
              className="btn-primary text-base font-bold py-4 px-10 hover:scale-105"
            >
              Start Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
