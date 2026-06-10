import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const differentials = [
  "Design Profissional e Exclusivo",
  "Responsivo para Todos os Dispositivos",
  "Alta Performance e Velocidade",
  "SEO Otimizado para o Google",
  "Suporte Técnico Especializado",
  "Entrega Rápida e Transparente"
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Por que escolher a <br/><span className="text-secondary">ShiftX?</span></h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Não entregamos apenas código. Entregamos soluções estratégicas pensadas no seu resultado final. Cada projeto é construído com atenção obsecada aos detalhes.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                {differentials.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative p-1 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-lg"
            >
              <div className="bg-card p-8 md:p-12 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <span className="font-display font-bold text-9xl">X</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">O Padrão ShiftX</h3>
                <p className="text-muted-foreground relative z-10 mb-8">
                  Nossa metodologia une design premiado com tecnologia de ponta para garantir que seu projeto não apenas seja bonito, mas converta visitantes em clientes.
                </p>
                
                <div className="space-y-6 relative z-10">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium uppercase tracking-wider">Performance</span>
                      <span className="text-primary font-bold">99/100</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-[99%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium uppercase tracking-wider">Design UI/UX</span>
                      <span className="text-secondary font-bold">100%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
