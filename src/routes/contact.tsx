import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Reveal, Reveal3D } from "@/components/site/Reveal";
import { Floating3DBackground } from "@/components/site/Floating3DBackground";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — True Waves Group" },
      { name: "description", content: "Get in touch with True Waves Group. Office address, phone, email, and WhatsApp quick contact." },
      { property: "og:title", content: "Contact True Waves Group" },
      { property: "og:description", content: "Let's build the next chapter, together." },
    ],
  }),
  component: Contact,
});

function Contact() {
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
          className="mx-auto section-container relative"
        >
          <Reveal>
            <span className="eyebrow text-accent">Get in Touch</span>
            <h1 className="font-display text-4xl md:text-6xl mt-6 max-w-4xl leading-[1.1] text-balance font-semibold">
              Tell Us What You’re Looking For — <span className="text-gradient-brand">We’ll Help You Get There</span>
            </h1>
            <p className="mt-6 md:mt-8 max-w-2xl text-lg md:text-xl opacity-80 leading-relaxed">
              Invest, Partner, Grow — Every conversation matters.
            </p>
          </Reveal>
        </motion.div>
      </section>

      <section className="pt-16 lg:pt-20 pb-24 lg:pb-32">
        <div className="mx-auto section-container grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <span className="eyebrow text-accent">Contact Information</span>
              <h2 className="font-display text-2xl md:text-3xl mt-4 mb-8 leading-[1.15]">Reach us directly</h2>
            </Reveal>

            {[
              { icon: MapPin, t: "Chennai Office", d: "27/5, Easwaran Koil Street,\nVellai Thottam, West Mambalam,\nChennai – 600 033" },
              { icon: Phone, t: "Chennai Phone", d: "044-45837877" },
              { icon: MapPin, t: "Madurai Office", d: "No. 5, North Street,\nSingarayar Colony, Narimedu,\nMadurai – 625 002" },
              { icon: Phone, t: "Madurai Phone", d: "0452 2535226" },
              { icon: Mail, t: "General Enquiries", d: "info@truewavesgroup.com" },
              { icon: Mail, t: "Investments", d: "invest@truewavesgroup.com" },
              { icon: Mail, t: "Partnerships", d: "partners@truewavesgroup.com" },
              { icon: Mail, t: "Careers", d: "careers@truewavesgroup.com" },
            ].map((c, i) => (
              <Reveal3D key={i} delay={i * 60}>
                <div className="flex gap-5 p-6 border border-border rounded-2xl bg-card hover-lift h-full">
                  <c.icon className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <div className="eyebrow mb-1 text-xs">{c.t}</div>
                    <div className="text-foreground whitespace-pre-line leading-relaxed text-base">{c.d}</div>
                  </div>
                </div>
              </Reveal3D>
            ))}

            <Reveal delay={240}>
              <a
                href="https://wa.me/919840000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-brand text-ink shadow-brand hover:shadow-elegant transition-all duration-500 group"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <div className="font-display text-lg">Quick Contact</div>
                    <div className="text-sm opacity-80">WhatsApp for faster response</div>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Reveal>

            <Reveal delay={300}>
              <div className="p-8 border border-border rounded-3xl bg-card/30">
                <div className="eyebrow text-accent mb-4">Working Hours</div>
                <div className="flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent text-sm">Mon</span>
                  </div>
                  <div className="text-sm font-medium">Monday – Saturday</div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-foreground/80">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <span className="text-accent text-sm">9:30</span>
                  </div>
                  <div className="text-sm font-medium">9:30 AM – 6:30 PM (IST)</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-3 space-y-8 lg:sticky lg:top-32 h-fit">
            <Reveal3D>
              <div className="p-8 md:p-10 border border-border rounded-4xl bg-card">
                <span className="eyebrow text-accent">Send Us a Message</span>
                <h2 className="font-display text-2xl md:text-3xl mt-4 mb-8 leading-[1.15]">We'll get back as soon as possible</h2>

                {sent ? (
                  <div className="py-10 text-center">
                    <div className="font-display text-2xl mb-2">Message sent</div>
                    <p className="text-muted-foreground">Thank you — a member of our team will be in touch shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <Field label="Your Name *" name="name" required />
                      <Field label="Phone Number *" name="phone" type="tel" required />
                    </div>
                    <Field label="Email Address" name="email" type="email" />
                    <div>
                      <label className="eyebrow block mb-2">I am interested in...</label>
                      <select name="interest" className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition appearance-none">
                        <option value="">Select an option</option>
                        <option value="Investing">Investing</option>
                        <option value="Partnering">Partnering</option>
                        <option value="Career">Career</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="Valuation">Valuation</option>
                        <option value="General Enquiry">General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="eyebrow block mb-2">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        maxLength={1000}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition resize-none"
                      />
                    </div>
                    <button type="submit" className="mt-2 btn-primary shadow-brand hover:shadow-elegant w-full md:w-auto">
                      Send Message <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal3D>

            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2">
                <Reveal delay={400}>
                  <div className="h-full p-8 border border-border rounded-3xl bg-card/50 backdrop-blur-sm">
                    <h3 className="font-display text-xl mb-4 text-gradient-brand">What to expect</h3>
                    <div className="space-y-6">
                      {[
                        { n: "01", t: "Fast Response", d: "Expect a call back as soon as possible." },
                        { n: "02", t: "Expert Advice", d: "Talk directly to our domain specialists." },
                        { n: "03", t: "No Obligation", d: "Get clarity before making any commitments." },
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent font-display font-bold text-sm shrink-0">{item.n}</div>
                          <div>
                            <div className="font-semibold text-sm">{item.t}</div>
                            <div className="text-xs opacity-60 leading-relaxed">{item.d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
              
              <div className="md:col-span-3">
                <Reveal delay={500}>
                  <div className="h-full rounded-3xl overflow-hidden border border-border relative group min-h-[250px]">
                    <iframe
                      title="True Waves Group office location"
                      src="https://www.google.com/maps?q=Chennai,India&output=embed"
                      className="w-full h-full absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute top-4 left-4 p-2 px-4 rounded-full bg-background/80 backdrop-blur-md border border-border text-[10px] eyebrow pointer-events-none">
                      Our Main Office
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
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
        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:border-accent focus:ring-1 focus:ring-accent outline-none transition"
      />
    </div>
  );
}
