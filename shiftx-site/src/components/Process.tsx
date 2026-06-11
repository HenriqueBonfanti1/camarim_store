import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Palette, Code2, CheckSquare, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="w-7 h-7" />,
    number: "01",
    title: "Reunião",
    description: "Entendemos profundamente seu negócio, objetivos e público-alvo. Sem palpites, apenas estratégia.",
    color: "text-primary",
    border: "border-primary/50",
    bg: "bg-primary/10",
  },
  {
    icon: <Lightbulb className="w-7 h-7" />,
    number: "02",
    title: "Planejamento",
    description: "Definimos arquitetura, funcionalidades e cronograma. Você aprova cada etapa antes de iniciarmos.",
    color: "text-secondary",
    border: "border-secondary/50",
    bg: "bg-secondary/10",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    number: "03",
    title: "Design",
    description: "Criamos uma identidade visual única e interfaces que convertem. Cada pixel com intenção.",
    color: "text-primary",
    border: "border-primary/50",
    bg: "bg-primary/10",
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    number: "04",
    title: "Desenvolvimento",
    description: "Código limpo, performático e escalável. Construído com as tecnologias mais modernas do mercado.",
    color: "text-secondary",
    border: "border-secondary/50",
    bg: "bg-secondary/10",
  },
  {
    icon: <CheckSquare className="w-7 h-7" />,
    number: "05",
    title: "Aprovação",
    description: "Revisão completa com você. Ajustes até a perfeição. Só avançamos com sua aprovação total.",
    color: "text-primary",
    border: "border-primary/50",
    bg: "bg-primary/10",
  },
  {
    icon: <Rocket className="w-7 h-7" />,
    number: "06",
    title: "Entrega",
    description: "Lançamento, treinamento e suporte pós-entrega. Seu projeto no ar e crescendo.",
    color: "text-secondary",
    border: "border-secondary/50",
    bg: "bg-secondary/10",
  },
];

export function Process() {
  return (
    <section id="processo" className="py-24 bg-card/30 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Como <span className="text-primary">Trabalhamos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Um processo transparente e eficiente do primeiro contato até a entrega. Sem surpresas, apenas resultados.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 border border-white/5 bg-background group hover:bg-card transition-colors duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className={`w-14 h-14 ${step.bg} border ${step.border} flex items-center justify-center rounded-none ${step.color} group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${step.color}`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute top-12 -right-3 z-10 hidden lg:block">
                    {index % 3 !== 2 && (
                      <div className="w-6 h-6 bg-background border border-white/10 rotate-45 flex items-center justify-center">
                        <div className={`w-2 h-2 rotate-0 rounded-full ${index % 2 === 0 ? "bg-primary" : "bg-secondary"}`} />
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
