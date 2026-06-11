import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcos Oliveira",
    role: "CEO, TechFlow Solutions",
    content: "A ShiftX transformou nossa presença digital completamente. O novo site triplicou nossas solicitações de contato em apenas 2 meses. Trabalho impecável, prazo respeitado e resultado além do esperado.",
    initials: "MO",
    color: "bg-primary/20 text-primary",
    star: "text-primary",
  },
  {
    name: "Ana Carolina Ferreira",
    role: "Diretora, Moda Viva Store",
    content: "O catálogo digital que criaram para nós é simplesmente incrível. Nossos clientes adoraram a facilidade de navegar pelos produtos pelo celular. As vendas aumentaram 40% desde o lançamento.",
    initials: "AF",
    color: "bg-secondary/20 text-secondary",
    star: "text-secondary",
  },
  {
    name: "Roberto Santos",
    role: "Sócio, Construtora Apex",
    content: "Profissionalismo do início ao fim. A equipe da ShiftX entendeu exatamente o que precisávamos e entregou muito além das expectativas. O site posicionou nossa marca como referência no mercado.",
    initials: "RS",
    color: "bg-primary/20 text-primary",
    star: "text-primary",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            O Que Nossos <span className="text-secondary">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Resultados reais de empresas reais. Cada depoimento é uma transformação digital bem-sucedida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-card border border-white/5 p-8 rounded-none relative group hover:border-white/10 transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-white/10 absolute top-6 right-6 group-hover:text-white/20 transition-colors" />

              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${t.star}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-8 italic text-sm">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-none ${t.color} flex items-center justify-center font-bold text-sm`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
