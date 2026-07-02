import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/Logo.png";
import { ConsultationModal } from "./ConsultationModal";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/pillars", label: "Our Five Pillars" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center bg-white/95 dark:bg-[#0A1128]/95 border-b border-slate-200/20 dark:border-white/5 ${
          scrolled
            ? "h-20 bg-white/80 dark:bg-[#0A1128]/85 border-b border-slate-200/40 dark:border-white/10 shadow-[0_10px_30px_rgba(58,190,249,0.04)] dark:shadow-[0_10px_30px_rgba(58,190,249,0.01)] shadow-slate-900/5 backdrop-blur-xl"
            : "h-24"
        }`}
      >
        <div className="mx-auto section-container w-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={logoImg}
              alt="True Waves Group"
              className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled ? "h-12" : "h-16"
              } group-hover:scale-105`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1 bg-slate-500/5 dark:bg-white/5 p-1 rounded-full border border-slate-200/20 dark:border-white/5 relative"
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {links.map((l, idx) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onMouseEnter={() => setHoveredIdx(idx)}
                className="relative px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider transition-colors duration-300 rounded-full cursor-pointer z-10 select-none flex flex-col items-center justify-center"
              >
                {({ isActive }) => (
                  <>
                    {hoveredIdx === idx && (
                      <motion.span
                        layoutId="navHover"
                        className="absolute inset-0 bg-white dark:bg-[#111C44] shadow-md shadow-slate-900/5 border border-slate-200/30 dark:border-white/5 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span
                      className={`transition-colors duration-300 ${
                        isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {l.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute bottom-1 w-1 h-1 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </Link>
            ))}
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-full bg-accent text-primary transition-all duration-300 shadow-brand hover:scale-105 active:scale-95 cursor-pointer hover:shadow-lg hover:shadow-accent/25 overflow-hidden group/btn"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent to-[#54d2ff] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Partner With Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              scrolled
                ? "bg-slate-500/5 dark:bg-white/5 hover:bg-slate-500/10 dark:hover:bg-white/10"
                : "hover:bg-slate-500/5 dark:hover:bg-white/5"
            } text-foreground`}
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`absolute left-4 right-4 p-5 bg-white/95 dark:bg-[#0A1128]/95 backdrop-blur-xl border border-slate-200/40 dark:border-white/10 rounded-3xl shadow-elegant z-40 lg:hidden flex flex-col gap-5 pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                scrolled ? "top-[92px]" : "top-[108px]"
              }`}
            >
              <div className="flex flex-col gap-1.5">
                {links.map((l, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={l.to}
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: l.to === "/" }}
                      className="flex items-center w-full rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer"
                    >
                      {({ isActive }) => (
                        <div
                          className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-300 ${
                            isActive
                              ? "bg-accent/15 text-accent"
                              : "text-foreground/80 hover:bg-slate-500/5 dark:hover:bg-white/5"
                          }`}
                        >
                          <span>{l.label}</span>
                          {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                        </div>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-slate-200/40 dark:border-white/5 pt-4">
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-3.5 bg-accent text-primary font-bold text-xs uppercase tracking-wider rounded-2xl text-center shadow-brand active:scale-95 cursor-pointer"
                >
                  Partner With Us
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

