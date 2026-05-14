import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoImg from "@/assets/Logo.png";
import { pillars } from "@/data/pillars";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="mx-auto section-container py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center mb-8">
            <div className="bg-white p-3 rounded-2xl shadow-xl inline-flex items-center justify-center">
              <img
                src={logoImg}
                alt="True Waves Group"
                className="h-16 lg:h-20 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-base opacity-70 leading-relaxed max-w-xs">
            Transforming industries into investment opportunities across India.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-4 text-primary-foreground/60">Explore</div>
          <ul className="space-y-3 text-base">
            <li><Link to="/about" className="opacity-80 hover:opacity-100 transition">About Us</Link></li>
            <li><Link to="/pillars" className="opacity-80 hover:opacity-100 transition">Our Six Pillars</Link></li>
            {/* <li><Link to="#" className="opacity-80 hover:opacity-100 transition">Blogs</Link></li> */}
            <li><Link to="/careers" className="opacity-80 hover:opacity-100 transition">Careers</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-primary-foreground/60">Our Six Pillars</div>
          <ul className="space-y-3 text-base opacity-80">
            {pillars.map((p) => (
              <li key={p.id}>
                {p.externalLink ? (
                  <a href={p.externalLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    {p.name}
                  </a>
                ) : (
                  <Link to="/pillars" className="hover:text-white transition">
                    {p.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-4 text-primary-foreground/60">Get in touch</div>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
              <span>
                <strong>Chennai:</strong> 27/5, Easwaran Koil St, West Mambalam, Chennai – 600033
              </span>
            </li>
            <li className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 mt-1 text-accent shrink-0" />
              <span>
                <strong>Madurai:</strong> No. 5, North St, Narimedu, Madurai – 625002
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span>044-45837877 | 0452 2535226</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <a href="mailto:info@truewavesgroup.com" className="hover:text-white transition">info@truewavesgroup.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto section-container py-6 flex flex-col md:flex-row gap-2 justify-between text-sm opacity-60">
          <p>© {new Date().getFullYear()} True Waves Group. All rights reserved.</p>
          <p className="font-bold tracking-wider">
            DESIGNED AND DEVELOPED BY{" "}
            <a
              href="https://godivatech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GODIVATECH
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}