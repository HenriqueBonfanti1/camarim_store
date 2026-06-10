import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FolderOpen, Mail, Menu, X, ChevronRight } from "lucide-react";

interface SideMenuProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

const menuItems = [
  { id: "home", label: "Início", icon: Home, href: "#" },
  { id: "services", label: "Serviços", icon: Briefcase, href: "#servicos" },
  { id: "portfolio", label: "Portfólio", icon: FolderOpen, href: "#portfolio" },
  { id: "contact", label: "Contato", icon: Mail, href: "#cta" },
];

export function SideMenu({ isOpen = false, onToggle }: SideMenuProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.href.replace("#", ""));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={onToggle}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass border border-white/10 hover:border-white/20 transition-all duration-300 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: -100 }}
        animate={{ x: isOpen ? -100 : 0 }}
      >
        <Menu size={20} className="text-white/70 group-hover:text-white transition-colors" />
      </motion.button>

      {/* Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 h-full w-72 glass-strong border-r border-white/10 z-50 flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-white font-display font-bold text-xl tracking-tight">
                    Menu
                  </span>
                  <motion.button
                    onClick={onToggle}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <X size={20} className="text-white/70" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                        onToggle?.();
                      }}
                      className={`relative flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20"
                          : "hover:bg-white/5 border border-transparent"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon
                        size={20}
                        className={`transition-colors ${
                          isActive ? "text-cyan-400" : "text-white/50"
                        }`}
                      />
                      <span
                        className={`font-medium transition-colors ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {item.label}
                      </span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="absolute right-4"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          <ChevronRight size={16} className="text-cyan-400" />
                        </motion.div>
                      )}
                    </motion.a>
                  );
                })}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-white/5">
                <div className="text-xs text-white/30 text-center">
                  Navegue pelas seções
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
