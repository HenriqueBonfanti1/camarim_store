import { motion } from "framer-motion";
import { Share2, Smartphone, RefreshCw, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Fácil Compartilhamento",
    description: "Envie seu catálogo por WhatsApp, e-mail ou redes sociais com um clique. Alcance mais clientes sem custo extra.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Acesso por Celular",
    description: "Seu catálogo roda perfeitamente em qualquer dispositivo. Os clientes veem seus produtos onde estiverem.",
    color: "text-secondary",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,96,0,0.15)]",
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Atualização Rápida",
    description: "Altere preços, produtos e informações em minutos. Sem reimpressão, sem custo, sem espera.",
    color: "text-primary",
    glow: "group-hover:shadow-[0_0_30px_rgba(0,229,255,0.15)]",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Aumento das Vendas",
    description: "Catálogos digitais interativos convertem até 3x mais que PDF estático. Seu produto apresentado no melhor formato.",
    color: "text-secondary",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,96,0,0.15)]",
  },
];

const catalogPages = [
  { bg: "from-orange-900/40 to-orange-600/20", label: "Alimentos & Bebidas", items: ["Produto Premium", "Linha Especial", "Edição Limitada"] },
  { bg: "from-cyan-900/40 to-cyan-600/20", label: "Tecnologia", items: ["Smartphones", "Acessórios", "Smart Home"] },
  { bg: "from-purple-900/40 to-purple-600/20", label: "Moda & Estilo", items: ["Coleção Verão", "Calçados", "Bolsas"] },
];

export function DigitalCatalogs() {
  return (
    <section id="catalogos" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Catálogos <span className="text-secondary">Digitais</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Transforme sua vitrine física em uma experiência digital interativa que vende 24 horas por dia, 7 dias por semana.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative flex gap-4 perspective-[1000px]">
              {catalogPages.map((page, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotateY: -20, y: 20 }}
                  whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`flex-1 bg-gradient-to-b ${page.bg} border border-white/10 rounded-sm overflow-hidden`}
                  style={{ minHeight: 320 }}
                >
                  <div className="p-4 border-b border-white/10">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{page.label}</div>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    {page.items.map((item, j) => (
                      <div key={j} className="bg-white/5 rounded-sm p-3">
                        <div className="h-2 bg-white/20 rounded-full mb-2 w-3/4" />
                        <div className="h-1.5 bg-white/10 rounded-full w-1/2" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-3 right-3 text-xs text-white/30 font-mono">{i + 1}</div>
                </motion.div>
              ))}
            </div>
            <div className="absolute -inset-8 bg-primary/5 blur-[80px] rounded-full pointer-events-none -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group bg-card border border-white/5 p-6 rounded-none transition-all duration-300 ${benefit.glow}`}
              >
                <div className={`mb-4 ${benefit.color}`}>{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
