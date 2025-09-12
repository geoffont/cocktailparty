import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Wrench, Lightbulb, Glasses, Coffee } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  {
    title: "Accueil",
    path: "/",
    icon: Home,
    color: "text-blue-400"
  },
  {
    title: "Matériel",
    path: "/materiel",
    icon: Wrench,
    color: "text-orange-400"
  },
  {
    title: "Conseils",
    path: "/conseils",
    icon: Lightbulb,
    color: "text-yellow-400"
  },
  {
    title: "Verre",
    path: "/verre",
    icon: Glasses,
    color: "text-purple-400"
  },
  {
    title: "Barman",
    path: "/barman",
    icon: Coffee,
    color: "text-green-400"
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const backdropVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0
    },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.1 + (i * 0.1),
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  return (
    <>
      {/* Menu Button */}
      <motion.div 
        className="fixed top-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={toggleMenu}
          className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </button>
      </motion.div>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 right-0 h-full w-80 bg-white/10 backdrop-blur-2xl border-l border-white/20 z-40 shadow-2xl"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 right-10 w-32 h-32 bg-primary-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative h-full flex flex-col p-8 pt-20">
              {/* Header */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-heading text-gradient mb-2">
                  Navigation
                </h2>
                <p className="text-white/60 text-sm">
                  Explorez l'univers des cocktails
                </p>
              </motion.div>

              {/* Navigation Items */}
              <div className="flex-1 space-y-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                    >
                      <Link
                        to={item.path}
                        className={`group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${
                          isActive 
                            ? 'bg-white/20 border border-white/30 shadow-lg' 
                            : 'hover:bg-white/10 border border-transparent hover:border-white/20'
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          isActive ? 'bg-white/20' : ''
                        }`}>
                          <Icon 
                            size={24} 
                            className={`${item.color} ${isActive ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`} 
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className={`text-lg font-medium transition-colors duration-300 ${
                            isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                          }`}>
                            {item.title}
                          </h3>
                        </div>

                        {/* Active indicator */}
                        {isActive && (
                          <motion.div
                            className="w-2 h-2 bg-primary-400 rounded-full"
                            layoutId="activeIndicator"
                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer */}
              <motion.div
                className="mt-8 pt-6 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-white/60 text-sm text-center">
                  Cocktail Party
                </p>
                <p className="text-white/40 text-xs text-center mt-1">
                  L'art de la mixologie
                </p>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
