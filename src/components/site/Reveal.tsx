import { motion, type HTMLMotionProps } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
  ...props
}: RevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Reveal3D({
  children,
  delay = 0,
  className = "",
  ...props
}: RevealProps) {
  const variants = {
    hidden: {
      opacity: 0,
      rotateX: 45,
      y: 60,
      z: -100,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      z: 0,
      transition: {
        duration: 1.2,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div style={{ perspective: "1200px" }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={className.includes('h-full') ? 'h-full' : ''}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Counter({ to, suffix = "", duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = to;
    const totalMiliseconds = duration;
    const timer = setInterval(() => {
      start += end / (totalMiliseconds / 16);
      if (start > end) {
        setVal(end);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasStarted, to, duration]);

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => setHasStarted(true)}
    >
      {val}{suffix}
    </motion.span>
  );
}


