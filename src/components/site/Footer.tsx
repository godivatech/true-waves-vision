import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/Logo.png";
import { pillars } from "@/data/pillars";

export function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-border mt-0">
      <div className="mx-auto section-container py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-white p-3 rounded-2xl border border-border/60 shadow-sm inline-flex items-center justify-center">
              <img
                src={logoImg}
                alt="True Waves Group"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
            Transforming industries into investment opportunities across India.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4 text-accent font-semibold">Explore</div>
          <ul className="space-y-3 text-base">
            <li><Link to="/about" className="text-muted-foreground hover:text-accent transition">About Us</Link></li>
            <li><Link to="/pillars" className="text-muted-foreground hover:text-accent transition">Our Five Pillars</Link></li>
            <li><Link to="/careers" className="text-muted-foreground hover:text-accent transition">Careers</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-accent font-semibold">Our Five Pillars</div>
          <ul className="space-y-3 text-base text-muted-foreground">
            {pillars.map((p) => (
              <li key={p.id}>
                {p.externalLink ? (
                  <a href={p.externalLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                    {p.name}
                  </a>
                ) : (
                  <Link to="/pillars" hash={p.id} className="hover:text-accent transition">
                    {p.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-accent font-semibold">Get in touch</div>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
              <div className="space-y-1">
                <div>
                  <strong className="text-foreground">Chennai:</strong> 17/13, Easwaran Koil St, West Mambalam, Chennai – 600033
                </div>
                <a href="tel:04445837877" className="inline-flex items-center gap-2 hover:text-accent transition-colors group">
                  <Phone className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
                  <span>044-45837877</span>
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
              <div className="space-y-1">
                <div>
                  <strong className="text-foreground">Madurai:</strong> No. 5, North St, Narimedu, Madurai – 625002
                </div>
                <a href="tel:04522535226" className="inline-flex items-center gap-2 hover:text-accent transition-colors group">
                  <Phone className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
                  <span>0452 2535226</span>
                </a>
              </div>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:info@truewavesgroup.com" className="hover:text-accent transition">info@truewavesgroup.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto section-container py-6 flex flex-col md:flex-row gap-2 justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} True Waves Group. All rights reserved.</p>
          <p className="font-bold tracking-wider">
            DESIGNED AND DEVELOPED BY{" "}
            <a
              href="https://godivatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:text-accent"
            >
              GODIVATECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}