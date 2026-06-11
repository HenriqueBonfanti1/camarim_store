import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Premium black background layers */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Radial ambient — main center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(0,229,255,0.06),transparent_70%)]" />

      {/* Orange warmth bottom right */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_75%_70%,rgba(255,60,0,0.05),transparent_70%)]" />

      {/* Subtle top highlight — like a studio light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.015]">
        <div
          className="absolute w-full h-[2px] bg-white"
          style={{ animation: "scanline 8s linear infinite" }}
        />
      </div>

      {/* Floor reflection beneath logo */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[rgba(0,229,255,0.03)] to-transparent pointer-events-none animate-floor-reflect" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">

        {/* The dominant logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 animate-logo-glow"
        >
          <Logo size="hero" />

          {/* Reflection — logo mirrored beneath */}
          <div
            className="select-none pointer-events-none mt-1 opacity-[0.12]"
            style={{
              transform: "scaleY(-1)",
              filter: "blur(4px)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 80%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 80%)",
            }}
          >
            <Logo size="hero" />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Sites que impressionam.</span>
            <br />
            <span className="text-white/50">Resultados que vendem.</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
        >
          Criamos experiências digitais que convertem visitantes em clientes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#cta"
            className="group flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white orange-glow-btn transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #FF6000, #FF3D00)" }}
          >
            Solicitar Orçamento
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/60 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-300"
          >
            Ver Projetos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <ChevronDown size={18} />
      </motion.div>
    </section>
  );
}
