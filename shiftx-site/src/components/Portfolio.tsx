import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface Project {
  title: string;
  category: string;
  year: string;
  color: string;
  bg: string;
  lines: string[];
  image: string;
  description: string;
  preview: string;
}

const projects: Project[] = [
  {
    title: "TechFlow Solutions",
    category: "Landing Page",
    year: "2026",
    color: "#FF6000",
    bg: "from-orange-950/60 via-orange-900/20 to-black",
    lines: ["#FF6000", "#FF8040", "#FF4000"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    description: "Landing page moderna e conversiva para startup de tecnologia.",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90"
  },
  {
    title: "VerdeMar Restaurante",
    category: "Site Institucional",
    year: "2026",
    color: "#00E5FF",
    bg: "from-cyan-950/60 via-cyan-900/20 to-black",
    lines: ["#00E5FF", "#00BFCF", "#007A9F"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    description: "Site institucional com cardapio digital e sistema de reservas.",
    preview: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=90"
  },
  {
    title: "Moda Viva Store",
    category: "Loja Virtual",
    year: "2025",
    color: "#A855F7",
    bg: "from-purple-950/60 via-purple-900/20 to-black",
    lines: ["#A855F7", "#7C3AED", "#C084FC"],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    description: "E-commerce completo para loja de roupas com integracao de pagamentos.",
    preview: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=90"
  },
  {
    title: "AgroForte Comercio",
    category: "Loja Agropecuaria",
    year: "2026",
    color: "#22C55E",
    bg: "from-green-950/60 via-green-900/20 to-black",
    lines: ["#22C55E", "#16A34A", "#4ADE80"],
    image: "https://images.unsplash.com/photo-1628746204288-e596e5a0c9e7?w=800&q=80",
    description: "Loja virtual completa para venda de insumos agropecuarios com estoque integrado.",
    preview: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&q=90"
  },
  {
    title: "Mercado do Bairro",
    category: "Vendas / Mercearia",
    year: "2026",
    color: "#F97316",
    bg: "from-orange-950/60 via-orange-900/20 to-black",
    lines: ["#F97316", "#EA580C", "#FB923C"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    description: "Sistema de vendas online para mercearia com catalogo de produtos e entregas.",
    preview: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=90"
  },
  {
    title: "Construtora Apex",
    category: "Site Institucional",
    year: "2025",
    color: "#F59E0B",
    bg: "from-amber-950/60 via-amber-900/20 to-black",
    lines: ["#F59E0B", "#D97706", "#FCD34D"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    description: "Site institucional para construtora com portfolio de obras.",
    preview: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1200&q=90"
  },
  {
    title: "FitLife Gym",
    category: "App Mobile",
    year: "2026",
    color: "#10B981",
    bg: "from-emerald-950/60 via-emerald-900/20 to-black",
    lines: ["#10B981", "#059669", "#34D399"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    description: "Aplicativo mobile para academia com treinos personalizados.",
    preview: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=1200&q=90"
  },
  {
    title: "ArtGallery Digital",
    category: "Catalogo Online",
    year: "2025",
    color: "#EC4899",
    bg: "from-pink-950/60 via-pink-900/20 to-black",
    lines: ["#EC4899", "#DB2777", "#F472B6"],
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    description: "Catalogo online para galeria de arte com exposicoes virtuais.",
    preview: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&q=90"
  },
];

function MockBrowser({ color, bg, lines, image }: { color: string; bg: string; lines: string[]; image?: string }) {
  return (
    <div className="w-full aspect-[16/10] overflow-hidden" style={{ background: "#080808" }}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ background: "#0D0D0D" }}>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 mx-3 h-5 rounded-full bg-white/5 flex items-center px-3">
          <div className="w-24 h-1.5 rounded-full bg-white/10" />
        </div>
      </div>
      <div className={`relative w-full h-full bg-gradient-to-br ${bg} p-6 flex flex-col gap-4`}>
        {image && (
          <div className="absolute inset-0 opacity-30">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-3 relative z-10">
          <div className="w-4 h-4 rounded-sm" style={{ background: color, opacity: 0.7 }} />
          <div className="h-2.5 rounded-full w-20 bg-white/20" />
          <div className="ml-auto flex gap-2">
            {[1,2,3].map(i => (
              <div key={i} className="h-1.5 rounded-full w-8 bg-white/10" />
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center gap-3 relative z-10">
          <div className="h-4 rounded-sm w-3/4 bg-white/20" />
          <div className="h-3 rounded-sm w-1/2 bg-white/10" />
          <div className="h-3 rounded-sm w-2/5 bg-white/10" />
          <div className="mt-3 flex gap-3">
            <div className="h-8 w-24 rounded-sm" style={{ background: color, opacity: 0.6 }} />
            <div className="h-8 w-20 rounded-sm border border-white/15" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 relative z-10">
          {lines.map((c, i) => (
            <div key={i} className="h-12 rounded-sm bg-white/[0.04] border border-white/5 flex flex-col justify-end p-2 gap-1">
              <div className="h-1 rounded-full w-full" style={{ background: c, opacity: 0.5 }} />
              <div className="h-1 rounded-full w-2/3 bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/95"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto"
      >
        {/* Browser-style toolbar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#0D0D0D] rounded-t-xl border-b border-white/5 sticky top-0 z-10">
          <div className="flex gap-1.5">
            <button onClick={onClose} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" title="Fechar" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="flex-1 mx-3 h-7 rounded-lg bg-white/[0.04] flex items-center px-4 border border-white/[0.04]">
            <span className="text-xs text-white/30 font-mono truncate">
              {project.title.toLowerCase().replace(/\s+/g, '')}.com.br
            </span>
          </div>
          <button onClick={onClose} className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white/5 text-white/30 hover:text-white/70 transition-all cursor-pointer">
            <X size={14} />
          </button>
        </div>

        {/* Preview do site - imagem grande */}
        <div className="bg-[#050505]">
          <img
            src={project.preview}
            alt={"Preview do site " + project.title}
            className="w-full h-auto object-cover"
            style={{ maxHeight: "70vh", minHeight: "300px" }}
          />
        </div>

        {/* Info bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0D0D0D] rounded-b-xl border-t border-white/5">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: project.color }}>
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">{project.title}</h3>
            <p className="text-white/40 text-xs mt-0.5 max-w-lg">{project.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/20 text-sm font-mono">{project.year}</span>
            <button
              onClick={onClose}
              className="text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-lg text-white transition-all duration-200 hover:brightness-110 cursor-pointer"
              style={{ background: project.color }}
            >
              Fechar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section id="portfolio" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-20"
          >
            <p className="text-white/30 text-xs uppercase tracking-[0.3em] font-bold mb-5">Projetos</p>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">Portfolio</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden border border-white/[0.06] hover:border-white/15 transition-all duration-500 cursor-pointer"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.02)" }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <MockBrowser color={project.color} bg={project.bg} lines={project.lines} image={project.image} />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div
                      className="flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white"
                      style={{ background: project.color }}
                    >
                      Ver Projeto <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6 border-t border-white/[0.05]" style={{ background: "#080808" }}>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: project.color }}>
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  <span className="text-white/20 text-sm font-mono">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}