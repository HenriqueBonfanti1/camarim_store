import { motion } from "framer-motion";
import { Monitor, Zap, BookOpen, Code2, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Sites Institucionais",
    description: "Presença digital que transmite credibilidade e converte visitantes em clientes desde o primeiro segundo.",
    accent: "#00E5FF",
    gradient: "from-cyan-500/10 to-transparent",
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(0,229,255,0.08)]",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Páginas de conversão construídas com precisão cirúrgica para transformar tráfego em receita.",
    accent: "#FF6000",
    gradient: "from-orange-500/10 to-transparent",
    border: "hover:border-orange-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(255,96,0,0.08)]",
  },
  {
    icon: BookOpen,
    title: "Catálogos Digitais",
    description: "Apresente seus produtos de forma interativa e elegante. Compartilhe em segundos, venda o tempo todo.",
    accent: "#00E5FF",
    gradient: "from-cyan-500/10 to-transparent",
    border: "hover:border-cyan-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(0,229,255,0.08)]",
  },
  {
    icon: Code2,
    title: "Sistemas Web",
    description: "Soluções sob medida que automatizam processos e escalam junto com o crescimento da sua empresa.",
    accent: "#FF6000",
    gradient: "from-orange-500/10 to-transparent",
    border: "hover:border-orange-500/30",
    glow: "hover:shadow-[0_0_60px_rgba(255,96,0,0.08)]",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_50%,rgba(0,229,255,0.03),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-2xl"
        >
          <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-bold mb-5">O que fazemos</p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Especialidades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.04]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group relative bg-[#050505] p-10 md:p-14 border border-transparent ${service.border} ${service.glow} transition-all duration-500 cursor-default`}
            >
              {/* Hover background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <motion.div
                    className="w-14 h-14 flex items-center justify-center border border-white/8 group-hover:border-white/15 transition-colors"
                    style={{ background: `${service.accent}10` }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon
                      size={24}
                      style={{ color: service.accent }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 4, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRight
                      size={20}
                      className="text-white/20 group-hover:text-white/50 transition-all duration-300"
                    />
                  </motion.div>
                </div>

                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <p className="text-white/40 leading-relaxed text-sm md:text-base font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
