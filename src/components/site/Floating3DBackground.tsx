import { motion } from "framer-motion";

export function Floating3DBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div 
        animate={{ 
          x: [0, 50, 0], 
          y: [0, 30, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full"
        style={{ background: 'radial-gradient(circle at center, rgba(58,190,249,0.05) 0%, transparent 70%)' }}
      />
      <motion.div 
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 60, 0],
          rotate: [0, -15, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full"
        style={{ background: 'radial-gradient(circle at center, rgba(58,190,249,0.05) 0%, transparent 70%)' }}
      />
    </div>
  );
}
