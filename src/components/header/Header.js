import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Wrench, BookOpen, Glasses, ChefHat } from "lucide-react";
import logo1 from "../../images/logos/cocktail-logo.png";
import "./Header.css";

const navigation = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Matériel", href: "/materiel", icon: Wrench },
  { name: "Conseils", href: "/conseils", icon: BookOpen },
  { name: "Verres", href: "/verre", icon: Glasses },
  { name: "Barman", href: "/barman", icon: ChefHat },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`header-fixed ${scrolled ? 'header-glass' : 'header-transparent'}`}
      >
        <nav className="container-custom">
          <div className="header-nav">
            {/* Logo */}
            <Link to="/" className="logo-container">
              <motion.img
                src={logo1}
                alt="Cocktail Party"
                className="logo-img"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <div className="logo-text">
                <h1 className="logo-title">
                  Cocktail Party
                </h1>
                <p className="logo-subtitle">
                  L'art du cocktail
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link ${isActive ? 'nav-link-active' : 'nav-link-inactive'}`}
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="nav-link-active-bg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mobile-nav"
            >
              <div className="container-custom mobile-nav-content">
                <div className="mobile-nav-list">
                  {navigation.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.href}
                          className={`mobile-nav-link ${isActive ? 'mobile-nav-link-active' : 'mobile-nav-link-inactive'}`}
                        >
                          <Icon size={20} />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;
