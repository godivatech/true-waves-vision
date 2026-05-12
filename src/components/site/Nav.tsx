import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/Logo.png";
import { ConsultationModal } from "./ConsultationModal";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/pillars", label: "Our Five Pillars" },
  // { to: "#", label: "Blogs" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-consultation-modal", handleOpenModal);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("open-consultation-modal", handleOpenModal);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 glass-nav ${scrolled ? "h-24" : "h-28"
          }`}
      >
        <div className="mx-auto section-container flex h-full items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="True Waves Group"
              className={`h-20 w-auto object-contain transition-all duration-300 group-hover:scale-110 ${!scrolled ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]" : ""
                }`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-accent after:scale-x-100" }}
                inactiveProps={{
                  className: "text-muted-foreground"
                }}
                className={`relative text-sm tracking-wide transition-all duration-300 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-500 hover:text-foreground`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="hidden lg:inline-flex items-center gap-2 text-sm px-5 py-2 rounded-full bg-accent text-primary font-bold hover:opacity-90 transition-all duration-500 shadow-brand active:scale-95 cursor-pointer"
          >
            Partner With Us
          </button>

          <button
            className="lg:hidden p-2 transition-colors duration-300 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-base py-2 text-foreground font-medium border-b border-border/50 last:border-0"
                  activeProps={{ className: "text-accent" }}
                >
                  {l.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  setIsModalOpen(true);
                }}
                className="w-full mt-2 py-3 bg-accent text-primary font-bold rounded-full text-center"
              >
                Partner With Us
              </button>
            </div>
          </div>
        )}
      </header>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
