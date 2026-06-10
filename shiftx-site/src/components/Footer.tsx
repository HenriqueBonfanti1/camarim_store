import { Logo } from "./Logo";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Logo size="sm" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-5"
        >
          <motion.a
            href="#"
            aria-label="Instagram"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center border border-white/8 text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Instagram size={15} />
          </motion.a>
          <motion.a
            href="#"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center border border-white/8 text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Linkedin size={15} />
          </motion.a>
          <motion.a
            href="#"
            aria-label="Facebook"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-9 h-9 flex items-center justify-center border border-white/8 text-white/30 hover:text-white hover:border-white/20 transition-all duration-300"
          >
            <Facebook size={15} />
          </motion.a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/20 text-xs tracking-wider"
        >
          &copy; {year} ShiftX. Todos os direitos reservados.
        </motion.p>
      </div>
    </footer>
  );
}
